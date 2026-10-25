(() => {
  var e, r = { 92920(e2, r2, t2) {
    e2.exports = t2(70156);
  }, 34639(e2, r2, t2) {
    "use strict";
    t2.d(r2, { A: () => i });
    var n2 = t2(30050), o2 = t2.n(n2), a = t2(77259), s = t2.n(a)()(o2());
    s.push([e2.id, ".crash-buttons-container {\n	border: 1px solid red;\n	margin: auto;\n}\n\n.process-container {\n	padding: 20px;\n	display: flex;\n	flex-direction: column;\n	gap: 6px;\n}\n", ""]);
    const i = s;
  }, 4477(e2, r2, t2) {
    "use strict";
    var n2 = t2(79474), o2 = t2(48088), a = t2(30190), s = t2(48927), i = t2(7750);
    const c = 1024;
    var l = t2(84157), d = t2(22259), u = t2(9691);
    let h, p = false, v = 0, f = 0;
    function g() {
      const e3 = (function() {
        const e4 = (0, u.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
        if (!e4) throw new Error("getRendererInitialData() jsonParse error");
        return e4;
      })().remoteServiceInstanceId ?? window.location.href, r3 = Math.round(performance.memory.usedJSHeapSize / c), t3 = Math.round(performance.memory.totalJSHeapSize / c), n3 = Math.round(performance.memory.jsHeapSizeLimit / c), o3 = r3 / n3, a2 = `Heap info for renderer - ${e3}. Heap Used ${r3} Kb. Heap Total ${t3} Kb. Heap Limit ${n3} Kb.`;
      return o3 <= 0.8 ? (v = 0, void (f = 0)) : o3 > 0.8 && v < 2 ? ((0, i.yg)().warn(a2), void v++) : void (o3 > 0.97 && (p || (l2 = { level: "warning", breadcrumb: a2 }, (0, s.ZQ)({ category: "message", message: l2.breadcrumb, level: l2.level }), p = true), f < 2 && ((0, i.yg)().warn(a2), f++)));
      var l2;
    }
    var m = t2(1566), b = (t2(75739), t2(79896)), w = t2(16928);
    let y;
    class S {
    }
    function C() {
      if (void 0 === y) {
        console.debug("Initializing TVD bridge");
        try {
          y = (function(e3) {
            const r3 = "" === w.extname(e3) ? `${e3}.node` : e3, n3 = (() => {
              const e4 = (process && "renderer" === process.type ? t2(92920).app : t2(84157).app).getAppPath(), n4 = w.join(e4, "native", r3);
              if (!b.existsSync(n4)) throw new Error(`Module (${r3}) not found`);
              return n4;
            })(), o3 = { exports: {} };
            return process.dlopen(o3, n3), o3.exports;
          })("tvdbridge"), console.log("Got bridge"), Object.defineProperty(y, "available", { value: true, writable: false, configurable: false });
        } catch (e3) {
          throw console.log(e3), y = new Proxy({ available: false, shutdown() {
          } }, new S()), (0, s.o5)().setTag("customError", "bridge-not-loaded"), new Error("bridge-not-loaded");
        }
      }
      return y;
    }
    var M, O, x;
    !(function(e3) {
      e3[e3.SW_NORMAL = 1] = "SW_NORMAL";
    })(M || (M = {})), (function(e3) {
      e3[e3.None = 0] = "None", e3[e3.Up = 1] = "Up", e3[e3.Down = 2] = "Down";
    })(O || (O = {})), (function(e3) {
      e3[e3.Left = 0] = "Left", e3[e3.Middle = 1] = "Middle", e3[e3.Right = 2] = "Right";
    })(x || (x = {}));
    const N = "tvd:crashtest-service";
    t2(35082), t2(10284);
    let P = class {
      crashNativeProcess() {
        process.crash();
      }
      crashJs() {
        (async () => {
          throw new Error((l.ipcMain ? "Main" : "Renderer") + " process JS error");
        })();
      }
      crashNativeModuleAV() {
        C().crash_emitter.emitAccessViolation();
      }
      crashNativeModuleSO() {
        C().crash_emitter.emitStackOverflow();
      }
    };
    P = (function(e3, r3, t3, n3) {
      var o3, a2 = arguments.length, s2 = a2 < 3 ? r3 : null === n3 ? n3 = Object.getOwnPropertyDescriptor(r3, t3) : n3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s2 = Reflect.decorate(e3, r3, t3, n3);
      else for (var i2 = e3.length - 1; i2 >= 0; i2--) (o3 = e3[i2]) && (s2 = (a2 < 3 ? o3(s2) : a2 > 3 ? o3(r3, t3, s2) : o3(r3, t3)) || s2);
      return a2 > 3 && s2 && Object.defineProperty(r3, t3, s2), s2;
    })([(0, d.x)(N, d.f.getProvider())], P);
    var E = t2(72539), k = t2.n(E), A = t2(48560), R = t2.n(A), $ = t2(57148), j = t2.n($), T = t2(60251), I = t2.n(T), H = t2(81263), J = t2.n(H), U = t2(50892), D = t2.n(U), z = t2(34639), L = {};
    L.styleTagTransform = D(), L.setAttributes = I(), L.insert = j().bind(null, "head"), L.domAPI = R(), L.insertStyleElement = J(), k()(z.A, L), z.A && z.A.locals && z.A.locals, C().diagnostics.setLogHandler(((e3, r3) => {
      switch (r3) {
        case i.$b.Debug:
          (0, i.Ow)().debug(e3);
          break;
        case i.$b.Warn:
          (0, i.Ow)().warn(e3);
          break;
        case i.$b.Error:
          (0, i.Ow)().error(e3);
          break;
        case i.$b.Info:
        default:
          (0, i.Ow)().info(e3);
      }
    })), d.f.initializeRpc();
    class _ extends n2.Component {
      componentWillUnmount() {
        !(function() {
          if (void 0 !== typeof y) try {
            C().shutdown();
          } catch {
          }
        })();
      }
      handleCrashMain(e3) {
        return () => {
          d.f.provideProxy(N)[e3]().catch(((r3) => {
            (0, i.yg)().error(`CrashTestView.handleCrashMain(): crashTestServiceProxy.${e3}`, r3);
          }));
        };
      }
      handleCrashRenderer(e3) {
        return () => {
          new P()[e3]();
        };
      }
      render() {
        return n2.createElement("div", { className: "crash-buttons-container" }, n2.createElement("div", { className: "process-container" }, n2.createElement("span", null, "Crash Main Process"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashMain("crashNativeProcess") }, "Crash Main Process"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashMain("crashJs") }, "Crash Main JS"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashMain("crashNativeModuleAV") }, "Crash Main Native with Access Violation"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashMain("crashNativeModuleSO") }, "Crash Main Native with Stack Overflow")), n2.createElement("div", { className: "process-container" }, n2.createElement("span", null, "Crash Renderer Process"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashRenderer("crashNativeProcess") }, "Crash Renderer Process"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashRenderer("crashJs") }, "Crash Renderer JS"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashRenderer("crashNativeModuleAV") }, "Crash Renderer Native with Access Violation"), n2.createElement(m.SX, { variant: "secondary", color: "blue", onClick: this.handleCrashRenderer("crashNativeModuleSO") }, "Crash Renderer Native with Stack Overflow")));
      }
    }
    t2(14448), (0, a.F)(), (function(e3 = 6e4) {
      var r3;
      r3 = Math.round(performance.memory.jsHeapSizeLimit / c).toString(), (0, s.NA)("memory.heapLimit", r3), h ? (0, i.yg)().error("Heap log for this renderer already exist") : h = setInterval(g, e3);
    })();
    const V = document.getElementById("root");
    V && (0, o2.H)(V).render(n2.createElement(_, null));
  }, 22259(e2, r2, t2) {
    "use strict";
    function n2(e3, r3) {
      return (t3) => {
        const n3 = /* @__PURE__ */ (() => {
          let e4 = null;
          return (...r4) => (r4.length > 0 && console.error(`Service (${t3.name}) exposed as singleton and can not accept any construction arguments.`), null === e4 && (e4 = new t3()), e4);
        })();
        r3.registerFactory(e3, n3);
      };
    }
    t2.d(r2, { x: () => n2, f: () => o2 }), t2(34957);
    var o2 = t2(56039);
  }, 21383(e2, r2, t2) {
    "use strict";
    t2.d(r2, { $: () => o2, k: () => n2 });
    const n2 = "tvd:logger-service";
    var o2;
    !(function(e3) {
      e3[e3.Debug = 0] = "Debug", e3[e3.Info = 1] = "Info", e3[e3.Warn = 2] = "Warn", e3[e3.Error = 3] = "Error";
    })(o2 || (o2 = {}));
  }, 7750(e2, r2, t2) {
    "use strict";
    t2.d(r2, { $b: () => a.$, Ow: () => i, di: () => s, yg: () => c });
    var n2 = t2(84157), o2 = t2(22259), a = t2(21383);
    function s() {
      return n2.ipcMain ? o2.f.getProvider().provide(a.k) : o2.f.provideProxy(a.k);
    }
    function i() {
      return o2.f.provide(a.k);
    }
    function c() {
      return o2.f.provideProxy(a.k);
    }
  }, 10284(e2, r2, t2) {
    "use strict";
    t2(84157), t2(79896), t2(16928), t2(7750), t2(33077);
  }, 8750(e2, r2, t2) {
    "use strict";
    var n2, o2, a, s;
    !(function(e3) {
      e3[e3.Normal = 0] = "Normal", e3[e3.Maximized = 1] = "Maximized", e3[e3.Minimized = 2] = "Minimized", e3[e3.Hidden = 3] = "Hidden", e3[e3.Fullscreen = 4] = "Fullscreen", e3[e3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(n2 || (n2 = {})), (function(e3) {
      e3.Basic = "basic", e3.Options = "options", e3.Credentials = "credentials", e3.SignIn = "sign-in", e3.Settings = "settings", e3.SaveChanges = "save-changes", e3.Welcome = "welcome";
    })(o2 || (o2 = {})), (function(e3) {
      e3.Show = "show", e3.Move = "move";
    })(a || (a = {})), (function(e3) {
      e3[e3.Basic = 0] = "Basic", e3[e3.ChartData = 1] = "ChartData";
    })(s || (s = {}));
  }, 92763(e2, r2, t2) {
    "use strict";
    t2.d(r2, { uY: () => o2 }), t2(7750);
    var n2 = t2(33077);
    function o2(e3) {
      e3.catch(((e4) => {
        const r3 = (0, n2.bw)(e4);
        console.warn(`Ignoring promise, but error: ${r3}`), console.warn(e4.stack);
      }));
    }
  }, 9691(e2, r2, t2) {
    "use strict";
    t2.d(r2, { G: () => o2 });
    var n2 = t2(7750);
    const o2 = (e3, r3) => {
      try {
        return JSON.parse(e3, r3);
      } catch (e4) {
        return (0, n2.di)().error("jsonParse JSON.parse error", e4), null;
      }
    };
  }, 84157(e2) {
    "use strict";
    e2.exports = require("electron");
  }, 24434(e2) {
    "use strict";
    e2.exports = require("events");
  }, 79896(e2) {
    "use strict";
    e2.exports = require("fs");
  }, 16928(e2) {
    "use strict";
    e2.exports = require("path");
  }, 87016(e2) {
    "use strict";
    e2.exports = require("url");
  }, 31544(e2, r2, t2) {
    "use strict";
    t2.d(r2, { Cp: () => c, J0: () => u, J5: () => v, NA: () => d, r: () => l });
    var n2 = t2(90066), o2 = t2(11555), a = t2(3103), s = t2(31784), i = t2(68752);
    function c(e3, r3) {
      return (0, o2.o5)().captureException(e3, (0, i.li)(r3));
    }
    function l(e3, r3) {
      return (0, o2.o5)().captureEvent(e3, r3);
    }
    function d(e3, r3) {
      (0, o2.rm)().setTag(e3, r3);
    }
    function u(e3) {
      const r3 = (0, o2.KU)(), t3 = (0, o2.rm)(), i2 = (0, o2.o5)(), { release: c2, environment: l2 = n2.U } = r3 && r3.getOptions() || {}, { userAgent: d2 } = s.O.navigator || {}, u2 = (0, a.fj)({ release: c2, environment: l2, user: i2.getUser() || t3.getUser(), ...d2 && { userAgent: d2 }, ...e3 }), p2 = t3.getSession();
      return p2 && "ok" === p2.status && (0, a.qO)(p2, { status: "exited" }), h(), t3.setSession(u2), i2.setSession(u2), u2;
    }
    function h() {
      const e3 = (0, o2.rm)(), r3 = (0, o2.o5)(), t3 = r3.getSession() || e3.getSession();
      t3 && (0, a.Vu)(t3), p(), e3.setSession(), r3.setSession();
    }
    function p() {
      const e3 = (0, o2.rm)(), r3 = (0, o2.o5)(), t3 = (0, o2.KU)(), n3 = r3.getSession() || e3.getSession();
      n3 && t3 && t3.captureSession(n3);
    }
    function v(e3 = false) {
      e3 ? h() : p();
    }
  }, 48927(e2, r2, t2) {
    "use strict";
    t2.d(r2, { NA: () => n2.NA, Ts: () => s.T, ZQ: () => a.Z, o5: () => o2.o5 });
    var n2 = t2(31544), o2 = t2(11555), a = t2(26637), s = (t2(11314), t2(73042), t2(23100));
    t2(67602), t2(86049);
  } }, t = {};
  function n(e2) {
    var o2 = t[e2];
    if (void 0 !== o2) return o2.exports;
    var a = t[e2] = { id: e2, loaded: false, exports: {} };
    return r[e2].call(a.exports, a, a.exports, n), a.loaded = true, a.exports;
  }
  n.m = r, e = [], n.O = (r2, t2, o2, a) => {
    if (!t2) {
      var s = 1 / 0;
      for (d = 0; d < e.length; d++) {
        for (var [t2, o2, a] = e[d], i = true, c = 0; c < t2.length; c++) (false & a || s >= a) && Object.keys(n.O).every(((e2) => n.O[e2](t2[c]))) ? t2.splice(c--, 1) : (i = false, a < s && (s = a));
        if (i) {
          e.splice(d--, 1);
          var l = o2();
          void 0 !== l && (r2 = l);
        }
      }
      return r2;
    }
    a = a || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
    e[d] = [t2, o2, a];
  }, n.n = (e2) => {
    var r2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return n.d(r2, { a: r2 }), r2;
  }, n.d = (e2, r2) => {
    for (var t2 in r2) n.o(r2, t2) && !n.o(e2, t2) && Object.defineProperty(e2, t2, { enumerable: true, get: r2[t2] });
  }, n.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), n.o = (e2, r2) => Object.prototype.hasOwnProperty.call(e2, r2), n.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, n.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2), (() => {
    var e2;
    n.g.importScripts && (e2 = n.g.location + "");
    var r2 = n.g.document;
    if (!e2 && r2 && (r2.currentScript && "SCRIPT" === r2.currentScript.tagName.toUpperCase() && (e2 = r2.currentScript.src), !e2)) {
      var t2 = r2.getElementsByTagName("script");
      if (t2.length) for (var o2 = t2.length - 1; o2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = t2[o2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e2 + "../";
  })(), (() => {
    n.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var e2 = { 9246: 0 };
    n.O.j = (r3) => 0 === e2[r3];
    var r2 = (r3, t3) => {
      var o2, a, [s, i, c] = t3, l = 0;
      if (s.some(((r4) => 0 !== e2[r4]))) {
        for (o2 in i) n.o(i, o2) && (n.m[o2] = i[o2]);
        if (c) var d = c(n);
      }
      for (r3 && r3(t3); l < s.length; l++) a = s[l], n.o(e2, a) && e2[a] && e2[a][0](), e2[a] = 0;
      return n.O(d);
    }, t2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    t2.forEach(r2.bind(null, 0)), t2.push = r2.bind(null, t2.push.bind(t2));
  })(), n.nc = void 0;
  var o = n.O(void 0, [3703, 2252, 1566, 156, 6428, 9197, 3409, 8504], (() => n(4477)));
  o = n.O(o);
})();
