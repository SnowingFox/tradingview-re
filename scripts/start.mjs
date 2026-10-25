#!/usr/bin/env node
// Launches "dist/TradingView RE.app" (building it first if needed).
//
// By default the app runs with an isolated profile under ./.tradingview-dev so
// it never touches an installed TradingView's settings, layouts cache or login state:
//
//   bun run start                       # isolated profile
//   bun run start -- --real-profile     # use ~/Library/Application Support/TradingView
//   bun run start -- <args>             # any other args are passed through
//
// Credentials TradingView saves through keytar still go to the login keychain
// (service names are shared with the installed app).

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { DIST_DIR, ROOT, log, run } from './lib/util.mjs';
import { EXECUTABLE, PRODUCT_NAME } from './package-app.mjs';

const PROFILE_DIR = process.env.TVRE_PROFILE || path.join(ROOT, '.tradingview-dev');

async function needsBuild() {
  if (!existsSync(EXECUTABLE)) {
    return true;
  }
  const build = JSON.parse(await readFile(path.join(DIST_DIR, 'build.json'), 'utf8'));
  const upstream = JSON.parse(await readFile(path.join(ROOT, 'upstream/upstream.json'), 'utf8'));
  return (
    build.version !== upstream.version ||
    build.electronVersion !== upstream.electronVersion ||
    build.productName !== PRODUCT_NAME
  );
}

async function main() {
  const argv = process.argv.slice(2);
  if (!existsSync(path.join(ROOT, 'app/devtool/main.js'))) {
    run(process.execPath, [path.join(ROOT, 'scripts/build.ts')]);
  }
  if (await needsBuild()) {
    run(process.execPath, [path.join(ROOT, 'scripts/package-app.mjs')]);
  }

  const realProfile = argv.includes('--real-profile');
  const args = argv.filter((a) => a !== '--real-profile');
  if (!realProfile) {
    args.unshift(`--user-data-dir=${path.join(PROFILE_DIR, 'user-data')}`);
  }

  log(`launching ${path.relative(ROOT, EXECUTABLE)} ${args.join(' ')}`);
  const child = spawn(EXECUTABLE, args, { stdio: 'inherit', env: { ...process.env, ELECTRON_RUN_AS_NODE: undefined } });
  child.on('exit', (code, signal) => process.exit(signal ? 1 : (code ?? 0)));
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
