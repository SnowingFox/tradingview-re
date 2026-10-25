/**
 * Mock account served to the desktop shell by the DevTool ("Sign in locally").
 *
 * TradingView's desktop shell resolves its own user in the main process:
 * UserService.updateCurrentUser() reads the session cookie, then
 * `GET /api/v1/user/profile/me/`, and derives the claims it gates things on
 * (`user:id`, `user:pro`, `user:plan`, `user:pro_badge_name`). The DevTool
 * answers that lookup locally, so the shell behaves as if an account had signed
 * in: the window menu shows the plan badge, and the authenticated-only shell
 * actions (new window, detach tab, drag tab out) stop asking for a paid plan.
 *
 * Scope: the desktop shell only. Charts, indicators, plans and Pine limits
 * inside tradingview.com are decided by TradingView's servers and are not
 * affected — the mock creates no tradingview.com session.
 *
 * No DOM, no Electron: shared by the main module, the preload and the tests.
 */

export type MockPlan = 'free' | 'essential' | 'plus' | 'premium' | 'expert' | 'ultimate';

export const MOCK_PLANS: readonly MockPlan[] = ['free', 'essential', 'plus', 'premium', 'expert', 'ultimate'];

export const PLAN_LABELS: Record<MockPlan, string> = {
	free: 'Free',
	essential: 'Essential',
	plus: 'Plus',
	premium: 'Premium',
	expert: 'Expert',
	ultimate: 'Ultimate',
};

/**
 * What the shell derives from `pro_plan` and `badges` (app/index.js, module 12279):
 *   * `pro_plan === ""` → claim `user:plan` is "basic" and `user:pro` is absent;
 *   * any other value → claim `user:pro` is true;
 *   * the first badge whose name starts with "pro" becomes `user:pro_badge_name`,
 *     which the window menu maps to a plan label (app/app/menu/bundle.js).
 */
export const PLAN_INFO: Record<MockPlan, { proPlan: string; badge: string }> = {
	free: { proPlan: '', badge: '' },
	essential: { proPlan: 'pro', badge: 'pro:pro' },
	plus: { proPlan: 'pro_realtime', badge: 'pro:pro_realtime' },
	premium: { proPlan: 'pro_premium', badge: 'pro:pro_premium' },
	expert: { proPlan: 'pro_expert', badge: 'pro:pro_expert' },
	ultimate: { proPlan: 'pro_premium_expert', badge: 'pro:pro_premium_expert' },
};

export interface MockAccount {
	/**
	 * Local sign-in state. On (the default) the shell signs in as this account
	 * instead of using a TradingView session; off leaves it anonymous (or, if a
	 * real session cookie exists, signed in to that account).
	 */
	enabled: boolean;
	username: string;
	/** DevTool only: the shell never receives it. */
	email: string;
	plan: MockPlan;
	theme: 'dark' | 'light';
	/** Menu avatar; empty means the initials fallback. */
	avatarUrl: string;
}

export type MockAccountPatch = Partial<MockAccount>;

export interface MockAccountStatus {
	account: MockAccount;
	/** The running shell has already read this exact account. */
	applied: boolean;
	/** The local account is in use (`account.enabled` and not disabled by the environment). */
	enabled: boolean;
	/** `TVRE_LOCAL_ACCOUNT=off` at launch: the stored account and the shell's sign-in are left alone. */
	disabledByEnv: boolean;
}

/** Mirrors the fields UserService reads from the profile response. */
export interface ShellProfile {
	id: string;
	username: string;
	theme: string;
	avatars: { small: string };
	pro_plan: string;
	badges: { name: string }[];
}

/**
 * Stand-in for the cookie's session object. UserService only checks that it
 * exists and compares its `value` to decide whether to re-read the profile, so
 * the value carries the revision: editing the account makes the shell re-read.
 * `mock` distinguishes it from a session that came from a real cookie.
 */
export interface MockSession {
	value: string;
	revision: number;
	mock: true;
}

export const SESSION_PREFIX = 'tvre-mock-session-';

/** The account is always this user, so its data lives in one TVUserStorage folder. */
export const MOCK_USER_ID = 'tvre-local-user';

export const DEFAULT_ACCOUNT: MockAccount = {
	enabled: true,
	username: 'tvre',
	email: '',
	plan: 'premium',
	theme: 'dark',
	avatarUrl: '',
};

/** The response UserService parses, built from the local account. */
export function profileFor(account: MockAccount): ShellProfile {
	const info = PLAN_INFO[account.plan];
	return {
		id: MOCK_USER_ID,
		username: account.username,
		theme: account.theme,
		avatars: { small: account.avatarUrl },
		pro_plan: info.proPlan,
		badges: info.badge === '' ? [] : [{ name: info.badge }],
	};
}

/** Fields the shell can see; editing any of them must reach the shell. */
export function shellIdentity(account: MockAccount): string {
	return JSON.stringify([account.username, account.plan, account.theme, account.avatarUrl]);
}

function str(value: unknown, fallback: string): string {
	return typeof value === 'string' ? value : fallback;
}

/** Parses a stored value defensively; unknown fields fall back to the defaults. */
export function normalizeAccount(value: unknown): MockAccount {
	const raw = typeof value === 'object' && value !== null ? (value as Record<string, unknown>) : {};
	const plan = MOCK_PLANS.includes(raw.plan as MockPlan) ? (raw.plan as MockPlan) : DEFAULT_ACCOUNT.plan;
	return {
		// Local sign-in is the default; only an explicit false signs out.
		enabled: raw.enabled !== false,
		username: str(raw.username, DEFAULT_ACCOUNT.username) || DEFAULT_ACCOUNT.username,
		email: str(raw.email, DEFAULT_ACCOUNT.email),
		plan,
		theme: raw.theme === 'light' ? 'light' : 'dark',
		avatarUrl: str(raw.avatarUrl, DEFAULT_ACCOUNT.avatarUrl),
	};
}

/** Merges a patch into `account` and normalizes the result. */
export function applyPatch(account: MockAccount, patch: MockAccountPatch): MockAccount {
	return normalizeAccount({ ...account, ...patch });
}
