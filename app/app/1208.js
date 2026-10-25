"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[1208], { 65937(e, i, a) {
  a.d(i, { s: () => d });
  var r = a(79474), t = a(14487), o = a.n(t), n = a(40236), l = a(86692), s = a(15671);
  a(72103);
  const d = (0, r.forwardRef)(((e2, i2) => {
    const a2 = (0, r.useContext)(n.m8).variant, { title: t2, onClick: d2, colorClassName: u, icon: c, tabIndex: f, variant: p = a2 ?? n.nL, shape: v = "square", dataQaId: g } = e2;
    return r.createElement("button", { ref: i2, title: t2, type: "button", "aria-label": t2, onClick: d2, tabIndex: f, className: o()(s.iconButton, s[p], s[v], u, "apply-common-tooltip"), "data-qa-id": g }, r.createElement(l.t, { icon: c, className: s.icon, "aria-hidden": "true" }));
  }));
}, 97917(e, i, a) {
  a.d(i, { f: () => z });
  var r = a(79474), t = a(14487), o = a.n(t);
  function n(e2) {
    const i2 = void 0 !== e2 ? (a2 = e2, Math.min(Math.max(a2, 0), 100)) : e2;
    var a2;
    return { "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": i2, style: { "--ui-lib-progressbar-value": i2 } };
  }
  const l = JSON.parse('{"xsmall":"xsmall-2vJYgf6G","small":"small-75N_goCf","medium":"medium-YBupIiX5","large":"large-tSdjHsO2","progressbar":"progressbar-3EYgYkTs","circle":"circle-Rj2ri0DJ","background":"background-2a3NzJ2H","foreground":"foreground-3svpcUbB","spinner":"spinner-2XuPmZC_","spin":"spin-15kwLs33","neutral":"neutral-2Qe4Jzi8","accent":"accent-2SSYGG5b","success":"success-Bc4QcaqP","warning":"warning-2GRfsHby","danger":"danger-393lCrUq"}');
  var s = a(72539), d = a.n(s), u = a(48560), c = a.n(u), f = a(57148), p = a.n(f), v = a(60251), g = a.n(v), m = a(81263), h = a.n(m), b = a(50892), k = a.n(b), w = a(86396), x = {};
  function z(e2) {
    const { size: i2, ariaLabel: a2, ariaLabelledby: t2, id: s2, intent: d2, value: u2 } = e2, c2 = void 0 === u2;
    return r.createElement("div", { className: o()(l[i2], l.progressbar), role: "progressbar", "aria-label": a2, "aria-labelledby": t2, id: s2, ...n(u2) }, r.createElement("svg", { className: o()(l.circle, l[d2], c2 && l.spinner) }, r.createElement("circle", { className: l.background }), r.createElement("circle", { className: l.foreground })));
  }
  x.styleTagTransform = k(), x.setAttributes = g(), x.insert = p().bind(null, "head"), x.domAPI = c(), x.insertStyleElement = h(), d()(w.A, x), w.A && w.A.locals && w.A.locals;
}, 86396(e, i, a) {
  a.d(i, { A: () => l });
  var r = a(30050), t = a.n(r), o = a(77259), n = a.n(o)()(t());
  n.push([e.id, '.xsmall-2vJYgf6G:dir(ltr){--ui-lib-size:2}.small-75N_goCf:dir(ltr){--ui-lib-size:3}.medium-YBupIiX5:dir(ltr){--ui-lib-size:4}.large-tSdjHsO2:dir(ltr){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(ltr){display:block;height:var(--width);overflow:visible;transform:rotate(-90deg);width:var(--width)}.background-2a3NzJ2H:dir(ltr),.foreground-3svpcUbB:dir(ltr){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(ltr){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(ltr){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(ltr){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(ltr){animation:spin-15kwLs33 1s linear infinite}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(ltr){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-danger)}.xsmall-2vJYgf6G:dir(rtl){--ui-lib-size:2}.small-75N_goCf:dir(rtl){--ui-lib-size:3}.medium-YBupIiX5:dir(rtl){--ui-lib-size:4}.large-tSdjHsO2:dir(rtl){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(rtl){display:block;height:var(--width);overflow:visible;transform:rotate(90deg);width:var(--width)}.background-2a3NzJ2H:dir(rtl),.foreground-3svpcUbB:dir(rtl){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(rtl){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(rtl){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(rtl){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(rtl){animation:spin-15kwLs33 1s linear infinite}@keyframes spin-15kwLs33{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(rtl){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-danger)}', ""]);
  const l = n;
}, 48927(e, i, a) {
  a.d(i, { NA: () => r.NA, Ts: () => o.T, ZQ: () => t.Z });
  var r = a(31544), t = a(26637), o = (a(11314), a(73042), a(23100));
  a(67602), a(86049);
}, 14381(e, i, a) {
  a.d(i, { A: () => y });
  var r = a(39551), t = a(42363), o = [], n = o.forEach, l = o.slice, s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, d = { name: "cookie", lookup: function(e2) {
    var i2;
    if (e2.lookupCookie && "undefined" != typeof document) {
      var a2 = (function(e3) {
        for (var i3 = "".concat(e3, "="), a3 = document.cookie.split(";"), r2 = 0; r2 < a3.length; r2++) {
          for (var t2 = a3[r2]; " " === t2.charAt(0); ) t2 = t2.substring(1, t2.length);
          if (0 === t2.indexOf(i3)) return t2.substring(i3.length, t2.length);
        }
        return null;
      })(e2.lookupCookie);
      a2 && (i2 = a2);
    }
    return i2;
  }, cacheUserLanguage: function(e2, i2) {
    i2.lookupCookie && "undefined" != typeof document && (function(e3, i3, a2, r2) {
      var t2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
      a2 && (t2.expires = /* @__PURE__ */ new Date(), t2.expires.setTime(t2.expires.getTime() + 60 * a2 * 1e3)), r2 && (t2.domain = r2), document.cookie = (function(e4, i4, a3) {
        var r3 = a3 || {};
        r3.path = r3.path || "/";
        var t3 = encodeURIComponent(i4), o2 = "".concat(e4, "=").concat(t3);
        if (r3.maxAge > 0) {
          var n2 = r3.maxAge - 0;
          if (Number.isNaN(n2)) throw new Error("maxAge should be a Number");
          o2 += "; Max-Age=".concat(Math.floor(n2));
        }
        if (r3.domain) {
          if (!s.test(r3.domain)) throw new TypeError("option domain is invalid");
          o2 += "; Domain=".concat(r3.domain);
        }
        if (r3.path) {
          if (!s.test(r3.path)) throw new TypeError("option path is invalid");
          o2 += "; Path=".concat(r3.path);
        }
        if (r3.expires) {
          if ("function" != typeof r3.expires.toUTCString) throw new TypeError("option expires is invalid");
          o2 += "; Expires=".concat(r3.expires.toUTCString());
        }
        if (r3.httpOnly && (o2 += "; HttpOnly"), r3.secure && (o2 += "; Secure"), r3.sameSite) switch ("string" == typeof r3.sameSite ? r3.sameSite.toLowerCase() : r3.sameSite) {
          case true:
            o2 += "; SameSite=Strict";
            break;
          case "lax":
            o2 += "; SameSite=Lax";
            break;
          case "strict":
            o2 += "; SameSite=Strict";
            break;
          case "none":
            o2 += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
        return o2;
      })(e3, encodeURIComponent(i3), t2);
    })(i2.lookupCookie, e2, i2.cookieMinutes, i2.cookieDomain, i2.cookieOptions);
  } }, u = { name: "querystring", lookup: function(e2) {
    var i2;
    if ("undefined" != typeof window) {
      var a2 = window.location.search;
      !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (a2 = window.location.hash.substring(window.location.hash.indexOf("?")));
      for (var r2 = a2.substring(1).split("&"), t2 = 0; t2 < r2.length; t2++) {
        var o2 = r2[t2].indexOf("=");
        o2 > 0 && r2[t2].substring(0, o2) === e2.lookupQuerystring && (i2 = r2[t2].substring(o2 + 1));
      }
    }
    return i2;
  } }, c = null, f = function() {
    if (null !== c) return c;
    try {
      c = "undefined" !== window && null !== window.localStorage;
      var e2 = "i18next.translate.boo";
      window.localStorage.setItem(e2, "foo"), window.localStorage.removeItem(e2);
    } catch (e3) {
      c = false;
    }
    return c;
  }, p = { name: "localStorage", lookup: function(e2) {
    var i2;
    if (e2.lookupLocalStorage && f()) {
      var a2 = window.localStorage.getItem(e2.lookupLocalStorage);
      a2 && (i2 = a2);
    }
    return i2;
  }, cacheUserLanguage: function(e2, i2) {
    i2.lookupLocalStorage && f() && window.localStorage.setItem(i2.lookupLocalStorage, e2);
  } }, v = null, g = function() {
    if (null !== v) return v;
    try {
      v = "undefined" !== window && null !== window.sessionStorage;
      var e2 = "i18next.translate.boo";
      window.sessionStorage.setItem(e2, "foo"), window.sessionStorage.removeItem(e2);
    } catch (e3) {
      v = false;
    }
    return v;
  }, m = { name: "sessionStorage", lookup: function(e2) {
    var i2;
    if (e2.lookupSessionStorage && g()) {
      var a2 = window.sessionStorage.getItem(e2.lookupSessionStorage);
      a2 && (i2 = a2);
    }
    return i2;
  }, cacheUserLanguage: function(e2, i2) {
    i2.lookupSessionStorage && g() && window.sessionStorage.setItem(i2.lookupSessionStorage, e2);
  } }, h = { name: "navigator", lookup: function(e2) {
    var i2 = [];
    if ("undefined" != typeof navigator) {
      if (navigator.languages) for (var a2 = 0; a2 < navigator.languages.length; a2++) i2.push(navigator.languages[a2]);
      navigator.userLanguage && i2.push(navigator.userLanguage), navigator.language && i2.push(navigator.language);
    }
    return i2.length > 0 ? i2 : void 0;
  } }, b = { name: "htmlTag", lookup: function(e2) {
    var i2, a2 = e2.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
    return a2 && "function" == typeof a2.getAttribute && (i2 = a2.getAttribute("lang")), i2;
  } }, k = { name: "path", lookup: function(e2) {
    var i2;
    if ("undefined" != typeof window) {
      var a2 = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (a2 instanceof Array) if ("number" == typeof e2.lookupFromPathIndex) {
        if ("string" != typeof a2[e2.lookupFromPathIndex]) return;
        i2 = a2[e2.lookupFromPathIndex].replace("/", "");
      } else i2 = a2[0].replace("/", "");
    }
    return i2;
  } }, w = { name: "subdomain", lookup: function(e2) {
    var i2 = "number" == typeof e2.lookupFromSubdomainIndex ? e2.lookupFromSubdomainIndex + 1 : 1, a2 = "undefined" != typeof window && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (a2) return a2[i2];
  } }, x = false;
  try {
    document.cookie, x = true;
  } catch (e2) {
  }
  var z = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
  x || z.splice(1, 1);
  var y = (function() {
    return (0, t.A)((function e2(i2) {
      var a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (0, r.A)(this, e2), this.type = "languageDetector", this.detectors = {}, this.init(i2, a2);
    }), [{ key: "init", value: function(e2) {
      var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      this.services = e2 || { languageUtils: {} }, this.options = (function(e3) {
        return n.call(l.call(arguments, 1), (function(i3) {
          if (i3) for (var a3 in i3) void 0 === e3[a3] && (e3[a3] = i3[a3]);
        })), e3;
      })(i2, this.options || {}, { order: z, lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"], convertDetectedLanguage: function(e3) {
        return e3;
      } }), "string" == typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(e3) {
        return e3.replace("-", "_");
      }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = a2, this.addDetector(d), this.addDetector(u), this.addDetector(p), this.addDetector(m), this.addDetector(h), this.addDetector(b), this.addDetector(k), this.addDetector(w);
    } }, { key: "addDetector", value: function(e2) {
      return this.detectors[e2.name] = e2, this;
    } }, { key: "detect", value: function(e2) {
      var i2 = this;
      e2 || (e2 = this.options.order);
      var a2 = [];
      return e2.forEach((function(e3) {
        if (i2.detectors[e3]) {
          var r2 = i2.detectors[e3].lookup(i2.options);
          r2 && "string" == typeof r2 && (r2 = [r2]), r2 && (a2 = a2.concat(r2));
        }
      })), a2 = a2.map((function(e3) {
        return i2.options.convertDetectedLanguage(e3);
      })), this.services.languageUtils.getBestMatchFromCodes ? a2 : a2.length > 0 ? a2[0] : null;
    } }, { key: "cacheUserLanguage", value: function(e2, i2) {
      var a2 = this;
      i2 || (i2 = this.options.caches), i2 && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e2) > -1 || i2.forEach((function(i3) {
        a2.detectors[i3] && a2.detectors[i3].cacheUserLanguage(e2, a2.options);
      })));
    } }]);
  })();
  y.type = "languageDetector";
}, 87030(e, i, a) {
  a.d(i, { r: () => o });
  var r = a(49255), t = a(87561), o = { type: "3rdParty", init: function(e2) {
    (0, r.P)(e2.options.react), (0, t.V)(e2);
  } };
} }]);
