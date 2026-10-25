/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t, e = { 14487(t2, e2) {
    var n2;
    !(function() {
      "use strict";
      var r2 = {}.hasOwnProperty;
      function a2() {
        for (var t3 = [], e3 = 0; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          if (n3) {
            var o = typeof n3;
            if ("string" === o || "number" === o) t3.push(n3);
            else if (Array.isArray(n3) && n3.length) {
              var s = a2.apply(null, n3);
              s && t3.push(s);
            } else if ("object" === o) for (var i in n3) r2.call(n3, i) && n3[i] && t3.push(i);
          }
        }
        return t3.join(" ");
      }
      t2.exports ? (a2.default = a2, t2.exports = a2) : void 0 === (n2 = function() {
        return a2;
      }.apply(e2, [])) || (t2.exports = n2);
    })();
  }, 15739(t2, e2, n2) {
    "use strict";
    n2.d(e2, { A: () => D });
    var r2 = n2(30050), a2 = n2.n(r2), o = n2(77259), s = n2.n(o), i = n2(97378), l = n2.n(i), p = new URL(n2(52408), n2.b), c = new URL(n2(36373), n2.b), u = new URL(n2(97295), n2.b), d = new URL(n2(90230), n2.b), h = new URL(n2(66218), n2.b), g = new URL(n2(98076), n2.b), f = new URL(n2(23435), n2.b), b = new URL(n2(34109), n2.b), v = new URL(n2(51567), n2.b), y = s()(a2()), m = l()(p), x = l()(c), w = l()(u), k = l()(d), E = l()(h), A = l()(g), F = l()(f), S = l()(b), j = l()(v);
    y.push([t2.id, "#root {\n	height: 100vh;\n	width: 100%;\n}\n\n.splash {\n	height: 100%;\n	width: 100%;\n	display: flex;\n	background-size: contain;\n\n	> .splash-content {\n		display: flex;\n		align-items: center;\n		flex-direction: column;\n		font-size: 12px;\n		line-height: 18px;\n		margin: 32px auto;\n		justify-content: flex-end;\n\n		/*\n		 * Design mockups are made in the background image size (1200x700), which is twice bigger\n		 * than the splash window, so typography token sizes taken from the mockups are halved.\n		 */\n		> .splash-half-typography {\n			font-size: calc(var(--ui-lib-typography-font-size) / 2);\n			line-height: calc(var(--ui-lib-typography-line-height) / 2);\n			color: var(--color-white); /* base ui-lib palette color */\n		}\n	}\n\n	/* logo astronaut */\n	&.astronaut-ice,\n	&.astronaut-rover,\n	&.astronaut-sunset {\n		> .splash-content {\n			justify-content: start;\n\n			> .version-info {\n				margin-top: 8px;\n				white-space: nowrap;\n			}\n		}\n	}\n\n	&.astronaut-ice {\n		background-image: url(" + m + ");\n\n		> .splash-content {\n			margin: 146px 0 0 48px;\n		}\n	}\n\n	&.astronaut-rover {\n		background-image: url(" + x + ");\n\n		> .splash-content {\n			margin: 146px 48px 0 auto;\n		}\n	}\n\n	&.astronaut-sunset {\n		background-image: url(" + w + ");\n\n		> .splash-content {\n			margin: 78px auto 0;\n		}\n	}\n\n	/* first april splash */\n	&.first-april {\n		background-image: url(" + k + ");\n\n		> .splash-content {\n			margin: 0 0 134px 51px;\n			width: 226px;\n\n			> .version-info {\n				margin-top: 7px;\n				white-space: nowrap;\n			}\n		}\n	}\n\n	/* halloween splash */\n	&.halloween {\n		background-image: url(" + E + ");\n	}\n\n	/* black friday splash */\n	&.black-friday {\n		background-image: url(" + A + ");\n		color: var(--color-ripe-red-500);\n\n		.splash-event-title {\n			background: linear-gradient(90.04deg, #FF2E3E 46.59%, #FC5901 77.06%, #FF9800 106.5%);\n		}\n	}\n\n	/* cyber monday splash */\n	&.cyber-monday {\n		background-image: url(" + F + ");\n		color: var(--color-sky-blue-a400); /* base ui-lib palette color */\n\n		.splash-event-title {\n			background: linear-gradient(90.19deg, #7C4DFF -14.72%, #03E6FE 40.23%, #62FFD0 99.82%);\n		}\n	}\n\n	&.black-friday,\n	&.cyber-monday {\n		.splash-event-title {\n			-webkit-background-clip: text;\n			-webkit-text-fill-color: transparent;\n		}\n	}\n\n	/* christmas holidays splash */\n	&.christmas-holidays {\n		background-image: url(" + S + ");\n\n		> .splash-content {\n			width: 228px;\n			margin: 146px 0 0 48px;\n			justify-content: flex-start;\n\n			> .version-info {\n				margin-top: 8px;\n				white-space: nowrap;\n			}\n		}\n	}\n\n	&.new-year {\n		background-image: url(" + j + ");\n	}\n}\n", ""]);
    const D = y;
  }, 13797(t2, e2, n2) {
    "use strict";
    n2.d(e2, { A: () => i });
    var r2 = n2(30050), a2 = n2.n(r2), o = n2(77259), s = n2.n(o)()(a2());
    s.push([t2.id, ".version-info {\n	color: #B2B5BE;\n	margin-top: 4px;\n}\n\n.version-info.build-date {\n	padding-top: 0;\n}\n\n.happy-holidays .version-info,\n.new-year-tv .version-info {\n	color: #F8F9FD;\n}\n\n.astronaut-ice .version-info,\n.astronaut-rover .version-info,\n.astronaut-sunset .version-info {\n	color: var(--color-white); /* base ui-lib palette color */\n}\n\n", ""]);
    const i = s;
  }, 79474(t2, e2, n2) {
    "use strict";
    t2.exports = n2(22749);
  }, 42952(t2, e2, n2) {
    "use strict";
    n2.d(e2, { Mz: () => a2 }), n2(84157), n2(22259), n2(7750);
    var r2 = n2(9691);
    function a2() {
      const t3 = (0, r2.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
      if (!t3) throw new Error("getRendererInitialData() jsonParse error");
      return t3;
    }
  }, 10452(t2, e2, n2) {
    "use strict";
    var r2 = n2(79474), a2 = n2(48088), o = n2(41493), s = n2(12129), i = n2(20369), l = n2(42952), p = n2(22259), c = n2(75739), u = n2(72539), d = n2.n(u), h = n2(48560), g = n2.n(h), f = n2(57148), b = n2.n(f), v = n2(60251), y = n2.n(v), m = n2(81263), x = n2.n(m), w = n2(50892), k = n2.n(w), E = n2(13797), A = {};
    A.styleTagTransform = k(), A.setAttributes = y(), A.insert = b().bind(null, "head"), A.domAPI = g(), A.insertStyleElement = x(), d()(E.A, A), E.A && E.A.locals && E.A.locals, p.f.initializeRpc();
    class F extends r2.Component {
      state = { version: "", buildDate: "" };
      componentDidMount() {
        (0, c.uY)(this.initVersion());
      }
      async initVersion() {
        const t3 = await p.f.provideProxy("tvd:main-service").getVersionInfo(), e3 = new Date(t3.buildDate).toLocaleDateString();
        this.setState({ version: `Version ${t3.appVersion}`, buildDate: e3 });
      }
      render() {
        return r2.createElement(i.o, { tag: "div", name: "typography-regular-24px", className: "version-info splash-half-typography" }, `${this.state.version} ${this.state.version ? "·" : ""} ${this.state.buildDate}`);
      }
    }
    var S = n2(15739), j = {};
    j.styleTagTransform = k(), j.setAttributes = y(), j.insert = b().bind(null, "head"), j.domAPI = g(), j.insertStyleElement = x(), d()(S.A, j), S.A && S.A.locals && S.A.locals;
    const D = /* @__PURE__ */ new Map([["astronaut-ice", "typography-accent-adaptive-2xl-euclid-desktop"], ["astronaut-rover", "typography-accent-adaptive-2xl-euclid-desktop"], ["astronaut-sunset", "typography-accent-adaptive-2xl-euclid-desktop"], ["first-april", "typography-accent-adaptive-2xl-euclid-desktop"], ["halloween", "typography-accent-adaptive-l-euclid-desktop"], ["black-friday", "typography-accent-adaptive-l-euclid-desktop"], ["cyber-monday", "typography-accent-adaptive-l-euclid-desktop"], ["christmas-holidays", "typography-accent-adaptive-2xl-euclid-desktop"], ["new-year", "typography-accent-adaptive-l-euclid-desktop"]]), O = () => {
      const { splashData: t3 } = (0, l.Mz)();
      return r2.createElement("div", { className: `splash ${t3.postfix}` }, r2.createElement("div", { className: "splash-content" }, r2.createElement(i.o, { tag: "span", name: D.get(t3.postfix) ?? "typography-regular-24px", className: "splash-title splash-half-typography" }, t3.title, t3.eventTitle && r2.createElement(r2.Fragment, null, " · ", r2.createElement("span", { className: "splash-event-title" }, t3.eventTitle))), r2.createElement(F, null)));
    };
    n2(14448), (0, o.F$)(), (0, s.z)();
    const R = document.getElementById("root");
    R && (0, a2.H)(R).render(r2.createElement(O, null));
  }, 22259(t2, e2, n2) {
    "use strict";
    n2.d(e2, { f: () => r2 }), n2(34957);
    var r2 = n2(56039);
  }, 52408(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "aa56db7af4062bc057f8.png";
  }, 36373(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "6d6a9fcede2fe1857ed8.png";
  }, 97295(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "b86c42cca5e73dc2b07f.png";
  }, 98076(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "a405b1e16e931f3b9106.png";
  }, 34109(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "ef54da929d102fba360a.png";
  }, 23435(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "019db1eaf307d92a9774.png";
  }, 90230(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "01debddf3f8a7a3ca8ab.png";
  }, 66218(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "5d3775bf39ca295e26cb.png";
  }, 51567(t2, e2, n2) {
    "use strict";
    t2.exports = n2.p + "4e77c78e6fc750ea16dd.png";
  }, 84157(t2) {
    "use strict";
    t2.exports = require("electron");
  }, 79896(t2) {
    "use strict";
    t2.exports = require("fs");
  }, 16928(t2) {
    "use strict";
    t2.exports = require("path");
  }, 87016(t2) {
    "use strict";
    t2.exports = require("url");
  } }, n = {};
  function r(t2) {
    var a2 = n[t2];
    if (void 0 !== a2) return a2.exports;
    var o = n[t2] = { id: t2, exports: {} };
    return e[t2].call(o.exports, o, o.exports, r), o.exports;
  }
  r.m = e, t = [], r.O = (e2, n2, a2, o) => {
    if (!n2) {
      var s = 1 / 0;
      for (c = 0; c < t.length; c++) {
        for (var [n2, a2, o] = t[c], i = true, l = 0; l < n2.length; l++) (false & o || s >= o) && Object.keys(r.O).every(((t2) => r.O[t2](n2[l]))) ? n2.splice(l--, 1) : (i = false, o < s && (s = o));
        if (i) {
          t.splice(c--, 1);
          var p = a2();
          void 0 !== p && (e2 = p);
        }
      }
      return e2;
    }
    o = o || 0;
    for (var c = t.length; c > 0 && t[c - 1][2] > o; c--) t[c] = t[c - 1];
    t[c] = [n2, a2, o];
  }, r.n = (t2) => {
    var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
    return r.d(e2, { a: e2 }), e2;
  }, r.d = (t2, e2) => {
    for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, r.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window) return window;
    }
  })(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, (() => {
    var t2;
    r.g.importScripts && (t2 = r.g.location + "");
    var e2 = r.g.document;
    if (!t2 && e2 && (e2.currentScript && "SCRIPT" === e2.currentScript.tagName.toUpperCase() && (t2 = e2.currentScript.src), !t2)) {
      var n2 = e2.getElementsByTagName("script");
      if (n2.length) for (var a2 = n2.length - 1; a2 > -1 && (!t2 || !/^http(s?):/.test(t2)); ) t2 = n2[a2--].src;
    }
    if (!t2) throw new Error("Automatic publicPath is not supported in this browser");
    t2 = t2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = t2 + "../";
  })(), (() => {
    r.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var t2 = { 8642: 0 };
    r.O.j = (e3) => 0 === t2[e3];
    var e2 = (e3, n3) => {
      var a2, o, [s, i, l] = n3, p = 0;
      if (s.some(((e4) => 0 !== t2[e4]))) {
        for (a2 in i) r.o(i, a2) && (r.m[a2] = i[a2]);
        if (l) var c = l(r);
      }
      for (e3 && e3(n3); p < s.length; p++) o = s[p], r.o(t2, o) && t2[o] && t2[o][0](), t2[o] = 0;
      return r.O(c);
    }, n2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    n2.forEach(e2.bind(null, 0)), n2.push = e2.bind(null, n2.push.bind(n2));
  })(), r.nc = void 0;
  var a = r.O(void 0, [3703, 2252, 369, 6428, 3409, 8504, 5833], (() => r(10452)));
  a = r.O(a);
})();
