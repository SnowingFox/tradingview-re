"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[6787], { 20169(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".tvd-spinner {\n	animation: rotate 1s linear infinite;\n}\n\n@keyframes rotate {\n	100% {\n		transform: rotate(360deg);\n	}\n}\n", ""]);
  const l = i;
}, 99303(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".text-input-wrapper {\n	display: flex;\n	flex-direction: column;\n}\n\n.text-input-container {\n	position: relative;\n}\n\n.text-input {\n	width: 100%;\n\n	&:has(input:focus-visible) {\n		outline: 2px solid var(--color-tv-blue-a600); /* base ui-lib palette color */\n		outline-offset: -1px;\n	}\n}\n\n.text-input-end-adornment {\n	position: absolute;\n	top: 50%;\n	transform: translate(0, -50%);\n	height: 100%;\n	display: flex;\n	align-items: center;\n\n	[dir='ltr'] & {\n		&.small {\n			right: 4px;\n		}\n\n		&.medium {\n			right: 11px;\n		}\n	}\n\n	[dir='rtl'] & {\n		&.small {\n			left: 4px;\n		}\n\n		&.medium {\n			left: 11px;\n		}\n	}\n}\n\n.text-input-error-icon {\n	color: var(--color-content-primary-danger);\n}\n\n.text-input-clear-icon {\n	color: var(--color-content-secondary-neutral-bold);\n}\n\n.text-input-password-icon {\n	color: var(--color-content-primary-neutral);\n}\n", ""]);
  const l = i;
}, 20014(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".combobox-container {\n	position: relative;\n	width: 100%;\n	height: 34px;\n	box-sizing: border-box;\n	display: inline-flex;\n	align-items: center;\n	justify-content: space-between;\n	padding: 5px 7px;\n	color: var(--color-content-primary-neutral-bold);\n	background-color: transparent;\n	border: 1px solid var(--color-border-primary-neutral-light);\n	border-radius: 6px;\n\n	&:not(.disabled):not(.expanded):hover {\n		border-color: var(--color-border-primary-neutral);\n	}\n\n	&:focus-visible {\n		outline: none;\n	}\n\n	&:focus-visible,\n	&.expanded {\n		border-color: var(--color-border-primary-accent);\n	}\n\n	&.disabled {\n		color: var(--color-content-primary-neutral);\n		background-color: var(--color-container-fill-primary-neutral-extra-light);\n		border-color: var(--color-border-primary-neutral-normal);\n	}\n}\n\n.combobox-label {\n	font-size: 14px;\n	white-space: nowrap;\n	overflow-x: hidden;\n	text-overflow: ellipsis;\n	max-width: 300px;\n}\n\n.combobox-icon {\n	line-height: 4px;\n	transition: transform .35s ease;\n\n	&.rotated {\n		transform: rotate(180deg);\n	}\n\n	& > svg {\n		color: var(--color-content-primary-neutral);\n\n		.combobox-container.disabled & {\n			color: var(--color-content-primary-neutral-light);\n		}\n	}\n}\n\n.combobox-dropdown {\n	display: flex;\n	flex-direction: column;\n	position: absolute;\n	list-style: none;\n	width: inherit;\n	background-color: var(--color-container-fill-tertiary-inverse);\n	border: 1px solid var(--color-border);\n	border-radius: 4px;\n\n	margin: 0;\n	left: 0;\n	top: 32px;\n	padding: 0px;\n	box-sizing: border-box;\n	z-index: 1;\n\n	overflow: hidden;\n	visibility: hidden;\n\n	&:focus {\n		outline: none;\n	}\n\n	&.visible {\n		visibility: visible;\n	}\n}\n\n.combobox-dropdown-item {\n	font-size: 14px;\n	height: 32px;\n	position: relative;\n	padding: 7px 7px;\n	box-sizing: border-box;\n\n	display: inline-block;\n\n	text-overflow: ellipsis;\n	white-space: nowrap;\n	width: 390px;\n	overflow: hidden;\n	flex-shrink: 0;\n\n	&.selected {\n		color: var(--color-content-primary-inverse);\n		background-color: var(--color-container-fill-primary-neutral-extra-bold);\n	}\n\n	&:hover:not(.selected),\n	&.key-tab-focus {\n		background-color: var(--color-container-fill-primary-neutral-extra-light);\n	}\n}\n", ""]);
  const l = i;
}, 49686(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".draggable-checkbox-container {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	height: 42px;\n	border-radius: 8px;\n\n	&:hover {\n		background-color: var(--color-container-fill-primary-neutral-extra-light);\n	}\n\n	& > .checkbox {\n		width: 100%;\n\n		& > .checkbox-label {\n			width: 100%;\n		}\n	}\n}\n\n[dir='ltr'] .draggable-checkbox-container {\n	padding: 0 11px 0 12px;\n}\n\n[dir='rtl'] .draggable-checkbox-container {\n	padding: 0 12px 0 11px;\n}\n\n.react-draggable {\n	width: 18px;\n	height: 18px;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	color: var(--color-content-primary-neutral-light);\n}\n", ""]);
  const l = i;
}, 4778(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".progressbar {\n	display: inline-flex;\n	justify-content: space-between;\n	align-items: center;\n	width: 100%;\n	margin-top: 4px;\n}\n\n.progressbar-point {\n	display: inline-flex;\n	background-color: var(--color-container-fill-secondary-neutral-light);\n	height: 12px;\n	width: 12px;\n	border-radius: 50%;\n\n	&.active {\n		background-color: var(--color-container-fill-primary-neutral-bold);\n	}\n}\n", ""]);
  const l = i;
}, 68322(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".settings-about {\n	display: flex;\n	flex-direction: column;\n	gap: 16px;\n}\n\n.about-link-container {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n\n.copyright {\n	color: var(--color-content-primary-neutral);\n}\n", ""]);
  const l = i;
}, 96352(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".download-icon-arrow {\n	animation: downloadArrow 1.1s linear infinite;\n}\n\n@keyframes downloadArrow {\n	0% {\n		transform: translate(0, 0);\n		animation-timing-function: ease-in-out;\n	}\n\n	50% {\n		transform: translate(0, calc(-11.75px * (1 - 0.83) - 1px));\n		animation-timing-function: ease-in-out;\n	}\n\n	100% {\n		transform: translate(0, 0);\n		animation-timing-function: ease-in-out;\n	}\n}\n", ""]);
  const l = i;
}, 27116(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".update-app {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	padding: 12px;\n\n	background-color: var(--color-container-fill-primary-neutral-extra-light);\n	border-radius: 12px;\n\n	&.up-to-date,\n	&.ready-to-install,\n	&.error {\n		background-color: var(--color-container-fill-primary-success-extra-light);\n	}\n\n	&.system-requirements-unmet {\n		background-color: var(--color-container-fill-primary-warning-extra-light);\n	}\n}\n\n.update-app-text-container {\n	display: flex;\n	flex-direction: row;\n	align-items: center;\n	gap: 8px;\n	padding: 0;\n}\n\n.update-app-status-icon {\n	width: 28px;\n	height: 28px;\n	display: flex;\n	justify-content: center;\n	align-items: center;\n	color: var(--color-content-primary-neutral-bold);\n}\n\n.update-app-status-icon-success {\n	color: var(--color-minty-green-400); /* base ui-lib palette color */\n}\n\n.update-app-status-icon-warning {\n	color: var(--color-tan-orange-500); /* base ui-lib palette color */\n}\n\n.update-app-status-text {\n	color: var(--color-content-primary-neutral-bold);\n}\n", ""]);
  const l = i;
}, 80182(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".version-info-label {\n	height: 64px;\n	display: flex;\n	flex-direction: row;\n	align-items: center;\n	gap: 16px;\n	padding: 0px;\n}\n\n.logo-container {\n	width: 64px;\n	height: 64px;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	background-color: var(--color-cold-gray-900); /* base ui-lib palette color */\n	border-radius: 16px;\n}\n\n.version-info {\n	display: flex;\n	flex-direction: column;\n	align-items: flex-start;\n	gap: 2px;\n	padding: 0px;\n	color: var(--color-content-secondary-neutral-bold);\n}\n", ""]);
  const l = i;
}, 32518(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".alert-volume-slider {\n	display: flex;\n	align-items: center;\n	gap: 6px;\n}\n\n.slider-container {\n	position: relative;\n	width: min-content;\n	height: 28px;\n	display: flex;\n	align-items: center;\n\n	& > div[class^='slider-'] {\n		width: 180px;\n	}\n}\n\n.alert-volume-tooltip-anchor {\n	position: absolute;\n	width: 28px;\n	height: 100%;\n	z-index: -1;\n\n	&:not(&.min):not(&.max) {\n		display: none;\n	}\n\n	&.min {\n		[dir='ltr'] & {\n			left: -14px;\n		}\n\n		[dir='rtl'] & {\n			right: -14px;\n		}\n	}\n\n	&.max {\n		[dir='ltr'] & {\n			right: -14px;\n		}\n\n		[dir='rtl'] & {\n			left: -14px;\n		}\n	}\n}\n", ""]);
  const l = i;
}, 39154(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".alerts-checkbox {\n	height: 34px;\n}\n", ""]);
  const l = i;
}, 33797(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".camera-source {\n	box-sizing: border-box;\n	background-color: var(--color-black); /* base ui-lib palette color */\n	margin-top: 8px;\n	border-radius: 4px;\n}\n", ""]);
  const l = i;
}, 90307(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".credentials-and-crosshair > .settings-section-content {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n", ""]);
  const l = i;
}, 4281(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".file-download > .settings-section-content {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n\n.path-controls-container {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	width: 100%;\n}\n\n.path-button {\n	color: var(--link-primary-default);\n	max-width: 299px;\n	overflow: hidden;\n	text-overflow: ellipsis;\n	white-space: nowrap;\n\n	&:hover {\n		color: var(--color-link-primary-hover);\n		cursor: default;\n		text-decoration: underline;\n	}\n\n	&:active {\n		color: var(--color-link-primary-active);\n	}\n\n	&:focus-visible {\n		text-decoration: underline;\n		outline: none;\n	}\n\n	&.disabled {\n		color: var(--button-content-disabled);\n		pointer-events: none;\n		text-decoration: none;\n	}\n}\n", ""]);
  const l = i;
}, 1337(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".theme-wrapper {\n	display: flex;\n	flex-direction: row;\n	height: 70px;\n	gap: 12px;\n}\n", ""]);
  const l = i;
}, 42808(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".settings-network {\n	height: 100%;\n	display: flex;\n	flex-direction: column;\n	gap: 16px;\n}\n\n.settings-network > .settings-section {\n	padding: 0;\n}\n", ""]);
  const l = i;
}, 90922(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".service-action-container {\n	display: flex;\n	align-items: center;\n	justify-content: space-between;\n	width: 100%;\n	height: 34px;\n	margin-bottom: 8px;\n}\n\n.service-action-container > label {\n	color: var(--color-content-primary-neutral-bold);\n}\n", ""]);
  const l = i;
}, 4339(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".dialog-content {\n	padding: 0px;\n	border-top: 1px solid var(--color-container-fill-primary-neutral-light);\n	height: 100%;\n}\n\n.dialog-settings {\n	display: grid;\n	grid-template-columns: [tabs] 200px [page] auto;\n	height: 100%;\n}\n\n.tabs-section {\n	height: 100%;\n	box-sizing: border-box;\n	grid-column: tabs;\n	padding: 6px;\n\n	[dir='rtl'] & {\n		border-left: 1px solid var(--color-container-fill-primary-neutral-light);\n	}\n\n	[dir='ltr'] & {\n		border-right: 1px solid var(--color-container-fill-primary-neutral-light);\n	}\n}\n\n.page-section {\n	grid-column: page;\n	padding: 16px 20px;\n	overflow: hidden;\n}\n", ""]);
  const l = i;
}, 10906(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, '.settings-section {\n	padding-bottom: 24px;\n}\n\n.settings-section > label {\n	display: block;\n	color: var(--color-content-primary-neutral);\n	padding-bottom: 8px;\n}\n\n.settings-section:last-of-type {\n	padding-bottom: 0;\n}\n\n.settings-section label[class^="checkbox-"] {\n	height: 34px;\n}\n', ""]);
  const l = i;
}, 21642(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".tab {\n	width: 100%;\n	height: 40px;\n	display: flex;\n	align-items: center;\n	gap: 8px;\n	padding: 0 12px;\n	color: var(--color-content-primary-neutral-bold);\n	background-color: transparent;\n	border: none;\n	border-radius: 8px;\n\n	&.selected {\n		color: var(--color-content-secondary-neutral-bold);\n		background-color: var(--color-container-fill-primary-neutral-light);\n	}\n\n	&:hover:not(.selected) {\n		background-color: var(--color-container-fill-primary-neutral-extra-light);\n	}\n\n	&:focus {\n		outline: none;\n	}\n}\n\n.tab-icon {\n	width: 28px;\n	height: 28px;\n	box-sizing: border-box;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n}\n", ""]);
  const l = i;
}, 61316(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".warning-section {\n	position: absolute;\n	bottom: 0;\n	left: 0;\n\n	display: inline-flex;\n	align-items: center;\n	flex-wrap: nowrap;\n	justify-content: space-between;\n\n	height: 66px;\n	box-sizing: border-box;\n	border-top: 1px solid var(--color-container-fill-primary-neutral-light);\n	width: 100%;\n	background-color: var(--color-container-fill-tertiary-inverse);\n	margin: 0;\n	padding: 0 20px;\n}\n\n.warning-text {\n	color: var(--color-content-primary-neutral-bold);\n\n	&.error-message {\n		color: var(--color-content-primary-negative);\n	}\n}\n\n.warning-buttons {\n	display: inline-flex;\n}\n", ""]);
  const l = i;
}, 63514(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".control-button-wrapper {\n	position: absolute;\n	bottom: 0;\n	width: 413px;\n	height: 65px;\n	display: flex;\n	justify-content: flex-end;\n	align-items: center;\n	border-top: 1px solid var(--color-container-fill-primary-neutral-light);\n\n	[dir='ltr'] & {\n		right: 0;\n		padding-right: 20px;\n	}\n\n	[dir='rtl'] & {\n		left: 0;\n		padding-left: 20px;\n	}\n}\n", ""]);
  const l = i;
}, 23354(e, t, n) {
  n.d(t, { A: () => l });
  var a = n(30050), r = n.n(a), o = n(77259), i = n.n(o)()(r());
  i.push([e.id, ".tab-title-order > .settings-section-content {\n	display: flex;\n	flex-direction: column;\n	gap: 8px;\n}\n", ""]);
  const l = i;
}, 76753(e, t, n) {
  var a = n(72539), r = n.n(a), o = n(48560), i = n.n(o), l = n(57148), s = n.n(l), c = n(60251), d = n.n(c), u = n(81263), p = n.n(u), m = n(50892), g = n.n(m), h = n(99303), b = {};
  b.styleTagTransform = g(), b.setAttributes = d(), b.insert = s().bind(null, "head"), b.domAPI = i(), b.insertStyleElement = p(), r()(h.A, b), h.A && h.A.locals && h.A.locals;
}, 81272(e, t, n) {
  n.d(t, { DP: () => i.D, J2: () => r.J, jz: () => o.j, mN: () => a.m }), n(10300);
  var a = n(79278), r = (n(34097), n(23704), n(12329)), o = n(3156), i = n(49131);
  n(57179), n(57857);
}, 10300(e, t, n) {
  n(79474);
}, 79278(e, t, n) {
  n.d(t, { m: () => r });
  var a = n(79474);
  function r(e2) {
    const [t2, n2] = (0, a.useState)(e2);
    return { values: t2, setValues: n2, handleValueChange: (e3, t3) => {
      n2(((n3) => n3[e3] === t3 ? n3 : { ...n3, [e3]: t3 }));
    } };
  }
}, 34097(e, t, n) {
  n(79474);
}, 49131(e, t, n) {
  n.d(t, { D: () => l });
  var a = n(79474), r = n(35492), o = n(12329);
  const i = () => document.documentElement.getAttribute("data-theme") ?? "light";
  function l() {
    const [e2, t2] = (0, a.useState)(i()), [n2, l2] = (0, a.useState)(i());
    return (0, o.J)((0, r.bQ)().themeChange, ((e3) => {
      setTimeout((() => {
        t2(e3), l2("system" === e3 ? i() : e3);
      }), 30);
    })), { theme: e2, platformTheme: n2, isDarkTheme: "dark" === n2 };
  }
}, 57179(e, t, n) {
  n(79474), n(7750), n(59587), n(12329), n(49131);
}, 58012(e, t, n) {
  n.d(t, { I: () => o });
  var a = n(79474), r = n(1832);
  const o = ({ className: e2 = "", ...t2 }) => a.createElement(r.I, { ...t2, className: `ui-lib-icon ${e2}` });
}, 18993(e, t, n) {
  n.d(t, { I: () => a.I });
  var a = n(58012);
}, 79426(e, t, n) {
  n.d(t, { N: () => o });
  var a = n(79474), r = n(73528);
  n(82026);
  const o = ({ name: e2, children: t2, className: n2, tabIndex: o2 = 0, ...i }) => a.createElement("a", { ...i, tabIndex: o2, className: `${r[e2]} ${r["focus-outline-rounded"]} ${n2 ?? ""}` }, t2);
}, 67078(e, t, n) {
  n.d(t, { k: () => a.k });
  var a = n(58702);
}, 58702(e, t, n) {
  n.d(t, { k: () => p });
  var a = n(79474), r = n(58673), o = n(39343), i = n(1832), l = n(99030), s = n(9471), c = n(4303), d = n(56643), u = n(75739);
  n(76753);
  const p = ({ value: e2, onChange: t2, id: n2, allowClear: p2 = false, allowShowPasswordWhenDisabled: m = false, autoFocus: g = false, className: h = "", disabled: b = false, errorMessage: f, inputRef: y, label: v, maxLength: x, name: w, onClear: E, onFocus: A, onBlur: S, placeholder: k, size: C = "small", startSlot: I, tabIndex: N, type: D = "text", valid: T = true }) => {
    const P = (0, a.useRef)(null), R = y ?? P, [L, M] = (0, a.useState)(false), [B, V] = (0, a.useState)({}), F = document.activeElement === R.current, O = (0, a.useCallback)(((e3) => {
      if (!e3) return;
      const t3 = Math.round(e3.getBoundingClientRect().width), n3 = (function(e4) {
        return { small: 4, medium: 11 }[e4] ?? 0;
      })(C), a2 = (0, u.Dd)() ? "paddingLeft" : "paddingRight";
      V({ [a2]: `${t3 + n3}px` });
    }), [C, F]), $ = p2 || "password" === D || !T, H = p2 && (F || !!e2);
    return a.createElement("div", { className: `text-input-wrapper ${h}` }, v && a.createElement(o.J, { htmlFor: n2 }, v), a.createElement("div", { className: `text-input-container ${h}`, title: f }, a.createElement(r.p, { id: n2, value: e2, onChange: t2, autoFocus: g, className: `text-input ${h}`, disabled: b, intent: T ? "default" : "danger", maxLength: x, name: w, onFocus: A, onBlur: S, reference: R, startSlot: I, placeholder: k, size: C, style: B, tabIndex: N, type: "password" !== D || L ? "text" : "password" }), $ && a.createElement("div", { className: `text-input-end-adornment ${C}`, ref: O }, !T && a.createElement(i.I, { icon: s.v, className: "ui-lib-icon text-input-error-icon", title: f }), H && a.createElement(i.I, { icon: l.F, onClick: E, className: "ui-lib-icon text-input-clear-icon" }), "password" === D && a.createElement(i.I, { icon: L ? d.f : c.e, onClick: () => {
      b && !m || M(((e3) => !e3));
    }, className: "ui-lib-icon text-input-password-icon" }))));
  };
}, 86787(e, t, n) {
  n.r(t), n.d(t, { default: () => Sn });
  var a = n(79474), r = n(62020), o = n(27654), i = n(79623), l = n(94350), s = n(57041), c = n(81970), d = n(75675), u = n(97606), p = n(11861), m = n(74663), g = n(65970), h = n(38734), b = n(71673), f = n(59374), y = n(59623), v = n(7750), x = n(16309), w = n(22259);
  function E() {
    return w.f.provideProxy("tvd:settings-provider-service");
  }
  var A, S = n(75739), k = n(42952);
  !(function(e2) {
    e2.Down = "ArrowDown", e2.Up = "ArrowUp", e2.Right = "ArrowRight", e2.Left = "ArrowLeft";
  })(A || (A = {}));
  var C, I = n(81272), N = n(18993), D = n(20369);
  function T() {
    return w.f.provideProxy("tvd:auto-update-service");
  }
  !(function(e2) {
    e2.UpToDate = "up-to-date", e2.Checking = "checking", e2.Downloading = "downloading", e2.ReadyToInstall = "ready-to-install", e2.SystemRequirementsUnmet = "system-requirements-unmet", e2.Installing = "installing", e2.Error = "error";
  })(C || (C = {}));
  var P = n(62340), R = n(79426), L = n(92920), M = n(1566), B = n(64149), V = n(48126), F = n(97917), O = n(72539), $ = n.n(O), H = n(48560), j = n.n(H), z = n(57148), U = n.n(z), W = n(60251), q = n.n(W), J = n(81263), Y = n.n(J), Z = n(50892), G = n.n(Z), X = n(96352), K = {};
  K.styleTagTransform = G(), K.setAttributes = q(), K.insert = U().bind(null, "head"), K.domAPI = j(), K.insertStyleElement = Y(), $()(X.A, K), X.A && X.A.locals && X.A.locals;
  const _ = ({ size: e2 = 28 }) => a.createElement("svg", { width: e2, height: e2, viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg" }, a.createElement("path", { d: "M7 20.5V16H6v4.5c0 .83.67 1.5 1.5 1.5h14c.83 0 1.5-.67 1.5-1.5V16h-1v4.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5Z", fill: "currentColor", stroke: "currentColor", strokeWidth: ".5" }), a.createElement("path", { d: "M15 16.3V5h-1v11.3l-3.15-3.15-.7.7 4 4 .35.36.35-.36 4-4-.7-.7L15 16.29Z", fill: "currentColor", stroke: "currentColor", strokeWidth: ".5", className: "download-icon-arrow" }));
  var Q = n(27116), ee = {};
  ee.styleTagTransform = G(), ee.setAttributes = q(), ee.insert = U().bind(null, "head"), ee.domAPI = j(), ee.insertStyleElement = Y(), $()(Q.A, ee), Q.A && Q.A.locals && Q.A.locals;
  const te = () => {
    L.app.relaunch(), L.app.quit();
  }, ne = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)(C.UpToDate);
    (0, I.J2)(T().statusChange, n2);
    const o2 = ((e3, t3) => {
      const n3 = { title: e3("TradingView is up to date"), icon: a.createElement(N.I, { icon: B.Y, className: "update-app-status-icon-success" }) };
      return (/* @__PURE__ */ new Map([[C.Checking, { title: e3("Checking for updates"), icon: a.createElement(F.f, { intent: "neutral", size: "small" }) }], [C.UpToDate, n3], [C.Downloading, { title: e3("New version is downloading"), icon: a.createElement(_, { size: 28 }) }], [C.ReadyToInstall, { title: e3("Relaunch to update the app"), icon: a.createElement(N.I, { icon: B.Y, className: "update-app-status-icon-success" }) }], [C.SystemRequirementsUnmet, { title: e3("App can't be updated due to an unsupported version of your operating system."), icon: a.createElement(N.I, { icon: V.T, className: "update-app-status-icon-warning" }) }], [C.Installing, { title: e3("Relaunching the app to install new version"), icon: a.createElement(N.I, { icon: B.Y, className: "update-app-status-icon-success" }) }], [C.Error, n3]])).get(t3) ?? n3;
    })(e2, t2);
    return a.createElement("div", { className: `update-app ${t2}` }, a.createElement("div", { className: "update-app-text-container" }, a.createElement("div", { className: "update-app-status-icon" }, " ", o2.icon, " "), a.createElement(D.o, { tag: "span", name: "typography-regular-14px", className: "update-app-status-text" }, o2.title, t2 === C.SystemRequirementsUnmet && a.createElement(a.Fragment, null, " ", a.createElement(R.N, { name: "link-colors-with-underline", href: "https://www.tradingview.com/?solution=43000706464", tabIndex: 1 }, e2("Learn more"))))), t2 === C.Installing && a.createElement(F.f, { intent: "neutral", size: "small" }), t2 === C.ReadyToInstall && a.createElement(M.SX, { onClick: te, variant: "secondary", color: "black", size: "xsmall", id: "updateButton", tabIndex: 1 }, e2("Relaunch")));
  };
  var ae;
  function re() {
    return re = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var a2 in n2) ({}).hasOwnProperty.call(n2, a2) && (e2[a2] = n2[a2]);
      }
      return e2;
    }, re.apply(null, arguments);
  }
  const oe = function(e2) {
    return a.createElement("svg", re({ width: 50, height: 28, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e2), ae || (ae = a.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.143 1.428H.857v10.286h10.286v16h10.286V1.428H11.143Zm29.143 26.198H28L38.378 1.428H50l-9.714 26.198ZM28.5 11.362a4.919 4.919 0 0 0 4.914-4.923c0-2.719-2.2-4.923-4.914-4.923a4.919 4.919 0 0 0-4.914 4.923c0 2.72 2.2 4.923 4.914 4.923Z", fill: "#fff" })));
  };
  var ie = n(80182), le = {};
  le.styleTagTransform = G(), le.setAttributes = q(), le.insert = U().bind(null, "head"), le.domAPI = j(), le.insertStyleElement = Y(), $()(ie.A, le), ie.A && ie.A.locals && ie.A.locals;
  const se = () => {
    const { buildInfo: e2 } = (0, k.Mz)();
    return a.createElement("div", { className: "version-info-label" }, a.createElement("div", { className: "logo-container" }, a.createElement(oe, null)), a.createElement("div", { className: "version-info" }, a.createElement(D.o, { tag: "h2", name: "typography-accent-18px-semibold" }, "TradingView"), a.createElement(D.o, { tag: "p", name: "typography-regular-14px" }, `Version ${e2.appVersion} · ${new Date(e2.buildDate).toLocaleDateString()}`)));
  };
  var ce = n(68322), de = {};
  de.styleTagTransform = G(), de.setAttributes = q(), de.insert = U().bind(null, "head"), de.domAPI = j(), de.insertStyleElement = Y(), $()(ce.A, de), ce.A && ce.A.locals && ce.A.locals;
  const ue = !(0, P.j9)() && true, pe = () => {
    const { t: e2 } = (0, r.Bd)();
    (0, a.useEffect)((() => {
      T().checkForUpdates().catch(((e3) => {
        (0, v.Ow)().error("<About>.useEffect(): autoUpdateServiceProxy().checkForUpdates() error", e3);
      }));
    }), []);
    const { buildInfo: t2 } = (0, k.Mz)();
    return a.createElement("div", { className: "settings-about" }, a.createElement(se, null), ue && a.createElement(ne, null), a.createElement("div", { className: "about-link-container" }, a.createElement(R.N, { name: "link-colors-with-underline", href: "tvd://licences", tabIndex: 1 }, a.createElement(D.o, { tag: "span", name: "typography-regular-14px" }, e2("Notices & Acknowledgements"))), a.createElement(R.N, { name: "link-colors-with-underline", href: "https://www.tradingview.com/house-rules/", tabIndex: 1 }, a.createElement(D.o, { tag: "span", name: "typography-regular-14px" }, e2("House rules"))), a.createElement(R.N, { name: "link-colors-with-underline", href: "https://www.tradingview.com/support/solutions/43000673888-tradingview-desktop-releases-and-release-notes/", tabIndex: 1 }, a.createElement(D.o, { tag: "span", name: "typography-regular-14px" }, e2("Release notes"))), a.createElement(R.N, { name: "link-colors-with-underline", href: "https://www.tradingview.com/cookies-policy/", tabIndex: 1 }, a.createElement(D.o, { tag: "span", name: "typography-regular-14px" }, e2("Cookies Policy")))), a.createElement(D.o, { tag: "div", name: "typography-regular-14px", className: "copyright" }, `${e2("Copyright")} © ${new Date(t2.buildDate).getFullYear().toString()} `, a.createElement("span", { dir: "ltr" }, "TradingView, Inc.")));
  };
  var me = n(70092), ge = n(10906), he = {};
  he.styleTagTransform = G(), he.setAttributes = q(), he.insert = U().bind(null, "head"), he.domAPI = j(), he.insertStyleElement = Y(), $()(ge.A, he), ge.A && ge.A.locals && ge.A.locals;
  const be = ({ children: e2, label: t2, className: n2 = "", contentRef: r2 }) => a.createElement("section", { className: `settings-section ${n2}` }, a.createElement(D.o, { tag: "label", name: "typography-caps-11px" }, t2), a.createElement("div", { ref: r2, className: "settings-section-content" }, e2));
  function fe(e2) {
    const t2 = (0, a.useCallback)(((t3) => {
      t3.code === S.N$.Enter && t3.target instanceof HTMLInputElement && e2[t3.target.id] && e2[t3.target.id](!t3.target.checked);
    }), [e2]);
    (0, a.useEffect)((() => (document.addEventListener("keydown", t2), () => {
      document.removeEventListener("keydown", t2);
    })), [t2]);
  }
  var ye = n(67604), ve = n(22295), xe = n(2800), we = n(49176), Ee = n(62353), Ae = n(32518), Se = {};
  function ke(e2) {
    return 0 === e2 ? ye.p : 100 === e2 ? xe.a : ve.Z;
  }
  function Ce(e2) {
    return 0 === e2 ? "min" : 100 === e2 ? "max" : "";
  }
  function Ie(e2, t2) {
    return 0 === e2 ? t2("No alarms and no surprises, please") : 100 === e2 ? t2("Max volume, it might be loud") : "";
  }
  Se.styleTagTransform = G(), Se.setAttributes = q(), Se.insert = U().bind(null, "head"), Se.domAPI = j(), Se.insertStyleElement = Y(), $()(Ae.A, Se), Ae.A && Ae.A.locals && Ae.A.locals;
  const Ne = () => {
    const { t: e2, i18n: t2 } = (0, r.Bd)(), n2 = (0, a.useRef)(null), [o2, i2] = (0, a.useState)(50), [l2, s2] = (0, a.useState)(false);
    return (0, I.J2)(E().alertVolumeChange, i2), a.createElement("div", { className: "alert-volume-slider" }, a.createElement(N.I, { icon: ke(o2) }), a.createElement("div", { className: "slider-container", onMouseEnter: () => {
      s2(true);
    }, onMouseLeave: () => {
      s2(false);
    } }, a.createElement(we.A, { min: 0, max: 100, rtl: (0, S.HL)(t2.language), value: o2, onChange: i2, onCommit: (e3) => {
      E().alertVolumeChange.next(e3), w.f.provideProxy("tvd:sound-player-contract").playSound({ volume: e3, duration: 0, name: "alert/fired" });
    }, ariaLabel: "alert-volume-slider" }), a.createElement("div", { ref: n2, className: `alert-volume-tooltip-anchor ${Ce(o2)}` }), a.createElement(Ee.b, { id: "alert-volume-tooltip", open: (0 === o2 || 100 === o2) && l2, onClose: () => {
    }, content: Ie(o2, e2), anchor: n2 })));
  };
  var De = n(39154), Te = {};
  Te.styleTagTransform = G(), Te.setAttributes = q(), Te.insert = U().bind(null, "head"), Te.domAPI = j(), Te.insertStyleElement = Y(), $()(De.A, Te), De.A && De.A.locals && De.A.locals;
  const Pe = "alertNotificationEnabledChange", Re = { [Pe]: E().alertNotificationEnabledChange.next }, Le = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)(false);
    return (0, I.J2)(E().alertNotificationEnabledChange, n2), fe(Re), a.createElement(a.Fragment, null, a.createElement(be, { className: "alerts", label: e2("NOTIFICATIONS") }, a.createElement(me.Sc, { id: Pe, className: "alerts-checkbox", checked: t2, onChange: () => {
      E().alertNotificationEnabledChange.next(!t2);
    }, label: e2("Use system notifications for alerts"), tabIndex: 1 })), a.createElement(be, { label: e2("SOUND") }, a.createElement(Ne, null)));
  };
  var Me = n(53524), Be = n(87574), Ve = n(12069), Fe = n(8750);
  a.createContext({ windowStateSubject: new Ve.BehaviorSubject(Fe.y7.Normal), windowResizeSubject: new Ve.Subject(), hoverCheckSubject: new Ve.Subject(), windowFocused: false, windowId: "", isRtlSystem: false });
  const Oe = a.createContext({ t: Be.Ay.t });
  var $e;
  function He() {
    return He = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var a2 in n2) ({}).hasOwnProperty.call(n2, a2) && (e2[a2] = n2[a2]);
      }
      return e2;
    }, He.apply(null, arguments);
  }
  const je = function(e2) {
    return a.createElement("svg", He({ width: 11, height: 7, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e2), $e || ($e = a.createElement("path", { d: "m.5 1.5 5 4 5-4", stroke: "currentColor", strokeWidth: 1.5 })));
  };
  var ze = n(20014), Ue = {};
  Ue.styleTagTransform = G(), Ue.setAttributes = q(), Ue.insert = U().bind(null, "head"), Ue.domAPI = j(), Ue.insertStyleElement = Y(), $()(ze.A, Ue), ze.A && ze.A.locals && ze.A.locals;
  var We = function(e2, t2, n2, a2) {
    var r2, o2 = arguments.length, i2 = o2 < 3 ? t2 : null === a2 ? a2 = Object.getOwnPropertyDescriptor(t2, n2) : a2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e2, t2, n2, a2);
    else for (var l2 = e2.length - 1; l2 >= 0; l2--) (r2 = e2[l2]) && (i2 = (o2 < 3 ? r2(i2) : o2 > 3 ? r2(t2, n2, i2) : r2(t2, n2)) || i2);
    return o2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
  };
  let qe = class extends a.Component {
    static contextType = Oe;
    shiftDropdown = "32px";
    state = { showDropdown: false, selectedId: void 0, currentId: void 0 };
    comboDropdownRef;
    containerDropdownRef;
    componentDidMount() {
      this.props.hasKeyboardNavigation && document.addEventListener("keyup", this.keyUpHandler), document.addEventListener("click", this.onClickOutsideDropdown), this.props.defaultSelectedId || this.setState({ selectedId: this.props.items[0]?.id, currentId: this.props.items[0]?.id }), this.comboDropdownRef = a.createRef(), this.containerDropdownRef = a.createRef();
    }
    componentWillUnmount() {
      this.props.hasKeyboardNavigation && document.removeEventListener("keyup", this.keyUpHandler), document.removeEventListener("click", this.onClickOutsideDropdown);
    }
    keyUpHandler = (e2) => {
      if (!(e2.target && e2.target instanceof HTMLElement && this.containerDropdownRef?.current?.contains(e2.target))) return;
      const { showDropdown: t2 } = this.state;
      if ("Space" !== e2.code && "Enter" !== e2.code && (t2 || e2.code !== A.Down && e2.code !== A.Up)) {
        if (Object.values(A).includes(e2.key)) {
          e2.preventDefault();
          const t3 = this.containerDropdownRef?.current?.querySelector(".combobox-dropdown-item.key-tab-focus");
          if (t3 instanceof HTMLElement) {
            const { dataset: { id: n2 } } = t3, { items: a2 } = this.props, r2 = a2.findIndex(((e3) => e3.id === n2));
            if (!n2) return;
            switch (e2.key) {
              case A.Down:
              case A.Right: {
                const e3 = r2 === a2.length - 1 ? 0 : r2 + 1;
                this.changeItemFocus(t3, e3);
                break;
              }
              case A.Up:
              case A.Left: {
                const e3 = r2 - 1 >= 0 ? r2 - 1 : a2.length - 1;
                this.changeItemFocus(t3, e3);
                break;
              }
            }
          }
        }
      } else if (e2.preventDefault(), this.state.showDropdown) {
        const e3 = this.containerDropdownRef?.current?.querySelector(".combobox-dropdown-item.key-tab-focus");
        if (!e3) return;
        if (e3 instanceof HTMLElement) {
          const { dataset: { id: t3 } } = e3, { items: n2 } = this.props, a2 = n2.findIndex(((e4) => e4.id === t3));
          if (!t3) return;
          this.props.onChange(t3, n2[a2].label), this.setState({ showDropdown: false });
        }
      } else {
        const e3 = this.containerDropdownRef?.current?.querySelector(".combobox-dropdown-item.selected");
        if (!e3) return;
        e3 instanceof HTMLElement && (this.setState({ showDropdown: true, currentId: e3.dataset.id }), e3.focus());
      }
    };
    changeItemFocus(e2, t2) {
      const n2 = this.containerDropdownRef?.current?.querySelectorAll(".combobox-dropdown-item");
      n2 && (e2.classList.remove("key-tab-focus"), n2[t2] && n2[t2] instanceof HTMLElement && n2[t2].classList.add("key-tab-focus"));
    }
    render() {
      return a.createElement("div", { ref: this.containerDropdownRef, tabIndex: this.props.tabIndex || 0, onBlur: () => {
        this.setState({ showDropdown: false });
      }, className: `combobox-container ${this.props.isDisabled ? "disabled" : ""} ${this.state.showDropdown ? "expanded" : ""}`, onClick: (e2) => this.toggleDropdown(e2) }, a.createElement("span", { className: "combobox-label" }, this.getSelectedItemLabel()), a.createElement("span", { className: "combobox-icon" + (this.state.showDropdown ? " rotated" : "") }, a.createElement(je, null)), !this.props.isDisabled && a.createElement("ul", { ref: this.comboDropdownRef, className: "combobox-dropdown" + (this.state.showDropdown ? " visible" : "") }, this.renderDropdownItems()));
    }
    onClickOutsideDropdown = (e2) => {
      e2.target instanceof Node && !this.containerDropdownRef?.current?.contains(e2.target) && this.state.showDropdown && (e2.preventDefault(), this.setState({ showDropdown: false }));
    };
    toggleDropdown(e2) {
      if (!this.props.isDisabled && (e2.preventDefault(), !this.props.isDisabled && (this.setState({ showDropdown: !this.state.showDropdown }), this.comboDropdownRef?.current))) {
        const e3 = this.comboDropdownRef.current.getBoundingClientRect();
        e3.height + e3.y > document.body.clientHeight ? (this.comboDropdownRef.current.style.top = "auto", this.comboDropdownRef.current.style.bottom = this.shiftDropdown) : (this.comboDropdownRef.current.style.top = this.shiftDropdown, this.comboDropdownRef.current.style.bottom = "auto");
      }
    }
    getSelectedItemLabel() {
      const e2 = this.state.selectedId ?? this.props.defaultSelectedId, t2 = this.props.items.find(((t3) => t3.id === e2));
      return t2?.label ?? this.props.items[0]?.label;
    }
    renderDropdownItems() {
      const e2 = this.state.selectedId ?? this.props.defaultSelectedId;
      return this.props.items.map(((t2) => a.createElement("li", { key: t2.id, "data-id": t2.id, className: `combobox-dropdown-item${t2.id === e2 ? " selected" : ""}${t2.id === this.state.currentId ? " key-tab-focus" : ""}`, onClick: (e3) => this.onDropdownItemClick(e3, t2.id, t2.label) }, t2.label)));
    }
    onDropdownItemClick(e2, t2, n2) {
      e2.stopPropagation(), this.setState({ selectedId: t2, showDropdown: false }), this.props.onChange(t2, n2);
    }
  };
  We([Me.F], qe.prototype, "toggleDropdown", null), We([Me.F], qe.prototype, "onDropdownItemClick", null), qe = We([(0, Me.W)("ComboboxComponent")], qe);
  const Je = qe;
  var Ye = n(4778), Ze = {};
  Ze.styleTagTransform = G(), Ze.setAttributes = q(), Ze.insert = U().bind(null, "head"), Ze.domAPI = j(), Ze.insertStyleElement = Y(), $()(Ye.A, Ze), Ye.A && Ye.A.locals && Ye.A.locals;
  class Ge extends a.Component {
    pointValue = 10;
    componentDidMount() {
      this.pointValue = 100 / this.props.precision;
    }
    render() {
      return a.createElement("div", { className: "progressbar" }, this.renderPoints());
    }
    renderPoints() {
      const e2 = [], t2 = this.getLevelPointIndex(this.props.level);
      for (let n2 = 0; n2 < this.props.precision; n2++) e2.push(a.createElement("span", { key: n2, className: "progressbar-point " + (n2 <= t2 ? "active" : "") }));
      return e2;
    }
    getLevelPointIndex(e2) {
      const t2 = Math.min(e2, 100);
      return Math.round(t2 / this.pointValue) - 1;
    }
  }
  var Xe = function(e2, t2, n2, a2) {
    var r2, o2 = arguments.length, i2 = o2 < 3 ? t2 : null === a2 ? a2 = Object.getOwnPropertyDescriptor(t2, n2) : a2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(e2, t2, n2, a2);
    else for (var l2 = e2.length - 1; l2 >= 0; l2--) (r2 = e2[l2]) && (i2 = (o2 < 3 ? r2(i2) : o2 > 3 ? r2(t2, n2, i2) : r2(t2, n2)) || i2);
    return o2 > 3 && i2 && Object.defineProperty(t2, n2, i2), i2;
  };
  let Ke = class {
    level = new Ve.BehaviorSubject(0);
    sampleRate = 100;
    stream;
    context;
    analyser;
    input;
    invHandler;
    constructor(e2) {
      this.stream = e2, this.context = new AudioContext(), this.analyser = this.context.createAnalyser(), this.connectInput();
    }
    setInput(e2) {
      this.input && this.input.disconnect(), this.stream = e2, this.input = this.context.createMediaStreamSource(this.stream), this.input.connect(this.analyser);
    }
    connectInput() {
      this.input = this.context.createMediaStreamSource(this.stream), this.analyser.fftSize = 512, this.analyser.smoothingTimeConstant = 0.6, this.input.connect(this.analyser), this.startAnalysing();
    }
    startAnalysing() {
      const e2 = new Uint8Array(this.analyser.frequencyBinCount), t2 = () => {
        this.analyser.getByteFrequencyData(e2);
        const t3 = e2.reduce(((e3, t4) => e3 + t4)) / e2.length;
        this.level.next(Math.round(t3));
      };
      this.invHandler = setInterval((() => t2()), this.sampleRate);
    }
    dispose() {
      clearInterval(this.invHandler), this.input && this.input.disconnect(), this.analyser.disconnect(), (0, S.uY)(this.context.close());
    }
  };
  Xe([Me.F], Ke.prototype, "dispose", null), Ke = Xe([(0, Me.W)("AudioInputAnalyser")], Ke);
  const _e = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)([]), [o2, i2] = (0, a.useState)(), [l2, s2] = (0, a.useState)(0), [c2, d2] = (0, a.useState)(), [u2, p2] = (0, a.useState)(true), m2 = (0, a.useCallback)((async (e3) => {
      const a2 = (await e3.enumerateDevices()).filter(((e4) => "audioinput" === e4.kind && "default" !== e4.deviceId && "communications" !== e4.deviceId)).map((({ deviceId: e4, label: t3 }) => ({ id: e4, label: t3 })));
      t2.length !== a2.length && n2(a2), p2(a2.length > 0);
    }), [t2.length]);
    (0, a.useLayoutEffect)((() => {
      (0, v.yg)().debug("<AudioSettings>: Initialized"), m2(navigator.mediaDevices).catch(((e3) => {
        (0, v.yg)().error("<AudioSettings>: Initialized", e3);
      }));
    }), [m2]), (0, a.useLayoutEffect)((() => {
      if (0 === t2.length) return;
      const e3 = function() {
        (0, v.yg)().debug("<AudioSettings>: change MediaDevices"), m2(this).catch(((e4) => {
          (0, v.yg)().error("<AudioSettings>: getAudioDevices", e4);
        }));
      };
      return navigator.mediaDevices.addEventListener("devicechange", e3), () => {
        navigator.mediaDevices.removeEventListener("devicechange", e3);
      };
    }), [t2, m2]);
    const g2 = (0, a.useCallback)((async (e3, t3) => {
      let n3 = null;
      try {
        n3 = await h2(e3);
      } catch (n4) {
        (0, v.yg)().error(`<AudioSettings>.onAudioSourceChange: Microphone id ${e3} label ${t3} could not be obtained`);
      }
      n3 ? (c2 ? c2.setInput(n3) : d2(new Ke(n3)), E().appAudioInputChange.next({ id: e3, label: t3 })) : (0, v.yg)().error(`<AudioSettings>.onAudioSourceChange(): Could not find device with id ${e3} label ${t3}`);
    }), [c2]);
    (0, a.useEffect)((() => {
      (async () => {
        if (0 === t2.length) return;
        let e3 = await E().getMicrophone();
        e3 || (e3 = t2[0]), i2(e3.id), await g2(e3.id, e3.label);
      })().catch(((e3) => {
        (0, v.yg)().error("<AudioSettings>: getAudio() in useEffect", e3);
      }));
    }), [t2, g2]), (0, I.J2)(c2?.level, s2, [c2]);
    const h2 = (e3) => navigator.mediaDevices.getUserMedia({ audio: { deviceId: e3 } }), b2 = u2 ? "" : ` (${e2("no available devices")})`;
    return a.createElement(a.Fragment, null, a.createElement(be, { label: `${e2("MICROPHONE")}${b2}`, className: "audio" }, a.createElement(Je, { tabIndex: 1, hasKeyboardNavigation: true, defaultSelectedId: o2, items: t2, onChange: (e3, t3) => {
      (0, v.yg)().info(`Selected audio device "${t3}"`), i2(e3), g2(e3, t3).catch(((n3) => {
        (0, v.yg)().error(`<AudioSettings>.onChangeHandler: onAudioSourceChange(id: ${e3}, label: ${t3}) `, n3);
      }));
    }, isDisabled: !u2 })), a.createElement(be, { label: e2("Input level") }, a.createElement(Ge, { level: l2, precision: 20 })));
  };
  var Qe = n(33797), et = {};
  et.styleTagTransform = G(), et.setAttributes = q(), et.insert = U().bind(null, "head"), et.domAPI = j(), et.insertStyleElement = Y(), $()(Qe.A, et), Qe.A && Qe.A.locals && Qe.A.locals;
  const tt = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)([]), [o2, i2] = (0, a.useState)(), [l2, s2] = (0, a.useState)(true), c2 = (0, a.useRef)(null), d2 = (0, a.useCallback)((async (e3) => {
      const a2 = (await e3.enumerateDevices()).filter(((e4) => "videoinput" === e4.kind && "default" !== e4.deviceId)).map((({ deviceId: e4, label: t3 }) => ({ id: e4, label: t3 })));
      t2.length !== a2.length && n2(a2), s2(a2.length > 0);
    }), [t2.length]);
    (0, a.useLayoutEffect)((() => {
      (0, v.yg)().debug("<VideoSettings>: Initialized"), d2(navigator.mediaDevices).catch(((e3) => {
        (0, v.yg)().error("<VideoSettings>: Initialized", e3);
      }));
    }), [d2]), (0, a.useLayoutEffect)((() => {
      if (0 === t2.length) return;
      const e3 = function() {
        (0, v.yg)().debug("<VideoSettings>: change MediaDevices"), d2(this).catch(((e4) => {
          (0, v.yg)().error("<VideoSettings>: getVideoDevices", e4);
        }));
      };
      return navigator.mediaDevices.addEventListener("devicechange", e3), () => {
        navigator.mediaDevices.removeEventListener("devicechange", e3);
      };
    }), [d2, t2]);
    const u2 = (0, a.useCallback)((async (e3, t3) => {
      if (!c2?.current || !e3) return;
      let n3 = null;
      try {
        n3 = await p2(e3);
      } catch (e4) {
        (0, v.yg)().error(`<VideoSettings>.onVideoSourceChange: Camera id ${t3} could not be obtained`);
      }
      c2.current.srcObject = n3, n3 && (await c2.current.play(), E().appCameraChange.next({ id: e3, label: t3 }));
    }), []);
    (0, a.useEffect)((() => {
      if (0 !== t2.length) return E().getCamera().then(((e3) => {
        const { id: n3, label: a2 } = e3 ?? t2[0];
        i2(n3), u2(n3, a2).catch(((e4) => {
          (0, v.yg)().error("<VideoSettings>.useEffect(): onVideoSourceChange()", e4);
        }));
      })).catch(((e3) => {
        (0, v.yg)().error("<VideoSettings>.useEffect(): settingsProviderProxy().getCamera()", e3);
      })), () => {
        if (!c2?.current) return;
        const e3 = c2.current?.srcObject;
        var t3;
        e3 && (t3 = e3, Boolean(t3) && "getTracks" in t3) && (e3.getTracks().forEach(((e4) => {
          e4.stop();
        })), c2.current.srcObject = null);
      };
    }), [t2, c2, u2]);
    const p2 = (e3) => navigator.mediaDevices.getUserMedia({ video: { deviceId: e3 } }), m2 = l2 ? "" : ` (${e2("no available devices")})`;
    return a.createElement(be, { label: `${e2("CAMERA")}${m2}` }, a.createElement(Je, { tabIndex: 1, hasKeyboardNavigation: true, items: t2, defaultSelectedId: o2 ?? t2[0]?.id, onChange: (e3, t3) => {
      (0, v.yg)().info(`Selected video device '${t3}'`), u2(e3, t3).catch(((e4) => {
        (0, v.yg)().error("<VideoSettings>: video onChangeHandler ", e4);
      }));
    }, isDisabled: !l2 }), a.createElement("video", { height: 220, width: 392, tabIndex: -1, className: "camera-source", ref: c2, controls: false }));
  }, nt = () => a.createElement(a.Fragment, null, a.createElement(tt, null), a.createElement(_e, null));
  var at = n(90307), rt = {};
  rt.styleTagTransform = G(), rt.setAttributes = q(), rt.insert = U().bind(null, "head"), rt.domAPI = j(), rt.insertStyleElement = Y(), $()(at.A, rt), at.A && at.A.locals && at.A.locals;
  const ot = !(0, S.j9)(), it = "autofillBrokerCredentials", lt = "syncCrosshairAcrossWindows", st = { [it]: E().autofillChange.next, [lt]: E().crosshairSyncEnabledChange.next }, ct = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)(false), [o2, i2] = (0, a.useState)(false);
    return (0, I.J2)(E().autofillChange, n2), (0, I.J2)(E().crosshairSyncEnabledChange, i2), fe(st), a.createElement(be, { className: "credentials-and-crosshair", label: e2(ot ? "CREDENTIALS AND CROSSHAIR" : "CROSSHAIR") }, ot && a.createElement(me.Sc, { id: it, checked: t2, onChange: () => {
      E().autofillChange.next(!t2);
    }, label: e2("Auto-fill broker credentials"), tabIndex: 1 }), a.createElement(me.Sc, { id: lt, checked: o2, onChange: () => {
      E().crosshairSyncEnabledChange.next(!o2);
    }, label: e2("Sync crosshair across windows"), tabIndex: 1 }));
  };
  var dt = n(4281), ut = {};
  ut.styleTagTransform = G(), ut.setAttributes = q(), ut.insert = U().bind(null, "head"), ut.domAPI = j(), ut.insertStyleElement = Y(), $()(dt.A, ut), dt.A && dt.A.locals && dt.A.locals;
  const pt = "downloadLocation", mt = { [pt]: E().showSelectFolderDialogChange.next }, gt = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)(true), [o2, i2] = (0, a.useState)(""), [l2, s2] = (0, a.useState)(false);
    return (0, I.J2)(E().fileSavePathChange, ((e3) => {
      i2(e3), (async () => {
        const e4 = await E().isFileSavePathValid();
        t2 !== e4 && n2(e4);
      })().catch(((e4) => {
        (0, v.yg)().error("<FileDownloadSection>.fileSavePathChangeHandler(): validate() error", e4);
      }));
    })), (0, I.J2)(E().showSelectFolderDialogChange, s2), fe(mt), a.createElement(be, { className: "file-download", label: e2("DOWNLOADS") }, a.createElement("div", { className: "path-controls-container" }, a.createElement("a", { className: "path-button " + (l2 ? "disabled" : ""), onClick: (e3) => {
      e3.preventDefault(), L.shell.openPath(o2).catch(((e4) => {
        (0, v.yg)().error("<FileDownloadSection>.openDownloadFolder(): shell.openPath() error", e4);
      }));
    }, id: "openDownloadFolder", tabIndex: 1 }, a.createElement(D.o, { tag: "span", name: "typography-regular-14px" }, o2)), a.createElement(M.SX, { size: "small", color: "gray", variant: "secondary", onClick: () => (0, S.uY)(E().changeFileSavePath()), disabled: l2, id: "browseFileDownload", tabIndex: 1 }, e2("Change"))), a.createElement(me.Sc, { id: pt, checked: l2, onChange: () => {
      E().showSelectFolderDialogChange.next(!l2);
    }, label: e2("Always ask where to save files"), tabIndex: 1 }));
  };
  var ht = n(75594), bt = n(1337), ft = {};
  ft.styleTagTransform = G(), ft.setAttributes = q(), ft.insert = U().bind(null, "head"), ft.domAPI = j(), ft.insertStyleElement = Y(), $()(bt.A, ft), bt.A && bt.A.locals && bt.A.locals;
  const yt = () => {
    const { t: e2 } = (0, r.Bd)();
    return a.createElement(be, { label: e2("THEME") }, a.createElement(ht.w, { tabIndex: 1 }));
  }, vt = () => a.createElement(a.Fragment, null, a.createElement(ct, null), a.createElement(yt, null), a.createElement(gt, null));
  function xt() {
    return w.f.provideProxy("tvd:network-service");
  }
  var wt = n(84157);
  const Et = "tvd:password-manager-service";
  function At() {
    return w.f.provide(Et);
  }
  function St() {
    return w.f.provideProxy(Et);
  }
  const kt = "config1", Ct = "config2", It = "TradingView Desktop Proxy";
  var Nt, Dt;
  function Tt() {
    return w.f.provideProxy("tvd:track-event-service");
  }
  !(function(e2) {
    e2.Http = "http", e2.Socks5 = "socks5";
  })(Nt || (Nt = {})), n(51022), n(61888), (function(e2) {
    e2.CookiesSettings = "cookiesSettings", e2.CookiePrivacyPreferenceBanner = "cookiePrivacyPreferenceBannerProduction";
  })(Dt || (Dt = {}));
  var Pt = n(33077), Rt = n(67078), Lt = n(42808), Mt = {};
  Mt.styleTagTransform = G(), Mt.setAttributes = q(), Mt.insert = U().bind(null, "head"), Mt.domAPI = j(), Mt.insertStyleElement = Y(), $()(Lt.A, Mt), Lt.A && Lt.A.locals && Lt.A.locals;
  const Bt = "isProxyEnabled", Vt = { [Nt.Http]: "HTTP", [Nt.Socks5]: "SOCKS5" }, Ft = Object.values(Nt).map(((e2) => ({ id: e2, label: Vt[e2] }))), Ot = ({ setWarningText: e2, setCustomButtonText: t2, setWarningCallback: n2, setIsErrorWarning: o2, setIsLoaderShowing: i2, resetRelaunchWarning: l2 }) => {
    const { t: s2 } = (0, r.Bd)(), { values: c2, handleValueChange: d2 } = (0, I.mN)({ isEnabled: null, protocol: Ft[0].id, ipAddress: "", port: "", username: "", password: "" }), [u2, p2] = (0, a.useState)(true), [m2, g2] = (0, a.useState)(true), [h2, b2] = (0, a.useState)(null), [f2, y2] = (0, a.useState)("idle");
    (0, a.useEffect)((() => {
      (async () => {
        let e3 = null;
        try {
          e3 = await (async function() {
            const e4 = wt.ipcMain ? At : St;
            let t4 = null;
            try {
              t4 = await e4().getCredentialsByService(It) ?? null;
            } catch (e5) {
              (0, v.Ow)().error(`getProxyLoginAndPassword(): passwordManagerService().getCredentialsByService(${It}) error`, e5);
            }
            return t4 ? { account: t4.find(((e5) => e5.account === Ct))?.password ?? "", password: t4.find(((e5) => e5.account === kt))?.password ?? "" } : ((0, v.Ow)().warn(`getProxyLoginAndPassword(): no credentials were found for ${It}`), null);
          })();
        } catch (e4) {
          (0, v.yg)().error("Network settings: Problems with fetching of proxy credentials");
        }
        if (null === e3) return d2("username", ""), void d2("password", "");
        const { account: t3, password: n3 } = e3;
        d2("username", t3), d2("password", n3);
      })().catch(((e3) => {
        (0, v.yg)().error((0, Pt.bw)(e3));
      }));
    }), []), (0, a.useEffect)((() => {
      null !== h2 && null !== c2.isEnabled && h2 !== c2.isEnabled && x2(c2.isEnabled);
    }), [h2, c2.isEnabled]);
    const x2 = (a2) => {
      w2(), e2(s2("Relaunch for changes to take effect")), n2((() => () => {
        ((a3) => {
          if (!a3) return L.app.relaunch(), void L.app.quit();
          if (!(() => {
            const e3 = "" !== c2.ipAddress.trim();
            p2(e3);
            const t3 = Number.parseInt(c2.port, 10), n3 = !Number.isNaN(t3) && t3 >= 1 && t3 <= 65534;
            return g2(n3), e3 && n3;
          })()) return;
          y2("testing"), i2(true);
          const r2 = () => {
            y2("failure"), o2(true), i2(false), e2(s2("Please check your internet connection or try again later")), t2(s2("Ok")), n2((() => w2));
          };
          xt().testProxy().then(((e3) => {
            e3 ? (xt().setProxyEnabled(true), Tt().trackEvent({ eventName: "proxy_enabled" }), L.app.relaunch(), L.app.quit()) : r2();
          })).catch((() => {
            r2();
          }));
        })(a2);
      }));
    }, w2 = () => {
      y2("idle"), l2();
    };
    (0, I.J2)(xt().proxyEnabledChange, ((e3) => {
      null === c2.isEnabled && d2("isEnabled", e3), b2(((t3) => null === t3 ? e3 : t3));
    }), [c2.isEnabled]), (0, I.J2)(xt().proxyProtocolChange, ((e3) => {
      d2("protocol", e3);
    })), (0, I.J2)(xt().proxyIpAddressChange, ((e3) => {
      d2("ipAddress", e3);
    })), (0, I.J2)(xt().proxyPortChange, ((e3) => {
      d2("port", e3);
    })), fe((0, a.useMemo)((() => ({ [Bt]: (e3) => {
      d2("isEnabled", e3);
    } })), []));
    const E2 = ({ target: { name: e3, value: t3 } }) => {
      if (!(e3 in c2)) return;
      h2 && xt().setProxyEnabled(false);
      const n3 = (function(e4, t4) {
        function n4(e5, n5) {
          return (a2) => {
            a2.length < 1 ? St().deletePassword(n5, It) : St().setPassword(n5, a2, It), t4(e5, a2);
          };
        }
        return (/* @__PURE__ */ new Map([["ipAddress", (e5) => {
          xt().setProxyIpAddress(e5);
        }], ["port", (e5) => {
          xt().setProxyPort(e5);
        }], ["username", n4("username", Ct)], ["password", n4("password", kt)]])).get(e4) ?? null;
      })(e3, d2);
      n3?.(t3), "ipAddress" !== e3 || u2 || p2(true), "port" !== e3 || m2 || g2(true), x2(Boolean(c2.isEnabled));
    }, A2 = !c2.isEnabled || "testing" === f2;
    return a.createElement("div", { className: "settings-network" }, a.createElement(be, { label: s2("PROXY SETTINGS") }, a.createElement(me.Sc, { id: Bt, checked: Boolean(c2.isEnabled), onChange: () => {
      const e3 = !c2.isEnabled;
      d2("isEnabled", e3), e3 !== h2 ? (x2(e3), e3 || (h2 && Tt().trackEvent({ eventName: "proxy_disabled" }), xt().setProxyEnabled(false), p2(true), g2(true))) : w2();
    }, label: s2("Use a proxy server"), tabIndex: 1 })), a.createElement(be, { label: s2("Proxy protocol"), className: "settings-network-input-select" }, a.createElement(Je, { tabIndex: 2, hasKeyboardNavigation: true, defaultSelectedId: c2.protocol, items: Ft, onChange: (e3) => {
      d2("protocol", e3), h2 && xt().setProxyEnabled(false), xt().setProxyProtocol(e3), x2(Boolean(c2.isEnabled));
    }, isDisabled: A2 })), a.createElement(Rt.k, { value: c2.ipAddress, onChange: E2, className: "settings-network-text-input", disabled: A2, errorMessage: s2("This field is required"), label: `${s2("Server IP address or domain name")}*`, maxLength: 255, name: "ipAddress", placeholder: "127.0.0.1", size: "small", valid: u2 }), a.createElement(Rt.k, { value: c2.port, onChange: E2, className: "settings-network-text-input", disabled: A2, errorMessage: s2("This field is required"), label: `${s2("Port")}*`, maxLength: 255, name: "port", placeholder: "3128", size: "small", valid: m2 }), c2.protocol !== Nt.Socks5 && a.createElement(a.Fragment, null, a.createElement(Rt.k, { value: c2.username, onChange: E2, className: "settings-network-text-input", disabled: A2, label: s2("Username"), maxLength: 255, name: "username", size: "small" }), a.createElement(Rt.k, { value: c2.password, onChange: E2, className: "settings-network-text-input", disabled: A2, label: s2("Password"), maxLength: 255, name: "password", size: "small", type: "password" })));
  };
  var $t = n(90922), Ht = {};
  Ht.styleTagTransform = G(), Ht.setAttributes = q(), Ht.insert = U().bind(null, "head"), Ht.domAPI = j(), Ht.insertStyleElement = Y(), $()($t.A, Ht), $t.A && $t.A.locals && $t.A.locals;
  const jt = "disableHardwareAcceleration", zt = "clearCacheAndCookies", Ut = "factoryReset", Wt = ({ setWarningText: e2, setWarningCallback: t2, setIsLoaderShowing: n2 }) => {
    const { t: o2 } = (0, r.Bd)(), [i2, l2] = (0, a.useState)(false);
    (0, I.J2)(E().hardwareAccelerationChange, l2);
    const s2 = () => {
      n2(true), L.app.relaunch(), L.app.quit();
    }, c2 = (0, a.useCallback)((() => {
      E().hardwareAccelerationChange.next(!i2), e2(o2("Relaunch for changes to take effect")), t2((() => s2));
    }), [i2, t2, e2]);
    return fe((0, a.useMemo)((() => ({ [jt]: c2 })), [c2])), a.createElement(a.Fragment, null, a.createElement(be, { label: o2("PERFORMANCE") }, a.createElement(me.Sc, { id: jt, checked: i2, onChange: c2, label: o2("Disable hardware acceleration") })), a.createElement(be, { label: o2("APP DATA") }, a.createElement("div", { className: "service-action-container" }, a.createElement(D.o, { tag: "label", name: "typography-regular-14px" }, o2("App cache")), a.createElement(M.SX, { onClick: () => {
      E().clearAppCacheAndCookies().catch(((e3) => {
        (0, v.Ow)().error("<ServiceSettings>.handleClearAppCacheAndCookies(): settingsProviderProxy().clearAppCacheAndCookies() error", e3);
      })), e2(o2("Relaunch for changes to take effect")), t2((() => s2));
    }, size: "xsmall", color: "gray", variant: "secondary", id: zt }, o2("Clear cache"))), a.createElement("div", { className: "service-action-container" }, a.createElement(D.o, { tag: "label", name: "typography-regular-14px" }, o2("Factory reset")), a.createElement(M.SX, { onClick: () => {
      e2(o2("Relaunch for changes to take effect")), t2((() => () => {
        E().factoryReset().catch(((e3) => {
          (0, v.Ow)().error("<ServiceSettings>.handleFactoryReset(): settingsProviderProxy().factoryReset() error", e3);
        })), s2();
      }));
    }, size: "xsmall", color: "gray", variant: "secondary", id: Ut }, o2("Back to defaults")))));
  };
  var qt = n(21642), Jt = {};
  Jt.styleTagTransform = G(), Jt.setAttributes = q(), Jt.insert = U().bind(null, "head"), Jt.domAPI = j(), Jt.insertStyleElement = Y(), $()(qt.A, Jt), qt.A && qt.A.locals && qt.A.locals;
  const Yt = a.memo((({ icon: e2, onClick: t2, selected: n2, title: r2, dataCategory: o2 = "", tabIndex: i2 = -1 }) => a.createElement("button", { className: "tab " + (n2 ? "selected" : ""), tabIndex: i2, "data-category": o2, onClick: t2 }, a.createElement("span", { className: "tab-icon" }, e2), a.createElement(D.o, { tag: "span", name: n2 ? "typography-accent-14px-semibold" : "typography-regular-14px" }, r2))));
  var Zt = n(20169), Gt = {};
  Gt.styleTagTransform = G(), Gt.setAttributes = q(), Gt.insert = U().bind(null, "head"), Gt.domAPI = j(), Gt.insertStyleElement = Y(), $()(Zt.A, Gt), Zt.A && Zt.A.locals && Zt.A.locals;
  const Xt = ({ primaryColor: e2 = "#000000", size: t2 = 20, secondaryColor: n2 = "transparent" }) => a.createElement("svg", { width: t2, height: t2, className: "tvd-spinner", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, a.createElement("path", { d: "M24 12a12 12 0 0 0-24 0h3a9 9 0 1 1 18 0h3Z", fill: e2 }), a.createElement("path", { d: "M24 12a12 12 0 0 1-24 0h3a9 9 0 0 0 18 0h3Z", fill: n2 }));
  var Kt = n(61316), _t = {};
  _t.styleTagTransform = G(), _t.setAttributes = q(), _t.insert = U().bind(null, "head"), _t.domAPI = j(), _t.insertStyleElement = Y(), $()(Kt.A, _t), Kt.A && Kt.A.locals && Kt.A.locals;
  const Qt = ({ warningText: e2, onClick: t2, customButtonText: n2, isErrorWarning: o2, isLoaderShowing: i2 }) => {
    const { t: l2 } = (0, r.Bd)();
    return a.createElement("div", { className: "warning-section" }, e2 && a.createElement(D.o, { tag: "span", name: "typography-regular-14px", className: "warning-text " + (o2 ? "error-message" : "") }, e2), t2 && a.createElement("div", { className: "warning-buttons" }, a.createElement(M.SX, { size: "small", variant: "primary", color: "black", onClick: t2 }, i2 ? a.createElement(Xt, null) : n2 || l2("Relaunch"))));
  }, en = [{ id: "symbolLogo", isVisible: true }, { id: "ticker", isVisible: true }, { id: "priceChangeIcon", isVisible: true }, { id: "lastPrice", isVisible: true }, { id: "priceChange", isVisible: true }, { id: "layoutName", isVisible: true }], tn = /* @__PURE__ */ new Map([["symbolLogo", () => Be.Ay.t("Symbol logo")], ["ticker", () => Be.Ay.t("Ticker")], ["priceChangeIcon", () => Be.Ay.t("Price change icon")], ["lastPrice", () => Be.Ay.t("Last price")], ["priceChange", () => Be.Ay.t("Price change %")], ["layoutName", () => Be.Ay.t("Layout name")]]);
  Array.prototype.except || (Array.prototype.except = function(e2) {
    return this.filter(((t2) => !e2.includes(t2)));
  }), Array.prototype.move || (Array.prototype.move = function(e2, t2) {
    if (e2 < 0 || e2 > this.length - 1) throw new Error("[Array.move] fromIndex out from array range");
    if (t2 < 0 || t2 > this.length - 1) throw new Error("[Array.move] toIndex out from array range");
    const n2 = this[e2];
    return this.splice(e2, 1), this.splice(t2, 0, n2), this;
  });
  var nn = n(57635);
  function an(e2, t2, n2) {
    return Math.max(n2, Math.min(t2, e2));
  }
  var rn = n(12329), on = n(55463), ln = n.n(on), sn = n(49686), cn = {};
  cn.styleTagTransform = G(), cn.setAttributes = q(), cn.insert = U().bind(null, "head"), cn.domAPI = j(), cn.insertStyleElement = Y(), $()(sn.A, cn), sn.A && sn.A.locals && sn.A.locals;
  const dn = ({ title: e2, label: t2, value: n2, icon: r2, onChange: o2, onDrag: i2, onDrop: l2, containerBounds: s2, offset: c2 }) => {
    const d2 = (0, a.useRef)(null), [u2, p2] = (0, a.useState)(false), [m2, g2] = (0, a.useState)(), [h2, b2] = (0, a.useState)(), f2 = { zIndex: u2 ? 1 : 0, cursor: u2 ? "grabbing" : "default" };
    u2 || void 0 === c2 || (f2.transition = "transform 0.2s ease-out");
    const y2 = u2 ? m2 : c2;
    return y2 && (f2.transform = `translate(0px, ${y2}px)`), a.createElement("div", { className: "draggable-checkbox-container", style: f2, ref: d2 }, a.createElement(me.Sc, { id: e2, checked: n2, onChange: () => {
      u2 || o2();
    }, label: t2, className: "checkbox", labelClassName: "checkbox-label", tabIndex: 1 }), a.createElement(ln(), { axis: "y", bounds: { top: 0, bottom: 0 }, onStart: () => {
      (0, v.yg)().info("<DraggableCheckbox>.handleDragStart()");
      const e3 = d2.current?.getBoundingClientRect();
      e3 && (p2(true), b2(e3));
    }, onDrag: (t3) => {
      if (!h2 || !s2 || "mousemove" !== t3.type) return;
      const n3 = t3, a2 = h2.height / 2, r3 = h2.y + a2, o3 = an(n3.clientY, s2.bottom - a2, s2.top + a2);
      g2(o3 - r3), i2({ title: e2, draggedElementRect: h2, clientY: n3.clientY });
    }, onStop: () => {
      (0, v.yg)().info("<DraggableCheckbox>.handleDragEnd()"), p2(false), g2(void 0), b2(void 0);
      const t3 = d2.current?.getBoundingClientRect();
      t3 && t3.y !== h2?.y && l2(e2);
    } }, a.createElement("div", { style: { cursor: u2 ? "grabbing" : "grab" } }, r2)));
  };
  var un = n(23354), pn = {};
  pn.styleTagTransform = G(), pn.setAttributes = q(), pn.insert = U().bind(null, "head"), pn.domAPI = j(), pn.insertStyleElement = Y(), $()(un.A, pn), un.A && un.A.locals && un.A.locals;
  const mn = () => {
    const { t: e2 } = (0, r.Bd)(), t2 = (0, a.useRef)(null), [n2, o2] = (0, a.useState)([]), [i2, l2] = (0, a.useState)(), s2 = (0, a.useCallback)(((e3, t3) => {
      if (0 === n2.length) return;
      const a2 = n2.map(((n3) => n3.id === e3 ? { id: e3, isVisible: t3 } : n3));
      E().tabChange.next(a2);
    }), [n2]);
    (0, a.useEffect)((() => {
      const e3 = (e4) => {
        if (e4.code !== S.N$.Enter || !(e4.target instanceof HTMLInputElement)) return;
        const { id: t3 } = e4.target, a2 = n2.find(((e5) => e5.id === t3));
        a2 && s2(a2.id, !a2.isVisible);
      };
      return document.addEventListener("keydown", e3), () => {
        document.removeEventListener("keydown", e3);
      };
    }), [s2, n2]), (0, rn.J)(E().tabChange, o2);
    const c2 = (0, a.useCallback)(((e3) => {
      if (0 === n2.length) return;
      const a2 = e3.draggedElementRect.height, r2 = ((e4, n3) => {
        const a3 = t2?.current?.getBoundingClientRect();
        if (!a3) return -1;
        const r3 = a3.height / n3, o3 = e4 - a3.top - n3 / 2;
        return an(Math.round(o3 / n3), r3, 0);
      })(e3.clientY, a2 + 8), i3 = (function(e4, t3, n3, a3) {
        if (n3 < 0) return;
        const r3 = (function(e5, t4) {
          if (!e5) return [];
          const n4 = [];
          return e5.forEach(((e6, a4) => {
            let r4 = a4;
            if (e6.offset && 0 !== e6.offset && e6.id !== t4) r4 = e6.offset > 0 ? r4 + 1 : r4 - 1;
            else if (n4[r4]) return;
            n4[r4] = e6;
          })), n4;
        })(a3, e4);
        let o3, i4, l3, s3 = r3.findIndex(((e5) => !e5));
        if (s3 < 0 && (s3 = r3.length < a3.length ? a3.length - 1 : r3.findIndex(((t4) => t4.id === e4))), n3 < s3) o3 = n3, i4 = s3, l3 = t3;
        else {
          if (!(n3 > s3)) return { tabState: a3, holeIndex: s3 };
          o3 = s3 + 1, i4 = n3 + 1, l3 = -t3;
        }
        for (let e5 = o3; e5 < i4; e5++) {
          const t4 = a3.find(((t5) => t5 === r3[e5]));
          t4 && (t4.offset || (t4.offset = 0), t4.offset += l3);
        }
        return { tabState: a3, holeIndex: s3 };
      })(e3.title, a2 + 8, r2, n2);
      i3 && (o2(i3.tabState), l2(i3.holeIndex));
    }), [n2]), d2 = (0, a.useCallback)(((e3) => {
      if (0 === n2.length) return;
      const t3 = [...n2], a2 = t3.findIndex(((t4) => t4.id === e3));
      a2 !== i2 && void 0 !== i2 && (E().tabChange.next(t3.move(a2, i2)), o2((function(e4) {
        if (e4) {
          for (const t4 of e4) t4.offset = void 0;
          return e4;
        }
      })(t3)));
    }), [i2, n2]);
    return a.createElement(be, { label: e2("TAB TITLE (DRAG TO REORDER)"), className: "tab-title-order", contentRef: t2 }, n2.map(((e3) => {
      const n3 = tn.get(e3.id);
      return a.createElement(a.Fragment, { key: e3.id }, n3 && a.createElement(dn, { key: e3.id, label: n3(), title: e3.id, value: e3.isVisible, onChange: () => {
        s2(e3.id, !e3.isVisible);
      }, icon: a.createElement(N.I, { icon: nn.f }), onDrag: c2, onDrop: d2, offset: e3.offset, containerBounds: t2.current?.getBoundingClientRect() }));
    })));
  };
  var gn = n(63514), hn = {};
  hn.styleTagTransform = G(), hn.setAttributes = q(), hn.insert = U().bind(null, "head"), hn.domAPI = j(), hn.insertStyleElement = Y(), $()(gn.A, hn), gn.A && gn.A.locals && gn.A.locals;
  const bn = "autoRestoreTickersAndIntervals", fn = "hideTabsInFullScreenMode", yn = { [bn]: E().saveSymbolIntervalChange.next, [fn]: E().macosHideTabsInFullscreenChange.next }, vn = () => {
    (0, v.yg)().info("<TabSettings>: setDefaultTabSettings()"), E().tabChange.next(en);
  }, xn = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)(false), [o2, i2] = (0, a.useState)(false);
    return (0, I.J2)(E().saveSymbolIntervalChange, n2), (0, I.J2)(E().macosHideTabsInFullscreenChange, i2), fe(yn), a.createElement(a.Fragment, null, a.createElement(be, { label: e2("ON STARTUP") }, a.createElement(me.Sc, { id: bn, checked: t2, onChange: () => {
      E().saveSymbolIntervalChange.next(!t2);
    }, label: e2("Auto-restore tickers and intervals"), tabIndex: 1 })), (0, S.iT)() && a.createElement(be, { label: e2("ON FULLSCREEN") }, a.createElement(me.Sc, { id: fn, checked: o2, onChange: () => {
      E().macosHideTabsInFullscreenChange.next(!o2), E().recomputeFullscreenedWindowsBounds(!o2).catch(((e3) => {
        (0, v.yg)().error("<TabSettings>.toggleHideTabsInFullScreen: settingsProviderProxy().recomputeFullscreenedWindowsBounds() error", e3);
      }));
    }, label: e2("Hide tabs in full screen mode"), tabIndex: 1 })), a.createElement(mn, null), a.createElement("div", { className: "control-button-wrapper" }, a.createElement(M.SX, { onClick: vn, size: "small", color: "gray", variant: "secondary", tabIndex: 2, id: "resetToDefault" }, e2("Reset to default"))));
  };
  var wn = n(4339), En = {};
  En.styleTagTransform = G(), En.setAttributes = q(), En.insert = U().bind(null, "head"), En.domAPI = j(), En.insertStyleElement = Y(), $()(wn.A, En), wn.A && wn.A.locals && wn.A.locals;
  const An = (e2) => (function(e3) {
    return [{ systemName: "General", name: e3("General"), icon: a.createElement(N.I, { icon: g.g }), iconSelected: a.createElement(N.I, { icon: m.E }), isVisible: true }, { systemName: "Tab", name: e3("Tabs"), icon: a.createElement(N.I, { icon: s.p }), iconSelected: a.createElement(N.I, { icon: l.a }), isVisible: true }, { systemName: "VideoAudio", name: e3("Video & Audio"), icon: a.createElement(N.I, { icon: b.z }), iconSelected: a.createElement(N.I, { icon: h.O }), isVisible: true }, { systemName: "Alerts", name: e3("Alerts"), icon: a.createElement(N.I, { icon: i.G }), iconSelected: a.createElement(N.I, { icon: o.o }), isVisible: true }, { systemName: "Service", name: e3("Service"), icon: a.createElement(N.I, { icon: y.t }), iconSelected: a.createElement(N.I, { icon: f.L }), isVisible: true }, { systemName: "Network", name: e3("Network"), icon: a.createElement(N.I, { icon: d.V }), iconSelected: a.createElement(N.I, { icon: c.x }), isVisible: !(0, S.j9)() }, { systemName: "About", name: e3("About"), icon: a.createElement(N.I, { icon: p.a }), iconSelected: a.createElement(N.I, { icon: u.E }), isVisible: true }];
  })(e2).filter((({ isVisible: e3 }) => e3)), Sn = () => {
    const { t: e2 } = (0, r.Bd)(), [t2, n2] = (0, a.useState)(An(e2)), [o2, i2] = (0, a.useState)((0, k.Mz)().currentActiveTab ?? "General"), [l2, s2] = (0, a.useState)(false), [c2, d2] = (0, a.useState)(null), [u2, p2] = (0, a.useState)(false), [m2, g2] = (0, a.useState)(false), [h2, b2] = (0, a.useState)(null), [f2, y2] = (0, a.useState)(null);
    (0, I.J2)((0, x.MY)().localeChange, (() => {
      n2(An(e2));
    }));
    const w2 = (0, a.useCallback)((() => {
      d2(null), b2(null), y2(null), p2(false), g2(false);
    }), []);
    return (0, a.useEffect)((() => {
      const e3 = (e4, n4) => {
        const a2 = "BODY" === e4.tagName ? e4.querySelectorAll(".tab")[n4] : e4.parentElement?.children.item(n4);
        a2 instanceof HTMLElement && a2.focus(), i2(t2[n4].systemName);
      }, n3 = (n4) => {
        if (Object.values(A).includes(n4.key)) {
          if (n4.target instanceof HTMLElement && ("settings" === n4.target.dataset.category || "BODY" === n4.target.tagName)) {
            n4.preventDefault();
            const a2 = t2.findIndex(((e4) => e4.systemName === o2));
            switch (n4.key) {
              case A.Down:
              case A.Right: {
                const r2 = a2 === t2.length - 1 ? 0 : a2 + 1;
                e3(n4.target, r2);
                break;
              }
              case A.Up:
              case A.Left: {
                const r2 = a2 - 1 >= 0 ? a2 - 1 : t2.length - 1;
                e3(n4.target, r2);
                break;
              }
            }
            w2();
          }
        } else n4.code === S.N$.Tab && n4.target instanceof HTMLElement && "BODY" !== n4.target.tagName && (l2 || s2(true));
      };
      return document.addEventListener("keydown", n3), () => {
        document.removeEventListener("keydown", n3);
      };
    }), [o2, w2, t2, l2]), a.createElement(a.Fragment, null, a.createElement("div", { className: "dialog-settings", onClick: (e3) => {
      if ("Service" === o2) {
        if (e3.target instanceof HTMLElement) {
          const t3 = document.querySelector(`#${jt}`), n3 = document.querySelector(`#${zt}`), a2 = document.querySelector(`#${Ut}`);
          if (t3?.contains(e3.target) || n3?.contains(e3.target) || a2?.contains(e3.target)) return;
        }
        w2();
      }
    } }, a.createElement("section", { className: "tabs-section" }, t2.map(((e3) => a.createElement(Yt, { key: e3.systemName, dataCategory: "settings", title: e3.name, tabIndex: o2 === e3.systemName && l2 ? 1 : -1, icon: o2 === e3.systemName ? e3.iconSelected : e3.icon, selected: o2 === e3.systemName, onClick: () => ((e4) => {
      i2(e4), E().setCurrentSettingsActiveTab(e4).catch(((e5) => {
        (0, v.Ow)().error("<SettingsDialog>.onTabClick(): settingsProviderProxy().setCurrentSettingsActiveTab() error", e5);
      }));
    })(e3.systemName) })))), a.createElement("section", { className: "page-section" }, (() => {
      switch (o2) {
        case "General":
        default:
          return a.createElement(vt, null);
        case "Tab":
          return a.createElement(xn, null);
        case "VideoAudio":
          return a.createElement(nt, null);
        case "Alerts":
          return a.createElement(Le, null);
        case "Service":
          return a.createElement(Wt, { setWarningText: d2, setWarningCallback: y2, setIsLoaderShowing: g2 });
        case "Network":
          return a.createElement(Ot, { setWarningText: d2, setCustomButtonText: b2, setWarningCallback: y2, setIsErrorWarning: p2, setIsLoaderShowing: g2, resetRelaunchWarning: w2 });
        case "About":
          return a.createElement(pe, null);
      }
    })())), (c2 || f2) && a.createElement(Qt, { warningText: c2, onClick: f2, customButtonText: h2, isErrorWarning: u2, isLoaderShowing: m2 }));
  };
} }]);
