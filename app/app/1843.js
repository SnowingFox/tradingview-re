/*! For license information please see 1843.js.LICENSE.txt */
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[1843], { 92920(r, o, e) {
  r.exports = e(70156);
}, 65937(r, o, e) {
  "use strict";
  e.d(o, { s: () => u });
  var n = e(79474), t = e(14487), i = e.n(t), a = e(40236), l = e(86692), c = e(15671);
  e(72103);
  const u = (0, n.forwardRef)(((r2, o2) => {
    const e2 = (0, n.useContext)(a.m8).variant, { title: t2, onClick: u2, colorClassName: d, icon: s, tabIndex: v, variant: p = e2 ?? a.nL, shape: h = "square", dataQaId: b } = r2;
    return n.createElement("button", { ref: o2, title: t2, type: "button", "aria-label": t2, onClick: u2, tabIndex: v, className: i()(c.iconButton, c[p], c[h], d, "apply-common-tooltip"), "data-qa-id": b }, n.createElement(l.t, { icon: s, className: c.icon, "aria-hidden": "true" }));
  }));
}, 40236(r, o, e) {
  "use strict";
  e.d(o, { m8: () => i, nL: () => t });
  var n = e(79474);
  const t = "primary", i = (0, n.createContext)({ variant: void 0 });
}, 99933(r, o, e) {
  "use strict";
  e.d(o, { s_: () => n.s }), e(79474);
  var n = e(65937);
  e(40236);
}, 86692(r, o, e) {
  "use strict";
  e.d(o, { t: () => k });
  var n = e(14487), t = e.n(n), i = e(79474);
  const a = i.forwardRef(((r2, o2) => {
    const { className: e2, ariaLabel: n2, ariaLabelledby: t2, title: a2, icon: l2 = "", ...c2 } = r2, u2 = c2, d2 = !(!n2 && !t2);
    return i.createElement("span", { "aria-label": n2, "aria-labelledby": t2, "aria-hidden": !d2, ref: o2, role: "img", dangerouslySetInnerHTML: { __html: l2 }, className: e2, title: a2, ...u2 });
  })), l = JSON.parse('{"n":"blockIcon-1XU8ae7u"}');
  var c = e(72539), u = e.n(c), d = e(48560), s = e.n(d), v = e(57148), p = e.n(v), h = e(60251), b = e.n(h), y = e(81263), f = e.n(y), g = e(50892), m = e.n(g), L = e(23071), B = {};
  B.styleTagTransform = m(), B.setAttributes = b(), B.insert = p().bind(null, "head"), B.domAPI = s(), B.insertStyleElement = f(), u()(L.A, B), L.A && L.A.locals && L.A.locals;
  const k = i.forwardRef(((r2, o2) => {
    const { className: e2, icon: n2, ariaLabel: c2, ariaLabelledby: u2, title: d2, ...s2 } = r2, v2 = s2;
    return i.createElement(a, { className: t()(e2, l.n), ref: o2, icon: n2, ariaLabel: c2, ariaLabelledby: u2, title: d2, ...v2 });
  }));
}, 99030(r, o, e) {
  "use strict";
  e.d(o, { F: () => n });
  const n = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="currentColor" fill-rule="evenodd" d="m13.354 5.354-.708-.708L9 8.293 5.354 4.646l-.708.708L8.293 9l-3.647 3.646.708.708L9 9.707l3.646 3.647.708-.708L9.707 9z"/></svg>';
}, 762(r, o, e) {
  "use strict";
  e.d(o, { z: () => n });
  const n = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="currentColor" d="M9 3v5h5v1H9v5H8V9H3V8h5V3z"/></svg>';
}, 14487(r, o) {
  var e;
  !(function() {
    "use strict";
    var n = {}.hasOwnProperty;
    function t() {
      for (var r2 = [], o2 = 0; o2 < arguments.length; o2++) {
        var e2 = arguments[o2];
        if (e2) {
          var i = typeof e2;
          if ("string" === i || "number" === i) r2.push(e2);
          else if (Array.isArray(e2) && e2.length) {
            var a = t.apply(null, e2);
            a && r2.push(a);
          } else if ("object" === i) for (var l in e2) n.call(e2, l) && e2[l] && r2.push(l);
        }
      }
      return r2.join(" ");
    }
    r.exports ? (t.default = t, r.exports = t) : void 0 === (e = function() {
      return t;
    }.apply(o, [])) || (r.exports = e);
  })();
}, 21185(r, o, e) {
  "use strict";
  e.d(o, { A: () => l });
  var n = e(30050), t = e.n(n), i = e(77259), a = e.n(i)()(t());
  a.push([r.id, '.iconButton-3Lt7-uhL:dir(ltr){align-items:center;background:none;border:none;display:flex;height:22px;justify-content:center;padding:0;width:22px}.iconButton-3Lt7-uhL:dir(ltr){outline:none;overflow:visible;position:relative}.iconButton-3Lt7-uhL:focus:dir(ltr){outline:none}.iconButton-3Lt7-uhL:focus-visible:dir(ltr){outline:none}.iconButton-3Lt7-uhL:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);left:-4px;pointer-events:none;position:absolute;top:-4px;width:calc(100% + 8px);z-index:1}.iconButton-3Lt7-uhL:focus:dir(ltr):after{display:block}.iconButton-3Lt7-uhL:focus-visible:dir(ltr):after{display:block}.iconButton-3Lt7-uhL:focus:not(:focus-visible):dir(ltr):after{display:none}.square-eAy3Phy4:dir(ltr){border-radius:4px}.square-eAy3Phy4:dir(ltr):after{border-radius:8px}.round-2bHnDffL:dir(ltr){border-radius:11px}.round-2bHnDffL:dir(ltr):after{border-radius:15px}.primary-24H8MBlA:dir(ltr):after{border-color:var(--color-tv-blue-500)}@media (any-hover:hover){.primary-24H8MBlA:hover:dir(ltr){background:var(--ui-lib-iconButton-background-color-hover,var(--color-container-fill-primary-neutral-normal))}}@media (any-hover:hover){.primary-24H8MBlA:hover .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-neutral-bold))}}.primary-24H8MBlA .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-neutral))}.secondary-ZkC07j8g:dir(ltr):after{border-color:var(--color-tv-blue-500)}@media (any-hover:hover){.secondary-ZkC07j8g:hover:dir(ltr){background:var(--ui-lib-iconButton-background-color-hover,var(--color-overlay-accent-1-light))}}@media (any-hover:hover){.secondary-ZkC07j8g:hover .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-neutral-bold))}}.secondary-ZkC07j8g .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-neutral))}.tertiary-2nVi_Sjz:dir(ltr):after{border-color:var(--color-tv-blue-500)}@media (any-hover:hover){.tertiary-2nVi_Sjz:hover:dir(ltr){background:var(--ui-lib-iconButton-background-color-hover,var(--color-overlay-accent-1-light))}}@media (any-hover:hover){.tertiary-2nVi_Sjz:hover .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-neutral-bold))}}.tertiary-2nVi_Sjz .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-neutral))}.primary-special-1Wa3gaPa:dir(ltr):after{border-color:var(--color-focus-outline-color-white)}@media (any-hover:hover){.primary-special-1Wa3gaPa:hover:dir(ltr){background:var(--ui-lib-iconButton-background-color-hover,var(--color-overlay-neutral-1-bold))}}@media (any-hover:hover){.primary-special-1Wa3gaPa:hover .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-inverse))}}.primary-special-1Wa3gaPa .icon-vV9apoqR:dir(ltr){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-inverse))}.iconButton-3Lt7-uhL:dir(rtl){align-items:center;background:none;border:none;display:flex;height:22px;justify-content:center;padding:0;width:22px}.iconButton-3Lt7-uhL:dir(rtl){outline:none;overflow:visible;position:relative}.iconButton-3Lt7-uhL:focus:dir(rtl){outline:none}.iconButton-3Lt7-uhL:focus-visible:dir(rtl){outline:none}.iconButton-3Lt7-uhL:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);pointer-events:none;position:absolute;right:-4px;top:-4px;width:calc(100% + 8px);z-index:1}.iconButton-3Lt7-uhL:focus:dir(rtl):after{display:block}.iconButton-3Lt7-uhL:focus-visible:dir(rtl):after{display:block}.iconButton-3Lt7-uhL:focus:not(:focus-visible):dir(rtl):after{display:none}.square-eAy3Phy4:dir(rtl){border-radius:4px}.square-eAy3Phy4:dir(rtl):after{border-radius:8px}.round-2bHnDffL:dir(rtl){border-radius:11px}.round-2bHnDffL:dir(rtl):after{border-radius:15px}.primary-24H8MBlA:dir(rtl):after{border-color:var(--color-tv-blue-500)}@media (any-hover:hover){.primary-24H8MBlA:hover:dir(rtl){background:var(--ui-lib-iconButton-background-color-hover,var(--color-container-fill-primary-neutral-normal))}}@media (any-hover:hover){.primary-24H8MBlA:hover .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-neutral-bold))}}.primary-24H8MBlA .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-neutral))}.secondary-ZkC07j8g:dir(rtl):after{border-color:var(--color-tv-blue-500)}@media (any-hover:hover){.secondary-ZkC07j8g:hover:dir(rtl){background:var(--ui-lib-iconButton-background-color-hover,var(--color-overlay-accent-1-light))}}@media (any-hover:hover){.secondary-ZkC07j8g:hover .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-neutral-bold))}}.secondary-ZkC07j8g .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-neutral))}.tertiary-2nVi_Sjz:dir(rtl):after{border-color:var(--color-tv-blue-500)}@media (any-hover:hover){.tertiary-2nVi_Sjz:hover:dir(rtl){background:var(--ui-lib-iconButton-background-color-hover,var(--color-overlay-accent-1-light))}}@media (any-hover:hover){.tertiary-2nVi_Sjz:hover .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-neutral-bold))}}.tertiary-2nVi_Sjz .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-neutral))}.primary-special-1Wa3gaPa:dir(rtl):after{border-color:var(--color-focus-outline-color-white)}@media (any-hover:hover){.primary-special-1Wa3gaPa:hover:dir(rtl){background:var(--ui-lib-iconButton-background-color-hover,var(--color-overlay-neutral-1-bold))}}@media (any-hover:hover){.primary-special-1Wa3gaPa:hover .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-hover,var(--color-content-primary-inverse))}}.primary-special-1Wa3gaPa .icon-vV9apoqR:dir(rtl){color:var(--ui-lib-iconButton-icon-color-default,var(--color-content-primary-inverse))}', ""]);
  const l = a;
}, 23071(r, o, e) {
  "use strict";
  e.d(o, { A: () => l });
  var n = e(30050), t = e.n(n), i = e(77259), a = e.n(i)()(t());
  a.push([r.id, ".blockIcon-1XU8ae7u:dir(ltr){display:block}.blockIcon-1XU8ae7u svg:dir(ltr){display:block}.blockIcon-1XU8ae7u:dir(rtl){display:block}.blockIcon-1XU8ae7u svg:dir(rtl){display:block}", ""]);
  const l = a;
}, 41615(r, o, e) {
  "use strict";
  !(function r2() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r2);
    } catch (r3) {
      console.error(r3);
    }
  })(), r.exports = e(11929);
}, 79474(r, o, e) {
  "use strict";
  r.exports = e(22749);
}, 71795(r, o, e) {
  "use strict";
  Object.defineProperty(o, "__esModule", { value: true }), o.partition = void 0;
  var n = e(91197), t = e(6775);
  o.partition = function(r2, o2) {
    return function(e2) {
      return [t.filter(r2, o2)(e2), t.filter(n.not(r2, o2))(e2)];
    };
  };
}, 22320(r, o, e) {
  "use strict";
  var n = this && this.__read || function(r2, o2) {
    var e2 = "function" == typeof Symbol && r2[Symbol.iterator];
    if (!e2) return r2;
    var n2, t2, i2 = e2.call(r2), a2 = [];
    try {
      for (; (void 0 === o2 || o2-- > 0) && !(n2 = i2.next()).done; ) a2.push(n2.value);
    } catch (r3) {
      t2 = { error: r3 };
    } finally {
      try {
        n2 && !n2.done && (e2 = i2.return) && e2.call(i2);
      } finally {
        if (t2) throw t2.error;
      }
    }
    return a2;
  }, t = this && this.__spreadArray || function(r2, o2) {
    for (var e2 = 0, n2 = o2.length, t2 = r2.length; e2 < n2; e2++, t2++) r2[t2] = o2[e2];
    return r2;
  };
  Object.defineProperty(o, "__esModule", { value: true }), o.race = void 0;
  var i = e(45519), a = e(6104);
  o.race = function() {
    for (var r2 = [], o2 = 0; o2 < arguments.length; o2++) r2[o2] = arguments[o2];
    return a.raceWith.apply(void 0, t([], n(i.argsOrArgArray(r2))));
  };
}, 46611(r, o, e) {
  "use strict";
  o.F = o.BL = void 0;
  e(90882), e(98407), e(42375), e(26668), e(95106), e(15995), e(43271), e(24110), e(55497), e(69152), e(69503), e(20791), e(9081), e(76310), e(49991), e(30154), e(21357), e(54883), e(47782), e(44834);
  var n = e(44871);
  Object.defineProperty(o, "BL", { enumerable: true, get: function() {
    return n.debounceTime;
  } });
  e(83682), e(85914), e(20966), e(92889), e(72557);
  var t = e(91633);
  Object.defineProperty(o, "F", { enumerable: true, get: function() {
    return t.distinctUntilChanged;
  } });
  e(64580), e(9248), e(46440), e(19086), e(94471), e(61752), e(78921), e(39029), e(6775), e(87739), e(16570), e(61460), e(86955), e(26703), e(99218), e(93172), e(94213), e(18311), e(13578), e(83088), e(82511), e(26369), e(84174), e(38798), e(94095), e(8066), e(3488), e(74261), e(93013), e(29655), e(71784), e(71074), e(38441), e(71795), e(17368), e(90406), e(43692), e(97794), e(2917), e(22320), e(6104), e(32395), e(83058), e(68190), e(67347), e(25739), e(93329), e(42299), e(4926), e(92232), e(63790), e(33702), e(59045), e(82433), e(38934), e(45714), e(61044), e(78553), e(11157), e(92552), e(5166), e(41263), e(64258), e(67168), e(72422), e(73282), e(14340), e(69833), e(85156), e(19125), e(55872), e(96349), e(60241), e(99946), e(14950), e(76433), e(40895), e(94173), e(30274), e(76680), e(21797), e(88269), e(90010), e(30902), e(98435), e(15250);
}, 72103(r, o, e) {
  "use strict";
  var n = e(72539), t = e.n(n), i = e(48560), a = e.n(i), l = e(57148), c = e.n(l), u = e(60251), d = e.n(u), s = e(81263), v = e.n(s), p = e(50892), h = e.n(p), b = e(21185), y = {};
  y.styleTagTransform = h(), y.setAttributes = d(), y.insert = c().bind(null, "head"), y.domAPI = a(), y.insertStyleElement = v(), t()(b.A, y), b.A && b.A.locals && b.A.locals;
}, 48927(r, o, e) {
  "use strict";
  e.d(o, { NA: () => n.NA, Ts: () => a.T, ZQ: () => i.Z, o5: () => t.o5 });
  var n = e(31544), t = e(11555), i = e(26637), a = (e(11314), e(73042), e(23100));
  e(67602), e(86049);
}, 62020(r, o, e) {
  "use strict";
  e.d(o, { Bd: () => n.B }), e(3738), e(13434);
  var n = e(45460);
  e(52531), e(41501), e(46413), e(79474), e(99633), e(50115), e(33918), e(89772), e(77895), e(87030), e(49255), e(38955);
}, 87030(r, o, e) {
  "use strict";
  e(49255), e(87561);
}, 99633(r, o, e) {
  "use strict";
  function n() {
    if (console && console.warn) {
      for (var r2, o2 = arguments.length, e2 = new Array(o2), n2 = 0; n2 < o2; n2++) e2[n2] = arguments[n2];
      "string" == typeof e2[0] && (e2[0] = "react-i18next:: ".concat(e2[0])), (r2 = console).warn.apply(r2, e2);
    }
  }
  e.d(o, { GA: () => c, NM: () => u, dM: () => l, mc: () => i });
  var t = {};
  function i() {
    for (var r2 = arguments.length, o2 = new Array(r2), e2 = 0; e2 < r2; e2++) o2[e2] = arguments[e2];
    "string" == typeof o2[0] && t[o2[0]] || ("string" == typeof o2[0] && (t[o2[0]] = /* @__PURE__ */ new Date()), n.apply(void 0, o2));
  }
  var a = function(r2, o2) {
    return function() {
      r2.isInitialized ? o2() : r2.on("initialized", (function e2() {
        setTimeout((function() {
          r2.off("initialized", e2);
        }), 0), o2();
      }));
    };
  };
  function l(r2, o2, e2) {
    r2.loadNamespaces(o2, a(r2, e2));
  }
  function c(r2, o2, e2, n2) {
    "string" == typeof e2 && (e2 = [e2]), e2.forEach((function(o3) {
      r2.options.ns.indexOf(o3) < 0 && r2.options.ns.push(o3);
    })), r2.loadLanguages(o2, a(r2, n2));
  }
  function u(r2, o2) {
    var e2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return o2.languages && o2.languages.length ? void 0 !== o2.options.ignoreJSONStructure ? o2.hasLoadedNamespace(r2, { lng: e2.lng, precheck: function(o3, n2) {
      if (e2.bindI18n && e2.bindI18n.indexOf("languageChanging") > -1 && o3.services.backendConnector.backend && o3.isLanguageChangingTo && !n2(o3.isLanguageChangingTo, r2)) return false;
    } }) : (function(r3, o3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = o3.languages[0], t2 = !!o3.options && o3.options.fallbackLng, i2 = o3.languages[o3.languages.length - 1];
      if ("cimode" === n2.toLowerCase()) return true;
      var a2 = function(r4, e4) {
        var n3 = o3.services.backendConnector.state["".concat(r4, "|").concat(e4)];
        return -1 === n3 || 2 === n3;
      };
      return !(e3.bindI18n && e3.bindI18n.indexOf("languageChanging") > -1 && o3.services.backendConnector.backend && o3.isLanguageChangingTo && !a2(o3.isLanguageChangingTo, r3) || !o3.hasResourceBundle(n2, r3) && o3.services.backendConnector.backend && (!o3.options.resources || o3.options.partialBundledLanguages) && (!a2(n2, r3) || t2 && !a2(i2, r3)));
    })(r2, o2, e2) : (i("i18n.languages were undefined or empty", o2.languages), true);
  }
}, 15671(r) {
  "use strict";
  r.exports = JSON.parse('{"iconButton":"iconButton-3Lt7-uhL","square":"square-eAy3Phy4","round":"round-2bHnDffL","primary":"primary-24H8MBlA","icon":"icon-vV9apoqR","secondary":"secondary-ZkC07j8g","tertiary":"tertiary-2nVi_Sjz","primary-special":"primary-special-1Wa3gaPa"}');
} }]);
