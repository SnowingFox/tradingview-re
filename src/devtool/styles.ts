/** DEV pill and panel (tweakpane-style, dark in every theme). Scoped to the panel's shadow root. */
export const STYLES = `
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
