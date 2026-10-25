#!/usr/bin/env node
// Smoke test for a running build started with --remote-debugging-port:
// checks that the DevTool mounted in a tab, opens it, and reads the panel.
//
//   bun run start -- --remote-debugging-port=9333 --tvre-quiet
//   node scripts/cdp-check.mjs [port] [screenshot.png]
//
// --tvre-quiet keeps the launch off the desktop (accessory policy, windows
// moved offscreen), so the check never steals the mouse or keyboard.

import { writeFileSync } from 'node:fs';
import { callOn, connect, domTools, findPanelTarget, listTargets } from './lib/cdp.mjs';

const port = process.argv[2] ?? '9333';
const shot = process.argv[3];

const found = await findPanelTarget(port);
if (!found) {
  console.error('no tab with the DevTool panel found');
  process.exit(1);
}
const { target, page } = found;
const dom = domTools(page.send);

let root = await dom.tree();
const pill = dom.find(root, (n) => n.nodeName === 'BUTTON' && dom.attr(n, 'class') === 'pill');
const result = {
  url: target.url,
  mounted: true,
  pill: Boolean(pill),
  // Context isolation: a remote tab must not expose Electron to the page.
  // Local shell views (the signed-in new-tab page) run with Node integration,
  // so this is informational for them.
  pageSeesIpc: await page.evaluate('typeof require !== "undefined" || typeof ipcRenderer !== "undefined"'),
  localView: target.url.startsWith('file:'),
};

if (pill && dom.attr(pill, 'aria-expanded') !== 'true') {
  await callOn(page.send, pill.nodeId, 'function () { this.click(); }');
  // Let info and the first IPC batch arrive.
  await new Promise((r) => setTimeout(r, 1500));
}

root = await dom.tree();
const panel = dom.find(root, (n) => n.nodeName === 'DIV' && dom.attr(n, 'class') === 'panel');
result.panelOpen = Boolean(panel) && dom.attr(panel, 'hidden') === undefined;
const list = panel && dom.find(panel, (n) => n.nodeName === 'UL' && dom.attr(n, 'class') === 'records');
result.ipcRows = list ? (list.children ?? []).length : 0;
result.ipcSample = list ? (list.children ?? []).slice(0, 5).map((li) => dom.text(li).replace(/\s+/g, ' ').trim()) : [];
result.panelText = panel ? dom.text(panel).replace(/\s+/g, ' ').trim().slice(0, 700) : '';

if (shot) {
  const { data } = (await page.send('Page.captureScreenshot', { format: 'png' })).result;
  writeFileSync(shot, Buffer.from(data, 'base64'));
  result.screenshot = shot;
}

page.close();

// Other tabs in the same window share the panel; list them for context.
result.tabs = (await listTargets(port)).map((t) => t.url.replace(/\?.*/, '')).filter(Boolean);

console.log(JSON.stringify(result, null, 2));
