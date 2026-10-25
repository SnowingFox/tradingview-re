// Minimal Chrome DevTools Protocol helpers for the smoke-test scripts.
// Uses Node's built-in WebSocket; no dependencies.

export async function listTargets(port) {
  const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  return targets.filter((t) => t.type === 'page');
}

export async function connect(target) {
  const ws = new WebSocket(target.webSocketDebuggerUrl);
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
  const evaluate = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.result?.exceptionDetails) {
      throw new Error(r.result.exceptionDetails.exception?.description ?? 'evaluate failed');
    }
    return r.result?.result?.value;
  };
  return { ws, send, evaluate, close: () => ws.close() };
}

/** DOM queries that pierce shadow roots (the DevTool panel lives in a closed one). */
export function domTools(send) {
  const tree = async () => {
    await send('DOM.enable');
    return (await send('DOM.getDocument', { depth: -1, pierce: true })).result.root;
  };
  const find = (node, pred) => {
    if (pred(node)) return node;
    for (const child of [...(node.children ?? []), ...(node.shadowRoots ?? [])]) {
      const hit = find(child, pred);
      if (hit) return hit;
    }
  };
  const attr = (node, name) => {
    const a = node.attributes ?? [];
    const i = a.indexOf(name);
    return i === -1 ? undefined : a[i + 1];
  };
  const text = (node) => (node.nodeType === 3 ? node.nodeValue : [...(node.children ?? [])].map(text).join(' '));
  return { tree, find, attr, text };
}

/** Resolves a DOM node and calls `fn` on it inside the page. */
export async function callOn(send, nodeId, functionDeclaration) {
  const { object } = (await send('DOM.resolveNode', { nodeId })).result;
  await send('Runtime.callFunctionOn', { objectId: object.objectId, functionDeclaration });
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** The tab BrowserView that hosts the DevTool panel (chart tabs and the local new-tab page). */
export async function findPanelTarget(port) {
  for (const target of await listTargets(port)) {
    if (!target.url.startsWith('file:') && !/tradingview\.com/.test(target.url)) continue;
    let page;
    try {
      page = await connect(target);
      if (await page.evaluate('!!document.querySelector("tradingview-re-devtool")')) {
        return { target, page };
      }
    } catch {
      // The target may be gone or blocked; try the next one.
    }
    page?.close();
  }
  return undefined;
}
