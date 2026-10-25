"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[156], { 82069(e, t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.getElectronBinding = void 0, t.getElectronBinding = (e2) => process._linkedBinding ? process._linkedBinding("electron_common_" + e2) : process.electronBinding ? process.electronBinding(e2) : null;
}, 27121(e, t, n) {
  var r, o;
  Object.defineProperty(t, "__esModule", { value: true }), t.browserModuleNames = t.commonModuleNames = void 0;
  const i = n(82069);
  t.commonModuleNames = ["clipboard", "nativeImage", "shell"], t.browserModuleNames = ["app", "autoUpdater", "BaseWindow", "BrowserView", "BrowserWindow", "contentTracing", "crashReporter", "dialog", "globalShortcut", "ipcMain", "inAppPurchase", "Menu", "MenuItem", "nativeTheme", "net", "netLog", "MessageChannelMain", "Notification", "powerMonitor", "powerSaveBlocker", "protocol", "pushNotifications", "safeStorage", "screen", "session", "ShareMenu", "systemPreferences", "TopLevelWindow", "TouchBar", "Tray", "utilityProcess", "View", "webContents", "WebContentsView", "webFrameMain"].concat(t.commonModuleNames);
  const c = i.getElectronBinding("features");
  false !== (null === (r = null == c ? void 0 : c.isDesktopCapturerEnabled) || void 0 === r ? void 0 : r.call(c)) && t.browserModuleNames.push("desktopCapturer"), false !== (null === (o = null == c ? void 0 : c.isViewApiEnabled) || void 0 === o ? void 0 : o.call(c)) && t.browserModuleNames.push("ImageView");
}, 31032(e, t, n) {
  Object.defineProperty(t, "__esModule", { value: true }), t.deserialize = t.serialize = t.isSerializableObject = t.isPromise = void 0;
  const r = n(84157);
  t.isPromise = function(e2) {
    return e2 && e2.then && e2.then instanceof Function && e2.constructor && e2.constructor.reject && e2.constructor.reject instanceof Function && e2.constructor.resolve && e2.constructor.resolve instanceof Function;
  };
  const o = [Boolean, Number, String, Date, Error, RegExp, ArrayBuffer];
  function i(e2) {
    return null === e2 || ArrayBuffer.isView(e2) || o.some(((t2) => e2 instanceof t2));
  }
  t.isSerializableObject = i;
  const c = function(e2, t2) {
    const n2 = Object.entries(e2).map((([e3, n3]) => [e3, t2(n3)]));
    return Object.fromEntries(n2);
  };
  t.serialize = function e2(t2) {
    return t2 && t2.constructor && "NativeImage" === t2.constructor.name ? (function(e3) {
      const t3 = [], n2 = e3.getScaleFactors();
      if (1 === n2.length) {
        const r2 = n2[0], o2 = e3.getSize(r2), i2 = e3.toBitmap({ scaleFactor: r2 });
        t3.push({ scaleFactor: r2, size: o2, buffer: i2 });
      } else for (const r2 of n2) {
        const n3 = e3.getSize(r2), o2 = e3.toDataURL({ scaleFactor: r2 });
        t3.push({ scaleFactor: r2, size: n3, dataURL: o2 });
      }
      return { __ELECTRON_SERIALIZED_NativeImage__: true, representations: t3 };
    })(t2) : Array.isArray(t2) ? t2.map(e2) : i(t2) ? t2 : t2 instanceof Object ? c(t2, e2) : t2;
  }, t.deserialize = function e2(t2) {
    return t2 && t2.__ELECTRON_SERIALIZED_NativeImage__ ? (function(e3) {
      const t3 = r.nativeImage.createEmpty();
      if (1 === e3.representations.length) {
        const { buffer: n2, size: r2, scaleFactor: o2 } = e3.representations[0], { width: i2, height: c2 } = r2;
        t3.addRepresentation({ buffer: n2, scaleFactor: o2, width: i2, height: c2 });
      } else for (const n2 of e3.representations) {
        const { dataURL: e4, size: r2, scaleFactor: o2 } = n2, { width: i2, height: c2 } = r2;
        t3.addRepresentation({ dataURL: e4, scaleFactor: o2, width: i2, height: c2 });
      }
      return t3;
    })(t2) : Array.isArray(t2) ? t2.map(e2) : i(t2) ? t2 : t2 instanceof Object ? c(t2, e2) : t2;
  };
}, 18962(e, t) {
  Object.defineProperty(t, "__esModule", { value: true }), t.CallbacksRegistry = void 0, t.CallbacksRegistry = class {
    constructor() {
      this.nextId = 0, this.callbacks = {}, this.callbackIds = /* @__PURE__ */ new WeakMap(), this.locationInfo = /* @__PURE__ */ new WeakMap();
    }
    add(e2) {
      let t2 = this.callbackIds.get(e2);
      if (null != t2) return t2;
      t2 = this.nextId += 1, this.callbacks[t2] = e2, this.callbackIds.set(e2, t2);
      const n = /at (.*)/gi, r = new Error().stack;
      if (!r) return t2;
      let o, i;
      for (; null !== (i = n.exec(r)); ) {
        const e3 = i[1];
        if (e3.includes("(native)")) continue;
        if (e3.includes("(<anonymous>)")) continue;
        if (e3.includes("callbacks-registry.js")) continue;
        if (e3.includes("remote.js")) continue;
        if (e3.includes("@electron/remote/dist")) continue;
        const t3 = /([^/^)]*)\)?$/gi.exec(e3);
        t3 && (o = t3[1]);
        break;
      }
      return this.locationInfo.set(e2, o), t2;
    }
    get(e2) {
      return this.callbacks[e2] || function() {
      };
    }
    getLocation(e2) {
      return this.locationInfo.get(e2);
    }
    apply(e2, ...t2) {
      return this.get(e2).apply(global, ...t2);
    }
    remove(e2) {
      const t2 = this.callbacks[e2];
      t2 && (this.callbackIds.delete(t2), delete this.callbacks[e2]);
    }
  };
}, 70156(e, t, n) {
  var r = this && this.__createBinding || (Object.create ? function(e2, t2, n2, r2) {
    void 0 === r2 && (r2 = n2), Object.defineProperty(e2, r2, { enumerable: true, get: function() {
      return t2[n2];
    } });
  } : function(e2, t2, n2, r2) {
    void 0 === r2 && (r2 = n2), e2[r2] = t2[n2];
  }), o = this && this.__exportStar || function(e2, t2) {
    for (var n2 in e2) "default" === n2 || Object.prototype.hasOwnProperty.call(t2, n2) || r(t2, e2, n2);
  };
  if (Object.defineProperty(t, "__esModule", { value: true }), "browser" === process.type) throw new Error('"@electron/remote" cannot be required in the browser process. Instead require("@electron/remote/main").');
  o(n(91348), t);
}, 91348(e, t, n) {
  Object.defineProperty(t, "__esModule", { value: true }), t.createFunctionWithReturnValue = t.getGlobal = t.getCurrentWebContents = t.getCurrentWindow = t.getBuiltin = void 0;
  const r = n(18962), o = n(31032), i = n(84157), c = n(27121), s = n(82069), { Promise: a } = global, u = new r.CallbacksRegistry(), l = /* @__PURE__ */ new Map(), d = new FinalizationRegistry(((e2) => {
    const t2 = l.get(e2);
    void 0 !== t2 && void 0 === t2.deref() && (l.delete(e2), i.ipcRenderer.send("REMOTE_BROWSER_DEREFERENCE", E, e2, 0));
  })), f = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakSet(), E = process.contextId || (function() {
    const e2 = s.getElectronBinding("v8_util");
    if (e2) return e2.getHiddenValue(global, "contextId");
    throw new Error("Electron >=v13.0.0-beta.6 required to support sandboxed renderers");
  })();
  process.on("exit", (() => {
    i.ipcRenderer.send("REMOTE_BROWSER_CONTEXT_RELEASE", E);
  }));
  const R = /* @__PURE__ */ Symbol("is-remote-proxy");
  function b(e2, t2 = /* @__PURE__ */ new Set()) {
    const n2 = (e3) => {
      if (t2.has(e3)) return { type: "value", value: null };
      if (e3 && e3.constructor && "NativeImage" === e3.constructor.name) return { type: "nativeimage", value: o.serialize(e3) };
      if (Array.isArray(e3)) {
        t2.add(e3);
        const n3 = { type: "array", value: b(e3, t2) };
        return t2.delete(e3), n3;
      }
      if (e3 instanceof Buffer) return { type: "buffer", value: e3 };
      if (o.isSerializableObject(e3)) return { type: "value", value: e3 };
      if ("object" == typeof e3) {
        if (o.isPromise(e3)) return { type: "promise", then: n2((function(t3, n3) {
          e3.then(t3, n3);
        })) };
        if (f.has(e3)) return { type: "remote-object", id: f.get(e3) };
        const r2 = { type: "object", name: e3.constructor ? e3.constructor.name : "", members: [] };
        t2.add(e3);
        for (const t3 in e3) r2.members.push({ name: t3, value: n2(e3[t3]) });
        return t2.delete(e3), r2;
      }
      return "function" == typeof e3 && p.has(e3) ? { type: "function-with-return-value", value: n2(e3()) } : "function" == typeof e3 ? { type: "function", id: u.add(e3), location: u.getLocation(e3), length: e3.length } : { type: "value", value: e3 };
    };
    return e2.map(n2);
  }
  function g(e2, t2, n2, r2) {
    if (Array.isArray(r2)) for (const o2 of r2) {
      if (Object.prototype.hasOwnProperty.call(t2, o2.name)) continue;
      const r3 = { enumerable: o2.enumerable };
      if ("method" === o2.type) {
        const t3 = function(...e3) {
          let r4;
          return r4 = this && this.constructor === t3 ? "REMOTE_BROWSER_MEMBER_CONSTRUCTOR" : "REMOTE_BROWSER_MEMBER_CALL", _(i.ipcRenderer.sendSync(r4, E, n2, o2.name, b(e3)));
        };
        let c2 = m(t3, n2, o2.name);
        r3.get = () => (c2.ref = e2, c2), r3.set = (e3) => (c2 = e3, e3), r3.configurable = true;
      } else "get" === o2.type && (r3.get = () => _(i.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", E, n2, o2.name)), o2.writable && (r3.set = (e3) => {
        const t3 = b([e3]), r4 = i.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_SET", E, n2, o2.name, t3);
        return null != r4 && _(r4), e3;
      }));
      Object.defineProperty(t2, o2.name, r3);
    }
  }
  function y(e2, t2, n2, r2) {
    if (null === r2) return;
    const o2 = {};
    g(e2, o2, n2, r2.members), y(e2, o2, n2, r2.proto), Object.setPrototypeOf(t2, o2);
  }
  function m(e2, t2, n2) {
    let r2 = false;
    const o2 = () => {
      if (r2) return;
      r2 = true;
      const o3 = i.ipcRenderer.sendSync("REMOTE_BROWSER_MEMBER_GET", E, t2, n2);
      g(e2, e2, o3.id, o3.members);
    };
    return new Proxy(e2, { set: (e3, t3, n3) => ("ref" !== t3 && o2(), e3[t3] = n3, true), get: (e3, t3) => {
      if (t3 === R) return true;
      Object.prototype.hasOwnProperty.call(e3, t3) || o2();
      const n3 = e3[t3];
      return "toString" === t3 && "function" == typeof n3 ? n3.bind(e3) : n3;
    }, ownKeys: (e3) => (o2(), Object.getOwnPropertyNames(e3)), getOwnPropertyDescriptor: (e3, t3) => Object.getOwnPropertyDescriptor(e3, t3) || (o2(), Object.getOwnPropertyDescriptor(e3, t3)) });
  }
  function _(e2) {
    if (!e2) return {};
    if ("value" === e2.type) return e2.value;
    if ("array" === e2.type) return e2.members.map(((e3) => _(e3)));
    if ("nativeimage" === e2.type) return o.deserialize(e2.value);
    if ("buffer" === e2.type) return Buffer.from(e2.value.buffer, e2.value.byteOffset, e2.value.byteLength);
    if ("promise" === e2.type) return a.resolve({ then: _(e2.then) });
    if ("error" === e2.type) return O(e2);
    if ("exception" === e2.type) throw "error" === e2.value.type ? O(e2.value) : new Error(`Unexpected value type in exception: ${e2.value.type}`);
    {
      let t2;
      if ("id" in e2) {
        const t3 = (function(e3) {
          const t4 = l.get(e3);
          if (void 0 !== t4) {
            const e4 = t4.deref();
            if (void 0 !== e4) return e4;
          }
        })(e2.id);
        if (void 0 !== t3) return t3;
      }
      if ("function" === e2.type) {
        const n2 = function(...t3) {
          let r2;
          return r2 = this && this.constructor === n2 ? "REMOTE_BROWSER_CONSTRUCTOR" : "REMOTE_BROWSER_FUNCTION_CALL", _(i.ipcRenderer.sendSync(r2, E, e2.id, b(t3)));
        };
        t2 = n2;
      } else t2 = {};
      return g(t2, t2, e2.id, e2.members), y(t2, t2, e2.id, e2.proto), t2.constructor && t2.constructor[R] && Object.defineProperty(t2.constructor, "name", { value: e2.name }), f.set(t2, e2.id), (function(e3, t3) {
        const n2 = new WeakRef(t3);
        l.set(e3, n2), d.register(t3, e3);
      })(e2.id, t2), t2;
    }
  }
  function O(e2) {
    const t2 = e2.value;
    for (const { name: n2, value: r2 } of e2.members) t2[n2] = _(r2);
    return t2;
  }
  function h(e2, t2) {
    i.ipcRenderer.on(e2, ((n2, r2, o2, ...c2) => {
      "number" != typeof n2.senderId || 0 === n2.senderId || void 0 === n2.senderId ? r2 === E ? t2(o2, ...c2) : i.ipcRenderer.send("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", E, r2, o2) : console.error(`Message ${e2} sent by unexpected WebContents (${n2.senderId})`);
    }));
  }
  const v = process.argv.includes("--enable-api-filtering-logging");
  function w() {
    const e2 = { stack: void 0 };
    return v && Error.captureStackTrace(e2, w), e2.stack;
  }
  h("REMOTE_RENDERER_CALLBACK", ((e2, t2) => {
    u.apply(e2, _(t2));
  })), h("REMOTE_RENDERER_RELEASE_CALLBACK", ((e2) => {
    u.remove(e2);
  })), t.require = (e2) => _(i.ipcRenderer.sendSync("REMOTE_BROWSER_REQUIRE", E, e2, w())), t.getBuiltin = function(e2) {
    return _(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_BUILTIN", E, e2, w()));
  }, t.getCurrentWindow = function() {
    return _(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WINDOW", E, w()));
  }, t.getCurrentWebContents = function() {
    return _(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", E, w()));
  }, t.getGlobal = function(e2) {
    return _(i.ipcRenderer.sendSync("REMOTE_BROWSER_GET_GLOBAL", E, e2, w()));
  }, Object.defineProperty(t, "process", { enumerable: true, get: () => t.getGlobal("process") }), t.createFunctionWithReturnValue = function(e2) {
    const t2 = () => e2;
    return p.add(t2), t2;
  }, c.browserModuleNames.forEach(((e2) => {
    Object.defineProperty(t, e2, { enumerable: true, get: () => t.getBuiltin(e2) });
  }));
} }]);
