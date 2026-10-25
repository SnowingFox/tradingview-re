"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[3053], { 86766(r, e, i) {
  i.d(e, { C: () => w });
  var a = i(79474), l = i(14487), n = i.n(l);
  const t = JSON.parse('{"zB":"primary-2Ldq7nPy","Rm":"secondary-f1f_qKCZ","V1":"underline-3tSZlBtP"}');
  var o = i(72539), s = i.n(o), d = i(48560), c = i.n(d), u = i(57148), f = i.n(u), v = i(60251), p = i.n(v), m = i(81263), b = i.n(m), g = i(50892), y = i.n(g), h = i(7679), k = {};
  k.styleTagTransform = y(), k.setAttributes = p(), k.insert = f().bind(null, "head"), k.domAPI = c(), k.insertStyleElement = b(), s()(h.A, k), h.A && h.A.locals && h.A.locals;
  const x = { primary: t.zB, secondary: t.Rm, none: void 0 };
  function z(r2, e2) {
    const [i2, ...a2] = e2;
    if (!i2) return [{ text: r2 }];
    const l2 = r2.match(new RegExp(`(.*){${i2.linkStart}}(.+?){${i2.linkEnd}}(.*)`));
    if (!l2) return [{ text: r2 }];
    const [, n2, t2, o2] = l2;
    return [...z(n2, a2), { text: t2, link: i2 }, ...z(o2, a2)];
  }
  function w(r2) {
    const { children: e2, links: i2 } = r2, l2 = z(e2, i2);
    return a.createElement(a.Fragment, null, l2.map((({ text: r3, link: e3 }, i3) => e3 ? a.createElement("a", { className: n()(e3.className, x[e3.variant || "primary"], e3.isUnderlined && t.V1), key: `${e3.href}${i3}`, href: e3.href, target: e3.target, rel: e3.rel, onClick: e3.onClick }, r3) : r3)));
  }
}, 97917(r, e, i) {
  i.d(e, { f: () => z });
  var a = i(79474), l = i(14487), n = i.n(l);
  function t(r2) {
    const e2 = void 0 !== r2 ? (i2 = r2, Math.min(Math.max(i2, 0), 100)) : r2;
    var i2;
    return { "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e2, style: { "--ui-lib-progressbar-value": e2 } };
  }
  const o = JSON.parse('{"xsmall":"xsmall-2vJYgf6G","small":"small-75N_goCf","medium":"medium-YBupIiX5","large":"large-tSdjHsO2","progressbar":"progressbar-3EYgYkTs","circle":"circle-Rj2ri0DJ","background":"background-2a3NzJ2H","foreground":"foreground-3svpcUbB","spinner":"spinner-2XuPmZC_","spin":"spin-15kwLs33","neutral":"neutral-2Qe4Jzi8","accent":"accent-2SSYGG5b","success":"success-Bc4QcaqP","warning":"warning-2GRfsHby","danger":"danger-393lCrUq"}');
  var s = i(72539), d = i.n(s), c = i(48560), u = i.n(c), f = i(57148), v = i.n(f), p = i(60251), m = i.n(p), b = i(81263), g = i.n(b), y = i(50892), h = i.n(y), k = i(86396), x = {};
  function z(r2) {
    const { size: e2, ariaLabel: i2, ariaLabelledby: l2, id: s2, intent: d2, value: c2 } = r2, u2 = void 0 === c2;
    return a.createElement("div", { className: n()(o[e2], o.progressbar), role: "progressbar", "aria-label": i2, "aria-labelledby": l2, id: s2, ...t(c2) }, a.createElement("svg", { className: n()(o.circle, o[d2], u2 && o.spinner) }, a.createElement("circle", { className: o.background }), a.createElement("circle", { className: o.foreground })));
  }
  x.styleTagTransform = h(), x.setAttributes = m(), x.insert = v().bind(null, "head"), x.domAPI = u(), x.insertStyleElement = g(), d()(k.A, x), k.A && k.A.locals && k.A.locals;
}, 17527(r, e, i) {
  function a(r2) {
    return n(r2, t);
  }
  function l(r2) {
    return n(r2, o);
  }
  function n(r2, e2) {
    const i2 = Object.entries(r2).filter(e2), a2 = {};
    for (const [r3, e3] of i2) a2[r3] = e3;
    return a2;
  }
  function t(r2) {
    const [e2, i2] = r2;
    return 0 === e2.indexOf("data-") && "string" == typeof i2;
  }
  function o(r2) {
    return 0 === r2[0].indexOf("aria-");
  }
  i.d(e, { En: () => l, r8: () => a });
}, 7679(r, e, i) {
  i.d(e, { A: () => o });
  var a = i(30050), l = i.n(a), n = i(77259), t = i.n(n)()(l());
  t.push([r.id, ".primary-2Ldq7nPy:dir(ltr){color:var(--color-link-primary-default);fill:var(--color-link-primary-default)}.primary-2Ldq7nPy:visited:dir(ltr){color:var(--color-link-primary-default);fill:var(--color-link-primary-default)}@media (any-hover:hover){.primary-2Ldq7nPy:hover:dir(ltr){color:var(--color-link-primary-hover);fill:var(--color-link-primary-hover)}}.primary-2Ldq7nPy:active:dir(ltr){color:var(--color-link-primary-active);fill:var(--color-link-primary-active)}.primary-2Ldq7nPy:focus:dir(ltr){outline:auto;outline-offset:2px}.primary-2Ldq7nPy:focus-visible:dir(ltr){outline:auto;outline-offset:2px}.primary-2Ldq7nPy:focus:not(:focus-visible):dir(ltr){outline:none}.secondary-f1f_qKCZ:dir(ltr){color:var(--color-link-secondary-default);fill:var(--color-link-secondary-default)}.secondary-f1f_qKCZ:visited:dir(ltr){color:var(--color-link-secondary-default);fill:var(--color-link-secondary-default)}@media (any-hover:hover){.secondary-f1f_qKCZ:hover:dir(ltr){color:var(--color-link-secondary-hover);fill:var(--color-link-secondary-hover)}}.secondary-f1f_qKCZ:active:dir(ltr){color:var(--color-link-secondary-active);fill:var(--color-link-secondary-active)}.secondary-f1f_qKCZ:focus:dir(ltr){outline:auto;outline-offset:2px}.secondary-f1f_qKCZ:focus-visible:dir(ltr){outline:auto;outline-offset:2px}.secondary-f1f_qKCZ:focus:not(:focus-visible):dir(ltr){outline:none}@media (any-hover:hover){.underline-3tSZlBtP:hover:dir(ltr){text-decoration:underline}}.primary-2Ldq7nPy:dir(rtl){color:var(--color-link-primary-default);fill:var(--color-link-primary-default)}.primary-2Ldq7nPy:visited:dir(rtl){color:var(--color-link-primary-default);fill:var(--color-link-primary-default)}@media (any-hover:hover){.primary-2Ldq7nPy:hover:dir(rtl){color:var(--color-link-primary-hover);fill:var(--color-link-primary-hover)}}.primary-2Ldq7nPy:active:dir(rtl){color:var(--color-link-primary-active);fill:var(--color-link-primary-active)}.primary-2Ldq7nPy:focus:dir(rtl){outline:auto;outline-offset:2px}.primary-2Ldq7nPy:focus-visible:dir(rtl){outline:auto;outline-offset:2px}.primary-2Ldq7nPy:focus:not(:focus-visible):dir(rtl){outline:none}.secondary-f1f_qKCZ:dir(rtl){color:var(--color-link-secondary-default);fill:var(--color-link-secondary-default)}.secondary-f1f_qKCZ:visited:dir(rtl){color:var(--color-link-secondary-default);fill:var(--color-link-secondary-default)}@media (any-hover:hover){.secondary-f1f_qKCZ:hover:dir(rtl){color:var(--color-link-secondary-hover);fill:var(--color-link-secondary-hover)}}.secondary-f1f_qKCZ:active:dir(rtl){color:var(--color-link-secondary-active);fill:var(--color-link-secondary-active)}.secondary-f1f_qKCZ:focus:dir(rtl){outline:auto;outline-offset:2px}.secondary-f1f_qKCZ:focus-visible:dir(rtl){outline:auto;outline-offset:2px}.secondary-f1f_qKCZ:focus:not(:focus-visible):dir(rtl){outline:none}@media (any-hover:hover){.underline-3tSZlBtP:hover:dir(rtl){text-decoration:underline}}", ""]);
  const o = t;
}, 86396(r, e, i) {
  i.d(e, { A: () => o });
  var a = i(30050), l = i.n(a), n = i(77259), t = i.n(n)()(l());
  t.push([r.id, '.xsmall-2vJYgf6G:dir(ltr){--ui-lib-size:2}.small-75N_goCf:dir(ltr){--ui-lib-size:3}.medium-YBupIiX5:dir(ltr){--ui-lib-size:4}.large-tSdjHsO2:dir(ltr){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(ltr){display:block;height:var(--width);overflow:visible;transform:rotate(-90deg);width:var(--width)}.background-2a3NzJ2H:dir(ltr),.foreground-3svpcUbB:dir(ltr){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(ltr){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(ltr){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(ltr){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(ltr){animation:spin-15kwLs33 1s linear infinite}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(ltr){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-danger)}.xsmall-2vJYgf6G:dir(rtl){--ui-lib-size:2}.small-75N_goCf:dir(rtl){--ui-lib-size:3}.medium-YBupIiX5:dir(rtl){--ui-lib-size:4}.large-tSdjHsO2:dir(rtl){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(rtl){display:block;height:var(--width);overflow:visible;transform:rotate(90deg);width:var(--width)}.background-2a3NzJ2H:dir(rtl),.foreground-3svpcUbB:dir(rtl){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(rtl){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(rtl){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(rtl){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(rtl){animation:spin-15kwLs33 1s linear infinite}@keyframes spin-15kwLs33{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(rtl){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-danger)}', ""]);
  const o = t;
}, 41615(r, e, i) {
  !(function r2() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r2);
    } catch (r3) {
      console.error(r3);
    }
  })(), r.exports = i(11929);
}, 79474(r, e, i) {
  r.exports = i(22749);
}, 62020(r, e, i) {
  i.d(e, { r9: () => v.r, Bd: () => a.B, CI: () => f }), i(3738), i(13434);
  var a = i(45460), l = i(52531), n = i(41501), t = i(46413), o = i(79474), s = i(99633), d = ["forwardedRef"];
  function c(r2, e2) {
    var i2 = Object.keys(r2);
    if (Object.getOwnPropertySymbols) {
      var a2 = Object.getOwnPropertySymbols(r2);
      e2 && (a2 = a2.filter((function(e3) {
        return Object.getOwnPropertyDescriptor(r2, e3).enumerable;
      }))), i2.push.apply(i2, a2);
    }
    return i2;
  }
  function u(r2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var i2 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? c(Object(i2), true).forEach((function(e3) {
        l(r2, e3, i2[e3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(i2)) : c(Object(i2)).forEach((function(e3) {
        Object.defineProperty(r2, e3, Object.getOwnPropertyDescriptor(i2, e3));
      }));
    }
    return r2;
  }
  function f(r2) {
    var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function(i2) {
      function l2(l3) {
        var s2 = l3.forwardedRef, c2 = t(l3, d), f2 = (0, a.B)(r2, u(u({}, c2), {}, { keyPrefix: e2.keyPrefix })), v2 = n(f2, 3), p = v2[0], m = v2[1], b = v2[2], g = u(u({}, c2), {}, { t: p, i18n: m, tReady: b });
        return e2.withRef && s2 ? g.ref = s2 : !e2.withRef && s2 && (g.forwardedRef = s2), (0, o.createElement)(i2, g);
      }
      return l2.displayName = "withI18nextTranslation(".concat((0, s.Mn)(i2), ")"), l2.WrappedComponent = i2, e2.withRef ? (0, o.forwardRef)((function(r3, e3) {
        return (0, o.createElement)(l2, Object.assign({}, r3, { forwardedRef: e3 }));
      })) : l2;
    };
  }
  i(50115), i(33918), i(89772), i(77895);
  var v = i(87030);
  i(49255), i(38955);
}, 99633(r, e, i) {
  function a() {
    if (console && console.warn) {
      for (var r2, e2 = arguments.length, i2 = new Array(e2), a2 = 0; a2 < e2; a2++) i2[a2] = arguments[a2];
      "string" == typeof i2[0] && (i2[0] = "react-i18next:: ".concat(i2[0])), (r2 = console).warn.apply(r2, i2);
    }
  }
  i.d(e, { GA: () => s, Mn: () => c, NM: () => d, dM: () => o, mc: () => n });
  var l = {};
  function n() {
    for (var r2 = arguments.length, e2 = new Array(r2), i2 = 0; i2 < r2; i2++) e2[i2] = arguments[i2];
    "string" == typeof e2[0] && l[e2[0]] || ("string" == typeof e2[0] && (l[e2[0]] = /* @__PURE__ */ new Date()), a.apply(void 0, e2));
  }
  var t = function(r2, e2) {
    return function() {
      r2.isInitialized ? e2() : r2.on("initialized", (function i2() {
        setTimeout((function() {
          r2.off("initialized", i2);
        }), 0), e2();
      }));
    };
  };
  function o(r2, e2, i2) {
    r2.loadNamespaces(e2, t(r2, i2));
  }
  function s(r2, e2, i2, a2) {
    "string" == typeof i2 && (i2 = [i2]), i2.forEach((function(e3) {
      r2.options.ns.indexOf(e3) < 0 && r2.options.ns.push(e3);
    })), r2.loadLanguages(e2, t(r2, a2));
  }
  function d(r2, e2) {
    var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return e2.languages && e2.languages.length ? void 0 !== e2.options.ignoreJSONStructure ? e2.hasLoadedNamespace(r2, { lng: i2.lng, precheck: function(e3, a2) {
      if (i2.bindI18n && i2.bindI18n.indexOf("languageChanging") > -1 && e3.services.backendConnector.backend && e3.isLanguageChangingTo && !a2(e3.isLanguageChangingTo, r2)) return false;
    } }) : (function(r3, e3) {
      var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a2 = e3.languages[0], l2 = !!e3.options && e3.options.fallbackLng, n2 = e3.languages[e3.languages.length - 1];
      if ("cimode" === a2.toLowerCase()) return true;
      var t2 = function(r4, i4) {
        var a3 = e3.services.backendConnector.state["".concat(r4, "|").concat(i4)];
        return -1 === a3 || 2 === a3;
      };
      return !(i3.bindI18n && i3.bindI18n.indexOf("languageChanging") > -1 && e3.services.backendConnector.backend && e3.isLanguageChangingTo && !t2(e3.isLanguageChangingTo, r3) || !e3.hasResourceBundle(a2, r3) && e3.services.backendConnector.backend && (!e3.options.resources || e3.options.partialBundledLanguages) && (!t2(a2, r3) || l2 && !t2(n2, r3)));
    })(r2, e2, i2) : (n("i18n.languages were undefined or empty", e2.languages), true);
  }
  function c(r2) {
    return r2.displayName || r2.name || ("string" == typeof r2 && r2.length > 0 ? r2 : "Unknown");
  }
} }]);
