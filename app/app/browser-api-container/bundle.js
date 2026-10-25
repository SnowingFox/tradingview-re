(() => {
  var e, t = { 92920(e2, t2, r2) {
    e2.exports = r2(70156);
  }, 79474(e2, t2, r2) {
    "use strict";
    e2.exports = r2(22749);
  }, 58604(e2, t2, r2) {
    "use strict";
    var o2 = r2(79474), i2 = r2(48088), n = r2(22259), s = r2(41493), a = r2(16928), u = r2(92920);
    let l = class {
      audio = null;
      playTimeout = null;
      stopLoopedPlayingTimeout = null;
      triggerAudioOnce = () => {
        null !== this.audio && this.audio.play();
      };
      triggerAudioPlayback(e3) {
        if (null === this.audio) return;
        if (this.triggerAudioOnce(), 0 === e3.duration) return void this.stopSound();
        this.audio.addEventListener("ended", this.triggerAudioOnce), this.stopLoopedPlayingTimeout && (clearTimeout(this.stopLoopedPlayingTimeout), this.stopLoopedPlayingTimeout = null);
        const t3 = 1e3 * e3.duration;
        this.stopLoopedPlayingTimeout = setTimeout((() => {
          this.stopSound();
        }), t3);
      }
      playSound(e3) {
        null === this.audio && (this.audio = new Audio((0, a.join)(u.app.getAppPath(), `/resources/sounds/${e3.name}.mp3`)), this.audio.volume = e3.volume / 100, this.playTimeout = setTimeout(this.triggerAudioPlayback.bind(this, e3), 500));
      }
      stopSound() {
        this.playTimeout && (clearTimeout(this.playTimeout), this.playTimeout = null), this.stopLoopedPlayingTimeout && (clearTimeout(this.stopLoopedPlayingTimeout), this.stopLoopedPlayingTimeout = null), null !== this.audio && (this.audio.removeEventListener("ended", this.triggerAudioOnce), this.audio = null);
      }
    };
    l = (function(e3, t3, r3, o3) {
      var i3, n2 = arguments.length, s2 = n2 < 3 ? t3 : null === o3 ? o3 = Object.getOwnPropertyDescriptor(t3, r3) : o3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s2 = Reflect.decorate(e3, t3, r3, o3);
      else for (var a2 = e3.length - 1; a2 >= 0; a2--) (i3 = e3[a2]) && (s2 = (n2 < 3 ? i3(s2) : n2 > 3 ? i3(t3, r3, s2) : i3(t3, r3)) || s2);
      return n2 > 3 && s2 && Object.defineProperty(t3, r3, s2), s2;
    })([(0, n.x)("tvd:sound-player-contract", n.f.getProvider())], l);
    var c = r2(42952), d = r2(12129);
    r2(14448), (0, s.F$)(), (0, d.z)(), n.f.initializeRpc(), (0, c.yo)();
    const p = document.getElementById("root");
    p && (0, i2.H)(p).render(o2.createElement(o2.Fragment, null));
  }, 42952(e2, t2, r2) {
    "use strict";
    r2.d(t2, { Mz: () => s, yo: () => a });
    var o2 = r2(84157), i2 = (r2(22259), r2(7750), r2(1820)), n = r2(9691);
    function s() {
      const e3 = (0, n.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
      if (!e3) throw new Error("getRendererInitialData() jsonParse error");
      return e3;
    }
    function a() {
      o2.ipcRenderer.send(i2.oh);
    }
  }, 22259(e2, t2, r2) {
    "use strict";
    function o2(e3, t3) {
      return (r3) => {
        const o3 = /* @__PURE__ */ (() => {
          let e4 = null;
          return (...t4) => (t4.length > 0 && console.error(`Service (${r3.name}) exposed as singleton and can not accept any construction arguments.`), null === e4 && (e4 = new r3()), e4);
        })();
        t3.registerFactory(e3, o3);
      };
    }
    r2.d(t2, { x: () => o2, f: () => i2 }), r2(34957);
    var i2 = r2(56039);
  }, 1820(e2, t2, r2) {
    "use strict";
    r2.d(t2, { oh: () => o2 });
    const o2 = "tvd:common-view-ready";
  }, 84157(e2) {
    "use strict";
    e2.exports = require("electron");
  }, 79896(e2) {
    "use strict";
    e2.exports = require("fs");
  }, 16928(e2) {
    "use strict";
    e2.exports = require("path");
  }, 87016(e2) {
    "use strict";
    e2.exports = require("url");
  } }, r = {};
  function o(e2) {
    var i2 = r[e2];
    if (void 0 !== i2) return i2.exports;
    var n = r[e2] = { id: e2, exports: {} };
    return t[e2].call(n.exports, n, n.exports, o), n.exports;
  }
  o.m = t, e = [], o.O = (t2, r2, i2, n) => {
    if (!r2) {
      var s = 1 / 0;
      for (c = 0; c < e.length; c++) {
        for (var [r2, i2, n] = e[c], a = true, u = 0; u < r2.length; u++) (false & n || s >= n) && Object.keys(o.O).every(((e2) => o.O[e2](r2[u]))) ? r2.splice(u--, 1) : (a = false, n < s && (s = n));
        if (a) {
          e.splice(c--, 1);
          var l = i2();
          void 0 !== l && (t2 = l);
        }
      }
      return t2;
    }
    n = n || 0;
    for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
    e[c] = [r2, i2, n];
  }, o.n = (e2) => {
    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return o.d(t2, { a: t2 }), t2;
  }, o.d = (e2, t2) => {
    for (var r2 in t2) o.o(t2, r2) && !o.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  }, o.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), o.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), o.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, (() => {
    var e2;
    o.g.importScripts && (e2 = o.g.location + "");
    var t2 = o.g.document;
    if (!e2 && t2 && (t2.currentScript && "SCRIPT" === t2.currentScript.tagName.toUpperCase() && (e2 = t2.currentScript.src), !e2)) {
      var r2 = t2.getElementsByTagName("script");
      if (r2.length) for (var i2 = r2.length - 1; i2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = r2[i2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e2 + "../";
  })(), (() => {
    o.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var e2 = { 7136: 0 };
    o.O.j = (t3) => 0 === e2[t3];
    var t2 = (t3, r3) => {
      var i2, n, [s, a, u] = r3, l = 0;
      if (s.some(((t4) => 0 !== e2[t4]))) {
        for (i2 in a) o.o(a, i2) && (o.m[i2] = a[i2]);
        if (u) var c = u(o);
      }
      for (t3 && t3(r3); l < s.length; l++) n = s[l], o.o(e2, n) && e2[n] && e2[n][0](), e2[n] = 0;
      return o.O(c);
    }, r2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    r2.forEach(t2.bind(null, 0)), r2.push = t2.bind(null, r2.push.bind(r2));
  })(), o.nc = void 0;
  var i = o.O(void 0, [3703, 2252, 156, 6428, 3409, 8504, 5833], (() => o(58604)));
  i = o.O(i);
})();
