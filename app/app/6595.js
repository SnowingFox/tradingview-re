"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[6595], { 65767(e, i, r) {
  r.d(i, { cX: () => o, nr: () => a, un: () => n });
  const t = "undefined" != typeof window && "undefined" != typeof navigator, l = t && "ontouchstart" in window, a = (t && l && window, t && (l || navigator.maxTouchPoints), t && window.chrome && window.chrome.runtime, t && window.navigator.userAgent.toLowerCase().indexOf("firefox"), t && /\sEdge\/\d\d\b/.test(navigator.userAgent), t && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS")), o = t && /mac/i.test(navigator.platform), n = (t && /Win32|Win64/i.test(navigator.platform), t && /Linux/i.test(navigator.platform), t && /Android/i.test(navigator.userAgent), t && /BlackBerry/i.test(navigator.userAgent), t && /iPhone|iPad|iPod/.test(navigator.platform));
  t && /Opera Mini/i.test(navigator.userAgent), t && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform));
}, 70898(e, i, r) {
  r.d(i, { v: () => t.v }), r(79474), r(14487), r(9377);
  var t = r(97301);
}, 48534(e, i, r) {
  r.d(i, { K: () => z });
  var t = r(14487), l = r.n(t), a = r(79474), o = r(70898);
  const n = JSON.parse('{"badge":"badge-2SlTesSR","background":"background-1M-rvSMu","content":"content-lJygnqla","xsmall":"xsmall-1mN8LmSe","small":"small-1NQlo3fP","medium":"medium-3yqiGSKC","large":"large-3wi-ZDit","xlarge":"xlarge-3LhYcIIb","xxlarge":"xxlarge-9OE0Hxdk"}');
  var s = r(72539), d = r.n(s), c = r(48560), u = r.n(c), p = r(57148), v = r.n(p), b = r(60251), h = r.n(b), m = r(81263), g = r.n(m), f = r(50892), x = r.n(f), w = r(11708), y = {};
  function z(e2) {
    const { children: i2, ariaLabel: r2, size: t2 = o.v.Small, href: s2, title: d2, className: c2, ...u2 } = e2, p2 = s2 ? "a" : "span";
    return a.createElement(p2, { className: l()(n.badge, n[t2], d2 && "apply-common-tooltip", c2), title: d2, "aria-label": r2, href: s2, dir: "ltr", lang: "en", target: s2 ? "_blank" : void 0, ...u2 }, a.createElement("span", { className: n.background }), a.createElement("span", { className: n.content }, i2));
  }
  y.styleTagTransform = x(), y.setAttributes = h(), y.insert = v().bind(null, "head"), y.domAPI = u(), y.insertStyleElement = g(), d()(w.A, y), w.A && w.A.locals && w.A.locals;
}, 65937(e, i, r) {
  var t = r(79474), l = r(14487), a = r.n(l), o = r(40236), n = r(86692), s = r(15671);
  r(72103), (0, t.forwardRef)(((e2, i2) => {
    const r2 = (0, t.useContext)(o.m8).variant, { title: l2, onClick: d, colorClassName: c, icon: u, tabIndex: p, variant: v = r2 ?? o.nL, shape: b = "square", dataQaId: h } = e2;
    return t.createElement("button", { ref: i2, title: l2, type: "button", "aria-label": l2, onClick: d, tabIndex: p, className: a()(s.iconButton, s[v], s[b], c, "apply-common-tooltip"), "data-qa-id": h }, t.createElement(n.t, { icon: u, className: s.icon, "aria-hidden": "true" }));
  }));
}, 40236(e, i, r) {
  r.d(i, { VQ: () => o, m8: () => a, nL: () => l });
  var t = r(79474);
  const l = "primary", a = (0, t.createContext)({ variant: void 0 });
  function o(e2) {
    return t.createElement(a.Provider, { value: { variant: e2.variant } }, e2.children);
  }
}, 99933(e, i, r) {
  r.d(i, { VQ: () => t.VQ }), r(79474), r(65937);
  var t = r(40236);
}, 33167(e, i, r) {
  r.d(i, { i: () => k });
  var t = r(79474), l = r(14487), a = r.n(l);
  const o = JSON.parse('{"wrapper":"wrapper-3zAMiNFN","animated":"animated-26-ZioKX","pulsation":"pulsation-2le515jn"}');
  var n = r(72539), s = r.n(n), d = r(48560), c = r.n(d), u = r(57148), p = r.n(u), v = r(60251), b = r.n(v), h = r(81263), m = r.n(h), g = r(50892), f = r.n(g), x = r(76723), w = {};
  w.styleTagTransform = f(), w.setAttributes = b(), w.insert = p().bind(null, "head"), w.domAPI = c(), w.insertStyleElement = m(), s()(x.A, w), x.A && x.A.locals && x.A.locals;
  const y = o, z = JSON.parse('{"logo":"logo-YPDlZUG3","hidden":"hidden-3jZ99k67","xxceptionallysmalldonotusebrv1023":"xxceptionallysmalldonotusebrv1023-2scjn4O_","xxxsmall":"xxxsmall-1qVc9c_1","xxsmall":"xxsmall-3n8xzbYz","xsmall":"xsmall-EWH-kEzj","small":"small-hxlwdAJS","medium":"medium-1K1Q0a_r","large":"large-2q-YHGhw","xlarge":"xlarge-3lrTzNHP","xxlarge":"xxlarge-3ee_r5Pw","xxxlarge":"xxxlarge-2Z971szk","skeleton":"skeleton-23DpHV9z","letter":"letter-1wQsj4tl"}');
  var A = r(34871), S = {};
  function k(e2) {
    const i2 = (function(e3) {
      return "logoUrl" in e3 && null !== e3.logoUrl && void 0 !== e3.logoUrl && 0 !== e3.logoUrl.length;
    })(e2), [r2, l2] = (0, t.useState)(0), o2 = (0, t.useRef)(null), n2 = (function(e3, i3 = 2, r3) {
      return a()(z.logo, z[e3], r3, 0 === i3 || 1 === i3 ? a()(y.wrapper, z.skeleton) : z.letter, 1 === i3 && y.animated);
    })(e2.size, r2, e2.className), s2 = e2.alt ?? e2.title ?? "", d2 = i2 ? s2[0] : e2.placeholderLetter;
    return (0, t.useEffect)((() => l2(o2.current?.complete ?? !i2 ? 2 : 1)), [i2]), i2 && 3 !== r2 ? t.createElement("img", { ref: o2, className: n2, crossOrigin: "", src: e2.logoUrl, alt: s2, title: e2.title, loading: e2.loading, onLoad: () => l2(2), onError: () => l2(3), "aria-label": e2["aria-label"], "aria-hidden": e2["aria-hidden"] }) : t.createElement("span", { className: n2, title: e2.title, "aria-label": e2["aria-label"], "aria-hidden": e2["aria-hidden"] }, d2);
  }
  S.styleTagTransform = f(), S.setAttributes = b(), S.insert = p().bind(null, "head"), S.domAPI = c(), S.insertStyleElement = m(), s()(A.A, S), A.A && A.A.locals && A.A.locals, z.hidden;
}, 59804(e, i, r) {
  r.d(i, { a: () => a });
  var t = r(79474), l = r(68177);
  function a(e2) {
    return (0, t.useCallback)((0, l.g)(e2), e2);
  }
}, 2129(e, i, r) {
  r.d(i, { I: () => I });
  var t = r(79474), l = r(14487), a = r.n(l), o = r(17527), n = r(1832);
  const s = JSON.parse('{"default":"default-32h2ropA","danger":"danger-yEgH9vxI","warning":"warning-2qQIl4YE","success":"success-F3y0qQez","neutral":"neutral-1sJodS_5","neutral-light":"neutral-light-xvIEYRmn","small":"small-3BlI-DTU","medium":"medium-2GQRJR9y","large":"large-3_kpQKDc","iconWrapper":"iconWrapper-2pHGfpa1","icon":"icon-4b_jmruT"}');
  var d = r(72539), c = r.n(d), u = r(48560), p = r.n(u), v = r(57148), b = r.n(v), h = r(60251), m = r.n(h), g = r(81263), f = r.n(g), x = r(50892), w = r.n(x), y = r(42543), z = {};
  z.styleTagTransform = w(), z.setAttributes = m(), z.insert = b().bind(null, "head"), z.domAPI = p(), z.insertStyleElement = f(), c()(y.A, z), y.A && y.A.locals && y.A.locals;
  const A = "small", S = { info: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm1-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.5 9.5H7V8h3v6H8.5V9.5Z" fill="currentColor"/></svg>', question: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm-1-4a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm2.83-3.52c-.49.43-.97.85-1.06 1.52H8.26c.08-1.18.74-1.69 1.32-2.13.49-.38.92-.71.92-1.37C10.5 6.67 9.82 6 9 6s-1.5.67-1.5 1.5V8H6v-.5a3 3 0 1 1 6 0c0 .96-.6 1.48-1.17 1.98Z" fill="currentColor"/></svg>', check: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm4-9.97L11.9 6 8.3 9.82 6.1 7.46 4.99 8.5 8.32 12 13 7.03Z" fill="currentColor"/></svg>', exclamation: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor"/></svg>' }, k = t.forwardRef(((e2, i2) => t.createElement("span", { ...e2, ref: i2, className: a()(e2.className, s["no-active-state"]) }))), I = t.forwardRef(((e2, i2) => {
    const { icon: r2 = "exclamation", intent: l2 = "default", ariaLabel: d2, tooltip: c2, className: u2, renderComponent: p2 = k, tabIndex: v2 = 0, size: b2 = A, onFocus: h2, onBlur: m2, onClick: g2, ...f2 } = e2, x2 = S[r2] ?? r2;
    return t.createElement(p2, { className: a()(u2, s.iconWrapper, s[l2], s[b2]), title: c2, ref: i2, tabIndex: v2, onFocus: h2, onBlur: m2, onClick: g2, ...(0, o.r8)(f2) }, t.createElement(n.I, { "aria-hidden": !d2, "aria-label": d2, icon: x2, className: s.icon }));
  }));
}, 1832(e, i, r) {
  r.d(i, { I: () => t.I });
  var t = r(60759);
}, 27892(e, i, r) {
  r.d(i, { m: () => t });
  const t = '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M5 9h9v1H5V9Z" fill="currentColor"/></svg>';
}, 5438(e, i, r) {
  r.d(i, { y: () => t });
  const t = '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 4.5h-1v4h-4v1h4v4h1v-4h4v-1h-4v-4Z" fill="currentColor"/></svg>';
}, 92014(e, i, r) {
  r.d(i, { W: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M7 18.5A2.5 2.5 0 0 0 9.5 21H12v1H9.5A3.5 3.5 0 0 1 6 18.5V16h1zm15 0a3.5 3.5 0 0 1-3.5 3.5H16v-1h2.5a2.5 2.5 0 0 0 2.5-2.5V16h1zM12 7H9.5A2.5 2.5 0 0 0 7 9.5V12H6V9.5A3.5 3.5 0 0 1 9.5 6H12zm6.5-1A3.5 3.5 0 0 1 22 9.5V12h-1V9.5A2.5 2.5 0 0 0 18.5 7H16V6z"/></svg>';
}, 7413(e, i, r) {
  r.d(i, { b: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="currentColor" d="m13.898 6.404-6.066 6.238-3.73-3.836L5.177 7.76l2.655 2.73 4.99-5.132z"/></svg>';
}, 64149(e, i, r) {
  r.d(i, { Y: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3m-1.033 12.305-3.655-3.177L8 13.638l5.018 4.36 6.978-6.538L18.63 10z"/></svg>';
}, 56007(e, i, r) {
  r.d(i, { f: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3m0 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-11c-1.047 0-1.843.94-1.67 1.973l1.088 6.534a.59.59 0 0 0 1.164 0l1.089-6.534A1.694 1.694 0 0 0 14 7"/></svg>';
}, 65758(e, i, r) {
  r.d(i, { H: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" fill-rule="evenodd" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11A1.5 1.5 0 0 1 8.5 7h3V6zm7 1h4.793l-7.48 7.48.707.707L21 7.707V12.5h1V6h-6.5z"/></svg>';
}, 50265(e, i, r) {
  r.d(i, { h: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" fill-rule="evenodd" d="m8.707 7 2.647 2.646-.708.708L6.793 6.5l3.853-3.854.708.708L8.707 6H14a9 9 0 1 1-9 9h1a8 8 0 1 0 8-8z"/></svg>';
}, 52671(e, i, r) {
  r.d(i, { P: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M16 5v1H8.5A3.5 3.5 0 0 0 5 9.5v10A3.5 3.5 0 0 0 8.5 23H16v1H8.5A4.5 4.5 0 0 1 4 19.5v-10A4.5 4.5 0 0 1 8.5 5zm8.997 9.5-4.207 4.207-.707-.707 3-3H13v-1h10.083l-3-3 .707-.707z"/></svg>';
}, 16079(e, i, r) {
  r.d(i, { H: () => t });
  const t = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="m9.75 16.072-.52.856-3.179-1.932a8.002 8.002 0 0 0 14.805 3.112l.864.503A9 9 0 0 1 13.99 23a9 9 0 0 1-8.887-7.57L3.42 18.257l-.859-.512 2.642-4.433zM14 5a9 9 0 0 1 8.887 7.57l1.684-2.826.858.512-2.641 4.434-4.547-2.762.518-.856 3.18 1.932A8.003 8.003 0 0 0 7.134 9.892l-.864-.503A9 9 0 0 1 14 5"/></svg>';
}, 32371(e, i, r) {
  r.d(i, { g9: () => t, l8: () => a, zO: () => l });
  const t = "data-nested-popover-open", l = "data-is-popover-item-button", a = "data-is-popover-context-action";
}, 91565(e, i, r) {
  r.d(i, { W0: () => l, W5: () => a });
  var t = r(90598);
  const l = "not all", a = t.Hg;
}, 29470(e, i, r) {
  r.d(i, { u: () => q });
  var t = r(32371), l = r(9269), a = (r(79474), r(14487), r(82403), r(72539)), o = r.n(a), n = r(48560), s = r.n(n), d = r(57148), c = r.n(d), u = r(60251), p = r.n(u), v = r(81263), b = r.n(v), h = r(50892), m = r.n(h), g = r(93600), f = {};
  f.styleTagTransform = m(), f.setAttributes = p(), f.insert = c().bind(null, "head"), f.domAPI = s(), f.insertStyleElement = b(), o()(g.A, f), g.A && g.A.locals && g.A.locals, t.l8;
  const x = ["a", "button", "input", '[aria-role="button"]'];
  x.join(",");
  var w = r(92321), y = r(2463), z = r(78155), A = r(37194), S = r(237);
  const k = `[${t.l8}]`, I = x.map(((e2) => `${k} ${e2}`)).join(","), q = () => {
    const { isRtl: e2 } = (0, l.C)();
    return (function(e3, i2 = {}) {
      const { focusNext: r2, focusPrev: t2, focusFirst: l2, focusLast: a2 } = (0, w.j)(e3, i2.allowNestedFocusable), o2 = { ...i2.horizontal ? { 39: r2, 37: t2 } : { 40: r2, 38: t2 }, ...i2.handleHomeEnd ? { 36: l2, 35: a2 } : {} };
      return { onFocus: function(r3) {
        const t3 = r3.currentTarget;
        r3.target === t3 && (function(r4) {
          const t4 = (0, z.kD)(r4, e3).nextNode();
          t4 && (0, A.$I)(t4) && t4 !== r4 && t4.focus(i2.focusOptions);
        })(t3);
      }, onKeyDown: function(e4) {
        const r3 = (0, S.p)((0, y.tb)(e4), i2.isRtl), t3 = e4.currentTarget, l3 = e4.target;
        if (!(l3 instanceof Node)) return;
        if (!t3.contains(l3)) return;
        const a3 = o2[r3];
        if (a3) {
          e4.preventDefault();
          const r4 = a3?.(t3, i2.focusOptions);
          r4 && e4.stopPropagation();
        }
      } };
    })(I + `,[${t.zO}]`, { horizontal: true, isRtl: e2, allowNestedFocusable: true });
  };
}, 82403(e, i, r) {
  r.d(i, { K: () => a });
  var t = r(79474);
  const l = (0, t.createContext)({ setIds: () => {
  }, hideContextActionsIfNoHover: false, focusedContextActionsCounter: 0, setFocusedContextActionsCounter: () => {
  } });
  function a(e2, i2, r2) {
    const [a2, o] = (0, t.useState)(0), n = (0, t.useMemo)((() => ({ focusedContextActionsCounter: a2, setFocusedContextActionsCounter: o, setIds: i2, hideContextActionsIfNoHover: !!r2 })), [a2, o, i2, r2]);
    return (0, t.useMemo)((() => e2 ? t.createElement(l.Provider, { value: n }, e2) : void 0), [e2, n]);
  }
}, 19063(e, i, r) {
  r.d(i, { o: () => z });
  var t = r(79474), l = r(14487), a = r.n(l), o = r(32371);
  const n = JSON.parse('{"U":"customPopoverItem-3SKlqFA7","v":"clickable-3SYpB4iF"}');
  var s = r(72539), d = r.n(s), c = r(48560), u = r.n(c), p = r(57148), v = r.n(p), b = r(60251), h = r.n(b), m = r(81263), g = r.n(m), f = r(50892), x = r.n(f), w = r(44421), y = {};
  y.styleTagTransform = x(), y.setAttributes = h(), y.insert = v().bind(null, "head"), y.domAPI = u(), y.insertStyleElement = g(), d()(w.A, y), w.A && w.A.locals && w.A.locals;
  const z = (0, t.forwardRef)(((e2, i2) => {
    const { id: r2, children: l2, onClick: s2, disabled: d2, focusable: c2, role: u2, ariaLabel: p2, ...v2 } = e2, b2 = v2, h2 = s2 ? "button" : "div", m2 = c2 || s2, g2 = d2 ? void 0 : s2;
    return t.createElement(h2, { id: r2, className: a()(n.U, g2 && n.v), onClick: g2, "aria-disabled": d2, "aria-label": p2, role: u2, tabIndex: m2 ? 0 : void 0, ref: i2, ...b2, [o.zO]: !!m2 || void 0 }, t.createElement("div", { inert: d2 ? "true" : void 0 }, l2));
  }));
}, 37456(e, i, r) {
  r.d(i, { tv: () => Y });
  var t = r(79474), l = r(55535), a = r(66577), o = r(14487), n = r.n(o), s = r(86692);
  r(31883);
  const d = JSON.parse('{"iE":"wrapper-D3uCbCan","ji":"dirMatching-1tWhyVCm"}');
  var c = r(72539), u = r.n(c), p = r(48560), v = r.n(p), b = r(57148), h = r.n(b), m = r(60251), g = r.n(m), f = r(81263), x = r.n(f), w = r(50892), y = r.n(w), z = r(93332), A = {};
  function S(e2) {
    const { icon: i2, dirMatching: r2 } = e2;
    return t.createElement("div", { className: n()(d.iE, r2 && d.ji) }, t.createElement(s.t, { icon: i2 }));
  }
  A.styleTagTransform = y(), A.setAttributes = g(), A.insert = h().bind(null, "head"), A.domAPI = v(), A.insertStyleElement = x(), u()(z.A, A), z.A && z.A.locals && z.A.locals;
  var k = r(53513);
  function I(e2) {
    const { title: i2, onClick: r2, popoverItemButtonRef: l2, ...a2 } = e2, o2 = a2;
    return t.createElement(k.R, { title: i2, onClick: r2, leftSlot: t.createElement(S, { icon: '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="m16.47 7.47 1.06 1.06L12.06 14l5.47 5.47-1.06 1.06L9.94 14l6.53-6.53Z" fill="currentColor"/></svg>', dirMatching: true }), popoverItemButtonRef: l2, ...o2 });
  }
  var q = r(32371), C = r(2463), E = r(28630), T = r(72395), H = r(47148), R = r(9269), P = r(92321), N = r(237), O = r(37755), L = r(26764), F = r(34045), M = r(51421);
  const W = (0, L.N)("mousemove"), B = JSON.parse('{"p":"right-LgWKrxYE","U":"arrow-3n3q_mNu"}');
  var K = r(38561), _ = {};
  _.styleTagTransform = y(), _.setAttributes = g(), _.insert = h().bind(null, "head"), _.domAPI = v(), _.insertStyleElement = x(), u()(K.A, _), K.A && K.A.locals && K.A.locals;
  const j = "hover", Z = 300;
  function Y(e2) {
    const i2 = (0, t.useId)(), r2 = (0, t.useRef)(null), o2 = (0, t.useRef)(null), n2 = (0, t.useId)(), { children: d2, popoverItemRef: c2 = r2, popoverItemButtonId: u2 = n2, popoverItemButtonRef: p2 = o2, nestedPopoverRole: v2, role: b2, ariaLabel: h2, leftSlot: m2, openOn: g2 = j, closeOnHoverAwayDelayMs: f2 = Z, closeOnScrollOutside: x2, closeOnResizeWindow: w2, disabled: y2, title: z2, idOfContentWrapperElement: A2 = i2, selected: S2, description: k2, rightSlot: H2, fixedHeader: L2, fixedFooter: K2, ..._2 } = e2, Y2 = (0, E.z)(p2), V = (0, E.z)(c2), { focusFirst: Q } = (0, t.useMemo)((() => (0, P.j)(`[${q.zO}]`)), []), U = _2, { isRtl: J, closePopover: X, isMobilePositioner: $ } = (0, R.C)(), ee = $ ? "click" : g2, ie = (0, N.p)(37, J), re = (0, N.p)(39, J), { isOpen: te, onOpen: le, onClose: ae } = (function(e3, i3) {
      const [r3, l2] = (0, t.useState)(false);
      return { isOpen: r3, onOpen: () => l2(true), onClose: (0, t.useCallback)(((r4, t2 = "currentLevel") => {
        l2(false), "allLevels" === t2 ? i3(r4, t2) : r4 && e3.current?.focus();
      }), [e3, i3]) };
    })(Y2, X), oe = (0, t.useRef)(null), ne = (0, t.useCallback)((() => {
      if (te) ae(true);
      else {
        le();
        const e3 = oe.current;
        e3 && Q(e3);
      }
    }), [te, ae, le, Q]), se = (0, t.useCallback)(((e3) => {
      (0, C.tb)(e3) !== re || ne();
    }), [re, ne]);
    !(function(e3, i3, r3 = 0, t2, l2) {
      (0, M.p)(e3, (() => {
        let e4 = false, a2 = -1;
        return W(((o3) => {
          const n3 = { x: o3.clientX, y: o3.clientY }, s2 = t2.current, d3 = (0, F.b)(n3, l2) || s2 && (0, O.Sd)(s2, n3.x, n3.y) || false;
          d3 !== e4 && (clearTimeout(a2), e4 = d3, a2 = setTimeout((() => {
            e4 || i3(false, "currentLevel");
          }), r3));
        }));
      }), [t2, r3, l2, i3]);
    })("hover" === ee && void 0 !== f2, ae, f2, oe, V);
    const de = "hover" === ee && void 0 !== f2 ? le : void 0;
    return t.createElement(t.Fragment, null, t.createElement(l.f, { leftSlot: m2, title: z2, description: k2, role: b2, popoverItemRef: V, popoverItemButtonRef: Y2, onClick: (e3) => {
      "button" in e3 && "click" !== ee || ne();
    }, onKeyDownPopoverItemButton: se, rightSlot: t.createElement("div", { className: B.p }, H2, t.createElement(s.t, { icon: '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.84 9 6.62 5.33l.76-.66L11.16 9l-3.78 4.33-.76-.66L9.84 9Z" fill="currentColor"/></svg>', className: B.U })), isOpen: te, ariaHaspopup: v2, ariaExpanded: te, ariaControls: A2, popoverItemButtonId: u2, selected: S2, disabled: y2, onMouseEnter: de, ...U }), t.createElement(a.o, { idOfContentWrapperElement: A2, role: v2, anchored: { type: "element", at: V }, isOpen: te, onClose: ae, placementRules: D.placementRules, ifNonePlacementRuleMatched: D.ifNonePlacementRuleMatched, width: G, height: T.c2, isRtl: J, refToContentWrapperElement: oe, ariaLabelledby: u2, fixedHeader: L2, fixedFooter: K2, closeOnScrollOutside: x2, closeOnResizeWindow: w2 }, $ && t.createElement(I, { title: z2, onClick: () => ae(true, "currentLevel") }), t.createElement("div", { onKeyDown: (e3) => {
      const i3 = e3.currentTarget, r3 = document.activeElement, t2 = (0, C.tb)(e3), l2 = r3 && i3.contains(r3) && "true" !== r3.getAttribute(q.g9);
      if (t2 === ie && l2) return ae(true, "currentLevel"), void e3.stopPropagation();
    } }, d2)));
  }
  const G = [{ by: "content" }], D = { placementRules: [{ ...H.Zb, offset: { x: 0, y: -6 } }, { ...H.Wf, offset: { x: 0, y: -6 } }, { ...H.dL, offset: { x: 0, y: 6 } }, { ...H.IR, offset: { x: 0, y: 6 } }], ifNonePlacementRuleMatched: T.ph };
}, 31883(e, i, r) {
  r.d(i, { Q: () => t });
  const t = (0, r(79474).createContext)(false);
}, 6656(e, i, r) {
  r.d(i, { c: () => z });
  var t = r(79474), l = r(14487), a = r.n(l), o = r(53513);
  const n = {};
  var s = r(72539), d = r.n(s), c = r(48560), u = r.n(c), p = r(57148), v = r.n(p), b = r(60251), h = r.n(b), m = r(81263), g = r.n(m), f = r(50892), x = r.n(f), w = r(87721), y = {};
  function z(e2) {
    const { id: i2, title: r2, children: l2, itemRole: s2, wrappable: d2, defaultWrapped: c2, onWrappedChanged: u2, ariaLabel: p2, rightSlot: v2, rightSlotAriaLabelledby: b2, ...h2 } = e2, m2 = h2, [g2, f2] = (0, t.useState)(c2 ?? false), x2 = (0, t.useId)(), w2 = (0, t.useId)();
    return t.createElement(t.Fragment, null, t.createElement(o.R, { ...m2, "data-qa-id": "ui-lib-sectionPopoverItem", id: i2, title: r2, role: s2, rightSlot: v2, rightSlotAriaLabelledby: b2, ariaLabel: p2, variant: "secondary", ariaControls: d2 ? w2 : void 0, titleId: x2, wrappable: d2, wrapped: g2, onClick: d2 ? function() {
      f2(((e3) => {
        const i3 = !e3;
        return u2?.(i3), i3;
      }));
    } : void 0 }), t.createElement("div", { role: "group", "aria-labelledby": x2, id: w2, className: a()(g2 && n.wrapped) }, !g2 && l2));
  }
  y.styleTagTransform = x(), y.setAttributes = h(), y.insert = v().bind(null, "head"), y.domAPI = u(), y.insertStyleElement = g(), d()(w.A, y), w.A && w.A.locals && w.A.locals;
}, 53513(e, i, r) {
  r.d(i, { R: () => q });
  var t = r(79474), l = r(14487), a = r.n(l), o = r(29470), n = r(82403), s = r(19063);
  function d(e2) {
    const { id: i2, ariaLabelledby: r2, ariaOwns: l2 } = e2;
    return t.createElement("div", { id: i2, role: "menu", "aria-labelledby": r2, "aria-orientation": "horizontal", "aria-owns": l2.join(" "), "aria-hidden": 0 === l2.length });
  }
  function c(e2) {
    const { id: i2, role: r2, onClick: l2, rightSlot: a2, rightSlotAriaLabelledby: c2, focusable: u2, ariaExpanded: p2, ariaControls: v2, ariaHaspopup: b2, ariaLabel: h2, children: m2, className: g2, popoverItemButtonRef: f2, ...x2 } = e2, w2 = x2, { onKeyDown: y2 } = (0, o.u)(), [z2, A2] = (0, t.useState)([]), S2 = (0, n.K)(a2, A2), k2 = (0, t.useId)();
    return t.createElement("div", { onKeyDown: y2 }, t.createElement(s.o, { id: i2, role: r2, onClick: l2, focusable: u2 || !!a2, ref: f2, "aria-expanded": p2 ?? (!!a2 || void 0), "aria-controls": v2 ?? (a2 ? k2 : void 0), "aria-haspopup": a2 ? "menu" : void 0, "aria-label": h2, ...w2 }, t.createElement("div", { className: g2 }, m2, S2)), t.createElement(d, { id: k2, ariaLabelledby: c2, ariaOwns: z2 }));
  }
  var u = r(1832);
  const p = JSON.parse('{"wrapper":"wrapper-1yAt7Xea","primaryTitleWrapper":"primaryTitleWrapper-31Z9Pvdh","secondaryTitleWrapper":"secondaryTitleWrapper-3yYx4uku","title":"title-1QPoaBtL","content":"content-1SemDTIp","left":"left-1DMKYr-K","withLeftSlot":"withLeftSlot-2_zkwg0-","space":"space-2Z29kJ6E","icon":"icon-3TsvNAbt"}');
  var v = r(72539), b = r.n(v), h = r(48560), m = r.n(h), g = r(57148), f = r.n(g), x = r(60251), w = r.n(x), y = r(81263), z = r.n(y), A = r(50892), S = r.n(A), k = r(59427), I = {};
  function q(e2) {
    const { id: i2, role: r2, leftSlot: l2, title: o2, onClick: n2, ariaLabel: s2, rightSlot: d2, rightSlotAriaLabelledby: v2, popoverItemButtonRef: b2, variant: h2 = "primary", ariaControls: m2, titleId: g2, wrappable: f2, wrapped: x2, ...w2 } = e2, y2 = w2;
    return t.createElement(c, { ...y2, id: i2, role: r2, onClick: n2, rightSlot: d2, rightSlotAriaLabelledby: v2, ariaLabel: s2, className: a()(p.wrapper, l2 && p.withLeftSlot, p[`${h2}TitleWrapper`]), popoverItemButtonRef: b2, focusable: f2, ariaExpanded: f2 ? !x2 : void 0, ariaControls: m2 }, t.createElement("div", { className: p.content }, l2 && t.createElement("div", { className: p.left }, l2), t.createElement("div", { className: p.title, id: g2 }, o2)), f2 && t.createElement(t.Fragment, null, t.createElement("div", { className: p.space }), t.createElement(u.I, { className: p.icon, icon: x2 ? '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z" fill="currentColor"/></svg>' : '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m4.67 10.62.66.76L9 8.16l3.67 3.22.66-.76L9 6.84l-4.33 3.78Z" fill="currentColor"/></svg>' })));
  }
  I.styleTagTransform = S(), I.setAttributes = w(), I.insert = f().bind(null, "head"), I.domAPI = m(), I.insertStyleElement = z(), b()(k.A, I), k.A && k.A.locals && k.A.locals;
}, 51969(e, i, r) {
  r.d(i, { i: () => y });
  var t = r(79474), l = r(14487), a = r.n(l);
  const o = JSON.parse('{"small":"small-1CjY28kc","medium":"medium-3t-gSaom","large":"large-1BrfHxpw","switchView":"switchView-3smidXLC","checked":"checked-2HIdOF9g","disabled":"disabled-3fkvYQFX","track":"track-3vPj978u","thumb":"thumb-3jO-TAed"}');
  var n = r(72539), s = r.n(n), d = r(48560), c = r.n(d), u = r(57148), p = r.n(u), v = r(60251), b = r.n(v), h = r(81263), m = r.n(h), g = r(50892), f = r.n(g), x = r(17599), w = {};
  function y(e2) {
    const { size: i2 = "small", checked: r2, disabled: l2 } = e2;
    return t.createElement("span", { className: a()(o.switchView, o[i2], l2 && o.disabled, r2 && o.checked) }, t.createElement("span", { className: o.track }), t.createElement("span", { className: o.thumb }));
  }
  w.styleTagTransform = f(), w.setAttributes = b(), w.insert = p().bind(null, "head"), w.domAPI = c(), w.insertStyleElement = m(), s()(x.A, w), x.A && x.A.locals && x.A.locals;
}, 21773(e, i, r) {
  r.d(i, { m: () => c });
  var t = r(79474);
  function l(e2) {
    void 0 !== e2.current && (clearTimeout(e2.current), e2.current = void 0);
  }
  var a, o, n = r(68177), s = r(19541), d = r(62353);
  function c({ children: e2, id: i2, trigger: r2 = a.Hover, delay: o2 = [500, 0], content: c2, isRtl: u = false, endSlot: p, placement: v, hasArrow: b = true, closeOnScrollOutside: h, offset: m, disableInteractive: g }) {
    const f = (0, t.useId)(), x = Array.isArray(r2) ? r2 : [r2], [w, y] = Array.isArray(o2) ? o2 : [o2, o2], { visible: z, open: A, close: S, toggle: k } = (function(e3) {
      const { openDelay: i3 = 0, closeDelay: r3 = 0 } = e3, [a2, o3] = (0, t.useState)(false), n2 = (0, t.useRef)(), s2 = (0, t.useCallback)(((e4) => {
        l(n2);
        const t2 = e4 ? i3 : r3;
        t2 > 0 ? n2.current = window.setTimeout((() => {
          o3(e4), n2.current = void 0;
        }), t2) : o3(e4);
      }), [i3, r3]), d2 = (0, t.useCallback)((() => s2(true)), [s2]), c3 = (0, t.useCallback)((() => s2(false)), [s2]), u2 = (0, t.useCallback)((() => s2(!a2)), [a2, s2]), p2 = (0, t.useCallback)((() => {
        l(n2), o3(false);
      }), []);
      return (0, t.useEffect)((() => () => {
        l(n2);
      }), []), { visible: a2, open: d2, close: c3, toggle: u2, closeInstantly: p2 };
    })({ openDelay: w, closeDelay: y }), I = (0, t.useRef)(null), q = t.Children.only(e2), C = x.reduce(((e3, i3) => {
      switch (i3) {
        case a.Click:
          e3.onClick = (0, s.Z)(q.props.onClick, k);
          break;
        case a.Focus:
          e3.onFocus = (0, s.Z)(q.props.onFocus, ((e4) => {
            e4.currentTarget.matches(":focus-visible") && A();
          })), e3.onBlur = (0, s.Z)(q.props.onBlur, ((e4) => {
            e4.currentTarget.matches(":hover") || S();
          }));
          break;
        case a.Hover:
          e3.onMouseEnter = (0, s.Z)(q.props.onMouseEnter, A), e3.onMouseLeave = (0, s.Z)(q.props.onMouseLeave, ((e4) => {
            I.current?.contains(document.activeElement) && e4.currentTarget.matches(":focus-visible") || S();
          }));
      }
      return e3;
    }), {}), E = "string" == typeof q.type ? "ref" : "reference", T = "ref" in q && null != q.ref ? q.ref : q.props[E], H = (0, n.g)([T, I]);
    return t.createElement(t.Fragment, null, (0, t.cloneElement)(q, { ...C, [E]: H, "aria-describedby": i2 }), t.createElement(d.b, { id: i2 || f, placement: v, content: c2, endSlot: p, open: z && !!c2, anchor: I, onClose: S, isRtl: u, hasArrow: b, closeOnScrollOutside: h, offset: m, disableInteractive: g }));
  }
  (o = a || (a = {})).Hover = "hover", o.Click = "click", o.Focus = "focus";
}, 17527(e, i, r) {
  function t(e2) {
    return a(e2, o);
  }
  function l(e2) {
    return a(e2, n);
  }
  function a(e2, i2) {
    const r2 = Object.entries(e2).filter(i2), t2 = {};
    for (const [e3, i3] of r2) t2[e3] = i3;
    return t2;
  }
  function o(e2) {
    const [i2, r2] = e2;
    return 0 === i2.indexOf("data-") && "string" == typeof r2;
  }
  function n(e2) {
    return 0 === e2[0].indexOf("aria-");
  }
  r.d(i, { En: () => l, r8: () => t });
}, 237(e, i, r) {
  function t(e2, i2) {
    if (!i2) return e2;
    const r2 = 255 & e2, t2 = -256 & e2;
    return 37 === r2 ? 39 + t2 : 39 === r2 ? 37 + t2 : e2;
  }
  r.d(i, { p: () => t });
}, 68177(e, i, r) {
  function t(e2) {
    return (i2) => {
      e2.forEach(((e3) => {
        "function" == typeof e3 ? e3(i2) : null != e3 && (e3.current = i2);
      }));
    };
  }
  r.d(i, { g: () => t });
}, 11708(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, '.badge-2SlTesSR:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,4);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--ui-lib-size-defaulted-xlarge:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 6) * (var(--ui-lib-size-defaulted) - 6)));--height:calc(var(--ui-lib-size-defaulted-xsmall)*12px + var(--ui-lib-size-defaulted-small)*16px + var(--ui-lib-size-defaulted-medium)*20px + var(--ui-lib-size-defaulted-large)*24px + var(--ui-lib-size-defaulted-xlarge)*32px);height:var(--height);--ui-lib-badge-border-radius:calc(var(--ui-lib-size-defaulted-xsmall)*3px + var(--ui-lib-size-defaulted-small)*3px + var(--ui-lib-size-defaulted-medium)*4px + var(--ui-lib-size-defaulted-large)*6px + var(--ui-lib-size-defaulted-xlarge)*8px);--ui-lib-badgeSkewed-skewed-background:var(--color-container-fill-secondary-neutral-heavy);align-items:center;background:none;border-radius:var(--ui-lib-badge-border-radius);color:var(--color-content-primary-inverse);display:inline-flex;justify-content:center;text-transform:uppercase;-webkit-user-select:none;user-select:none;--ui-lib-badgeSkewed-angle-rad:0.3178;--pi:3.1416;--angle:calc(var(--pi)/2 - var(--ui-lib-badgeSkewed-angle-rad));--padding:calc(var(--height)/var(--tan));padding-left:calc(var(--ui-lib-size-defaulted-xsmall)*4px + var(--ui-lib-size-defaulted-small)*6px + var(--ui-lib-size-defaulted-medium)*8px + var(--ui-lib-size-defaulted-large)*10px + var(--ui-lib-size-defaulted-xlarge)*12px);padding-right:calc(var(--padding) + var(--ui-lib-badge-border-radius))}@media (any-hover:hover){.badge-2SlTesSR:hover:dir(ltr){--ui-lib-badgeSkewed-skewed-background:var(--color-container-fill-secondary-neutral)}}.badge-2SlTesSR:dir(ltr){outline:none;overflow:visible;position:relative}.badge-2SlTesSR:focus:dir(ltr){outline:none}.badge-2SlTesSR:focus-visible:dir(ltr){outline:none}.badge-2SlTesSR:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);left:-4px;pointer-events:none;position:absolute;top:-4px;width:calc(100% + 8px);z-index:1}.badge-2SlTesSR:focus:dir(ltr):after{display:block}.badge-2SlTesSR:focus-visible:dir(ltr):after{display:block}.badge-2SlTesSR:focus:not(:focus-visible):dir(ltr):after{display:none}.badge-2SlTesSR:dir(ltr):after{border-color:var(--color-focus-outline-color-blue)}.badge-2SlTesSR:dir(ltr):after{border-radius:calc(var(--ui-lib-badge-border-radius, var(--ui-lib-badge-default-border-radius)) + 2px)}@supports (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(ltr){--tan:tan(var(--angle) * 1rad)}}@supports not (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(ltr){--tan:calc(var(--angle) * var(--angle) * var(--angle) * var(--angle) + var(--angle))}}.background-1M-rvSMu:dir(ltr){border-radius:var(--ui-lib-badge-border-radius);height:100%;overflow:hidden;position:absolute;right:0;top:0;width:100%}.background-1M-rvSMu:dir(ltr):after{background:var(--ui-lib-badgeSkewed-skewed-background);border-radius:var(--ui-lib-badge-border-radius);content:" ";height:100%;left:calc(-1*var(--padding));position:absolute;top:0;transform:skew(calc(var(--ui-lib-badgeSkewed-angle-rad)*-1rad),0);width:calc(100% + var(--padding)/2)}.content-lJygnqla:dir(ltr){font-size:calc(var(--ui-lib-size-defaulted-xsmall)*8px + var(--ui-lib-size-defaulted-small)*11px + var(--ui-lib-size-defaulted-medium)*11px + var(--ui-lib-size-defaulted-large)*14px + var(--ui-lib-size-defaulted-xlarge)*17px);font-weight:calc(var(--ui-lib-size-defaulted-xsmall)*700 + var(--ui-lib-size-defaulted-small)*600 + var(--ui-lib-size-defaulted-medium)*600 + var(--ui-lib-size-defaulted-large)*600 + var(--ui-lib-size-defaulted-xlarge)*700);letter-spacing:calc(var(--ui-lib-size-defaulted-xsmall)*.5px + var(--ui-lib-size-defaulted-small)*.02em + var(--ui-lib-size-defaulted-medium)*.05em + var(--ui-lib-size-defaulted-large)*0px + var(--ui-lib-size-defaulted-xlarge)*.02em);position:relative}.xsmall-1mN8LmSe:dir(ltr){--ui-lib-size:2}.small-1NQlo3fP:dir(ltr){--ui-lib-size:3}.medium-3yqiGSKC:dir(ltr){--ui-lib-size:4}.large-3wi-ZDit:dir(ltr){--ui-lib-size:5}.xlarge-3LhYcIIb:dir(ltr){--ui-lib-size:6}.xxlarge-9OE0Hxdk:dir(ltr){--ui-lib-size:7}.badge-2SlTesSR:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,4);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--ui-lib-size-defaulted-xlarge:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 6) * (var(--ui-lib-size-defaulted) - 6)));--height:calc(var(--ui-lib-size-defaulted-xsmall)*12px + var(--ui-lib-size-defaulted-small)*16px + var(--ui-lib-size-defaulted-medium)*20px + var(--ui-lib-size-defaulted-large)*24px + var(--ui-lib-size-defaulted-xlarge)*32px);height:var(--height);--ui-lib-badge-border-radius:calc(var(--ui-lib-size-defaulted-xsmall)*3px + var(--ui-lib-size-defaulted-small)*3px + var(--ui-lib-size-defaulted-medium)*4px + var(--ui-lib-size-defaulted-large)*6px + var(--ui-lib-size-defaulted-xlarge)*8px);--ui-lib-badgeSkewed-skewed-background:var(--color-container-fill-secondary-neutral-heavy);align-items:center;background:none;border-radius:var(--ui-lib-badge-border-radius);color:var(--color-content-primary-inverse);display:inline-flex;justify-content:center;text-transform:uppercase;-webkit-user-select:none;user-select:none;--ui-lib-badgeSkewed-angle-rad:0.3178;--pi:3.1416;--angle:calc(var(--pi)/2 - var(--ui-lib-badgeSkewed-angle-rad));--padding:calc(var(--height)/var(--tan));padding-left:calc(var(--ui-lib-size-defaulted-xsmall)*4px + var(--ui-lib-size-defaulted-small)*6px + var(--ui-lib-size-defaulted-medium)*8px + var(--ui-lib-size-defaulted-large)*10px + var(--ui-lib-size-defaulted-xlarge)*12px);padding-right:calc(var(--padding) + var(--ui-lib-badge-border-radius))}@media (any-hover:hover){.badge-2SlTesSR:hover:dir(rtl){--ui-lib-badgeSkewed-skewed-background:var(--color-container-fill-secondary-neutral)}}.badge-2SlTesSR:dir(rtl){outline:none;overflow:visible;position:relative}.badge-2SlTesSR:focus:dir(rtl){outline:none}.badge-2SlTesSR:focus-visible:dir(rtl){outline:none}.badge-2SlTesSR:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);pointer-events:none;position:absolute;right:-4px;top:-4px;width:calc(100% + 8px);z-index:1}.badge-2SlTesSR:focus:dir(rtl):after{display:block}.badge-2SlTesSR:focus-visible:dir(rtl):after{display:block}.badge-2SlTesSR:focus:not(:focus-visible):dir(rtl):after{display:none}.badge-2SlTesSR:dir(rtl):after{border-color:var(--color-focus-outline-color-blue)}.badge-2SlTesSR:dir(rtl):after{border-radius:calc(var(--ui-lib-badge-border-radius, var(--ui-lib-badge-default-border-radius)) + 2px)}@supports (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(rtl){--tan:tan(var(--angle) * 1rad)}}@supports not (transform:scale(tan(1rad))){.badge-2SlTesSR:dir(rtl){--tan:calc(var(--angle) * var(--angle) * var(--angle) * var(--angle) + var(--angle))}}.background-1M-rvSMu:dir(rtl){border-radius:var(--ui-lib-badge-border-radius);height:100%;overflow:hidden;position:absolute;right:0;top:0;width:100%}.background-1M-rvSMu:dir(rtl):after{background:var(--ui-lib-badgeSkewed-skewed-background);border-radius:var(--ui-lib-badge-border-radius);content:" ";height:100%;left:calc(-1*var(--padding));position:absolute;top:0;transform:skew(calc(var(--ui-lib-badgeSkewed-angle-rad)*-1rad),0);width:calc(100% + var(--padding)/2)}.content-lJygnqla:dir(rtl){font-size:calc(var(--ui-lib-size-defaulted-xsmall)*8px + var(--ui-lib-size-defaulted-small)*11px + var(--ui-lib-size-defaulted-medium)*11px + var(--ui-lib-size-defaulted-large)*14px + var(--ui-lib-size-defaulted-xlarge)*17px);font-weight:calc(var(--ui-lib-size-defaulted-xsmall)*700 + var(--ui-lib-size-defaulted-small)*600 + var(--ui-lib-size-defaulted-medium)*600 + var(--ui-lib-size-defaulted-large)*600 + var(--ui-lib-size-defaulted-xlarge)*700);letter-spacing:calc(var(--ui-lib-size-defaulted-xsmall)*.5px + var(--ui-lib-size-defaulted-small)*.02em + var(--ui-lib-size-defaulted-medium)*.05em + var(--ui-lib-size-defaulted-large)*0px + var(--ui-lib-size-defaulted-xlarge)*.02em);position:relative}.xsmall-1mN8LmSe:dir(rtl){--ui-lib-size:2}.small-1NQlo3fP:dir(rtl){--ui-lib-size:3}.medium-3yqiGSKC:dir(rtl){--ui-lib-size:4}.large-3wi-ZDit:dir(rtl){--ui-lib-size:5}.xlarge-3LhYcIIb:dir(rtl){--ui-lib-size:6}.xxlarge-9OE0Hxdk:dir(rtl){--ui-lib-size:7}', ""]);
  const n = o;
}, 34871(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, "[data-theme=light]:dir(ltr){--_0-0Atw:var(--color-white);--_1-0Atw:var(--color-cold-gray-150)}[data-theme=dark]:dir(ltr){--_0-0Atw:var(--color-cold-gray-600);--_1-0Atw:var(--color-cold-gray-800)}.logo-YPDlZUG3:dir(ltr){align-items:center;border-radius:50%;display:inline-flex;justify-content:center}.logo-YPDlZUG3:not(img):dir(ltr){background-color:var(--_1-0Atw)}.hidden-3jZ99k67:dir(ltr){opacity:0;position:absolute}.xxceptionallysmalldonotusebrv1023-2scjn4O_:dir(ltr){font-size:10px;height:12px;line-height:10px;width:12px}.xxxsmall-1qVc9c_1:dir(ltr){font-size:11px;height:18px;line-height:16px;width:18px}.xxsmall-3n8xzbYz:dir(ltr){font-size:11px;height:20px;line-height:16px;width:20px}.xsmall-EWH-kEzj:dir(ltr){font-size:11px;height:24px;line-height:16px;width:24px}.small-hxlwdAJS:dir(ltr){font-size:14px;height:28px;line-height:16px;width:28px}.medium-1K1Q0a_r:dir(ltr){font-size:16px;height:36px;line-height:16px;width:36px}.large-2q-YHGhw:dir(ltr){font-size:24px;height:48px;line-height:32px;width:48px}.xlarge-3lrTzNHP:dir(ltr){font-size:40px;height:56px;line-height:40px;width:56px}.xxlarge-3ee_r5Pw:dir(ltr){font-size:80px;height:112px;line-height:80px;width:112px}.xxxlarge-2Z971szk:dir(ltr){font-size:160px;height:168px;line-height:160px;width:168px}.skeleton-23DpHV9z:dir(ltr){background-color:currentColor}.letter-1wQsj4tl:dir(ltr){color:var(--_0-0Atw);font-style:normal;font-weight:700}[data-theme=light]:dir(rtl){--_0-0Atw:var(--color-white);--_1-0Atw:var(--color-cold-gray-150)}[data-theme=dark]:dir(rtl){--_0-0Atw:var(--color-cold-gray-600);--_1-0Atw:var(--color-cold-gray-800)}.logo-YPDlZUG3:dir(rtl){align-items:center;border-radius:50%;display:inline-flex;justify-content:center}.logo-YPDlZUG3:not(img):dir(rtl){background-color:var(--_1-0Atw)}.hidden-3jZ99k67:dir(rtl){opacity:0;position:absolute}.xxceptionallysmalldonotusebrv1023-2scjn4O_:dir(rtl){font-size:10px;height:12px;line-height:10px;width:12px}.xxxsmall-1qVc9c_1:dir(rtl){font-size:11px;height:18px;line-height:16px;width:18px}.xxsmall-3n8xzbYz:dir(rtl){font-size:11px;height:20px;line-height:16px;width:20px}.xsmall-EWH-kEzj:dir(rtl){font-size:11px;height:24px;line-height:16px;width:24px}.small-hxlwdAJS:dir(rtl){font-size:14px;height:28px;line-height:16px;width:28px}.medium-1K1Q0a_r:dir(rtl){font-size:16px;height:36px;line-height:16px;width:36px}.large-2q-YHGhw:dir(rtl){font-size:24px;height:48px;line-height:32px;width:48px}.xlarge-3lrTzNHP:dir(rtl){font-size:40px;height:56px;line-height:40px;width:56px}.xxlarge-3ee_r5Pw:dir(rtl){font-size:80px;height:112px;line-height:80px;width:112px}.xxxlarge-2Z971szk:dir(rtl){font-size:160px;height:168px;line-height:160px;width:168px}.skeleton-23DpHV9z:dir(rtl){background-color:currentColor}.letter-1wQsj4tl:dir(rtl){color:var(--_0-0Atw);font-style:normal;font-weight:700}", ""]);
  const n = o;
}, 42543(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, '.default-32h2ropA:dir(ltr){--ui-lib-icon-qi-default-color:var(--color-content-primary-neutral-light);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-neutral);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-neutral-semi-bold)}.danger-yEgH9vxI:dir(ltr){--ui-lib-icon-qi-default-color:var(--color-content-primary-danger);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-danger-semi-bold);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-danger-bold)}.warning-2qQIl4YE:dir(ltr){--ui-lib-icon-qi-default-color:var(--color-content-primary-warning);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-warning-semi-bold);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-warning-bold)}.success-F3y0qQez:dir(ltr){--ui-lib-icon-qi-default-color:var(--color-content-primary-success);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-success-semi-bold);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-success-bold)}.neutral-1sJodS_5:dir(ltr){--ui-lib-icon-qi-default-color:var(--color-content-secondary-neutral);--ui-lib-icon-qi-default-color-hover:var(--color-content-secondary-neutral-medium);--ui-lib-icon-qi-default-color-active:var(--color-content-secondary-neutral-semi-bold)}.neutral-light-xvIEYRmn:dir(ltr){--ui-lib-icon-qi-default-color:var(--color-content-primary-neutral-extra-light);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-neutral);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-neutral-semi-bold)}.small-3BlI-DTU:dir(ltr){--ui-lib-size:3}.medium-2GQRJR9y:dir(ltr){--ui-lib-size:4}.large-3_kpQKDc:dir(ltr){--ui-lib-size:5}.iconWrapper-2pHGfpa1:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));background:#0000;border:0;box-shadow:none;color:var(--ui-lib-icon-qi-color,var(--ui-lib-icon-qi-default-color));display:inline-block;padding:0;vertical-align:middle;--ui-lib-icon-question-information-size:calc(var(--ui-lib-size-defaulted-small)*18px + var(--ui-lib-size-defaulted-medium)*28px + var(--ui-lib-size-defaulted-large)*44px);height:var(--ui-lib-icon-question-information-size);line-height:var(--ui-lib-icon-question-information-size);min-width:var(--ui-lib-icon-question-information-size);width:var(--ui-lib-icon-question-information-size)}.iconWrapper-2pHGfpa1:dir(ltr){outline:none;overflow:visible;position:relative}.iconWrapper-2pHGfpa1:focus:dir(ltr){outline:none}.iconWrapper-2pHGfpa1:focus-visible:dir(ltr){outline:none}.iconWrapper-2pHGfpa1:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);left:-4px;pointer-events:none;position:absolute;top:-4px;width:calc(100% + 8px);z-index:1}.iconWrapper-2pHGfpa1:focus:dir(ltr):after{display:block}.iconWrapper-2pHGfpa1:focus-visible:dir(ltr):after{display:block}.iconWrapper-2pHGfpa1:focus:not(:focus-visible):dir(ltr):after{display:none}.iconWrapper-2pHGfpa1:dir(ltr):after{border-color:var(--color-focus-outline-color-blue)}.iconWrapper-2pHGfpa1:dir(ltr):after{border-radius:calc(50% + 4px)}.iconWrapper-2pHGfpa1:visited:dir(ltr){color:var(--ui-lib-icon-qi-color,var(--ui-lib-icon-qi-default-color))}@media (any-hover:hover){.iconWrapper-2pHGfpa1:hover:dir(ltr){color:var(--ui-lib-icon-qi-color-hover,var(--ui-lib-icon-qi-default-color-hover))}}.iconWrapper-2pHGfpa1:active:dir(ltr){color:var(--ui-lib-icon-qi-color-active,var(--ui-lib-icon-qi-default-color-active))}.icon-4b_jmruT:dir(ltr){pointer-events:none}.icon-4b_jmruT svg:dir(ltr){height:100%;width:100%}.default-32h2ropA:dir(rtl){--ui-lib-icon-qi-default-color:var(--color-content-primary-neutral-light);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-neutral);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-neutral-semi-bold)}.danger-yEgH9vxI:dir(rtl){--ui-lib-icon-qi-default-color:var(--color-content-primary-danger);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-danger-semi-bold);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-danger-bold)}.warning-2qQIl4YE:dir(rtl){--ui-lib-icon-qi-default-color:var(--color-content-primary-warning);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-warning-semi-bold);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-warning-bold)}.success-F3y0qQez:dir(rtl){--ui-lib-icon-qi-default-color:var(--color-content-primary-success);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-success-semi-bold);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-success-bold)}.neutral-1sJodS_5:dir(rtl){--ui-lib-icon-qi-default-color:var(--color-content-secondary-neutral);--ui-lib-icon-qi-default-color-hover:var(--color-content-secondary-neutral-medium);--ui-lib-icon-qi-default-color-active:var(--color-content-secondary-neutral-semi-bold)}.neutral-light-xvIEYRmn:dir(rtl){--ui-lib-icon-qi-default-color:var(--color-content-primary-neutral-extra-light);--ui-lib-icon-qi-default-color-hover:var(--color-content-primary-neutral);--ui-lib-icon-qi-default-color-active:var(--color-content-primary-neutral-semi-bold)}.small-3BlI-DTU:dir(rtl){--ui-lib-size:3}.medium-2GQRJR9y:dir(rtl){--ui-lib-size:4}.large-3_kpQKDc:dir(rtl){--ui-lib-size:5}.iconWrapper-2pHGfpa1:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));background:#0000;border:0;box-shadow:none;color:var(--ui-lib-icon-qi-color,var(--ui-lib-icon-qi-default-color));display:inline-block;padding:0;vertical-align:middle;--ui-lib-icon-question-information-size:calc(var(--ui-lib-size-defaulted-small)*18px + var(--ui-lib-size-defaulted-medium)*28px + var(--ui-lib-size-defaulted-large)*44px);height:var(--ui-lib-icon-question-information-size);line-height:var(--ui-lib-icon-question-information-size);min-width:var(--ui-lib-icon-question-information-size);width:var(--ui-lib-icon-question-information-size)}.iconWrapper-2pHGfpa1:dir(rtl){outline:none;overflow:visible;position:relative}.iconWrapper-2pHGfpa1:focus:dir(rtl){outline:none}.iconWrapper-2pHGfpa1:focus-visible:dir(rtl){outline:none}.iconWrapper-2pHGfpa1:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);pointer-events:none;position:absolute;right:-4px;top:-4px;width:calc(100% + 8px);z-index:1}.iconWrapper-2pHGfpa1:focus:dir(rtl):after{display:block}.iconWrapper-2pHGfpa1:focus-visible:dir(rtl):after{display:block}.iconWrapper-2pHGfpa1:focus:not(:focus-visible):dir(rtl):after{display:none}.iconWrapper-2pHGfpa1:dir(rtl):after{border-color:var(--color-focus-outline-color-blue)}.iconWrapper-2pHGfpa1:dir(rtl):after{border-radius:calc(50% + 4px)}.iconWrapper-2pHGfpa1:visited:dir(rtl){color:var(--ui-lib-icon-qi-color,var(--ui-lib-icon-qi-default-color))}@media (any-hover:hover){.iconWrapper-2pHGfpa1:hover:dir(rtl){color:var(--ui-lib-icon-qi-color-hover,var(--ui-lib-icon-qi-default-color-hover))}}.iconWrapper-2pHGfpa1:active:dir(rtl){color:var(--ui-lib-icon-qi-color-active,var(--ui-lib-icon-qi-default-color-active))}.icon-4b_jmruT:dir(rtl){pointer-events:none}.icon-4b_jmruT svg:dir(rtl){height:100%;width:100%}', ""]);
  const n = o;
}, 93332(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, ".wrapper-D3uCbCan:dir(ltr){align-items:center;display:flex;height:28px;justify-content:center;width:28px}.iconUrl-h-cI35dZ:dir(ltr){border-radius:100%;display:flex;overflow:hidden}.small-1AaMFChQ:dir(ltr){height:18px;width:18px}.big-3zRdDOYo:dir(ltr){height:24px;width:24px}.dirMatching-1tWhyVCm:dir(ltr){\n	/*!rtl:raw: transform: scale(-1); */}.wrapper-D3uCbCan:dir(rtl){align-items:center;display:flex;height:28px;justify-content:center;width:28px}.iconUrl-h-cI35dZ:dir(rtl){border-radius:100%;display:flex;overflow:hidden}.small-1AaMFChQ:dir(rtl){height:18px;width:18px}.big-3zRdDOYo:dir(rtl){height:24px;width:24px}.dirMatching-1tWhyVCm:dir(rtl){transform:scale(-1)}", ""]);
  const n = o;
}, 93600(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, ".contextActions-1E0GH8U1:dir(ltr){display:flex}.hideIfNoHover-3Er1xsdU:dir(ltr){--ui-lib-private-popoverItem-is-hovered-or-focused:min(1,var(--ui-lib-private-popoverItem-is-hovered,0) + var(--ui-lib-private-popoverItem-is-focused-visible,0))}@media not (any-pointer:coarse){.hideIfNoHover-3Er1xsdU:dir(ltr){opacity:min(1,var(--ui-lib-private-popoverItem-is-hovered-or-focused,0) + var(--ui-lib-private-contextAction-forceVisible,0))}}.someContextActionFocused-2nMWhTcz:dir(ltr){--ui-lib-private-contextAction-forceVisible:1}.contextActions-1E0GH8U1:dir(rtl){display:flex}.hideIfNoHover-3Er1xsdU:dir(rtl){--ui-lib-private-popoverItem-is-hovered-or-focused:min(1,var(--ui-lib-private-popoverItem-is-hovered,0) + var(--ui-lib-private-popoverItem-is-focused-visible,0))}@media not (any-pointer:coarse){.hideIfNoHover-3Er1xsdU:dir(rtl){opacity:min(1,var(--ui-lib-private-popoverItem-is-hovered-or-focused,0) + var(--ui-lib-private-contextAction-forceVisible,0))}}.someContextActionFocused-2nMWhTcz:dir(rtl){--ui-lib-private-contextAction-forceVisible:1}", ""]);
  const n = o;
}, 44421(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, '.customPopoverItem-3SKlqFA7:dir(ltr){-webkit-appearance:none;appearance:none;background:var(--color-container-fill-tertiary-inverse);background:none;border:none;border-radius:4px;box-sizing:border-box;color:inherit;font-family:inherit;padding:0;text-align:start;width:100%}.customPopoverItem-3SKlqFA7:dir(ltr):after{height:calc(100% + 8px);left:-4px;top:-4px;width:calc(100% + 8px)}.customPopoverItem-3SKlqFA7:focus:dir(ltr):after{display:block}.customPopoverItem-3SKlqFA7:focus-visible:dir(ltr):after{display:block}.customPopoverItem-3SKlqFA7:focus:not(:focus-visible):dir(ltr):after{display:none}.customPopoverItem-3SKlqFA7:dir(ltr):after{border-color:var(--color-focus-outline-color-blue)}.customPopoverItem-3SKlqFA7:dir(ltr):after{border-radius:4px}.customPopoverItem-3SKlqFA7:dir(ltr){outline:none;overflow:visible;position:relative}.customPopoverItem-3SKlqFA7:focus:dir(ltr){outline:none}.customPopoverItem-3SKlqFA7:focus-visible:dir(ltr){outline:none}.customPopoverItem-3SKlqFA7:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:1}@media (any-hover:hover){.clickable-3SYpB4iF:hover:dir(ltr){background:var(--color-container-fill-primary-neutral-extra-light)}}.customPopoverItem-3SKlqFA7:dir(rtl){-webkit-appearance:none;appearance:none;background:var(--color-container-fill-tertiary-inverse);background:none;border:none;border-radius:4px;box-sizing:border-box;color:inherit;font-family:inherit;padding:0;text-align:start;width:100%}.customPopoverItem-3SKlqFA7:dir(rtl):after{height:calc(100% + 8px);right:-4px;top:-4px;width:calc(100% + 8px)}.customPopoverItem-3SKlqFA7:focus:dir(rtl):after{display:block}.customPopoverItem-3SKlqFA7:focus-visible:dir(rtl):after{display:block}.customPopoverItem-3SKlqFA7:focus:not(:focus-visible):dir(rtl):after{display:none}.customPopoverItem-3SKlqFA7:dir(rtl):after{border-color:var(--color-focus-outline-color-blue)}.customPopoverItem-3SKlqFA7:dir(rtl):after{border-radius:4px}.customPopoverItem-3SKlqFA7:dir(rtl){outline:none;overflow:visible;position:relative}.customPopoverItem-3SKlqFA7:focus:dir(rtl){outline:none}.customPopoverItem-3SKlqFA7:focus-visible:dir(rtl){outline:none}.customPopoverItem-3SKlqFA7:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:100%;pointer-events:none;position:absolute;right:0;top:0;width:100%;z-index:1}@media (any-hover:hover){.clickable-3SYpB4iF:hover:dir(rtl){background:var(--color-container-fill-primary-neutral-extra-light)}}', ""]);
  const n = o;
}, 38561(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, ".right-LgWKrxYE:dir(ltr){align-items:center;color:var(--color-content-primary-neutral);display:flex;gap:4px;margin-right:-4px}.arrow-3n3q_mNu:dir(ltr){height:18px;width:18px}.arrow-3n3q_mNu:dir(rtl):dir(ltr){transform:scaleX(-1)}.right-LgWKrxYE:dir(rtl){align-items:center;color:var(--color-content-primary-neutral);display:flex;gap:4px;margin-left:-4px}.arrow-3n3q_mNu:dir(rtl){height:18px;width:18px}.arrow-3n3q_mNu:dir(rtl):dir(rtl){transform:scaleX(-1)}", ""]);
  const n = o;
}, 87721(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, ".nestedPopovers-1bqNDCea:dir(ltr){align-items:center;column-gap:6px;display:flex;flex-wrap:wrap;row-gap:0}.nestedPopovers-1bqNDCea:dir(rtl){align-items:center;column-gap:6px;display:flex;flex-wrap:wrap;row-gap:0}", ""]);
  const n = o;
}, 59427(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, '.wrapper-1yAt7Xea:dir(ltr){align-items:center;display:flex;flex-wrap:wrap}.primaryTitleWrapper-31Z9Pvdh:dir(ltr){box-sizing:border-box;color:var(--color-content-primary-neutral-bold);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;min-height:40px;padding:8px calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*12px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*20px) 8px calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*10px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*16px);row-gap:2px;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:24px;column-gap:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*6px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*8px);line-height:var(--ui-lib-typography-line-height)}.secondaryTitleWrapper-3yYx4uku:dir(ltr){color:var(--color-content-primary-neutral);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;row-gap:0;text-align:left;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:11px;column-gap:6px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:400;letter-spacing:.4px;min-height:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*24px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*32px);padding:0 calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*8px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*16px);text-transform:uppercase}.secondaryTitleWrapper-3yYx4uku .title-1QPoaBtL:dir(ltr){min-height:calc(var(--ui-lib-private-popover-is-mobile-positioner, 0)*16px);padding:calc(var(--ui-lib-private-popover-is-mobile-positioner, 0)*4px) 0}.content-1SemDTIp:dir(ltr){align-items:center;display:flex;max-width:100%}.left-1DMKYr-K:dir(ltr){align-items:center;display:flex;height:28px;justify-content:center;padding-right:4px;width:28px}.withLeftSlot-2_zkwg0-:dir(ltr){padding-bottom:6px;padding-left:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*4px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*12px);padding-top:6px}.title-1QPoaBtL:dir(ltr){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.space-2Z29kJ6E:dir(ltr){flex:1}.icon-3TsvNAbt:dir(ltr){display:block;height:18px;margin-bottom:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*-1px);margin-top:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*-1px);width:18px}.wrapper-1yAt7Xea:dir(rtl){align-items:center;display:flex;flex-wrap:wrap}.primaryTitleWrapper-31Z9Pvdh:dir(rtl){box-sizing:border-box;color:var(--color-content-primary-neutral-bold);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;min-height:40px;padding:8px calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*10px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*16px) 8px calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*12px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*20px);row-gap:2px;--ui-lib-typography-font-size:16px;font-size:var(--ui-lib-typography-font-size);font-weight:600;--ui-lib-typography-line-height:24px;column-gap:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*6px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*8px);line-height:var(--ui-lib-typography-line-height)}.secondaryTitleWrapper-3yYx4uku:dir(rtl){color:var(--color-content-primary-neutral);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;row-gap:0;text-align:right;--ui-lib-typography-line-height:16px;line-height:var(--ui-lib-typography-line-height);--ui-lib-typography-font-size:11px;column-gap:6px;font-size:var(--ui-lib-typography-font-size);font-style:normal;font-weight:400;letter-spacing:.4px;min-height:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*24px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*32px);padding:0 calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*8px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*16px);text-transform:uppercase}.secondaryTitleWrapper-3yYx4uku .title-1QPoaBtL:dir(rtl){min-height:calc(var(--ui-lib-private-popover-is-mobile-positioner, 0)*16px);padding:calc(var(--ui-lib-private-popover-is-mobile-positioner, 0)*4px) 0}.content-1SemDTIp:dir(rtl){align-items:center;display:flex;max-width:100%}.left-1DMKYr-K:dir(rtl){align-items:center;display:flex;height:28px;justify-content:center;padding-left:4px;width:28px}.withLeftSlot-2_zkwg0-:dir(rtl){padding-bottom:6px;padding-right:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*4px + var(--ui-lib-private-popover-is-mobile-positioner, 0)*12px);padding-top:6px}.title-1QPoaBtL:dir(rtl){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.space-2Z29kJ6E:dir(rtl){flex:1}.icon-3TsvNAbt:dir(rtl){display:block;height:18px;margin-bottom:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*-1px);margin-top:calc(var(--ui-lib-private-popover-is-anchor-positioner, 1)*-1px);width:18px}', ""]);
  const n = o;
}, 76723(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, "[data-theme=light]:dir(ltr){--_0-95IO:var(--color-cold-gray-100)}[data-theme=dark]:dir(ltr){--_0-95IO:var(--color-cold-gray-800)}.wrapper-3zAMiNFN:dir(ltr){color:var(--_0-95IO)}.animated-26-ZioKX:dir(ltr){animation:1s ease-in-out 0s infinite alternate none running;animation-name:pulsation-2le515jn}[data-theme=light]:dir(rtl){--_0-95IO:var(--color-cold-gray-100)}[data-theme=dark]:dir(rtl){--_0-95IO:var(--color-cold-gray-800)}.wrapper-3zAMiNFN:dir(rtl){color:var(--_0-95IO)}.animated-26-ZioKX:dir(rtl){animation:1s ease-in-out 0s infinite alternate none running;animation-name:pulsation-2le515jn}@keyframes pulsation-2le515jn{0%{opacity:1}to{opacity:.4}}", ""]);
  const n = o;
}, 17599(e, i, r) {
  r.d(i, { A: () => n });
  var t = r(30050), l = r.n(t), a = r(77259), o = r.n(a)()(l());
  o.push([e.id, ".small-1CjY28kc:dir(ltr){--ui-lib-size-switch-default:3}.medium-3t-gSaom:dir(ltr){--ui-lib-size-switch-default:4}.large-1BrfHxpw:dir(ltr){--ui-lib-size-switch-default:5}.switchView-3smidXLC:dir(ltr){--ui-lib-size-switch-internal:var(--ui-lib-switchView-size,var(--ui-lib-size-switch-default));--ui-lib-size-switch-internal-s:calc(max(0, 1 - (var(--ui-lib-size-switch-internal) - 3) * (var(--ui-lib-size-switch-internal) - 3)));--ui-lib-size-switch-internal-m:calc(max(0, 1 - (var(--ui-lib-size-switch-internal) - 4) * (var(--ui-lib-size-switch-internal) - 4)));--ui-lib-size-switch-internal-l:calc(max(0, 1 - (var(--ui-lib-size-switch-internal) - 5) * (var(--ui-lib-size-switch-internal) - 5)));display:block;position:relative;--switch-height:calc(var(--ui-lib-size-switch-internal-s)*20px + var(--ui-lib-size-switch-internal-m)*28px + var(--ui-lib-size-switch-internal-l)*34px);height:var(--switch-height);--switch-width:calc(var(--ui-lib-size-switch-internal-s)*38px + var(--ui-lib-size-switch-internal-m)*54px + var(--ui-lib-size-switch-internal-l)*64px);width:var(--switch-width);--switch-padding:calc(var(--ui-lib-size-switch-internal-s)*3px + var(--ui-lib-size-switch-internal-m)*4px + var(--ui-lib-size-switch-internal-l)*5px);--switch-thumb:calc(var(--switch-height) - 2*var(--switch-padding));--default-color:var(--color-container-fill-primary-neutral);--switch-color:var(--ui-lib-switchView-color,var(--default-color))}.switchView-3smidXLC.checked-2HIdOF9g:dir(ltr){--default-color:var(--color-container-fill-primary-neutral-extra-bold)}.disabled-3fkvYQFX:dir(ltr){opacity:.5}.track-3vPj978u:dir(ltr){background-color:var(--switch-color);border-color:var(--switch-color);border-radius:20px;border-style:solid;border-width:1px;box-sizing:border-box;display:block;height:100%;left:0;position:absolute;top:0;width:100%}.thumb-3jO-TAed:dir(ltr){\n	/*!rtl:raw:\n	transform: translate(calc(-1*(var(--switch-padding))), var(--switch-padding));\n	*/background:var(--color-container-fill-quinary-inverse);border-radius:50%;display:block;height:var(--switch-thumb);transform:translate(var(--switch-padding),var(--switch-padding));transition-duration:.25s;transition-property:transform;transition-timing-function:ease-out;width:var(--switch-thumb)}.checked-2HIdOF9g .thumb-3jO-TAed:dir(ltr){transform:translate(calc(var(--switch-width) - var(--switch-thumb) - var(--switch-padding)),var(--switch-padding))}.small-1CjY28kc:dir(rtl){--ui-lib-size-switch-default:3}.medium-3t-gSaom:dir(rtl){--ui-lib-size-switch-default:4}.large-1BrfHxpw:dir(rtl){--ui-lib-size-switch-default:5}.switchView-3smidXLC:dir(rtl){--ui-lib-size-switch-internal:var(--ui-lib-switchView-size,var(--ui-lib-size-switch-default));--ui-lib-size-switch-internal-s:calc(max(0, 1 - (var(--ui-lib-size-switch-internal) - 3) * (var(--ui-lib-size-switch-internal) - 3)));--ui-lib-size-switch-internal-m:calc(max(0, 1 - (var(--ui-lib-size-switch-internal) - 4) * (var(--ui-lib-size-switch-internal) - 4)));--ui-lib-size-switch-internal-l:calc(max(0, 1 - (var(--ui-lib-size-switch-internal) - 5) * (var(--ui-lib-size-switch-internal) - 5)));display:block;position:relative;--switch-height:calc(var(--ui-lib-size-switch-internal-s)*20px + var(--ui-lib-size-switch-internal-m)*28px + var(--ui-lib-size-switch-internal-l)*34px);height:var(--switch-height);--switch-width:calc(var(--ui-lib-size-switch-internal-s)*38px + var(--ui-lib-size-switch-internal-m)*54px + var(--ui-lib-size-switch-internal-l)*64px);width:var(--switch-width);--switch-padding:calc(var(--ui-lib-size-switch-internal-s)*3px + var(--ui-lib-size-switch-internal-m)*4px + var(--ui-lib-size-switch-internal-l)*5px);--switch-thumb:calc(var(--switch-height) - 2*var(--switch-padding));--default-color:var(--color-container-fill-primary-neutral);--switch-color:var(--ui-lib-switchView-color,var(--default-color))}.switchView-3smidXLC.checked-2HIdOF9g:dir(rtl){--default-color:var(--color-container-fill-primary-neutral-extra-bold)}.disabled-3fkvYQFX:dir(rtl){opacity:.5}.track-3vPj978u:dir(rtl){background-color:var(--switch-color);border-color:var(--switch-color);border-radius:20px;border-style:solid;border-width:1px;box-sizing:border-box;display:block;height:100%;position:absolute;right:0;top:0;width:100%}.thumb-3jO-TAed:dir(rtl){background:var(--color-container-fill-quinary-inverse);border-radius:50%;display:block;height:var(--switch-thumb);transform:translate(var(--switch-padding),var(--switch-padding));transform:translate(calc(-1*(var(--switch-padding))),var(--switch-padding));transition-duration:.25s;transition-property:transform;transition-timing-function:ease-out;width:var(--switch-thumb)}.checked-2HIdOF9g .thumb-3jO-TAed:dir(rtl){transform:translate(calc(-1*(var(--switch-width) - var(--switch-thumb) - var(--switch-padding))),var(--switch-padding))}", ""]);
  const n = o;
}, 31544(e, i, r) {
  r.d(i, { Cp: () => s, J0: () => c, J5: () => v, r: () => d });
  var t = r(90066), l = r(11555), a = r(3103), o = r(31784), n = r(68752);
  function s(e2, i2) {
    return (0, l.o5)().captureException(e2, (0, n.li)(i2));
  }
  function d(e2, i2) {
    return (0, l.o5)().captureEvent(e2, i2);
  }
  function c(e2) {
    const i2 = (0, l.KU)(), r2 = (0, l.rm)(), n2 = (0, l.o5)(), { release: s2, environment: d2 = t.U } = i2 && i2.getOptions() || {}, { userAgent: c2 } = o.O.navigator || {}, p2 = (0, a.fj)({ release: s2, environment: d2, user: n2.getUser() || r2.getUser(), ...c2 && { userAgent: c2 }, ...e2 }), v2 = r2.getSession();
    return v2 && "ok" === v2.status && (0, a.qO)(v2, { status: "exited" }), u(), r2.setSession(p2), n2.setSession(p2), p2;
  }
  function u() {
    const e2 = (0, l.rm)(), i2 = (0, l.o5)(), r2 = i2.getSession() || e2.getSession();
    r2 && (0, a.Vu)(r2), p(), e2.setSession(), i2.setSession();
  }
  function p() {
    const e2 = (0, l.rm)(), i2 = (0, l.o5)(), r2 = (0, l.KU)(), t2 = i2.getSession() || e2.getSession();
    t2 && r2 && r2.captureSession(t2);
  }
  function v(e2 = false) {
    e2 ? u() : p();
  }
}, 48927(e, i, r) {
  r.d(i, { Ts: () => t.T }), r(11314), r(73042);
  var t = r(23100);
  r(67602), r(86049);
} }]);
