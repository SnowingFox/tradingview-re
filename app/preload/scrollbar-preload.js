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
  const r = "tvd:debug-auto-save-dialog", i = "tvd:screen-capture";
  class s {
    key;
    rules;
    constructor(e2, t2) {
      this.key = e2, this.rules = t2;
    }
    applyRules(t2) {
      const n2 = t2 ?? this.rules;
      if (!n2) return;
      const r2 = localStorage.getItem(this.key);
      r2 && e.webFrame.removeInsertedCSS(r2);
      const i2 = e.webFrame.insertCSS(n2);
      localStorage.setItem(this.key, i2);
    }
    removeRules() {
      const t2 = localStorage.getItem(this.key);
      t2 && e.webFrame.removeInsertedCSS(t2);
    }
  }
  const o = "tvd:session-storage", d = { initCachedStoreSync: `${o}:init-cached-store-sync`, setItem: `${o}:set-item`, clear: `${o}:clear`, removeItem: `${o}:remove-item` }, a = new class {
    #e = null;
    getLength() {
      return this.ensureLoaded().size;
    }
    setItem(t2, n2) {
      this.ensureLoaded().set(t2, n2), e.ipcRenderer.send(d.setItem, t2, n2);
    }
    getItem(e2) {
      return this.ensureLoaded().get(e2) ?? null;
    }
    removeItem(t2) {
      this.ensureLoaded().delete(t2), e.ipcRenderer.send(d.removeItem, t2);
    }
    clear() {
      this.ensureLoaded().clear(), e.ipcRenderer.send(d.clear);
    }
    ensureLoaded() {
      if (null !== this.#e) return this.#e;
      try {
        const n2 = e.ipcRenderer.sendSync(d.initCachedStoreSync);
        if (t2 = n2, Array.isArray(t2) && t2.every(((e2) => Array.isArray(e2) && 2 === e2.length && "string" == typeof e2[0] && "string" == typeof e2[1]))) return this.#e = new Map(n2), this.#e;
      } catch (e2) {
        console.log("TVD.sessionStorage cachedStorage init request failed with error: ", e2);
      }
      var t2;
      return this.#e = /* @__PURE__ */ new Map(), this.#e;
    }
  }(), c = { getLength: function() {
    return a.getLength();
  }, setItem: function(e2, t2) {
    a.setItem(String(e2), String(t2));
  }, getItem: function(e2) {
    return a.getItem(String(e2));
  }, removeItem: function(e2) {
    a.removeItem(String(e2));
  }, clear: function() {
    a.clear();
  } }, l = { updateLinkValues(t2) {
    e.ipcRenderer.send("tvd:update-link-values", t2);
  } }, u = { ...{ getDesktopStream: async () => await e.ipcRenderer.invoke("tvd:get-screen"), async getCurrentCameraDevice() {
    const t2 = await e.ipcRenderer.invoke("tvd:get-camera");
    if (t2) return u.findMediaDevice(t2.label, "videoinput");
  }, async getCurrentAudioDevice() {
    const t2 = await e.ipcRenderer.invoke("tvd:get-audio");
    if (t2) return u.findMediaDevice(t2.label, "audioinput");
  }, async findMediaDevice(e2, t2) {
    const n2 = await navigator.mediaDevices.enumerateDevices();
    return n2.find(((n3) => n3.label === e2 && n3.kind === t2))?.deviceId;
  }, startedScreenCapture() {
    let t2 = "";
    window && (t2 = window.location.href), e.ipcRenderer.send(i, true, t2);
  }, stoppedScreenCapture() {
    let t2 = "";
    window && (t2 = window.location.href), e.ipcRenderer.send(i, false, t2);
  } }, ...{ setTitle(t2) {
    e.ipcRenderer.send("tvd:set-title", t2);
  }, reloadTab() {
    e.ipcRenderer.send("tvd:reload-tab");
  }, layoutChange(t2) {
    e.ipcRenderer.send("tvd:layout-change", t2);
  }, getActiveWatchlistId: () => e.ipcRenderer.invoke("tvd:get-watchlist"), onActiveWatchlistIdChange(t2) {
    e.ipcRenderer.send("tvd:watchlist-change", t2);
  }, layoutRestored() {
    e.ipcRenderer.send("tvd:layout-restored");
  }, setFocusPineEditor(t2) {
    e.ipcRenderer.send("tvd:focus-pine-editor", t2);
  } }, ...{ setNotification(t2) {
    e.ipcRenderer.send("tvd:set-notification", t2);
  }, setNotificationViewed() {
    e.ipcRenderer.send("tvd:set-notification-viewed");
  } }, setCredentials: (t2) => e.ipcRenderer.invoke("tvd:set-credentials", t2), getCredentials: () => e.ipcRenderer.invoke("tvd:get-credentials"), insertCredentialsText: (t2) => e.ipcRenderer.invoke("tvd:native-input-string", t2), ...{ setLocale(t2) {
    e.ipcRenderer.send("tvd-main:set-locale", t2);
  }, getTheme: () => e.ipcRenderer.invoke("tvd:get-theme"), getThemeSetting: () => e.ipcRenderer.invoke("tvd:get-theme-setting"), setThemeSetting(t2) {
    e.ipcRenderer.send("tvd:set-theme-setting", t2);
  }, getReports: async () => await e.ipcRenderer.invoke("tvd:get-reports"), signIn() {
    e.ipcRenderer.send("tvd-main:initiate-sign-in");
  }, openSettings(t2) {
    e.ipcRenderer.send("tvd:open-settings", t2);
  }, openNewWindow(t2, n2, r2) {
    e.ipcRenderer.send("tvd:open-new-window", t2, n2, r2);
  }, log(t2) {
    e.ipcRenderer.invoke("tvd:log", t2);
  }, sendToSentry(t2) {
    e.ipcRenderer.invoke("tvd:send-to-sentry-breadcrumb", t2);
  }, crosshairSyncEnabled: (function() {
    let t2 = true;
    const n2 = /* @__PURE__ */ new Map(), r2 = (e2) => {
      t2 !== e2 && (t2 = e2, i2());
    }, i2 = () => {
      n2.forEach(((e2) => e2(t2)));
    };
    return e.ipcRenderer.invoke("tvd:get-crosshair-sync").then(((e2) => {
      r2(e2);
    })).catch(((e2) => console.log(e2))), e.ipcRenderer.on("tvd:crosshair-sync-setting-update", ((e2, t3) => {
      r2(t3);
    })), { value: () => t2, subscribe(e2) {
      const t3 = self.crypto.randomUUID();
      return n2.set(t3, e2), t3;
    }, unsubscribe(e2) {
      n2.has(e2) && n2.delete(e2);
    } };
  })(), sessionStorage: c }, ...{ openAutosaveDialogDebug() {
    e.ipcRenderer.send(r, true);
  }, closeAutosaveDialogDebug() {
    e.ipcRenderer.send(r, false);
  }, errorAutosaveDialogDebug() {
    e.ipcRenderer.send(r, false, true);
  } }, contracts: { link: { OpenExternal: "OpenExternal" } }, linkingApi: l };
  !(function(t2) {
    const n2 = new s("scrollbarTheme"), r2 = (e2) => {
      const t3 = "light" === e2 ? "\n	* {\n		--scrollbar-thumb-default: #D1D4DC;\n		--scrollbar-thumb-hover: #B2B5BE;\n		--scrollbar-thumb-active: #9598A1;\n		--scrollbar-track: #FFFFFF;\n		--scrollbar-track-border: #E0E3EB;\n	}\n\n" : "\n	* {\n		--scrollbar-thumb-default: #50535E;\n		--scrollbar-thumb-hover: #868993;\n		--scrollbar-thumb-active: #A3A6AF;\n		--scrollbar-track: #131722;\n		--scrollbar-track-border: #2A2E39;\n	}\n\n";
      n2.applyRules(t3 + "\n	::-webkit-scrollbar {\n		width: 9px;\n		height: 9px;\n	}\n\n	::-webkit-scrollbar-thumb {\n		box-sizing: border-box;\n		border: 2px solid transparent;\n		box-shadow: inset 0 0 10px 10px var(--scrollbar-thumb-default);\n		border-radius: 8px;\n		background-color: unset;\n	}\n\n	::-webkit-scrollbar-thumb:hover {\n		box-shadow: inset 0 0 10px 10px var(--scrollbar-thumb-hover);\n	}\n\n	::-webkit-scrollbar-thumb:active {\n		box-shadow: inset 0 0 10px 10px var(--scrollbar-thumb-active);\n	}\n\n	::-webkit-scrollbar-track {\n		border-radius: unset;\n		padding: 2px;\n		background-color: var(--scrollbar-track);\n	}\n\n	::-webkit-scrollbar-track:vertical {\n		border-left: 1px solid var(--scrollbar-track-border);\n	}\n\n	::-webkit-scrollbar-track:horizontal {\n		border-top: 1px solid var(--scrollbar-track-border);\n	}\n\n	::-webkit-scrollbar-corner {\n		display: none;\n	}\n");
    };
    window.addEventListener("load", (() => {
      if (window._setTheme) {
        const e2 = (e3) => {
          "theme" === e3.key && e3.newValue && r2(e3.newValue);
        };
        window.addEventListener("storage", e2), window.addEventListener("unload", (() => {
          window.removeEventListener("storage", e2);
        }));
      }
    })), t2().then(((e2) => {
      r2(e2);
    })).catch(((e2) => console.log(e2))), e.ipcRenderer.on("tvd:update-theme", ((e2, t3) => {
      "string" == typeof t3 && r2(t3);
    }));
  })(u.getTheme);
})();
