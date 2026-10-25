(() => {
  "use strict";
  var e, t, r, n = { 27837(e2, t2, r2) {
    r2.d(t2, { A: () => s });
    var n2 = r2(30050), i2 = r2.n(n2), a2 = r2(77259), o2 = r2.n(a2)()(i2());
    o2.push([e2.id, "#root {\n	overflow: hidden;\n}\n\n.render-toast-container {\n	width: max-content;\n}\n", ""]);
    const s = o2;
  }, 42952(e2, t2, r2) {
    r2.d(t2, { Mz: () => l, nw: () => d, yo: () => u });
    var n2 = r2(84157), i2 = r2(22259), a2 = r2(7750), o2 = r2(1820), s = r2(9691);
    const c = { windowControl: null, dialogControl: null, toastWindowHandler: null };
    function l() {
      const e3 = (0, s.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
      if (!e3) throw new Error("getRendererInitialData() jsonParse error");
      return e3;
    }
    function d() {
      return c.toastWindowHandler = (function(e3, t3, r3) {
        let n3 = window?.remoteServiceInstanceId ?? l().remoteServiceInstanceId;
        if (r3 && (n3 = r3), !t3 || n3 !== window?.initialRemoteServiceInstanceId) {
          (0, a2.yg)().debug(`[Renderer] initializeIpcProxyForInstance ${e3} id: ${n3}; Old id ${window?.initialRemoteServiceInstanceId}`);
          const t4 = i2.f.provideProxy(n3);
          return window.initialRemoteServiceInstanceId = n3, t4;
        }
        return t3;
      })("toastWindowHandler", c.toastWindowHandler), c.toastWindowHandler;
    }
    function u() {
      n2.ipcRenderer.send(o2.oh);
    }
  }, 12965(e2, t2, r2) {
    r2.d(t2, { A: () => R }), r2(87894);
    var n2 = r2(79474), i2 = r2(48088), a2 = r2(30190), o2 = r2(48927), s = r2(84799), c = r2(7750);
    const l = 1024;
    var d = r2(42952);
    let u, p = false, m = 0, g = 0;
    function f() {
      const e3 = (0, d.Mz)().remoteServiceInstanceId ?? window.location.href, t3 = Math.round(performance.memory.usedJSHeapSize / l), r3 = Math.round(performance.memory.totalJSHeapSize / l), n3 = Math.round(performance.memory.jsHeapSizeLimit / l), i3 = t3 / n3, a3 = `Heap info for renderer - ${e3}. Heap Used ${t3} Kb. Heap Total ${r3} Kb. Heap Limit ${n3} Kb.`;
      return i3 <= 0.8 ? (m = 0, void (g = 0)) : i3 > 0.8 && m < 2 ? ((0, c.yg)().warn(a3), void m++) : void (i3 > 0.97 && (p || (s2 = { level: "warning", breadcrumb: a3 }, (0, o2.ZQ)({ category: "message", message: s2.breadcrumb, level: s2.level }), p = true), g < 2 && ((0, c.yg)().warn(a3), g++)));
      var s2;
    }
    var h = r2(22259), v = r2(78449);
    function w({ onUnmount: e3, fallbackComponent: t3 }) {
      return (0, n2.useEffect)((() => {
        if (e3) return () => e3();
      }), []), t3 ?? n2.createElement(n2.Fragment, null);
    }
    var y = r2(72539), S = r2.n(y), b = r2(48560), P = r2.n(b), A = r2(57148), I = r2.n(A), D = r2(60251), k = r2.n(D), j = r2(81263), C = r2.n(j), F = r2(50892), O = r2.n(F), x = r2(27837), E = {};
    E.styleTagTransform = O(), E.setAttributes = k(), E.insert = I().bind(null, "head"), E.domAPI = P(), E.insertStyleElement = C(), S()(x.A, E), x.A && x.A.locals && x.A.locals, h.f.initializeRpc();
    class M extends n2.Component {
      ref = n2.createRef();
      toastView = (0, d.Mz)();
      remoteServiceInstanceId = h.f.registerRemoteObject(this, "tvd:toast-view");
      registerDimensionsCalcView() {
        (0, d.nw)().registerDimensionsCalcView(this.remoteServiceInstanceId).catch(((e3) => {
          (0, c.yg)().error(`<ToastView>.registerDimensionsCalcView(): getToastWindowHandlers().registerDimensionsCalcView(remoteServiceInstanceId: ${this.remoteServiceInstanceId})`, e3);
        }));
      }
      componentDidMount() {
        (0, v.jZ)(this.toastView.isRtl);
      }
      componentWillUnmount() {
        h.f.unregisterRemoteObject(this.remoteServiceInstanceId);
      }
      render() {
        const e3 = this.toastView.toast, t3 = { toastView: { toast: e3 } }, r3 = R.getRenderer(e3.rendererType);
        return n2.createElement("div", { className: "render-toast-container", ref: this.ref }, n2.createElement(n2.Suspense, { fallback: n2.createElement(w, { onUnmount: () => this.registerDimensionsCalcView() }) }, r3 && r3(t3)));
      }
      getToastViewDimensions() {
        if (!this.ref.current) return Promise.resolve({ width: 0, height: 0 });
        const { width: e3, height: t3 } = this.ref.current.getBoundingClientRect();
        return Promise.resolve({ width: Math.ceil(e3), height: Math.ceil(t3) });
      }
    }
    r2(14448), (0, a2.F)(), (function(e3 = 6e4) {
      var t3;
      t3 = Math.round(performance.memory.jsHeapSizeLimit / l).toString(), (0, o2.NA)("memory.heapLimit", t3), u ? (0, c.yg)().error("Heap log for this renderer already exist") : u = setInterval(f, e3);
    })();
    const R = new class {
      renderers = /* @__PURE__ */ new Map();
      registerLazyRenderer(e3, t3) {
        this.renderers.set(e3, ((e4) => {
          const r3 = t3;
          return n2.createElement(r3, { ...e4 });
        }));
      }
      getRenderer(e3) {
        const t3 = this.renderers.get(e3);
        return t3 || (0, c.yg)().error(`Renderer for type ${e3} not registered, check renderers configuration`), t3;
      }
    }(), T = { [s.p.Download]: n2.lazy((() => Promise.all([r2.e(369), r2.e(1566), r2.e(156), r2.e(7053)]).then(r2.bind(r2, 49871)))), [s.p.Fullscreen]: n2.lazy((() => Promise.all([r2.e(369), r2.e(8898)]).then(r2.bind(r2, 18898)))), [s.p.Zoom]: n2.lazy((() => r2.e(7338).then(r2.bind(r2, 47338)))) };
    for (const e3 of Object.keys(T)) R.registerLazyRenderer(e3, T[e3]);
    const z = document.getElementById("root");
    z && (0, i2.H)(z).render(n2.createElement(M, null));
  }, 22259(e2, t2, r2) {
    r2.d(t2, { f: () => n2 }), r2(34957);
    var n2 = r2(56039);
  }, 21383(e2, t2, r2) {
    r2.d(t2, { k: () => n2 });
    const n2 = "tvd:logger-service";
    var i2;
    !(function(e3) {
      e3[e3.Debug = 0] = "Debug", e3[e3.Info = 1] = "Info", e3[e3.Warn = 2] = "Warn", e3[e3.Error = 3] = "Error";
    })(i2 || (i2 = {}));
  }, 7750(e2, t2, r2) {
    r2.d(t2, { Ow: () => c, di: () => s, ld: () => o2, yg: () => l });
    var n2 = r2(84157), i2 = r2(22259), a2 = r2(21383);
    function o2() {
      return i2.f.getProvider().provide(a2.k);
    }
    function s() {
      return n2.ipcMain ? i2.f.getProvider().provide(a2.k) : i2.f.provideProxy(a2.k);
    }
    function c() {
      return i2.f.provide(a2.k);
    }
    function l() {
      return i2.f.provideProxy(a2.k);
    }
  }, 10284(e2, t2, r2) {
    r2.d(t2, { l: () => c });
    var n2 = r2(84157), i2 = r2(79896), a2 = r2(16928), o2 = r2(7750), s = r2(33077);
    class c {
      static appStorageFolderName = "TVAppStorage";
      static appUserStorageFolderName = "TVUserStorage";
      static appStateFileName = "appState.json";
      static encoding = "utf8";
      static exists(e3) {
        return i2.existsSync(e3);
      }
      static createDir(e3, t3) {
        i2.mkdirSync(e3, t3);
      }
      static deleteDir(e3, t3) {
        return i2.rmdirSync(e3, t3);
      }
      static delete(e3) {
        i2.unlinkSync(e3);
      }
      static deleteAsync(e3) {
        return new Promise(((t3, r3) => {
          i2.unlink(e3, ((e4) => {
            e4 ? r3(e4) : t3();
          }));
        }));
      }
      static writeFileAsync(e3, t3, r3) {
        return i2.promises.writeFile(e3, t3, { encoding: this.encoding, flag: r3 }).catch(((e4) => (0, o2.ld)().error("Error while write file: ", e4)));
      }
      static readFileAsync(e3, t3) {
        return new Promise(((r3, n3) => {
          i2.readFile(e3, { encoding: this.encoding, flag: t3 }, ((e4, t4) => {
            null !== e4 ? n3(e4) : r3(t4);
          }));
        }));
      }
      static readFileSync(e3) {
        return i2.readFileSync(e3, { encoding: "utf8" });
      }
      static readDirAsync(e3) {
        return new Promise(((t3, r3) => {
          i2.readdir(e3, { encoding: this.encoding }, ((e4, n3) => {
            null !== e4 ? r3(e4) : t3(n3);
          }));
        }));
      }
      static readDirSync(e3) {
        return i2.readdirSync(e3);
      }
      static fileStats(e3, t3) {
        return new Promise(((r3, n3) => {
          i2.stat(e3, t3 ?? { bigint: false }, ((e4, t4) => {
            null !== e4 ? n3(e4) : r3(t4);
          }));
        }));
      }
      static async dirContentStats(e3) {
        const t3 = await this.readDirAsync(e3);
        return Promise.all(t3.map((async (t4) => {
          const r3 = (0, a2.join)(e3, t4);
          return { fullPath: r3, stats: await this.fileStats(r3) };
        })));
      }
      static makeAppDataPath(e3) {
        return (0, a2.join)(c.getDefaultCriticalAppPathOrThrow("appData"), n2.app.getName(), e3);
      }
      static makeAppRootPath(e3) {
        const t3 = n2.app.getAppPath();
        return (0, a2.join)(t3, e3);
      }
      static createWriteStream(e3, t3) {
        return i2.createWriteStream(e3, t3);
      }
      static getDefaultAppPath(e3) {
        try {
          return n2.app.getPath(e3);
        } catch (t3) {
          (0, o2.ld)().error(`[FileSystemProvider.getDefaultAppPath()] Exception on getPath(${e3}): ${(0, s.bw)(t3)}`);
        }
        return null;
      }
      static getDefaultCriticalAppPathOrThrow(e3) {
        return n2.app.getPath(e3);
      }
      static getAppDocumentsPath() {
        const e3 = c.getDefaultAppPath("documents");
        return e3 ? (0, a2.join)(e3, n2.app.getName()) : null;
      }
      static getAppUserStorageFolderPath() {
        return (0, a2.join)(c.getDefaultCriticalAppPathOrThrow("userData"), c.appUserStorageFolderName);
      }
      static getAppStateFilePath() {
        const e3 = c.getDefaultCriticalAppPathOrThrow("userData"), t3 = (0, a2.join)(e3, c.appStorageFolderName);
        return c.exists(t3) || c.createDir(t3, { recursive: true }), (0, a2.join)(t3, c.appStateFileName);
      }
    }
  }, 87894(e2, t2, r2) {
    r2.d(t2, { A: () => p });
    var n2 = r2(16928), i2 = r2(84157), a2 = r2(87574), o2 = r2(14381), s = r2(62020), c = r2(10284), l = r2(1820), d = r2(9691);
    let u;
    if (i2.ipcMain) {
      let m = function() {
        const e3 = {}, t3 = n2.join(i2.app.getAppPath(), "resources", "locales");
        for (const r3 of c.l.readDirSync(t3)) {
          const i3 = c.l.readFileSync(n2.join(t3, r3)), a3 = n2.parse(r3).name, o3 = (0, d.G)(i3);
          o3 && (e3[a3] = { translation: o3 });
        }
        return e3;
      };
      u = m(), i2.ipcMain.on(l.ox, ((e3) => {
        e3.returnValue = u;
      }));
    } else u = i2.ipcRenderer.sendSync(l.ox);
    a2.Ay.use(o2.A).use(s.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: u, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
    const p = a2.Ay;
  }, 84799(e2, t2, r2) {
    r2.d(t2, { p: () => n2 });
    const n2 = { Download: "download", Fullscreen: "fullscreen", Zoom: "zoom" };
  }, 8750(e2, t2, r2) {
    var n2, i2, a2, o2;
    !(function(e3) {
      e3[e3.Normal = 0] = "Normal", e3[e3.Maximized = 1] = "Maximized", e3[e3.Minimized = 2] = "Minimized", e3[e3.Hidden = 3] = "Hidden", e3[e3.Fullscreen = 4] = "Fullscreen", e3[e3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(n2 || (n2 = {})), (function(e3) {
      e3.Basic = "basic", e3.Options = "options", e3.Credentials = "credentials", e3.SignIn = "sign-in", e3.Settings = "settings", e3.SaveChanges = "save-changes", e3.Welcome = "welcome";
    })(i2 || (i2 = {})), (function(e3) {
      e3.Show = "show", e3.Move = "move";
    })(a2 || (a2 = {})), (function(e3) {
      e3[e3.Basic = 0] = "Basic", e3[e3.ChartData = 1] = "ChartData";
    })(o2 || (o2 = {}));
  }, 1820(e2, t2, r2) {
    r2.d(t2, { oh: () => i2, ox: () => n2 });
    const n2 = "tvd:locale-get-translations", i2 = "tvd:common-view-ready";
  }, 92763(e2, t2, r2) {
    r2.d(t2, { uY: () => i2 }), r2(7750);
    var n2 = r2(33077);
    function i2(e3) {
      e3.catch(((e4) => {
        const t3 = (0, n2.bw)(e4);
        console.warn(`Ignoring promise, but error: ${t3}`), console.warn(e4.stack);
      }));
    }
  }, 9691(e2, t2, r2) {
    r2.d(t2, { G: () => i2 });
    var n2 = r2(7750);
    const i2 = (e3, t3) => {
      try {
        return JSON.parse(e3, t3);
      } catch (e4) {
        return (0, n2.di)().error("jsonParse JSON.parse error", e4), null;
      }
    };
  }, 78449(e2, t2, r2) {
    r2.d(t2, { HL: () => a2, jZ: () => o2 });
    const n2 = ["ar", "ar_AE"], i2 = ["he", "he_IL"], a2 = (e3) => [...n2, ...i2].includes(e3);
    function o2(e3) {
      document.querySelector("html")?.setAttribute("dir", e3 ? "rtl" : "ltr");
    }
  }, 84157(e2) {
    e2.exports = require("electron");
  }, 79896(e2) {
    e2.exports = require("fs");
  }, 16928(e2) {
    e2.exports = require("path");
  }, 87016(e2) {
    e2.exports = require("url");
  } }, i = {};
  function a(e2) {
    var t2 = i[e2];
    if (void 0 !== t2) return t2.exports;
    var r2 = i[e2] = { id: e2, exports: {} };
    return n[e2].call(r2.exports, r2, r2.exports, a), r2.exports;
  }
  a.m = n, e = [], a.O = (t2, r2, n2, i2) => {
    if (!r2) {
      var o2 = 1 / 0;
      for (d = 0; d < e.length; d++) {
        for (var [r2, n2, i2] = e[d], s = true, c = 0; c < r2.length; c++) (false & i2 || o2 >= i2) && Object.keys(a.O).every(((e2) => a.O[e2](r2[c]))) ? r2.splice(c--, 1) : (s = false, i2 < o2 && (o2 = i2));
        if (s) {
          e.splice(d--, 1);
          var l = n2();
          void 0 !== l && (t2 = l);
        }
      }
      return t2;
    }
    i2 = i2 || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > i2; d--) e[d] = e[d - 1];
    e[d] = [r2, n2, i2];
  }, a.n = (e2) => {
    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return a.d(t2, { a: t2 }), t2;
  }, a.d = (e2, t2) => {
    for (var r2 in t2) a.o(t2, r2) && !a.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  }, a.f = {}, a.e = (e2) => Promise.all(Object.keys(a.f).reduce(((t2, r2) => (a.f[r2](e2, t2), t2)), [])), a.u = (e2) => e2 + ".js", a.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), a.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), t = {}, r = "tradingview-desktop:", a.l = (e2, n2, i2, o2) => {
    if (t[e2]) t[e2].push(n2);
    else {
      var s, c;
      if (void 0 !== i2) for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
        var u = l[d];
        if (u.getAttribute("src") == e2 || u.getAttribute("data-webpack") == r + i2) {
          s = u;
          break;
        }
      }
      s || (c = true, (s = document.createElement("script")).charset = "utf-8", a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", r + i2), s.src = e2), t[e2] = [n2];
      var p = (r2, n3) => {
        s.onerror = s.onload = null, clearTimeout(m);
        var i3 = t[e2];
        if (delete t[e2], s.parentNode && s.parentNode.removeChild(s), i3 && i3.forEach(((e3) => e3(n3))), r2) return r2(n3);
      }, m = setTimeout(p.bind(null, void 0, { type: "timeout", target: s }), 12e4);
      s.onerror = p.bind(null, s.onerror), s.onload = p.bind(null, s.onload), c && document.head.appendChild(s);
    }
  }, a.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, (() => {
    var e2;
    a.g.importScripts && (e2 = a.g.location + "");
    var t2 = a.g.document;
    if (!e2 && t2 && (t2.currentScript && "SCRIPT" === t2.currentScript.tagName.toUpperCase() && (e2 = t2.currentScript.src), !e2)) {
      var r2 = t2.getElementsByTagName("script");
      if (r2.length) for (var n2 = r2.length - 1; n2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = r2[n2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e2 + "../";
  })(), (() => {
    a.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var e2 = { 2448: 0 };
    a.f.j = (t3, r3) => {
      var n2 = a.o(e2, t3) ? e2[t3] : void 0;
      if (0 !== n2) if (n2) r3.push(n2[2]);
      else {
        var i2 = new Promise(((r4, i3) => n2 = e2[t3] = [r4, i3]));
        r3.push(n2[2] = i2);
        var o2 = a.p + a.u(t3), s = new Error();
        a.l(o2, ((r4) => {
          if (a.o(e2, t3) && (0 !== (n2 = e2[t3]) && (e2[t3] = void 0), n2)) {
            var i3 = r4 && ("load" === r4.type ? "missing" : r4.type), o3 = r4 && r4.target && r4.target.src;
            s.message = "Loading chunk " + t3 + " failed.\n(" + i3 + ": " + o3 + ")", s.name = "ChunkLoadError", s.type = i3, s.request = o3, n2[1](s);
          }
        }), "chunk-" + t3, t3);
      }
    }, a.O.j = (t3) => 0 === e2[t3];
    var t2 = (t3, r3) => {
      var n2, i2, [o2, s, c] = r3, l = 0;
      if (o2.some(((t4) => 0 !== e2[t4]))) {
        for (n2 in s) a.o(s, n2) && (a.m[n2] = s[n2]);
        if (c) var d = c(a);
      }
      for (t3 && t3(r3); l < o2.length; l++) i2 = o2[l], a.o(e2, i2) && e2[i2] && e2[i2][0](), e2[i2] = 0;
      return a.O(d);
    }, r2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    r2.forEach(t2.bind(null, 0)), r2.push = t2.bind(null, r2.push.bind(r2));
  })(), a.nc = void 0;
  var o = a.O(void 0, [3703, 2252, 4870, 9883, 9948, 3409, 8504], (() => a(12965)));
  o = a.O(o);
})();
