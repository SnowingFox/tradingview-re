#!/usr/bin/env node
// Smoke test for a running build started with --remote-debugging-port:
// checks that the DevTool mounted in the chart tab, opens it, and reads the
// panel's IPC folder. Uses Node's built-in WebSocket (no dependencies).
//
//   node scripts/cdp-check.mjs [port] [screenshot.png]

import { writeFileSync } from 'node:fs';

const port = process.argv[2] ?? '9333';
const shot = process.argv[3];

const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
const tab = targets.find((t) => t.type === 'page' && /^https:\/\/[^/]*tradingview\.com\/chart/.test(t.url));
if (!tab) {
  console.error('no chart tab found');
  process.exit(1);
}

const ws = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});
let id = 0;
const pending = new Map();
ws.onmessage = (m) => {
  const msg = JSON.parse(m.data);
  pending.get(msg.id)?.(msg);
  pending.delete(msg.id);
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const n = ++id;
    pending.set(n, resolve);
    ws.send(JSON.stringify({ id: n, method, params }));
  });

// The panel lives in a closed shadow root, so inspect it through the DOM
// domain (which pierces shadow roots) instead of page JavaScript.
const evaluate = async (expression) =>
  (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.result?.value;

const result = {
  url: tab.url,
  mounted: await evaluate('document.querySelector("tradingview-re-devtool") !== null'),
  // Context isolation: nothing leaks into the page's world.
  pageSeesIpc: await evaluate('typeof require !== "undefined" || typeof ipcRenderer !== "undefined"'),
};

await send('DOM.enable');
const { root } = (await send('DOM.getDocument', { depth: -1, pierce: true })).result;
function find(node, pred) {
  if (pred(node)) return node;
  for (const child of [...(node.children ?? []), ...(node.shadowRoots ?? [])]) {
    const hit = find(child, pred);
    if (hit) return hit;
  }
}
const text = (node) =>
  node.nodeType === 3 ? node.nodeValue : [...(node.children ?? [])].map(text).join(' ');
const attr = (node, name) => {
  const a = node.attributes ?? [];
  const i = a.indexOf(name);
  return i === -1 ? undefined : a[i + 1];
};

const pill = find(root, (n) => n.nodeName === 'BUTTON' && attr(n, 'class') === 'pill');
result.pill = Boolean(pill);
if (pill && attr(pill, 'aria-expanded') !== 'true') {
  const { object } = (await send('DOM.resolveNode', { nodeId: pill.nodeId })).result;
  await send('Runtime.callFunctionOn', { objectId: object.objectId, functionDeclaration: 'function () { this.click(); }' });
  // Let info + the first IPC batch arrive.
  await new Promise((r) => setTimeout(r, 1500));
}

const after = (await send('DOM.getDocument', { depth: -1, pierce: true })).result.root;
const panel = find(after, (n) => n.nodeName === 'DIV' && attr(n, 'class') === 'panel');
result.panelOpen = Boolean(panel) && attr(panel, 'hidden') === undefined;
const list = panel && find(panel, (n) => n.nodeName === 'UL' && attr(n, 'class') === 'records');
result.ipcRows = list ? (list.children ?? []).length : 0;
result.ipcSample = list ? (list.children ?? []).slice(0, 5).map((li) => text(li).replace(/\s+/g, ' ').trim()) : [];
result.panelText = panel ? text(panel).replace(/\s+/g, ' ').trim().slice(0, 600) : '';

if (shot) {
  const { data } = (await send('Page.captureScreenshot', { format: 'png' })).result;
  writeFileSync(shot, Buffer.from(data, 'base64'));
  result.screenshot = shot;
}

console.log(JSON.stringify(result, null, 2));
ws.close();
