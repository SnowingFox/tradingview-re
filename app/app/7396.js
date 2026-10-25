"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[7396], { 97917(e, r, a) {
  a.d(r, { f: () => z });
  var t = a(79474), i = a(14487), n = a.n(i);
  function l(e2) {
    const r2 = void 0 !== e2 ? (a2 = e2, Math.min(Math.max(a2, 0), 100)) : e2;
    var a2;
    return { "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r2, style: { "--ui-lib-progressbar-value": r2 } };
  }
  const s = JSON.parse('{"xsmall":"xsmall-2vJYgf6G","small":"small-75N_goCf","medium":"medium-YBupIiX5","large":"large-tSdjHsO2","progressbar":"progressbar-3EYgYkTs","circle":"circle-Rj2ri0DJ","background":"background-2a3NzJ2H","foreground":"foreground-3svpcUbB","spinner":"spinner-2XuPmZC_","spin":"spin-15kwLs33","neutral":"neutral-2Qe4Jzi8","accent":"accent-2SSYGG5b","success":"success-Bc4QcaqP","warning":"warning-2GRfsHby","danger":"danger-393lCrUq"}');
  var o = a(72539), d = a.n(o), c = a(48560), u = a.n(c), v = a(57148), m = a.n(v), f = a(60251), g = a.n(f), p = a(81263), h = a.n(p), b = a(50892), y = a.n(b), w = a(86396), x = {};
  function z(e2) {
    const { size: r2, ariaLabel: a2, ariaLabelledby: i2, id: o2, intent: d2, value: c2 } = e2, u2 = void 0 === c2;
    return t.createElement("div", { className: n()(s[r2], s.progressbar), role: "progressbar", "aria-label": a2, "aria-labelledby": i2, id: o2, ...l(c2) }, t.createElement("svg", { className: n()(s.circle, s[d2], u2 && s.spinner) }, t.createElement("circle", { className: s.background }), t.createElement("circle", { className: s.foreground })));
  }
  x.styleTagTransform = y(), x.setAttributes = g(), x.insert = m().bind(null, "head"), x.domAPI = u(), x.insertStyleElement = h(), d()(w.A, x), w.A && w.A.locals && w.A.locals;
}, 86396(e, r, a) {
  a.d(r, { A: () => s });
  var t = a(30050), i = a.n(t), n = a(77259), l = a.n(n)()(i());
  l.push([e.id, '.xsmall-2vJYgf6G:dir(ltr){--ui-lib-size:2}.small-75N_goCf:dir(ltr){--ui-lib-size:3}.medium-YBupIiX5:dir(ltr){--ui-lib-size:4}.large-tSdjHsO2:dir(ltr){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(ltr){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(ltr){display:block;height:var(--width);overflow:visible;transform:rotate(-90deg);width:var(--width)}.background-2a3NzJ2H:dir(ltr),.foreground-3svpcUbB:dir(ltr){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(ltr){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(ltr){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(ltr){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(ltr){animation:spin-15kwLs33 1s linear infinite}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(ltr){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(ltr){stroke:var(--color-container-fill-primary-danger)}.xsmall-2vJYgf6G:dir(rtl){--ui-lib-size:2}.small-75N_goCf:dir(rtl){--ui-lib-size:3}.medium-YBupIiX5:dir(rtl){--ui-lib-size:4}.large-tSdjHsO2:dir(rtl){--ui-lib-size:5}.progressbar-3EYgYkTs:dir(rtl){--ui-lib-size-defaulted:var(--ui-lib-size,3);--ui-lib-size-defaulted-xsmall:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 2) * (var(--ui-lib-size-defaulted) - 2)));--ui-lib-size-defaulted-small:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 3) * (var(--ui-lib-size-defaulted) - 3)));--ui-lib-size-defaulted-medium:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 4) * (var(--ui-lib-size-defaulted) - 4)));--ui-lib-size-defaulted-large:calc(max(0, 1 - (var(--ui-lib-size-defaulted) - 5) * (var(--ui-lib-size-defaulted) - 5)));--width:calc(var(--ui-lib-size-defaulted-xsmall)*16px + var(--ui-lib-size-defaulted-small)*24px + var(--ui-lib-size-defaulted-medium)*34px + var(--ui-lib-size-defaulted-large)*64px);--radius:calc(var(--ui-lib-size-defaulted-xsmall)*7 + var(--ui-lib-size-defaulted-small)*11 + var(--ui-lib-size-defaulted-medium)*15.5 + var(--ui-lib-size-defaulted-large)*30);--radius-px:calc(var(--radius)*1px);--stroke-width:calc(var(--ui-lib-size-defaulted-xsmall)*2px + var(--ui-lib-size-defaulted-small)*2px + var(--ui-lib-size-defaulted-medium)*3px + var(--ui-lib-size-defaulted-large)*4px);height:var(--width);overflow:hidden;width:var(--width)}.circle-Rj2ri0DJ:dir(rtl){display:block;height:var(--width);overflow:visible;transform:rotate(90deg);width:var(--width)}.background-2a3NzJ2H:dir(rtl),.foreground-3svpcUbB:dir(rtl){stroke-width:var(--stroke-width);r:var(--radius-px);cx:calc(var(--width)/2);cy:calc(var(--width)/2)}.background-2a3NzJ2H:dir(rtl){fill:none;stroke:var(--color-container-fill-primary-neutral-light)}.foreground-3svpcUbB:dir(rtl){fill:none;transition:stroke-dashoffset .3s linear;will-change:stroke-dashoffset;--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius));stroke-dashoffset:calc(2*var(--pi)*var(--radius)*(1 - var(--ui-lib-progressbar-value, 50)/100))}@-moz-document url-prefix(""){.foreground-3svpcUbB:dir(rtl){--pi:3.1416;stroke-dasharray:calc(2*var(--pi)*var(--radius-px));stroke-dashoffset:calc(2*var(--pi)*var(--radius-px)*(1 - var(--ui-lib-progressbar-value, 50)/100))}}.spinner-2XuPmZC_:dir(rtl){animation:spin-15kwLs33 1s linear infinite}@keyframes spin-15kwLs33{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}.neutral-2Qe4Jzi8 .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-secondary-neutral-heavy)}.accent-2SSYGG5b .foreground-3svpcUbB:dir(rtl){stroke:var(--color-content-primary-accent)}.success-Bc4QcaqP .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-success)}.warning-2GRfsHby .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-warning)}.danger-393lCrUq .foreground-3svpcUbB:dir(rtl){stroke:var(--color-container-fill-primary-danger)}', ""]);
  const s = l;
}, 58735(e, r, a) {
  a.d(r, { A: () => s });
  var t = a(30050), i = a.n(t), n = a(77259), l = a.n(n)()(i());
  l.push([e.id, ".save-changes-dialog-container:not(.darwin) {\n	width: 100vw;\n	height: 100vh;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	background-color: var(--color-other-modal-background);\n}\n\n.dialog.save-changes {\n	min-width: 350px;\n	max-width: 445px;\n	\n	box-sizing: border-box;\n	align-items: center;\n	padding: 18px 24px;\n	border-radius: 12px;\n\n	&:not(.darwin) {\n		min-height: 196px;\n		max-height: 248px;\n	}\n\n	&.darwin {\n		height: 100vh;\n	}\n\n	&.error {\n		padding: 17px 24px;\n	}\n}\n\n.save-changes-info-icon {\n	width: 44px;\n	height: 44px;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	margin-bottom: 4px;\n}\n\n.save-changes-dialog-title {\n	color: var(--color-content-primary-neutral-bold);\n	margin: 0 0 12px;\n	text-align: center;\n}\n\n.save-changes-dialog-text {\n	color: var(--color-content-primary-neutral);\n	margin: 0;\n	text-align: center;\n\n	&:has(+ .dialog-buttons) {\n		margin-bottom: 16px;\n	}\n}\n\n.advices {\n	position: relative;\n	width: 100%;\n	height: 96px;\n	display: flex;\n	flex-direction: column;\n	align-items: center;\n	overflow: hidden;\n\n	&.small {\n		height: 72px;\n	}\n}\n\n.advice {\n	position: absolute;\n	opacity: 0;\n}\n\n.advice-show {\n	animation: Show 1s forwards;\n}\n\n.advice-hide {\n	animation: Hide 1s forwards;\n}\n\n@keyframes Hide {\n	from {\n		opacity: 1;\n	}\n	to {\n		opacity: 0;\n	}\n}\n\n@keyframes Show {\n	from {\n		opacity: 0;\n	}\n	to {\n		opacity: 1;\n	}\n}\n", ""]);
  const s = l;
}, 81272(e, r, a) {
  a.d(r, { DP: () => l.D, J2: () => i.J, jz: () => n.j, mN: () => t.m }), a(10300);
  var t = a(79278), i = (a(34097), a(23704), a(12329)), n = a(3156), l = a(49131);
  a(57179), a(57857);
}, 10300(e, r, a) {
  a(79474);
}, 79278(e, r, a) {
  a.d(r, { m: () => i });
  var t = a(79474);
  function i(e2) {
    const [r2, a2] = (0, t.useState)(e2);
    return { values: r2, setValues: a2, handleValueChange: (e3, r3) => {
      a2(((a3) => a3[e3] === r3 ? a3 : { ...a3, [e3]: r3 }));
    } };
  }
}, 34097(e, r, a) {
  a(79474);
}, 23704(e, r, a) {
  a(79474), a(62020), a(16309);
}, 12329(e, r, a) {
  a.d(r, { J: () => i });
  var t = a(79474);
  function i(e2, r2, a2 = []) {
    (0, t.useEffect)((() => {
      if (!e2) return;
      let a3 = e2.subscribe(r2);
      const t2 = () => {
        a3?.unsubscribe(), a3 = null;
      };
      return window.addEventListener("beforeunload", t2), () => {
        window.removeEventListener("beforeunload", t2), t2();
      };
    }), a2);
  }
}, 3156(e, r, a) {
  a.d(r, { j: () => l });
  var t = a(79474), i = a(75739);
  const n = ["mousedown", "click", "mouseup", "contextmenu"];
  function l(e2, r2, a2, l2 = {}) {
    const { escape: s = false, scroll: o = false, resize: d = false } = l2, c = (0, t.useCallback)((() => {
      a2(false);
    }), []);
    (0, t.useEffect)((() => {
      if (!r2) return;
      const a3 = (r3) => {
        e2.current?.contains(r3.target) || (r3.stopPropagation(), r3.preventDefault(), c());
      }, t2 = (e3) => {
        e3.key === i.N$.Escape && c();
      };
      return n.forEach(((e3) => {
        setTimeout((() => {
          document.addEventListener(e3, a3, true);
        }), 150);
      })), s && document.addEventListener("keydown", t2), o && document.addEventListener("scroll", c), d && window.addEventListener("resize", c), () => {
        n.forEach(((e3) => {
          setTimeout((() => {
            document.removeEventListener(e3, a3, true);
          }), 150);
        })), s && document.removeEventListener("keydown", t2), o && document.removeEventListener("scroll", c), d && window.removeEventListener("resize", c);
      };
    }), [e2, s, c, r2, d, o]);
  }
}, 49131(e, r, a) {
  a.d(r, { D: () => s });
  var t = a(79474), i = a(35492), n = a(12329);
  const l = () => document.documentElement.getAttribute("data-theme") ?? "light";
  function s() {
    const [e2, r2] = (0, t.useState)(l()), [a2, s2] = (0, t.useState)(l());
    return (0, n.J)((0, i.bQ)().themeChange, ((e3) => {
      setTimeout((() => {
        r2(e3), s2("system" === e3 ? l() : e3);
      }), 30);
    })), { theme: e2, platformTheme: a2, isDarkTheme: "dark" === a2 };
  }
}, 57179(e, r, a) {
  a(79474), a(7750), a(59587), a(12329), a(49131);
}, 57857(e, r, a) {
  a(79474), a(62020), a(7750), a(16309), a(75739);
}, 47396(e, r, a) {
  a.r(r), a.d(r, { default: () => Y });
  var t, i, n = a(79474), l = a(62020), s = a(18865), o = a(1566), d = a(97917), c = a(20369), u = a(59587);
  !(function(e2) {
    e2.Debug = "debug", e2.Chart = "chart", e2.Group = "group", e2.Window = "window", e2.App = "app";
  })(t || (t = {})), (function(e2) {
    e2.Retry = "retry", e2.Discard = "discard", e2.Cancel = "cancel";
  })(i || (i = {})), t.App;
  var v, m = a(8750), f = a(75739), g = a(81272);
  function p() {
    return p = Object.assign ? Object.assign.bind() : function(e2) {
      for (var r2 = 1; r2 < arguments.length; r2++) {
        var a2 = arguments[r2];
        for (var t2 in a2) ({}).hasOwnProperty.call(a2, t2) && (e2[t2] = a2[t2]);
      }
      return e2;
    }, p.apply(null, arguments);
  }
  const h = function(e2) {
    return n.createElement("svg", p({ width: 28, height: 28, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e2), v || (v = n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Zm-1.5-12L12 5h4l-.5 11h-3Zm3.5 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z", fill: "#FF9800" })));
  };
  var b = a(72539), y = a.n(b), w = a(48560), x = a.n(w), z = a(57148), k = a.n(z), E = a(60251), S = a.n(E), C = a(81263), N = a.n(C), L = a(50892), B = a.n(L), J = a(58735), T = {};
  T.styleTagTransform = B(), T.setAttributes = S(), T.insert = k().bind(null, "head"), T.domAPI = x(), T.insertStyleElement = N(), y()(J.A, T), J.A && J.A.locals && J.A.locals;
  const U = (e2) => ((e3) => {
    const r2 = [...e3.filter(((e4) => "" !== e4))];
    for (let e4 = r2.length - 1; e4 > 0; e4--) {
      const a2 = Math.floor(Math.random() * (e4 + 1));
      [r2[e4], r2[a2]] = [r2[a2], r2[e4]];
    }
    return r2;
  })([e2("Sometimes the best trades are the ones you did not take."), e2("Trading more ≠ more profits."), e2("The market doesn't care about you or your position."), e2("It's okay to love trading."), e2("Not being stressed from a loss is the real flex."), e2("Stop buying lottery tickets."), e2('"So happy I spent $200 on trading signals" - said no trader ever.'), e2("Always do your research."), e2("How to feel awful: stare at your account / trades all day."), e2("When you think you've got the keys to the market, they change the locks."), e2("Weak traders focus on results - Strong traders focus on process."), e2("Simplify your life. Good traders have simple lives."), e2("Good traders try to avoid losing money. Great traders accept they will lose money."), e2("Everyone started somewhere."), e2("Plan the trade, see the trade, feel the trade."), e2("Plan for the long term."), e2("Rule #1 - Don't get rugged"), e2("Always look first. Never rush into a trade or investment blindly."), e2("Do your own research, plan ahead, and think for the long term."), e2("When in doubt, zoom out."), e2("Dips happen."), e2("The trend is your friend."), e2("There are only three things you can do in markets: 1. Buy 2. Sell 3. Wait.")]), A = (e2) => {
    const r2 = e2.querySelector(".advice.advice-show");
    if (!r2) return void e2.querySelector(".advice")?.classList.add("advice-show");
    const a2 = r2.nextElementSibling;
    if (r2.classList.remove("advice-show"), r2.classList.add("advice-hide"), a2) a2.classList.remove("advice-hide"), a2.classList.add("advice-show");
    else {
      const r3 = e2.querySelector(".advice");
      r3 && (r3.classList.remove("advice-hide"), r3.classList.add("advice-show"));
    }
  }, Y = ({ data: e2 }) => {
    const { t: r2, i18n: a2 } = (0, l.Bd)(), v2 = (0, n.useRef)(null), p2 = (0, n.useRef)(null), [b2, y2] = (0, n.useState)(U(r2)), [w2, x2] = (0, n.useState)(false);
    return (0, g.J2)((0, u.YZ)().saveChangesErrorSubject, ((r3) => {
      var a3;
      r3.scopeId === e2.scope.id && (a3 = r3.hasError, x2(a3), v2.current && (a3 ? v2.current.classList.add("error") : v2.current.classList.remove("error")));
    })), (0, n.useEffect)((() => {
      if ((0, f.iT)()) return;
      if (!v2.current) return;
      const { width: e3, height: r3 } = (0, m.Jn)(a2.language);
      v2.current.style.width = `${e3}px`, v2.current.style.height = `${r3}px`;
    }), [a2.language]), (0, n.useEffect)((() => {
      if (!p2.current) return;
      let e3 = null;
      return w2 && e3 ? (clearInterval(e3), void (e3 = null)) : (A(p2.current), e3 = setInterval((() => {
        p2.current && A(p2.current);
      }), 3e3), () => {
        e3 && (clearInterval(e3), e3 = null);
      });
    }), [w2]), (0, n.useEffect)((() => {
      y2(U(r2));
    }), [r2]), n.createElement("div", { className: "save-changes-dialog-container " + ((0, f.iT)() ? "darwin" : "") }, n.createElement("div", { className: "dialog save-changes " + ((0, f.iT)() ? "darwin" : ""), ref: v2 }, n.createElement("div", { className: "save-changes-info-icon" }, w2 ? n.createElement(h, null) : n.createElement(d.f, { intent: "neutral", size: "medium" })), n.createElement(c.o, { tag: "h1", name: "typography-accent-24px-semibold", className: "save-changes-dialog-title" }, r2(w2 ? "Something went wrong" : "Saving changes...")), w2 ? n.createElement(n.Fragment, null, n.createElement(c.o, { tag: "p", name: "typography-regular-16px", className: "save-changes-dialog-text error" }, r2("Check your internet connection and try to save changes again.")), n.createElement("div", { className: "dialog-buttons save-changes-dialog" }, n.createElement(o.SX, { onClick: () => {
      (0, u.YZ)().saveChangesDecisionSubject.next({ scopeId: e2.scope.id, type: i.Discard });
    }, size: "small", color: "gray", variant: "secondary" }, e2.scope.type === t.Group ? r2("Close anyway") : r2("Quit anyway")), n.createElement(o.SX, { onClick: () => {
      (0, u.YZ)().saveChangesDecisionSubject.next({ scopeId: e2.scope.id, type: i.Retry });
    }, size: "small", color: "black", variant: "primary" }, r2("Try again"))), n.createElement("div", { className: "dialog-close-button" }, n.createElement(s.J, { "aria-label": "close-save-changes-modal", onClick: () => {
      (0, u.YZ)().saveChangesDecisionSubject.next({ scopeId: e2.scope.id, type: i.Cancel });
    }, size: "medium", tabIndex: -1 }))) : n.createElement("div", { className: "advices " + (z2 = a2.language, ["zh_CN", "zh_TW"].includes(z2) ? "small" : ""), ref: p2 }, b2.map(((e3) => n.createElement(c.o, { key: e3, tag: "p", name: "typography-regular-16px", className: "save-changes-dialog-text advice" }, e3))))));
    var z2;
  };
}, 35492(e, r, a) {
  a.d(r, { bQ: () => i });
  var t = a(22259);
  function i() {
    return t.f.provideProxy("tvd:theme-manager-service");
  }
} }]);
