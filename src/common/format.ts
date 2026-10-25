/** Formatting and filtering helpers shared by the DevTool panel (no DOM, no Electron). */
import type { IpcKind, IpcRecord } from './protocol.js';

export function formatBytes(bytes: number | undefined): string {
	if (bytes === undefined) {
		return '';
	}
	if (bytes < 1024) {
		return `${bytes} B`;
	}
	if (bytes < 1024 * 1024) {
		return `${(bytes / 1024).toFixed(1)} KB`;
	}
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatDuration(ms: number | undefined): string {
	if (ms === undefined) {
		return '';
	}
	if (ms < 1) {
		return '<1ms';
	}
	if (ms < 1000) {
		return `${Math.round(ms)}ms`;
	}
	return `${(ms / 1000).toFixed(ms < 10_000 ? 2 : 1)}s`;
}

/** Arrow showing the direction of a message: renderer → main or main → renderer. */
export const KIND_LABELS: Record<IpcKind, string> = {
	send: '→ send',
	sync: '→ sync',
	invoke: '→ invoke',
	push: '← push',
};

/**
 * Case-insensitive match against channel and kind. Space-separated terms must
 * all match; a leading `-` excludes (e.g. `tvd -sentry`).
 */
export function matchesFilter(record: IpcRecord, filter: string): boolean {
	const haystack = `${record.channel} ${record.kind}`.toLowerCase();
	for (const term of filter.toLowerCase().split(/\s+/)) {
		if (term === '' || term === '-') {
			continue;
		}
		if (term.startsWith('-')) {
			if (haystack.includes(term.slice(1))) {
				return false;
			}
		} else if (!haystack.includes(term)) {
			return false;
		}
	}
	return true;
}

/** Appends `incoming` to `records`, keeping at most `limit` of the newest. */
export function appendBounded<T>(records: T[], incoming: readonly T[], limit: number): T[] {
	const next = records.concat(incoming);
	return next.length > limit ? next.slice(next.length - limit) : next;
}

/** Vertical position of the pill, as a fraction of the window height. */
export function clampTop(top: number): number {
	return Math.min(0.92, Math.max(0.08, Number.isFinite(top) ? top : 0.62));
}

/** Channels ranked by message count, most frequent first. */
export function topChannels(records: readonly IpcRecord[], count: number): { channel: string; n: number }[] {
	const counts = new Map<string, number>();
	for (const r of records) {
		counts.set(r.channel, (counts.get(r.channel) ?? 0) + 1);
	}
	return [...counts]
		.map(([channel, n]) => ({ channel, n }))
		.sort((a, b) => b.n - a.n || a.channel.localeCompare(b.channel))
		.slice(0, count);
}
