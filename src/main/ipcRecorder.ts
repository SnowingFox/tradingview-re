/**
 * Records TradingView's IPC traffic for the DevTool's IPC folder: channel,
 * direction, sender, argument size and (for invoke) handler latency. Argument
 * values are never stored: `tvd:set-credentials` and the session-storage
 * channels carry secrets.
 */
import { app, ipcMain, type WebContents } from 'electron';
import { CHANNELS, type IpcKind, type IpcRecord, OWN_CHANNEL_PREFIX } from '../common/protocol.js';

const HISTORY_LIMIT = 1000;
/** Records replayed to a panel when it subscribes. */
const REPLAY_LIMIT = 300;
const FLUSH_INTERVAL_MS = 250;

const history: IpcRecord[] = [];
let pending: IpcRecord[] = [];
let seq = 0;
const subscribers = new Map<number, WebContents>();
let flushTimer: ReturnType<typeof setTimeout> | undefined;

function sizeOf(args: unknown[]): number | undefined {
	if (args.length === 0) {
		return 0;
	}
	try {
		return Buffer.byteLength(JSON.stringify(args) ?? '');
	} catch {
		// Structured-clone-only values (e.g. ArrayBuffers in cycles) don't stringify.
		return undefined;
	}
}

function record(channel: string, kind: IpcKind, webContentsId: number, extra: Partial<IpcRecord> = {}): void {
	if (channel.startsWith(OWN_CHANNEL_PREFIX)) {
		return;
	}
	const entry: IpcRecord = { seq: ++seq, at: Date.now(), channel, kind, webContentsId, ...extra };
	history.push(entry);
	if (history.length > HISTORY_LIMIT) {
		history.splice(0, history.length - HISTORY_LIMIT);
	}
	if (subscribers.size === 0) {
		return;
	}
	pending.push(entry);
	if (flushTimer === undefined) {
		flushTimer = setTimeout(flush, FLUSH_INTERVAL_MS);
	}
}

function flush(): void {
	flushTimer = undefined;
	const batch = pending;
	pending = [];
	for (const [id, contents] of subscribers) {
		if (contents.isDestroyed()) {
			subscribers.delete(id);
		} else {
			contents.send(CHANNELS.records, batch);
		}
	}
}

/** Wraps ipcMain.handle / handleOnce so invoke calls are timed. */
function wrapHandlers(): void {
	for (const method of ['handle', 'handleOnce'] as const) {
		const original = ipcMain[method].bind(ipcMain);
		ipcMain[method] = (channel, listener) =>
			original(channel, async (event, ...args) => {
				const start = performance.now();
				const extra = { bytes: sizeOf(args) };
				try {
					const result = await listener(event, ...args);
					record(channel, 'invoke', event.sender.id, { ...extra, durationMs: performance.now() - start });
					return result;
				} catch (err) {
					record(channel, 'invoke', event.sender.id, {
						...extra,
						durationMs: performance.now() - start,
						failed: true,
					});
					throw err;
				}
			});
	}
}

/** send / sendSync arrive as webContents events; outgoing pushes go through contents.send. */
function watchWebContents(contents: WebContents): void {
	contents.on('ipc-message', (_event, channel, ...args) =>
		record(channel, 'send', contents.id, { bytes: sizeOf(args) }),
	);
	contents.on('ipc-message-sync', (_event, channel, ...args) =>
		record(channel, 'sync', contents.id, { bytes: sizeOf(args) }),
	);
	const send = contents.send.bind(contents);
	contents.send = (channel: string, ...args: unknown[]) => {
		record(channel, 'push', contents.id, { bytes: sizeOf(args) });
		send(channel, ...args);
	};
}

export function installIpcRecorder(): void {
	wrapHandlers();
	app.on('web-contents-created', (_event, contents) => watchWebContents(contents));
}

export function subscribe(contents: WebContents): void {
	subscribers.set(contents.id, contents);
	contents.once('destroyed', () => subscribers.delete(contents.id));
	contents.send(CHANNELS.records, history.slice(-REPLAY_LIMIT));
}

export function unsubscribe(contents: WebContents): void {
	subscribers.delete(contents.id);
}

export function clearHistory(): void {
	history.length = 0;
	pending = [];
}
