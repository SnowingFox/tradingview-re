"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[8775, 9948], { 18865(r, i, e) {
  e.d(i, { J: () => _ });
  var t = e(79474), a = e(14487), o = e.n(a), n = e(1832);
  const d = JSON.parse('{"nav-button":"nav-button-2cN30JEa","link":"link-2aUaONPo","background":"background-2YFDQd-u","icon":"icon-1pH5g1sP","flip-icon":"flip-icon-1XsSJqRE","size-large":"size-large-5U5F1CcL","preserve-paddings":"preserve-paddings-J2f9hENl","size-medium":"size-medium-L7GVV67S","size-small":"size-small-1dZzWsrT","size-xsmall":"size-xsmall-KI8BVtZT","size-xxsmall":"size-xxsmall-2F3lw9V2","visually-hidden":"visually-hidden-22sFdlHz"}');
  var l = e(72539), s = e.n(l), u = e(48560), c = e.n(u), b = e(57148), g = e.n(b), p = e(60251), v = e.n(p), f = e(81263), h = e.n(f), x = e(50892), m = e.n(x), w = e(41463), k = {};
  function y(r2) {
    const { size: i2 = "large", preservePaddings: e2, isLink: t2, flipIconOnRtl: a2, className: n2 } = r2;
    return o()(d["nav-button"], d[`size-${i2}`], e2 && d["preserve-paddings"], a2 && d["flip-icon"], t2 && d.link, n2);
  }
  function z(r2) {
    const { children: i2, icon: e2 } = r2;
    return t.createElement(t.Fragment, null, t.createElement("span", { className: d.background }), t.createElement(n.I, { icon: e2, className: d.icon, "aria-hidden": true }), i2 && t.createElement("span", { className: d["visually-hidden"] }, i2));
  }
  k.styleTagTransform = m(), k.setAttributes = v(), k.insert = g().bind(null, "head"), k.domAPI = c(), k.insertStyleElement = h(), s()(w.A, k), w.A && w.A.locals && w.A.locals;
  const L = (0, t.forwardRef)(((r2, i2) => {
    const { icon: e2, type: a2 = "button", preservePaddings: o2, flipIconOnRtl: n2, size: d2, "aria-label": l2, ...s2 } = r2;
    return t.createElement("button", { ...s2, className: y({ ...r2, children: l2 }), ref: i2, type: a2 }, t.createElement(z, { icon: e2 }, l2));
  }));
  L.displayName = "NavButton";
  var F = e(35047), E = e(68177);
  function N(r2 = "large") {
    switch (r2) {
      case "large":
        return '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 21 21m0-21-21 21" stroke="currentColor" stroke-width="1.2"/></svg>';
      case "medium":
      default:
        return '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 15 15m0-15-15 15" stroke="currentColor" stroke-width="1.2"/></svg>';
      case "small":
        return '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 11 11m0-11-11 11" stroke="currentColor" stroke-width="1.2"/></svg>';
      case "xsmall":
        return '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 9 9m0-9-9 9" stroke="currentColor" stroke-width="1.2"/></svg>';
      case "xxsmall":
        return '<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="m1.5 1.5 7 7m0-7-7 7" stroke="currentColor" stroke-width="1.2"/></svg>';
    }
  }
  (0, t.forwardRef)(((r2, i2) => {
    const { icon: e2, renderComponent: a2, "aria-label": o2, ...n2 } = r2, d2 = a2 ?? F.o;
    return t.createElement(d2, { ...n2, className: y({ ...r2, children: o2, isLink: true }), reference: (0, E.P)(i2) }, t.createElement(z, { icon: e2 }, o2));
  })).displayName = "NavAnchorButton";
  const _ = t.forwardRef(((r2, i2) => t.createElement(L, { ...r2, ref: i2, icon: N(r2.size) })));
}, 35047(r, i, e) {
  e.d(i, { o: () => o });
  var t = e(79474);
  function a(r2) {
    const { reference: i2, ...e2 } = r2;
    return { ...e2, ref: i2 };
  }
  function o(r2) {
    return t.createElement("a", { ...a(r2) });
  }
  t.PureComponent;
}, 70815(r, i, e) {
  e.d(i, { c: () => d });
  var t = e(79474), a = e(14487), o = e.n(a), n = e(72341);
  function d(r2) {
    const { className: i2, type: e2 = "secondary", size: a2 = "small", orientation: d2 = "horizontal" } = r2, l = o()(i2, n.divider, n[`size-${a2}`], n[`type-${e2}`], n[`orientation-${d2}`]);
    return t.createElement("hr", { className: l, "aria-orientation": d2 });
  }
  e(60001);
}, 45922(r, i, e) {
  e.d(i, { c: () => t.c });
  var t = e(70815);
}, 60759(r, i, e) {
  e.d(i, { I: () => a });
  var t = e(79474);
  const a = t.forwardRef(((r2, i2) => {
    const { icon: e2 = "", title: a2, ariaLabel: o, ariaLabelledby: n, ariaHidden: d, ...l } = r2, s = !!(a2 || o || n);
    return t.createElement("span", { role: "img", ...l, ref: i2, "aria-label": o, "aria-labelledby": n, "aria-hidden": d || !s, title: a2, dangerouslySetInnerHTML: { __html: e2 } });
  }));
}, 1832(r, i, e) {
  e.d(i, { I: () => t.I });
  var t = e(60759);
}, 17527(r, i, e) {
  function t(r2) {
    return o(r2, n);
  }
  function a(r2) {
    return o(r2, d);
  }
  function o(r2, i2) {
    const e2 = Object.entries(r2).filter(i2), t2 = {};
    for (const [r3, i3] of e2) t2[r3] = i3;
    return t2;
  }
  function n(r2) {
    const [i2, e2] = r2;
    return 0 === i2.indexOf("data-") && "string" == typeof e2;
  }
  function d(r2) {
    return 0 === r2[0].indexOf("aria-");
  }
  e.d(i, { En: () => a, J9: () => o, Xc: () => n, _o: () => d, r8: () => t });
}, 68177(r, i, e) {
  function t(r2) {
    return (i2) => {
      r2.forEach(((r3) => {
        "function" == typeof r3 ? r3(i2) : null != r3 && (r3.current = i2);
      }));
    };
  }
  function a(r2) {
    return t([r2]);
  }
  e.d(i, { P: () => a, g: () => t });
}, 41463(r, i, e) {
  e.d(i, { A: () => d });
  var t = e(30050), a = e.n(t), o = e(77259), n = e.n(o)()(a());
  n.push([r.id, '[data-theme=light]:dir(ltr){--_0-WL2i:var(--color-cold-gray-900);--_1-WL2i:var(--color-cold-gray-100);--_2-WL2i:var(--color-cold-gray-900);--_3-WL2i:var(--color-cold-gray-150);--_4-WL2i:var(--color-cold-gray-300)}[data-theme=dark]:dir(ltr){--_0-WL2i:var(--color-white);--_1-WL2i:var(--color-cold-gray-800);--_2-WL2i:var(--color-white);--_3-WL2i:var(--color-cold-gray-750);--_4-WL2i:var(--color-cold-gray-600)}.nav-button-2cN30JEa:dir(ltr){border:none;box-sizing:initial;display:flex;outline:none;padding:0;position:relative;--ui-lib-nav-button-default-color-content:var(--color-text-primary);--ui-lib-nav-button-default-color-bg:#0000;background:#0000;color:var(--ui-lib-nav-button-color-content,var(--ui-lib-nav-button-default-color-content))}.nav-button-2cN30JEa.link-2aUaONPo:dir(ltr){cursor:pointer}@media (any-hover:hover){.nav-button-2cN30JEa:hover:dir(ltr){--ui-lib-nav-button-default-color-content:var(--_0-WL2i);--ui-lib-nav-button-default-color-bg:var(--_1-WL2i)}}.nav-button-2cN30JEa:active:dir(ltr){--ui-lib-nav-button-default-color-content:var(--_2-WL2i);--ui-lib-nav-button-default-color-bg:var(--_3-WL2i)}.nav-button-2cN30JEa:focus .background-2YFDQd-u:dir(ltr):after{display:block}.nav-button-2cN30JEa:focus-visible .background-2YFDQd-u:dir(ltr):after{display:block}.nav-button-2cN30JEa:focus:not(:focus-visible) .background-2YFDQd-u:dir(ltr):after{display:none}.nav-button-2cN30JEa:disabled:dir(ltr),.nav-button-2cN30JEa[aria-disabled=true]:dir(ltr){--ui-lib-nav-button-default-color-content:var(--_4-WL2i);cursor:default}.nav-button-2cN30JEa:disabled .background-2YFDQd-u:dir(ltr),.nav-button-2cN30JEa[aria-disabled=true] .background-2YFDQd-u:dir(ltr){display:none}.background-2YFDQd-u:dir(ltr){--ui-lib-nav-button-color-outline-default:var(--color-tv-blue-500);background:var(--ui-lib-nav-button-color-bg,var(--ui-lib-nav-button-default-color-bg));display:block}.background-2YFDQd-u:dir(ltr){outline:none;overflow:visible;position:absolute}.background-2YFDQd-u:focus:dir(ltr){outline:none}.background-2YFDQd-u:focus-visible:dir(ltr){outline:none}.background-2YFDQd-u:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);left:-4px;pointer-events:none;position:absolute;top:-4px;width:calc(100% + 8px);z-index:1}.background-2YFDQd-u:dir(ltr):after{border-color:var(--ui-lib-nav-button-color-outline,var(--ui-lib-nav-button-color-outline-default))}.icon-1pH5g1sP:dir(ltr){z-index:0}.icon-1pH5g1sP svg:dir(ltr),.icon-1pH5g1sP:dir(ltr){display:flex}.flip-icon-1XsSJqRE svg:dir(ltr),.flip-icon-1XsSJqRE:dir(ltr){transform:rotate(90deg)}.size-large-5U5F1CcL:dir(ltr){height:24px;width:24px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px;--ui-lib-navButton-border-radius:8px}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl:dir(ltr){padding:8px}.size-large-5U5F1CcL .background-2YFDQd-u:dir(ltr){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 16px);left:-8px;top:-8px;width:calc(100% + 16px)}.size-large-5U5F1CcL .background-2YFDQd-u:dir(ltr):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-medium-L7GVV67S:dir(ltr){height:18px;width:18px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px;--ui-lib-navButton-border-radius:8px}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl:dir(ltr){padding:8px}.size-medium-L7GVV67S .background-2YFDQd-u:dir(ltr){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 16px);left:-8px;top:-8px;width:calc(100% + 16px)}.size-medium-L7GVV67S .background-2YFDQd-u:dir(ltr):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-small-1dZzWsrT:dir(ltr){height:14px;width:14px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px;--ui-lib-navButton-border-radius:6px}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl:dir(ltr){padding:8px}.size-small-1dZzWsrT .background-2YFDQd-u:dir(ltr){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 16px);left:-8px;top:-8px;width:calc(100% + 16px)}.size-small-1dZzWsrT .background-2YFDQd-u:dir(ltr):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-xsmall-KI8BVtZT:dir(ltr){height:12px;width:12px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px;--ui-lib-navButton-border-radius:4px}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl:dir(ltr){padding:4px}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(ltr){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 8px);left:-4px;top:-4px;width:calc(100% + 8px)}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(ltr):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.size-xxsmall-2F3lw9V2:dir(ltr){height:10px;width:10px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px;--ui-lib-navButton-border-radius:4px}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl:dir(ltr){padding:4px}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(ltr){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 8px);left:-4px;top:-4px;width:calc(100% + 8px)}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(ltr):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(ltr){height:100%;left:0;top:0;width:100%}.visually-hidden-22sFdlHz:dir(ltr){border:0;height:1px;margin:-1px;padding:0;position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}[data-theme=light]:dir(rtl){--_0-WL2i:var(--color-cold-gray-900);--_1-WL2i:var(--color-cold-gray-100);--_2-WL2i:var(--color-cold-gray-900);--_3-WL2i:var(--color-cold-gray-150);--_4-WL2i:var(--color-cold-gray-300)}[data-theme=dark]:dir(rtl){--_0-WL2i:var(--color-white);--_1-WL2i:var(--color-cold-gray-800);--_2-WL2i:var(--color-white);--_3-WL2i:var(--color-cold-gray-750);--_4-WL2i:var(--color-cold-gray-600)}.nav-button-2cN30JEa:dir(rtl){border:none;box-sizing:initial;display:flex;outline:none;padding:0;position:relative;--ui-lib-nav-button-default-color-content:var(--color-text-primary);--ui-lib-nav-button-default-color-bg:#0000;background:#0000;color:var(--ui-lib-nav-button-color-content,var(--ui-lib-nav-button-default-color-content))}.nav-button-2cN30JEa.link-2aUaONPo:dir(rtl){cursor:pointer}@media (any-hover:hover){.nav-button-2cN30JEa:hover:dir(rtl){--ui-lib-nav-button-default-color-content:var(--_0-WL2i);--ui-lib-nav-button-default-color-bg:var(--_1-WL2i)}}.nav-button-2cN30JEa:active:dir(rtl){--ui-lib-nav-button-default-color-content:var(--_2-WL2i);--ui-lib-nav-button-default-color-bg:var(--_3-WL2i)}.nav-button-2cN30JEa:focus .background-2YFDQd-u:dir(rtl):after{display:block}.nav-button-2cN30JEa:focus-visible .background-2YFDQd-u:dir(rtl):after{display:block}.nav-button-2cN30JEa:focus:not(:focus-visible) .background-2YFDQd-u:dir(rtl):after{display:none}.nav-button-2cN30JEa:disabled:dir(rtl),.nav-button-2cN30JEa[aria-disabled=true]:dir(rtl){--ui-lib-nav-button-default-color-content:var(--_4-WL2i);cursor:default}.nav-button-2cN30JEa:disabled .background-2YFDQd-u:dir(rtl),.nav-button-2cN30JEa[aria-disabled=true] .background-2YFDQd-u:dir(rtl){display:none}.background-2YFDQd-u:dir(rtl){--ui-lib-nav-button-color-outline-default:var(--color-tv-blue-500);background:var(--ui-lib-nav-button-color-bg,var(--ui-lib-nav-button-default-color-bg));display:block}.background-2YFDQd-u:dir(rtl){outline:none;overflow:visible;position:absolute}.background-2YFDQd-u:focus:dir(rtl){outline:none}.background-2YFDQd-u:focus-visible:dir(rtl){outline:none}.background-2YFDQd-u:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 8px);pointer-events:none;position:absolute;right:-4px;top:-4px;width:calc(100% + 8px);z-index:1}.background-2YFDQd-u:dir(rtl):after{border-color:var(--ui-lib-nav-button-color-outline,var(--ui-lib-nav-button-color-outline-default))}.icon-1pH5g1sP:dir(rtl){z-index:0}.icon-1pH5g1sP svg:dir(rtl),.icon-1pH5g1sP:dir(rtl){display:flex}.flip-icon-1XsSJqRE svg:dir(rtl),.flip-icon-1XsSJqRE:dir(rtl){transform:rotate(-90deg)}.size-large-5U5F1CcL:dir(rtl){height:24px;width:24px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px;--ui-lib-navButton-border-radius:8px}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl:dir(rtl){padding:8px}.size-large-5U5F1CcL .background-2YFDQd-u:dir(rtl){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 16px);right:-8px;top:-8px;width:calc(100% + 16px)}.size-large-5U5F1CcL .background-2YFDQd-u:dir(rtl):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-large-5U5F1CcL.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-medium-L7GVV67S:dir(rtl){height:18px;width:18px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px;--ui-lib-navButton-border-radius:8px}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl:dir(rtl){padding:8px}.size-medium-L7GVV67S .background-2YFDQd-u:dir(rtl){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 16px);right:-8px;top:-8px;width:calc(100% + 16px)}.size-medium-L7GVV67S .background-2YFDQd-u:dir(rtl):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-medium-L7GVV67S.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-small-1dZzWsrT:dir(rtl){height:14px;width:14px;--ui-lib-nav-button-basic-offset:8px;--ui-lib-nav-button-safe-offset:12px;--ui-lib-navButton-border-radius:6px}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl:dir(rtl){padding:8px}.size-small-1dZzWsrT .background-2YFDQd-u:dir(rtl){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 16px);right:-8px;top:-8px;width:calc(100% + 16px)}.size-small-1dZzWsrT .background-2YFDQd-u:dir(rtl):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-small-1dZzWsrT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-xsmall-KI8BVtZT:dir(rtl){height:12px;width:12px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px;--ui-lib-navButton-border-radius:4px}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl:dir(rtl){padding:4px}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(rtl){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 8px);right:-4px;top:-4px;width:calc(100% + 8px)}.size-xsmall-KI8BVtZT .background-2YFDQd-u:dir(rtl):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-xsmall-KI8BVtZT.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.size-xxsmall-2F3lw9V2:dir(rtl){height:10px;width:10px;--ui-lib-nav-button-basic-offset:4px;--ui-lib-nav-button-safe-offset:8px;--ui-lib-navButton-border-radius:4px}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl:dir(rtl){padding:4px}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(rtl){border-radius:var(--ui-lib-navButton-border-radius);height:calc(100% + 8px);right:-4px;top:-4px;width:calc(100% + 8px)}.size-xxsmall-2F3lw9V2 .background-2YFDQd-u:dir(rtl):after{border-radius:calc(var(--ui-lib-navButton-border-radius) + 4px)}.size-xxsmall-2F3lw9V2.preserve-paddings-J2f9hENl .background-2YFDQd-u:dir(rtl){height:100%;right:0;top:0;width:100%}.visually-hidden-22sFdlHz:dir(rtl){border:0;height:1px;margin:-1px;padding:0;position:absolute;width:1px;clip:rect(0 0 0 0);overflow:hidden}', ""]);
  const d = n;
}, 52775(r, i, e) {
  e.d(i, { A: () => d });
  var t = e(30050), a = e.n(t), o = e(77259), n = e.n(o)()(a());
  n.push([r.id, "[data-theme=light]:dir(ltr){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(ltr){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(ltr){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(ltr){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(ltr){border-left-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(ltr){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(ltr){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(ltr){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(ltr){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(ltr){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(ltr){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(ltr){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(ltr){--ui-lib-button-default-color-border:var(--_0-he-k)}[data-theme=light]:dir(rtl){--_0-he-k:var(--color-cold-gray-100);--_1-he-k:var(--color-cold-gray-150)}[data-theme=dark]:dir(rtl){--_0-he-k:var(--color-cold-gray-800);--_1-he-k:var(--color-cold-gray-700)}.divider-2LgGf736:dir(rtl){border:none;border-color:var(--ui-lib-divider-color,var(--ui-lib-button-default-color-border));margin:0}.divider-2LgGf736.orientation-horizontal-1GrzG6F6:dir(rtl){border-top-style:solid;width:100%}.divider-2LgGf736.orientation-vertical-1ek93l-2:dir(rtl){border-right-style:solid;display:inline-block;height:100%;min-height:2ch;vertical-align:sub}.divider-2LgGf736.size-xsmall-3SrVpGiX:dir(rtl){border-width:1px}.divider-2LgGf736.size-small-22sZwy9o:dir(rtl){border-width:2px}.divider-2LgGf736.size-medium-2SIV6loN:dir(rtl){border-width:3px}.divider-2LgGf736.size-large-3T6RtD4L:dir(rtl){border-width:4px}.divider-2LgGf736.size-xlarge-2-9FldHP:dir(rtl){border-width:5px}.divider-2LgGf736.size-xxlarge-3w4ex5dj:dir(rtl){border-width:6px}.divider-2LgGf736.type-primary-iy8PH_s4:dir(rtl){--ui-lib-button-default-color-border:var(--_1-he-k)}.divider-2LgGf736.type-secondary-4Lb6MQdQ:dir(rtl){--ui-lib-button-default-color-border:var(--_0-he-k)}", ""]);
  const d = n;
}, 41615(r, i, e) {
  !(function r2() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r2);
    } catch (r3) {
      console.error(r3);
    }
  })(), r.exports = e(11929);
}, 79474(r, i, e) {
  r.exports = e(22749);
}, 60001(r, i, e) {
  var t = e(72539), a = e.n(t), o = e(48560), n = e.n(o), d = e(57148), l = e.n(d), s = e(60251), u = e.n(s), c = e(81263), b = e.n(c), g = e(50892), p = e.n(g), v = e(52775), f = {};
  f.styleTagTransform = p(), f.setAttributes = u(), f.insert = l().bind(null, "head"), f.domAPI = n(), f.insertStyleElement = b(), a()(v.A, f), v.A && v.A.locals && v.A.locals;
}, 31544(r, i, e) {
  e.d(i, { Cp: () => l, J0: () => c, J5: () => p, NA: () => u, r: () => s });
  var t = e(90066), a = e(11555), o = e(3103), n = e(31784), d = e(68752);
  function l(r2, i2) {
    return (0, a.o5)().captureException(r2, (0, d.li)(i2));
  }
  function s(r2, i2) {
    return (0, a.o5)().captureEvent(r2, i2);
  }
  function u(r2, i2) {
    (0, a.rm)().setTag(r2, i2);
  }
  function c(r2) {
    const i2 = (0, a.KU)(), e2 = (0, a.rm)(), d2 = (0, a.o5)(), { release: l2, environment: s2 = t.U } = i2 && i2.getOptions() || {}, { userAgent: u2 } = n.O.navigator || {}, c2 = (0, o.fj)({ release: l2, environment: s2, user: d2.getUser() || e2.getUser(), ...u2 && { userAgent: u2 }, ...r2 }), g2 = e2.getSession();
    return g2 && "ok" === g2.status && (0, o.qO)(g2, { status: "exited" }), b(), e2.setSession(c2), d2.setSession(c2), c2;
  }
  function b() {
    const r2 = (0, a.rm)(), i2 = (0, a.o5)(), e2 = i2.getSession() || r2.getSession();
    e2 && (0, o.Vu)(e2), g(), r2.setSession(), i2.setSession();
  }
  function g() {
    const r2 = (0, a.rm)(), i2 = (0, a.o5)(), e2 = (0, a.KU)(), t2 = i2.getSession() || r2.getSession();
    t2 && e2 && e2.captureSession(t2);
  }
  function p(r2 = false) {
    r2 ? b() : g();
  }
}, 48927(r, i, e) {
  e.d(i, { NA: () => t.NA, Ts: () => o.T, ZQ: () => a.Z });
  var t = e(31544), a = e(26637), o = (e(11314), e(73042), e(23100));
  e(67602), e(86049);
}, 62020(r, i, e) {
  e.d(i, { r9: () => g.r, Bd: () => t.B, CI: () => b }), e(3738), e(13434);
  var t = e(45460), a = e(52531), o = e(41501), n = e(46413), d = e(79474), l = e(99633), s = ["forwardedRef"];
  function u(r2, i2) {
    var e2 = Object.keys(r2);
    if (Object.getOwnPropertySymbols) {
      var t2 = Object.getOwnPropertySymbols(r2);
      i2 && (t2 = t2.filter((function(i3) {
        return Object.getOwnPropertyDescriptor(r2, i3).enumerable;
      }))), e2.push.apply(e2, t2);
    }
    return e2;
  }
  function c(r2) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var e2 = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? u(Object(e2), true).forEach((function(i3) {
        a(r2, i3, e2[i3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(e2)) : u(Object(e2)).forEach((function(i3) {
        Object.defineProperty(r2, i3, Object.getOwnPropertyDescriptor(e2, i3));
      }));
    }
    return r2;
  }
  function b(r2) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function(e2) {
      function a2(a3) {
        var l2 = a3.forwardedRef, u2 = n(a3, s), b2 = (0, t.B)(r2, c(c({}, u2), {}, { keyPrefix: i2.keyPrefix })), g2 = o(b2, 3), p = g2[0], v = g2[1], f = g2[2], h = c(c({}, u2), {}, { t: p, i18n: v, tReady: f });
        return i2.withRef && l2 ? h.ref = l2 : !i2.withRef && l2 && (h.forwardedRef = l2), (0, d.createElement)(e2, h);
      }
      return a2.displayName = "withI18nextTranslation(".concat((0, l.Mn)(e2), ")"), a2.WrappedComponent = e2, i2.withRef ? (0, d.forwardRef)((function(r3, i3) {
        return (0, d.createElement)(a2, Object.assign({}, r3, { forwardedRef: i3 }));
      })) : a2;
    };
  }
  e(50115), e(33918), e(89772), e(77895);
  var g = e(87030);
  e(49255), e(38955);
}, 99633(r, i, e) {
  function t() {
    if (console && console.warn) {
      for (var r2, i2 = arguments.length, e2 = new Array(i2), t2 = 0; t2 < i2; t2++) e2[t2] = arguments[t2];
      "string" == typeof e2[0] && (e2[0] = "react-i18next:: ".concat(e2[0])), (r2 = console).warn.apply(r2, e2);
    }
  }
  e.d(i, { GA: () => l, Mn: () => u, NM: () => s, dM: () => d, mc: () => o });
  var a = {};
  function o() {
    for (var r2 = arguments.length, i2 = new Array(r2), e2 = 0; e2 < r2; e2++) i2[e2] = arguments[e2];
    "string" == typeof i2[0] && a[i2[0]] || ("string" == typeof i2[0] && (a[i2[0]] = /* @__PURE__ */ new Date()), t.apply(void 0, i2));
  }
  var n = function(r2, i2) {
    return function() {
      r2.isInitialized ? i2() : r2.on("initialized", (function e2() {
        setTimeout((function() {
          r2.off("initialized", e2);
        }), 0), i2();
      }));
    };
  };
  function d(r2, i2, e2) {
    r2.loadNamespaces(i2, n(r2, e2));
  }
  function l(r2, i2, e2, t2) {
    "string" == typeof e2 && (e2 = [e2]), e2.forEach((function(i3) {
      r2.options.ns.indexOf(i3) < 0 && r2.options.ns.push(i3);
    })), r2.loadLanguages(i2, n(r2, t2));
  }
  function s(r2, i2) {
    var e2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return i2.languages && i2.languages.length ? void 0 !== i2.options.ignoreJSONStructure ? i2.hasLoadedNamespace(r2, { lng: e2.lng, precheck: function(i3, t2) {
      if (e2.bindI18n && e2.bindI18n.indexOf("languageChanging") > -1 && i3.services.backendConnector.backend && i3.isLanguageChangingTo && !t2(i3.isLanguageChangingTo, r2)) return false;
    } }) : (function(r3, i3) {
      var e3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, t2 = i3.languages[0], a2 = !!i3.options && i3.options.fallbackLng, o2 = i3.languages[i3.languages.length - 1];
      if ("cimode" === t2.toLowerCase()) return true;
      var n2 = function(r4, e4) {
        var t3 = i3.services.backendConnector.state["".concat(r4, "|").concat(e4)];
        return -1 === t3 || 2 === t3;
      };
      return !(e3.bindI18n && e3.bindI18n.indexOf("languageChanging") > -1 && i3.services.backendConnector.backend && i3.isLanguageChangingTo && !n2(i3.isLanguageChangingTo, r3) || !i3.hasResourceBundle(t2, r3) && i3.services.backendConnector.backend && (!i3.options.resources || i3.options.partialBundledLanguages) && (!n2(t2, r3) || a2 && !n2(o2, r3)));
    })(r2, i2, e2) : (o("i18n.languages were undefined or empty", i2.languages), true);
  }
  function u(r2) {
    return r2.displayName || r2.name || ("string" == typeof r2 && r2.length > 0 ? r2 : "Unknown");
  }
}, 72341(r) {
  r.exports = JSON.parse('{"divider":"divider-2LgGf736","orientation-horizontal":"orientation-horizontal-1GrzG6F6","orientation-vertical":"orientation-vertical-1ek93l-2","size-xsmall":"size-xsmall-3SrVpGiX","size-small":"size-small-22sZwy9o","size-medium":"size-medium-2SIV6loN","size-large":"size-large-3T6RtD4L","size-xlarge":"size-xlarge-2-9FldHP","size-xxlarge":"size-xxlarge-3w4ex5dj","type-primary":"type-primary-iy8PH_s4","type-secondary":"type-secondary-4Lb6MQdQ"}');
} }]);
