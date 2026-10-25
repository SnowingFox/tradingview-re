/*! For license information please see 2766.js.LICENSE.txt */
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[2766, 9948], { 14487(e, n) {
  var t;
  !(function() {
    "use strict";
    var r = {}.hasOwnProperty;
    function o() {
      for (var e2 = [], n2 = 0; n2 < arguments.length; n2++) {
        var t2 = arguments[n2];
        if (t2) {
          var i = typeof t2;
          if ("string" === i || "number" === i) e2.push(t2);
          else if (Array.isArray(t2) && t2.length) {
            var s = o.apply(null, t2);
            s && e2.push(s);
          } else if ("object" === i) for (var a in t2) r.call(t2, a) && t2[a] && e2.push(a);
        }
      }
      return e2.join(" ");
    }
    e.exports ? (o.default = o, e.exports = o) : void 0 === (t = function() {
      return o;
    }.apply(n, [])) || (e.exports = t);
  })();
}, 41615(e, n, t) {
  "use strict";
  !(function e2() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e2);
    } catch (e3) {
      console.error(e3);
    }
  })(), e.exports = t(11929);
}, 79474(e, n, t) {
  "use strict";
  e.exports = t(22749);
}, 82026(e, n, t) {
  "use strict";
  var r = t(72539), o = t.n(r), i = t(48560), s = t.n(i), a = t(57148), c = t.n(a), u = t(60251), l = t.n(u), f = t(81263), g = t.n(f), d = t(50892), p = t.n(d), h = t(11532), v = {};
  v.styleTagTransform = p(), v.setAttributes = l(), v.insert = c().bind(null, "head"), v.domAPI = s(), v.insertStyleElement = g(), o()(h.A, v), h.A && h.A.locals && h.A.locals;
}, 31544(e, n, t) {
  "use strict";
  t.d(n, { Cp: () => c, J0: () => f, J5: () => p, NA: () => l, r: () => u });
  var r = t(90066), o = t(11555), i = t(3103), s = t(31784), a = t(68752);
  function c(e2, n2) {
    return (0, o.o5)().captureException(e2, (0, a.li)(n2));
  }
  function u(e2, n2) {
    return (0, o.o5)().captureEvent(e2, n2);
  }
  function l(e2, n2) {
    (0, o.rm)().setTag(e2, n2);
  }
  function f(e2) {
    const n2 = (0, o.KU)(), t2 = (0, o.rm)(), a2 = (0, o.o5)(), { release: c2, environment: u2 = r.U } = n2 && n2.getOptions() || {}, { userAgent: l2 } = s.O.navigator || {}, f2 = (0, i.fj)({ release: c2, environment: u2, user: a2.getUser() || t2.getUser(), ...l2 && { userAgent: l2 }, ...e2 }), d2 = t2.getSession();
    return d2 && "ok" === d2.status && (0, i.qO)(d2, { status: "exited" }), g(), t2.setSession(f2), a2.setSession(f2), f2;
  }
  function g() {
    const e2 = (0, o.rm)(), n2 = (0, o.o5)(), t2 = n2.getSession() || e2.getSession();
    t2 && (0, i.Vu)(t2), d(), e2.setSession(), n2.setSession();
  }
  function d() {
    const e2 = (0, o.rm)(), n2 = (0, o.o5)(), t2 = (0, o.KU)(), r2 = n2.getSession() || e2.getSession();
    r2 && t2 && t2.captureSession(r2);
  }
  function p(e2 = false) {
    e2 ? g() : d();
  }
}, 48927(e, n, t) {
  "use strict";
  t.d(n, { NA: () => r.NA, Ts: () => i.T, ZQ: () => o.Z });
  var r = t(31544), o = t(26637), i = (t(11314), t(73042), t(23100));
  t(67602), t(86049);
}, 62020(e, n, t) {
  "use strict";
  t.d(n, { r9: () => d.r, Bd: () => r.B, CI: () => g }), t(3738), t(13434);
  var r = t(45460), o = t(52531), i = t(41501), s = t(46413), a = t(79474), c = t(99633), u = ["forwardedRef"];
  function l(e2, n2) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      n2 && (r2 = r2.filter((function(n3) {
        return Object.getOwnPropertyDescriptor(e2, n3).enumerable;
      }))), t2.push.apply(t2, r2);
    }
    return t2;
  }
  function f(e2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var t2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? l(Object(t2), true).forEach((function(n3) {
        o(e2, n3, t2[n3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : l(Object(t2)).forEach((function(n3) {
        Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t2, n3));
      }));
    }
    return e2;
  }
  function g(e2) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function(t2) {
      function o2(o3) {
        var c2 = o3.forwardedRef, l2 = s(o3, u), g2 = (0, r.B)(e2, f(f({}, l2), {}, { keyPrefix: n2.keyPrefix })), d2 = i(g2, 3), p = d2[0], h = d2[1], v = d2[2], y = f(f({}, l2), {}, { t: p, i18n: h, tReady: v });
        return n2.withRef && c2 ? y.ref = c2 : !n2.withRef && c2 && (y.forwardedRef = c2), (0, a.createElement)(t2, y);
      }
      return o2.displayName = "withI18nextTranslation(".concat((0, c.Mn)(t2), ")"), o2.WrappedComponent = t2, n2.withRef ? (0, a.forwardRef)((function(e3, n3) {
        return (0, a.createElement)(o2, Object.assign({}, e3, { forwardedRef: n3 }));
      })) : o2;
    };
  }
  t(50115), t(33918), t(89772), t(77895);
  var d = t(87030);
  t(49255), t(38955);
}, 99633(e, n, t) {
  "use strict";
  function r() {
    if (console && console.warn) {
      for (var e2, n2 = arguments.length, t2 = new Array(n2), r2 = 0; r2 < n2; r2++) t2[r2] = arguments[r2];
      "string" == typeof t2[0] && (t2[0] = "react-i18next:: ".concat(t2[0])), (e2 = console).warn.apply(e2, t2);
    }
  }
  t.d(n, { GA: () => c, Mn: () => l, NM: () => u, dM: () => a, mc: () => i });
  var o = {};
  function i() {
    for (var e2 = arguments.length, n2 = new Array(e2), t2 = 0; t2 < e2; t2++) n2[t2] = arguments[t2];
    "string" == typeof n2[0] && o[n2[0]] || ("string" == typeof n2[0] && (o[n2[0]] = /* @__PURE__ */ new Date()), r.apply(void 0, n2));
  }
  var s = function(e2, n2) {
    return function() {
      e2.isInitialized ? n2() : e2.on("initialized", (function t2() {
        setTimeout((function() {
          e2.off("initialized", t2);
        }), 0), n2();
      }));
    };
  };
  function a(e2, n2, t2) {
    e2.loadNamespaces(n2, s(e2, t2));
  }
  function c(e2, n2, t2, r2) {
    "string" == typeof t2 && (t2 = [t2]), t2.forEach((function(n3) {
      e2.options.ns.indexOf(n3) < 0 && e2.options.ns.push(n3);
    })), e2.loadLanguages(n2, s(e2, r2));
  }
  function u(e2, n2) {
    var t2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return n2.languages && n2.languages.length ? void 0 !== n2.options.ignoreJSONStructure ? n2.hasLoadedNamespace(e2, { lng: t2.lng, precheck: function(n3, r2) {
      if (t2.bindI18n && t2.bindI18n.indexOf("languageChanging") > -1 && n3.services.backendConnector.backend && n3.isLanguageChangingTo && !r2(n3.isLanguageChangingTo, e2)) return false;
    } }) : (function(e3, n3) {
      var t3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = n3.languages[0], o2 = !!n3.options && n3.options.fallbackLng, i2 = n3.languages[n3.languages.length - 1];
      if ("cimode" === r2.toLowerCase()) return true;
      var s2 = function(e4, t4) {
        var r3 = n3.services.backendConnector.state["".concat(e4, "|").concat(t4)];
        return -1 === r3 || 2 === r3;
      };
      return !(t3.bindI18n && t3.bindI18n.indexOf("languageChanging") > -1 && n3.services.backendConnector.backend && n3.isLanguageChangingTo && !s2(n3.isLanguageChangingTo, e3) || !n3.hasResourceBundle(r2, e3) && n3.services.backendConnector.backend && (!n3.options.resources || n3.options.partialBundledLanguages) && (!s2(r2, e3) || o2 && !s2(i2, e3)));
    })(e2, n2, t2) : (i("i18n.languages were undefined or empty", n2.languages), true);
  }
  function l(e2) {
    return e2.displayName || e2.name || ("string" == typeof e2 && e2.length > 0 ? e2 : "Unknown");
  }
}, 73528(e) {
  "use strict";
  e.exports = JSON.parse('{"link-colors":"link-colors-1JyPtuQF","link-colors-with-underline":"link-colors-with-underline-3EJoCRFW","link-colors-secondary":"link-colors-secondary-1Ar0hhqH","link-colors-secondary-with-underline":"link-colors-secondary-with-underline-37kYaTlT","focus-outline-rounded":"focus-outline-rounded-16hk1LC7"}');
} }]);
