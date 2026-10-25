/*! For license information please see 8898.js.LICENSE.txt */
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[8898], { 3714(r, e, t) {
  "use strict";
  t.d(e, { q: () => G });
  var i = t(79474), o = t(14487), l = t.n(o);
  const a = JSON.parse('{"divider":"divider-2LgGf736","orientation-horizontal":"orientation-horizontal-1GrzG6F6","orientation-vertical":"orientation-vertical-1ek93l-2","size-xsmall":"size-xsmall-3SrVpGiX","size-small":"size-small-22sZwy9o","size-medium":"size-medium-2SIV6loN","size-large":"size-large-3T6RtD4L","size-xlarge":"size-xlarge-2-9FldHP","size-xxlarge":"size-xxlarge-3w4ex5dj","type-primary":"type-primary-iy8PH_s4","type-secondary":"type-secondary-4Lb6MQdQ"}');
  var n = t(72539), d = t.n(n), s = t(48560), c = t.n(s), p = t(57148), g = t.n(p), h = t(60251), u = t.n(h), y = t(81263), m = t.n(y), v = t(50892), b = t.n(v), f = t(52775), x = {};
  function w(r2) {
    const { className: e2, type: t2 = "secondary", size: o2 = "small", orientation: n2 = "horizontal" } = r2, d2 = l()(e2, a.divider, a[`size-${o2}`], a[`type-${t2}`], a[`orientation-${n2}`]);
    return i.createElement("hr", { className: d2, "aria-orientation": n2 });
  }
  x.styleTagTransform = b(), x.setAttributes = u(), x.insert = g().bind(null, "head"), x.domAPI = c(), x.insertStyleElement = m(), d()(f.A, x), f.A && f.A.locals && f.A.locals;
  const z = JSON.parse('{"aP":"box-2jxSSn_q","KK":"middleSlot-1K3amE20","pP":"ensSlot-22EF_X5r","_N":"stretch-kmY0kVcW"}');
  var k = t(25241), L = {};
  function G(r2) {
    const { children: e2, endSection: t2, stretch: o2 = false } = r2;
    return i.createElement("div", { className: l()(z.aP, o2 && z._N) }, i.createElement("div", { className: z.KK }, e2), t2 && i.createElement(i.Fragment, null, i.createElement("div", null, i.createElement(w, { orientation: "vertical", size: "xsmall" })), i.createElement("div", { className: z.pP }, t2)));
  }
  L.styleTagTransform = b(), L.setAttributes = u(), L.insert = g().bind(null, "head"), L.domAPI = c(), L.insertStyleElement = m(), d()(k.A, L), k.A && k.A.locals && k.A.locals;
}, 14487(r, e) {
  var t;
  !(function() {
    "use strict";
    var i = {}.hasOwnProperty;
    function o() {
      for (var r2 = [], e2 = 0; e2 < arguments.length; e2++) {
        var t2 = arguments[e2];
        if (t2) {
          var l = typeof t2;
          if ("string" === l || "number" === l) r2.push(t2);
          else if (Array.isArray(t2) && t2.length) {
            var a = o.apply(null, t2);
            a && r2.push(a);
          } else if ("object" === l) for (var n in t2) i.call(t2, n) && t2[n] && r2.push(n);
        }
      }
      return r2.join(" ");
    }
    r.exports ? (o.default = o, r.exports = o) : void 0 === (t = function() {
      return o;
    }.apply(e, [])) || (r.exports = t);
  })();
}, 52775(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, "[data-theme=light]:dir(ltr){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(ltr){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(ltr){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(ltr){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(ltr){border-left-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(ltr){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(ltr){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(ltr){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(ltr){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(ltr){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(ltr){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(ltr){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(ltr){--ui-lib-button-default-color-border:var(--_0-he-k)}[data-theme=light]:dir(rtl){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(rtl){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(rtl){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(rtl){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(rtl){border-right-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(rtl){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(rtl){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(rtl){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(rtl){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(rtl){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(rtl){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(rtl){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(rtl){--ui-lib-button-default-color-border:var(--_0-he-k)}", ""]);
  const n = a;
}, 25241(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, '.box-2jxSSn_q:dir(ltr){background-color:var(--color-cold-gray-750);border-radius:8px;box-shadow:0 2px 4px 0 var(--color-other-shadow-primary-neutral-extra-heavy);color:var(--color-white);display:flex;gap:8px;min-height:40px;overflow-wrap:anywhere;padding:0 8px;width:fit-content;--ui-lib-divider-color:var(--color-cold-gray-600);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.ensSlot-22EF_X5r:dir(ltr),.middleSlot-1K3amE20:dir(ltr){align-items:center;display:flex;justify-content:center;padding:6px 0}.middleSlot-1K3amE20:dir(ltr){flex:1;min-width:0}.ensSlot-22EF_X5r:dir(ltr){flex-grow:0}.stretch-kmY0kVcW:dir(ltr){align-items:stretch;box-sizing:border-box;width:100%}.box-2jxSSn_q:dir(rtl){background-color:var(--color-cold-gray-750);border-radius:8px;box-shadow:0 2px 4px 0 var(--color-other-shadow-primary-neutral-extra-heavy);color:var(--color-white);display:flex;gap:8px;min-height:40px;overflow-wrap:anywhere;padding:0 8px;width:fit-content;--ui-lib-divider-color:var(--color-cold-gray-600);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.ensSlot-22EF_X5r:dir(rtl),.middleSlot-1K3amE20:dir(rtl){align-items:center;display:flex;justify-content:center;padding:6px 0}.middleSlot-1K3amE20:dir(rtl){flex:1;min-width:0}.ensSlot-22EF_X5r:dir(rtl){flex-grow:0}.stretch-kmY0kVcW:dir(rtl){align-items:stretch;box-sizing:border-box;width:100%}', ""]);
  const n = a;
}, 41335(r, e, t) {
  "use strict";
  t.d(e, { A: () => n });
  var i = t(30050), o = t.n(i), l = t(77259), a = t.n(l)()(o());
  a.push([r.id, ".fullscreen-toast-container {\n	display: flex;\n	padding: 0px 4px;\n	align-items: center;\n	gap: 6px;\n}\n\n.fullscreen-toast-part-key {\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	min-width: 35px;\n	min-height: 18px;\n	border-radius: 6px;\n	background-color: var(--color-cold-gray-600);\n	color: var(--color-cold-gray-100);\n	border-bottom: 1px var(--color-cold-gray-450) solid;\n}\n", ""]);
  const n = a;
}, 18898(r, e, t) {
  "use strict";
  t.r(e), t.d(e, { default: () => z });
  var i = t(79474), o = t(3714), l = t(20369), a = t(16309), n = t(42952), d = t(72539), s = t.n(d), c = t(48560), p = t.n(c), g = t(57148), h = t.n(g), u = t(60251), y = t.n(u), m = t(81263), v = t.n(m), b = t(50892), f = t.n(b), x = t(41335), w = {};
  w.styleTagTransform = f(), w.setAttributes = y(), w.insert = h().bind(null, "head"), w.domAPI = p(), w.insertStyleElement = v(), s()(x.A, w), x.A && x.A.locals && x.A.locals;
  const z = ({ toastView: r2 }) => {
    (0, i.useEffect)((() => {
      (0, a.eq)(), (0, n.yo)();
    }), []);
    const [e2, t2] = r2.toast.message.text.split(r2.toast.message.key);
    return i.createElement(o.q, null, i.createElement("div", { className: "fullscreen-toast-container" }, e2.trim(), i.createElement(l.o, { tag: "span", name: "typography-accent-12px-semibold", className: "fullscreen-toast-part-key" }, r2.toast.message.key), t2.trim()));
  };
}, 68671(r, e, t) {
  "use strict";
  t.d(e, { v: () => l });
  var i = t(87574), o = t(87894);
  const l = async (r2) => {
    o.A.language !== r2 && await i.Ay.changeLanguage(r2);
  };
}, 59954(r, e, t) {
  "use strict";
  t.d(e, { W: () => i });
  const i = "tvd:locale-service";
}, 16309(r, e, t) {
  "use strict";
  t.d(e, { eq: () => g });
  var i = t(84157), o = t(22259), l = t(7750), a = t(78449), n = t(87894), d = t(68671), s = t(59954);
  const c = void 0 !== i.ipcMain;
  function p(r2, e2) {
    r2.setAttribute("dir", e2 ? "rtl" : "ltr");
  }
  function g(r2) {
    r2 && "" === r2.dir && p(r2, (0, a.HL)(n.A.language)), (function(r3) {
      let e2;
      e2 = c ? o.f.provide(s.W).localeChange.subscribe(r3) : o.f.provideProxy(s.W).localeChange.subscribe(r3);
      const t2 = () => {
        e2?.unsubscribe(), e2 = void 0, window.removeEventListener("beforeunload", t2);
      };
      "undefined" != typeof window && window.addEventListener("beforeunload", t2);
    })(((e2) => {
      "" !== e2 && ((0, d.v)(e2).catch(((r3) => {
        (0, l.yg)().error("setupI18nLocaleHandler(): changeLocale() error", r3);
      })), r2 && p(r2, (0, a.HL)(e2)));
    }));
  }
} }]);
