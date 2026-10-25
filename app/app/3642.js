"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[3642], { 85842(t, e) {
  e.YD = void 0, e.YD = function(t2, e2) {
    if (void 0 === t2) throw new Error("".concat(null != e2 ? e2 : "Value", " is undefined"));
    return t2;
  };
}, 99303(t, e, n) {
  n.d(e, { A: () => i });
  var a = n(30050), r = n.n(a), l = n(77259), o = n.n(l)()(r());
  o.push([t.id, ".text-input-wrapper {\n	display: flex;\n	flex-direction: column;\n}\n\n.text-input-container {\n	position: relative;\n}\n\n.text-input {\n	width: 100%;\n\n	&:has(input:focus-visible) {\n		outline: 2px solid var(--color-tv-blue-a600); /* base ui-lib palette color */\n		outline-offset: -1px;\n	}\n}\n\n.text-input-end-adornment {\n	position: absolute;\n	top: 50%;\n	transform: translate(0, -50%);\n	height: 100%;\n	display: flex;\n	align-items: center;\n\n	[dir='ltr'] & {\n		&.small {\n			right: 4px;\n		}\n\n		&.medium {\n			right: 11px;\n		}\n	}\n\n	[dir='rtl'] & {\n		&.small {\n			left: 4px;\n		}\n\n		&.medium {\n			left: 11px;\n		}\n	}\n}\n\n.text-input-error-icon {\n	color: var(--color-content-primary-danger);\n}\n\n.text-input-clear-icon {\n	color: var(--color-content-secondary-neutral-bold);\n}\n\n.text-input-password-icon {\n	color: var(--color-content-primary-neutral);\n}\n", ""]);
  const i = o;
}, 23682(t, e, n) {
  n.d(e, { A: () => i });
  var a = n(30050), r = n.n(a), l = n(77259), o = n.n(l)()(r());
  o.push([t.id, ".dialog.credentials {\n	& > .dialog-title {\n		margin-bottom: 24px;\n\n		&:has(+ .dialog-content > .broker-credentials > .broker-credentials-subtitle) {\n			margin-bottom: 0;\n		}\n	}\n\n	& > .dialog-buttons {\n		margin-top: 16px;\n	}\n}\n\n.broker-credentials {\n	position: relative;\n	margin-bottom: 24px;\n}\n\n.broker-credentials-subtitle {\n	color: var(--color-dialog-title);\n	margin: 0 0 24px;\n	overflow: hidden;\n	text-overflow: ellipsis;\n}\n\n.broker-credentials-inputs {\n	display: flex;\n	flex-direction: column;\n	gap: 16px;\n}\n\n.broker-credentials-input {\n	/* TODO: get rid of this rule when ui-lib colors are updated */\n	background-color: transparent !important;\n}\n", ""]);
  const i = o;
}, 76753(t, e, n) {
  var a = n(72539), r = n.n(a), l = n(48560), o = n.n(l), i = n(57148), s = n.n(i), d = n(60251), c = n.n(d), u = n(81263), p = n.n(u), m = n(50892), b = n.n(m), g = n(99303), x = {};
  x.styleTagTransform = b(), x.setAttributes = c(), x.insert = s().bind(null, "head"), x.domAPI = o(), x.insertStyleElement = p(), r()(g.A, x), g.A && g.A.locals && g.A.locals;
}, 67078(t, e, n) {
  n.d(e, { k: () => a.k });
  var a = n(58702);
}, 58702(t, e, n) {
  n.d(e, { k: () => p });
  var a = n(79474), r = n(58673), l = n(39343), o = n(1832), i = n(99030), s = n(9471), d = n(4303), c = n(56643), u = n(75739);
  n(76753);
  const p = ({ value: t2, onChange: e2, id: n2, allowClear: p2 = false, allowShowPasswordWhenDisabled: m = false, autoFocus: b = false, className: g = "", disabled: x = false, errorMessage: h, inputRef: v, label: f, maxLength: w, name: k, onClear: E, onFocus: y, onBlur: A, placeholder: C, size: N = "small", startSlot: S, tabIndex: I, type: D = "text", valid: F = true }) => {
    const P = (0, a.useRef)(null), T = v ?? P, [$, z] = (0, a.useState)(false), [B, R] = (0, a.useState)({}), L = document.activeElement === T.current, M = (0, a.useCallback)(((t3) => {
      if (!t3) return;
      const e3 = Math.round(t3.getBoundingClientRect().width), n3 = (function(t4) {
        return { small: 4, medium: 11 }[t4] ?? 0;
      })(N), a2 = (0, u.Dd)() ? "paddingLeft" : "paddingRight";
      R({ [a2]: `${e3 + n3}px` });
    }), [N, L]), O = p2 || "password" === D || !F, U = p2 && (L || !!t2);
    return a.createElement("div", { className: `text-input-wrapper ${g}` }, f && a.createElement(l.J, { htmlFor: n2 }, f), a.createElement("div", { className: `text-input-container ${g}`, title: h }, a.createElement(r.p, { id: n2, value: t2, onChange: e2, autoFocus: b, className: `text-input ${g}`, disabled: x, intent: F ? "default" : "danger", maxLength: w, name: k, onFocus: y, onBlur: A, reference: T, startSlot: S, placeholder: C, size: N, style: B, tabIndex: I, type: "password" !== D || $ ? "text" : "password" }), O && a.createElement("div", { className: `text-input-end-adornment ${N}`, ref: M }, !F && a.createElement(o.I, { icon: s.v, className: "ui-lib-icon text-input-error-icon", title: h }), U && a.createElement(o.I, { icon: i.F, onClick: E, className: "ui-lib-icon text-input-clear-icon" }), "password" === D && a.createElement(o.I, { icon: $ ? c.f : d.e, onClick: () => {
      x && !m || z(((t3) => !t3));
    }, className: "ui-lib-icon text-input-password-icon" }))));
  };
}, 50473(t, e, n) {
  n.r(e), n.d(e, { default: () => k });
  var a = n(79474), r = n(62020), l = n(20369), o = n(67078), i = n(72539), s = n.n(i), d = n(48560), c = n.n(d), u = n(57148), p = n.n(u), m = n(60251), b = n.n(m), g = n(81263), x = n.n(g), h = n(50892), v = n.n(h), f = n(23682), w = {};
  w.styleTagTransform = v(), w.setAttributes = b(), w.insert = p().bind(null, "head"), w.domAPI = c(), w.insertStyleElement = x(), s()(f.A, w), f.A && f.A.locals && f.A.locals;
  const k = ({ data: t2, inputChange: e2 }) => {
    const { t: n2 } = (0, r.Bd)(), { enteredCredentials: { account: i2, password: s2 }, isUpdateSavedPassword: d2 } = t2;
    return (0, a.useEffect)((() => {
      e2({ credentials: { account: i2, password: s2 } });
    }), [i2, e2, s2]), a.createElement("div", { className: "broker-credentials" }, d2 && a.createElement(l.o, { tag: "p", name: "typography-accent-20px-semibold", className: "broker-credentials-subtitle" }, i2), a.createElement("div", { className: "broker-credentials-inputs" }, !d2 && a.createElement(o.k, { value: i2, onChange: () => {
    }, className: "broker-credentials-input", label: n2("Username"), disabled: true, size: "medium" }), a.createElement(o.k, { value: s2, onChange: () => {
    }, className: "broker-credentials-input", allowShowPasswordWhenDisabled: true, label: n2("Password"), disabled: true, size: "medium", type: "password" })));
  };
} }]);
