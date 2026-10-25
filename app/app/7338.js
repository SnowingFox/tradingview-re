/*! For license information please see 7338.js.LICENSE.txt */
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[7338], { 3714(r, e, i) {
  "use strict";
  i.d(e, { q: () => S });
  var t = i(79474), o = i(14487), l = i.n(o);
  const d = JSON.parse('{"divider":"divider-2LgGf736","orientation-horizontal":"orientation-horizontal-1GrzG6F6","orientation-vertical":"orientation-vertical-1ek93l-2","size-xsmall":"size-xsmall-3SrVpGiX","size-small":"size-small-22sZwy9o","size-medium":"size-medium-2SIV6loN","size-large":"size-large-3T6RtD4L","size-xlarge":"size-xlarge-2-9FldHP","size-xxlarge":"size-xxlarge-3w4ex5dj","type-primary":"type-primary-iy8PH_s4","type-secondary":"type-secondary-4Lb6MQdQ"}');
  var a = i(72539), n = i.n(a), s = i(48560), c = i.n(s), h = i(57148), u = i.n(h), g = i(60251), p = i.n(g), v = i(81263), b = i.n(v), y = i(50892), f = i.n(y), m = i(52775), x = {};
  function w(r2) {
    const { className: e2, type: i2 = "secondary", size: o2 = "small", orientation: a2 = "horizontal" } = r2, n2 = l()(e2, d.divider, d[`size-${o2}`], d[`type-${i2}`], d[`orientation-${a2}`]);
    return t.createElement("hr", { className: n2, "aria-orientation": a2 });
  }
  x.styleTagTransform = f(), x.setAttributes = p(), x.insert = u().bind(null, "head"), x.domAPI = c(), x.insertStyleElement = b(), n()(m.A, x), m.A && m.A.locals && m.A.locals;
  const z = JSON.parse('{"aP":"box-2jxSSn_q","KK":"middleSlot-1K3amE20","pP":"ensSlot-22EF_X5r","_N":"stretch-kmY0kVcW"}');
  var k = i(25241), L = {};
  function S(r2) {
    const { children: e2, endSection: i2, stretch: o2 = false } = r2;
    return t.createElement("div", { className: l()(z.aP, o2 && z._N) }, t.createElement("div", { className: z.KK }, e2), i2 && t.createElement(t.Fragment, null, t.createElement("div", null, t.createElement(w, { orientation: "vertical", size: "xsmall" })), t.createElement("div", { className: z.pP }, i2)));
  }
  L.styleTagTransform = f(), L.setAttributes = p(), L.insert = u().bind(null, "head"), L.domAPI = c(), L.insertStyleElement = b(), n()(k.A, L), k.A && k.A.locals && k.A.locals;
}, 14487(r, e) {
  var i;
  !(function() {
    "use strict";
    var t = {}.hasOwnProperty;
    function o() {
      for (var r2 = [], e2 = 0; e2 < arguments.length; e2++) {
        var i2 = arguments[e2];
        if (i2) {
          var l = typeof i2;
          if ("string" === l || "number" === l) r2.push(i2);
          else if (Array.isArray(i2) && i2.length) {
            var d = o.apply(null, i2);
            d && r2.push(d);
          } else if ("object" === l) for (var a in i2) t.call(i2, a) && i2[a] && r2.push(a);
        }
      }
      return r2.join(" ");
    }
    r.exports ? (o.default = o, r.exports = o) : void 0 === (i = function() {
      return o;
    }.apply(e, [])) || (r.exports = i);
  })();
}, 52775(r, e, i) {
  "use strict";
  i.d(e, { A: () => a });
  var t = i(30050), o = i.n(t), l = i(77259), d = i.n(l)()(o());
  d.push([r.id, "[data-theme=light]:dir(ltr){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(ltr){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(ltr){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(ltr){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(ltr){border-left-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(ltr){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(ltr){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(ltr){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(ltr){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(ltr){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(ltr){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(ltr){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(ltr){--ui-lib-button-default-color-border:var(--_0-he-k)}[data-theme=light]:dir(rtl){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(rtl){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(rtl){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(rtl){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(rtl){border-right-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(rtl){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(rtl){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(rtl){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(rtl){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(rtl){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(rtl){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(rtl){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(rtl){--ui-lib-button-default-color-border:var(--_0-he-k)}", ""]);
  const a = d;
}, 25241(r, e, i) {
  "use strict";
  i.d(e, { A: () => a });
  var t = i(30050), o = i.n(t), l = i(77259), d = i.n(l)()(o());
  d.push([r.id, '.box-2jxSSn_q:dir(ltr){background-color:var(--color-cold-gray-750);border-radius:8px;box-shadow:0 2px 4px 0 var(--color-other-shadow-primary-neutral-extra-heavy);color:var(--color-white);display:flex;gap:8px;min-height:40px;overflow-wrap:anywhere;padding:0 8px;width:fit-content;--ui-lib-divider-color:var(--color-cold-gray-600);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.ensSlot-22EF_X5r:dir(ltr),.middleSlot-1K3amE20:dir(ltr){align-items:center;display:flex;justify-content:center;padding:6px 0}.middleSlot-1K3amE20:dir(ltr){flex:1;min-width:0}.ensSlot-22EF_X5r:dir(ltr){flex-grow:0}.stretch-kmY0kVcW:dir(ltr){align-items:stretch;box-sizing:border-box;width:100%}.box-2jxSSn_q:dir(rtl){background-color:var(--color-cold-gray-750);border-radius:8px;box-shadow:0 2px 4px 0 var(--color-other-shadow-primary-neutral-extra-heavy);color:var(--color-white);display:flex;gap:8px;min-height:40px;overflow-wrap:anywhere;padding:0 8px;width:fit-content;--ui-lib-divider-color:var(--color-cold-gray-600);font-family:-apple-system,BlinkMacSystemFont,Trebuchet MS,Roboto,Ubuntu,sans-serif;font-feature-settings:"tnum" on,"lnum" on;font-style:normal;--ui-lib-typography-font-size:14px;font-size:var(--ui-lib-typography-font-size);font-weight:400;--ui-lib-typography-line-height:18px;line-height:var(--ui-lib-typography-line-height)}.ensSlot-22EF_X5r:dir(rtl),.middleSlot-1K3amE20:dir(rtl){align-items:center;display:flex;justify-content:center;padding:6px 0}.middleSlot-1K3amE20:dir(rtl){flex:1;min-width:0}.ensSlot-22EF_X5r:dir(rtl){flex-grow:0}.stretch-kmY0kVcW:dir(rtl){align-items:stretch;box-sizing:border-box;width:100%}', ""]);
  const a = d;
}, 7871(r, e, i) {
  "use strict";
  i.d(e, { A: () => a });
  var t = i(30050), o = i.n(t), l = i(77259), d = i.n(l)()(o());
  d.push([r.id, ".zoom-toast {\n	padding: 0 4px;\n}\n", ""]);
  const a = d;
}, 47338(r, e, i) {
  "use strict";
  i.r(e), i.d(e, { default: () => z });
  var t, o = i(79474), l = i(62020), d = i(3714), a = i(22259);
  !(function(r2) {
    r2.Ask = "ask", r2.CheckOnly = "check-only";
  })(t || (t = {})), i(16309), i(75739), i(7750);
  var n = i(72539), s = i.n(n), c = i(48560), h = i.n(c), u = i(57148), g = i.n(u), p = i(60251), v = i.n(p), b = i(81263), y = i.n(b), f = i(50892), m = i.n(f), x = i(7871), w = {};
  w.styleTagTransform = m(), w.setAttributes = v(), w.insert = g().bind(null, "head"), w.domAPI = h(), w.insertStyleElement = y(), s()(x.A, w), x.A && x.A.locals && x.A.locals;
  const z = () => {
    const [r2, e2] = (0, o.useState)(1), { t: i2 } = (0, l.Bd)();
    return (function(r3, e3, i3 = []) {
      (0, o.useEffect)((() => {
        if (!r3) return;
        let i4 = r3.subscribe(e3);
        const t2 = () => {
          i4?.unsubscribe(), i4 = null;
        };
        return window.addEventListener("beforeunload", t2), () => {
          window.removeEventListener("beforeunload", t2), t2();
        };
      }), i3);
    })(a.f.provideProxy("tvd:window-service").zoomChange, e2), o.createElement(d.q, null, o.createElement("div", { className: "zoom-toast" }, `${i2("Zoom")} ${Math.round(100 * r2)}%`));
  };
}, 68671(r, e, i) {
  "use strict";
  i.d(e, { v: () => l });
  var t = i(87574), o = i(87894);
  const l = async (r2) => {
    o.A.language !== r2 && await t.Ay.changeLanguage(r2);
  };
}, 59954(r, e, i) {
  "use strict";
  i.d(e, { W: () => t });
  const t = "tvd:locale-service";
}, 16309(r, e, i) {
  "use strict";
  i.d(e, { eq: () => u });
  var t = i(84157), o = i(22259), l = i(7750), d = i(78449), a = i(87894), n = i(68671), s = i(59954);
  const c = void 0 !== t.ipcMain;
  function h(r2, e2) {
    r2.setAttribute("dir", e2 ? "rtl" : "ltr");
  }
  function u(r2) {
    r2 && "" === r2.dir && h(r2, (0, d.HL)(a.A.language)), (function(r3) {
      let e2;
      e2 = c ? o.f.provide(s.W).localeChange.subscribe(r3) : o.f.provideProxy(s.W).localeChange.subscribe(r3);
      const i2 = () => {
        e2?.unsubscribe(), e2 = void 0, window.removeEventListener("beforeunload", i2);
      };
      "undefined" != typeof window && window.addEventListener("beforeunload", i2);
    })(((e2) => {
      "" !== e2 && ((0, n.v)(e2).catch(((r3) => {
        (0, l.yg)().error("setupI18nLocaleHandler(): changeLocale() error", r3);
      })), r2 && h(r2, (0, d.HL)(e2)));
    }));
  }
} }]);
