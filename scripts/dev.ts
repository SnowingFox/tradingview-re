#!/usr/bin/env bun
// Development loop:
//
//   bun run dev [-- <args passed to TradingView>]
//
//   * preload (src/devtool, src/common): rebuilt on save; the DevTool main
//     module sees the new file and reloads every tab showing the panel;
//   * main process (src/main) and build/patches: rebuilt on save, but need a
//     restart of `bun run dev` to take effect.
//
// The app runs with the isolated ./.tradingview-dev profile (see scripts/start.mjs).

import { spawn } from 'node:child_process';
import path from 'node:path';
import { build, type Rolldown } from 'vite';
import { log, ROOT, run } from './lib/util.mjs';

async function watchBuild(mode: 'main' | 'preload'): Promise<Rolldown.RolldownWatcher> {
	const watcher = (await build({
		root: ROOT,
		mode,
		logLevel: 'warn',
		build: { watch: {} },
	})) as Rolldown.RolldownWatcher;
	await new Promise<void>((resolve, reject) => {
		watcher.on('event', (event) => {
			if (event.code === 'END') {
				log(`${mode} built`);
				resolve();
			} else if (event.code === 'ERROR') {
				log(`${mode} build failed: ${event.error.message}`);
				reject(event.error);
			}
		});
	});
	return watcher;
}

log('building DevTool sources (watching)');
const watchers = await Promise.all([watchBuild('main'), watchBuild('preload')]);
run(process.execPath, [path.join(ROOT, 'build/patches/apply.mjs')]);

let stopping = false;
async function stop(code: number): Promise<never> {
	if (!stopping) {
		stopping = true;
		await Promise.allSettled(watchers.map((w) => w.close()));
	}
	process.exit(code);
}

const app = spawn(process.execPath, [path.join(ROOT, 'scripts/start.mjs'), ...process.argv.slice(2)], {
	stdio: 'inherit',
	env: { ...process.env, TVRE_DEV: '1' },
});
app.on('exit', (code) => void stop(code ?? 0));
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
	process.on(signal, () => {
		app.kill(signal);
		void stop(130);
	});
}
