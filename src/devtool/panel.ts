/**
 * The DEV pill and panel: app info, session, a live IPC log of TradingView's
 * `tvd:*` traffic, and tab utilities. Plain DOM inside a closed shadow root:
 * the preload runs in an isolated world, so the page's React isn't available,
 * and the shadow root keeps TradingView's styles out.
 */
import {
	appendBounded,
	clampTop,
	formatBytes,
	formatDuration,
	KIND_LABELS,
	matchesFilter,
	topChannels,
} from '../common/format.js';
import {
	MOCK_PLANS,
	type MockAccount,
	type MockAccountPatch,
	type MockAccountStatus,
	PLAN_LABELS,
} from '../common/mock.js';
import type { DevToolAction, DevToolInfo, IpcRecord } from '../common/protocol.js';
import { STYLES } from './styles.js';

const OPEN_KEY = 'tvre.devtool.open';
const POSITION_KEY = 'tvre.devtool.top';
const FOLDERS_KEY = 'tvre.devtool.folders';
const FILTER_KEY = 'tvre.devtool.filter';

/** Records kept in the panel; the main process keeps its own (longer) history. */
const PANEL_LIMIT = 500;
/** Rows rendered in the IPC list. */
const VISIBLE_ROWS = 80;

/** Where the shell's signed-in user comes from. */
const SESSION_SOURCE_LABELS: Record<DevToolInfo['session']['source'], string> = {
	cookie: 'TradingView cookie',
	local: 'Local account',
	none: 'Signed out',
};

export interface PanelHost {
	info(): Promise<DevToolInfo>;
	action(action: DevToolAction): Promise<void>;
	subscribe(onRecords: (records: IpcRecord[]) => void): void;
	unsubscribe(): void;
	clear(): Promise<void>;
	localAccount(): Promise<MockAccountStatus>;
	setLocalAccount(patch: MockAccountPatch): Promise<MockAccountStatus>;
}

function readJson<T>(key: string, fallback: T): T {
	try {
		const value = localStorage.getItem(key);
		return value === null ? fallback : (JSON.parse(value) as T);
	} catch {
		return fallback;
	}
}

function writeJson(key: string, value: unknown): void {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}

type Child = Node | string | null | undefined | false;

function h<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	props: Partial<Record<string, string | boolean | ((e: Event) => void)>> = {},
	...children: Child[]
): HTMLElementTagNameMap[K] {
	const el = document.createElement(tag);
	for (const [key, value] of Object.entries(props)) {
		if (typeof value === 'function') {
			el.addEventListener(key.slice(2).toLowerCase(), value as EventListener);
		} else if (value === true) {
			el.setAttribute(key, '');
		} else if (typeof value === 'string') {
			el.setAttribute(key, value);
		}
	}
	for (const child of children) {
		if (child !== null && child !== undefined && child !== false) {
			el.append(child);
		}
	}
	return el;
}

const timeFormat = new Intl.DateTimeFormat(undefined, {
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	hour12: false,
});

function row(label: string, value: Child, title?: string): HTMLElement {
	return h(
		'div',
		{ class: 'row' },
		h('span', { class: 'label' }, label),
		h('span', { class: 'value', title: title ?? '' }, value),
	);
}

function button(label: string, onClick: () => void, opts: { danger?: boolean } = {}): HTMLButtonElement {
	return h('button', { type: 'button', class: 'button', 'data-danger': opts.danger === true, onClick }, label);
}

/** Text input that commits on Enter or blur; Escape reverts. Empty input reverts too. */
function textField(label: string, value: string, onCommit: (value: string) => void): HTMLElement {
	const input = h('input', {
		class: 'input',
		type: 'text',
		spellcheck: 'false',
		value,
		'aria-label': label,
	});
	const commit = () => {
		const next = input.value.trim();
		if (next === value) {
			return;
		}
		if (next === '') {
			input.value = value;
		} else {
			onCommit(next);
		}
	};
	input.addEventListener('blur', commit);
	input.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			input.blur();
		} else if (e.key === 'Escape') {
			input.value = value;
			input.blur();
		}
	});
	return h('div', { class: 'row' }, h('span', { class: 'label' }, label), input);
}

function selectField(label: string, value: string, options: string[], onChange: (value: string) => void): HTMLElement {
	const select = h('select', { class: 'input select', 'aria-label': label });
	for (const option of options) {
		const el = h('option', { value: option }, option);
		el.selected = option === value;
		select.append(el);
	}
	select.addEventListener('change', () => onChange(select.value));
	return h('div', { class: 'row' }, h('span', { class: 'label' }, label), select);
}

export function mountPanel(host: PanelHost): void {
	const container = document.createElement('tradingview-re-devtool');
	const root = container.attachShadow({ mode: 'closed' });
	const sheet = new CSSStyleSheet();
	sheet.replaceSync(STYLES);
	root.adoptedStyleSheets = [sheet];

	let open = readJson(OPEN_KEY, false);
	let top = clampTop(readJson(POSITION_KEY, 0.62));
	let closedFolders = readJson<string[]>(FOLDERS_KEY, []);
	let filter = readJson(FILTER_KEY, '');
	let records: IpcRecord[] = [];
	let paused = false;
	let info: DevToolInfo | undefined;

	const run = (action: DevToolAction) =>
		void host.action(action).catch((err) => console.error(`[tradingview-re] devtool ${action}`, err));

	// Folders: a title button toggling a body; the open/closed set persists.
	function folder(title: string, trailing: HTMLElement, body: HTMLElement): HTMLElement {
		const isOpen = () => !closedFolders.includes(title);
		const toggle = h(
			'button',
			{ type: 'button', class: 'folder-title' },
			h('span', { class: 'chevron', 'aria-hidden': 'true' }, '›'),
			h('span', {}, title),
			trailing,
		);
		const sync = () => {
			toggle.setAttribute('aria-expanded', String(isOpen()));
			body.hidden = !isOpen();
		};
		toggle.addEventListener('click', () => {
			closedFolders = isOpen() ? [...closedFolders, title] : closedFolders.filter((t) => t !== title);
			writeJson(FOLDERS_KEY, closedFolders);
			sync();
		});
		body.classList.add('folder-body');
		sync();
		return h('section', { class: 'folder' }, toggle, body);
	}

	// App / Session: rendered whenever info arrives.
	const appBody = h('div');
	const sessionTrailing = h('span', { class: 'trailing' });
	const sessionBody = h('div');

	function renderInfo(): void {
		if (!info) {
			appBody.replaceChildren(h('p', { class: 'note' }, 'Loading…'));
			return;
		}
		const { app, paths, session, env, tab } = info;
		appBody.replaceChildren(
			row('Version', `${app.version}`, app.buildDate),
			row('Electron', app.electron),
			row('Chromium', app.chrome),
			row('Node', `${app.node} · ${app.arch}`),
			row('Mode', `${app.dev ? 'bun run dev (preload reloads)' : 'Built'}${app.quiet ? ' · quiet' : ''}`),
			row('Profile', paths.userData, paths.userData),
		);
		const status = h(
			'span',
			{ class: 'status', 'data-on': session.signedIn },
			session.signedIn ? 'Signed in' : 'Signed out',
		);
		sessionTrailing.replaceChildren(status);
		const envRows = Object.entries(env).map(([k, v]) => row(k.replace(/^TVD_|^TARGET_/, ''), v, k));
		sessionBody.replaceChildren(
			row('Host', session.host, session.host),
			row('Cookie', session.cookieName),
			row('User', SESSION_SOURCE_LABELS[session.source]),
			row('Tab', `#${tab.webContentsId}`, tab.url),
			row('URL', new URL(tab.url).pathname, tab.url),
			...envRows,
			...(envRows.length === 0
				? [h('p', { class: 'note' }, 'No TVD_* overrides set. TVD_HOST points the app at another host.')]
				: []),
		);
	}

	// Account: the local user the desktop shell signs in as (see src/common/mock.ts).
	const accountTrailing = h('span', { class: 'trailing' });
	const accountBody = h('div');
	let localStatus: MockAccountStatus | undefined;
	/** Signature of what the Account folder shows; avoids rebuilding fields (and focus) needlessly. */
	let accountShown = '';

	function renderAccount(): void {
		if (!localStatus) {
			accountBody.replaceChildren(h('p', { class: 'note' }, 'Loading…'));
			return;
		}
		const { account, applied, enabled, disabledByEnv } = localStatus;
		const signature = JSON.stringify([account, applied, enabled, disabledByEnv]);
		// The shell reports "applied" a moment after a change; a rebuild then would
		// drop the caret from a field the user is still editing.
		if (signature === accountShown || accountBody.contains(root.activeElement)) {
			return;
		}
		accountShown = signature;
		accountTrailing.replaceChildren(
			h(
				'span',
				{ class: 'status', 'data-on': applied },
				disabledByEnv ? 'Disabled by env' : !enabled ? 'Signed out' : applied ? 'Active' : 'Applying…',
			),
		);
		const patch = (next: MockAccountPatch) => {
			void host
				.setLocalAccount(next)
				.then((status) => {
					localStatus = status;
					renderAccount();
					// The shell polls its user every 100ms; re-read info after that.
					setTimeout(() => void refreshInfo(), 400);
				})
				.catch((err) => console.error('[tradingview-re] devtool local account', err));
		};
		const plans = [...MOCK_PLANS];
		accountBody.replaceChildren(
			textField('Name', account.username, (username) => patch({ username })),
			textField('Email', account.email, (email) => patch({ email })),
			selectField(
				'Plan',
				PLAN_LABELS[account.plan],
				plans.map((p) => PLAN_LABELS[p]),
				(label) => {
					const plan = plans.find((p) => PLAN_LABELS[p] === label);
					if (plan) {
						patch({ plan });
					}
				},
			),
			selectField('Theme', account.theme, ['dark', 'light'], (theme) =>
				patch({ theme: theme as MockAccount['theme'] }),
			),
			textField('Avatar', account.avatarUrl, (avatarUrl) => patch({ avatarUrl })),
			button(enabled ? 'Sign out' : 'Sign in locally', () => patch({ enabled: !enabled })),
			h(
				'p',
				{ class: 'note' },
				disabledByEnv
					? 'TVRE_LOCAL_ACCOUNT=off was set at launch; the shell uses its normal TradingView sign-in.'
					: !enabled
						? 'Signed out. “Sign in locally” (or the shell’s own Sign in) uses this account, no TradingView login.'
						: !applied
							? 'Signing in… the shell picks the account up on its next poll.'
							: 'Shell app state (windows, tabs, settings) is stored under TVUserStorage/id-tvre-local-user.',
			),
		);
	}

	// A deferred rebuild (skipped while a field had focus) runs when focus leaves.
	root.addEventListener('focusout', () => setTimeout(renderAccount, 0));

	async function refreshInfo(): Promise<void> {
		try {
			info = await host.info();
			localStatus = info.session.local;
		} catch (err) {
			console.error('[tradingview-re] devtool info', err);
		}
		renderInfo();
		renderAccount();
	}

	// IPC: filter, live list, top channels.
	const ipcTrailing = h('span', { class: 'trailing' }, '0');
	const list = h('ul', { class: 'records', 'aria-label': 'Recorded IPC messages', 'aria-live': 'off' });
	const summary = h('p', { class: 'note' });
	const pauseButton = button('Pause', () => {
		paused = !paused;
		pauseButton.textContent = paused ? 'Resume' : 'Pause';
	});
	const filterInput = h('input', {
		class: 'input',
		type: 'search',
		value: filter,
		spellcheck: 'false',
		placeholder: 'Filter: tvd -sentry',
		'aria-label': 'Filter IPC messages',
	});
	filterInput.addEventListener('input', () => {
		filter = filterInput.value;
		writeJson(FILTER_KEY, filter);
		renderRecords();
	});

	function renderRecords(): void {
		const shown = records.filter((r) => matchesFilter(r, filter));
		ipcTrailing.textContent = filter ? `${shown.length} / ${records.length}` : records.length.toLocaleString();
		list.replaceChildren(
			...shown
				.slice(-VISIBLE_ROWS)
				.reverse()
				.map((r) =>
					h(
						'li',
						{ title: `${r.channel} · webContents #${r.webContentsId}`, 'data-failed': r.failed === true },
						h('span', { class: 'muted' }, timeFormat.format(r.at)),
						h('span', { class: `kind-${r.kind}` }, KIND_LABELS[r.kind]),
						h('span', { class: 'channel' }, r.channel),
						h(
							'span',
							{ class: 'muted' },
							[formatDuration(r.durationMs), formatBytes(r.bytes)].filter(Boolean).join(' · '),
						),
					),
				),
		);
		if (shown.length === 0) {
			list.replaceChildren(
				h('li', {}, h('span', { class: 'muted' }, records.length ? 'No match.' : 'Nothing recorded yet.')),
			);
		}
		const busiest = topChannels(records, 3);
		summary.textContent = busiest.length ? `Busiest: ${busiest.map((c) => `${c.channel} ×${c.n}`).join(', ')}` : '';
	}

	const ipcBody = h(
		'div',
		{},
		filterInput,
		list,
		summary,
		h(
			'div',
			{ class: 'buttons' },
			pauseButton,
			button(
				'Clear',
				() => {
					records = [];
					renderRecords();
					void host.clear();
				},
				{ danger: true },
			),
		),
		h('p', { class: 'note' }, 'Every window, not just this tab. Argument values are never recorded, only their size.'),
	);

	const tabBody = h(
		'div',
		{},
		h(
			'div',
			{ class: 'buttons' },
			button('Tab DevTools', () => run('toggle-devtools')),
			button('Shell DevTools', () => run('shell-devtools')),
		),
		h(
			'div',
			{ class: 'buttons' },
			button('Reload', () => run('reload')),
			button('Hard reload', () => run('hard-reload')),
		),
		h(
			'div',
			{ class: 'buttons' },
			button('Profile folder', () => run('reveal-profile')),
			button('Logs folder', () => run('reveal-logs')),
		),
		button('Copy diagnostics', () => run('copy-diagnostics')),
	);

	const closeButton = h('button', { type: 'button', class: 'close', 'aria-label': 'Close' }, '×');
	const panel = h(
		'div',
		{ class: 'panel', role: 'dialog', 'aria-label': 'Developer tools' },
		h('div', { class: 'header' }, h('span', {}, 'TradingView RE · DevTool'), closeButton),
		h(
			'div',
			{ class: 'scroll' },
			folder('App', h('span', { class: 'trailing' }), appBody),
			folder('Session', sessionTrailing, sessionBody),
			folder('Account', accountTrailing, accountBody),
			folder('IPC', ipcTrailing, ipcBody),
			folder('Tab', h('span', { class: 'trailing' }), tabBody),
		),
	);

	const pill = h(
		'button',
		{
			type: 'button',
			class: 'pill',
			'aria-label': 'Developer tools',
			title: 'Developer tools (drag to move)',
		},
		'DEV',
	);

	function setOpen(next: boolean): void {
		open = next;
		writeJson(OPEN_KEY, open);
		panel.hidden = !open;
		pill.setAttribute('aria-expanded', String(open));
		if (open) {
			void refreshInfo();
			host.subscribe(onRecords);
		} else {
			// Nothing is pushed to a closed panel.
			host.unsubscribe();
			records = [];
		}
	}

	function onRecords(batch: IpcRecord[]): void {
		if (paused) {
			return;
		}
		records = appendBounded(records, batch, PANEL_LIMIT);
		renderRecords();
	}

	closeButton.addEventListener('click', () => {
		setOpen(false);
		pill.focus();
	});
	window.addEventListener('keydown', (e) => {
		if (open && e.key === 'Escape' && e.composedPath().includes(container)) {
			setOpen(false);
			pill.focus();
		}
	});

	// Drag the pill vertically; a click without movement toggles the panel.
	let drag: { startY: number; startTop: number; moved: boolean } | undefined;
	pill.style.top = `${top * 100}%`;
	pill.addEventListener('pointerdown', (e) => {
		pill.setPointerCapture(e.pointerId);
		drag = { startY: e.clientY, startTop: top, moved: false };
	});
	pill.addEventListener('pointermove', (e) => {
		if (drag === undefined || (!drag.moved && Math.abs(e.clientY - drag.startY) < 4)) {
			return;
		}
		drag.moved = true;
		pill.style.top = `${clampTop(drag.startTop + (e.clientY - drag.startY) / window.innerHeight) * 100}%`;
	});
	// The click that follows a drag's pointerup must not toggle the panel.
	let suppressClick = false;
	pill.addEventListener('pointerup', (e) => {
		const d = drag;
		drag = undefined;
		suppressClick = d?.moved === true;
		if (d?.moved) {
			top = clampTop(d.startTop + (e.clientY - d.startY) / window.innerHeight);
			writeJson(POSITION_KEY, top);
		}
	});
	// Keyboard activation and plain clicks both arrive as click events.
	pill.addEventListener('click', () => {
		if (suppressClick) {
			suppressClick = false;
		} else {
			setOpen(!open);
		}
	});

	root.append(pill, panel);
	renderInfo();
	renderAccount();
	renderRecords();
	setOpen(open);

	// TradingView is a SPA that rewrites the document; put the panel back if it's dropped.
	const attach = () => {
		if (!container.isConnected) {
			document.documentElement.append(container);
		}
	};
	attach();
	new MutationObserver(attach).observe(document.documentElement, { childList: true });
}
