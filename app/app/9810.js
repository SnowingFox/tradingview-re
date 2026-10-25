(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[9810], { 92920(e, t, r) {
  e.exports = r(70156);
}, 85842(e, t) {
  "use strict";
  t.YD = void 0, t.YD = function(e2, t2) {
    if (void 0 === e2) throw new Error("".concat(null != t2 ? t2 : "Value", " is undefined"));
    return e2;
  };
}, 65767(e, t, r) {
  "use strict";
  r.d(t, { cX: () => a, nr: () => n, un: () => l });
  const o = "undefined" != typeof window && "undefined" != typeof navigator, i = o && "ontouchstart" in window, n = (o && i && window, o && (i || navigator.maxTouchPoints), o && window.chrome && window.chrome.runtime, o && window.navigator.userAgent.toLowerCase().indexOf("firefox"), o && /\sEdge\/\d\d\b/.test(navigator.userAgent), o && Boolean(navigator.vendor) && navigator.vendor.indexOf("Apple") > -1 && -1 === navigator.userAgent.indexOf("CriOS") && -1 === navigator.userAgent.indexOf("FxiOS")), a = o && /mac/i.test(navigator.platform), l = (o && /Win32|Win64/i.test(navigator.platform), o && /Linux/i.test(navigator.platform), o && /Android/i.test(navigator.userAgent), o && /BlackBerry/i.test(navigator.userAgent), o && /iPhone|iPad|iPod/.test(navigator.platform));
  o && /Opera Mini/i.test(navigator.userAgent), o && ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /iPad/.test(navigator.platform));
}, 70092(e, t, r) {
  "use strict";
  r.d(t, { Sc: () => N });
  var o = r(79474), i = r(14487), n = r.n(i);
  const a = function() {
  }, l = (0, o.createContext)({ getName: () => "", getValues: () => [], getOnChange: () => a, subscribe: a, unsubscribe: a });
  o.PureComponent;
  var s = r(17527), c = r(1832);
  const d = JSON.parse('{"box":"box-14az0zU6","noOutline":"noOutline-U61cHE0g","disabled":"disabled-xjGTMR9d","intent-danger":"intent-danger-3UwDcY_6","checked":"checked-2C5pvG6y","check":"check-J7WybJpv","icon":"icon-3ccexQMV","dot":"dot-Zm1UqPMe","disableActiveStyles":"disableActiveStyles-2UZMQMGz"}');
  var u = r(72539), p = r.n(u), f = r(48560), b = r.n(f), h = r(57148), v = r.n(h), g = r(60251), m = r.n(g), y = r(81263), x = r.n(y), w = r(50892), k = r.n(w), z = r(63405), T = {};
  function S(e2) {
    const { indeterminate: t2, checked: r2, tabIndex: i2, className: a2, disabled: l2, disableActiveStyles: s2, intent: u2, hideIcon: p2, ...f2 } = e2, b2 = t2 || !r2 || p2 ? "" : '<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999878 4L3.99988 7L9.99988 1" stroke-width="2" stroke="currentColor"/></svg>', h2 = n()(d.box, d[`intent-${u2}`], !t2 && d.check, !!t2 && d.dot, -1 === i2 && d.noOutline, a2, r2 && d.checked, l2 && d.disabled, s2 && d.disableActiveStyles);
    return o.createElement("span", { className: h2, ...f2 }, o.createElement(c.I, { icon: b2, className: d.icon }));
  }
  T.styleTagTransform = k(), T.setAttributes = m(), T.insert = v().bind(null, "head"), T.domAPI = b(), T.insertStyleElement = x(), p()(z.A, T), z.A && z.A.locals && z.A.locals;
  const A = JSON.parse('{"wrapper":"wrapper-21v50zE8","input":"input-24iGIobO","view":"view-2By9coT7","danger":"danger-2biHRIpo"}');
  var O = r(67160), M = {};
  function P(e2) {
    const t2 = n()(A.wrapper, e2.className);
    return o.createElement("span", { className: t2, title: e2.title, style: e2.style }, o.createElement("input", { id: e2.id, tabIndex: e2.tabIndex, className: n()(e2.intent && A[e2.intent], A.input), type: "checkbox", name: e2.name, checked: e2.checked, disabled: e2.disabled, value: e2.value, autoFocus: e2.autoFocus, role: e2.role, onChange: function() {
      e2.onChange?.(e2.value);
    }, ref: e2.reference, "aria-required": e2["aria-required"], "aria-describedby": e2["aria-describedby"], "aria-invalid": e2["aria-invalid"], "data-qa-id": e2.dataQaId, ...(0, s.r8)(e2) }), o.createElement(S, { className: A.view, indeterminate: e2.indeterminate, checked: e2.checked, disabled: e2.disabled, intent: e2.intent, tabIndex: e2.tabIndex }));
  }
  M.styleTagTransform = k(), M.setAttributes = m(), M.insert = v().bind(null, "head"), M.domAPI = b(), M.insertStyleElement = x(), p()(O.A, M), O.A && O.A.locals && O.A.locals;
  const D = JSON.parse('{"kv":"checkbox-3xZUD-2M","BE":"reverse-3xeTx96y","Pf":"label-cyItEVpF","_Z":"baseline-6TXKro4X"}');
  var j, E, C = r(55231), I = {};
  I.styleTagTransform = k(), I.setAttributes = m(), I.insert = v().bind(null, "head"), I.domAPI = b(), I.insertStyleElement = x(), p()(C.A, I), C.A && C.A.locals && C.A.locals;
  class N extends o.PureComponent {
    render() {
      const { inputClassName: e2, labelClassName: t2, ...r2 } = this.props, i2 = n()(this.props.className, D.kv, { [D.BE]: Boolean(this.props.labelPositionReverse), [D._Z]: Boolean(this.props.labelAlignBaseline) }), a2 = n()(D.Pf, t2, { [D.disabled]: this.props.disabled });
      let l2 = null;
      return this.props.label && (l2 = o.createElement("span", { className: a2, title: this.props.title }, this.props.label)), o.createElement("label", { className: i2 }, o.createElement(P, { ...r2, className: e2 }), l2);
    }
  }
  N.defaultProps = { value: "on" }, j = N, E = class extends o.PureComponent {
    constructor() {
      super(...arguments), this._onChange = (e2) => {
        this.context.getOnChange()(e2);
      }, this._onUpdate = (e2) => {
        e2.includes(this.props.value) && this.forceUpdate();
      };
    }
    componentDidMount() {
      this.context.subscribe(this._onUpdate);
    }
    render() {
      return o.createElement(j, { ...this.props, name: this._getName(), onChange: this._onChange, checked: this._isChecked() });
    }
    componentWillUnmount() {
      this.context.unsubscribe(this._onUpdate);
    }
    _getName() {
      return this.context.getName();
    }
    _isChecked() {
      return this.context.getValues().includes(this.props.value);
    }
  }, E.contextType = l;
}, 27654(e, t, r) {
  "use strict";
  r.d(t, { o: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 6a9 9 0 1 1 0 18.001 9 9 0 0 1 0-18m0 1.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15m1 9h-5V15h3.5v-5H15zM8.905 5.042l-4.83 4.959-1.074-1.047 4.83-4.958zm16.098 3.912L23.929 10l-4.83-4.959 1.075-1.046z"/></svg>';
}, 79623(e, t, r) {
  "use strict";
  r.d(t, { G: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 6a9 9 0 1 1 0 18 9 9 0 0 1 0-18m0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 9.002h-4v-1h3v-5h1zM8.643 4.681l-4.91 5.317L3 9.32l4.908-5.317zm16.36 4.638-.733.68-4.91-5.318.736-.679z"/></svg>';
}, 64149(e, t, r) {
  "use strict";
  r.d(t, { Y: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3m-1.033 12.305-3.655-3.177L8 13.638l5.018 4.36 6.978-6.538L18.63 10z"/></svg>';
}, 57635(e, t, r) {
  "use strict";
  r.d(t, { f: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="currentColor" d="M6 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>';
}, 94350(e, t, r) {
  "use strict";
  r.d(t, { a: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M20.32 5.75a2.75 2.75 0 0 1 2.75 2.75v11a2.75 2.75 0 0 1-2.75 2.75h-13a2.75 2.75 0 0 1-2.75-2.75v-11a2.75 2.75 0 0 1 2.75-2.75zM6.07 19.5c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-9.24H6.07zM7.32 7.25c-.69 0-1.25.56-1.25 1.25v.26h15.5V8.5c0-.69-.56-1.25-1.25-1.25z"/></svg>';
}, 57041(e, t, r) {
  "use strict";
  r.d(t, { p: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M20.5 6A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6zM6 19.5A1.5 1.5 0 0 0 7.5 21h13a1.5 1.5 0 0 0 1.5-1.5V10H6zM7.5 7A1.5 1.5 0 0 0 6 8.5V9h16v-.5A1.5 1.5 0 0 0 20.5 7z"/></svg>';
}, 81970(e, t, r) {
  "use strict";
  r.d(t, { x: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3m0 15.5c-1.101 0-2.153.142-3.128.401.283 1.768.712 3.28 1.23 4.41a9.5 9.5 0 0 0 3.796 0c.518-1.13.947-2.642 1.23-4.41A12.2 12.2 0 0 0 14 18.5m-4.567.89a9.6 9.6 0 0 0-2.202 1.276 9.5 9.5 0 0 0 3.03 2.07 21 21 0 0 1-.828-3.346m9.134 0a21 21 0 0 1-.829 3.346 9.5 9.5 0 0 0 3.03-2.07 9.6 9.6 0 0 0-2.2-1.276M6.257 8.495A9.46 9.46 0 0 0 4.5 14c0 2.057.654 3.962 1.766 5.518a11.2 11.2 0 0 1 2.95-1.657A34 34 0 0 1 9 14c0-1.333.075-2.625.214-3.842a10.7 10.7 0 0 1-2.957-1.663m15.486 0a10.7 10.7 0 0 1-2.957 1.663c.14 1.217.214 2.509.214 3.842 0 1.34-.075 2.64-.216 3.861 1.098.42 2.095.98 2.95 1.657A9.46 9.46 0 0 0 23.5 14a9.45 9.45 0 0 0-1.757-5.505m-4.416 2.113A14 14 0 0 1 14 11a14 14 0 0 1-3.327-.392A33 33 0 0 0 10.5 14c0 1.19.061 2.331.174 3.403A13.7 13.7 0 0 1 14 17c1.156 0 2.275.14 3.326.403.113-1.072.174-2.214.174-3.403 0-1.185-.06-2.323-.173-3.392M14 4.5q-.976.001-1.898.19c-.52 1.131-.949 2.648-1.232 4.421.972.252 2.025.389 3.13.389s2.158-.137 3.13-.389c-.283-1.773-.713-3.29-1.232-4.422A9.6 9.6 0 0 0 14 4.5m-3.738.764a9.5 9.5 0 0 0-3.041 2.08 9.1 9.1 0 0 0 2.208 1.287c.21-1.242.491-2.378.833-3.367m7.476 0c.342.989.624 2.125.833 3.367a9.1 9.1 0 0 0 2.208-1.286 9.5 9.5 0 0 0-3.04-2.081"/></svg>';
}, 75675(e, t, r) {
  "use strict";
  r.d(t, { V: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3m0 15c-1.302 0-2.54.195-3.666.546.33 2.145.883 3.955 1.568 5.216l-.024.012a10 10 0 0 0 4.244 0l-.024-.012c.685-1.261 1.238-3.071 1.568-5.216A12.3 12.3 0 0 0 14 18m-4.624.893c-1.091.452-2.05 1.058-2.828 1.775a10 10 0 0 0 4.075 2.747c-.539-1.237-.966-2.782-1.247-4.522m9.248 0c-.28 1.74-.708 3.285-1.247 4.522a10 10 0 0 0 4.075-2.747c-.778-.717-1.737-1.323-2.828-1.775M5.914 8.115A9.96 9.96 0 0 0 4 14c0 2.202.712 4.238 1.918 5.89.918-.835 2.044-1.523 3.313-2.017A32 32 0 0 1 9 14c0-1.34.08-2.636.229-3.852-1.28-.492-2.408-1.182-3.315-2.033m16.172 0c-.906.85-2.035 1.541-3.314 2.033A32 32 0 0 1 19 14c0 1.348-.08 2.65-.231 3.873 1.269.494 2.395 1.182 3.313 2.017A9.96 9.96 0 0 0 24 14c0-2.2-.71-4.234-1.914-5.885m-4.283 2.358A13.7 13.7 0 0 1 14 11c-1.337 0-2.62-.184-3.803-.527A31 31 0 0 0 10 14c0 1.238.07 2.427.2 3.542A13.4 13.4 0 0 1 14 17c1.336 0 2.618.191 3.8.542.13-1.115.2-2.304.2-3.542 0-1.233-.07-2.417-.197-3.527M14 4c-.728 0-1.438.078-2.122.226l.024.013c-.686 1.264-1.242 3.08-1.57 5.23A12.6 12.6 0 0 0 14 10a12.6 12.6 0 0 0 3.669-.53c-.33-2.152-.885-3.967-1.571-5.23l.024-.014A10 10 0 0 0 14 4m-3.377.585a10 10 0 0 0-4.079 2.75c.763.731 1.725 1.341 2.829 1.793.28-1.75.709-3.301 1.25-4.543m6.754 0c.541 1.242.97 2.794 1.25 4.543 1.104-.452 2.066-1.062 2.83-1.792a10 10 0 0 0-4.08-2.751"/></svg>';
}, 97606(e, t, r) {
  "use strict";
  r.d(t, { E: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3m0 1.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19M15 20h-1.5v-6.5H12V12h3zM14 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/></svg>';
}, 11861(e, t, r) {
  "use strict";
  r.d(t, { a: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.076 3 14 7.925 3 14 3m0 1C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.524 4 14 4m1 16h-1v-7h-2v-1h3zM14 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>';
}, 74663(e, t, r) {
  "use strict";
  r.d(t, { E: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" fill-rule="evenodd" d="M20 7.5H8a.5.5 0 0 0-.5.5v8h13V8a.5.5 0 0 0-.5-.5M6 8v8l-1.923 4.615A1 1 0 0 0 5 22h18a1 1 0 0 0 .923-1.385L22 16V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2m11.5 12.5h4.75l-1.25-3H7l-1.25 3h4.75l.272-.816a1 1 0 0 1 .949-.684h4.558a1 1 0 0 1 .949.684z"/></svg>';
}, 65970(e, t, r) {
  "use strict";
  r.d(t, { g: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M20 6a2 2 0 0 1 2 2v8l1.923 4.615A1 1 0 0 1 23 22H5a1 1 0 0 1-.923-1.385L6 16V8a2 2 0 0 1 2-2zM5 21h5.333l.44-1.316A1 1 0 0 1 11.72 19h4.558a1 1 0 0 1 .95.684L17.667 21H23l-1.667-4H6.667zm6.388 0h5.224l-.333-1h-4.558zM8 7a1 1 0 0 0-1 1v8h14V8a1 1 0 0 0-1-1z"/></svg>';
}, 48126(e, t, r) {
  "use strict";
  r.d(t, { T: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M14 19a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-.001-14a2.998 2.998 0 0 1 2.937 3.597l-1.47 7.204a1.498 1.498 0 0 1-2.935 0l-1.47-7.204A2.998 2.998 0 0 1 14 5"/></svg>';
}, 38734(e, t, r) {
  "use strict";
  r.d(t, { O: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M16.502 6.748a2.75 2.75 0 0 1 2.75 2.75v1.287l3.19-1.594a1.25 1.25 0 0 1 1.809 1.119v8.378a1.25 1.25 0 0 1-1.806 1.12l-3.193-1.584v1.278a2.75 2.75 0 0 1-2.75 2.75H6.498a2.75 2.75 0 0 1-2.75-2.75V9.498a2.75 2.75 0 0 1 2.75-2.75zm-10.004 1.5c-.69 0-1.25.56-1.25 1.25v10.004c0 .69.56 1.25 1.25 1.25h10.004c.69 0 1.25-.56 1.25-1.25V17.48l-.002-.002v-1.673l5.001 2.48v-7.571l-5.001 2.498v-1.677h.002V9.497c0-.69-.56-1.25-1.25-1.25z"/></svg>';
}, 71673(e, t, r) {
  "use strict";
  r.d(t, { z: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M16.502 6.998a2.5 2.5 0 0 1 2.5 2.5v1.692l3.552-1.775A1 1 0 0 1 24 10.31v8.378a1 1 0 0 1-1.444.895l-3.555-1.763v1.682a2.5 2.5 0 0 1-2.5 2.5H6.498a2.5 2.5 0 0 1-2.5-2.5V9.498a2.5 2.5 0 0 1 2.5-2.5zm-10.004 1a1.5 1.5 0 0 0-1.5 1.5v10.004a1.5 1.5 0 0 0 1.5 1.5h10.004a1.5 1.5 0 0 0 1.5-1.5v-2.178H18v-1.117l5.001 2.48V10.31L18 12.808V11.69l.002-.002v-2.19a1.5 1.5 0 0 0-1.5-1.5z"/></svg>';
}, 67604(e, t, r) {
  "use strict";
  r.d(t, { p: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M21.998 6.709 6.707 22 6 21.293 21.291 6.002zM18 22h-1l-5.302-3.577.72-.72L17 20.793v-7.672l1-1zm0-14.121-1 1v-1.67l-5.37 3.62-.253.171H8.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h.379l-.905.905A1.5 1.5 0 0 1 7 16.5v-5A1.5 1.5 0 0 1 8.5 10h2.571L17 6.003 18 6z"/></svg>';
}, 22295(e, t, r) {
  "use strict";
  r.d(t, { Z: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M18 22h-1l-5.929-4H8.5A1.5 1.5 0 0 1 7 16.5v-5A1.5 1.5 0 0 1 8.5 10h2.571L17 6.003 18 6zm-6.623-11H8.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.877L17 20.794V7.209zm8.57.271q.325.357.558.784c.316.577.496 1.24.496 1.943a4.04 4.04 0 0 1-1.084 2.76l-.002.002-.731-.682a3.04 3.04 0 0 0 .817-2.08c0-.803-.31-1.532-.816-2.078l-.001-.002.731-.68z"/></svg>';
}, 2800(e, t, r) {
  "use strict";
  r.d(t, { a: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M18 22h-1l-5.929-4H8.5A1.5 1.5 0 0 1 7 16.5v-5A1.5 1.5 0 0 1 8.5 10h2.571L17 6.003 18 6zm-6.623-11H8.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.877L17 20.794V7.209zm9.893-1.941q.425.268.797.604A5.82 5.82 0 0 1 24 14a5.82 5.82 0 0 1-1.932 4.335 6 6 0 0 1-.797.605h-.002l-.534-.846.033-.02A4.83 4.83 0 0 0 22.999 14a4.83 4.83 0 0 0-2.265-4.095l.534-.846zm-1.323 2.213a4.04 4.04 0 0 1 1.054 2.726 4.04 4.04 0 0 1-1.084 2.76l-.002.002-.731-.682a3.04 3.04 0 0 0 .817-2.08c0-.803-.31-1.532-.816-2.078l-.001-.002.731-.68z"/></svg>';
}, 59374(e, t, r) {
  "use strict";
  r.d(t, { L: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M11.288 4.75c4.135 0 7.537 3.23 7.537 7.276 0 .67-.094 1.318-.27 1.934l4.087 4.086a1.75 1.75 0 0 1 0 2.474l-2.122 2.122a1.75 1.75 0 0 1-2.474 0l-3.886-3.886a7.8 7.8 0 0 1-2.872.547c-4.135 0-7.538-3.23-7.538-7.277 0-.793.132-1.559.376-2.275.338-.991 1.529-1.092 2.152-.469l2.99 2.991a1.477 1.477 0 0 0 2.09-2.088L8.445 7.273c-.636-.636-.51-1.846.5-2.165a7.8 7.8 0 0 1 2.342-.358m0 1.5c-.537 0-1.058.067-1.552.192l2.682 2.682a2.977 2.977 0 0 1-4.21 4.21l-2.765-2.765a5.6 5.6 0 0 0-.193 1.457c0 3.163 2.676 5.777 6.038 5.777.978 0 1.9-.223 2.714-.616l.48-.23 4.624 4.624a.25.25 0 0 0 .354 0l2.121-2.121a.25.25 0 0 0 0-.354l-4.746-4.746.161-.448c.213-.59.33-1.225.33-1.886 0-3.162-2.676-5.776-6.038-5.776"/></svg>';
}, 59623(e, t, r) {
  "use strict";
  r.d(t, { t: () => o });
  const o = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28"><path fill="currentColor" d="M11.288 5c4.006 0 7.287 3.128 7.287 7.026 0 .696-.105 1.37-.3 2.005l4.19 4.192a1.5 1.5 0 0 1 0 2.12l-2.121 2.122a1.5 1.5 0 0 1-2.121 0l-4.004-4.003c-.898.38-1.89.59-2.93.59C7.281 19.053 4 15.926 4 12.027c0-.765.127-1.503.362-2.194.27-.79 1.227-.885 1.74-.373l2.99 2.991a1.727 1.727 0 0 0 2.442-2.441L8.623 7.097c-.523-.523-.409-1.496.398-1.75A7.5 7.5 0 0 1 11.288 5m0 1c-.688 0-1.349.106-1.967.3l-.011.006h-.002l-.004.012c-.004.017 0 .045.026.072l2.911 2.91a2.727 2.727 0 0 1-3.856 3.857l-2.99-2.991c-.027-.026-.055-.03-.07-.026l-.009.003h-.002v.002l-.004.01A5.8 5.8 0 0 0 5 12.026c0 3.31 2.797 6.027 6.288 6.027a6.5 6.5 0 0 0 2.822-.64l.32-.154 4.5 4.499a.5.5 0 0 0 .707 0l2.12-2.121a.5.5 0 0 0 0-.707l-4.633-4.634.107-.299c.223-.617.344-1.28.344-1.97C17.575 8.716 14.78 6 11.288 6"/></svg>';
}, 32371(e, t, r) {
  "use strict";
  r.d(t, { zO: () => o });
  const o = "data-is-popover-item-button";
}, 37755(e, t, r) {
  "use strict";
  r.d(t, { aT: () => i }), r(79474), r(85842);
  const o = /* @__PURE__ */ new Map();
  function i(e2, t2) {
    if (e2.contains(t2)) return true;
    for (const r2 of o.values()) {
      const o2 = r2[0](), n = r2[1]();
      if (o2 && n && e2.contains(o2) && i(n, t2)) return true;
    }
    return false;
  }
}, 97917(e, t, r) {
  "use strict";
  r.d(t, { f: () => k });
  var o = r(79474), i = r(14487), n = r.n(i);
  function a(e2) {
    const t2 = void 0 !== e2 ? (r2 = e2, Math.min(Math.max(r2, 0), 100)) : e2;
    var r2;
    return { "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": t2, style: { "--ui-lib-progressbar-value": t2 } };
  }
  const l = JSON.parse('{"xsmall":"xsmall-2vJYgf6G","small":"small-75N_goCf","medium":"medium-YBupIiX5","large":"large-tSdjHsO2","progressbar":"progressbar-3EYgYkTs","circle":"circle-Rj2ri0DJ","background":"background-2a3NzJ2H","foreground":"foreground-3svpcUbB","spinner":"spinner-2XuPmZC_","spin":"spin-15kwLs33","neutral":"neutral-2Qe4Jzi8","accent":"accent-2SSYGG5b","success":"success-Bc4QcaqP","warning":"warning-2GRfsHby","danger":"danger-393lCrUq"}');
  var s = r(72539), c = r.n(s), d = r(48560), u = r.n(d), p = r(57148), f = r.n(p), b = r(60251), h = r.n(b), v = r(81263), g = r.n(v), m = r(50892), y = r.n(m), x = r(86396), w = {};
  function k(e2) {
    const { size: t2, ariaLabel: r2, ariaLabelledby: i2, id: s2, intent: c2, value: d2 } = e2, u2 = void 0 === d2;
    return o.createElement("div", { className: n()(l[t2], l.progressbar), role: "progressbar", "aria-label": r2, "aria-labelledby": i2, id: s2, ...a(d2) }, o.createElement("svg", { className: n()(l.circle, l[c2], u2 && l.spinner) }, o.createElement("circle", { className: l.background }), o.createElement("circle", { className: l.foreground })));
  }
  w.styleTagTransform = y(), w.setAttributes = h(), w.insert = f().bind(null, "head"), w.domAPI = u(), w.insertStyleElement = g(), c()(x.A, w), x.A && x.A.locals && x.A.locals;
}, 49176(e, t, r) {
  "use strict";
  r.d(t, { A: () => J });
  var o = r(79474), i = r(14487), n = r.n(i);
  const a = JSON.parse('{"Wj":"tooltipAppearance--_2yHZBg","UE":"arrow-2BDFJs1U","vW":"inner-7yGPZKjt"}');
  var l = r(72539), s = r.n(l), c = r(48560), d = r.n(c), u = r(57148), p = r.n(u), f = r(60251), b = r.n(f), h = r(81263), v = r.n(h), g = r(50892), m = r.n(g), y = r(94121), x = {};
  function w(e2) {
    const { children: t2 } = e2;
    return o.createElement("div", { className: a.Wj }, o.createElement("div", { className: a.UE }), o.createElement("div", { className: a.vW }, t2));
  }
  x.styleTagTransform = m(), x.setAttributes = b(), x.insert = p().bind(null, "head"), x.domAPI = d(), x.insertStyleElement = v(), s()(y.A, x), y.A && y.A.locals && y.A.locals;
  const k = JSON.parse('{"medium":"medium-1p4w012e","large":"large-P80Y3t24","sliderThumb":"sliderThumb-1ibp6IkF","grabbed":"grabbed-2IMnqPGz","tooltip":"tooltip-2aP-bQ7j","forceTooltip":"forceTooltip-3hAtPV2B","noWrap":"noWrap-28LZhg6F"}');
  var z = r(1354), T = {};
  function S(e2) {
    const { disabled: t2 = false, onKeyDown: r2, value: i2, ariaValuemin: a2, ariaValuemax: l2, size: s2 = "medium", ariaLabel: c2, ariaLabelledBy: d2, valueToText: u2, showTooltip: p2, isDragged: f2, id: b2, forceTooltip: h2, __doNotUseThisPropNoWrapTooltip: v2 } = e2, g2 = u2 ? u2(i2) : void 0, m2 = g2 || i2.toString(10);
    return o.createElement("div", { className: n()(k.sliderThumb, k[s2], f2 && k.grabbed, h2 && k.forceTooltip), role: "slider", tabIndex: t2 ? -1 : 0, "aria-valuenow": i2, "aria-valuemin": a2, "aria-valuemax": l2, "aria-label": c2, "aria-labelledby": d2, "aria-valuetext": g2, "aria-disabled": t2, id: b2, onKeyDown: t2 ? void 0 : r2 }, p2 && o.createElement("div", { className: n()(k.tooltip, v2 && k.noWrap), "aria-hidden": true }, o.createElement(w, null, m2)));
  }
  T.styleTagTransform = m(), T.setAttributes = b(), T.insert = p().bind(null, "head"), T.domAPI = d(), T.insertStyleElement = v(), s()(z.A, T), z.A && z.A.locals && z.A.locals;
  var A = r(65767);
  const O = A.cX || A.un;
  var M;
  !(function(e2) {
    e2[e2.None = 0] = "None", e2[e2.Alt = 512] = "Alt", e2[e2.Shift = 1024] = "Shift", e2[e2.Mod = O ? 2048 : 256] = "Mod", e2[e2.Control = 256] = "Control", e2[e2.Meta = 2048] = "Meta";
  })(M || (M = {}));
  const P = { 9: "⇥", 13: "↵", 27: "Esc", 8: O ? "⌫" : "Backspace", 32: "Space", 35: "End", 36: "Home", 37: "←", 38: "↑", 39: "→", 40: "↓", 45: "Ins", 46: "Del", 188: ",", 191: "/" }, D = { 9: "Tab", 13: "Enter", 27: "Esc", 8: "Backspace", 32: "Space", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Ins", 46: "Del", 188: ",", 191: "/" };
  for (let e2 = 1; e2 <= 16; e2++) P[e2 + 111] = `F${e2}`, D[e2 + 111] = `F${e2}`;
  const j = { 37: -1, 39: 1, [37 + M.Shift]: -10, [39 + M.Shift]: 10, 40: -1, 38: 1, [40 + M.Shift]: -10, [38 + M.Shift]: 10, 34: -10, 33: 10, 36: -1 / 0, 35: 1 / 0 };
  function E(e2, t2, r2, o2, i2, n2) {
    let a2 = t2, l2 = r2;
    i2 && "number" == typeof n2 && (a2 = i2[n2 - 1] ?? t2, l2 = i2[n2 + 1] ?? r2);
    const s2 = C(e2, a2, l2);
    return Math.round((s2 - t2) / o2) * o2 + t2;
  }
  const C = (e2, t2, r2) => Math.min(Math.max(e2, t2), r2), I = JSON.parse('{"aw":"slider-2Jn1KMeu","r9":"disabled-3VKQ3xih","gQ":"grabbed-1FaUKGp5"}');
  var N = r(83508), U = {};
  function B(e2) {
    const { disabled: t2 = false, children: r2, onPointerDown: i2, onPointerUp: a2, onPointerMove: l2, isDragged: s2, reference: c2 } = e2;
    return o.createElement("div", { className: n()(I.aw, t2 && I.r9, s2 && I.gQ), ref: c2, onPointerDown: t2 ? void 0 : i2, onPointerMove: t2 || !s2 ? void 0 : l2, onPointerUp: t2 || !s2 ? void 0 : a2, onPointerCancel: t2 || !s2 ? void 0 : a2 }, r2);
  }
  U.styleTagTransform = m(), U.setAttributes = b(), U.insert = p().bind(null, "head"), U.domAPI = d(), U.insertStyleElement = v(), s()(N.A, U), N.A && N.A.locals && N.A.locals;
  const _ = JSON.parse('{"f":"trackMiddle-3XrBMNtI","p":"trackHighlighted-1f5TgmzJ"}');
  var G = r(37628), V = {};
  function H(e2) {
    const { isTrackHighlighted: t2, toNormalized: r2 = 1, fromNormalized: i2 = 0 } = e2, a2 = 100 * (r2 - i2);
    return o.createElement("div", { className: n()(_.f, t2 && _.p), style: { "--position": 100 * i2 + "%", width: `${a2}%` } });
  }
  V.styleTagTransform = m(), V.setAttributes = b(), V.insert = p().bind(null, "head"), V.domAPI = d(), V.insertStyleElement = v(), s()(G.A, V), G.A && G.A.locals && G.A.locals;
  const F = JSON.parse('{"track":"track-29bQ3nKr","medium":"medium-2AaysT7q","large":"large-3rdKpW3F","trackWithGraph":"trackWithGraph-dnj2Q-sa"}');
  var R = r(19372), Y = {};
  function L(e2) {
    const { children: t2, disableTopBorderRadius: r2, size: i2 = "medium" } = e2;
    return o.createElement("div", { className: n()(F.track, F[i2], r2 && F.trackWithGraph) }, t2);
  }
  Y.styleTagTransform = m(), Y.setAttributes = b(), Y.insert = p().bind(null, "head"), Y.domAPI = d(), Y.insertStyleElement = v(), s()(R.A, Y), R.A && R.A.locals && R.A.locals;
  const W = JSON.parse('{"F":"thumb-381L0UNx"}');
  var X = r(69052), Q = {};
  function K(e2) {
    const { children: t2, position: r2 } = e2;
    return o.createElement("div", { className: W.F, style: { "--position": 100 * r2 + "%" } }, t2);
  }
  function J(e2) {
    const { min: t2, max: r2, value: i2 = r2, onChange: n2, onCommit: a2, rtl: l2, step: s2 = 1, disabled: c2 = false, size: d2, showTooltip: u2, ariaLabelledBy: p2, ariaLabel: f2, getAriaValueText: b2, disableTopBorderRadius: h2, topSlot: v2, hideTrackFill: g2, __doNotUseThisPropNoWrapTooltip: m2 } = e2, [y2, x2] = (0, o.useState)(false), w2 = (e3) => {
      const o2 = (function(e4, t3, r3, o3, i3) {
        return (function(e5, t4, r4) {
          return e5 * (r4 - t4) + t4;
        })((function(e5, t4, r4) {
          const o4 = t4.getBoundingClientRect(), i4 = o4.width;
          return (r4 ? o4.right - e5.clientX : e5.clientX - o4.left) / i4;
        })(e4, t3, r3), o3, i3);
      })(e3.nativeEvent, e3.currentTarget, l2, t2, r2);
      return E(o2, t2, r2, s2);
    }, k2 = (function(e3, t3, r3) {
      const o2 = (C(e3, t3, r3) - t3) / (r3 - t3);
      return o2;
    })(i2, t2, r2);
    return o.createElement(B, { disabled: c2, onPointerDown: (e3) => {
      if (0 !== e3.button) return;
      e3.currentTarget.setPointerCapture(e3.pointerId);
      const t3 = w2(e3);
      n2?.(t3), x2(true);
    }, onPointerMove: (e3) => {
      if (!y2) return;
      const t3 = w2(e3);
      t3 !== i2 && n2?.(t3);
    }, onPointerUp: (e3) => {
      if (0 !== e3.button) return;
      if (!y2) return;
      const t3 = w2(e3);
      n2?.(t3), a2?.(t3), x2(false);
    }, isDragged: y2 }, v2, o.createElement(L, { disableTopBorderRadius: h2, size: d2 }), !g2 && o.createElement(H, { isTrackHighlighted: y2, toNormalized: k2 }), o.createElement(K, { position: k2 }, o.createElement(S, { ariaValuemax: r2, ariaValuemin: t2, value: i2, disabled: c2, size: d2, valueToText: b2, showTooltip: u2, ariaLabel: f2, ariaLabelledBy: p2, isDragged: y2, onKeyDown: (e3) => {
      const o2 = (function(e4, t3) {
        if (!t3) return e4;
        const r3 = 255 & e4, o3 = -256 & e4;
        return 37 === r3 ? 39 + o3 : 39 === r3 ? 37 + o3 : e4;
      })((function(e4) {
        return (function(e5) {
          let t3 = 0;
          return e5.shiftKey && (t3 += 1024), e5.altKey && (t3 += 512), e5.ctrlKey && (t3 += 256), e5.metaKey && (t3 += 2048), t3;
        })(e4) | e4.keyCode;
      })(e3), l2), c3 = j[o2];
      if (!c3) return;
      e3.preventDefault();
      const d3 = E(i2 + c3 * s2, t2, r2, s2);
      n2?.(d3), a2?.(d3);
    }, __doNotUseThisPropNoWrapTooltip: m2 })));
  }
  Q.styleTagTransform = m(), Q.setAttributes = b(), Q.insert = p().bind(null, "head"), Q.domAPI = d(), Q.insertStyleElement = v(), s()(X.A, Q), X.A && X.A.locals && X.A.locals;
}, 63478(e, t, r) {
  "use strict";
  function o(e2) {
    var t2, r2, i2 = "";
    if ("string" == typeof e2 || "number" == typeof e2) i2 += e2;
    else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (r2 = o(e2[t2])) && (i2 && (i2 += " "), i2 += r2);
    else for (t2 in e2) e2[t2] && (i2 && (i2 += " "), i2 += t2);
    return i2;
  }
  function i() {
    for (var e2, t2, r2 = 0, i2 = ""; r2 < arguments.length; ) (e2 = arguments[r2++]) && (t2 = o(e2)) && (i2 && (i2 += " "), i2 += t2);
    return i2;
  }
  r.r(t), r.d(t, { default: () => i });
}, 67160(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, ".wrapper-21v50zE8:dir(ltr){display:inline-block;flex:none;height:18px;position:relative;width:18px;--ui-lib-checkboxView-mark-color:var(--ui-lib-checkboxInput-mark-color);--ui-lib-checkboxView-color:var(--ui-lib-checkboxInput-color)}.input-24iGIobO:dir(ltr){cursor:inherit;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%}.input-24iGIobO:focus+.view-2By9coT7:dir(ltr):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus-visible+.view-2By9coT7:dir(ltr):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus:not(:focus-visible)+.view-2By9coT7:dir(ltr):before{opacity:0;transform:scale(.69231)}@media (any-hover:hover){.input-24iGIobO:hover:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){border-color:var(--color-container-fill-primary-neutral-bold)}}@media (any-hover:hover){.input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(ltr){background-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-bold));border-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-bold))}}.input-24iGIobO:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(ltr){border-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-medium))}.input-24iGIobO:checked:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(ltr){background-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-medium))}.wrapper-21v50zE8:dir(rtl){display:inline-block;flex:none;height:18px;position:relative;width:18px;--ui-lib-checkboxView-mark-color:var(--ui-lib-checkboxInput-mark-color);--ui-lib-checkboxView-color:var(--ui-lib-checkboxInput-color)}.input-24iGIobO:dir(rtl){cursor:inherit;height:100%;margin:0;opacity:0;padding:0;position:absolute;right:0;top:0;width:100%}.input-24iGIobO:focus+.view-2By9coT7:dir(rtl):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus-visible+.view-2By9coT7:dir(rtl):before{opacity:1;transform:scale(1)}.input-24iGIobO:focus:not(:focus-visible)+.view-2By9coT7:dir(rtl):before{opacity:0;transform:scale(.69231)}@media (any-hover:hover){.input-24iGIobO:hover:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){border-color:var(--color-container-fill-primary-neutral-bold)}}@media (any-hover:hover){.input-24iGIobO:hover:checked:not(:focus):not(:disabled):not(.danger-2biHRIpo)~.view-2By9coT7:dir(rtl){background-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-bold));border-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-bold))}}.input-24iGIobO:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(rtl){border-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-medium))}.input-24iGIobO:checked:active:not(:disabled):not(.danger-2biHRIpo):active~.view-2By9coT7:dir(rtl){background-color:var(--ui-lib-checkboxInput-color,var(--color-container-fill-primary-neutral-medium))}", ""]);
  const l = a;
}, 63405(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, '.box-14az0zU6:dir(ltr){align-items:center;border:1px solid var(--color-container-fill-primary-neutral-extra-bold);border-radius:3px;box-sizing:border-box;display:flex;height:18px;justify-content:center;position:relative;transition:background-color .35s ease;width:18px}.box-14az0zU6:dir(ltr):before{border:2px solid var(--color-tv-blue-500);border-radius:6px;box-sizing:border-box;content:"";height:26px;left:-5px;opacity:0;position:absolute;top:-5px;transform:scale(.69231);width:26px}.box-14az0zU6.noOutline-U61cHE0g:dir(ltr):before{content:none}.box-14az0zU6:dir(ltr):after{background-color:initial;border-radius:50%;content:"";height:6px;left:calc(50% - 3px);position:absolute;top:calc(50% - 3px);width:6px}@media (any-hover:hover){.box-14az0zU6:hover:not(:focus):not(.disabled-xjGTMR9d):not(:active):not(.intent-danger-3UwDcY_6):dir(ltr){border-color:var(--color-container-fill-primary-neutral-bold)}}@media (any-hover:hover){.box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(ltr){background-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-bold));border-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-bold))}}.box-14az0zU6.checked-2C5pvG6y:dir(ltr){background-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-extra-bold));border-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-extra-bold))}.box-14az0zU6.checked-2C5pvG6y.check-J7WybJpv .icon-3ccexQMV:dir(ltr){color:var(--ui-lib-checkboxView-mark-color,var(--color-container-fill-quinary-inverse))}.box-14az0zU6.checked-2C5pvG6y.dot-Zm1UqPMe:dir(ltr):after{background-color:var(--ui-lib-checkboxView-mark-color,var(--color-container-fill-quinary-inverse))}.box-14az0zU6.disabled-xjGTMR9d:dir(ltr){opacity:.3}.box-14az0zU6:active:not(.disabled-xjGTMR9d):not(.disableActiveStyles-2UZMQMGz):active:dir(ltr){border-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-medium))}.box-14az0zU6.checked-2C5pvG6y:active:not(.disabled-xjGTMR9d):active:dir(ltr){background-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-medium))}.box-14az0zU6.intent-danger-3UwDcY_6:dir(ltr){border-color:var(--color-control-intent-danger)}.icon-3ccexQMV:dir(ltr){align-items:center;box-sizing:border-box;display:inline-flex}.icon-3ccexQMV svg:dir(ltr),.icon-3ccexQMV:dir(ltr){height:9px;width:11px}.box-14az0zU6:dir(rtl){align-items:center;border:1px solid var(--color-container-fill-primary-neutral-extra-bold);border-radius:3px;box-sizing:border-box;display:flex;height:18px;justify-content:center;position:relative;transition:background-color .35s ease;width:18px}.box-14az0zU6:dir(rtl):before{border:2px solid var(--color-tv-blue-500);border-radius:6px;box-sizing:border-box;content:"";height:26px;opacity:0;position:absolute;right:-5px;top:-5px;transform:scale(.69231);width:26px}.box-14az0zU6.noOutline-U61cHE0g:dir(rtl):before{content:none}.box-14az0zU6:dir(rtl):after{background-color:initial;border-radius:50%;content:"";height:6px;position:absolute;right:calc(50% - 3px);top:calc(50% - 3px);width:6px}@media (any-hover:hover){.box-14az0zU6:hover:not(:focus):not(.disabled-xjGTMR9d):not(:active):not(.intent-danger-3UwDcY_6):dir(rtl){border-color:var(--color-container-fill-primary-neutral-bold)}}@media (any-hover:hover){.box-14az0zU6:hover.checked-2C5pvG6y:not(:focus):not(.disabled-xjGTMR9d):not(.intent-danger-3UwDcY_6):dir(rtl){background-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-bold));border-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-bold))}}.box-14az0zU6.checked-2C5pvG6y:dir(rtl){background-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-extra-bold));border-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-extra-bold))}.box-14az0zU6.checked-2C5pvG6y.check-J7WybJpv .icon-3ccexQMV:dir(rtl){color:var(--ui-lib-checkboxView-mark-color,var(--color-container-fill-quinary-inverse))}.box-14az0zU6.checked-2C5pvG6y.dot-Zm1UqPMe:dir(rtl):after{background-color:var(--ui-lib-checkboxView-mark-color,var(--color-container-fill-quinary-inverse))}.box-14az0zU6.disabled-xjGTMR9d:dir(rtl){opacity:.3}.box-14az0zU6:active:not(.disabled-xjGTMR9d):not(.disableActiveStyles-2UZMQMGz):active:dir(rtl){border-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-medium))}.box-14az0zU6.checked-2C5pvG6y:active:not(.disabled-xjGTMR9d):active:dir(rtl){background-color:var(--ui-lib-checkboxView-color,var(--color-container-fill-primary-neutral-medium))}.box-14az0zU6.intent-danger-3UwDcY_6:dir(rtl){border-color:var(--color-control-intent-danger)}.icon-3ccexQMV:dir(rtl){align-items:center;box-sizing:border-box;display:inline-flex}.icon-3ccexQMV svg:dir(rtl),.icon-3ccexQMV:dir(rtl){height:9px;width:11px}', ""]);
  const l = a;
}, 55231(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, ".checkbox-3xZUD-2M:dir(ltr){align-items:center;display:inline-flex;position:relative;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;cursor:default;font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.checkbox-3xZUD-2M.reverse-3xeTx96y:dir(ltr){flex-direction:row-reverse}.checkbox-3xZUD-2M.reverse-3xeTx96y .label-cyItEVpF:dir(ltr){margin-left:0;margin-right:8px}.checkbox-3xZUD-2M.baseline-6TXKro4X:dir(ltr){align-items:baseline}.label-cyItEVpF:dir(ltr){color:var(--color-text-primary);margin-left:8px;min-width:0}.checkbox-3xZUD-2M:dir(rtl){align-items:center;display:inline-flex;position:relative;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;cursor:default;font-size:14px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:normal}.checkbox-3xZUD-2M.reverse-3xeTx96y:dir(rtl){flex-direction:row-reverse}.checkbox-3xZUD-2M.reverse-3xeTx96y .label-cyItEVpF:dir(rtl){margin-left:8px;margin-right:0}.checkbox-3xZUD-2M.baseline-6TXKro4X:dir(rtl){align-items:baseline}.label-cyItEVpF:dir(rtl){color:var(--color-text-primary);margin-right:8px;min-width:0}", ""]);
  const l = a;
}, 86396(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, '.xsmall-2vJYgf6G:dir(ltr){--ui-lib-size:2}.small-75N_goCf:dir(ltr){--ui-lib-size:3}.medium-YBupIiX5:dir(ltr){--ui-lib-size:4}.large-tSdjHsO2:dir(ltr){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(ltr){display:block;height:var(--width);overflow:visible;transform:rotate(-90deg);width:var(--width)}.background-2a3NzJ2H:dir(ltr),.foreground-3svpcUbB:dir(ltr){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(ltr){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(ltr){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(ltr){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(ltr){animation:spin-15kwLs33 1s linear infinite}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(ltr){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-danger)}.xsmall-2vJYgf6G:dir(rtl){--ui-lib-size:2}.small-75N_goCf:dir(rtl){--ui-lib-size:3}.medium-YBupIiX5:dir(rtl){--ui-lib-size:4}.large-tSdjHsO2:dir(rtl){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(rtl){display:block;height:var(--width);overflow:visible;transform:rotate(90deg);width:var(--width)}.background-2a3NzJ2H:dir(rtl),.foreground-3svpcUbB:dir(rtl){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(rtl){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(rtl){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(rtl){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(rtl){animation:spin-15kwLs33 1s linear infinite}@keyframes spin-15kwLs33{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(rtl){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-danger)}', ""]);
  const l = a;
}, 1354(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, '.medium-1p4w012e:dir(ltr){height:12px;width:12px}.large-P80Y3t24:dir(ltr){height:18px;width:18px}.sliderThumb-1ibp6IkF:dir(ltr){align-items:center;background-color:var(--color-container-fill-primary-inverse);border:2px solid var(--color-border-primary-neutral-extra-heavy);border-radius:50%;box-shadow:0 2px 4px var(--color-shadow-primary-neutral-extra-heavy);box-sizing:border-box;cursor:grab;display:flex;justify-content:center;padding:0}.sliderThumb-1ibp6IkF:dir(ltr):after{border-color:var(--color-focus-outline-color-blue)}.sliderThumb-1ibp6IkF:dir(ltr){outline:none;overflow:visible;position:relative}.sliderThumb-1ibp6IkF:focus:dir(ltr){outline:none}.sliderThumb-1ibp6IkF:focus-visible:dir(ltr){outline:none}.sliderThumb-1ibp6IkF:dir(ltr):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 12px);left:-6px;pointer-events:none;position:absolute;top:-6px;width:calc(100% + 12px);z-index:1}.sliderThumb-1ibp6IkF:focus:dir(ltr):after{display:block}.sliderThumb-1ibp6IkF:focus-visible:dir(ltr):after{display:block}.sliderThumb-1ibp6IkF:focus:not(:focus-visible):dir(ltr):after{display:none}.sliderThumb-1ibp6IkF:dir(ltr):after{border-radius:calc(50% + 4px)}.sliderThumb-1ibp6IkF:dir(ltr):before{content:"";height:32px;position:absolute;width:32px}.grabbed-2IMnqPGz:dir(ltr){cursor:grabbing}.sliderThumb-1ibp6IkF[aria-disabled=true]:dir(ltr){cursor:default}.tooltip-2aP-bQ7j:dir(ltr){display:none;position:absolute;top:-2px;transform:translateY(-100%);z-index:2}.forceTooltip-3hAtPV2B>.tooltip-2aP-bQ7j:dir(ltr),.grabbed-2IMnqPGz>.tooltip-2aP-bQ7j:dir(ltr),.sliderThumb-1ibp6IkF:focus-visible>.tooltip-2aP-bQ7j:dir(ltr){display:block}@media (any-hover:hover){.sliderThumb-1ibp6IkF:hover>.tooltip-2aP-bQ7j:dir(ltr){display:block}}.noWrap-28LZhg6F:dir(ltr){white-space:nowrap}.medium-1p4w012e:dir(rtl){height:12px;width:12px}.large-P80Y3t24:dir(rtl){height:18px;width:18px}.sliderThumb-1ibp6IkF:dir(rtl){align-items:center;background-color:var(--color-container-fill-primary-inverse);border:2px solid var(--color-border-primary-neutral-extra-heavy);border-radius:50%;box-shadow:0 2px 4px var(--color-shadow-primary-neutral-extra-heavy);box-sizing:border-box;cursor:grab;display:flex;justify-content:center;padding:0}.sliderThumb-1ibp6IkF:dir(rtl):after{border-color:var(--color-focus-outline-color-blue)}.sliderThumb-1ibp6IkF:dir(rtl){outline:none;overflow:visible;position:relative}.sliderThumb-1ibp6IkF:focus:dir(rtl){outline:none}.sliderThumb-1ibp6IkF:focus-visible:dir(rtl){outline:none}.sliderThumb-1ibp6IkF:dir(rtl):after{border-style:solid;border-width:2px;box-sizing:border-box;content:"";display:none;height:calc(100% + 12px);pointer-events:none;position:absolute;right:-6px;top:-6px;width:calc(100% + 12px);z-index:1}.sliderThumb-1ibp6IkF:focus:dir(rtl):after{display:block}.sliderThumb-1ibp6IkF:focus-visible:dir(rtl):after{display:block}.sliderThumb-1ibp6IkF:focus:not(:focus-visible):dir(rtl):after{display:none}.sliderThumb-1ibp6IkF:dir(rtl):after{border-radius:calc(50% + 4px)}.sliderThumb-1ibp6IkF:dir(rtl):before{content:"";height:32px;position:absolute;width:32px}.grabbed-2IMnqPGz:dir(rtl){cursor:grabbing}.sliderThumb-1ibp6IkF[aria-disabled=true]:dir(rtl){cursor:default}.tooltip-2aP-bQ7j:dir(rtl){display:none;position:absolute;top:-2px;transform:translateY(-100%);z-index:2}.forceTooltip-3hAtPV2B>.tooltip-2aP-bQ7j:dir(rtl),.grabbed-2IMnqPGz>.tooltip-2aP-bQ7j:dir(rtl),.sliderThumb-1ibp6IkF:focus-visible>.tooltip-2aP-bQ7j:dir(rtl){display:block}@media (any-hover:hover){.sliderThumb-1ibp6IkF:hover>.tooltip-2aP-bQ7j:dir(rtl){display:block}}.noWrap-28LZhg6F:dir(rtl){white-space:nowrap}', ""]);
  const l = a;
}, 83508(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, ".slider-2Jn1KMeu:dir(ltr){contain:layout;cursor:pointer;touch-action:pinch-zoom pan-y;-webkit-user-select:none;user-select:none}.slider-2Jn1KMeu.disabled-3VKQ3xih:dir(ltr){cursor:default;opacity:.5}.grabbed-1FaUKGp5:dir(ltr){cursor:grabbing}.slider-2Jn1KMeu:dir(rtl){contain:layout;cursor:pointer;touch-action:pinch-zoom pan-y;-webkit-user-select:none;user-select:none}.slider-2Jn1KMeu.disabled-3VKQ3xih:dir(rtl){cursor:default;opacity:.5}.grabbed-1FaUKGp5:dir(rtl){cursor:grabbing}", ""]);
  const l = a;
}, 69052(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, ".thumb-381L0UNx:dir(ltr){left:var(--position);position:absolute;top:50%;transform:translate(-50%,-50%);z-index:1}.thumb-381L0UNx:dir(rtl){position:absolute;right:var(--position);top:50%;transform:translate(50%,-50%);z-index:1}", ""]);
  const l = a;
}, 37628(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, ".trackMiddle-3XrBMNtI:dir(ltr){background-color:var(--color-container-fill-primary-neutral-bold);border-radius:5px;box-sizing:border-box;height:100%;left:var(--position);position:absolute;top:0}.trackHighlighted-1f5TgmzJ:dir(ltr){background-color:var(--color-container-fill-primary-neutral-medium)}.trackMiddle-3XrBMNtI:dir(rtl){background-color:var(--color-container-fill-primary-neutral-bold);border-radius:5px;box-sizing:border-box;height:100%;position:absolute;right:var(--position);top:0}.trackHighlighted-1f5TgmzJ:dir(rtl){background-color:var(--color-container-fill-primary-neutral-medium)}", ""]);
  const l = a;
}, 19372(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, '.track-29bQ3nKr:dir(ltr){background-color:var(--color-container-fill-primary-neutral-light);border-radius:5px;position:relative}.track-29bQ3nKr.medium-2AaysT7q:dir(ltr){height:6px}.track-29bQ3nKr.large-3rdKpW3F:dir(ltr){height:10px}.track-29bQ3nKr:first-child:dir(ltr):before{content:"";height:32px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.trackWithGraph-dnj2Q-sa:dir(ltr){border-top-left-radius:0;border-top-right-radius:0}.track-29bQ3nKr:dir(rtl){background-color:var(--color-container-fill-primary-neutral-light);border-radius:5px;position:relative}.track-29bQ3nKr.medium-2AaysT7q:dir(rtl){height:6px}.track-29bQ3nKr.large-3rdKpW3F:dir(rtl){height:10px}.track-29bQ3nKr:first-child:dir(rtl):before{content:"";height:32px;position:absolute;top:50%;transform:translateY(-50%);width:100%}.trackWithGraph-dnj2Q-sa:dir(rtl){border-top-left-radius:0;border-top-right-radius:0}', ""]);
  const l = a;
}, 94121(e, t, r) {
  "use strict";
  r.d(t, { A: () => l });
  var o = r(30050), i = r.n(o), n = r(77259), a = r.n(n)()(i());
  a.push([e.id, "[data-theme=light]:dir(ltr){--_0-AK2H:var(--color-cold-gray-750)}[data-theme=dark]:dir(ltr){--_0-AK2H:var(--color-cold-gray-750)}.tooltipAppearance--_2yHZBg:dir(ltr){padding:4px;position:relative}.arrow-2BDFJs1U:dir(ltr){border-bottom:4px solid #0000;border-bottom-color:var(--_0-AK2H);border-left:6px solid #0000;border-right:6px solid #0000;border-top:4px solid #0000;box-sizing:border-box;height:8px;\n	/*!rtl:ignore*/left:50%;position:absolute;top:100%;\n\n	/*!rtl:ignore*/transform:translate(-50%,-50%) rotate(180deg);width:12px}.inner-7yGPZKjt:dir(ltr){background-color:var(--_0-AK2H);border-radius:4px;color:var(--color-content-tertiary-inverse);padding:6px 8px}[data-theme=light]:dir(rtl){--_0-AK2H:var(--color-cold-gray-750)}[data-theme=dark]:dir(rtl){--_0-AK2H:var(--color-cold-gray-750)}.tooltipAppearance--_2yHZBg:dir(rtl){padding:4px;position:relative}.arrow-2BDFJs1U:dir(rtl){border-bottom:4px solid #0000;border-bottom-color:var(--_0-AK2H);border-left:6px solid #0000;border-right:6px solid #0000;border-top:4px solid #0000;box-sizing:border-box;height:8px;left:50%;position:absolute;top:100%;transform:translate(-50%,-50%) rotate(180deg);width:12px}.inner-7yGPZKjt:dir(rtl){background-color:var(--_0-AK2H);border-radius:4px;color:var(--color-content-tertiary-inverse);padding:6px 8px}", ""]);
  const l = a;
}, 16186(e, t, r) {
  "use strict";
  var o = r(62985);
  function i() {
  }
  function n() {
  }
  n.resetWarningCache = i, e.exports = function() {
    function e2(e3, t3, r3, i2, n2, a) {
      if (a !== o) {
        var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw l.name = "Invariant Violation", l;
      }
    }
    function t2() {
      return e2;
    }
    e2.isRequired = e2;
    var r2 = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t2, element: e2, elementType: e2, instanceOf: t2, node: e2, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2, checkPropTypes: n, resetWarningCache: i };
    return r2.PropTypes = r2, r2;
  };
}, 2736(e, t, r) {
  e.exports = r(16186)();
}, 62985(e) {
  "use strict";
  e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, 80386(e, t, r) {
  "use strict";
  function o(e2) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, o(e2);
  }
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "DraggableCore", { enumerable: true, get: function() {
    return u.default;
  } }), t.default = void 0;
  var i = (function(e2, t2) {
    if (e2 && e2.__esModule) return e2;
    if (null === e2 || "object" !== o(e2) && "function" != typeof e2) return { default: e2 };
    var r2 = h(t2);
    if (r2 && r2.has(e2)) return r2.get(e2);
    var i2 = {}, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a2 in e2) if ("default" !== a2 && Object.prototype.hasOwnProperty.call(e2, a2)) {
      var l2 = n2 ? Object.getOwnPropertyDescriptor(e2, a2) : null;
      l2 && (l2.get || l2.set) ? Object.defineProperty(i2, a2, l2) : i2[a2] = e2[a2];
    }
    return i2.default = e2, r2 && r2.set(e2, i2), i2;
  })(r(79474)), n = b(r(2736)), a = b(r(41615)), l = b(r(63478)), s = r(19186), c = r(43887), d = r(6849), u = b(r(18469)), p = b(r(43293)), f = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];
  function b(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function h(e2) {
    if ("function" != typeof WeakMap) return null;
    var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
    return (h = function(e3) {
      return e3 ? r2 : t2;
    })(e2);
  }
  function v() {
    return v = Object.assign || function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var r2 = arguments[t2];
        for (var o2 in r2) Object.prototype.hasOwnProperty.call(r2, o2) && (e2[o2] = r2[o2]);
      }
      return e2;
    }, v.apply(this, arguments);
  }
  function g(e2, t2) {
    var r2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      t2 && (o2 = o2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), r2.push.apply(r2, o2);
    }
    return r2;
  }
  function m(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? g(Object(r2), true).forEach((function(t3) {
        T(e2, t3, r2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : g(Object(r2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
      }));
    }
    return e2;
  }
  function y(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var r2 = 0, o2 = new Array(t2); r2 < t2; r2++) o2[r2] = e2[r2];
    return o2;
  }
  function x(e2, t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      var o2 = t2[r2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
    }
  }
  function w(e2, t2) {
    return w = Object.setPrototypeOf || function(e3, t3) {
      return e3.__proto__ = t3, e3;
    }, w(e2, t2);
  }
  function k(e2) {
    if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function z(e2) {
    return z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    }, z(e2);
  }
  function T(e2, t2, r2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  var S = (function(e2) {
    !(function(e3, t3) {
      if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
      e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && w(e3, t3);
    })(g2, e2);
    var t2, r2, n2, d2, b2, h2 = (d2 = g2, b2 = (function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (e3) {
        return false;
      }
    })(), function() {
      var e3, t3 = z(d2);
      if (b2) {
        var r3 = z(this).constructor;
        e3 = Reflect.construct(t3, arguments, r3);
      } else e3 = t3.apply(this, arguments);
      return (function(e4, t4) {
        if (t4 && ("object" === o(t4) || "function" == typeof t4)) return t4;
        if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
        return k(e4);
      })(this, e3);
    });
    function g2(e3) {
      var t3;
      return (function(e4, t4) {
        if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
      })(this, g2), T(k(t3 = h2.call(this, e3)), "onDragStart", (function(e4, r3) {
        if ((0, p.default)("Draggable: onDragStart: %j", r3), false === t3.props.onStart(e4, (0, c.createDraggableData)(k(t3), r3))) return false;
        t3.setState({ dragging: true, dragged: true });
      })), T(k(t3), "onDrag", (function(e4, r3) {
        if (!t3.state.dragging) return false;
        (0, p.default)("Draggable: onDrag: %j", r3);
        var o2, i2, n3 = (0, c.createDraggableData)(k(t3), r3), a2 = { x: n3.x, y: n3.y };
        if (t3.props.bounds) {
          var l2 = a2.x, s2 = a2.y;
          a2.x += t3.state.slackX, a2.y += t3.state.slackY;
          var d3 = (o2 = (0, c.getBoundPosition)(k(t3), a2.x, a2.y), i2 = 2, (function(e5) {
            if (Array.isArray(e5)) return e5;
          })(o2) || (function(e5, t4) {
            var r4 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
            if (null != r4) {
              var o3, i3, n4 = [], a3 = true, l3 = false;
              try {
                for (r4 = r4.call(e5); !(a3 = (o3 = r4.next()).done) && (n4.push(o3.value), !t4 || n4.length !== t4); a3 = true) ;
              } catch (e6) {
                l3 = true, i3 = e6;
              } finally {
                try {
                  a3 || null == r4.return || r4.return();
                } finally {
                  if (l3) throw i3;
                }
              }
              return n4;
            }
          })(o2, i2) || (function(e5, t4) {
            if (e5) {
              if ("string" == typeof e5) return y(e5, t4);
              var r4 = Object.prototype.toString.call(e5).slice(8, -1);
              return "Object" === r4 && e5.constructor && (r4 = e5.constructor.name), "Map" === r4 || "Set" === r4 ? Array.from(e5) : "Arguments" === r4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? y(e5, t4) : void 0;
            }
          })(o2, i2) || (function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          })()), u2 = d3[0], f2 = d3[1];
          a2.x = u2, a2.y = f2, a2.slackX = t3.state.slackX + (l2 - a2.x), a2.slackY = t3.state.slackY + (s2 - a2.y), n3.x = a2.x, n3.y = a2.y, n3.deltaX = a2.x - t3.state.x, n3.deltaY = a2.y - t3.state.y;
        }
        if (false === t3.props.onDrag(e4, n3)) return false;
        t3.setState(a2);
      })), T(k(t3), "onDragStop", (function(e4, r3) {
        if (!t3.state.dragging) return false;
        if (false === t3.props.onStop(e4, (0, c.createDraggableData)(k(t3), r3))) return false;
        (0, p.default)("Draggable: onDragStop: %j", r3);
        var o2 = { dragging: false, slackX: 0, slackY: 0 };
        if (Boolean(t3.props.position)) {
          var i2 = t3.props.position, n3 = i2.x, a2 = i2.y;
          o2.x = n3, o2.y = a2;
        }
        t3.setState(o2);
      })), t3.state = { dragging: false, dragged: false, x: e3.position ? e3.position.x : e3.defaultPosition.x, y: e3.position ? e3.position.y : e3.defaultPosition.y, prevPropsPosition: m({}, e3.position), slackX: 0, slackY: 0, isElementSVG: false }, !e3.position || e3.onDrag || e3.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), t3;
    }
    return t2 = g2, n2 = [{ key: "getDerivedStateFromProps", value: function(e3, t3) {
      var r3 = e3.position, o2 = t3.prevPropsPosition;
      return !r3 || o2 && r3.x === o2.x && r3.y === o2.y ? null : ((0, p.default)("Draggable: getDerivedStateFromProps %j", { position: r3, prevPropsPosition: o2 }), { x: r3.x, y: r3.y, prevPropsPosition: m({}, r3) });
    } }], (r2 = [{ key: "componentDidMount", value: function() {
      void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: true });
    } }, { key: "componentWillUnmount", value: function() {
      this.setState({ dragging: false });
    } }, { key: "findDOMNode", value: function() {
      var e3, t3, r3;
      return null !== (e3 = null === (t3 = this.props) || void 0 === t3 || null === (r3 = t3.nodeRef) || void 0 === r3 ? void 0 : r3.current) && void 0 !== e3 ? e3 : a.default.findDOMNode(this);
    } }, { key: "render", value: function() {
      var e3, t3 = this.props, r3 = (t3.axis, t3.bounds, t3.children), o2 = t3.defaultPosition, n3 = t3.defaultClassName, a2 = t3.defaultClassNameDragging, d3 = t3.defaultClassNameDragged, p2 = t3.position, b3 = t3.positionOffset, h3 = (t3.scale, (function(e4, t4) {
        if (null == e4) return {};
        var r4, o3, i2 = (function(e5, t5) {
          if (null == e5) return {};
          var r5, o4, i3 = {}, n5 = Object.keys(e5);
          for (o4 = 0; o4 < n5.length; o4++) r5 = n5[o4], t5.indexOf(r5) >= 0 || (i3[r5] = e5[r5]);
          return i3;
        })(e4, t4);
        if (Object.getOwnPropertySymbols) {
          var n4 = Object.getOwnPropertySymbols(e4);
          for (o3 = 0; o3 < n4.length; o3++) r4 = n4[o3], t4.indexOf(r4) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, r4) && (i2[r4] = e4[r4]);
        }
        return i2;
      })(t3, f)), g3 = {}, y2 = null, x2 = !Boolean(p2) || this.state.dragging, w2 = p2 || o2, k2 = { x: (0, c.canDragX)(this) && x2 ? this.state.x : w2.x, y: (0, c.canDragY)(this) && x2 ? this.state.y : w2.y };
      this.state.isElementSVG ? y2 = (0, s.createSVGTransform)(k2, b3) : g3 = (0, s.createCSSTransform)(k2, b3);
      var z2 = (0, l.default)(r3.props.className || "", n3, (T(e3 = {}, a2, this.state.dragging), T(e3, d3, this.state.dragged), e3));
      return i.createElement(u.default, v({}, h3, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }), i.cloneElement(i.Children.only(r3), { className: z2, style: m(m({}, r3.props.style), g3), transform: y2 }));
    } }]) && x(t2.prototype, r2), n2 && x(t2, n2), Object.defineProperty(t2, "prototype", { writable: false }), g2;
  })(i.Component);
  t.default = S, T(S, "displayName", "Draggable"), T(S, "propTypes", m(m({}, u.default.propTypes), {}, { axis: n.default.oneOf(["both", "x", "y", "none"]), bounds: n.default.oneOfType([n.default.shape({ left: n.default.number, right: n.default.number, top: n.default.number, bottom: n.default.number }), n.default.string, n.default.oneOf([false])]), defaultClassName: n.default.string, defaultClassNameDragging: n.default.string, defaultClassNameDragged: n.default.string, defaultPosition: n.default.shape({ x: n.default.number, y: n.default.number }), positionOffset: n.default.shape({ x: n.default.oneOfType([n.default.number, n.default.string]), y: n.default.oneOfType([n.default.number, n.default.string]) }), position: n.default.shape({ x: n.default.number, y: n.default.number }), className: d.dontSetMe, style: d.dontSetMe, transform: d.dontSetMe })), T(S, "defaultProps", m(m({}, u.default.defaultProps), {}, { axis: "both", bounds: false, defaultClassName: "react-draggable", defaultClassNameDragging: "react-draggable-dragging", defaultClassNameDragged: "react-draggable-dragged", defaultPosition: { x: 0, y: 0 }, scale: 1 }));
}, 18469(e, t, r) {
  "use strict";
  function o(e2) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, o(e2);
  }
  Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0;
  var i = (function(e2, t2) {
    if (e2 && e2.__esModule) return e2;
    if (null === e2 || "object" !== o(e2) && "function" != typeof e2) return { default: e2 };
    var r2 = p(t2);
    if (r2 && r2.has(e2)) return r2.get(e2);
    var i2 = {}, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a2 in e2) if ("default" !== a2 && Object.prototype.hasOwnProperty.call(e2, a2)) {
      var l2 = n2 ? Object.getOwnPropertyDescriptor(e2, a2) : null;
      l2 && (l2.get || l2.set) ? Object.defineProperty(i2, a2, l2) : i2[a2] = e2[a2];
    }
    return i2.default = e2, r2 && r2.set(e2, i2), i2;
  })(r(79474)), n = u(r(2736)), a = u(r(41615)), l = r(19186), s = r(43887), c = r(6849), d = u(r(43293));
  function u(e2) {
    return e2 && e2.__esModule ? e2 : { default: e2 };
  }
  function p(e2) {
    if ("function" != typeof WeakMap) return null;
    var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
    return (p = function(e3) {
      return e3 ? r2 : t2;
    })(e2);
  }
  function f(e2, t2) {
    return (function(e3) {
      if (Array.isArray(e3)) return e3;
    })(e2) || (function(e3, t3) {
      var r2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != r2) {
        var o2, i2, n2 = [], a2 = true, l2 = false;
        try {
          for (r2 = r2.call(e3); !(a2 = (o2 = r2.next()).done) && (n2.push(o2.value), !t3 || n2.length !== t3); a2 = true) ;
        } catch (e4) {
          l2 = true, i2 = e4;
        } finally {
          try {
            a2 || null == r2.return || r2.return();
          } finally {
            if (l2) throw i2;
          }
        }
        return n2;
      }
    })(e2, t2) || (function(e3, t3) {
      if (e3) {
        if ("string" == typeof e3) return b(e3, t3);
        var r2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === r2 && e3.constructor && (r2 = e3.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(e3) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? b(e3, t3) : void 0;
      }
    })(e2, t2) || (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function b(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var r2 = 0, o2 = new Array(t2); r2 < t2; r2++) o2[r2] = e2[r2];
    return o2;
  }
  function h(e2, t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      var o2 = t2[r2];
      o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, o2.key, o2);
    }
  }
  function v(e2, t2) {
    return v = Object.setPrototypeOf || function(e3, t3) {
      return e3.__proto__ = t3, e3;
    }, v(e2, t2);
  }
  function g(e2) {
    if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e2;
  }
  function m(e2) {
    return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    }, m(e2);
  }
  function y(e2, t2, r2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  var x = { start: "touchstart", move: "touchmove", stop: "touchend" }, w = { start: "mousedown", move: "mousemove", stop: "mouseup" }, k = w, z = (function(e2) {
    !(function(e3, t3) {
      if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
      e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && v(e3, t3);
    })(p2, e2);
    var t2, r2, n2, c2, u2 = (n2 = p2, c2 = (function() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (e3) {
        return false;
      }
    })(), function() {
      var e3, t3 = m(n2);
      if (c2) {
        var r3 = m(this).constructor;
        e3 = Reflect.construct(t3, arguments, r3);
      } else e3 = t3.apply(this, arguments);
      return (function(e4, t4) {
        if (t4 && ("object" === o(t4) || "function" == typeof t4)) return t4;
        if (void 0 !== t4) throw new TypeError("Derived constructors may only return object or undefined");
        return g(e4);
      })(this, e3);
    });
    function p2() {
      var e3;
      !(function(e4, t4) {
        if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
      })(this, p2);
      for (var t3 = arguments.length, r3 = new Array(t3), o2 = 0; o2 < t3; o2++) r3[o2] = arguments[o2];
      return y(g(e3 = u2.call.apply(u2, [this].concat(r3))), "state", { dragging: false, lastX: NaN, lastY: NaN, touchIdentifier: null }), y(g(e3), "mounted", false), y(g(e3), "handleDragStart", (function(t4) {
        if (e3.props.onMouseDown(t4), !e3.props.allowAnyClick && "number" == typeof t4.button && 0 !== t4.button) return false;
        var r4 = e3.findDOMNode();
        if (!r4 || !r4.ownerDocument || !r4.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
        var o3 = r4.ownerDocument;
        if (!(e3.props.disabled || !(t4.target instanceof o3.defaultView.Node) || e3.props.handle && !(0, l.matchesSelectorAndParentsTo)(t4.target, e3.props.handle, r4) || e3.props.cancel && (0, l.matchesSelectorAndParentsTo)(t4.target, e3.props.cancel, r4))) {
          "touchstart" === t4.type && t4.preventDefault();
          var i2 = (0, l.getTouchIdentifier)(t4);
          e3.setState({ touchIdentifier: i2 });
          var n3 = (0, s.getControlPosition)(t4, i2, g(e3));
          if (null != n3) {
            var a2 = n3.x, c3 = n3.y, u3 = (0, s.createCoreData)(g(e3), a2, c3);
            (0, d.default)("DraggableCore: handleDragStart: %j", u3), (0, d.default)("calling", e3.props.onStart), false !== e3.props.onStart(t4, u3) && false !== e3.mounted && (e3.props.enableUserSelectHack && (0, l.addUserSelectStyles)(o3), e3.setState({ dragging: true, lastX: a2, lastY: c3 }), (0, l.addEvent)(o3, k.move, e3.handleDrag), (0, l.addEvent)(o3, k.stop, e3.handleDragStop));
          }
        }
      })), y(g(e3), "handleDrag", (function(t4) {
        var r4 = (0, s.getControlPosition)(t4, e3.state.touchIdentifier, g(e3));
        if (null != r4) {
          var o3 = r4.x, i2 = r4.y;
          if (Array.isArray(e3.props.grid)) {
            var n3 = o3 - e3.state.lastX, a2 = i2 - e3.state.lastY, l2 = f((0, s.snapToGrid)(e3.props.grid, n3, a2), 2);
            if (n3 = l2[0], a2 = l2[1], !n3 && !a2) return;
            o3 = e3.state.lastX + n3, i2 = e3.state.lastY + a2;
          }
          var c3 = (0, s.createCoreData)(g(e3), o3, i2);
          if ((0, d.default)("DraggableCore: handleDrag: %j", c3), false !== e3.props.onDrag(t4, c3) && false !== e3.mounted) e3.setState({ lastX: o3, lastY: i2 });
          else try {
            e3.handleDragStop(new MouseEvent("mouseup"));
          } catch (t5) {
            var u3 = document.createEvent("MouseEvents");
            u3.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), e3.handleDragStop(u3);
          }
        }
      })), y(g(e3), "handleDragStop", (function(t4) {
        if (e3.state.dragging) {
          var r4 = (0, s.getControlPosition)(t4, e3.state.touchIdentifier, g(e3));
          if (null != r4) {
            var o3 = r4.x, i2 = r4.y;
            if (Array.isArray(e3.props.grid)) {
              var n3 = o3 - e3.state.lastX || 0, a2 = i2 - e3.state.lastY || 0, c3 = f((0, s.snapToGrid)(e3.props.grid, n3, a2), 2);
              n3 = c3[0], a2 = c3[1], o3 = e3.state.lastX + n3, i2 = e3.state.lastY + a2;
            }
            var u3 = (0, s.createCoreData)(g(e3), o3, i2);
            if (false === e3.props.onStop(t4, u3) || false === e3.mounted) return false;
            var p3 = e3.findDOMNode();
            p3 && e3.props.enableUserSelectHack && (0, l.removeUserSelectStyles)(p3.ownerDocument), (0, d.default)("DraggableCore: handleDragStop: %j", u3), e3.setState({ dragging: false, lastX: NaN, lastY: NaN }), p3 && ((0, d.default)("DraggableCore: Removing handlers"), (0, l.removeEvent)(p3.ownerDocument, k.move, e3.handleDrag), (0, l.removeEvent)(p3.ownerDocument, k.stop, e3.handleDragStop));
          }
        }
      })), y(g(e3), "onMouseDown", (function(t4) {
        return k = w, e3.handleDragStart(t4);
      })), y(g(e3), "onMouseUp", (function(t4) {
        return k = w, e3.handleDragStop(t4);
      })), y(g(e3), "onTouchStart", (function(t4) {
        return k = x, e3.handleDragStart(t4);
      })), y(g(e3), "onTouchEnd", (function(t4) {
        return k = x, e3.handleDragStop(t4);
      })), e3;
    }
    return t2 = p2, (r2 = [{ key: "componentDidMount", value: function() {
      this.mounted = true;
      var e3 = this.findDOMNode();
      e3 && (0, l.addEvent)(e3, x.start, this.onTouchStart, { passive: false });
    } }, { key: "componentWillUnmount", value: function() {
      this.mounted = false;
      var e3 = this.findDOMNode();
      if (e3) {
        var t3 = e3.ownerDocument;
        (0, l.removeEvent)(t3, w.move, this.handleDrag), (0, l.removeEvent)(t3, x.move, this.handleDrag), (0, l.removeEvent)(t3, w.stop, this.handleDragStop), (0, l.removeEvent)(t3, x.stop, this.handleDragStop), (0, l.removeEvent)(e3, x.start, this.onTouchStart, { passive: false }), this.props.enableUserSelectHack && (0, l.removeUserSelectStyles)(t3);
      }
    } }, { key: "findDOMNode", value: function() {
      var e3, t3, r3;
      return null !== (e3 = this.props) && void 0 !== e3 && e3.nodeRef ? null === (t3 = this.props) || void 0 === t3 || null === (r3 = t3.nodeRef) || void 0 === r3 ? void 0 : r3.current : a.default.findDOMNode(this);
    } }, { key: "render", value: function() {
      return i.cloneElement(i.Children.only(this.props.children), { onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, onTouchEnd: this.onTouchEnd });
    } }]) && h(t2.prototype, r2), Object.defineProperty(t2, "prototype", { writable: false }), p2;
  })(i.Component);
  t.default = z, y(z, "displayName", "DraggableCore"), y(z, "propTypes", { allowAnyClick: n.default.bool, disabled: n.default.bool, enableUserSelectHack: n.default.bool, offsetParent: function(e2, t2) {
    if (e2[t2] && 1 !== e2[t2].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.");
  }, grid: n.default.arrayOf(n.default.number), handle: n.default.string, cancel: n.default.string, nodeRef: n.default.object, onStart: n.default.func, onDrag: n.default.func, onStop: n.default.func, onMouseDown: n.default.func, scale: n.default.number, className: c.dontSetMe, style: c.dontSetMe, transform: c.dontSetMe }), y(z, "defaultProps", { allowAnyClick: false, disabled: false, enableUserSelectHack: true, onStart: function() {
  }, onDrag: function() {
  }, onStop: function() {
  }, onMouseDown: function() {
  }, scale: 1 });
}, 55463(e, t, r) {
  "use strict";
  var o = r(80386), i = o.default, n = o.DraggableCore;
  e.exports = i, e.exports.default = i, e.exports.DraggableCore = n;
}, 19186(e, t, r) {
  "use strict";
  function o(e2) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, o(e2);
  }
  Object.defineProperty(t, "__esModule", { value: true }), t.addClassName = f, t.addEvent = function(e2, t2, r2, o2) {
    if (e2) {
      var i2 = s({ capture: true }, o2);
      e2.addEventListener ? e2.addEventListener(t2, r2, i2) : e2.attachEvent ? e2.attachEvent("on" + t2, r2) : e2["on" + t2] = r2;
    }
  }, t.addUserSelectStyles = function(e2) {
    if (e2) {
      var t2 = e2.getElementById("react-draggable-style-el");
      t2 || ((t2 = e2.createElement("style")).type = "text/css", t2.id = "react-draggable-style-el", t2.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", t2.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", e2.getElementsByTagName("head")[0].appendChild(t2)), e2.body && f(e2.body, "react-draggable-transparent-selection");
    }
  }, t.createCSSTransform = function(e2, t2) {
    var r2 = p(e2, t2, "px");
    return c({}, (0, n.browserPrefixToKey)("transform", n.default), r2);
  }, t.createSVGTransform = function(e2, t2) {
    return p(e2, t2, "");
  }, t.getTouch = function(e2, t2) {
    return e2.targetTouches && (0, i.findInArray)(e2.targetTouches, (function(e3) {
      return t2 === e3.identifier;
    })) || e2.changedTouches && (0, i.findInArray)(e2.changedTouches, (function(e3) {
      return t2 === e3.identifier;
    }));
  }, t.getTouchIdentifier = function(e2) {
    return e2.targetTouches && e2.targetTouches[0] ? e2.targetTouches[0].identifier : e2.changedTouches && e2.changedTouches[0] ? e2.changedTouches[0].identifier : void 0;
  }, t.getTranslation = p, t.innerHeight = function(e2) {
    var t2 = e2.clientHeight, r2 = e2.ownerDocument.defaultView.getComputedStyle(e2);
    return (t2 -= (0, i.int)(r2.paddingTop)) - (0, i.int)(r2.paddingBottom);
  }, t.innerWidth = function(e2) {
    var t2 = e2.clientWidth, r2 = e2.ownerDocument.defaultView.getComputedStyle(e2);
    return (t2 -= (0, i.int)(r2.paddingLeft)) - (0, i.int)(r2.paddingRight);
  }, t.matchesSelector = u, t.matchesSelectorAndParentsTo = function(e2, t2, r2) {
    var o2 = e2;
    do {
      if (u(o2, t2)) return true;
      if (o2 === r2) return false;
      o2 = o2.parentNode;
    } while (o2);
    return false;
  }, t.offsetXYFromParent = function(e2, t2, r2) {
    var o2 = t2 === t2.ownerDocument.body ? { left: 0, top: 0 } : t2.getBoundingClientRect();
    return { x: (e2.clientX + t2.scrollLeft - o2.left) / r2, y: (e2.clientY + t2.scrollTop - o2.top) / r2 };
  }, t.outerHeight = function(e2) {
    var t2 = e2.clientHeight, r2 = e2.ownerDocument.defaultView.getComputedStyle(e2);
    return (t2 += (0, i.int)(r2.borderTopWidth)) + (0, i.int)(r2.borderBottomWidth);
  }, t.outerWidth = function(e2) {
    var t2 = e2.clientWidth, r2 = e2.ownerDocument.defaultView.getComputedStyle(e2);
    return (t2 += (0, i.int)(r2.borderLeftWidth)) + (0, i.int)(r2.borderRightWidth);
  }, t.removeClassName = b, t.removeEvent = function(e2, t2, r2, o2) {
    if (e2) {
      var i2 = s({ capture: true }, o2);
      e2.removeEventListener ? e2.removeEventListener(t2, r2, i2) : e2.detachEvent ? e2.detachEvent("on" + t2, r2) : e2["on" + t2] = null;
    }
  }, t.removeUserSelectStyles = function(e2) {
    if (e2) try {
      if (e2.body && b(e2.body, "react-draggable-transparent-selection"), e2.selection) e2.selection.empty();
      else {
        var t2 = (e2.defaultView || window).getSelection();
        t2 && "Caret" !== t2.type && t2.removeAllRanges();
      }
    } catch (e3) {
    }
  };
  var i = r(6849), n = (function(e2, t2) {
    if (e2 && e2.__esModule) return e2;
    if (null === e2 || "object" !== o(e2) && "function" != typeof e2) return { default: e2 };
    var r2 = a(t2);
    if (r2 && r2.has(e2)) return r2.get(e2);
    var i2 = {}, n2 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l2 in e2) if ("default" !== l2 && Object.prototype.hasOwnProperty.call(e2, l2)) {
      var s2 = n2 ? Object.getOwnPropertyDescriptor(e2, l2) : null;
      s2 && (s2.get || s2.set) ? Object.defineProperty(i2, l2, s2) : i2[l2] = e2[l2];
    }
    return i2.default = e2, r2 && r2.set(e2, i2), i2;
  })(r(40287));
  function a(e2) {
    if ("function" != typeof WeakMap) return null;
    var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
    return (a = function(e3) {
      return e3 ? r2 : t2;
    })(e2);
  }
  function l(e2, t2) {
    var r2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      t2 && (o2 = o2.filter((function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      }))), r2.push.apply(r2, o2);
    }
    return r2;
  }
  function s(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? l(Object(r2), true).forEach((function(t3) {
        c(e2, t3, r2[t3]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : l(Object(r2)).forEach((function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(r2, t3));
      }));
    }
    return e2;
  }
  function c(e2, t2, r2) {
    return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
  }
  var d = "";
  function u(e2, t2) {
    return d || (d = (0, i.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(t3) {
      return (0, i.isFunction)(e2[t3]);
    }))), !!(0, i.isFunction)(e2[d]) && e2[d](t2);
  }
  function p(e2, t2, r2) {
    var o2 = e2.x, i2 = e2.y, n2 = "translate(".concat(o2).concat(r2, ",").concat(i2).concat(r2, ")");
    if (t2) {
      var a2 = "".concat("string" == typeof t2.x ? t2.x : t2.x + r2), l2 = "".concat("string" == typeof t2.y ? t2.y : t2.y + r2);
      n2 = "translate(".concat(a2, ", ").concat(l2, ")") + n2;
    }
    return n2;
  }
  function f(e2, t2) {
    e2.classList ? e2.classList.add(t2) : e2.className.match(new RegExp("(?:^|\\s)".concat(t2, "(?!\\S)"))) || (e2.className += " ".concat(t2));
  }
  function b(e2, t2) {
    e2.classList ? e2.classList.remove(t2) : e2.className = e2.className.replace(new RegExp("(?:^|\\s)".concat(t2, "(?!\\S)"), "g"), "");
  }
}, 40287(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.browserPrefixToKey = i, t.browserPrefixToStyle = function(e2, t2) {
    return t2 ? "-".concat(t2.toLowerCase(), "-").concat(e2) : e2;
  }, t.default = void 0, t.getPrefix = o;
  var r = ["Moz", "Webkit", "O", "ms"];
  function o() {
    var e2, t2, o2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
    if ("undefined" == typeof window) return "";
    var n2 = null === (e2 = window.document) || void 0 === e2 || null === (t2 = e2.documentElement) || void 0 === t2 ? void 0 : t2.style;
    if (!n2) return "";
    if (o2 in n2) return "";
    for (var a = 0; a < r.length; a++) if (i(o2, r[a]) in n2) return r[a];
    return "";
  }
  function i(e2, t2) {
    return t2 ? "".concat(t2).concat((function(e3) {
      for (var t3 = "", r2 = true, o2 = 0; o2 < e3.length; o2++) r2 ? (t3 += e3[o2].toUpperCase(), r2 = false) : "-" === e3[o2] ? r2 = true : t3 += e3[o2];
      return t3;
    })(e2)) : e2;
  }
  var n = o();
  t.default = n;
}, 43293(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.default = function() {
  };
}, 43887(e, t, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.canDragX = function(e2) {
    return "both" === e2.props.axis || "x" === e2.props.axis;
  }, t.canDragY = function(e2) {
    return "both" === e2.props.axis || "y" === e2.props.axis;
  }, t.createCoreData = function(e2, t2, r2) {
    var i2 = e2.state, a = !(0, o.isNum)(i2.lastX), l = n(e2);
    return a ? { node: l, deltaX: 0, deltaY: 0, lastX: t2, lastY: r2, x: t2, y: r2 } : { node: l, deltaX: t2 - i2.lastX, deltaY: r2 - i2.lastY, lastX: i2.lastX, lastY: i2.lastY, x: t2, y: r2 };
  }, t.createDraggableData = function(e2, t2) {
    var r2 = e2.props.scale;
    return { node: t2.node, x: e2.state.x + t2.deltaX / r2, y: e2.state.y + t2.deltaY / r2, deltaX: t2.deltaX / r2, deltaY: t2.deltaY / r2, lastX: e2.state.x, lastY: e2.state.y };
  }, t.getBoundPosition = function(e2, t2, r2) {
    if (!e2.props.bounds) return [t2, r2];
    var a = e2.props.bounds;
    a = "string" == typeof a ? a : (function(e3) {
      return { left: e3.left, top: e3.top, right: e3.right, bottom: e3.bottom };
    })(a);
    var l = n(e2);
    if ("string" == typeof a) {
      var s, c = l.ownerDocument, d = c.defaultView;
      if (!((s = "parent" === a ? l.parentNode : c.querySelector(a)) instanceof d.HTMLElement)) throw new Error('Bounds selector "' + a + '" could not find an element.');
      var u = s, p = d.getComputedStyle(l), f = d.getComputedStyle(u);
      a = { left: -l.offsetLeft + (0, o.int)(f.paddingLeft) + (0, o.int)(p.marginLeft), top: -l.offsetTop + (0, o.int)(f.paddingTop) + (0, o.int)(p.marginTop), right: (0, i.innerWidth)(u) - (0, i.outerWidth)(l) - l.offsetLeft + (0, o.int)(f.paddingRight) - (0, o.int)(p.marginRight), bottom: (0, i.innerHeight)(u) - (0, i.outerHeight)(l) - l.offsetTop + (0, o.int)(f.paddingBottom) - (0, o.int)(p.marginBottom) };
    }
    return (0, o.isNum)(a.right) && (t2 = Math.min(t2, a.right)), (0, o.isNum)(a.bottom) && (r2 = Math.min(r2, a.bottom)), (0, o.isNum)(a.left) && (t2 = Math.max(t2, a.left)), (0, o.isNum)(a.top) && (r2 = Math.max(r2, a.top)), [t2, r2];
  }, t.getControlPosition = function(e2, t2, r2) {
    var o2 = "number" == typeof t2 ? (0, i.getTouch)(e2, t2) : null;
    if ("number" == typeof t2 && !o2) return null;
    var a = n(r2), l = r2.props.offsetParent || a.offsetParent || a.ownerDocument.body;
    return (0, i.offsetXYFromParent)(o2 || e2, l, r2.props.scale);
  }, t.snapToGrid = function(e2, t2, r2) {
    return [Math.round(t2 / e2[0]) * e2[0], Math.round(r2 / e2[1]) * e2[1]];
  };
  var o = r(6849), i = r(19186);
  function n(e2) {
    var t2 = e2.findDOMNode();
    if (!t2) throw new Error("<DraggableCore>: Unmounted during event!");
    return t2;
  }
}, 6849(e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), t.dontSetMe = function(e2, t2, r) {
    if (e2[t2]) return new Error("Invalid prop ".concat(t2, " passed to ").concat(r, " - do not set this, set it on the child."));
  }, t.findInArray = function(e2, t2) {
    for (var r = 0, o = e2.length; r < o; r++) if (t2.apply(t2, [e2[r], r, e2])) return e2[r];
  }, t.int = function(e2) {
    return parseInt(e2, 10);
  }, t.isFunction = function(e2) {
    return "function" == typeof e2 || "[object Function]" === Object.prototype.toString.call(e2);
  }, t.isNum = function(e2) {
    return "number" == typeof e2 && !isNaN(e2);
  };
}, 82026(e, t, r) {
  "use strict";
  var o = r(72539), i = r.n(o), n = r(48560), a = r.n(n), l = r(57148), s = r.n(l), c = r(60251), d = r.n(c), u = r(81263), p = r.n(u), f = r(50892), b = r.n(f), h = r(11532), v = {};
  v.styleTagTransform = b(), v.setAttributes = d(), v.insert = s().bind(null, "head"), v.domAPI = a(), v.insertStyleElement = p(), i()(h.A, v), h.A && h.A.locals && h.A.locals;
}, 73528(e) {
  "use strict";
  e.exports = JSON.parse('{"link-colors":"link-colors-1JyPtuQF","link-colors-with-underline":"link-colors-with-underline-3EJoCRFW","link-colors-secondary":"link-colors-secondary-1Ar0hhqH","link-colors-secondary-with-underline":"link-colors-secondary-with-underline-37kYaTlT","focus-outline-rounded":"focus-outline-rounded-16hk1LC7"}');
} }]);
