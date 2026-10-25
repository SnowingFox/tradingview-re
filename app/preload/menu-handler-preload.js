(() => {
  "use strict";
  const e = require("electron");
  var n, r;
  if ((function(e2) {
    e2[e2.Classic = 1] = "Classic", e2[e2.Protocol = 2] = "Protocol", e2[e2.Both = 3] = "Both";
  })(n || (n = {})), (function(e2) {
    e2.RENDERER_START = "sentry-electron.renderer-start", e2.EVENT = "sentry-electron.event", e2.SCOPE = "sentry-electron.scope", e2.ENVELOPE = "sentry-electron.envelope", e2.STATUS = "sentry-electron.status", e2.ADD_METRIC = "sentry-electron.add-metric";
  })(r || (r = {})), window.__SENTRY_IPC__) console.log("Sentry Electron preload has already been run");
  else {
    const n2 = { sendRendererStart: () => e.ipcRenderer.send(r.RENDERER_START), sendScope: (n3) => e.ipcRenderer.send(r.SCOPE, n3), sendEvent: (n3) => e.ipcRenderer.send(r.EVENT, n3), sendEnvelope: (n3) => e.ipcRenderer.send(r.ENVELOPE, n3), sendStatus: (n3) => e.ipcRenderer.send(r.STATUS, n3), sendAddMetric: (n3) => e.ipcRenderer.send(r.ADD_METRIC, n3) };
    if (window.__SENTRY_IPC__ = n2, e.contextBridge) try {
      e.contextBridge.exposeInMainWorld("__SENTRY_IPC__", n2);
    } catch (e2) {
    }
  }
  window.hideMenu = () => {
    document.body.classList.add("invisible-root"), window.requestAnimationFrame((() => window.requestAnimationFrame((() => e.ipcRenderer.send("tvd:hide-menu")))));
  };
})();
