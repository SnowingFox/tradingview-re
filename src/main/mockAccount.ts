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
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { app } from 'electron';
import {
	applyPatch,
	DEFAULT_ACCOUNT,
	type MockAccount,
	type MockAccountPatch,
	type MockAccountStatus,
	type MockSession,
	normalizeAccount,
	profileFor,
	SESSION_PREFIX,
	type ShellProfile,
} from '../common/mock.js';

/** `TVRE_LOCAL_ACCOUNT=off` leaves the shell's own account handling alone for this launch. */
const ENV_KILL = 'TVRE_LOCAL_ACCOUNT';
const STORE_FILE = path.join('devtool', 'local-account.json');

/** What the patched UserService calls. */
export interface LocalUserHook {
	/** The local account may be used in this launch (`TVRE_LOCAL_ACCOUNT` is not off). */
	available(): boolean;
	/** The shell should use the local account rather than the session cookie. */
	active(): boolean;
	/** A shell sign-in was requested (`doSignIn`): turn the local account on; the user poll applies it. */
	signIn(): void;
	/** The profile response body, as UserService parses it. */
	profile(): ShellProfile;
	/** Stand-in for the cookie-derived session; its value changes when the account is edited. */
	session(): MockSession;
}

declare global {
	var __tvreMockUser: LocalUserHook | undefined;
}

class LocalAccountStore {
	private readonly file = path.join(app.getPath('userData'), STORE_FILE);
	private readonly disabledByEnv = process.env[ENV_KILL] === 'off';
	private account: MockAccount;
	/** Increments on every edit; part of the session value, so the shell re-reads. */
	private revision = 0;
	/** Revision the shell last asked for, i.e. what it is showing now. */
	private appliedRevision: number | undefined;

	constructor() {
		this.account = this.load();
	}

	private load(): MockAccount {
		try {
			const raw = JSON.parse(readFileSync(this.file, 'utf8')) as { account?: unknown; revision?: number };
			this.revision = typeof raw.revision === 'number' ? raw.revision : 0;
			return normalizeAccount(raw.account);
		} catch {
			return DEFAULT_ACCOUNT;
		}
	}

	private persist(): void {
		try {
			mkdirSync(path.dirname(this.file), { recursive: true });
			const body = { version: 1, account: this.account, revision: this.revision };
			writeFileSync(this.file, `${JSON.stringify(body, null, 2)}\n`);
		} catch (err) {
			console.error('[tradingview-re] could not store the local account', err);
		}
	}

	status(): MockAccountStatus {
		return {
			account: this.account,
			enabled: !this.disabledByEnv && this.account.enabled,
			applied: !this.disabledByEnv && this.account.enabled && this.appliedRevision === this.revision,
			disabledByEnv: this.disabledByEnv,
		};
	}

	/** Applies a patch, persists it, and lets the shell re-read the profile. */
	set(patch: MockAccountPatch): MockAccountStatus {
		const next = applyPatch(this.account, patch);
		if (JSON.stringify(next) !== JSON.stringify(this.account)) {
			this.revision++;
			this.account = next;
			this.persist();
		}
		return this.status();
	}

	/** The hook the patched bundle talks to. */
	readonly hook: LocalUserHook = {
		available: () => !this.disabledByEnv,
		active: () => !this.disabledByEnv && this.account.enabled,
		signIn: () => {
			if (!this.account.enabled) {
				this.set({ enabled: true });
			}
		},
		profile: () => {
			this.appliedRevision = this.revision;
			return profileFor(this.account);
		},
		session: () => ({ value: `${SESSION_PREFIX}${this.revision}`, revision: this.revision, mock: true }),
	};
}

let store: LocalAccountStore | undefined;

function instance(): LocalAccountStore {
	store ??= new LocalAccountStore();
	return store;
}

/**
 * Publishes the hook for the patched bundle. Called from the DevTool loader at
 * require time, before the app's entry module runs, so UserService finds it as
 * soon as its polling loop starts.
 */
export function installLocalAccount(): void {
	globalThis.__tvreMockUser = instance().hook;
}

export function localAccountStatus(): MockAccountStatus {
	return instance().status();
}

export function setLocalAccount(patch: MockAccountPatch): MockAccountStatus {
	return instance().set(patch);
}
