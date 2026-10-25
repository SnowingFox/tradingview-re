(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[9197], { 71590(e, t, n) {
  "use strict";
  n(79459);
}, 42012(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true });
  const n = (e2, t2) => `${e2.id}-${t2}`;
  t.default = new class {
    constructor() {
      this.nextId = 0, this.storage = {}, this.owners = {}, this.electronIds = /* @__PURE__ */ new WeakMap();
    }
    add(e2, t2, r) {
      const o = this.saveToStorage(r), s = n(e2, t2);
      let i = this.owners[s];
      return i || (i = this.owners[s] = /* @__PURE__ */ new Map(), this.registerDeleteListener(e2, t2)), i.has(o) || (i.set(o, 0), this.storage[o].count++), i.set(o, i.get(o) + 1), o;
    }
    get(e2) {
      const t2 = this.storage[e2];
      if (null != t2) return t2.object;
    }
    remove(e2, t2, r) {
      const o = n(e2, t2), s = this.owners[o];
      if (s && s.has(r)) {
        const e3 = s.get(r) - 1;
        e3 <= 0 ? (s.delete(r), this.dereference(r)) : s.set(r, e3);
      }
    }
    clear(e2, t2) {
      const r = n(e2, t2), o = this.owners[r];
      if (o) {
        for (const e3 of o.keys()) this.dereference(e3);
        delete this.owners[r];
      }
    }
    saveToStorage(e2) {
      let t2 = this.electronIds.get(e2);
      return t2 || (t2 = ++this.nextId, this.storage[t2] = { count: 0, object: e2 }, this.electronIds.set(e2, t2)), t2;
    }
    dereference(e2) {
      const t2 = this.storage[e2];
      null != t2 && (t2.count -= 1, 0 === t2.count && (this.electronIds.delete(t2.object), delete this.storage[e2]));
    }
    registerDeleteListener(e2, t2) {
      const n2 = t2.split("-")[0], r = (o, s) => {
        s && s.toString() === n2 && (e2.removeListener("render-view-deleted", r), this.clear(e2, t2));
      };
      e2.on("render-view-deleted", r);
    }
  }();
}, 79459(e, t, n) {
  "use strict";
  e = n.nmd(e);
  var r = this && this.__importDefault || function(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  };
  Object.defineProperty(t, "__esModule", { value: true }), t.initialize = t.isInitialized = t.enable = t.isRemoteModuleEnabled = void 0;
  const o = n(24434), s = r(n(42012)), i = n(31032), a = n(84157), u = n(82069), { Promise: c } = global, l = u.getElectronBinding("v8_util"), d = (() => {
    var e2, t2;
    const n2 = Number(null === (t2 = null === (e2 = process.versions.electron) || void 0 === e2 ? void 0 : e2.split(".")) || void 0 === t2 ? void 0 : t2[0]);
    return Number.isNaN(n2) || n2 < 14;
  })(), f = ["length", "name", "arguments", "caller", "prototype"], m = /* @__PURE__ */ new Map(), E = new FinalizationRegistry(((e2) => {
    const t2 = e2.id[0] + "~" + e2.id[1], n2 = m.get(t2);
    if (void 0 !== n2 && void 0 === n2.deref() && (m.delete(t2), !e2.webContents.isDestroyed())) try {
      e2.webContents.sendToFrame(e2.frameId, "REMOTE_RENDERER_RELEASE_CALLBACK", e2.id[0], e2.id[1]);
    } catch (e3) {
      console.warn(`sendToFrame() failed: ${e3}`);
    }
  }));
  function g(e2) {
    const t2 = e2[0] + "~" + e2[1], n2 = m.get(t2);
    if (void 0 !== n2) {
      const e3 = n2.deref();
      if (void 0 !== e3) return e3;
    }
  }
  const R = /* @__PURE__ */ new WeakMap(), b = function(e2) {
    let t2 = Object.getOwnPropertyNames(e2);
    return "function" == typeof e2 && (t2 = t2.filter(((e3) => !f.includes(e3)))), t2.map(((t3) => {
      const n2 = Object.getOwnPropertyDescriptor(e2, t3);
      let r2, o2 = false;
      return void 0 === n2.get && "function" == typeof e2[t3] ? r2 = "method" : ((n2.set || n2.writable) && (o2 = true), r2 = "get"), { name: t3, enumerable: n2.enumerable, writable: o2, type: r2 };
    }));
  }, h = function(e2) {
    const t2 = Object.getPrototypeOf(e2);
    return null === t2 || t2 === Object.prototype ? null : { members: b(t2), proto: h(t2) };
  }, v = function(e2, t2, n2, r2 = false) {
    let o2;
    switch (typeof n2) {
      case "object":
        o2 = n2 instanceof Buffer ? "buffer" : n2 && n2.constructor && "NativeImage" === n2.constructor.name ? "nativeimage" : Array.isArray(n2) ? "array" : n2 instanceof Error ? "error" : i.isSerializableObject(n2) ? "value" : i.isPromise(n2) ? "promise" : Object.prototype.hasOwnProperty.call(n2, "callee") && null != n2.length ? "array" : r2 && l.getHiddenValue(n2, "simple") ? "value" : "object";
        break;
      case "function":
        o2 = "function";
        break;
      default:
        o2 = "value";
    }
    return "array" === o2 ? { type: o2, members: n2.map(((n3) => v(e2, t2, n3, r2))) } : "nativeimage" === o2 ? { type: o2, value: i.serialize(n2) } : "object" === o2 || "function" === o2 ? { type: o2, name: n2.constructor ? n2.constructor.name : "", id: s.default.add(e2, t2, n2), members: b(n2), proto: h(n2) } : "buffer" === o2 ? { type: o2, value: n2 } : "promise" === o2 ? (n2.then((function() {
    }), (function() {
    })), { type: o2, then: v(e2, t2, (function(e3, t3) {
      n2.then(e3, t3);
    })) }) : "error" === o2 ? { type: o2, value: n2, members: Object.keys(n2).map(((r3) => ({ name: r3, value: v(e2, t2, n2[r3]) }))) } : { type: "value", value: n2 };
  }, p = function(e2) {
    const t2 = new Error(e2);
    throw t2.code = "EBADRPC", t2.errno = -72, t2;
  }, w = (e2, t2) => {
    let n2 = `Attempting to call a function in a renderer window that has been closed or released.
Function provided here: ${R.get(t2)}`;
    if (e2 instanceof o.EventEmitter) {
      const r2 = e2.eventNames().filter(((n3) => e2.listeners(n3).includes(t2)));
      r2.length > 0 && (n2 += `
Remote event names: ${r2.join(", ")}`, r2.forEach(((n3) => {
        e2.removeListener(n3, t2);
      })));
    }
    console.warn(n2);
  }, O = function(e2, t2, n2, r2) {
    const o2 = function(r3) {
      switch (r3.type) {
        case "nativeimage":
          return i.deserialize(r3.value);
        case "value":
          return r3.value;
        case "remote-object":
          return s.default.get(r3.id);
        case "array":
          return O(e2, t2, n2, r3.value);
        case "buffer":
          return Buffer.from(r3.value.buffer, r3.value.byteOffset, r3.value.byteLength);
        case "promise":
          return c.resolve({ then: o2(r3.then) });
        case "object": {
          const e3 = "Object" !== r3.name ? /* @__PURE__ */ Object.create({ constructor: (a2 = r3.name, new Proxy(Object, { get: (e4, t3, n3) => "name" === t3 ? a2 : Reflect.get(e4, t3, n3) })) }) : {};
          for (const { name: t3, value: n3 } of r3.members) e3[t3] = o2(n3);
          return e3;
        }
        case "function-with-return-value": {
          const e3 = o2(r3.value);
          return function() {
            return e3;
          };
        }
        case "function": {
          const o3 = [n2, r3.id], s2 = g(o3);
          if (void 0 !== s2) return s2;
          const i2 = function(...o4) {
            let s3 = false;
            if (!e2.isDestroyed()) try {
              s3 = false !== e2.sendToFrame(t2, "REMOTE_RENDERER_CALLBACK", n2, r3.id, v(e2, n2, o4));
            } catch (e3) {
              console.warn(`sendToFrame() failed: ${e3}`);
            }
            s3 || w(this, i2);
          };
          return R.set(i2, r3.location), Object.defineProperty(i2, "length", { value: r3.length }), (function(e3, t3, n3, r4) {
            const o4 = new WeakRef(r4), s3 = e3[0] + "~" + e3[1];
            m.set(s3, o4), E.register(r4, { id: e3, webContents: t3, frameId: n3 });
          })(o3, e2, t2, i2), i2;
        }
        default:
          throw new TypeError(`Unknown type: ${r3.type}`);
      }
      var a2;
    };
    return r2.map(o2);
  }, _ = /* @__PURE__ */ new WeakMap();
  t.isRemoteModuleEnabled = function(e2) {
    return d && !_.has(e2) && _.set(e2, (function(e3) {
      const t2 = e3.getLastWebPreferences() || {};
      return null != t2.enableRemoteModule && !!t2.enableRemoteModule;
    })(e2)), _.get(e2);
  }, t.enable = function(e2) {
    _.set(e2, true);
  };
  const y = function(e2, n2) {
    a.ipcMain.on(e2, ((e3, r2, ...o2) => {
      let s2;
      if (t.isRemoteModuleEnabled(e3.sender)) {
        try {
          s2 = n2(e3, r2, ...o2);
        } catch (t2) {
          s2 = { type: "exception", value: v(e3.sender, r2, t2) };
        }
        void 0 !== s2 && (e3.returnValue = s2);
      } else e3.returnValue = { type: "exception", value: v(e3.sender, r2, new Error('@electron/remote is disabled for this WebContents. Call require("@electron/remote/main").enable(webContents) to enable it.')) };
    }));
  }, C = function(e2, t2, ...n2) {
    const r2 = { sender: e2, returnValue: void 0, defaultPrevented: false };
    return a.app.emit(t2, r2, e2, ...n2), e2.emit(t2, r2, ...n2), r2;
  }, T = function(e2, t2, n2) {
    n2 && console.warn(`WebContents (${e2.id}): ${t2}`, n2);
  };
  let M = false;
  t.isInitialized = function() {
    return M;
  }, t.initialize = function() {
    if (M) throw new Error("@electron/remote has already been initialized");
    M = true, y("REMOTE_BROWSER_WRONG_CONTEXT_ERROR", (function(e2, t2, n2, r2) {
      const o2 = g([n2, r2]);
      void 0 !== o2 && w(e2.sender, o2);
    })), y("REMOTE_BROWSER_REQUIRE", (function(t2, n2, r2, o2) {
      T(t2.sender, `remote.require('${r2}')`, o2);
      const s2 = C(t2.sender, "remote-require", r2);
      if (void 0 === s2.returnValue) {
        if (s2.defaultPrevented) throw new Error(`Blocked remote.require('${r2}')`);
        if (process.mainModule) s2.returnValue = process.mainModule.require(r2);
        else {
          let t3 = e;
          for (; t3.parent; ) t3 = t3.parent;
          s2.returnValue = t3.require(r2);
        }
      }
      return v(t2.sender, n2, s2.returnValue);
    })), y("REMOTE_BROWSER_GET_BUILTIN", (function(e2, t2, r2, o2) {
      T(e2.sender, `remote.getBuiltin('${r2}')`, o2);
      const s2 = C(e2.sender, "remote-get-builtin", r2);
      if (void 0 === s2.returnValue) {
        if (s2.defaultPrevented) throw new Error(`Blocked remote.getBuiltin('${r2}')`);
        s2.returnValue = n(84157)[r2];
      }
      return v(e2.sender, t2, s2.returnValue);
    })), y("REMOTE_BROWSER_GET_GLOBAL", (function(e2, t2, n2, r2) {
      T(e2.sender, `remote.getGlobal('${n2}')`, r2);
      const o2 = C(e2.sender, "remote-get-global", n2);
      if (void 0 === o2.returnValue) {
        if (o2.defaultPrevented) throw new Error(`Blocked remote.getGlobal('${n2}')`);
        o2.returnValue = global[n2];
      }
      return v(e2.sender, t2, o2.returnValue);
    })), y("REMOTE_BROWSER_GET_CURRENT_WINDOW", (function(e2, t2, n2) {
      T(e2.sender, "remote.getCurrentWindow()", n2);
      const r2 = C(e2.sender, "remote-get-current-window");
      if (void 0 === r2.returnValue) {
        if (r2.defaultPrevented) throw new Error("Blocked remote.getCurrentWindow()");
        r2.returnValue = e2.sender.getOwnerBrowserWindow();
      }
      return v(e2.sender, t2, r2.returnValue);
    })), y("REMOTE_BROWSER_GET_CURRENT_WEB_CONTENTS", (function(e2, t2, n2) {
      T(e2.sender, "remote.getCurrentWebContents()", n2);
      const r2 = C(e2.sender, "remote-get-current-web-contents");
      if (void 0 === r2.returnValue) {
        if (r2.defaultPrevented) throw new Error("Blocked remote.getCurrentWebContents()");
        r2.returnValue = e2.sender;
      }
      return v(e2.sender, t2, r2.returnValue);
    })), y("REMOTE_BROWSER_CONSTRUCTOR", (function(e2, t2, n2, r2) {
      r2 = O(e2.sender, e2.frameId, t2, r2);
      const o2 = s.default.get(n2);
      return null == o2 && p(`Cannot call constructor on missing remote object ${n2}`), v(e2.sender, t2, new o2(...r2));
    })), y("REMOTE_BROWSER_FUNCTION_CALL", (function(e2, t2, n2, r2) {
      r2 = O(e2.sender, e2.frameId, t2, r2);
      const o2 = s.default.get(n2);
      null == o2 && p(`Cannot call function on missing remote object ${n2}`);
      try {
        return v(e2.sender, t2, o2(...r2), true);
      } catch (e3) {
        const t3 = new Error(`Could not call remote function '${o2.name || "anonymous"}'. Check that the function signature is correct. Underlying error: ${e3}
` + (e3 instanceof Error ? `Underlying stack: ${e3.stack}
` : ""));
        throw t3.cause = e3, t3;
      }
    })), y("REMOTE_BROWSER_MEMBER_CONSTRUCTOR", (function(e2, t2, n2, r2, o2) {
      o2 = O(e2.sender, e2.frameId, t2, o2);
      const i2 = s.default.get(n2);
      return null == i2 && p(`Cannot call constructor '${r2}' on missing remote object ${n2}`), v(e2.sender, t2, new i2[r2](...o2));
    })), y("REMOTE_BROWSER_MEMBER_CALL", (function(e2, t2, n2, r2, o2) {
      o2 = O(e2.sender, e2.frameId, t2, o2);
      const i2 = s.default.get(n2);
      null == i2 && p(`Cannot call method '${r2}' on missing remote object ${n2}`);
      try {
        return v(e2.sender, t2, i2[r2](...o2), true);
      } catch (e3) {
        const t3 = new Error(`Could not call remote method '${r2}'. Check that the method signature is correct. Underlying error: ${e3}` + (e3 instanceof Error ? `Underlying stack: ${e3.stack}
` : ""));
        throw t3.cause = e3, t3;
      }
    })), y("REMOTE_BROWSER_MEMBER_SET", (function(e2, t2, n2, r2, o2) {
      o2 = O(e2.sender, e2.frameId, t2, o2);
      const i2 = s.default.get(n2);
      return null == i2 && p(`Cannot set property '${r2}' on missing remote object ${n2}`), i2[r2] = o2[0], null;
    })), y("REMOTE_BROWSER_MEMBER_GET", (function(e2, t2, n2, r2) {
      const o2 = s.default.get(n2);
      return null == o2 && p(`Cannot get property '${r2}' on missing remote object ${n2}`), v(e2.sender, t2, o2[r2]);
    })), y("REMOTE_BROWSER_DEREFERENCE", (function(e2, t2, n2) {
      s.default.remove(e2.sender, t2, n2);
    })), y("REMOTE_BROWSER_CONTEXT_RELEASE", ((e2, t2) => (s.default.clear(e2.sender, t2), null)));
  };
}, 35082(e, t, n) {
  n(71590);
}, 17527(e, t, n) {
  "use strict";
  function r(e2) {
    return s(e2, i);
  }
  function o(e2) {
    return s(e2, a);
  }
  function s(e2, t2) {
    const n2 = Object.entries(e2).filter(t2), r2 = {};
    for (const [e3, t3] of n2) r2[e3] = t3;
    return r2;
  }
  function i(e2) {
    const [t2, n2] = e2;
    return 0 === t2.indexOf("data-") && "string" == typeof n2;
  }
  function a(e2) {
    return 0 === e2[0].indexOf("aria-");
  }
  n.d(t, { En: () => o, r8: () => r });
}, 79474(e, t, n) {
  "use strict";
  e.exports = n(22749);
} }]);
