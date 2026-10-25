"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[9948], { 41615(n, e, t) {
  !(function n2() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
    } catch (n3) {
      console.error(n3);
    }
  })(), n.exports = t(11929);
}, 79474(n, e, t) {
  n.exports = t(22749);
}, 31544(n, e, t) {
  t.d(e, { Cp: () => c, J0: () => d, J5: () => p, NA: () => u, r: () => g });
  var o = t(90066), i = t(11555), a = t(3103), s = t(31784), r = t(68752);
  function c(n2, e2) {
    return (0, i.o5)().captureException(n2, (0, r.li)(e2));
  }
  function g(n2, e2) {
    return (0, i.o5)().captureEvent(n2, e2);
  }
  function u(n2, e2) {
    (0, i.rm)().setTag(n2, e2);
  }
  function d(n2) {
    const e2 = (0, i.KU)(), t2 = (0, i.rm)(), r2 = (0, i.o5)(), { release: c2, environment: g2 = o.U } = e2 && e2.getOptions() || {}, { userAgent: u2 } = s.O.navigator || {}, d2 = (0, a.fj)({ release: c2, environment: g2, user: r2.getUser() || t2.getUser(), ...u2 && { userAgent: u2 }, ...n2 }), l2 = t2.getSession();
    return l2 && "ok" === l2.status && (0, a.qO)(l2, { status: "exited" }), f(), t2.setSession(d2), r2.setSession(d2), d2;
  }
  function f() {
    const n2 = (0, i.rm)(), e2 = (0, i.o5)(), t2 = e2.getSession() || n2.getSession();
    t2 && (0, a.Vu)(t2), l(), n2.setSession(), e2.setSession();
  }
  function l() {
    const n2 = (0, i.rm)(), e2 = (0, i.o5)(), t2 = (0, i.KU)(), o2 = e2.getSession() || n2.getSession();
    o2 && t2 && t2.captureSession(o2);
  }
  function p(n2 = false) {
    n2 ? f() : l();
  }
}, 48927(n, e, t) {
  t.d(e, { NA: () => o.NA, Ts: () => a.T, ZQ: () => i.Z });
  var o = t(31544), i = t(26637), a = (t(11314), t(73042), t(23100));
  t(67602), t(86049);
}, 62020(n, e, t) {
  t.d(e, { r9: () => i.r, Bd: () => o.B }), t(3738), t(13434);
  var o = t(45460);
  t(52531), t(41501), t(46413), t(79474), t(99633), t(50115), t(33918), t(89772), t(77895);
  var i = t(87030);
  t(49255), t(38955);
}, 99633(n, e, t) {
  function o() {
    if (console && console.warn) {
      for (var n2, e2 = arguments.length, t2 = new Array(e2), o2 = 0; o2 < e2; o2++) t2[o2] = arguments[o2];
      "string" == typeof t2[0] && (t2[0] = "react-i18next:: ".concat(t2[0])), (n2 = console).warn.apply(n2, t2);
    }
  }
  t.d(e, { GA: () => c, NM: () => g, dM: () => r, mc: () => a });
  var i = {};
  function a() {
    for (var n2 = arguments.length, e2 = new Array(n2), t2 = 0; t2 < n2; t2++) e2[t2] = arguments[t2];
    "string" == typeof e2[0] && i[e2[0]] || ("string" == typeof e2[0] && (i[e2[0]] = /* @__PURE__ */ new Date()), o.apply(void 0, e2));
  }
  var s = function(n2, e2) {
    return function() {
      n2.isInitialized ? e2() : n2.on("initialized", (function t2() {
        setTimeout((function() {
          n2.off("initialized", t2);
        }), 0), e2();
      }));
    };
  };
  function r(n2, e2, t2) {
    n2.loadNamespaces(e2, s(n2, t2));
  }
  function c(n2, e2, t2, o2) {
    "string" == typeof t2 && (t2 = [t2]), t2.forEach((function(e3) {
      n2.options.ns.indexOf(e3) < 0 && n2.options.ns.push(e3);
    })), n2.loadLanguages(e2, s(n2, o2));
  }
  function g(n2, e2) {
    var t2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return e2.languages && e2.languages.length ? void 0 !== e2.options.ignoreJSONStructure ? e2.hasLoadedNamespace(n2, { lng: t2.lng, precheck: function(e3, o2) {
      if (t2.bindI18n && t2.bindI18n.indexOf("languageChanging") > -1 && e3.services.backendConnector.backend && e3.isLanguageChangingTo && !o2(e3.isLanguageChangingTo, n2)) return false;
    } }) : (function(n3, e3) {
      var t3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e3.languages[0], i2 = !!e3.options && e3.options.fallbackLng, a2 = e3.languages[e3.languages.length - 1];
      if ("cimode" === o2.toLowerCase()) return true;
      var s2 = function(n4, t4) {
        var o3 = e3.services.backendConnector.state["".concat(n4, "|").concat(t4)];
        return -1 === o3 || 2 === o3;
      };
      return !(t3.bindI18n && t3.bindI18n.indexOf("languageChanging") > -1 && e3.services.backendConnector.backend && e3.isLanguageChangingTo && !s2(e3.isLanguageChangingTo, n3) || !e3.hasResourceBundle(o2, n3) && e3.services.backendConnector.backend && (!e3.options.resources || e3.options.partialBundledLanguages) && (!s2(o2, n3) || i2 && !s2(a2, n3)));
    })(n2, e2, t2) : (a("i18n.languages were undefined or empty", e2.languages), true);
  }
} }]);
