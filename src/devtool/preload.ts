/**
 * DevTool preload, registered on the default session by src/main/devtool.ts.
 * It runs in every frame of that session, so it only mounts in the top frame
 * of chart tabs (flagged with TAB_FLAG by the `devtool/tab-flag` patch).
 *
 * Tabs are sandboxed with context isolation: this script shares the DOM with
 * tradingview.com but not its JavaScript, and exposes nothing to the page.
 */
import { ipcRenderer } from 'electron';
import type { MockAccountPatch, MockAccountStatus } from '../common/mock.js';
import { CHANNELS, type DevToolAction, type DevToolInfo, type IpcRecord, TAB_FLAG } from '../common/protocol.js';
import { mountPanel } from './panel.js';

let listener: ((event: unknown, records: IpcRecord[]) => void) | undefined;

function start(): void {
	mountPanel({
		info: () => ipcRenderer.invoke(CHANNELS.info) as Promise<DevToolInfo>,
		action: (action: DevToolAction) => ipcRenderer.invoke(CHANNELS.action, action),
		clear: () => ipcRenderer.invoke(CHANNELS.clear),
		localAccount: () => ipcRenderer.invoke(CHANNELS.localAccount) as Promise<MockAccountStatus>,
		setLocalAccount: (patch: MockAccountPatch) =>
			ipcRenderer.invoke(CHANNELS.localAccountSet, patch) as Promise<MockAccountStatus>,
		subscribe(onRecords) {
			if (listener) {
				return;
			}
			listener = (_event, records) => onRecords(records);
			ipcRenderer.on(CHANNELS.records, listener);
			ipcRenderer.send(CHANNELS.subscribe);
		},
		unsubscribe() {
			if (!listener) {
				return;
			}
			ipcRenderer.removeListener(CHANNELS.records, listener);
			listener = undefined;
			ipcRenderer.send(CHANNELS.unsubscribe);
		},
	});
}

if (window.top === window && process.argv.includes(TAB_FLAG)) {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', start, { once: true });
	} else {
		start();
	}
}
