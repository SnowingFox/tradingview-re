(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[7053], { 92920(r, e, t) {
  r.exports = t(70156);
}, 3714(r, e, t) {
  "use strict";
  t.d(e, { q: () => S });
  var i = t(79474), o = t(14487), l = t.n(o);
  const a = JSON.parse('{"divider":"divider-2LgGf736","orientation-horizontal":"orientation-horizontal-1GrzG6F6","orientation-vertical":"orientation-vertical-1ek93l-2","size-xsmall":"size-xsmall-3SrVpGiX","size-small":"size-small-22sZwy9o","size-medium":"size-medium-2SIV6loN","size-large":"size-large-3T6RtD4L","size-xlarge":"size-xlarge-2-9FldHP","size-xxlarge":"size-xxlarge-3w4ex5dj","type-primary":"type-primary-iy8PH_s4","type-secondary":"type-secondary-4Lb6MQdQ"}');
  var n = t(72539), d = t.n(n), s = t(48560), c = t.n(s), b = t(57148), h = t.n(b), u = t(60251), g = t.n(u), p = t(81263), v = t.n(p), m = t(50892), y = t.n(m), f = t(52775), x = {};
  function w(r2) {
    const { className: e2, type: t2 = "secondary", size: o2 = "small", orientation: n2 = "horizontal" } = r2, d2 = l()(e2, a.divider, a[`size-${o2}`], a[`type-${t2}`], a[`orientation-${n2}`]);
    return i.createElement("hr", { className: d2, "aria-orientation": n2 });
  }
  x.styleTagTransform = y(), x.setAttributes = g(), x.insert = h().bind(null, "head"), x.domAPI = c(), x.insertStyleElement = v(), d()(f.A, x), f.A && f.A.locals && f.A.locals;
  const L = JSON.parse('{"aP":"box-2jxSSn_q","KK":"middleSlot-1K3amE20","pP":"ensSlot-22EF_X5r","_N":"stretch-kmY0kVcW"}');
  var k = t(25241), z = {};
  function S(r2) {
    const { children: e2, endSection: t2, stretch: o2 = false } = r2;
    return i.createElement("div", { className: l()(L.aP, o2 && L._N) }, i.createElement("div", { className: L.KK }, e2), t2 && i.createElement(i.Fragment, null, i.createElement("div", null, i.createElement(w, { orientation: "vertical", size: "xsmall" })), i.createElement("div", { className: L.pP }, t2)));
  }
  z.styleTagTransform = y(), z.setAttributes = g(), z.insert = h().bind(null, "head"), z.domAPI = c(), z.insertStyleElement = v(), d()(k.A, z), k.A && k.A.locals && k.A.locals;
}, 17527(r, e, t) {
  "use strict";
  function i(r2) {
    return l(r2, a);
  }
  function o(r2) {
    return l(r2, n);
  }
  function l(r2, e2) {
    const t2 = Object.entries(r2).filter(e2), i2 = {};
    for (const [r3, e3] of t2) i2[r3] = e3;
    return i2;
  }
  function a(r2) {
    const [e2, t2] = r2;
    return 0 === e2.indexOf("data-") && "string" == typeof t2;
  }
  function n(r2) {
    return 0 === r2[0].indexOf("aria-");
  }
  t.d(e, { En: () => o, r8: () => i });
}, 52775(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, "[data-theme=light]:dir(ltr){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(ltr){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(ltr){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(ltr){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(ltr){border-left-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(ltr){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(ltr){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(ltr){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(ltr){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(ltr){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(ltr){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(ltr){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(ltr){--ui-lib-button-default-color-border:var(--_0-he-k)}[data-theme=light]:dir(rtl){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(rtl){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(rtl){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(rtl){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(rtl){border-right-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(rtl){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(rtl){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(rtl){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(rtl){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(rtl){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(rtl){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(rtl){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(rtl){--ui-lib-button-default-color-border:var(--_0-he-k)}", ""]);
  const n = a;
}, 84713(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, ".snackbarButton-3rB2LhLU:dir(ltr){--ui-lib-button-color-bg:#0000;--ui-lib-button-color-border:var(--color-cold-gray-600);--ui-lib-button-color-content:var(--color-white)}@media (any-hover:hover){.snackbarButton-3rB2LhLU:hover:dir(ltr){--ui-lib-button-color-bg:var(--color-cold-gray-650);--ui-lib-button-color-border:var(--color-cold-gray-650)}}.snackbarButton-3rB2LhLU:active:dir(ltr){--ui-lib-button-color-bg:var(--color-cold-gray-550);--ui-lib-button-color-border:var(--color-cold-gray-550)}.snackbarButton-3rB2LhLU:dir(rtl){--ui-lib-button-color-bg:#0000;--ui-lib-button-color-border:var(--color-cold-gray-600);--ui-lib-button-color-content:var(--color-white)}@media (any-hover:hover){.snackbarButton-3rB2LhLU:hover:dir(rtl){--ui-lib-button-color-bg:var(--color-cold-gray-650);--ui-lib-button-color-border:var(--color-cold-gray-650)}}.snackbarButton-3rB2LhLU:active:dir(rtl){--ui-lib-button-color-bg:var(--color-cold-gray-550);--ui-lib-button-color-border:var(--color-cold-gray-550)}", ""]);
  const n = a;
}, 25241(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, '.box-2jxSSn_q:dir(ltr){background-color:var(--color-cold-gray-750);border-radius:8px;box-shadow:0 2px 4px 0 var(--color-other-shadow-primary-neutral-extra-heavy);color:var(--color-white);display:flex;gap:8px;min-height:40px;overflow-wrap:anywhere;padding:0 8px;width:fit-content;--ui-lib-divider-color:var(--color-cold-gray-600);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.ensSlot-22EF_X5r:dir(ltr),.middleSlot-1K3amE20:dir(ltr){align-items:center;display:flex;justify-content:center;padding:6px 0}.middleSlot-1K3amE20:dir(ltr){flex:1;min-width:0}.ensSlot-22EF_X5r:dir(ltr){flex-grow:0}.stretch-kmY0kVcW:dir(ltr){align-items:stretch;box-sizing:border-box;width:100%}.box-2jxSSn_q:dir(rtl){background-color:var(--color-cold-gray-750);border-radius:8px;box-shadow:0 2px 4px 0 var(--color-other-shadow-primary-neutral-extra-heavy);color:var(--color-white);display:flex;gap:8px;min-height:40px;overflow-wrap:anywhere;padding:0 8px;width:fit-content;--ui-lib-divider-color:var(--color-cold-gray-600);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.ensSlot-22EF_X5r:dir(rtl),.middleSlot-1K3amE20:dir(rtl){align-items:center;display:flex;justify-content:center;padding:6px 0}.middleSlot-1K3amE20:dir(rtl){flex:1;min-width:0}.ensSlot-22EF_X5r:dir(rtl){flex-grow:0}.stretch-kmY0kVcW:dir(rtl){align-items:stretch;box-sizing:border-box;width:100%}', ""]);
  const n = a;
}, 87069(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, ".download-toast-container {\n	padding: 0 4px;\n	display: flex;\n	align-items: center;\n	gap: 4px;\n}\n\n.download-toast-icon {\n	color: var(--color-minty-green-400); /* base ui-lib palette color */\n}\n\n.download-toast-button {\n	margin-left: 8px;\n}\n", ""]);
  const n = a;
}, 49871(r, e, t) {
  "use strict";
  t.r(e), t.d(e, { default: () => P });
  var i = t(79474), o = t(62020), l = t(92920);
  const a = i.forwardRef(((r2, e2) => {
    const { icon: t2 = "", title: o2, ariaLabel: l2, ariaLabelledby: a2, ariaHidden: n2, ...d2 } = r2, s2 = !!(o2 || l2 || a2);
    return i.createElement("span", { role: "img", ...d2, ref: e2, "aria-label": l2, "aria-labelledby": a2, "aria-hidden": n2 || !s2, title: o2, dangerouslySetInnerHTML: { __html: t2 } });
  }));
  var n = t(3714), d = t(1566);
  const s = JSON.parse('{"o":"snackbarButton-3rB2LhLU"}');
  var c = t(72539), b = t.n(c), h = t(48560), u = t.n(h), g = t(57148), p = t.n(g), v = t(60251), m = t.n(v), y = t(81263), f = t.n(y), x = t(50892), w = t.n(x), L = t(84713), k = {};
  function z(r2) {
    const { onClick: e2, children: t2 } = r2;
    return i.createElement(d.SX, { className: s.o, size: "xsmall", onClick: e2 }, t2);
  }
  k.styleTagTransform = w(), k.setAttributes = m(), k.insert = p().bind(null, "head"), k.domAPI = u(), k.insertStyleElement = f(), b()(L.A, k), L.A && L.A.locals && L.A.locals;
  var S = t(20369), G = t(7750), E = t(22259), _ = t(84799), A = t(87069), B = {};
  B.styleTagTransform = w(), B.setAttributes = m(), B.insert = p().bind(null, "head"), B.domAPI = u(), B.insertStyleElement = f(), b()(A.A, B), A.A && A.A.locals && A.A.locals;
  const P = (r2) => {
    const { t: e2 } = (0, o.Bd)();
    return i.createElement(n.q, null, i.createElement("div", { className: "download-toast-container" }, i.createElement(a, { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M22 8.697 10.992 20.001l-4.997-5.35.73-.651 4.283 4.552L21.283 8z"/></svg>', className: "ui-lib-icon download-toast-icon" }), i.createElement(S.o, { name: "typography-regular-14px", tag: "span" }, r2.toastView.toast.message.text), i.createElement("div", { className: "download-toast-button" }, i.createElement(z, { onClick: () => {
      E.f.provideProxy("tvd:settings-provider-service").getFileSavePath().then(((r3) => l.shell.openPath(r3))).then((() => E.f.provideProxy("tvd:toast-service").hide(_.p.Download))).catch(((r3) => (0, G.yg)().error("<DownloadToast>.onToastClick()", r3)));
    } }, `${e2("Show in folder")}`))));
  };
} }]);
