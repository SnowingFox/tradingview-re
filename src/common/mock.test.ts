import { describe, expect, it } from 'vitest';
import {
	applyPatch,
	DEFAULT_ACCOUNT,
	MOCK_PLANS,
	normalizeAccount,
	PLAN_INFO,
	PLAN_LABELS,
	profileFor,
	shellIdentity,
} from './mock.js';

describe('PLAN_INFO', () => {
	it('covers every plan', () => {
		expect(Object.keys(PLAN_INFO).sort()).toEqual([...MOCK_PLANS].sort());
	});

	it('marks only Free as non-pro', () => {
		// UserService treats pro_plan === "" as basic / not pro; anything else is pro.
		for (const plan of MOCK_PLANS) {
			expect(PLAN_INFO[plan].proPlan === '').toBe(plan === 'free');
		}
	});

	it('uses the badge names the window menu maps to labels', () => {
		// app/app/menu/bundle.js switches on these exact strings.
		expect(PLAN_INFO.essential.badge).toBe('pro:pro');
		expect(PLAN_INFO.plus.badge).toBe('pro:pro_realtime');
		expect(PLAN_INFO.premium.badge).toBe('pro:pro_premium');
		expect(PLAN_INFO.expert.badge).toBe('pro:pro_expert');
		expect(PLAN_INFO.ultimate.badge).toBe('pro:pro_premium_expert');
	});

	it('has a label for every plan', () => {
		expect(Object.keys(PLAN_LABELS).sort()).toEqual([...MOCK_PLANS].sort());
	});
});

describe('profileFor', () => {
	it('builds the response UserService parses', () => {
		const profile = profileFor({ ...DEFAULT_ACCOUNT, username: 'ada', plan: 'ultimate', avatarUrl: 'https://x/y.png' });
		expect(profile).toEqual({
			id: 'tvre-local-user',
			username: 'ada',
			theme: 'dark',
			avatars: { small: 'https://x/y.png' },
			pro_plan: 'pro_premium_expert',
			badges: [{ name: 'pro:pro_premium_expert' }],
		});
	});

	it('has no badges on Free', () => {
		expect(profileFor({ ...DEFAULT_ACCOUNT, plan: 'free' }).badges).toEqual([]);
		expect(profileFor({ ...DEFAULT_ACCOUNT, plan: 'free' }).pro_plan).toBe('');
	});
});

describe('normalizeAccount', () => {
	it('falls back to defaults for junk', () => {
		expect(normalizeAccount(undefined)).toEqual(DEFAULT_ACCOUNT);
		expect(normalizeAccount('nope')).toEqual(DEFAULT_ACCOUNT);
		expect(normalizeAccount({ plan: 'platinum', theme: 'sepia', username: 42 })).toEqual({
			...DEFAULT_ACCOUNT,
			theme: 'dark',
		});
	});

	it('keeps valid fields and drops unknown ones', () => {
		const normalized = normalizeAccount({ enabled: true, username: 'ada', email: 'a@b.c', plan: 'plus', extra: 1 });
		expect(normalized).toEqual({
			enabled: true,
			username: 'ada',
			email: 'a@b.c',
			plan: 'plus',
			theme: 'dark',
			avatarUrl: '',
		});
	});

	it('rejects an empty username', () => {
		expect(normalizeAccount({ username: '' }).username).toBe(DEFAULT_ACCOUNT.username);
	});

	it('signs in locally unless the stored state says otherwise', () => {
		expect(normalizeAccount(undefined).enabled).toBe(true);
		expect(normalizeAccount({}).enabled).toBe(true);
		expect(normalizeAccount({ enabled: true }).enabled).toBe(true);
		expect(normalizeAccount({ enabled: false }).enabled).toBe(false);
	});
});

describe('applyPatch', () => {
	it('merges and normalizes', () => {
		expect(applyPatch(DEFAULT_ACCOUNT, { enabled: true, plan: 'free' })).toEqual({
			...DEFAULT_ACCOUNT,
			enabled: true,
			plan: 'free',
		});
	});

	it('ignores invalid values instead of storing them', () => {
		const patched = applyPatch(DEFAULT_ACCOUNT, { plan: 'platinum' as never });
		expect(patched.plan).toBe(DEFAULT_ACCOUNT.plan);
	});
});

describe('shellIdentity', () => {
	it('changes when the shell-visible fields change', () => {
		const base = shellIdentity(DEFAULT_ACCOUNT);
		expect(shellIdentity({ ...DEFAULT_ACCOUNT, email: 'a@b.c' })).toBe(base);
		expect(shellIdentity({ ...DEFAULT_ACCOUNT, username: 'other' })).not.toBe(base);
		expect(shellIdentity({ ...DEFAULT_ACCOUNT, plan: 'plus' })).not.toBe(base);
		expect(shellIdentity({ ...DEFAULT_ACCOUNT, avatarUrl: 'https://x' })).not.toBe(base);
	});
});
