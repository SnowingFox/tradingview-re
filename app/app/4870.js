(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[4870], { 80351(e) {
  e.exports = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
}, 3593(e) {
  e.exports = function(e2, t) {
    (null == t || t > e2.length) && (t = e2.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e2[r];
    return n;
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 30449(e) {
  e.exports = function(e2) {
    if (Array.isArray(e2)) return e2;
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 19733(e) {
  e.exports = function(e2, t) {
    if (!(e2 instanceof t)) throw new TypeError("Cannot call a class as a function");
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 3109(e, t, r) {
  var n = r(36866);
  function o(e2, t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      var o2 = t2[r2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, n(o2.key), o2);
    }
  }
  e.exports = function(e2, t2, r2) {
    return t2 && o(e2.prototype, t2), r2 && o(e2, r2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 52531(e, t, r) {
  var n = r(36866);
  e.exports = function(e2, t2, r2) {
    return (t2 = n(t2)) in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 1546(e) {
  e.exports = function(e2, t) {
    var r = null == e2 ? null : "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
    if (null != r) {
      var n, o, s, u, a = [], i = true, c = false;
      try {
        if (s = (r = r.call(e2)).next, 0 === t) {
          if (Object(r) !== r) return;
          i = false;
        } else for (; !(i = (n = s.call(r)).done) && (a.push(n.value), a.length !== t); i = true) ;
      } catch (e3) {
        c = true, o = e3;
      } finally {
        try {
          if (!i && null != r.return && (u = r.return(), Object(u) !== u)) return;
        } finally {
          if (c) throw o;
        }
      }
      return a;
    }
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 53170(e) {
  e.exports = function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 46413(e, t, r) {
  var n = r(68219);
  e.exports = function(e2, t2) {
    if (null == e2) return {};
    var r2, o, s = n(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var u = Object.getOwnPropertySymbols(e2);
      for (o = 0; o < u.length; o++) r2 = u[o], -1 === t2.indexOf(r2) && {}.propertyIsEnumerable.call(e2, r2) && (s[r2] = e2[r2]);
    }
    return s;
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 68219(e) {
  e.exports = function(e2, t) {
    if (null == e2) return {};
    var r = {};
    for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
      if (-1 !== t.indexOf(n)) continue;
      r[n] = e2[n];
    }
    return r;
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 41501(e, t, r) {
  var n = r(30449), o = r(1546), s = r(40248), u = r(53170);
  e.exports = function(e2, t2) {
    return n(e2) || o(e2, t2) || s(e2, t2) || u();
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 65031(e, t, r) {
  var n = r(31948).default;
  e.exports = function(e2, t2) {
    if ("object" != n(e2) || !e2) return e2;
    var r2 = e2[Symbol.toPrimitive];
    if (void 0 !== r2) {
      var o = r2.call(e2, t2 || "default");
      if ("object" != n(o)) return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t2 ? String : Number)(e2);
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 36866(e, t, r) {
  var n = r(31948).default, o = r(65031);
  e.exports = function(e2) {
    var t2 = o(e2, "string");
    return "symbol" == n(t2) ? t2 : t2 + "";
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 31948(e) {
  function t(r) {
    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    }, e.exports.__esModule = true, e.exports.default = e.exports, t(r);
  }
  e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
}, 40248(e, t, r) {
  var n = r(3593);
  e.exports = function(e2, t2) {
    if (e2) {
      if ("string" == typeof e2) return n(e2, t2);
      var r2 = {}.toString.call(e2).slice(8, -1);
      return "Object" === r2 && e2.constructor && (r2 = e2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? n(e2, t2) : void 0;
    }
  }, e.exports.__esModule = true, e.exports.default = e.exports;
}, 33918(e, t, r) {
  "use strict";
  r(79474), r(38955);
}, 3738(e, t, r) {
  "use strict";
  r(52531), r(46413), r(79474), r(13434), r(38955);
}, 13434(e, t, r) {
  "use strict";
  r(46413), r(31948), r(52531), r(79474), r(80351), /* @__PURE__ */ Object.create(null), r(99633), r(49255);
}, 50115(e, t, r) {
  "use strict";
  r(41501), r(46413), r(45460);
}, 38955(e, t, r) {
  "use strict";
  r.d(t, { TO: () => a.T, gJ: () => i, hz: () => c, rV: () => u.r }), r(52531);
  var n = r(19733), o = r(3109), s = r(79474), u = r(49255), a = r(87561);
  r(87030);
  var i = (0, s.createContext)(), c = (function() {
    function e2() {
      n(this, e2), this.usedNamespaces = {};
    }
    return o(e2, [{ key: "addUsedNamespaces", value: function(e3) {
      var t2 = this;
      e3.forEach((function(e4) {
        t2.usedNamespaces[e4] || (t2.usedNamespaces[e4] = true);
      }));
    } }, { key: "getUsedNamespaces", value: function() {
      return Object.keys(this.usedNamespaces);
    } }]), e2;
  })();
}, 49255(e, t, r) {
  "use strict";
  r.d(t, { r: () => l, P: () => p });
  var n = r(52531), o = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, s = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" }, u = function(e2) {
    return s[e2];
  };
  function a(e2, t2) {
    var r2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var n2 = Object.getOwnPropertySymbols(e2);
      t2 && (n2 = n2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), r2.push.apply(r2, n2);
    }
    return r2;
  }
  function i(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? a(Object(r2), true).forEach((function(t3) {
        n(e2, t3, r2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : a(Object(r2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
      }));
    }
    return e2;
  }
  var c = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: true, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: true, unescape: function(e2) {
    return e2.replace(o, u);
  } };
  function p() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    c = i(i({}, c), e2);
  }
  function l() {
    return c;
  }
}, 87561(e, t, r) {
  "use strict";
  var n;
  function o(e2) {
    n = e2;
  }
  function s() {
    return n;
  }
  r.d(t, { T: () => s, V: () => o });
}, 77895(e, t, r) {
  "use strict";
  r(79474), r(38955);
}, 45460(e, t, r) {
  "use strict";
  r.d(t, { B: () => l });
  var n = r(41501), o = r(52531), s = r(31948), u = r(79474), a = r(38955), i = r(99633);
  function c(e2, t2) {
    var r2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var n2 = Object.getOwnPropertySymbols(e2);
      t2 && (n2 = n2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), r2.push.apply(r2, n2);
    }
    return r2;
  }
  function p(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? c(Object(r2), true).forEach((function(t3) {
        o(e2, t3, r2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : c(Object(r2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
      }));
    }
    return e2;
  }
  function l(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = t2.i18n, o2 = (0, u.useContext)(a.gJ) || {}, c2 = o2.i18n, l2 = o2.defaultNS, f = r2 || c2 || (0, a.TO)();
    if (f && !f.reportNamespaces && (f.reportNamespaces = new a.hz()), !f) {
      (0, i.mc)("You will need to pass in an i18next instance by using initReactI18next");
      var d = function(e3, t3) {
        return "string" == typeof t3 ? t3 : t3 && "object" === s(t3) && "string" == typeof t3.defaultValue ? t3.defaultValue : Array.isArray(e3) ? e3[e3.length - 1] : e3;
      }, b = [d, {}, false];
      return b.t = d, b.i18n = {}, b.ready = false, b;
    }
    f.options.react && void 0 !== f.options.react.wait && (0, i.mc)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    var y = p(p(p({}, (0, a.rV)()), f.options.react), t2), x = y.useSuspense, v = y.keyPrefix, g = e2 || l2 || f.options && f.options.defaultNS;
    g = "string" == typeof g ? [g] : g || ["translation"], f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(g);
    var m = (f.isInitialized || f.initializedStoreOnce) && g.every((function(e3) {
      return (0, i.NM)(e3, f, y);
    }));
    function O() {
      return f.getFixedT(t2.lng || null, "fallback" === y.nsMode ? g : g[0], v);
    }
    var h = (0, u.useState)(O), j = n(h, 2), w = j[0], _ = j[1], S = g.join();
    t2.lng && (S = "".concat(t2.lng).concat(S));
    var P, M, N, k = (P = S, N = (0, u.useRef)(), (0, u.useEffect)((function() {
      N.current = P;
    }), [P, M]), N.current), E = (0, u.useRef)(true);
    (0, u.useEffect)((function() {
      var e3 = y.bindI18n, r3 = y.bindI18nStore;
      function n2() {
        E.current && _(O);
      }
      return E.current = true, m || x || (t2.lng ? (0, i.GA)(f, t2.lng, g, (function() {
        E.current && _(O);
      })) : (0, i.dM)(f, g, (function() {
        E.current && _(O);
      }))), m && k && k !== S && E.current && _(O), e3 && f && f.on(e3, n2), r3 && f && f.store.on(r3, n2), function() {
        E.current = false, e3 && f && e3.split(" ").forEach((function(e4) {
          return f.off(e4, n2);
        })), r3 && f && r3.split(" ").forEach((function(e4) {
          return f.store.off(e4, n2);
        }));
      };
    }), [f, S]);
    var I = (0, u.useRef)(true);
    (0, u.useEffect)((function() {
      E.current && !I.current && _(O), I.current = false;
    }), [f, v]);
    var A = [w, f, m];
    if (A.t = w, A.i18n = f, A.ready = m, m) return A;
    if (!m && !x) return A;
    throw new Promise((function(e3) {
      t2.lng ? (0, i.GA)(f, t2.lng, g, (function() {
        return e3();
      })) : (0, i.dM)(f, g, (function() {
        return e3();
      }));
    }));
  }
}, 89772(e, t, r) {
  "use strict";
  r(52531), r(46413), r(79474), r(77895), r(38955), r(99633);
} }]);
