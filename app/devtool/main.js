Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
// \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
let node_fs = require("node:fs");
let node_path = require("node:path");
node_path = __toESM(node_path, 1);
let electron = require("electron");
// src/common/protocol.ts
/**
* IPC contract between the DevTool main module (src/main) and the DevTool
* preload (src/devtool). Channels use the `tvd-re:` prefix so the recorder can
* tell them apart from TradingView's own `tvd:*` traffic.
*/
var CHANNELS = {
	/** invoke → DevToolInfo */
	info: "tvd-re:devtool:info",
	/** invoke(DevToolAction) → void */
	action: "tvd-re:devtool:action",
	/** send: start pushing IpcRecord batches to this webContents */
	subscribe: "tvd-re:devtool:ipc-subscribe",
	/** send: stop pushing */
	unsubscribe: "tvd-re:devtool:ipc-unsubscribe",
	/** push (main → renderer): IpcRecord[] */
	records: "tvd-re:devtool:ipc-records",
	/** invoke → void: clear the recorded history */
	clear: "tvd-re:devtool:ipc-clear"
};
// src/main/ipcRecorder.ts
/**
* Records TradingView's IPC traffic for the DevTool's IPC folder: channel,
* direction, sender, argument size and (for invoke) handler latency. Argument
* values are never stored: `tvd:set-credentials` and the session-storage
* channels carry secrets.
*/
var HISTORY_LIMIT = 1e3;
var FLUSH_INTERVAL_MS = 250;
var history = [];
var pending = [];
var seq = 0;
var subscribers = /* @__PURE__ */ new Map();
var flushTimer;
function sizeOf(args) {
	if (args.length === 0) return 0;
	try {
		return Buffer.byteLength(JSON.stringify(args) ?? "");
	} catch {
		return;
	}
}
function record(channel, kind, webContentsId, extra = {}) {
	if (channel.startsWith("tvd-re:")) return;
	const entry = {
		seq: ++seq,
		at: Date.now(),
		channel,
		kind,
		webContentsId,
		...extra
	};
	history.push(entry);
	if (history.length > HISTORY_LIMIT) history.splice(0, history.length - HISTORY_LIMIT);
	if (subscribers.size === 0) return;
	pending.push(entry);
	if (flushTimer === void 0) flushTimer = setTimeout(flush, FLUSH_INTERVAL_MS);
}
function flush() {
	flushTimer = void 0;
	const batch = pending;
	pending = [];
	for (const [id, contents] of subscribers) if (contents.isDestroyed()) subscribers.delete(id);
	else contents.send(CHANNELS.records, batch);
}
/** Wraps ipcMain.handle / handleOnce so invoke calls are timed. */
function wrapHandlers() {
	for (const method of ["handle", "handleOnce"]) {
		const original = electron.ipcMain[method].bind(electron.ipcMain);
		electron.ipcMain[method] = (channel, listener) => original(channel, async (event, ...args) => {
			const start = performance.now();
			const extra = { bytes: sizeOf(args) };
			try {
				const result = await listener(event, ...args);
				record(channel, "invoke", event.sender.id, {
					...extra,
					durationMs: performance.now() - start
				});
				return result;
			} catch (err) {
				record(channel, "invoke", event.sender.id, {
					...extra,
					durationMs: performance.now() - start,
					failed: true
				});
				throw err;
			}
		});
	}
}
/** send / sendSync arrive as webContents events; outgoing pushes go through contents.send. */
function watchWebContents(contents) {
	contents.on("ipc-message", (_event, channel, ...args) => record(channel, "send", contents.id, { bytes: sizeOf(args) }));
	contents.on("ipc-message-sync", (_event, channel, ...args) => record(channel, "sync", contents.id, { bytes: sizeOf(args) }));
	const send = contents.send.bind(contents);
	contents.send = (channel, ...args) => {
		record(channel, "push", contents.id, { bytes: sizeOf(args) });
		send(channel, ...args);
	};
}
function installIpcRecorder() {
	wrapHandlers();
	electron.app.on("web-contents-created", (_event, contents) => watchWebContents(contents));
}
function subscribe(contents) {
	subscribers.set(contents.id, contents);
	contents.once("destroyed", () => subscribers.delete(contents.id));
	contents.send(CHANNELS.records, history.slice(-300));
}
function unsubscribe(contents) {
	subscribers.delete(contents.id);
}
function clearHistory() {
	history.length = 0;
	pending = [];
}
// src/main/devtool.ts
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
var PRELOAD_ID = "tradingview-re-devtool";
/** Environment overrides read by TradingView's Configuration.updateConfigFromEnvironment(). */
var TVD_ENV = [
	"TVD_HOST",
	"TARGET_TVD_HOST",
	"TVD_DEBUGMODE",
	"TVD_SESSION_COOKIE",
	"TVD_SENTRY_FORCE_UPLOAD"
];
var dev = process.env.TVRE_DEV === "1";
/**
* Overrides as set at launch. Read when this module loads: TradingView later
* writes TVD_HOST into process.env itself.
*/
var launchEnv = Object.fromEntries(TVD_ENV.filter((k) => process.env[k] !== void 0).map((k) => [k, process.env[k]]));
/** Tabs that have shown the panel (dev mode reloads them when the preload changes). */
var panels = /* @__PURE__ */ new Map();
function readJson(file) {
	try {
		return JSON.parse((0, node_fs.readFileSync)(file, "utf8"));
	} catch {
		return;
	}
}
/** Same precedence as TradingView: env override, then configs/config.json. */
function sessionTarget() {
	const config = readJson(node_path.default.join(electron.app.getAppPath(), "configs/config.json"));
	return {
		host: launchEnv.TVD_HOST || config?.urls?.defaultHost || "https://www.tradingview.com/",
		cookieName: launchEnv.TVD_SESSION_COOKIE || config?.urls?.cookieName || "sessionid"
	};
}
async function info(event) {
	const contents = event.sender;
	panels.set(contents.id, contents);
	contents.once("destroyed", () => panels.delete(contents.id));
	const pkg = readJson(node_path.default.join(electron.app.getAppPath(), "package.json"));
	const target = sessionTarget();
	let signedIn = false;
	try {
		signedIn = (await contents.session.cookies.get({
			url: target.host,
			name: target.cookieName
		})).length > 0;
	} catch {}
	return {
		app: {
			name: pkg?.productName ?? electron.app.getName(),
			version: electron.app.getVersion(),
			buildDate: pkg?.buildDate ? new Date(pkg.buildDate).toISOString() : void 0,
			electron: process.versions.electron ?? "",
			chrome: process.versions.chrome ?? "",
			node: process.versions.node,
			arch: process.arch,
			dev
		},
		paths: {
			userData: electron.app.getPath("userData"),
			logs: electron.app.getPath("logs"),
			app: electron.app.getAppPath()
		},
		session: {
			...target,
			signedIn
		},
		env: launchEnv,
		tab: {
			webContentsId: contents.id,
			url: contents.getURL()
		}
	};
}
/** The BrowserWindow whose tab strip hosts this tab's BrowserView. */
function hostWindow(contents) {
	return electron.BrowserWindow.fromWebContents(contents) ?? electron.BrowserWindow.getAllWindows().find((w) => w.getBrowserViews().some((v) => v.webContents === contents));
}
function toggleDevTools(contents) {
	if (contents.isDevToolsOpened()) contents.closeDevTools();
	else contents.openDevTools({ mode: "detach" });
}
async function runAction(event, action) {
	const contents = event.sender;
	switch (action) {
		case "toggle-devtools": return toggleDevTools(contents);
		case "shell-devtools": {
			const win = hostWindow(contents);
			if (win) toggleDevTools(win.webContents);
			return;
		}
		case "reload": return contents.reload();
		case "hard-reload": return contents.reloadIgnoringCache();
		case "reveal-profile":
			await electron.shell.openPath(electron.app.getPath("userData"));
			return;
		case "reveal-logs":
			await electron.shell.openPath(electron.app.getPath("logs"));
			return;
		case "copy-diagnostics": {
			const data = await info(event);
			electron.clipboard.writeText(JSON.stringify(data, null, 2));
			return;
		}
		default: throw new Error(`unknown DevTool action: ${String(action)}`);
	}
}
function watchPreload(file) {
	let timer;
	(0, node_fs.watch)(node_path.default.dirname(file), (_type, name) => {
		if (name !== node_path.default.basename(file)) return;
		clearTimeout(timer);
		timer = setTimeout(() => {
			for (const contents of panels.values()) if (!contents.isDestroyed()) contents.reload();
		}, 150);
	});
}
function install() {
	installIpcRecorder();
	electron.ipcMain.handle(CHANNELS.info, info);
	electron.ipcMain.handle(CHANNELS.action, runAction);
	electron.ipcMain.handle(CHANNELS.clear, () => clearHistory());
	electron.ipcMain.on(CHANNELS.subscribe, (event) => subscribe(event.sender));
	electron.ipcMain.on(CHANNELS.unsubscribe, (event) => unsubscribe(event.sender));
	const preload = node_path.default.join(electron.app.getAppPath(), "preload/devtool-preload.js");
	if (!(0, node_fs.existsSync)(preload)) {
		console.error(`[tradingview-re] ${preload} is missing; run \`bun run build\``);
		return;
	}
	electron.app.whenReady().then(() => {
		keepPreloadRegistered(electron.session.defaultSession, preload);
		if (dev) watchPreload(preload);
	});
}
/**
* TradingView calls `defaultSession.setPreloads([target-tvd-host-preload.js])`
* once its first window exists, which replaces every registered frame preload.
* Wrap it so the DevTool preload is registered again afterwards.
*/
function keepPreloadRegistered(target, preload) {
	const register = () => {
		if (!target.getPreloadScripts().some((s) => s.id === PRELOAD_ID)) target.registerPreloadScript({
			id: PRELOAD_ID,
			type: "frame",
			filePath: preload
		});
	};
	const setPreloads = target.setPreloads.bind(target);
	target.setPreloads = (preloads) => {
		setPreloads(preloads.filter((p) => p !== preload));
		register();
	};
	register();
}
exports.install = install;
