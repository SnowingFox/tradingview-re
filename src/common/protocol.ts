/**
 * IPC contract between the DevTool main module (src/main) and the DevTool
 * preload (src/devtool). Channels use the `tvd-re:` prefix so the recorder can
 * tell them apart from TradingView's own `tvd:*` traffic.
 */

import type { MockAccountStatus } from './mock.js';

export const CHANNELS = {
	/** invoke → DevToolInfo */
	info: 'tvd-re:devtool:info',
	/** invoke(DevToolAction) → void */
	action: 'tvd-re:devtool:action',
	/** send: start pushing IpcRecord batches to this webContents */
	subscribe: 'tvd-re:devtool:ipc-subscribe',
	/** send: stop pushing */
	unsubscribe: 'tvd-re:devtool:ipc-unsubscribe',
	/** push (main → renderer): IpcRecord[] */
	records: 'tvd-re:devtool:ipc-records',
	/** invoke → void: clear the recorded history */
	clear: 'tvd-re:devtool:ipc-clear',
	/** invoke → MockAccountStatus: the local account the shell is signed in as */
	localAccount: 'tvd-re:devtool:local-account',
	/** invoke(MockAccountPatch) → MockAccountStatus */
	localAccountSet: 'tvd-re:devtool:local-account-set',
} as const;

/** Command-line flag the patched tab options add, so the preload only mounts in chart tabs. */
export const TAB_FLAG = '--tvre-devtool';

export const OWN_CHANNEL_PREFIX = 'tvd-re:';

/**
 * How a message crossed the process boundary:
 * send / sync / invoke are renderer → main, push is main → renderer.
 */
export type IpcKind = 'send' | 'sync' | 'invoke' | 'push';

export interface IpcRecord {
	seq: number;
	/** epoch ms */
	at: number;
	channel: string;
	kind: IpcKind;
	webContentsId: number;
	/** Serialized size of the arguments; the arguments themselves are never recorded (credentials go over IPC). */
	bytes?: number;
	/** invoke only: time until the handler settled */
	durationMs?: number;
	/** invoke only: the handler threw or rejected */
	failed?: boolean;
}

export interface DevToolInfo {
	app: {
		name: string;
		version: string;
		buildDate?: string;
		electron: string;
		chrome: string;
		node: string;
		arch: string;
		/** running under `bun run dev` (preload rebuilds reload the tab) */
		dev: boolean;
		/** running under `--tvre-quiet` (windows stay offscreen, no focus stealing) */
		quiet: boolean;
	};
	paths: {
		userData: string;
		logs: string;
		app: string;
	};
	session: {
		host: string;
		cookieName: string;
		/** whether the session cookie is present; its value never leaves the main process */
		signedIn: boolean;
		/** which source the shell's user came from */
		source: 'cookie' | 'local' | 'none';
		/** the DevTool's local account */
		local: MockAccountStatus;
	};
	/** TradingView's own environment overrides that are set for this launch */
	env: Record<string, string>;
	tab: {
		webContentsId: number;
		url: string;
	};
}

export type DevToolAction =
	| 'toggle-devtools'
	| 'shell-devtools'
	| 'reload'
	| 'hard-reload'
	| 'reveal-profile'
	| 'reveal-logs'
	| 'copy-diagnostics';

export type { MockAccount, MockAccountPatch, MockAccountStatus, MockPlan } from './mock.js';
