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
// src/common/format.ts
function formatBytes(bytes) {
	if (bytes === void 0) return "";
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(1)} MB`;
}
function formatDuration(ms) {
	if (ms === void 0) return "";
	if (ms < 1) return "<1ms";
	if (ms < 1e3) return `${Math.round(ms)}ms`;
	return `${(ms / 1e3).toFixed(ms < 1e4 ? 2 : 1)}s`;
}
/** Arrow showing the direction of a message: renderer → main or main → renderer. */
var KIND_LABELS = {
	send: "→ send",
	sync: "→ sync",
	invoke: "→ invoke",
	push: "← push"
};
/**
* Case-insensitive match against channel and kind. Space-separated terms must
* all match; a leading `-` excludes (e.g. `tvd -sentry`).
*/
function matchesFilter(record, filter) {
	const haystack = `${record.channel} ${record.kind}`.toLowerCase();
	for (const term of filter.toLowerCase().split(/\s+/)) {
		if (term === "" || term === "-") continue;
		if (term.startsWith("-")) {
			if (haystack.includes(term.slice(1))) return false;
		} else if (!haystack.includes(term)) return false;
	}
	return true;
}
/** Appends `incoming` to `records`, keeping at most `limit` of the newest. */
function appendBounded(records, incoming, limit) {
	const next = records.concat(incoming);
	return next.length > limit ? next.slice(next.length - limit) : next;
}
/** Vertical position of the pill, as a fraction of the window height. */
function clampTop(top) {
	return Math.min(.92, Math.max(.08, Number.isFinite(top) ? top : .62));
}
/** Channels ranked by message count, most frequent first. */
function topChannels(records, count) {
	const counts = /* @__PURE__ */ new Map();
	for (const r of records) counts.set(r.channel, (counts.get(r.channel) ?? 0) + 1);
	return [...counts].map(([channel, n]) => ({
		channel,
		n
	})).sort((a, b) => b.n - a.n || a.channel.localeCompare(b.channel)).slice(0, count);
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
var PLAN_LABELS = {
	free: "Free",
	essential: "Essential",
	plus: "Plus",
	premium: "Premium",
	expert: "Expert",
	ultimate: "Ultimate"
};
// src/devtool/styles.ts
/** DEV pill and panel (tweakpane-style, dark in every theme). Scoped to the panel's shadow root. */
var STYLES = `
:host {
	all: initial;
	--dev-bg: rgb(32 33 38 / 0.97);
	--dev-bg-2: rgb(255 255 255 / 0.06);
	--dev-bg-3: rgb(255 255 255 / 0.11);
	--dev-fg: rgb(240 241 245);
	--dev-fg-2: rgb(240 241 245 / 0.62);
	--dev-line: rgb(255 255 255 / 0.08);
	--dev-accent: rgb(120 190 255);
	font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu, sans-serif;
	font-size: 11.5px;
	color: var(--dev-fg);
}

button, input { font: inherit; color: inherit; }
button:focus-visible, input:focus-visible { outline: 2px solid var(--dev-accent); outline-offset: 1px; }

.pill {
	position: fixed;
	right: 0;
	z-index: 2147483646;
	padding: 6px 5px 6px 7px;
	border: 1px solid var(--dev-line);
	border-right: none;
	border-radius: 8px 0 0 8px;
	background: var(--dev-bg);
	color: var(--dev-fg-2);
	font: 600 10px / 1 ui-monospace, SFMono-Regular, Menlo, monospace;
	letter-spacing: 0.06em;
	writing-mode: vertical-rl;
	cursor: grab;
	opacity: 0.55;
	box-shadow: 0 2px 10px rgb(0 0 0 / 0.25);
	transform: translateY(-50%);
	transition: opacity 120ms, color 120ms;
	touch-action: none;
}
.pill:hover, .pill[aria-expanded="true"], .pill:focus-visible { opacity: 1; color: var(--dev-accent); }
.pill:active { cursor: grabbing; }

.panel {
	position: fixed;
	top: 44px;
	right: 34px;
	z-index: 2147483647;
	display: flex;
	flex-direction: column;
	width: 320px;
	max-height: calc(100vh - 88px);
	border: 1px solid var(--dev-line);
	border-radius: 8px;
	background: var(--dev-bg);
	box-shadow: 0 12px 40px rgb(0 0 0 / 0.4);
	backdrop-filter: blur(12px);
}
.panel[hidden] { display: none; }

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 7px 6px 7px 10px;
	border-bottom: 1px solid var(--dev-line);
	color: var(--dev-fg-2);
	font-weight: 600;
}

.close {
	display: grid;
	place-items: center;
	width: 22px;
	height: 22px;
	padding: 0;
	border: none;
	border-radius: 4px;
	background: none;
	color: var(--dev-fg-2);
	font-size: 15px;
	line-height: 1;
	cursor: pointer;
}
.close:hover { background: var(--dev-bg-3); color: var(--dev-fg); }

.scroll { overflow-y: auto; padding: 4px; }

.folder + .folder { margin-top: 4px; }
.folder-title {
	display: flex;
	align-items: center;
	gap: 6px;
	width: 100%;
	padding: 5px 6px;
	border: none;
	border-radius: 4px;
	background: var(--dev-bg-2);
	font-weight: 600;
	text-align: left;
	cursor: pointer;
}
.folder-title:hover { background: var(--dev-bg-3); }
.chevron { display: inline-block; width: 10px; color: var(--dev-fg-2); transition: transform 120ms; }
.folder-title[aria-expanded="true"] .chevron { transform: rotate(90deg); }
.trailing { margin-left: auto; color: var(--dev-fg-2); font-weight: 400; }
.folder-body { display: flex; flex-direction: column; gap: 3px; padding: 6px 4px 4px 10px; }
.folder-body[hidden] { display: none; }

.row { display: grid; grid-template-columns: 76px minmax(0, 1fr); align-items: center; gap: 8px; min-height: 22px; }
.label { overflow: hidden; color: var(--dev-fg-2); text-overflow: ellipsis; white-space: nowrap; }
.value {
	overflow: hidden;
	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	font-size: 11px;
	text-overflow: ellipsis;
	white-space: nowrap;
	user-select: text;
}
.muted { color: var(--dev-fg-2); }

.input {
	box-sizing: border-box;
	width: 100%;
	height: 22px;
	padding: 0 6px;
	border: 1px solid transparent;
	border-radius: 4px;
	outline: none;
	background: var(--dev-bg-2);
}
.input:hover { background: var(--dev-bg-3); }
.input:focus { border-color: var(--dev-accent); }

/* Fields laid out as a row (label + control), unlike the full-width filter input. */
.row .input { min-width: 0; }
.select {
	padding: 0 2px;
	border-color: transparent;
	color: var(--dev-fg);
	appearance: auto;
}
.select option { background: var(--dev-bg); color: var(--dev-fg); }

.buttons { display: flex; gap: 4px; }
.buttons .button { flex: 1; }
.button {
	margin-top: 2px;
	padding: 5px 8px;
	border: none;
	border-radius: 4px;
	background: var(--dev-bg-3);
	cursor: pointer;
}
.button:hover:not(:disabled) { background: rgb(255 255 255 / 0.17); }
.button:disabled { opacity: 0.45; cursor: default; }
.button[data-danger] { color: rgb(255 140 140); }

.status { display: inline-flex; align-items: center; gap: 5px; }
.status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--dev-fg-2); }
.status[data-on]::before { background: rgb(80 210 130); }

.note { margin: 2px 0 0; color: var(--dev-fg-2); font-size: 10.5px; line-height: 1.4; }

.records {
	display: flex;
	flex-direction: column;
	gap: 1px;
	max-height: 240px;
	margin: 0;
	padding: 0;
	overflow-y: auto;
	list-style: none;
	font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
	font-size: 10.5px;
}
.records li {
	display: grid;
	grid-template-columns: 54px 52px minmax(0, 1fr) auto;
	gap: 6px;
	padding: 2px 4px;
	border-radius: 3px;
	user-select: text;
}
.records li:hover { background: var(--dev-bg-2); }
.records li[data-failed] .channel { color: rgb(255 140 140); }
.records .channel { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.records .kind-push { color: rgb(200 170 255); }
`;
// src/devtool/panel.ts
/**
* The DEV pill and panel: app info, session, a live IPC log of TradingView's
* `tvd:*` traffic, and tab utilities. Plain DOM inside a closed shadow root:
* the preload runs in an isolated world, so the page's React isn't available,
* and the shadow root keeps TradingView's styles out.
*/
var OPEN_KEY = "tvre.devtool.open";
var POSITION_KEY = "tvre.devtool.top";
var FOLDERS_KEY = "tvre.devtool.folders";
var FILTER_KEY = "tvre.devtool.filter";
/** Records kept in the panel; the main process keeps its own (longer) history. */
var PANEL_LIMIT = 500;
/** Where the shell's signed-in user comes from. */
var SESSION_SOURCE_LABELS = {
	cookie: "TradingView cookie",
	local: "Local account",
	none: "Signed out"
};
function readJson(key, fallback) {
	try {
		const value = localStorage.getItem(key);
		return value === null ? fallback : JSON.parse(value);
	} catch {
		return fallback;
	}
}
function writeJson(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function h(tag, props = {}, ...children) {
	const el = document.createElement(tag);
	for (const [key, value] of Object.entries(props)) if (typeof value === "function") el.addEventListener(key.slice(2).toLowerCase(), value);
	else if (value === true) el.setAttribute(key, "");
	else if (typeof value === "string") el.setAttribute(key, value);
	for (const child of children) if (child !== null && child !== void 0 && child !== false) el.append(child);
	return el;
}
var timeFormat = new Intl.DateTimeFormat(void 0, {
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false
});
function row(label, value, title) {
	return h("div", { class: "row" }, h("span", { class: "label" }, label), h("span", {
		class: "value",
		title: title ?? ""
	}, value));
}
function button(label, onClick, opts = {}) {
	return h("button", {
		type: "button",
		class: "button",
		"data-danger": opts.danger === true,
		onClick
	}, label);
}
/** Text input that commits on Enter or blur; Escape reverts. Empty input reverts too. */
function textField(label, value, onCommit) {
	const input = h("input", {
		class: "input",
		type: "text",
		spellcheck: "false",
		value,
		"aria-label": label
	});
	const commit = () => {
		const next = input.value.trim();
		if (next === value) return;
		if (next === "") input.value = value;
		else onCommit(next);
	};
	input.addEventListener("blur", commit);
	input.addEventListener("keydown", (e) => {
		if (e.key === "Enter") input.blur();
		else if (e.key === "Escape") {
			input.value = value;
			input.blur();
		}
	});
	return h("div", { class: "row" }, h("span", { class: "label" }, label), input);
}
function selectField(label, value, options, onChange) {
	const select = h("select", {
		class: "input select",
		"aria-label": label
	});
	for (const option of options) {
		const el = h("option", { value: option }, option);
		el.selected = option === value;
		select.append(el);
	}
	select.addEventListener("change", () => onChange(select.value));
	return h("div", { class: "row" }, h("span", { class: "label" }, label), select);
}
function mountPanel(host) {
	const container = document.createElement("tradingview-re-devtool");
	const root = container.attachShadow({ mode: "closed" });
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(STYLES);
	root.adoptedStyleSheets = [sheet];
	let open = readJson(OPEN_KEY, false);
	let top = clampTop(readJson(POSITION_KEY, .62));
	let closedFolders = readJson(FOLDERS_KEY, []);
	let filter = readJson(FILTER_KEY, "");
	let records = [];
	let paused = false;
	let info;
	const run = (action) => void host.action(action).catch((err) => console.error(`[tradingview-re] devtool ${action}`, err));
	function folder(title, trailing, body) {
		const isOpen = () => !closedFolders.includes(title);
		const toggle = h("button", {
			type: "button",
			class: "folder-title"
		}, h("span", {
			class: "chevron",
			"aria-hidden": "true"
		}, "›"), h("span", {}, title), trailing);
		const sync = () => {
			toggle.setAttribute("aria-expanded", String(isOpen()));
			body.hidden = !isOpen();
		};
		toggle.addEventListener("click", () => {
			closedFolders = isOpen() ? [...closedFolders, title] : closedFolders.filter((t) => t !== title);
			writeJson(FOLDERS_KEY, closedFolders);
			sync();
		});
		body.classList.add("folder-body");
		sync();
		return h("section", { class: "folder" }, toggle, body);
	}
	const appBody = h("div");
	const sessionTrailing = h("span", { class: "trailing" });
	const sessionBody = h("div");
	function renderInfo() {
		if (!info) {
			appBody.replaceChildren(h("p", { class: "note" }, "Loading…"));
			return;
		}
		const { app, paths, session, env, tab } = info;
		appBody.replaceChildren(row("Version", `${app.version}`, app.buildDate), row("Electron", app.electron), row("Chromium", app.chrome), row("Node", `${app.node} · ${app.arch}`), row("Mode", `${app.dev ? "bun run dev (preload reloads)" : "Built"}${app.quiet ? " · quiet" : ""}`), row("Profile", paths.userData, paths.userData));
		const status = h("span", {
			class: "status",
			"data-on": session.signedIn
		}, session.signedIn ? "Signed in" : "Signed out");
		sessionTrailing.replaceChildren(status);
		const envRows = Object.entries(env).map(([k, v]) => row(k.replace(/^TVD_|^TARGET_/, ""), v, k));
		sessionBody.replaceChildren(row("Host", session.host, session.host), row("Cookie", session.cookieName), row("User", SESSION_SOURCE_LABELS[session.source]), row("Tab", `#${tab.webContentsId}`, tab.url), row("URL", new URL(tab.url).pathname, tab.url), ...envRows, ...envRows.length === 0 ? [h("p", { class: "note" }, "No TVD_* overrides set. TVD_HOST points the app at another host.")] : []);
	}
	const accountTrailing = h("span", { class: "trailing" });
	const accountBody = h("div");
	let localStatus;
	/** Signature of what the Account folder shows; avoids rebuilding fields (and focus) needlessly. */
	let accountShown = "";
	function renderAccount() {
		if (!localStatus) {
			accountBody.replaceChildren(h("p", { class: "note" }, "Loading…"));
			return;
		}
		const { account, applied, enabled, disabledByEnv } = localStatus;
		const signature = JSON.stringify([
			account,
			applied,
			enabled,
			disabledByEnv
		]);
		if (signature === accountShown || accountBody.contains(root.activeElement)) return;
		accountShown = signature;
		accountTrailing.replaceChildren(h("span", {
			class: "status",
			"data-on": applied
		}, disabledByEnv ? "Disabled by env" : !enabled ? "Signed out" : applied ? "Active" : "Applying…"));
		const patch = (next) => {
			host.setLocalAccount(next).then((status) => {
				localStatus = status;
				renderAccount();
				setTimeout(() => void refreshInfo(), 400);
			}).catch((err) => console.error("[tradingview-re] devtool local account", err));
		};
		const plans = [...MOCK_PLANS];
		accountBody.replaceChildren(textField("Name", account.username, (username) => patch({ username })), textField("Email", account.email, (email) => patch({ email })), selectField("Plan", PLAN_LABELS[account.plan], plans.map((p) => PLAN_LABELS[p]), (label) => {
			const plan = plans.find((p) => PLAN_LABELS[p] === label);
			if (plan) patch({ plan });
		}), selectField("Theme", account.theme, ["dark", "light"], (theme) => patch({ theme })), textField("Avatar", account.avatarUrl, (avatarUrl) => patch({ avatarUrl })), button(enabled ? "Sign out" : "Sign in locally", () => patch({ enabled: !enabled })), h("p", { class: "note" }, disabledByEnv ? "TVRE_LOCAL_ACCOUNT=off was set at launch; the shell uses its normal TradingView sign-in." : !enabled ? "Signed out. “Sign in locally” (or the shell’s own Sign in) uses this account, no TradingView login." : !applied ? "Signing in… the shell picks the account up on its next poll." : "Shell app state (windows, tabs, settings) is stored under TVUserStorage/id-tvre-local-user."));
	}
	root.addEventListener("focusout", () => setTimeout(renderAccount, 0));
	async function refreshInfo() {
		try {
			info = await host.info();
			localStatus = info.session.local;
		} catch (err) {
			console.error("[tradingview-re] devtool info", err);
		}
		renderInfo();
		renderAccount();
	}
	const ipcTrailing = h("span", { class: "trailing" }, "0");
	const list = h("ul", {
		class: "records",
		"aria-label": "Recorded IPC messages",
		"aria-live": "off"
	});
	const summary = h("p", { class: "note" });
	const pauseButton = button("Pause", () => {
		paused = !paused;
		pauseButton.textContent = paused ? "Resume" : "Pause";
	});
	const filterInput = h("input", {
		class: "input",
		type: "search",
		value: filter,
		spellcheck: "false",
		placeholder: "Filter: tvd -sentry",
		"aria-label": "Filter IPC messages"
	});
	filterInput.addEventListener("input", () => {
		filter = filterInput.value;
		writeJson(FILTER_KEY, filter);
		renderRecords();
	});
	function renderRecords() {
		const shown = records.filter((r) => matchesFilter(r, filter));
		ipcTrailing.textContent = filter ? `${shown.length} / ${records.length}` : records.length.toLocaleString();
		list.replaceChildren(...shown.slice(-80).reverse().map((r) => h("li", {
			title: `${r.channel} · webContents #${r.webContentsId}`,
			"data-failed": r.failed === true
		}, h("span", { class: "muted" }, timeFormat.format(r.at)), h("span", { class: `kind-${r.kind}` }, KIND_LABELS[r.kind]), h("span", { class: "channel" }, r.channel), h("span", { class: "muted" }, [formatDuration(r.durationMs), formatBytes(r.bytes)].filter(Boolean).join(" · ")))));
		if (shown.length === 0) list.replaceChildren(h("li", {}, h("span", { class: "muted" }, records.length ? "No match." : "Nothing recorded yet.")));
		const busiest = topChannels(records, 3);
		summary.textContent = busiest.length ? `Busiest: ${busiest.map((c) => `${c.channel} ×${c.n}`).join(", ")}` : "";
	}
	const ipcBody = h("div", {}, filterInput, list, summary, h("div", { class: "buttons" }, pauseButton, button("Clear", () => {
		records = [];
		renderRecords();
		host.clear();
	}, { danger: true })), h("p", { class: "note" }, "Every window, not just this tab. Argument values are never recorded, only their size."));
	const tabBody = h("div", {}, h("div", { class: "buttons" }, button("Tab DevTools", () => run("toggle-devtools")), button("Shell DevTools", () => run("shell-devtools"))), h("div", { class: "buttons" }, button("Reload", () => run("reload")), button("Hard reload", () => run("hard-reload"))), h("div", { class: "buttons" }, button("Profile folder", () => run("reveal-profile")), button("Logs folder", () => run("reveal-logs"))), button("Copy diagnostics", () => run("copy-diagnostics")));
	const closeButton = h("button", {
		type: "button",
		class: "close",
		"aria-label": "Close"
	}, "×");
	const panel = h("div", {
		class: "panel",
		role: "dialog",
		"aria-label": "Developer tools"
	}, h("div", { class: "header" }, h("span", {}, "TradingView RE · DevTool"), closeButton), h("div", { class: "scroll" }, folder("App", h("span", { class: "trailing" }), appBody), folder("Session", sessionTrailing, sessionBody), folder("Account", accountTrailing, accountBody), folder("IPC", ipcTrailing, ipcBody), folder("Tab", h("span", { class: "trailing" }), tabBody)));
	const pill = h("button", {
		type: "button",
		class: "pill",
		"aria-label": "Developer tools",
		title: "Developer tools (drag to move)"
	}, "DEV");
	function setOpen(next) {
		open = next;
		writeJson(OPEN_KEY, open);
		panel.hidden = !open;
		pill.setAttribute("aria-expanded", String(open));
		if (open) {
			refreshInfo();
			host.subscribe(onRecords);
		} else {
			host.unsubscribe();
			records = [];
		}
	}
	function onRecords(batch) {
		if (paused) return;
		records = appendBounded(records, batch, PANEL_LIMIT);
		renderRecords();
	}
	closeButton.addEventListener("click", () => {
		setOpen(false);
		pill.focus();
	});
	window.addEventListener("keydown", (e) => {
		if (open && e.key === "Escape" && e.composedPath().includes(container)) {
			setOpen(false);
			pill.focus();
		}
	});
	let drag;
	pill.style.top = `${top * 100}%`;
	pill.addEventListener("pointerdown", (e) => {
		pill.setPointerCapture(e.pointerId);
		drag = {
			startY: e.clientY,
			startTop: top,
			moved: false
		};
	});
	pill.addEventListener("pointermove", (e) => {
		if (drag === void 0 || !drag.moved && Math.abs(e.clientY - drag.startY) < 4) return;
		drag.moved = true;
		pill.style.top = `${clampTop(drag.startTop + (e.clientY - drag.startY) / window.innerHeight) * 100}%`;
	});
	let suppressClick = false;
	pill.addEventListener("pointerup", (e) => {
		const d = drag;
		drag = void 0;
		suppressClick = d?.moved === true;
		if (d?.moved) {
			top = clampTop(d.startTop + (e.clientY - d.startY) / window.innerHeight);
			writeJson(POSITION_KEY, top);
		}
	});
	pill.addEventListener("click", () => {
		if (suppressClick) suppressClick = false;
		else setOpen(!open);
	});
	root.append(pill, panel);
	renderInfo();
	renderAccount();
	renderRecords();
	setOpen(open);
	const attach = () => {
		if (!container.isConnected) document.documentElement.append(container);
	};
	attach();
	new MutationObserver(attach).observe(document.documentElement, { childList: true });
}
// src/devtool/preload.ts
/**
* DevTool preload, registered on the default session by src/main/devtool.ts.
* It runs in every frame of that session, so it only mounts in the top frame
* of chart tabs (flagged with TAB_FLAG by the `devtool/tab-flag` patch).
*
* Tabs are sandboxed with context isolation: this script shares the DOM with
* tradingview.com but not its JavaScript, and exposes nothing to the page.
*/
var listener;
function start() {
	mountPanel({
		info: () => electron.ipcRenderer.invoke(CHANNELS.info),
		action: (action) => electron.ipcRenderer.invoke(CHANNELS.action, action),
		clear: () => electron.ipcRenderer.invoke(CHANNELS.clear),
		localAccount: () => electron.ipcRenderer.invoke(CHANNELS.localAccount),
		setLocalAccount: (patch) => electron.ipcRenderer.invoke(CHANNELS.localAccountSet, patch),
		subscribe(onRecords) {
			if (listener) return;
			listener = (_event, records) => onRecords(records);
			electron.ipcRenderer.on(CHANNELS.records, listener);
			electron.ipcRenderer.send(CHANNELS.subscribe);
		},
		unsubscribe() {
			if (!listener) return;
			electron.ipcRenderer.removeListener(CHANNELS.records, listener);
			listener = void 0;
			electron.ipcRenderer.send(CHANNELS.unsubscribe);
		}
	});
}
if (window.top === window && process.argv.includes("--tvre-devtool")) {
	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
	else start();
}
