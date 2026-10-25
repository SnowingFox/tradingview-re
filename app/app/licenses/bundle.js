(() => {
  "use strict";
  var e, n = { 85881(e2, n2, r2) {
    r2.d(n2, { A: () => s });
    var t2 = r2(30050), a2 = r2.n(t2), o = r2(77259), i = r2.n(o)()(a2());
    i.push([e2.id, ".licenses-container {\n	margin: 80px 100px;\n}\n\n.licenses-header {\n	color: var(--color-content-primary-neutral-bold);\n}\n\n.licenses-description {\n	margin-top: 8px;\n	max-width: 540px;\n	color: var(--color-content-primary-neutral-bold);\n}\n\n.licenses-content-wrapper {\n	margin-top: 32px;\n	display: flex;\n	flex-direction: column;\n	gap: 10px;\n	list-style: none;\n}\n\n.licenses-content-text {\n	margin-top: 12px;\n	margin-bottom: 24px;\n	padding: 12px;\n	max-width: 574px;\n	color: var(--color-content-primary-neutral-bold);\n	overflow-x: scroll;\n	border: 1px solid var(--color-border-primary-neutral-light);\n	border-radius: 4px;\n}\n", ""]);
    const s = i;
  }, 12329(e2, n2, r2) {
    r2(79474);
  }, 38316(e2, n2, r2) {
    var t2 = r2(79474), a2 = r2(48088), o = r2(30190), i = r2(48927), s = r2(7750);
    const c = 1024;
    var l = r2(84157), d = r2(22259), p = r2(9691);
    let u, m = false, f = 0, g = 0;
    function h() {
      const e3 = (function() {
        const e4 = (0, p.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
        if (!e4) throw new Error("getRendererInitialData() jsonParse error");
        return e4;
      })().remoteServiceInstanceId ?? window.location.href, n3 = Math.round(performance.memory.usedJSHeapSize / c), r3 = Math.round(performance.memory.totalJSHeapSize / c), t3 = Math.round(performance.memory.jsHeapSizeLimit / c), a3 = n3 / t3, o2 = `Heap info for renderer - ${e3}. Heap Used ${n3} Kb. Heap Total ${r3} Kb. Heap Limit ${t3} Kb.`;
      return a3 <= 0.8 ? (f = 0, void (g = 0)) : a3 > 0.8 && f < 2 ? ((0, s.yg)().warn(o2), void f++) : void (a3 > 0.97 && (m || (l2 = { level: "warning", breadcrumb: o2 }, (0, i.ZQ)({ category: "message", message: l2.breadcrumb, level: l2.level }), m = true), g < 2 && ((0, s.yg)().warn(o2), g++)));
      var l2;
    }
    var v = r2(62020), b = r2(20369);
    r2(10300), r2(79278), r2(34097);
    const y = ["ar", "ar_AE"], w = ["he", "he_IL"], x = (e3) => [...y, ...w].includes(e3);
    var S = r2(87894), E = r2(68671), A = r2(59954);
    const L = void 0 !== l.ipcMain;
    function I(e3, n3) {
      e3.setAttribute("dir", n3 ? "rtl" : "ltr");
    }
    function M(e3) {
      const n3 = (0, v.Bd)();
      return (0, t2.useEffect)((() => {
        !(function(e4) {
          e4 && "" === e4.dir && I(e4, x(S.A.language)), (function(e5) {
            let n4;
            n4 = L ? d.f.provide(A.W).localeChange.subscribe(e5) : d.f.provideProxy(A.W).localeChange.subscribe(e5);
            const r3 = () => {
              n4?.unsubscribe(), n4 = void 0, window.removeEventListener("beforeunload", r3);
            };
            "undefined" != typeof window && window.addEventListener("beforeunload", r3);
          })(((n4) => {
            "" !== n4 && ((0, E.v)(n4).catch(((e5) => {
              (0, s.yg)().error("setupI18nLocaleHandler(): changeLocale() error", e5);
            })), e4 && I(e4, x(n4)));
          }));
        })(e3);
      }), [e3]), n3;
    }
    r2(12329), r2(75739), r2(49131), r2(57179);
    var O = r2(73528);
    r2(82026);
    const j = ({ name: e3, children: n3, className: r3, tabIndex: a3 = 0, ...o2 }) => t2.createElement("a", { ...o2, tabIndex: a3, className: `${O[e3]} ${O["focus-outline-rounded"]} ${r3 ?? ""}` }, n3);
    var k = r2(72539), P = r2.n(k), C = r2(48560), H = r2.n(C), N = r2(57148), T = r2.n(N), $ = r2(60251), z = r2.n($), _ = r2(81263), F = r2.n(_), B = r2(50892), R = r2.n(B), D = r2(85881), W = {};
    W.styleTagTransform = R(), W.setAttributes = z(), W.insert = T().bind(null, "head"), W.domAPI = H(), W.insertStyleElement = F(), P()(D.A, W), D.A && D.A.locals && D.A.locals, d.f.initializeRpc();
    const q = ({ name: e3, license: n3 }) => {
      const [r3, a3] = (0, t2.useState)(false);
      return t2.createElement("li", null, t2.createElement(j, { name: "link-colors", className: "licenses-content-header", onClick: () => {
        a3(((e4) => !e4));
      } }, t2.createElement(b.o, { tag: "span", name: "typography-regular-16px" }, e3)), r3 && t2.createElement(b.o, { tag: "pre", className: "licenses-content-text", name: "typography-monospaced-12px" }, n3));
    }, U = (0, v.CI)()((() => {
      const { t: e3, i18n: n3 } = M(document.documentElement), [r3, a3] = (0, t2.useState)();
      var o2, i2;
      return o2 = n3, i2 = e3("Libraries we use"), (0, t2.useEffect)((() => {
        document.title = i2, o2.on("languageChanged", (() => {
          document.title = i2;
        }));
      }), [o2, i2]), (0, t2.useEffect)((() => {
        (async () => {
          try {
            const e4 = await d.f.provideProxy("tvd:main-service").getLicenses();
            if (void 0 === e4) return;
            a3(e4);
          } catch (e4) {
            (0, s.yg)().error("<Licenses>.useEffect(): getAndSetLicenses() error", e4);
          }
        })();
      }), []), t2.createElement("div", { className: "licenses-container" }, t2.createElement(b.o, { tag: "span", name: "typography-accent-adaptive-m-bold", className: "licenses-header" }, e3("Libraries we use")), t2.createElement("div", { className: "licenses-description" }, t2.createElement(b.o, { tag: "span", name: "typography-regular-16px" }, e3("This is our attribution notice on third party software, which may be included in some sections of our Libraries. Also, we have to say a big thanks to everybody in the open source community for all their help, sweat and hard work."))), t2.createElement("ul", { className: "licenses-content-wrapper" }, r3 && Object.entries(r3).map((([e4, n4]) => t2.createElement(q, { name: e4, license: n4, key: e4 })))));
    }));
    r2(14448), (0, o.F)(), (function(e3 = 6e4) {
      var n3;
      n3 = Math.round(performance.memory.jsHeapSizeLimit / c).toString(), (0, i.NA)("memory.heapLimit", n3), u ? (0, s.yg)().error("Heap log for this renderer already exist") : u = setInterval(h, e3);
    })();
    const K = document.getElementById("root");
    K && (0, a2.H)(K).render(t2.createElement((function() {
      return t2.createElement(U, null);
    }), null));
  }, 87894(e2, n2, r2) {
    r2.d(n2, { A: () => u });
    var t2 = r2(16928), a2 = r2(84157), o = r2(87574), i = r2(14381), s = r2(62020), c = r2(10284), l = r2(1820), d = r2(9691);
    let p;
    if (a2.ipcMain) {
      let m = function() {
        const e3 = {}, n3 = t2.join(a2.app.getAppPath(), "resources", "locales");
        for (const r3 of c.l.readDirSync(n3)) {
          const a3 = c.l.readFileSync(t2.join(n3, r3)), o2 = t2.parse(r3).name, i2 = (0, d.G)(a3);
          i2 && (e3[o2] = { translation: i2 });
        }
        return e3;
      };
      p = m(), a2.ipcMain.on(l.ox, ((e3) => {
        e3.returnValue = p;
      }));
    } else p = a2.ipcRenderer.sendSync(l.ox);
    o.Ay.use(i.A).use(s.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: p, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
    const u = o.Ay;
  }, 35492(e2, n2, r2) {
    r2(22259);
  }, 8750(e2, n2, r2) {
    var t2, a2, o, i;
    !(function(e3) {
      e3[e3.Normal = 0] = "Normal", e3[e3.Maximized = 1] = "Maximized", e3[e3.Minimized = 2] = "Minimized", e3[e3.Hidden = 3] = "Hidden", e3[e3.Fullscreen = 4] = "Fullscreen", e3[e3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(t2 || (t2 = {})), (function(e3) {
      e3.Basic = "basic", e3.Options = "options", e3.Credentials = "credentials", e3.SignIn = "sign-in", e3.Settings = "settings", e3.SaveChanges = "save-changes", e3.Welcome = "welcome";
    })(a2 || (a2 = {})), (function(e3) {
      e3.Show = "show", e3.Move = "move";
    })(o || (o = {})), (function(e3) {
      e3[e3.Basic = 0] = "Basic", e3[e3.ChartData = 1] = "ChartData";
    })(i || (i = {}));
  }, 84157(e2) {
    e2.exports = require("electron");
  }, 79896(e2) {
    e2.exports = require("fs");
  }, 16928(e2) {
    e2.exports = require("path");
  }, 87016(e2) {
    e2.exports = require("url");
  } }, r = {};
  function t(e2) {
    var a2 = r[e2];
    if (void 0 !== a2) return a2.exports;
    var o = r[e2] = { id: e2, exports: {} };
    return n[e2].call(o.exports, o, o.exports, t), o.exports;
  }
  t.m = n, e = [], t.O = (n2, r2, a2, o) => {
    if (!r2) {
      var i = 1 / 0;
      for (d = 0; d < e.length; d++) {
        for (var [r2, a2, o] = e[d], s = true, c = 0; c < r2.length; c++) (false & o || i >= o) && Object.keys(t.O).every(((e2) => t.O[e2](r2[c]))) ? r2.splice(c--, 1) : (s = false, o < i && (i = o));
        if (s) {
          e.splice(d--, 1);
          var l = a2();
          void 0 !== l && (n2 = l);
        }
      }
      return n2;
    }
    o = o || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
    e[d] = [r2, a2, o];
  }, t.n = (e2) => {
    var n2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return t.d(n2, { a: n2 }), n2;
  }, t.d = (e2, n2) => {
    for (var r2 in n2) t.o(n2, r2) && !t.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: n2[r2] });
  }, t.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), t.o = (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), t.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, (() => {
    var e2;
    t.g.importScripts && (e2 = t.g.location + "");
    var n2 = t.g.document;
    if (!e2 && n2 && (n2.currentScript && "SCRIPT" === n2.currentScript.tagName.toUpperCase() && (e2 = n2.currentScript.src), !e2)) {
      var r2 = n2.getElementsByTagName("script");
      if (r2.length) for (var a2 = r2.length - 1; a2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = r2[a2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), t.p = e2 + "../";
  })(), (() => {
    t.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var e2 = { 7583: 0 };
    t.O.j = (n3) => 0 === e2[n3];
    var n2 = (n3, r3) => {
      var a2, o, [i, s, c] = r3, l = 0;
      if (i.some(((n4) => 0 !== e2[n4]))) {
        for (a2 in s) t.o(s, a2) && (t.m[a2] = s[a2]);
        if (c) var d = c(t);
      }
      for (n3 && n3(r3); l < i.length; l++) o = i[l], t.o(e2, o) && e2[o] && e2[o][0](), e2[o] = 0;
      return t.O(d);
    }, r2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    r2.forEach(n2.bind(null, 0)), r2.push = n2.bind(null, r2.push.bind(r2));
  })(), t.nc = void 0;
  var a = t.O(void 0, [3703, 2252, 369, 4870, 9883, 2766, 3409, 8504, 1334], (() => t(38316)));
  a = t.O(a);
})();
