(() => {
  "use strict";
  const e = require("electron");
  var t, n;
  if ((function(e2) {
    e2[e2.Classic = 1] = "Classic", e2[e2.Protocol = 2] = "Protocol", e2[e2.Both = 3] = "Both";
  })(t || (t = {})), (function(e2) {
    e2.RENDERER_START = "sentry-electron.renderer-start", e2.EVENT = "sentry-electron.event", e2.SCOPE = "sentry-electron.scope", e2.ENVELOPE = "sentry-electron.envelope", e2.STATUS = "sentry-electron.status", e2.ADD_METRIC = "sentry-electron.add-metric";
  })(n || (n = {})), window.__SENTRY_IPC__) console.log("Sentry Electron preload has already been run");
  else {
    const t2 = { sendRendererStart: () => e.ipcRenderer.send(n.RENDERER_START), sendScope: (t3) => e.ipcRenderer.send(n.SCOPE, t3), sendEvent: (t3) => e.ipcRenderer.send(n.EVENT, t3), sendEnvelope: (t3) => e.ipcRenderer.send(n.ENVELOPE, t3), sendStatus: (t3) => e.ipcRenderer.send(n.STATUS, t3), sendAddMetric: (t3) => e.ipcRenderer.send(n.ADD_METRIC, t3) };
    if (window.__SENTRY_IPC__ = t2, e.contextBridge) try {
      e.contextBridge.exposeInMainWorld("__SENTRY_IPC__", t2);
    } catch (e2) {
    }
  }
  !(function() {
    const t2 = "var(--color-background-tertiary-inverse)", n2 = `
		html.theme-dark body {
			background-color: ${t2} !important;
		}

		html.theme-dark #tv-two-factor-social-signin, html.theme-dark .tv-two-factor-social-signin {
			background-color: ${t2} !important;
		}

		html body {
			overflow: hidden
		}
	`;
    e.webFrame.insertCSS(n2);
  })();
})();
