import { describe, expect, it } from 'vitest';
import { appendBounded, clampTop, formatBytes, formatDuration, matchesFilter, topChannels } from './format.js';
import type { IpcRecord } from './protocol.js';

const rec = (channel: string, kind: IpcRecord['kind'] = 'send', seq = 0): IpcRecord => ({
	seq,
	at: 0,
	channel,
	kind,
	webContentsId: 1,
});

describe('formatBytes', () => {
	it('picks a unit', () => {
		expect(formatBytes(undefined)).toBe('');
		expect(formatBytes(512)).toBe('512 B');
		expect(formatBytes(2048)).toBe('2.0 KB');
		expect(formatBytes(3 * 1024 * 1024)).toBe('3.0 MB');
	});
});

describe('formatDuration', () => {
	it('scales from sub-millisecond to seconds', () => {
		expect(formatDuration(undefined)).toBe('');
		expect(formatDuration(0.2)).toBe('<1ms');
		expect(formatDuration(41.6)).toBe('42ms');
		expect(formatDuration(1234)).toBe('1.23s');
		expect(formatDuration(12_345)).toBe('12.3s');
	});
});

describe('matchesFilter', () => {
	it('matches every term, case-insensitively', () => {
		expect(matchesFilter(rec('tvd:get-theme', 'invoke'), 'THEME invoke')).toBe(true);
		expect(matchesFilter(rec('tvd:get-theme', 'send'), 'theme invoke')).toBe(false);
	});

	it('excludes terms with a leading dash', () => {
		expect(matchesFilter(rec('sentry-electron.scope'), 'tvd -sentry')).toBe(false);
		expect(matchesFilter(rec('sentry-electron.scope'), '-sentry')).toBe(false);
		expect(matchesFilter(rec('tvd:log'), '-sentry')).toBe(true);
	});

	it('ignores empty input', () => {
		expect(matchesFilter(rec('tvd:log'), '')).toBe(true);
		expect(matchesFilter(rec('tvd:log'), '  - ')).toBe(true);
	});
});

describe('appendBounded', () => {
	it('keeps the newest entries', () => {
		expect(appendBounded([1, 2, 3], [4, 5], 4)).toEqual([2, 3, 4, 5]);
		expect(appendBounded([1], [2], 4)).toEqual([1, 2]);
	});
});

describe('clampTop', () => {
	it('keeps the pill on screen', () => {
		expect(clampTop(-1)).toBe(0.08);
		expect(clampTop(2)).toBe(0.92);
		expect(clampTop(0.5)).toBe(0.5);
		expect(clampTop(Number.NaN)).toBe(0.62);
	});
});

describe('topChannels', () => {
	it('ranks by count, then name', () => {
		const records = [rec('b'), rec('a'), rec('b'), rec('c'), rec('a'), rec('b')];
		expect(topChannels(records, 2)).toEqual([
			{ channel: 'b', n: 3 },
			{ channel: 'a', n: 2 },
		]);
	});
});
