(() => {
  "use strict";
  var e, t = { 82069(e2, t2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.getElectronBinding = void 0, t2.getElectronBinding = (e3) => process._linkedBinding ? process._linkedBinding("electron_common_" + e3) : process.electronBinding ? process.electronBinding(e3) : null;
  }, 31032(e2, t2, r2) {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.deserialize = t2.serialize = t2.isSerializableObject = t2.isPromise = void 0;
    const n2 = r2(84157);
    t2.isPromise = function(e3) {
      return e3 && e3.then && e3.then instanceof Function && e3.constructor && e3.constructor.reject && e3.constructor.reject instanceof Function && e3.constructor.resolve && e3.constructor.resolve instanceof Function;
    };
    const o2 = [Boolean, Number, String, Date, Error, RegExp, ArrayBuffer];
    function a(e3) {
      return null === e3 || ArrayBuffer.isView(e3) || o2.some(((t3) => e3 instanceof t3));
    }
    t2.isSerializableObject = a;
    const i = function(e3, t3) {
      const r3 = Object.entries(e3).map((([e4, r4]) => [e4, t3(r4)]));
      return Object.fromEntries(r3);
    };
    t2.serialize = function e3(t3) {
      return t3 && t3.constructor && "NativeImage" === t3.constructor.name ? (function(e4) {
        const t4 = [], r3 = e4.getScaleFactors();
        if (1 === r3.length) {
          const n3 = r3[0], o3 = e4.getSize(n3), a2 = e4.toBitmap({ scaleFactor: n3 });
          t4.push({ scaleFactor: n3, size: o3, buffer: a2 });
        } else for (const n3 of r3) {
          const r4 = e4.getSize(n3), o3 = e4.toDataURL({ scaleFactor: n3 });
          t4.push({ scaleFactor: n3, size: r4, dataURL: o3 });
        }
        return { __ELECTRON_SERIALIZED_NativeImage__: true, representations: t4 };
      })(t3) : Array.isArray(t3) ? t3.map(e3) : a(t3) ? t3 : t3 instanceof Object ? i(t3, e3) : t3;
    }, t2.deserialize = function e3(t3) {
      return t3 && t3.__ELECTRON_SERIALIZED_NativeImage__ ? (function(e4) {
        const t4 = n2.nativeImage.createEmpty();
        if (1 === e4.representations.length) {
          const { buffer: r3, size: n3, scaleFactor: o3 } = e4.representations[0], { width: a2, height: i2 } = n3;
          t4.addRepresentation({ buffer: r3, scaleFactor: o3, width: a2, height: i2 });
        } else for (const r3 of e4.representations) {
          const { dataURL: e5, size: n3, scaleFactor: o3 } = r3, { width: a2, height: i2 } = n3;
          t4.addRepresentation({ dataURL: e5, scaleFactor: o3, width: a2, height: i2 });
        }
        return t4;
      })(t3) : Array.isArray(t3) ? t3.map(e3) : a(t3) ? t3 : t3 instanceof Object ? i(t3, e3) : t3;
    };
  }, 2635(e2, t2, r2) {
    r2.d(t2, { A: () => c });
    var n2 = r2(30050), o2 = r2.n(n2), a = r2(77259), i = r2.n(a)()(o2());
    i.push([e2.id, ".tab-monitor {\n	color: var(--color-white);\n}\n\n.tab-monitor-table {\n	width: 100%;\n	border-collapse: collapse;\n}\n\n.tab-monitor-table th,\n.tab-monitor-table td {\n	padding: 8px;\n	text-align: left;\n}\n\n.tab-monitor-table thead tr {\n	background-color: var(--color-background-dark-primary);\n}\n\n.tab-monitor-table tbody tr:nth-child(even) {\n	background-color: var(--color-background-dark-primary);\n}\n\n.tab-monitor-table tbody tr:nth-child(odd) {\n	background-color: var(--color-background-dark-secondary);\n}\n", ""]);
    const c = i;
  }, 23921(e2, t2, r2) {
    var n2 = r2(79474), o2 = r2(48088), a = r2(30190);
    r2(48927);
    var i, c = r2(1566), s = r2(22259), l = r2(7750);
    r2(84157), r2(35082), r2(10284), (function(e3) {
      e3.Ask = "ask", e3.CheckOnly = "check-only";
    })(i || (i = {}));
    function u() {
      return s.f.provideProxy("tvd:tab-monitoring-contract");
    }
    var d = r2(72539), f = r2.n(d), p = r2(48560), g = r2.n(p), m = r2(57148), b = r2.n(m), h = r2(60251), v = r2.n(h), y = r2(81263), E = r2.n(y), S = r2(50892), k = r2.n(S), O = r2(2635), w = {};
    w.styleTagTransform = k(), w.setAttributes = v(), w.insert = b().bind(null, "head"), w.domAPI = g(), w.insertStyleElement = E(), f()(O.A, w), O.A && O.A.locals && O.A.locals, s.f.initializeRpc();
    const _ = () => {
      const [e3, t3] = (0, n2.useState)([]);
      return (0, n2.useEffect)((() => {
        const e4 = setInterval((() => {
          u().getTabStatus().then(t3).catch(((e5) => {
            (0, l.yg)().error("<TabMonitor>.useEffect: tabMonitoringServiceProxy().getTabStatus() error", e5);
          }));
        }), 1500);
        return () => {
          clearInterval(e4);
        };
      }), []), n2.createElement("div", { className: "tab-monitor" }, n2.createElement("table", { className: "tab-monitor-table" }, n2.createElement("thead", null, n2.createElement("tr", null, n2.createElement("th", null, "#"), n2.createElement("th", null, "PID"), n2.createElement("th", null, "Title"), n2.createElement("th", null, "Status"), n2.createElement("th", null, "Freeze button"))), n2.createElement("tbody", null, e3.map(((e4, t4) => 0 === e4.pid || null === e4.pid ? null : n2.createElement("tr", { key: e4.pid }, n2.createElement("td", null, t4 + 1), n2.createElement("td", null, e4.pid), n2.createElement("td", null, e4.title), n2.createElement("td", null, e4.status), n2.createElement("td", null, n2.createElement(c.SX, { variant: "primary", color: "gray", size: "small", stretch: false, onClick: () => {
        return t5 = e4.id, void u().freezeTabById(t5).catch(((e5) => {
          (0, l.yg)().error("<TabMonitor>.handleFreeze error", e5);
        }));
        var t5;
      } }, "freeze"))))))));
    };
    r2(14448), (0, a.F)();
    const z = document.getElementById("root");
    z && (0, o2.H)(z).render(n2.createElement(_, null));
  }, 22259(e2, t2, r2) {
    r2.d(t2, { f: () => n2 }), r2(34957);
    var n2 = r2(56039);
  }, 21383(e2, t2, r2) {
    r2.d(t2, { k: () => n2 });
    const n2 = "tvd:logger-service";
    var o2;
    !(function(e3) {
      e3[e3.Debug = 0] = "Debug", e3[e3.Info = 1] = "Info", e3[e3.Warn = 2] = "Warn", e3[e3.Error = 3] = "Error";
    })(o2 || (o2 = {}));
  }, 7750(e2, t2, r2) {
    r2.d(t2, { Ow: () => a, yg: () => i }), r2(84157);
    var n2 = r2(22259), o2 = r2(21383);
    function a() {
      return n2.f.provide(o2.k);
    }
    function i() {
      return n2.f.provideProxy(o2.k);
    }
  }, 10284(e2, t2, r2) {
    r2(84157), r2(79896), r2(16928), r2(7750), r2(33077);
  }, 8750(e2, t2, r2) {
    var n2, o2, a, i;
    !(function(e3) {
      e3[e3.Normal = 0] = "Normal", e3[e3.Maximized = 1] = "Maximized", e3[e3.Minimized = 2] = "Minimized", e3[e3.Hidden = 3] = "Hidden", e3[e3.Fullscreen = 4] = "Fullscreen", e3[e3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(n2 || (n2 = {})), (function(e3) {
      e3.Basic = "basic", e3.Options = "options", e3.Credentials = "credentials", e3.SignIn = "sign-in", e3.Settings = "settings", e3.SaveChanges = "save-changes", e3.Welcome = "welcome";
    })(o2 || (o2 = {})), (function(e3) {
      e3.Show = "show", e3.Move = "move";
    })(a || (a = {})), (function(e3) {
      e3[e3.Basic = 0] = "Basic", e3[e3.ChartData = 1] = "ChartData";
    })(i || (i = {}));
  }, 92763(e2, t2, r2) {
    r2.d(t2, { uY: () => o2 }), r2(7750);
    var n2 = r2(33077);
    function o2(e3) {
      e3.catch(((e4) => {
        const t3 = (0, n2.bw)(e4);
        console.warn(`Ignoring promise, but error: ${t3}`), console.warn(e4.stack);
      }));
    }
  }, 9691(e2, t2, r2) {
    r2(7750);
  }, 84157(e2) {
    e2.exports = require("electron");
  }, 24434(e2) {
    e2.exports = require("events");
  }, 79896(e2) {
    e2.exports = require("fs");
  }, 16928(e2) {
    e2.exports = require("path");
  }, 87016(e2) {
    e2.exports = require("url");
  }, 31544(e2, t2, r2) {
    r2.d(t2, { Cp: () => s, J0: () => u, J5: () => p, r: () => l });
    var n2 = r2(90066), o2 = r2(11555), a = r2(3103), i = r2(31784), c = r2(68752);
    function s(e3, t3) {
      return (0, o2.o5)().captureException(e3, (0, c.li)(t3));
    }
    function l(e3, t3) {
      return (0, o2.o5)().captureEvent(e3, t3);
    }
    function u(e3) {
      const t3 = (0, o2.KU)(), r3 = (0, o2.rm)(), c2 = (0, o2.o5)(), { release: s2, environment: l2 = n2.U } = t3 && t3.getOptions() || {}, { userAgent: u2 } = i.O.navigator || {}, f2 = (0, a.fj)({ release: s2, environment: l2, user: c2.getUser() || r3.getUser(), ...u2 && { userAgent: u2 }, ...e3 }), p2 = r3.getSession();
      return p2 && "ok" === p2.status && (0, a.qO)(p2, { status: "exited" }), d(), r3.setSession(f2), c2.setSession(f2), f2;
    }
    function d() {
      const e3 = (0, o2.rm)(), t3 = (0, o2.o5)(), r3 = t3.getSession() || e3.getSession();
      r3 && (0, a.Vu)(r3), f(), e3.setSession(), t3.setSession();
    }
    function f() {
      const e3 = (0, o2.rm)(), t3 = (0, o2.o5)(), r3 = (0, o2.KU)(), n3 = t3.getSession() || e3.getSession();
      n3 && r3 && r3.captureSession(n3);
    }
    function p(e3 = false) {
      e3 ? d() : f();
    }
  }, 48927(e2, t2, r2) {
    r2.d(t2, { Ts: () => n2.T }), r2(11314), r2(73042);
    var n2 = r2(23100);
    r2(67602), r2(86049);
  } }, r = {};
  function n(e2) {
    var o2 = r[e2];
    if (void 0 !== o2) return o2.exports;
    var a = r[e2] = { id: e2, loaded: false, exports: {} };
    return t[e2].call(a.exports, a, a.exports, n), a.loaded = true, a.exports;
  }
  n.m = t, e = [], n.O = (t2, r2, o2, a) => {
    if (!r2) {
      var i = 1 / 0;
      for (u = 0; u < e.length; u++) {
        for (var [r2, o2, a] = e[u], c = true, s = 0; s < r2.length; s++) (false & a || i >= a) && Object.keys(n.O).every(((e2) => n.O[e2](r2[s]))) ? r2.splice(s--, 1) : (c = false, a < i && (i = a));
        if (c) {
          e.splice(u--, 1);
          var l = o2();
          void 0 !== l && (t2 = l);
        }
      }
      return t2;
    }
    a = a || 0;
    for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
    e[u] = [r2, o2, a];
  }, n.n = (e2) => {
    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return n.d(t2, { a: t2 }), t2;
  }, n.d = (e2, t2) => {
    for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  }, n.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, n.nmd = (e2) => (e2.paths = [], e2.children || (e2.children = []), e2), (() => {
    var e2;
    n.g.importScripts && (e2 = n.g.location + "");
    var t2 = n.g.document;
    if (!e2 && t2 && (t2.currentScript && "SCRIPT" === t2.currentScript.tagName.toUpperCase() && (e2 = t2.currentScript.src), !e2)) {
      var r2 = t2.getElementsByTagName("script");
      if (r2.length) for (var o2 = r2.length - 1; o2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = r2[o2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e2 + "../";
  })(), (() => {
    n.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var e2 = { 4457: 0 };
    n.O.j = (t3) => 0 === e2[t3];
    var t2 = (t3, r3) => {
      var o2, a, [i, c, s] = r3, l = 0;
      if (i.some(((t4) => 0 !== e2[t4]))) {
        for (o2 in c) n.o(c, o2) && (n.m[o2] = c[o2]);
        if (s) var u = s(n);
      }
      for (t3 && t3(r3); l < i.length; l++) a = i[l], n.o(e2, a) && e2[a] && e2[a][0](), e2[a] = 0;
      return n.O(u);
    }, r2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    r2.forEach(t2.bind(null, 0)), r2.push = t2.bind(null, r2.push.bind(r2));
  })(), n.nc = void 0;
  var o = n.O(void 0, [3703, 2252, 1566, 6428, 9197, 3409, 8504], (() => n(23921)));
  o = n.O(o);
})();
