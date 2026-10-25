/**
 * DevTool main-process module. Loaded by the `devtool/loader` patch before
 * TradingView's entry module runs (see build/patches), it:
 *
 *   * installs the IPC recorder (ipcMain wrappers must be in place before the
 *     app registers its handlers);
 *   * registers the DevTool preload on the default session, next to each tab's
 *     own platform-preload.js;
 *   * answers the panel's info / action requests.
 *
 * Under `bun run dev` (TVRE_DEV=1) a rebuilt preload reloads every tab that
 * shows the panel.
 */
import { existsSync, readFileSync, watch } from 'node:fs';
import path from 'node:path';
import {
	app,
	BrowserWindow,
	clipboard,
	type IpcMainInvokeEvent,
	ipcMain,
	type Session,
	session,
	shell,
	type WebContents,
} from 'electron';
import { CHANNELS, type DevToolAction, type DevToolInfo } from '../common/protocol.js';
import { clearHistory, installIpcRecorder, subscribe, unsubscribe } from './ipcRecorder.js';

const PRELOAD_ID = 'tradingview-re-devtool';
/** Environment overrides read by TradingView's Configuration.updateConfigFromEnvironment(). */
const TVD_ENV = ['TVD_HOST', 'TARGET_TVD_HOST', 'TVD_DEBUGMODE', 'TVD_SESSION_COOKIE', 'TVD_SENTRY_FORCE_UPLOAD'];

const dev = process.env.TVRE_DEV === '1';
/**
 * Overrides as set at launch. Read when this module loads: TradingView later
 * writes TVD_HOST into process.env itself.
 */
const launchEnv: Record<string, string> = Object.fromEntries(
	TVD_ENV.filter((k) => process.env[k] !== undefined).map((k) => [k, process.env[k]!]),
);
/** Tabs that have shown the panel (dev mode reloads them when the preload changes). */
const panels = new Map<number, WebContents>();

interface UpstreamConfig {
	urls?: { defaultHost?: string; cookieName?: string };
}

function readJson<T>(file: string): T | undefined {
	try {
		return JSON.parse(readFileSync(file, 'utf8')) as T;
	} catch {
		return undefined;
	}
}

/** Same precedence as TradingView: env override, then configs/config.json. */
function sessionTarget(): { host: string; cookieName: string } {
	const config = readJson<UpstreamConfig>(path.join(app.getAppPath(), 'configs/config.json'));
	return {
		host: launchEnv.TVD_HOST || config?.urls?.defaultHost || 'https://www.tradingview.com/',
		cookieName: launchEnv.TVD_SESSION_COOKIE || config?.urls?.cookieName || 'sessionid',
	};
}

async function info(event: IpcMainInvokeEvent): Promise<DevToolInfo> {
	const contents = event.sender;
	panels.set(contents.id, contents);
	contents.once('destroyed', () => panels.delete(contents.id));

	const pkg = readJson<{ productName?: string; buildDate?: number }>(path.join(app.getAppPath(), 'package.json'));
	const target = sessionTarget();
	let signedIn = false;
	try {
		const cookies = await contents.session.cookies.get({ url: target.host, name: target.cookieName });
		signedIn = cookies.length > 0;
	} catch {}

	return {
		app: {
			name: pkg?.productName ?? app.getName(),
			version: app.getVersion(),
			buildDate: pkg?.buildDate ? new Date(pkg.buildDate).toISOString() : undefined,
			electron: process.versions.electron ?? '',
			chrome: process.versions.chrome ?? '',
			node: process.versions.node,
			arch: process.arch,
			dev,
		},
		paths: { userData: app.getPath('userData'), logs: app.getPath('logs'), app: app.getAppPath() },
		session: { ...target, signedIn },
		env: launchEnv,
		tab: { webContentsId: contents.id, url: contents.getURL() },
	};
}

/** The BrowserWindow whose tab strip hosts this tab's BrowserView. */
function hostWindow(contents: WebContents): BrowserWindow | undefined {
	return (
		BrowserWindow.fromWebContents(contents) ??
		BrowserWindow.getAllWindows().find((w) => w.getBrowserViews().some((v) => v.webContents === contents))
	);
}

function toggleDevTools(contents: WebContents): void {
	if (contents.isDevToolsOpened()) {
		contents.closeDevTools();
	} else {
		// Tabs are BrowserViews; docked DevTools would be squeezed into the tab area.
		contents.openDevTools({ mode: 'detach' });
	}
}

async function runAction(event: IpcMainInvokeEvent, action: DevToolAction): Promise<void> {
	const contents = event.sender;
	switch (action) {
		case 'toggle-devtools':
			return toggleDevTools(contents);
		case 'shell-devtools': {
			const win = hostWindow(contents);
			if (win) {
				toggleDevTools(win.webContents);
			}
			return;
		}
		case 'reload':
			return contents.reload();
		case 'hard-reload':
			return contents.reloadIgnoringCache();
		case 'reveal-profile':
			await shell.openPath(app.getPath('userData'));
			return;
		case 'reveal-logs':
			await shell.openPath(app.getPath('logs'));
			return;
		case 'copy-diagnostics': {
			const data = await info(event);
			clipboard.writeText(JSON.stringify(data, null, 2));
			return;
		}
		default:
			throw new Error(`unknown DevTool action: ${String(action)}`);
	}
}

function watchPreload(file: string): void {
	let timer: ReturnType<typeof setTimeout> | undefined;
	watch(path.dirname(file), (_type, name) => {
		if (name !== path.basename(file)) {
			return;
		}
		clearTimeout(timer);
		timer = setTimeout(() => {
			for (const contents of panels.values()) {
				if (!contents.isDestroyed()) {
					contents.reload();
				}
			}
		}, 150);
	});
}

export function install(): void {
	installIpcRecorder();

	// Registered before TradingView's own handlers, and our channels are
	// excluded from the recorder by prefix.
	ipcMain.handle(CHANNELS.info, info);
	ipcMain.handle(CHANNELS.action, runAction);
	ipcMain.handle(CHANNELS.clear, () => clearHistory());
	ipcMain.on(CHANNELS.subscribe, (event) => subscribe(event.sender));
	ipcMain.on(CHANNELS.unsubscribe, (event) => unsubscribe(event.sender));

	const preload = path.join(app.getAppPath(), 'preload/devtool-preload.js');
	if (!existsSync(preload)) {
		console.error(`[tradingview-re] ${preload} is missing; run \`bun run build\``);
		return;
	}
	// whenReady callbacks run in registration order, so this lands before the
	// app creates its first tab.
	void app.whenReady().then(() => {
		keepPreloadRegistered(session.defaultSession, preload);
		if (dev) {
			watchPreload(preload);
		}
	});
}

/**
 * TradingView calls `defaultSession.setPreloads([target-tvd-host-preload.js])`
 * once its first window exists, which replaces every registered frame preload.
 * Wrap it so the DevTool preload is registered again afterwards.
 */
function keepPreloadRegistered(target: Session, preload: string): void {
	const register = () => {
		if (!target.getPreloadScripts().some((s) => s.id === PRELOAD_ID)) {
			target.registerPreloadScript({ id: PRELOAD_ID, type: 'frame', filePath: preload });
		}
	};
	const setPreloads = target.setPreloads.bind(target);
	target.setPreloads = (preloads: string[]) => {
		setPreloads(preloads.filter((p) => p !== preload));
		register();
	};
	register();
}
