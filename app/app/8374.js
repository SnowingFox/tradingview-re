"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[8374], { 8382(t, e, n) {
  n.d(e, { A: () => I });
  var o = n(30050), r = n.n(o), i = n(77259), a = n.n(i), d = n(97378), s = n.n(d), m = new URL(n(21979), n.b), l = new URL(n(20305), n.b), h = new URL(n(2933), n.b), g = new URL(n(59379), n.b), p = a()(r()), c = s()(m), u = s()(l), b = s()(h), v = s()(g);
  p.push([t.id, '* {\n	--theme-option-border-radius-small: 6px;\n	--theme-option-border-radius-medium: 8px;\n	--theme-option-border-radius-large: 9px;\n	--theme-option-border-radius-relative: 8px;\n}\n\n[data-theme="dark"] {\n	--theme-option-border-color: var(--color-cold-gray-650); /* base ui-lib palette color */\n}\n\n[data-theme="light"] {\n	--theme-option-border-color: var(--color-cold-gray-150); /* base ui-lib palette color */\n}\n\n.theme-option {\n	display: flex;\n	flex-direction: column;\n	background-color: transparent;\n	color: var(--color-content-primary-neutral-bold);\n	border: none;\n	padding: 0;\n\n	& > .theme-option-icon {\n		box-sizing: border-box;\n\n		&:not(.system) {\n			background-size: cover;\n			background-repeat: no-repeat;\n			outline-offset: -1px;\n		}\n	}\n\n	& > .theme-option-icon.system {\n		display: flex;\n		flex-direction: row;\n		align-items: center;\n\n		& > .dark,\n		& > .light {\n			width: calc(100% / 2);\n			height: 100%;\n			box-sizing: border-box;\n			background-size: cover;\n			background-repeat: no-repeat;\n			outline-offset: -1px;\n		}\n\n		& > .dark {\n			background-image: url(' + c + ");\n			outline: 1px solid var(--theme-option-border-color);\n		}\n\n		& > .light {\n			background-image: url(" + u + ");\n			outline: 1px solid var(--theme-option-border-color);\n		}\n	}\n\n	& > .theme-option-icon.dark {\n		background-image: url(" + b + ");\n		outline: 1px solid var(--theme-option-border-color);\n	}\n\n	& > .theme-option-icon.light {\n		background-image: url(" + v + ");\n		outline: 1px solid var(--theme-option-border-color);\n	}\n}\n\n/* theme option small size */\n.theme-option.small {\n	gap: 3px;\n\n	& > .theme-option-icon {\n		width: 70px;\n		height: 42px;\n		border-radius: var(--theme-option-border-radius-small);\n	}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.small > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.small > .theme-option-icon.system > .light {\n	border-top-left-radius: var(--theme-option-border-radius-small);\n	border-bottom-left-radius: var(--theme-option-border-radius-small);\n}\n\n[dir='ltr'] .theme-option.small > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.small > .theme-option-icon.system > .dark {\n	border-top-right-radius: var(--theme-option-border-radius-small);\n	border-bottom-right-radius: var(--theme-option-border-radius-small);\n}\n\n/* theme option medium size */\n.theme-option.medium {\n	gap: 4px;\n\n	& > .theme-option-icon {\n		width: 80px;\n		height: 48px;\n		border-radius: var(--theme-option-border-radius-medium);\n	}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.medium > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.medium > .theme-option-icon.system > .light {\n	border-top-left-radius: var(--theme-option-border-radius-medium);\n	border-bottom-left-radius: var(--theme-option-border-radius-medium);\n}\n\n[dir='ltr'] .theme-option.medium > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.medium > .theme-option-icon.system > .dark {\n	border-top-right-radius: var(--theme-option-border-radius-medium);\n	border-bottom-right-radius: var(--theme-option-border-radius-medium);\n}\n\n/* theme option large size */\n.theme-option.large {\n	gap: 8px;\n\n	& > .theme-option-icon {\n		width: 125px;\n		height: 75px;\n		border-radius: var(--theme-option-border-radius-large);\n	}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.large > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.large > .theme-option-icon.system > .light {\n	border-top-left-radius: var(--theme-option-border-radius-large);\n	border-bottom-left-radius: var(--theme-option-border-radius-large);\n}\n\n[dir='ltr'] .theme-option.large > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.large > .theme-option-icon.system > .dark {\n	border-top-right-radius: var(--theme-option-border-radius-large);\n	border-bottom-right-radius: var(--theme-option-border-radius-large);\n}\n\n/* theme option relative size */\n.theme-option.relative {\n	width: 33%;\n	gap: 4px;\n\n	& > .theme-option-icon {\n		width: 100%;\n		min-width: 70px;\n		height: 100%;\n		min-height: 42px;\n		aspect-ratio: 5 / 3;\n		border-radius: var(--theme-option-border-radius-relative);\n	}\n}\n\n/* such complex styles are used so the border radiuses work correctly in both ltr and rtl */\n[dir='ltr'] .theme-option.relative > .theme-option-icon.system > .dark,\n[dir='rtl'] .theme-option.relative > .theme-option-icon.system > .light {\n	border-top-left-radius: var(--theme-option-border-radius-relative);\n	border-bottom-left-radius: var(--theme-option-border-radius-relative);\n}\n\n[dir='ltr'] .theme-option.relative > .theme-option-icon.system > .light,\n[dir='rtl'] .theme-option.relative > .theme-option-icon.system > .dark {\n	border-top-right-radius: var(--theme-option-border-radius-relative);\n	border-bottom-right-radius: var(--theme-option-border-radius-relative);\n}\n\n.theme-option.active {\n	& > .theme-option-icon {\n		position: relative;\n		outline: 2px solid var(--color-container-fill-primary-neutral-extra-bold);\n		outline-offset: -2px;\n\n		& > .theme-option-icon-active-inner-outline {\n			position: absolute;\n			top: 0;\n			left: 0;\n			width: 100%;\n			height: 100%;\n			outline: 2px solid var(--color-container-fill-tertiary-inverse);\n			outline-offset: -4px;\n		}\n	}\n\n	&.small > .theme-option-icon > .theme-option-icon-active-inner-outline {\n		border-radius: var(--theme-option-border-radius-small);\n	}\n\n	&.medium > .theme-option-icon > .theme-option-icon-active-inner-outline {\n		border-radius: var(--theme-option-border-radius-medium);\n	}\n\n	&.large > .theme-option-icon > .theme-option-icon-active-inner-outline {\n		border-radius: var(--theme-option-border-radius-large);\n	}\n\n	&.relative > .theme-option-icon > .theme-option-icon-active-inner-outline {\n		border-radius: var(--theme-option-border-radius-relative);\n	}\n}\n\n.theme-option:focus-visible {\n	outline: 2px solid var(--color-tv-blue-500); /* base ui-lib palette color */\n	outline-offset: 2px;\n\n	&.small {\n		border-radius: var(--theme-option-border-radius-small);\n	}\n\n	&.medium {\n		border-radius: var(--theme-option-border-radius-medium);\n	}\n\n	&.large {\n		border-radius: var(--theme-option-border-radius-large);\n	}\n}\n\n.no-focus-outline {\n	outline: none;\n}\n", ""]);
  const I = p;
}, 81783(t, e, n) {
  n.d(e, { A: () => d });
  var o = n(30050), r = n.n(o), i = n(77259), a = n.n(i)()(r());
  a.push([t.id, ".theme-picker {\n	width: 100%;\n	display: flex;\n	align-items: center;\n	gap: 12px;\n\n	&.large {\n		gap: 20px;\n	}\n}\n", ""]);
  const d = a;
}, 39150(t, e, n) {
  n.d(e, { e: () => r });
  var o = n(32371);
  const r = (t2) => ({ [o.zO]: t2 || void 0 });
}, 23704(t, e, n) {
  n(79474), n(62020), n(16309);
}, 12329(t, e, n) {
  n.d(e, { J: () => r });
  var o = n(79474);
  function r(t2, e2, n2 = []) {
    (0, o.useEffect)((() => {
      if (!t2) return;
      let n3 = t2.subscribe(e2);
      const o2 = () => {
        n3?.unsubscribe(), n3 = null;
      };
      return window.addEventListener("beforeunload", o2), () => {
        window.removeEventListener("beforeunload", o2), o2();
      };
    }), n2);
  }
}, 3156(t, e, n) {
  n.d(e, { j: () => a });
  var o = n(79474), r = n(75739);
  const i = ["mousedown", "click", "mouseup", "contextmenu"];
  function a(t2, e2, n2, a2 = {}) {
    const { escape: d = false, scroll: s = false, resize: m = false } = a2, l = (0, o.useCallback)((() => {
      n2(false);
    }), []);
    (0, o.useEffect)((() => {
      if (!e2) return;
      const n3 = (e3) => {
        t2.current?.contains(e3.target) || (e3.stopPropagation(), e3.preventDefault(), l());
      }, o2 = (t3) => {
        t3.key === r.N$.Escape && l();
      };
      return i.forEach(((t3) => {
        setTimeout((() => {
          document.addEventListener(t3, n3, true);
        }), 150);
      })), d && document.addEventListener("keydown", o2), s && document.addEventListener("scroll", l), m && window.addEventListener("resize", l), () => {
        i.forEach(((t3) => {
          setTimeout((() => {
            document.removeEventListener(t3, n3, true);
          }), 150);
        })), d && document.removeEventListener("keydown", o2), s && document.removeEventListener("scroll", l), m && window.removeEventListener("resize", l);
      };
    }), [t2, d, l, e2, m, s]);
  }
}, 57857(t, e, n) {
  n(79474), n(62020), n(7750), n(16309), n(75739);
}, 75594(t, e, n) {
  n.d(e, { w: () => T });
  var o = n(79474), r = n(7750), i = n(16309), a = n(35492), d = n(12329), s = n(20369), m = n(39150), l = n(72539), h = n.n(l), g = n(48560), p = n.n(g), c = n(57148), u = n.n(c), b = n(60251), v = n.n(b), I = n(81263), M = n.n(I), y = n(50892), x = n.n(y), A = n(8382), D = {};
  D.styleTagTransform = x(), D.setAttributes = v(), D.insert = u().bind(null, "head"), D.domAPI = p(), D.insertStyleElement = M(), h()(A.A, D), A.A && A.A.locals && A.A.locals;
  const w = /* @__PURE__ */ new Map([["small", "typography-regular-13px"], ["medium", "typography-regular-14px"], ["large", "typography-accent-16px-semibold"]]), z = ({ onClick: t2, theme: e2, isActive: n2, showLabel: r2 = true, size: i2 = "medium", tabIndex: a2 }) => o.createElement("button", { ...(0, m.e)(true), onClick: () => {
    t2(e2.id);
  }, className: `theme-option ${i2} ${n2 ? "active" : ""} ${a2 && a2 < 0 ? "no-focus-outline" : ""}`, tabIndex: a2 }, o.createElement("div", { className: `theme-option-icon ${e2.id}` }, "system" === e2.id && o.createElement(o.Fragment, null, o.createElement("div", { className: "dark" }), o.createElement("div", { className: "light" })), n2 && o.createElement("div", { className: "theme-option-icon-active-inner-outline" })), r2 && o.createElement(s.o, { tag: "span", name: w.get(i2) ?? "typography-regular-14px" }, e2.label));
  var E = n(81783), k = {};
  k.styleTagTransform = x(), k.setAttributes = v(), k.insert = u().bind(null, "head"), k.domAPI = p(), k.insertStyleElement = M(), h()(E.A, k), E.A && E.A.locals && E.A.locals;
  const T = ({ afterThemeIsChangedCb: t2, size: e2 = "medium", tabIndex: n2 }) => {
    const [s2, m2] = (0, o.useState)([]), [l2, h2] = (0, o.useState)("system");
    (0, d.J)((0, a.bQ)().themeChange, h2), (0, d.J)((0, i.MY)().localeChange, (() => {
      (async () => {
        const t3 = await (0, a.bQ)().availableThemes();
        m2(t3);
      })().catch(((t3) => {
        (0, r.yg)().error("<ThemePicker>.localeChangeHandler(): getAvailableThemes() error", t3);
      }));
    }));
    const g2 = (e3) => {
      l2 !== e3 && ((0, a.bQ)().themeChange.next(e3), t2?.()?.catch(((t3) => {
        (0, r.yg)().error("<ThemePicker>.onThemeClick(): afterThemeIsChangedCb() error", t3);
      })));
    };
    return o.createElement("div", { className: `theme-picker ${e2}` }, s2.map(((t3) => o.createElement(z, { key: t3.id, onClick: g2, theme: t3, isActive: l2 === t3.id, showLabel: true, size: e2, tabIndex: n2 }))));
  };
}, 35492(t, e, n) {
  n.d(e, { bQ: () => r });
  var o = n(22259);
  function r() {
    return o.f.provideProxy("tvd:theme-manager-service");
  }
}, 2933(t) {
  t.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg4MHY0OEgwVjBaIiBmaWxsPSIjM0QzRDNEIi8+PHBhdGggZD0iTTggMTJhNCA0IDAgMCAxIDQtNGg2OHY0MEg4VjEyWiIgZmlsbD0iIzFGMUYxRiIvPjxwYXRoIGQ9Ik0xNCAxN2EzIDMgMCAwIDEgMy0zaDEyYTMgMyAwIDAgMSAzIDN2MzFIMTRWMTdabTIxIDBhMyAzIDAgMCAxIDMtM2gxMmEzIDMgMCAwIDEgMyAzdjMxSDM1VjE3Wm0yMSAwYTMgMyAwIDAgMSAzLTNoMTJhMyAzIDAgMCAxIDMgM3YzMUg1NlYxN1oiIGZpbGw9IiMyRTJFMkUiLz48L3N2Zz4K";
}, 59379(t) {
  t.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg4MHY0OEgwVjBaIiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTggMTJhNCA0IDAgMCAxIDQtNGg2OHY0MEg4VjEyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNCAxN2EzIDMgMCAwIDEgMy0zaDEyYTMgMyAwIDAgMSAzIDN2MzFIMTRWMTdabTIxIDBhMyAzIDAgMCAxIDMtM2gxMmEzIDMgMCAwIDEgMyAzdjMxSDM1VjE3Wm0yMSAwYTMgMyAwIDAgMSAzLTNoMTJhMyAzIDAgMCAxIDMgM3YzMUg1NlYxN1oiIGZpbGw9IiNFQkVCRUIiLz48L3N2Zz4K";
}, 21979(t) {
  t.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0OEgwVjBaIiBmaWxsPSIjM0QzRDNEIi8+PHBhdGggZD0iTTcgMTNhNSA1IDAgMCAxIDUtNWgyOHY0MEg3VjEzWiIgZmlsbD0iIzFGMUYxRiIvPjxwYXRoIGQ9Ik0xMyAxN2EzIDMgMCAwIDEgMy0zaDE0YTMgMyAwIDAgMSAzIDN2MzFIMTNWMTdaIiBmaWxsPSIjMkUyRTJFIi8+PC9zdmc+Cg==";
}, 20305(t) {
  t.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0OEgwVjBaIiBmaWxsPSIjRjJGMkYyIi8+PHBhdGggZD0iTTcgMTJhNCA0IDAgMCAxIDQtNGgyOXY0MEg3VjEyWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMyAxN2EzIDMgMCAwIDEgMy0zaDE0YTMgMyAwIDAgMSAzIDN2MzFIMTNWMTdaIiBmaWxsPSIjRUJFQkVCIi8+PC9zdmc+Cg==";
} }]);
