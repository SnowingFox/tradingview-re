#!/usr/bin/env node
// Applies build/patches to ./app.
//
//   bun build/patches/apply.mjs           # apply every patch (bun run apply)
//   bun build/patches/apply.mjs --check   # verify every anchor, change nothing
//
// Each patched file is rebuilt from its pristine copy in the latest
// "Import TradingView ..." commit (what scripts/extract.mjs produced), so
// re-running after editing patches.mjs or inject/* replaces the previous result
// instead of stacking on top of it.
// Every patch is an exact string replacement whose anchor must match exactly
// once in the pristine file.

import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { APP_DIR, ROOT, log } from '../../scripts/lib/util.mjs';
import { patches } from './patches.mjs';

const check = process.argv.includes('--check');

for (const built of ['devtool/main.js', 'preload/devtool-preload.js']) {
  if (!existsSync(path.join(APP_DIR, built))) log(`! app/${built} is missing; run \`bun run build\``);
}

const byFile = new Map();
for (const p of patches) {
  if (!byFile.has(p.file)) byFile.set(p.file, []);
  byFile.get(p.file).push(p);
}

const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 30 });
const importCommit = git('log', '-1', '--format=%H', '--grep=^Import TradingView', '--', 'app').trim();
if (!importCommit) {
  console.error('no "Import TradingView ..." commit found; commit the extracted app/ first');
  process.exit(1);
}
const pristine = (file) => git('show', `${importCommit}:${path.posix.join('app', file)}`);
log(`pristine sources: ${importCommit.slice(0, 10)}`);

let failed = 0;
for (const [file, list] of byFile) {
  let src = pristine(file);
  for (const p of list) {
    const count = src.split(p.find).length - 1;
    if (count !== 1) {
      log(`! ${p.id}: anchor matched ${count} times in ${file}`);
      failed++;
      continue;
    }
    log(`+ ${p.id}`);
    src = src.replace(p.find, () => p.replace);
  }
  const abs = path.join(APP_DIR, file);
  if (!check && src !== (await readFile(abs, 'utf8'))) await writeFile(abs, src);
}
if (failed) {
  console.error(`${failed} patch(es) could not be applied`);
  process.exit(1);
}
