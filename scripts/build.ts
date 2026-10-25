#!/usr/bin/env bun
// Builds the DevTool into app/ (Vite) and applies the bundle patches.
//
//   bun run build

import path from 'node:path';
import { build } from 'vite';
import { log, ROOT, run } from './lib/util.mjs';

for (const mode of ['main', 'preload'] as const) {
	log(`vite build --mode ${mode}`);
	await build({ root: ROOT, mode, logLevel: 'warn' });
}

run(process.execPath, [path.join(ROOT, 'build/patches/apply.mjs')]);
