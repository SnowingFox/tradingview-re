(() => {
  "use strict";
  const e = require("electron");
  var r, t;
  if ((function(e2) {
    e2[e2.Classic = 1] = "Classic", e2[e2.Protocol = 2] = "Protocol", e2[e2.Both = 3] = "Both";
  })(r || (r = {})), (function(e2) {
    e2.RENDERER_START = "sentry-electron.renderer-start", e2.EVENT = "sentry-electron.event", e2.SCOPE = "sentry-electron.scope", e2.ENVELOPE = "sentry-electron.envelope", e2.STATUS = "sentry-electron.status", e2.ADD_METRIC = "sentry-electron.add-metric";
  })(t || (t = {})), window.__SENTRY_IPC__) console.log("Sentry Electron preload has already been run");
  else {
    const r2 = { sendRendererStart: () => e.ipcRenderer.send(t.RENDERER_START), sendScope: (r3) => e.ipcRenderer.send(t.SCOPE, r3), sendEvent: (r3) => e.ipcRenderer.send(t.EVENT, r3), sendEnvelope: (r3) => e.ipcRenderer.send(t.ENVELOPE, r3), sendStatus: (r3) => e.ipcRenderer.send(t.STATUS, r3), sendAddMetric: (r3) => e.ipcRenderer.send(t.ADD_METRIC, r3) };
    if (window.__SENTRY_IPC__ = r2, e.contextBridge) try {
      e.contextBridge.exposeInMainWorld("__SENTRY_IPC__", r2);
    } catch (e2) {
    }
  }
  function n(e2) {
    let r2, t2 = e2;
    return () => {
      if (t2) {
        const e3 = t2;
        t2 = void 0, r2 = e3();
      }
      return r2;
    };
  }
  require("url");
  const s = "TARGET_TVD_HOST", c = "https://www.tradingview.com/", o = n((() => {
    const e2 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
    let r2 = c;
    return s in process.env && (r2 = process.env[s] ?? c), null !== new RegExp(e2, "i").exec(r2) ? e2 : (r2.endsWith("/") && (r2 = r2?.substring(0, r2.length - 1)), r2.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
  }));
  function i(e2, r2 = true) {
    const t2 = (e3) => {
      let t3 = e3.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
      return t3.match(/\w+(\/\((\.\*\)))/gi) && (t3 = t3.replace(/\/\((\.\*\))/gi, "(/(.*))?")), t3 = t3.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, o()), t3 = `^${t3}${r2 ? "$" : ""}`, new RegExp(t3, "i");
    };
    return "string" == typeof e2 ? t2(e2) : e2.map(t2);
  }
  const T = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", a = "${TV}/(\\w|-)*screener/*", V = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/";
  n((() => i(a))), n((() => i("${TV}/", true))), n((() => i("${TV}/chart/", true))), n((() => i(T))), n((() => i("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), n((() => i(V, true))), n((() => i("${TV}/screener/*"))), n((() => i("${TV}/heatmap/*"))), n((() => i("${TV}/community/*"))), n((() => i("${TV}/pine-script-docs/en/v5/Introduction.html"))), n((() => i("${TV}/pine-script-reference/v5/"))), n((() => i("${TV}/x/*"))), n((() => i("${TV}/*"))), n((() => i("${TV}/account-recovery/*"))), n((() => i("${TV}/chat/*"))), n((() => /:\/\/s3\..+\/snapshots\//i)), n((() => i("${TV}/pine/*"))), n((() => i("${TV}/markets/*"))), n((() => i("${TV}/markets/*/news/"))), n((() => i("${TV}/markets/stocks-*/*"))), n((() => i("${TV}/markets/world-economy/*"))), n((() => i("${TV}/u/TradingView/"))), n((() => i("${TV}/news/*"))), n((() => i("${TV}/news/"))), n((() => i("${TV}/news/\\?market=*"))), n((() => i("${TV}/news/\\?market=topstories"))), n((() => i("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), n((() => i("${TV}/support/*"))), n((() => i("https://status.tradingview.com/", true))), n((() => i("${TV}/ideas/*"))), n((() => i("${TV}/scripts/*"))), n((() => i(["${TV}/", "${TV}/ideas/*", V, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), n((() => i("${TV}/markets/bonds/*"))), n((() => i([T, a, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"]))), localStorage.setItem(s, process.env[s] ?? c);
})();
