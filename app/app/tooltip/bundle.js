(() => {
  "use strict";
  var e, r = { 18791(e2, r2, t2) {
    t2.d(r2, { A: () => l });
    var n2 = t2(30050), o2 = t2.n(n2), i = t2(77259), a = t2.n(i)()(o2());
    a.push([e2.id, "html {\n	background: transparent !important;\n}\n\n.tab-tooltip {\n	width: 254px;\n	box-sizing: border-box;\n	display: flex;\n	align-items: center;\n	background-color: var(--color-container-fill-secondary-neutral-thin);\n	padding: 16px;\n	border-radius: 8px;\n	border: 1px solid var(--color-border-primary-neutral-light);\n	box-shadow: 0px 0px 6px 0px var(--color-container-fill-tertiary-neutral-light);\n	overflow: hidden;\n	word-break: break-word;\n\n	&.active {\n		background-color: var(--color-container-fill-secondary-inverse);\n	}\n}\n", ""]);
    const l = a;
  }, 42952(e2, r2, t2) {
    t2.d(r2, { CI: () => s, Mz: () => l }), t2(84157);
    var n2 = t2(22259), o2 = t2(7750), i = t2(9691);
    const a = { windowControl: null, dialogControl: null, toastWindowHandler: null };
    function l() {
      const e3 = (0, i.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
      if (!e3) throw new Error("getRendererInitialData() jsonParse error");
      return e3;
    }
    function s(e3) {
      return a.windowControl = (function(e4, r3, t3) {
        let i2 = window?.remoteServiceInstanceId ?? l().remoteServiceInstanceId;
        if (t3 && (i2 = t3), !r3 || i2 !== window?.initialRemoteServiceInstanceId) {
          (0, o2.yg)().debug(`[Renderer] initializeIpcProxyForInstance ${e4} id: ${i2}; Old id ${window?.initialRemoteServiceInstanceId}`);
          const r4 = n2.f.provideProxy(i2);
          return window.initialRemoteServiceInstanceId = i2, r4;
        }
        return r3;
      })("windowControl", a.windowControl, e3), a.windowControl;
    }
  }, 12329(e2, r2, t2) {
    t2.d(r2, { J: () => o2 });
    var n2 = t2(79474);
    function o2(e3, r3, t3 = []) {
      (0, n2.useEffect)((() => {
        if (!e3) return;
        let t4 = e3.subscribe(r3);
        const n3 = () => {
          t4?.unsubscribe(), t4 = null;
        };
        return window.addEventListener("beforeunload", n3), () => {
          window.removeEventListener("beforeunload", n3), n3();
        };
      }), t3);
    }
  }, 60165(e2, r2, t2) {
    var n2 = t2(79474), o2 = t2(48088), i = t2(41493), a = t2(12129), l = t2(62020), s = t2(22259), c = t2(7750), d = t2(84157);
    const u = ["ar", "ar_AE"], p = ["he", "he_IL"], f = (e3) => [...u, ...p].includes(e3);
    var v = t2(87894), w = t2(68671), m = t2(59954);
    const A = void 0 !== d.ipcMain;
    function b(e3, r3) {
      e3.setAttribute("dir", r3 ? "rtl" : "ltr");
    }
    var g = t2(8750), h = t2(75739), y = t2(42952);
    t2(10300), t2(79278), t2(34097);
    var S = t2(12329);
    t2(49131), t2(57179);
    var x = t2(59108), C = t2(72539), I = t2.n(C), z = t2(48560), E = t2.n(z), k = t2(57148), T = t2.n(k), O = t2(60251), P = t2.n(O), M = t2(81263), j = t2.n(M), L = t2(50892), F = t2.n(L), R = t2(18791), $ = {};
    $.styleTagTransform = F(), $.setAttributes = P(), $.insert = T().bind(null, "head"), $.domAPI = E(), $.insertStyleElement = j(), I()(R.A, $), R.A && R.A.locals && R.A.locals, s.f.initializeRpc();
    const N = (0, l.CI)()((() => {
      const { t: e3 } = (0, l.Bd)(), [r3, t3] = (0, n2.useState)({ type: g.jm.Basic, title: "" }), [o3, i2] = (0, n2.useState)(false);
      return (0, S.J)((0, y.CI)().tooltipTextChange, (({ text: e4 }) => {
        t3(e4);
      })), (0, S.J)((0, y.CI)().tooltipActivateState, i2), (0, n2.useEffect)((() => {
        var e4;
        (e4 = document.documentElement) && "" === e4.dir && b(e4, f(v.A.language)), (function(e5) {
          let r5;
          r5 = A ? s.f.provide(m.W).localeChange.subscribe(e5) : s.f.provideProxy(m.W).localeChange.subscribe(e5);
          const t4 = () => {
            r5?.unsubscribe(), r5 = void 0, window.removeEventListener("beforeunload", t4);
          };
          "undefined" != typeof window && window.addEventListener("beforeunload", t4);
        })(((r5) => {
          "" !== r5 && ((0, w.v)(r5).catch(((e5) => {
            (0, c.yg)().error("setupI18nLocaleHandler(): changeLocale() error", e5);
          })), e4 && b(e4, f(r5)));
        }));
        const r4 = () => {
          (0, y.CI)().closeTooltip().catch(((e5) => {
            (0, c.yg)().error("<Tooltip>.closeTooltip(): getWindowControl().closeTooltip() error", e5);
          }));
        };
        return (0, h.iT)() || document.querySelector("body")?.addEventListener("mouseenter", r4), () => {
          (0, h.iT)() || document.querySelector("body")?.removeEventListener("mouseenter", r4);
        };
      }), []), n2.createElement("div", { className: "tab-tooltip " + (o3 ? "active" : "") }, n2.createElement(x.I, { title: r3, isLogoVisible: false, isTooltip: true, t: e3 }));
    }));
    t2(14448), (0, i.F$)(), (0, a.z)();
    const _ = document.getElementById("root");
    _ && (0, o2.H)(_).render(n2.createElement((function() {
      return n2.createElement(N, null);
    }), null));
  }, 25510(e2, r2, t2) {
    t2.d(r2, { $: () => L });
    var n2, o2 = t2(26162), i = t2(89968), a = t2(33873), l = t2(69560), s = t2(19037), c = t2(17092), d = t2(45272), u = t2(4228), p = t2(78509), f = t2(93062), v = t2(63975), w = t2(78885), m = t2(69392), A = t2(47232), b = t2(91184), g = t2(54240), h = t2(4612), y = t2(40048), S = t2(89642), x = t2(92038), C = t2(87200), I = t2(61237), z = t2(65470), E = t2(11381), k = t2(33790), T = t2(17562), O = t2(70989), P = t2(29274), M = t2(71737), j = t2(17316);
    !(function(e3) {
      e3.Normal = "", e3.Small = "small", e3.XSmall = "xsmall", e3.XXSmall = "xxsmall";
    })(n2 || (n2 = {}));
    const L = /* @__PURE__ */ new Map([["about", P.A], ["advertising-info", u.A], ["athletes", P.A], ["bounty", S.A], ["broker-awards", i.A], ["brokerage-integration", u.A], ["brokers", i.A], ["careers", P.A], [o2.zw.community, a.A], ["cookies-policy", S.A], ["countries", l.A], ["data-coverage", P.A], ["disclaimer", s.A], [o2.zw.economicCalendar, c.A], [o2.zw.earningsCalendar, c.A], [o2.zw.dividendCalendar, c.A], [o2.zw.ipoCalendar, c.A], [o2.zw.revenueCalendar, c.A], ["education", w.A], ["errorView", d.A], ["features", P.A], ["follow", P.A], ["heatmap", f.A], ["home", P.A], ["house-rules", P.A], ["html5-stock-forex-bitcoin-charting-library", u.A], ["ideas", w.A], ["licenses", m.A], ["lightweight-charts", u.A], ["manifesto", P.A], ["markets", M.A], ["mobile", b.A], ["moderators", g.A], ["news", h.A], [o2.zw.newsFlow, h.A], [o2.zw.options, y.A], ["partner-program", u.A], ["pine-script-docs", z.A], ["pine-script-reference", z.A], ["pine-wizards", z.A], ["policies", S.A], ["privacy-policy", S.A], ["referral-program", u.A], ["screener", I.A], ["script", z.A], ["scripts", z.A], ["share-your-love", C.A], ["snaps", E.A], ["sparks", k.A], ["status", T.A], ["streams", O.A], [o2.zw.helpCenter, v.A], ["tradingview-for-the-web", u.A], ["wall-of-love", P.A], ["widget", u.A], ["worldEconomy", M.A], [o2.zw.fundamentalGraphs, p.A], [o2.zw.macroMaps, A.A], [o2.zw.portfolios, x.A], [o2.zw.yieldCurves, j.A]]);
  }, 41493(e2, r2, t2) {
    t2.d(r2, { F$: () => n2.F, NA: () => o2.NA, ZQ: () => o2.ZQ });
    var n2 = t2(30190), o2 = (t2(94231), t2(86434));
  }, 94231(e2, r2, t2) {
    t2(48927);
  }, 87894(e2, r2, t2) {
    t2.d(r2, { A: () => p });
    var n2 = t2(16928), o2 = t2(84157), i = t2(87574), a = t2(14381), l = t2(62020), s = t2(10284), c = t2(1820), d = t2(9691);
    let u;
    if (o2.ipcMain) {
      let f = function() {
        const e3 = {}, r3 = n2.join(o2.app.getAppPath(), "resources", "locales");
        for (const t3 of s.l.readDirSync(r3)) {
          const o3 = s.l.readFileSync(n2.join(r3, t3)), i2 = n2.parse(t3).name, a2 = (0, d.G)(o3);
          a2 && (e3[i2] = { translation: a2 });
        }
        return e3;
      };
      u = f(), o2.ipcMain.on(c.ox, ((e3) => {
        e3.returnValue = u;
      }));
    } else u = o2.ipcRenderer.sendSync(c.ox);
    i.Ay.use(a.A).use(l.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: u, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
    const p = i.Ay;
  }, 35492(e2, r2, t2) {
    t2(22259);
  }, 8750(e2, r2, t2) {
    var n2, o2, i, a;
    t2.d(r2, { jm: () => a }), (function(e3) {
      e3[e3.Normal = 0] = "Normal", e3[e3.Maximized = 1] = "Maximized", e3[e3.Minimized = 2] = "Minimized", e3[e3.Hidden = 3] = "Hidden", e3[e3.Fullscreen = 4] = "Fullscreen", e3[e3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(n2 || (n2 = {})), (function(e3) {
      e3.Basic = "basic", e3.Options = "options", e3.Credentials = "credentials", e3.SignIn = "sign-in", e3.Settings = "settings", e3.SaveChanges = "save-changes", e3.Welcome = "welcome";
    })(o2 || (o2 = {})), (function(e3) {
      e3.Show = "show", e3.Move = "move";
    })(i || (i = {})), (function(e3) {
      e3[e3.Basic = 0] = "Basic", e3[e3.ChartData = 1] = "ChartData";
    })(a || (a = {}));
  }, 84157(e2) {
    e2.exports = require("electron");
  }, 79896(e2) {
    e2.exports = require("fs");
  }, 16928(e2) {
    e2.exports = require("path");
  }, 87016(e2) {
    e2.exports = require("url");
  } }, t = {};
  function n(e2) {
    var o2 = t[e2];
    if (void 0 !== o2) return o2.exports;
    var i = t[e2] = { id: e2, exports: {} };
    return r[e2].call(i.exports, i, i.exports, n), i.exports;
  }
  n.m = r, e = [], n.O = (r2, t2, o2, i) => {
    if (!t2) {
      var a = 1 / 0;
      for (d = 0; d < e.length; d++) {
        for (var [t2, o2, i] = e[d], l = true, s = 0; s < t2.length; s++) (false & i || a >= i) && Object.keys(n.O).every(((e2) => n.O[e2](t2[s]))) ? t2.splice(s--, 1) : (l = false, i < a && (a = i));
        if (l) {
          e.splice(d--, 1);
          var c = o2();
          void 0 !== c && (r2 = c);
        }
      }
      return r2;
    }
    i = i || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
    e[d] = [t2, o2, i];
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
  }, (() => {
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
    var e2 = { 1168: 0 };
    n.O.j = (r3) => 0 === e2[r3];
    var r2 = (r3, t3) => {
      var o2, i, [a, l, s] = t3, c = 0;
      if (a.some(((r4) => 0 !== e2[r4]))) {
        for (o2 in l) n.o(l, o2) && (n.m[o2] = l[o2]);
        if (s) var d = s(n);
      }
      for (r3 && r3(t3); c < a.length; c++) i = a[c], n.o(e2, i) && e2[i] && e2[i][0](), e2[i] = 0;
      return n.O(d);
    }, t2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    t2.forEach(r2.bind(null, 0)), t2.push = r2.bind(null, t2.push.bind(t2));
  })(), n.nc = void 0;
  var o = n.O(void 0, [3703, 2252, 369, 4870, 7627, 3890, 3409, 8504, 1334, 1892], (() => n(60165)));
  o = n.O(o);
})();
