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
	clear: "tvd-re:devtool:ipc-clear",
	/** invoke → MockAccountStatus: the local account the shell is signed in as */
	localAccount: "tvd-re:devtool:local-account",
	/** invoke(MockAccountPatch) → MockAccountStatus */
	localAccountSet: "tvd-re:devtool:local-account-set"
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
// src/common/mock.ts
var MOCK_PLANS = [
	"free",
	"essential",
	"plus",
	"premium",
	"expert",
	"ultimate"
];
/**
* What the shell derives from `pro_plan` and `badges` (app/index.js, module 12279):
*   * `pro_plan === ""` → claim `user:plan` is "basic" and `user:pro` is absent;
*   * any other value → claim `user:pro` is true;
*   * the first badge whose name starts with "pro" becomes `user:pro_badge_name`,
*     which the window menu maps to a plan label (app/app/menu/bundle.js).
*/
var PLAN_INFO = {
	free: {
		proPlan: "",
		badge: ""
	},
	essential: {
		proPlan: "pro",
		badge: "pro:pro"
	},
	plus: {
		proPlan: "pro_realtime",
		badge: "pro:pro_realtime"
	},
	premium: {
		proPlan: "pro_premium",
		badge: "pro:pro_premium"
	},
	expert: {
		proPlan: "pro_expert",
		badge: "pro:pro_expert"
	},
	ultimate: {
		proPlan: "pro_premium_expert",
		badge: "pro:pro_premium_expert"
	}
};
var SESSION_PREFIX = "tvre-mock-session-";
/** The account is always this user, so its data lives in one TVUserStorage folder. */
var MOCK_USER_ID = "tvre-local-user";
var DEFAULT_ACCOUNT = {
	enabled: true,
	username: "tvre",
	email: "",
	plan: "premium",
	theme: "dark",
	avatarUrl: ""
};
/** The response UserService parses, built from the local account. */
function profileFor(account) {
	const info = PLAN_INFO[account.plan];
	return {
		id: MOCK_USER_ID,
		username: account.username,
		theme: account.theme,
		avatars: { small: account.avatarUrl },
		pro_plan: info.proPlan,
		badges: info.badge === "" ? [] : [{ name: info.badge }]
	};
}
function str(value, fallback) {
	return typeof value === "string" ? value : fallback;
}
/** Parses a stored value defensively; unknown fields fall back to the defaults. */
function normalizeAccount(value) {
	const raw = typeof value === "object" && value !== null ? value : {};
	const plan = MOCK_PLANS.includes(raw.plan) ? raw.plan : DEFAULT_ACCOUNT.plan;
	return {
		enabled: raw.enabled !== false,
		username: str(raw.username, DEFAULT_ACCOUNT.username) || DEFAULT_ACCOUNT.username,
		email: str(raw.email, DEFAULT_ACCOUNT.email),
		plan,
		theme: raw.theme === "light" ? "light" : "dark",
		avatarUrl: str(raw.avatarUrl, DEFAULT_ACCOUNT.avatarUrl)
	};
}
/** Merges a patch into `account` and normalizes the result. */
function applyPatch(account, patch) {
	return normalizeAccount({
		...account,
		...patch
	});
}
// src/main/mockAccount.ts
/**
* The DevTool's local account: the desktop shell signs in as this user instead
* of using a TradingView account, and everything it persists stays on disk.
*
* TradingView's shell resolves its own user in the main process, in
* UserService.updateCurrentUser() (app/index.js): it polls the session cookie,
* then `GET /api/v1/user/profile/me/`, and derives the claims it gates things
* on (`user:id`, `user:pro`, `user:plan`, `user:pro_badge_name`). The
* `mock/account` patch in build/patches makes that method ask
* `globalThis.__tvreMockUser` first, so this module can answer with a local
* profile instead — no network round-trip and no tradingview.com session.
*
* The first sign-in goes through the shell's own updateAuthentication(), so the
* usual sign-in work runs: app state is restored from, and saved to,
* `<userData>/TVUserStorage/id-<MOCK_USER_ID>/settings.json`. Later edits to the
* account only refresh the claims, because signing out and back in would reset
* the session's windows and tabs.
*
* The shell's own sign-in entry points (menu, platform request, first launch)
* are routed here too (the `mock/sign-in` patch), so they never open the
* welcome dialog or the browser. `TVRE_LOCAL_ACCOUNT=off` disables all of this
* for a launch and restores upstream behaviour.
*/
/** `TVRE_LOCAL_ACCOUNT=off` leaves the shell's own account handling alone for this launch. */
var ENV_KILL = "TVRE_LOCAL_ACCOUNT";
var STORE_FILE = node_path.default.join("devtool", "local-account.json");
var LocalAccountStore = class {
	file = node_path.default.join(electron.app.getPath("userData"), STORE_FILE);
	disabledByEnv = process.env[ENV_KILL] === "off";
	account;
	/** Increments on every edit; part of the session value, so the shell re-reads. */
	revision = 0;
	/** Revision the shell last asked for, i.e. what it is showing now. */
	appliedRevision;
	constructor() {
		this.account = this.load();
	}
	load() {
		try {
			const raw = JSON.parse((0, node_fs.readFileSync)(this.file, "utf8"));
			this.revision = typeof raw.revision === "number" ? raw.revision : 0;
			return normalizeAccount(raw.account);
		} catch {
			return DEFAULT_ACCOUNT;
		}
	}
	persist() {
		try {
			(0, node_fs.mkdirSync)(node_path.default.dirname(this.file), { recursive: true });
			const body = {
				version: 1,
				account: this.account,
				revision: this.revision
			};
			(0, node_fs.writeFileSync)(this.file, `${JSON.stringify(body, null, 2)}\n`);
		} catch (err) {
			console.error("[tradingview-re] could not store the local account", err);
		}
	}
	status() {
		return {
			account: this.account,
			enabled: !this.disabledByEnv && this.account.enabled,
			applied: !this.disabledByEnv && this.account.enabled && this.appliedRevision === this.revision,
			disabledByEnv: this.disabledByEnv
		};
	}
	/** Applies a patch, persists it, and lets the shell re-read the profile. */
	set(patch) {
		const next = applyPatch(this.account, patch);
		if (JSON.stringify(next) !== JSON.stringify(this.account)) {
			this.revision++;
			this.account = next;
			this.persist();
		}
		return this.status();
	}
	/** The hook the patched bundle talks to. */
	hook = {
		available: () => !this.disabledByEnv,
		active: () => !this.disabledByEnv && this.account.enabled,
		signIn: () => {
			if (!this.account.enabled) this.set({ enabled: true });
		},
		profile: () => {
			this.appliedRevision = this.revision;
			return profileFor(this.account);
		},
		session: () => ({
			value: `${SESSION_PREFIX}${this.revision}`,
			revision: this.revision,
			mock: true
		})
	};
};
var store;
function instance() {
	store ??= new LocalAccountStore();
	return store;
}
/**
* Publishes the hook for the patched bundle. Called from the DevTool loader at
* require time, before the app's entry module runs, so UserService finds it as
* soon as its polling loop starts.
*/
function installLocalAccount() {
	globalThis.__tvreMockUser = instance().hook;
}
function localAccountStatus() {
	return instance().status();
}
function setLocalAccount(patch) {
	return instance().set(patch);
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
/** `--tvre-quiet`: the launch stays off the desktop (see installQuietMode). */
var quiet = process.argv.includes("--tvre-quiet");
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
	const local = localAccountStatus();
	let cookie = false;
	try {
		cookie = (await contents.session.cookies.get({
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
			dev,
			quiet
		},
		paths: {
			userData: electron.app.getPath("userData"),
			logs: electron.app.getPath("logs"),
			app: electron.app.getAppPath()
		},
		session: {
			...target,
			signedIn: local.enabled || cookie,
			source: local.disabledByEnv ? cookie ? "cookie" : "none" : local.enabled ? "local" : cookie ? "cookie" : "none",
			local
		},
		env: launchEnv,
		tab: {
			webContentsId: contents.id,
			url: contents.getURL()
		}
	};
}
/** Applies a patch to the local account; the shell re-reads the profile on its next poll. */
function updateLocal(patch) {
	if (typeof patch !== "object" || patch === null || Array.isArray(patch)) throw new Error("local account patch must be an object");
	return setLocalAccount(patch);
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
	installLocalAccount();
	electron.ipcMain.handle(CHANNELS.info, info);
	electron.ipcMain.handle(CHANNELS.action, runAction);
	electron.ipcMain.handle(CHANNELS.clear, () => clearHistory());
	electron.ipcMain.handle(CHANNELS.localAccount, () => localAccountStatus());
	electron.ipcMain.handle(CHANNELS.localAccountSet, (_event, patch) => updateLocal(patch));
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
		if (quiet) installQuietMode();
	});
}
/**
* `--tvre-quiet` keeps a test launch off the desktop: the app runs as an
* accessory (no Dock activation, no menu-bar takeover), its windows are moved
* offscreen before they show, and `show()` / `focus()` are degraded to
* `showInactive()`. CDP keeps working, but the app never comes to the front,
* so automated checks don't steal the mouse and keyboard.
*/
function installQuietMode() {
	electron.app.setActivationPolicy("accessory");
	const keepOffscreen = (win) => {
		win.show = () => {
			if (!win.isVisible()) win.setPosition(-1e4, 0);
			win.showInactive();
		};
		win.focus = () => {};
	};
	for (const win of electron.BrowserWindow.getAllWindows()) keepOffscreen(win);
	electron.app.on("browser-window-created", (_event, win) => keepOffscreen(win));
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
