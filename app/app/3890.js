/*! For license information please see 3890.js.LICENSE.txt */
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[3890], { 14487(e, n) {
  var t;
  !(function() {
    "use strict";
    var o = {}.hasOwnProperty;
    function r() {
      for (var e2 = [], n2 = 0; n2 < arguments.length; n2++) {
        var t2 = arguments[n2];
        if (t2) {
          var i = typeof t2;
          if ("string" === i || "number" === i) e2.push(t2);
          else if (Array.isArray(t2) && t2.length) {
            var a = r.apply(null, t2);
            a && e2.push(a);
          } else if ("object" === i) for (var s in t2) o.call(t2, s) && t2[s] && e2.push(s);
        }
      }
      return e2.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : void 0 === (t = function() {
      return r;
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
}, 48927(e, n, t) {
  "use strict";
  t.d(n, { NA: () => o.NA, Ts: () => i.T, ZQ: () => r.Z });
  var o = t(31544), r = t(26637), i = (t(11314), t(73042), t(23100));
  t(67602), t(86049);
}, 14381(e, n, t) {
  "use strict";
  t.d(n, { A: () => x });
  var o = t(39551), r = t(42363), i = [], a = i.forEach, s = i.slice, c = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, u = { name: "cookie", lookup: function(e2) {
    var n2;
    if (e2.lookupCookie && "undefined" != typeof document) {
      var t2 = (function(e3) {
        for (var n3 = "".concat(e3, "="), t3 = document.cookie.split(";"), o2 = 0; o2 < t3.length; o2++) {
          for (var r2 = t3[o2]; " " === r2.charAt(0); ) r2 = r2.substring(1, r2.length);
          if (0 === r2.indexOf(n3)) return r2.substring(n3.length, r2.length);
        }
        return null;
      })(e2.lookupCookie);
      t2 && (n2 = t2);
    }
    return n2;
  }, cacheUserLanguage: function(e2, n2) {
    n2.lookupCookie && "undefined" != typeof document && (function(e3, n3, t2, o2) {
      var r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
      t2 && (r2.expires = /* @__PURE__ */ new Date(), r2.expires.setTime(r2.expires.getTime() + 60 * t2 * 1e3)), o2 && (r2.domain = o2), document.cookie = (function(e4, n4, t3) {
        var o3 = t3 || {};
        o3.path = o3.path || "/";
        var r3 = encodeURIComponent(n4), i2 = "".concat(e4, "=").concat(r3);
        if (o3.maxAge > 0) {
          var a2 = o3.maxAge - 0;
          if (Number.isNaN(a2)) throw new Error("maxAge should be a Number");
          i2 += "; Max-Age=".concat(Math.floor(a2));
        }
        if (o3.domain) {
          if (!c.test(o3.domain)) throw new TypeError("option domain is invalid");
          i2 += "; Domain=".concat(o3.domain);
        }
        if (o3.path) {
          if (!c.test(o3.path)) throw new TypeError("option path is invalid");
          i2 += "; Path=".concat(o3.path);
        }
        if (o3.expires) {
          if ("function" != typeof o3.expires.toUTCString) throw new TypeError("option expires is invalid");
          i2 += "; Expires=".concat(o3.expires.toUTCString());
        }
        if (o3.httpOnly && (i2 += "; HttpOnly"), o3.secure && (i2 += "; Secure"), o3.sameSite) switch ("string" == typeof o3.sameSite ? o3.sameSite.toLowerCase() : o3.sameSite) {
          case true:
            i2 += "; SameSite=Strict";
            break;
          case "lax":
            i2 += "; SameSite=Lax";
            break;
          case "strict":
            i2 += "; SameSite=Strict";
            break;
          case "none":
            i2 += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
        return i2;
      })(e3, encodeURIComponent(n3), r2);
    })(n2.lookupCookie, e2, n2.cookieMinutes, n2.cookieDomain, n2.cookieOptions);
  } }, l = { name: "querystring", lookup: function(e2) {
    var n2;
    if ("undefined" != typeof window) {
      var t2 = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (t2 = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var o2 = t2.substring(1).split("&"), r2 = 0; r2 < o2.length; r2++) {
        var i2 = o2[r2].indexOf("=");
        i2 > 0 && o2[r2].substring(0, i2) === e2.lookupQuerystring && (n2 = o2[r2].substring(i2 + 1));
      }
    }
    return n2;
  } }, g = null, d = function() {
    if (null !== g) return g;
    try {
      g = "undefined" !== window && null !== window.localStorage;
      var e2 = "i18next.translate.boo";
      window.localStorage.setItem(e2, "foo"), window.localStorage.removeItem(e2);
    } catch (e3) {
      g = false;
    }
    return g;
  }, f = { name: "localStorage", lookup: function(e2) {
    var n2;
    if (e2.lookupLocalStorage && d()) {
      var t2 = window.localStorage.getItem(e2.lookupLocalStorage);
      t2 && (n2 = t2);
    }
    return n2;
  }, cacheUserLanguage: function(e2, n2) {
    n2.lookupLocalStorage && d() && window.localStorage.setItem(n2.lookupLocalStorage, e2);
  } }, p = null, h = function() {
    if (null !== p) return p;
    try {
      p = "undefined" !== window && null !== window.sessionStorage;
      var e2 = "i18next.translate.boo";
      window.sessionStorage.setItem(e2, "foo"), window.sessionStorage.removeItem(e2);
    } catch (e3) {
      p = false;
    }
    return p;
  }, v = { name: "sessionStorage", lookup: function(e2) {
    var n2;
    if (e2.lookupSessionStorage && h()) {
      var t2 = window.sessionStorage.getItem(e2.lookupSessionStorage);
      t2 && (n2 = t2);
    }
    return n2;
  }, cacheUserLanguage: function(e2, n2) {
    n2.lookupSessionStorage && h() && window.sessionStorage.setItem(n2.lookupSessionStorage, e2);
  } }, m = { name: "navigator", lookup: function(e2) {
    var n2 = [];
    if ("undefined" != typeof navigator) {
      if (navigator.languages) for (var t2 = 0; t2 < navigator.languages.length; t2++) n2.push(navigator.languages[t2]);
      navigator.userLanguage && n2.push(navigator.userLanguage), navigator.language && n2.push(navigator.language);
    }
    return n2.length > 0 ? n2 : void 0;
  } }, w = { name: "htmlTag", lookup: function(e2) {
    var n2, t2 = e2.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
    return t2 && "function" == typeof t2.getAttribute && (n2 = t2.getAttribute("lang")), n2;
  } }, k = { name: "path", lookup: function(e2) {
    var n2;
    if ("undefined" != typeof window) {
      var t2 = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (t2 instanceof Array) if ("number" == typeof e2.lookupFromPathIndex) {
        if ("string" != typeof t2[e2.lookupFromPathIndex]) return;
        n2 = t2[e2.lookupFromPathIndex].replace("/", "");
      } else n2 = t2[0].replace("/", "");
    }
    return n2;
  } }, y = { name: "subdomain", lookup: function(e2) {
    var n2 = "number" == typeof e2.lookupFromSubdomainIndex ? e2.lookupFromSubdomainIndex + 1 : 1, t2 = "undefined" != typeof window && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (t2) return t2[n2];
  } }, S = false;
  try {
    document.cookie, S = true;
  } catch (e2) {
  }
  var b = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
  S || b.splice(1, 1);
  var x = (function() {
    return (0, r.A)((function e2(n2) {
      var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (0, o.A)(this, e2), this.type = "languageDetector", this.detectors = {}, this.init(n2, t2);
    }), [{ key: "init", value: function(e2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      this.services = e2 || { languageUtils: {} }, this.options = (function(e3) {
        return a.call(s.call(arguments, 1), (function(n3) {
          if (n3) for (var t3 in n3) void 0 === e3[t3] && (e3[t3] = n3[t3]);
        })), e3;
      })(n2, this.options || {}, { order: b, lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"], convertDetectedLanguage: function(e3) {
        return e3;
      } }), "string" == typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(e3) {
        return e3.replace("-", "_");
      }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = t2, this.addDetector(u), this.addDetector(l), this.addDetector(f), this.addDetector(v), this.addDetector(m), this.addDetector(w), this.addDetector(k), this.addDetector(y);
    } }, { key: "addDetector", value: function(e2) {
      return this.detectors[e2.name] = e2, this;
    } }, { key: "detect", value: function(e2) {
      var n2 = this;
      e2 || (e2 = this.options.order);
      var t2 = [];
      return e2.forEach((function(e3) {
        if (n2.detectors[e3]) {
          var o2 = n2.detectors[e3].lookup(n2.options);
          o2 && "string" == typeof o2 && (o2 = [o2]), o2 && (t2 = t2.concat(o2));
        }
      })), t2 = t2.map((function(e3) {
        return n2.options.convertDetectedLanguage(e3);
      })), this.services.languageUtils.getBestMatchFromCodes ? t2 : t2.length > 0 ? t2[0] : null;
    } }, { key: "cacheUserLanguage", value: function(e2, n2) {
      var t2 = this;
      n2 || (n2 = this.options.caches), n2 && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e2) > -1 || n2.forEach((function(n3) {
        t2.detectors[n3] && t2.detectors[n3].cacheUserLanguage(e2, t2.options);
      })));
    } }]);
  })();
  x.type = "languageDetector";
}, 62020(e, n, t) {
  "use strict";
  t.d(n, { r9: () => f.r, Bd: () => o.B, CI: () => d }), t(3738), t(13434);
  var o = t(45460), r = t(52531), i = t(41501), a = t(46413), s = t(79474), c = t(99633), u = ["forwardedRef"];
  function l(e2, n2) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      n2 && (o2 = o2.filter((function(n3) {
        return Object.getOwnPropertyDescriptor(e2, n3).enumerable;
      }))), t2.push.apply(t2, o2);
    }
    return t2;
  }
  function g(e2) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var t2 = null != arguments[n2] ? arguments[n2] : {};
      n2 % 2 ? l(Object(t2), true).forEach((function(n3) {
        r(e2, n3, t2[n3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : l(Object(t2)).forEach((function(n3) {
        Object.defineProperty(e2, n3, Object.getOwnPropertyDescriptor(t2, n3));
      }));
    }
    return e2;
  }
  function d(e2) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function(t2) {
      function r2(r3) {
        var c2 = r3.forwardedRef, l2 = a(r3, u), d2 = (0, o.B)(e2, g(g({}, l2), {}, { keyPrefix: n2.keyPrefix })), f2 = i(d2, 3), p = f2[0], h = f2[1], v = f2[2], m = g(g({}, l2), {}, { t: p, i18n: h, tReady: v });
        return n2.withRef && c2 ? m.ref = c2 : !n2.withRef && c2 && (m.forwardedRef = c2), (0, s.createElement)(t2, m);
      }
      return r2.displayName = "withI18nextTranslation(".concat((0, c.Mn)(t2), ")"), r2.WrappedComponent = t2, n2.withRef ? (0, s.forwardRef)((function(e3, n3) {
        return (0, s.createElement)(r2, Object.assign({}, e3, { forwardedRef: n3 }));
      })) : r2;
    };
  }
  t(50115), t(33918), t(89772), t(77895);
  var f = t(87030);
  t(49255), t(38955);
}, 87030(e, n, t) {
  "use strict";
  t.d(n, { r: () => i });
  var o = t(49255), r = t(87561), i = { type: "3rdParty", init: function(e2) {
    (0, o.P)(e2.options.react), (0, r.V)(e2);
  } };
}, 99633(e, n, t) {
  "use strict";
  function o() {
    if (console && console.warn) {
      for (var e2, n2 = arguments.length, t2 = new Array(n2), o2 = 0; o2 < n2; o2++) t2[o2] = arguments[o2];
      "string" == typeof t2[0] && (t2[0] = "react-i18next:: ".concat(t2[0])), (e2 = console).warn.apply(e2, t2);
    }
  }
  t.d(n, { GA: () => c, Mn: () => l, NM: () => u, dM: () => s, mc: () => i });
  var r = {};
  function i() {
    for (var e2 = arguments.length, n2 = new Array(e2), t2 = 0; t2 < e2; t2++) n2[t2] = arguments[t2];
    "string" == typeof n2[0] && r[n2[0]] || ("string" == typeof n2[0] && (r[n2[0]] = /* @__PURE__ */ new Date()), o.apply(void 0, n2));
  }
  var a = function(e2, n2) {
    return function() {
      e2.isInitialized ? n2() : e2.on("initialized", (function t2() {
        setTimeout((function() {
          e2.off("initialized", t2);
        }), 0), n2();
      }));
    };
  };
  function s(e2, n2, t2) {
    e2.loadNamespaces(n2, a(e2, t2));
  }
  function c(e2, n2, t2, o2) {
    "string" == typeof t2 && (t2 = [t2]), t2.forEach((function(n3) {
      e2.options.ns.indexOf(n3) < 0 && e2.options.ns.push(n3);
    })), e2.loadLanguages(n2, a(e2, o2));
  }
  function u(e2, n2) {
    var t2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return n2.languages && n2.languages.length ? void 0 !== n2.options.ignoreJSONStructure ? n2.hasLoadedNamespace(e2, { lng: t2.lng, precheck: function(n3, o2) {
      if (t2.bindI18n && t2.bindI18n.indexOf("languageChanging") > -1 && n3.services.backendConnector.backend && n3.isLanguageChangingTo && !o2(n3.isLanguageChangingTo, e2)) return false;
    } }) : (function(e3, n3) {
      var t3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = n3.languages[0], r2 = !!n3.options && n3.options.fallbackLng, i2 = n3.languages[n3.languages.length - 1];
      if ("cimode" === o2.toLowerCase()) return true;
      var a2 = function(e4, t4) {
        var o3 = n3.services.backendConnector.state["".concat(e4, "|").concat(t4)];
        return -1 === o3 || 2 === o3;
      };
      return !(t3.bindI18n && t3.bindI18n.indexOf("languageChanging") > -1 && n3.services.backendConnector.backend && n3.isLanguageChangingTo && !a2(n3.isLanguageChangingTo, e3) || !n3.hasResourceBundle(o2, e3) && n3.services.backendConnector.backend && (!n3.options.resources || n3.options.partialBundledLanguages) && (!a2(o2, e3) || r2 && !a2(i2, e3)));
    })(e2, n2, t2) : (i("i18n.languages were undefined or empty", n2.languages), true);
  }
  function l(e2) {
    return e2.displayName || e2.name || ("string" == typeof e2 && e2.length > 0 ? e2 : "Unknown");
  }
} }]);
