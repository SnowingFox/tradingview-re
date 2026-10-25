#!/usr/bin/env node
// Extracts the TradingView application sources from an official macOS DMG (or
// an already-installed TradingView.app) into ./app, then reformats every
// first-party JavaScript bundle with esbuild so it is readable *and* still runnable.
//
//   bun run extract -- ~/Downloads/TradingView.dmg
//   bun run extract -- /Applications/TradingView.app --no-beautify
//
// Upstream ships the app as Resources/app.asar plus app.asar.unpacked (native
// modules). Both are merged into ./app at their original relative paths, so a
// plain-directory app resolves `__dirname/keytar.node` exactly like the asar does.
//
// Outputs:
//   app/                     the runnable application tree
//   upstream/upstream.json   version / electron metadata of the source build
//   upstream/manifest.json   sha256 of every original file (before reformatting)
//   upstream/darwin/         original Info.plist and .icns resources used by `bun run package`

import { existsSync } from 'node:fs';
import { chmod, cp, mkdir, mkdtemp, open, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { transform } from 'esbuild';
import { APP_DIR, UPSTREAM_DIR, capture, log, parseArgs, pool, run, sha256File, walk } from './lib/util.mjs';

const JS_EXT = /\.(c|m)?js$/;

async function withMountedDmg(dmg, fn) {
  const mnt = await mkdtemp(path.join(os.tmpdir(), 'tradingview-dmg-'));
  run('hdiutil', ['attach', '-readonly', '-nobrowse', '-noautoopen', '-mountpoint', mnt, dmg], { stdio: 'ignore' });
  try {
    const appName = (await readdir(mnt)).find((n) => n.endsWith('.app'));
    if (!appName) {
      throw new Error(`No .app bundle found in ${dmg}`);
    }
    return await fn(path.join(mnt, appName));
  } finally {
    run('hdiutil', ['detach', mnt, '-force'], { stdio: 'ignore' });
    await rm(mnt, { recursive: true, force: true });
  }
}

function plistValue(plist, key) {
  return capture('plutil', ['-extract', key, 'raw', '-o', '-', plist]).trim();
}

/**
 * Unpacks an asar archive into `outDir`. Layout: a Chromium pickle holding the
 * JSON header ([u32 4][u32 headerSize][u32 payloadSize][u32 jsonLength][json]),
 * then file contents at `8 + headerSize + offset`. Unpacked entries live in
 * `<asar>.unpacked` and are copied separately.
 */
async function extractAsar(asar, outDir) {
  const fh = await open(asar, 'r');
  try {
    const head = Buffer.alloc(16);
    await fh.read(head, 0, 16, 0);
    const headerSize = head.readUInt32LE(4);
    const jsonLength = head.readUInt32LE(12);
    const json = Buffer.alloc(jsonLength);
    await fh.read(json, 0, jsonLength, 16);
    const header = JSON.parse(json.toString('utf8'));
    const base = 8 + headerSize;
    const root = path.resolve(outDir);

    async function extractDir(node, rel) {
      for (const [name, entry] of Object.entries(node.files ?? {})) {
        const relPath = rel ? `${rel}/${name}` : name;
        const dest = path.resolve(root, relPath);
        // A crafted header must not write outside app/.
        if (!dest.startsWith(root + path.sep)) {
          throw new Error(`asar entry escapes the output directory: ${relPath}`);
        }
        if (entry.files) {
          await mkdir(dest, { recursive: true });
          await extractDir(entry, relPath);
        } else if (entry.link || entry.unpacked) {
          continue;
        } else {
          const data = Buffer.alloc(entry.size);
          await fh.read(data, 0, entry.size, base + Number(entry.offset));
          await mkdir(path.dirname(dest), { recursive: true });
          await writeFile(dest, data);
          if (entry.executable) {
            await chmod(dest, 0o755);
          }
        }
      }
    }
    await extractDir(header, '');
  } finally {
    await fh.close();
  }
}

async function copyBundle(bundle, sourceLabel) {
  const resources = path.join(bundle, 'Contents/Resources');
  log(`unpacking ${path.join(resources, 'app.asar')} -> app/`);
  await rm(APP_DIR, { recursive: true, force: true });
  await mkdir(APP_DIR, { recursive: true });
  await extractAsar(path.join(resources, 'app.asar'), APP_DIR);
  const unpacked = path.join(resources, 'app.asar.unpacked');
  if (existsSync(unpacked)) {
    // ditto merges into the existing tree and preserves modes and xattrs.
    run('ditto', [unpacked, APP_DIR]);
  }

  const darwin = path.join(UPSTREAM_DIR, 'darwin');
  await rm(darwin, { recursive: true, force: true });
  await mkdir(darwin, { recursive: true });
  await cp(path.join(bundle, 'Contents/Info.plist'), path.join(darwin, 'Info.plist'));
  for (const name of await readdir(resources)) {
    if (name.endsWith('.icns')) {
      await cp(path.join(resources, name), path.join(darwin, name));
    }
  }

  const pkg = JSON.parse(await readFile(path.join(APP_DIR, 'package.json'), 'utf8'));
  const frameworkPlist = path.join(bundle, 'Contents/Frameworks/Electron Framework.framework/Resources/Info.plist');
  return {
    source: sourceLabel,
    name: pkg.productName,
    version: pkg.version,
    build: plistValue(path.join(bundle, 'Contents/Info.plist'), 'CFBundleVersion'),
    date: new Date(pkg.buildDate).toISOString(),
    electronVersion: plistValue(frameworkPlist, 'CFBundleVersion'),
  };
}

async function writeManifest() {
  const files = [];
  for await (const f of walk(APP_DIR)) {
    files.push(f);
  }
  files.sort();
  const manifest = {};
  await pool(files, 32, async (f) => {
    manifest[f] = await sha256File(path.join(APP_DIR, f));
  });
  const sorted = Object.fromEntries(files.map((f) => [f, manifest[f]]));
  await writeFile(path.join(UPSTREAM_DIR, 'manifest.json'), JSON.stringify(sorted, null, 1) + '\n');
  return files;
}

async function beautify(files) {
  const targets = files.filter((f) => JS_EXT.test(f));
  log(`reformatting ${targets.length} JavaScript files with esbuild`);
  const failures = [];
  await pool(targets, Math.max(2, os.cpus().length - 1), async (f) => {
    const file = path.join(APP_DIR, f);
    const code = await readFile(file, 'utf8');
    try {
      const out = await transform(code, { loader: 'js', charset: 'utf8', legalComments: 'inline', logLevel: 'silent' });
      const s = await stat(file);
      await writeFile(file, out.code, { mode: s.mode });
    } catch (err) {
      failures.push({ file: f, error: String(err.errors?.[0]?.text ?? err.message) });
    }
  });
  if (failures.length) {
    log(`left ${failures.length} files unformatted (not parseable as plain JS):`);
    for (const { file, error } of failures) {
      log(`  ${file}: ${error}`);
    }
  }
  return { formatted: targets.length - failures.length, unformatted: failures.map((f) => f.file) };
}

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const input = positional[0];
  if (!input || !existsSync(input)) {
    console.error('usage: bun run extract -- <TradingView.dmg | TradingView.app> [--no-beautify]');
    process.exit(1);
  }
  await mkdir(UPSTREAM_DIR, { recursive: true });

  const resolved = path.resolve(input);
  const meta = resolved.endsWith('.dmg')
    ? await withMountedDmg(resolved, (bundle) => copyBundle(bundle, path.basename(resolved)))
    : await copyBundle(resolved, path.basename(resolved));
  if (resolved.endsWith('.dmg')) {
    meta.dmgSha256 = await sha256File(resolved);
  }

  log('hashing original files');
  const files = await writeManifest();
  meta.fileCount = files.length;

  if (!flags['no-beautify']) {
    meta.beautify = await beautify(files);
  }

  await writeFile(path.join(UPSTREAM_DIR, 'upstream.json'), JSON.stringify(meta, null, 2) + '\n');
  log(`done: ${meta.name} ${meta.version} (build ${meta.build}, Electron ${meta.electronVersion})`);
  log('next: commit app/ and upstream/ as "Import TradingView <version>", then bun run build && bun run start');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
