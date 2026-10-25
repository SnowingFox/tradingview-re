(() => {
  "use strict";
  var t, e = { 10375(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".spinner-container {\n	position: absolute;\n	top: 50%;\n	left: 50%;\n	width: 64px;\n	height: 64px;\n	transform: translate(-50%, -50%);  \n}\n", ""]);
    const s = a;
  }, 53064(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".action-button {\n	-webkit-app-region: none;\n	width: 50px;\n	height: var(--window-header-height);\n	box-sizing: border-box;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	color: var(--color-content-primary-neutral);\n	margin: 0;\n	padding: 0;\n	background-color: transparent;\n	border: none;\n	outline: none;\n\n	.app:not(.active) &:hover {\n		background-color: var(--color-container-fill-primary-neutral-light);\n		color: var(--color-content-primary-neutral-bold);\n	}\n\n	.app.active &:hover {\n		background-color: var(--color-container-fill-primary-neutral-normal);\n		color: var(--color-content-primary-neutral-bold);\n	}\n}\n", ""]);
    const s = a;
  }, 68512(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, "/* TODO: remove these overrides when ui-lib provides a semantic color for the tab panel background */\n[data-theme='dark'] {\n	--color-background-secondary-neutral-normal: var(--color-cold-gray-800); /* base ui-lib palette color */\n}\n\n[data-theme='light'] {\n	--color-background-secondary-neutral-normal: var(--color-cold-gray-150); /* base ui-lib palette color */\n}\n\n.app {\n	background-color: var(--color-background-primary-neutral-extra-light);\n\n	&.active {\n		background-color: var(--color-background-secondary-neutral-normal);\n	}\n\n	&.hidden {\n		visibility: hidden;\n	}\n}\n\n.header {\n	-webkit-app-region: drag;\n	direction: ltr;\n	width: 100%;\n	height: var(--window-header-height);\n	display: grid;\n\n	.app.ltr-system.darwin > & {\n		grid-template-columns: min-content auto min-content;\n		grid-template-areas: 'window-controls tabs tab-panel-actions';\n	}\n\n	.app.rtl-system.darwin > & {\n		grid-template-columns: auto min-content min-content;\n		grid-template-areas: 'tabs tab-panel-actions window-controls';\n	}\n\n	.app.win > & {\n		grid-template-columns: 1fr min-content auto;\n		grid-template-areas: 'tabs tab-panel-actions window-controls';\n	}\n}\n\n.window-title {\n	align-self: center;\n	color: var(--color-main-text);\n\n	.app:not(.darwin) & {\n		margin: 0 15px;\n	}\n}\n\n@keyframes fade {\n	from {\n		opacity: 1;\n	}\n	50% {\n		opacity: 0.5;\n	}\n	to {\n		opacity: 1;\n	}\n}\n\n@-webkit-keyframes fade {\n	from {\n		opacity: 1;\n	}\n	50% {\n		opacity: 0.5;\n	}\n	to {\n		opacity: 1;\n	}\n}\n", ""]);
    const s = a;
  }, 26311(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".close-button {\n	.app:not(.active) &:hover,\n	.app.active &:hover {\n		background-color: var(--color-ripe-red-400); /* base ui-lib palette color */\n\n		& > svg {\n			color: var(--color-white); /* base ui-lib palette color */\n		}\n	}\n}\n", ""]);
    const s = a;
  }, 69190(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".window-controls {\n	height: 100%;\n	grid-area: window-controls;\n	display: flex;\n	flex-flow: row nowrap;\n\n	&.darwin {\n		.app:not(.fullscreen) & {\n			width: var(--darwin-controls-width);\n		}\n\n		.app.fullscreen & {\n			display: none;\n		}\n	}\n}\n\n.window-control {\n	color: var(--color-content-primary-neutral-bold);\n}\n", ""]);
    const s = a;
  }, 96297(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".bad-connection-icon-wrapper {\n	display: flex;\n	margin: auto 5px;\n	justify-content: center;\n	align-items: center;\n	width: 34px;\n	height: var(--window-header-height);\n	-webkit-app-region: none;\n}\n\n.bad-connection-icon {\n	margin-top: 2px;\n}\n\n.blinking-dot {\n	position: relative;\n	top: 4px;\n	left: -5px;\n	animation:fade 1000ms infinite;\n	-webkit-animation:fade 1000ms infinite;\n}\n", ""]);
    const s = a;
  }, 56297(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".main-menu-button.opened {\n	background-color: var(--color-container-fill-primary-neutral-extra-light);\n}\n\n.main-menu-update-app-button {\n	-webkit-app-region: none;\n	margin-right: 4px;\n\n	&.opened {\n		--ui-lib-button-default-color-bg: var(--color-container-fill-primary-success-semi-bold) !important;\n		--ui-lib-button-default-color-border: var(--color-container-fill-primary-success-semi-bold) !important;\n	}\n}\n", ""]);
    const s = a;
  }, 5068(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), o = n2(77259), a = n2.n(o)()(i2());
    a.push([t2.id, ".tab-panel-actions {\n	grid-area: tab-panel-actions;\n	display: flex;\n	align-items: center;\n}\n", ""]);
    const s = a;
  }, 65910(t2, e2, n2) {
    var r2 = n2(79474), i2 = n2(48088), o = n2(41493), a = n2(12129), s = n2(62020), l = n2(13526), c = n2(12069), d = n2(46611), u = n2(20369), h = n2(22259), g = n2(7750), p = n2(53524), b = n2(9639), m = n2(71457), f = n2(84157);
    const w = ["ar", "ar_AE"], v = ["he", "he_IL"], y = (t3) => [...w, ...v].includes(t3);
    var T = n2(16928), C = n2(87574), S = n2(14381), R = n2(10284), P = n2(1820), E = n2(9691);
    let x;
    if (f.ipcMain) {
      let Oe = function() {
        const t3 = {}, e3 = T.join(f.app.getAppPath(), "resources", "locales");
        for (const n3 of R.l.readDirSync(e3)) {
          const r3 = R.l.readFileSync(T.join(e3, n3)), i3 = T.parse(n3).name, o2 = (0, E.G)(r3);
          o2 && (t3[i3] = { translation: o2 });
        }
        return t3;
      };
      x = Oe(), f.ipcMain.on(P.ox, ((t3) => {
        t3.returnValue = x;
      }));
    } else x = f.ipcRenderer.sendSync(P.ox);
    C.Ay.use(S.A).use(s.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: x, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
    const A = C.Ay, k = "tvd:locale-service", I = void 0 !== f.ipcMain;
    function M() {
      return h.f.provideProxy(k);
    }
    function O(t3, e3) {
      t3.setAttribute("dir", e3 ? "rtl" : "ltr");
    }
    function W(t3) {
      t3 && "" === t3.dir && O(t3, y(A.language)), (function(t4) {
        let e3;
        e3 = I ? h.f.provide(k).localeChange.subscribe(t4) : M().localeChange.subscribe(t4);
        const n3 = () => {
          e3?.unsubscribe(), e3 = void 0, window.removeEventListener("beforeunload", n3);
        };
        "undefined" != typeof window && window.addEventListener("beforeunload", n3);
      })(((e3) => {
        "" !== e3 && ((async (t4) => {
          A.language !== t4 && await C.Ay.changeLanguage(t4);
        })(e3).catch(((t4) => {
          (0, g.yg)().error("setupI18nLocaleHandler(): changeLocale() error", t4);
        })), t3 && O(t3, y(e3)));
      }));
    }
    var D = n2(46930), $ = n2(20802);
    function j() {
      return h.f.provideProxy($.k);
    }
    var V, F = n2(8750);
    !(function(t3) {
      t3[t3.AllWindowsClosed = 0] = "AllWindowsClosed", t3[t3.Initialize = 1] = "Initialize", t3[t3.Dispose = 2] = "Dispose";
    })(V || (V = {})), (function(t3, e3, n3, r3) {
      var i3, o2 = arguments.length, a2 = o2 < 3 ? e3 : null === r3 ? r3 = Object.getOwnPropertyDescriptor(e3, n3) : r3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(t3, e3, n3, r3);
      else for (var s2 = t3.length - 1; s2 >= 0; s2--) (i3 = t3[s2]) && (a2 = (o2 < 3 ? i3(a2) : o2 > 3 ? i3(e3, n3, a2) : i3(e3, n3)) || a2);
      o2 > 3 && a2 && Object.defineProperty(e3, n3, a2);
    })([p.F], class {
      eventListeners = /* @__PURE__ */ new Map();
      on(t3, e3) {
        const n3 = this.eventListeners.get(t3) ?? [];
        n3.push(e3), this.eventListeners.set(t3, n3);
      }
      notifyListeners(t3, e3 = true) {
        const n3 = this.eventListeners.get(t3);
        if (n3) {
          for (const t4 of n3) t4();
          e3 && this.eventListeners.delete(t3);
        }
      }
      clearListeners() {
        this.eventListeners.clear();
      }
    }.prototype, "notifyListeners", null);
    var L = n2(92763), N = n2(62340), z = n2(42952), B = n2(30828), H = n2(97917), U = n2(72539), _ = n2.n(U), G = n2(48560), K = n2.n(G), Z = n2(57148), Q = n2.n(Z), q = n2(60251), X = n2.n(q), J = n2(81263), Y = n2.n(J), tt = n2(50892), et = n2.n(tt), nt = n2(10375), rt = {};
    rt.styleTagTransform = et(), rt.setAttributes = X(), rt.insert = Q().bind(null, "head"), rt.domAPI = K(), rt.insertStyleElement = Y(), _()(nt.A, rt), nt.A && nt.A.locals && nt.A.locals;
    const it = () => r2.createElement("div", { className: "spinner-container", role: "progressbar" }, r2.createElement(H.f, { intent: "neutral", size: "large" }));
    function ot(t3, e3, n3 = []) {
      (0, r2.useEffect)((() => {
        if (!t3) return;
        let n4 = t3.subscribe(e3);
        const r3 = () => {
          n4?.unsubscribe(), n4 = null;
        };
        return window.addEventListener("beforeunload", r3), () => {
          window.removeEventListener("beforeunload", r3), r3();
        };
      }), n3);
    }
    var at, st, lt = n2(75739);
    !(function(t3) {
      t3[t3.None = 0] = "None", t3[t3.Up = 1] = "Up", t3[t3.Down = 2] = "Down";
    })(at || (at = {})), (function(t3) {
      t3[t3.Left = 0] = "Left", t3[t3.Middle = 1] = "Middle", t3[t3.Right = 2] = "Right";
    })(st || (st = {}));
    var ct = n2(53064), dt = {};
    dt.styleTagTransform = et(), dt.setAttributes = X(), dt.insert = Q().bind(null, "head"), dt.domAPI = K(), dt.insertStyleElement = Y(), _()(ct.A, dt), ct.A && ct.A.locals && ct.A.locals;
    const ut = ({ onClick: t3, icon: e3, id: n3, className: i3 = "", onMouseMove: o2, onMouseLeave: a2, title: s2 }) => r2.createElement("button", { id: n3, onMouseUp: (e4) => {
      e4.button === st.Left && t3(e4);
    }, onMouseMove: o2, onMouseLeave: a2, className: `action-button ${i3}`, title: s2, tabIndex: -1 }, e3);
    var ht, gt = n2(92920);
    function pt() {
      return pt = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, pt.apply(null, arguments);
    }
    const bt = function(t3) {
      return r2.createElement("svg", pt({ xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 }, t3), ht || (ht = r2.createElement("path", { d: "m10.65.65-10 10 .7.7 10-10zm-9.3 0-.7.7 10 10 .7-.7z", fill: "currentColor" })));
    };
    var mt;
    function ft() {
      return ft = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, ft.apply(null, arguments);
    }
    const wt = function(t3) {
      return r2.createElement("svg", ft({ width: 18, height: 13, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t3), mt || (mt = r2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M.5 0H0v13h10v-3H9v2H1V1h8v2h1V0H.5Zm13.763 2.668-.333-.374-.747.664.332.374L15.887 6H7v1h8.887l-2.372 2.668-.332.373.747.665.333-.374 3.11-3.5.296-.332-.295-.332-3.111-3.5Z", fill: "currentColor" })));
    };
    var vt = n2(26311), yt = {};
    yt.styleTagTransform = et(), yt.setAttributes = X(), yt.insert = Q().bind(null, "head"), yt.domAPI = K(), yt.insertStyleElement = Y(), _()(vt.A, yt), vt.A && vt.A.locals && vt.A.locals;
    const Tt = (t3, e3, n3) => {
      e3(n3), t3(n3 >= 1);
    }, Ct = () => {
      const { t: t3 } = (0, s.Bd)(), [e3, n3] = (0, r2.useState)(false), [i3, o2] = (0, r2.useState)(1);
      (0, r2.useEffect)((() => {
        j().getCountWindows().then(((t4) => {
          Tt(n3, o2, t4);
        })).catch(((t4) => {
          (0, g.yg)().error("<ButtonClose>.useEffect(): getWindowService().getCountWindows() error", t4);
        }));
      }), []), ot(j().chartWindowSubject, ((t4) => {
        Tt(n3, o2, t4);
      }));
      const a2 = (0, r2.useCallback)(((t4) => {
        if (e3 && !t4.shiftKey) return (0, g.yg)().info("Close button clicked - quitting app"), void gt.app.quit();
        (0, g.yg)().info("Close button clicked - closing window"), (0, z.CI)().close().catch(((t5) => {
          (0, g.yg)().error("<ButtonClose>.close(): getWindowControl().close() error", t5);
        }));
      }), [e3]), l2 = (0, r2.useCallback)(((t4) => {
        t4.shiftKey && e3 && n3(false);
      }), [e3]), c2 = (0, r2.useCallback)(((t4) => {
        t4.shiftKey || e3 || n3(i3 > 1);
      }), [i3, e3]), d2 = (0, r2.useCallback)((() => {
        j().getCountWindows().then(((t4) => {
          Tt(n3, o2, t4);
        })).catch(((t4) => (0, g.yg)().error("<ButtonClose>: getWindowService().getCountWindows() error in handleMouseLeave()", t4)));
      }), []), u2 = t3("Click to quit the app"), h2 = t3("Use Shift+click or Alt+F4 to close only this window");
      return e3 ? r2.createElement(ut, { onClick: a2, icon: 1 === i3 ? r2.createElement(bt, null) : r2.createElement(wt, null), id: "close", className: "window-control close-button", onMouseMove: l2, title: `${u2}
${h2}` }) : r2.createElement(ut, { onClick: a2, icon: r2.createElement(bt, null), id: "close", className: "window-control close-button", onMouseMove: c2, onMouseLeave: d2, title: t3("Close window") });
    };
    var St;
    function Rt() {
      return Rt = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, Rt.apply(null, arguments);
    }
    const Pt = function(t3) {
      return r2.createElement("svg", Rt({ width: 10, height: 11, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t3), St || (St = r2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 3.793V.5H5v5h5v-1H6.707l3.281-3.281L9.293.5 6 3.793ZM.5.5H0v10h10v-3H9v2H1v-8h2v-1H.5Z", fill: "currentColor" })));
    };
    var Et;
    function xt() {
      return xt = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, xt.apply(null, arguments);
    }
    const At = function(t3) {
      return r2.createElement("svg", xt({ xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 }, t3), Et || (Et = r2.createElement("path", { d: "M1 1v10h10V1H1zm1 1h8v8H2V2z", fill: "currentColor" })));
    };
    var kt;
    function It() {
      return It = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, It.apply(null, arguments);
    }
    const Mt = function(t3) {
      return r2.createElement("svg", It({ xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 }, t3), kt || (kt = r2.createElement("path", { d: "M1 6h10v1H1z", fill: "currentColor" })));
    };
    var Ot;
    function Wt() {
      return Wt = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, Wt.apply(null, arguments);
    }
    const Dt = function(t3) {
      return r2.createElement("svg", Wt({ xmlns: "http://www.w3.org/2000/svg", width: 12, height: 12 }, t3), Ot || (Ot = r2.createElement("path", { d: "M3 1v2H1v8h8V9h2V1zm1 1h6v6H9V3H4zM2 4h6v6H2z", fill: "currentColor" })));
    };
    var $t = n2(69190), jt = {};
    jt.styleTagTransform = et(), jt.setAttributes = X(), jt.insert = Q().bind(null, "head"), jt.domAPI = K(), jt.insertStyleElement = Y(), _()($t.A, jt), $t.A && $t.A.locals && $t.A.locals;
    const Vt = ({ windowStateSubject: t3 }) => {
      const { t: e3 } = (0, s.Bd)(), [n3, i3] = (0, r2.useState)(), [o2] = (0, r2.useState)((0, z.Mz)().titleBarOptions);
      ot(t3, i3);
      const a2 = (function(t4, e4) {
        return t4 === F.y7.FullscreenWithPanel ? { icon: r2.createElement(Pt, null), title: e4("Exit full screen") } : t4 === F.y7.Maximized ? { icon: r2.createElement(Dt, null), title: e4("Restore") } : { icon: r2.createElement(At, null), title: e4("Maximize") };
      })(n3, e3);
      return r2.createElement(r2.Fragment, null, (0, N.iT)() ? r2.createElement("div", { className: "window-controls darwin" }) : r2.createElement("div", { className: "window-controls" }, o2.showMinimize && r2.createElement(ut, { onClick: () => {
        (0, z.CI)().closeHTMLFullscreen().then((() => {
          (0, z.CI)().toggleMinimize().catch(((t4) => {
            (0, g.yg)().error("<Controls>.minimize(): getWindowControl().toggleMinimize() error", t4);
          }));
        })).catch(((t4) => {
          (0, g.yg)().error("<Controls>.minimise(): getWindowControl().closeHTMLFullscreen() error", t4);
        }));
      }, icon: r2.createElement(Mt, null), id: "minimize", className: "window-control", title: e3("Minimize") }), o2.showMaximize && r2.createElement(ut, { onClick: () => {
        n3 !== F.y7.FullscreenWithPanel ? (0, z.CI)().toggleMaximize().catch(((t4) => {
          (0, g.yg)().error("<Controls>.toggleMaximise(): getWindowControl().toggleMaximize() error", t4);
        })) : (0, z.CI)().toggleFullscreen().catch(((t4) => {
          (0, g.yg)().error("<Controls>.toggleMaximise(): getWindowControl().toggleFullscreen() error", t4);
        }));
      }, icon: a2.icon, id: "maximize", className: "window-control", title: a2.title }), r2.createElement(Ct, null)));
    };
    var Ft = n2(61888), Lt = n2(71431), Nt = n2(98260), zt = n2(51144), Bt = n2(24388), Ht = n2(89978), Ut = n2(25510), _t = (n2(62806), function(t3, e3, n3, r3) {
      var i3, o2 = arguments.length, a2 = o2 < 3 ? e3 : null === r3 ? r3 = Object.getOwnPropertyDescriptor(e3, n3) : r3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(t3, e3, n3, r3);
      else for (var s2 = t3.length - 1; s2 >= 0; s2--) (i3 = t3[s2]) && (a2 = (o2 < 3 ? i3(a2) : o2 > 3 ? i3(e3, n3, a2) : i3(e3, n3)) || a2);
      return o2 > 3 && a2 && Object.defineProperty(e3, n3, a2), a2;
    });
    let Gt = class extends r2.Component {
      static contextType = B.h;
      windowCountSubscription;
      state = { tabs: null, hoveredTabIndex: null, isLastWindow: false, isTooltipVisibleGlobal: false, lastTabRightBorder: 0, lastTabClickedId: "" };
      id = "";
      tabsMap = /* @__PURE__ */ new Map();
      tabPanelRef = r2.createRef();
      constructor(t3) {
        super(t3), h.f.registerRemoteService(this, m.ct);
      }
      getBounds() {
        const t3 = this.tabPanelRef?.current?.getBoundingClientRect() ?? Lt.Bd;
        return Promise.resolve({ x: t3.x, y: t3.y, width: t3.width, height: t3.height });
      }
      async componentDidMount() {
        const t3 = async () => {
          try {
            const t4 = (0, Lt.gO)();
            await t4.registerDroppable(this.id, this.context.windowId), (0, g.yg)().debug(`TabPanel.componentDidMount(): "Registered droppable with id: ${(0, b.QD)(this.id)}"`);
          } catch (t4) {
            (0, g.yg)().error(`Could not register droppable ${(0, b.QD)(this.id)}`, t4);
          }
        };
        this.id || (this.id = h.f.registerRemoteObject(this, m.ct), (async () => {
          for (; !this.context.windowId; ) await (0, lt.yy)(100);
        })().then((() => {
          t3(), (0, z.CI)().registerTabPanel(this.id).catch(((t4) => {
            (0, g.yg)().error(`<TabPanel>.componentDidMount(): getWindowControl().registerTabPanel(id: ${this.id})`, t4);
          }));
        })));
        const e3 = async () => {
          const t4 = await j().getCountWindows();
          this.setState({ isLastWindow: 1 === t4 }), this.windowCountSubscription = j().chartWindowSubject.subscribe(((t5) => {
            this.setState({ isLastWindow: 1 === t5 });
          }));
        };
        try {
          await e3();
        } catch (t4) {
          (0, g.yg)().error("<TabPanel>.componentDidMount(): setShowLastTabCloseButton() error", t4);
        }
      }
      componentDidUpdate() {
        const t3 = this.getLastTab();
        if (this.tabPanelRef?.current && t3) {
          this.tabPanelRef.current.scrollLeft = this.tabPanelRef.current.scrollWidth;
          const e3 = this.tabsMap.get(t3.id)?.current?.getBoundingClientRect().right;
          e3 && e3 !== this.state.lastTabRightBorder && this.setState({ lastTabRightBorder: e3 });
        }
      }
      componentWillUnmount() {
        h.f.unregisterRemoteObject(this.id), this.windowCountSubscription?.unsubscribe(), this.windowCountSubscription = void 0;
      }
      updateTabUrl(t3, e3) {
        return this.setState(((n3) => ({ ...n3, tabs: n3?.tabs?.map(((n4) => n4.id === t3 ? { ...n4, url: e3 } : n4)) ?? [] }))), Promise.resolve();
      }
      updateTabs(t3, e3) {
        if (t3.length > 1) {
          const e4 = t3[t3.length - 1];
          e4.offset && (e4.offset = this.normalizeOffset(e4.id, e4.offset, t3));
        }
        return e3 && this.mouseOverTab(null), this.setState({ tabs: t3 }), Promise.resolve();
      }
      render() {
        return r2.createElement("div", { className: "tabs", ref: this.tabPanelRef }, this.state.tabs && r2.createElement("div", { className: "tabs-container", style: { flexBasis: 250 * this.state.tabs.length + "px" }, onMouseLeave: () => this.mouseLeave() }, this.renderTabs(this.state.tabs)), r2.createElement(Bt.O, { offset: Math.round(this.state.lastTabRightBorder) }), r2.createElement("div", { id: "placeholder" }), r2.createElement("div", { className: "draggable-area", onDoubleClick: () => {
          (0, z.CI)().toggleMaximize().catch(((t3) => {
            (0, g.yg)().error("<TabPanel>.onDoubleClick(): getWindowControl().toggleMaximize() error", t3);
          }));
        } }));
      }
      mouseLeave() {
        (0, z.CI)().closeTooltip().catch(((t3) => {
          (0, g.yg)().error("<TabPanel>.mouseLeave(): getWindowControl().closeTooltip() error", t3);
        })), this.setState({ isTooltipVisibleGlobal: false }), this.mouseOverTab(null);
      }
      renderTabs(t3) {
        const e3 = (function(t4, e4) {
          if (0 === t4) return Ut.v.Normal;
          const n3 = e4 / t4;
          return n3 <= 44 ? Ut.v.XXSmall : n3 <= 75 ? Ut.v.XSmall : n3 <= 110 ? Ut.v.Small : Ut.v.Normal;
        })(t3.length, this.tabPanelRef?.current?.scrollWidth ?? 0);
        return t3.map(((n3, i3) => r2.createElement(Ht.o, { key: n3.id, setRef: (t4) => this.setTabRef(n3.id, t4), id: n3.id, active: n3.active, pinned: n3.pinned, isChart: n3.isChart ?? false, hideCloseTabButton: this.state.isLastWindow && 1 === t3.length, index: i3, offset: n3.offset, initialWidth: 1 === this.state.tabs?.length ? n3.width : void 0, tabSize: e3, lastTabClickedId: this.state.lastTabClickedId, setLastTabClickedId: (t4) => this.setState({ lastTabClickedId: t4 }), tabsQuantity: this.state.tabs ? this.state.tabs.length : null, isTooltipVisibleGlobal: this.state.isTooltipVisibleGlobal, isTooltipVisibleGlobalChange: (t4) => this.isTooltipVisibleGlobalChange(t4), mouseOverTab: (t4) => this.mouseOverTab(t4), t: this.props.t })));
      }
      setTabRef(t3, e3) {
        this.tabsMap.set(t3, e3);
      }
      getLastTab() {
        if (this.state.tabs && 0 !== this.state.tabs.length) return this.getRealTabsWidth() ? this.state.tabs.reduce(((t3, e3) => {
          if (!t3) return e3;
          const n3 = this.tabsMap.get(t3.id)?.current?.getBoundingClientRect(), r3 = this.tabsMap.get(e3.id)?.current?.getBoundingClientRect();
          return n3 && r3 ? n3.right > r3.right ? t3 : e3 : n3 ? t3 : e3;
        })) : this.state.tabs[this.state.tabs.length - 1];
      }
      mouseOverTab(t3) {
        this.setState({ hoveredTabIndex: t3 });
      }
      isTooltipVisibleGlobalChange(t3) {
        this.setState({ isTooltipVisibleGlobal: t3 });
      }
      getTabPanelRightBound() {
        let t3 = this.tabPanelRef?.current?.getBoundingClientRect()?.right;
        return t3 && (t3 -= 20), t3;
      }
      getControlsAreaWidth() {
        const t3 = this.tabPanelRef?.current;
        if (!t3 || !t3.lastElementChild) return;
        const e3 = window.innerWidth - t3.lastElementChild.getBoundingClientRect().right;
        return { leftControlWidth: t3.offsetLeft, rightControlWidth: e3 };
      }
      getRealTabsWidth() {
        const t3 = this.tabPanelRef?.current?.lastElementChild?.previousElementSibling;
        if (!t3) return;
        const e3 = t3.getBoundingClientRect().right;
        return e3 ? "darwin" === process.platform ? e3 - this.getDarwinControlWidth() : e3 : void 0;
      }
      getTabsWidth() {
        const t3 = this.getLastTab();
        if (!t3) return;
        let e3 = this.tabsMap.get(t3.id)?.current?.getBoundingClientRect()?.right;
        return e3 ? (t3.offset && (e3 += t3.offset), "darwin" === process.platform ? e3 - this.getDarwinControlWidth() : e3) : void 0;
      }
      onDragStart(t3) {
      }
      onDragEnd(t3, e3) {
      }
      async onDragOver(t3) {
        const e3 = this.state.tabs, n3 = await this.getDragData();
        if (!e3 || !n3 || !this.state.prevCursorPoint) return;
        const r3 = e3.find(((t4) => t4.id === n3.tabId));
        if (!r3) return void this.attachTab(t3.x, n3.tabId);
        if (1 === this.state.tabs?.length) return;
        const i3 = t3.x - this.state.prevCursorPoint.x;
        if (i3 >= -1 && i3 <= 1) return;
        const o2 = this.tabsMap.get(n3.tabId)?.current;
        if (!o2) return;
        const a2 = o2.getBoundingClientRect();
        if (a2.left > this.state.prevCursorPoint.x || this.state.prevCursorPoint.x > a2.right) return void this.setState({ prevCursorPoint: t3 });
        const s2 = this.getTabPanelRightBound();
        if (!s2) return;
        const l2 = o2.offsetWidth, c2 = o2.getBoundingClientRect().left, d2 = c2 - (r3.offset ?? 0);
        r3.offset = this.getFittingOffset(i3 + (r3.offset ?? 0), d2, l2, s2 - 25), this.setState({ tabs: e3, prevCursorPoint: t3 }), this.onTabMove(n3.tabId, { x: c2, y: 0, width: l2, height: F.tj });
      }
      async onDragEnter(t3) {
        console.log("drag enter"), (0, z.CI)().bringToFront().catch(((t4) => {
          (0, g.yg)().error("<TabPanel>.onDragEnter(): getWindowControl().bringToFront() error", t4);
        }));
        const e3 = await this.getDragData();
        e3 && (1 === this.state.tabs?.length && this.state.tabs.find(((t4) => t4.id === e3.tabId)) ? (0, Nt.Q)().startWindowDrag(this.context.windowId, e3.tabId, t3) : (this.setState({ prevCursorPoint: t3 }), this.attachTab(t3.x, e3.tabId)));
      }
      async onDragLeave(t3) {
        if (console.log("drag leave"), !this.state.tabs || 1 === this.state.tabs.length) return;
        const e3 = await this.getDragData();
        if (!e3) return;
        const n3 = this.tabsMap.get(e3.tabId)?.current?.getBoundingClientRect(), r3 = this.getTabPanelRightBound();
        if (r3) {
          if (n3) {
            const e4 = Math.round(n3.width / 2);
            t3.x >= r3 - e4 ? t3.x = r3 - e4 : t3.x <= 0 && (t3.x = e4);
          }
          (0, Nt.Q)().dragTabOut(this.context.windowId, e3.tabId, t3, n3?.width, this.getControlsAreaWidth()), this.resetTabsOffset();
        }
      }
      async onDrop() {
        if (!this.state.tabs) return;
        const t3 = await this.getDragData();
        if (!t3) return;
        const e3 = this.tabsMap.get(t3.tabId)?.current?.getBoundingClientRect();
        if (!e3) return;
        const n3 = e3.left + e3.width / 2, r3 = this.state.tabs.findIndex(((e4) => e4.id === t3.tabId)), i3 = this.getTabIndexByCoordinate(n3);
        if ((0, g.yg)().debug(`<TabPanel>.onDrop(): "New tab index: ${i3}, oldTabIndex: ${r3}"`), setTimeout((() => {
          (0, z.CI)().resetTabs().catch(((t4) => {
            (0, g.yg)().error("<TabPanel>.onDrop(): getWindowControl().resetTabs() error", t4);
          })), this.resetTabsOffset();
        }), 100), !(r3 < 0 || i3 < 0) && r3 !== i3) {
          const { pinned: t4 } = this.state.tabs[r3];
          this.onDropControllerToMoveTab({ oldIndex: r3, newIndex: i3, tabs: this.state.tabs, isPinned: t4 }).catch(((t5) => {
            (0, g.yg)().error("<TabPanel>.onDrop(): this.onDropControllerToMoveTab()", t5);
          }));
        }
      }
      async onDropControllerToMoveTab({ oldIndex: t3, newIndex: e3, tabs: n3, isPinned: r3 }) {
        let i3 = e3;
        const o2 = n3.findIndex((({ pinned: t4 }) => !t4));
        r3 ? -1 !== o2 && e3 >= o2 ? i3 = o2 - 1 : e3 >= n3.length && (i3 = n3.length - 1) : e3 < o2 ? i3 = o2 : e3 >= n3.length && (i3 = n3.length - 1), this.mouseOverTab(i3), await (0, z.CI)().moveTab(t3, i3);
      }
      getTabIndexByCoordinate(t3, e3) {
        if (!this.state.tabs) return -1;
        const n3 = this.getRealTabsWidth();
        if (!n3) return -1;
        const r3 = n3 / (e3 ?? this.state.tabs.length), i3 = "darwin" === process.platform ? t3 - this.getDarwinControlWidth() : t3, o2 = Math.floor(i3 / r3);
        return Math.min(o2, e3 ?? this.state.tabs.length);
      }
      resetTabsOffset() {
        this.isTooltipVisibleGlobalChange(false), this.setState(((t3) => ({ ...t3, tabs: (0, zt.V)(t3.tabs) })));
      }
      onTabMove(t3, e3) {
        const n3 = this.state.tabs;
        if (!n3) return;
        const r3 = Math.min(this.getHoveredTab(e3), n3.length - 1), i3 = (0, zt.H)(t3, e3.width, r3, n3);
        i3 && this.setState({ tabs: i3.tabState });
      }
      attachTab(t3, e3) {
        const n3 = this.state.tabs;
        if (!n3) return;
        if (n3.find(((t4) => t4.id === e3))) return void (0, g.yg)().debug('TabPanel.attachTab(): "Skipping tab attach, tab already belongs to current window"');
        const r3 = this.getTabsWidth();
        if (!r3) return;
        const i3 = n3.length, o2 = this.getTabIndexByCoordinate(t3, i3 + 1);
        if (o2 < 0) return;
        (0, g.yg)().debug(`TabPanel.attachTab(): "Tabswidth: ${r3}, tabs count: ${i3}"`);
        let a2 = 0;
        console.log(`newtabindex: ${o2}, tabscount: ${i3}`), o2 === i3 + 1 && (a2 = t3 - r3 / (i3 + 1) / 2 - r3 - Ft.Js, a2 < 0 && (a2 = 0)), (0, Nt.Q)().dragTabIn(this.context.windowId, o2, a2);
      }
      getFittingOffset(t3, e3, n3, r3) {
        if ((0, lt.iT)() && this.context.windowStateSubject.value !== F.y7.Fullscreen && e3 + t3 <= this.getDarwinControlWidth()) return -e3 + this.getDarwinControlWidth();
        if (e3 + t3 <= 0) return -e3;
        if (e3 + n3 + t3 >= r3) {
          const t4 = r3 - e3 - n3;
          return t4 < 0 ? 0 : t4;
        }
        return t3;
      }
      normalizeOffset(t3, e3, n3) {
        (0, g.yg)().debug(`TabPanel.normalizeOffset(): "will normalize tab offset ${e3}"`);
        const r3 = this.tabsMap.get(t3)?.current, i3 = this.getTabsWidth();
        if (!i3) return e3;
        const o2 = this.getTabPanelRightBound();
        if (!o2) return (0, g.yg)().warn('TabPanel.normalizeOffset(): "No tab panel right bound"'), e3;
        const a2 = i3 / (r3 ? n3.length : n3.length - 1), s2 = r3 ? r3.getBoundingClientRect().left : i3;
        return (0, g.yg)().debug(`TabPanel.normalizeOffset(): "Tab width: ${a2}, tabs right bound: ${i3}, tab left: ${s2}, tabs count: ${n3.length}, panel right bound: ${o2}"`), this.getFittingOffset(e3, s2, a2, o2);
      }
      async getDragData() {
        return (0, Lt.gO)().getDragData();
      }
      getHoveredTab(t3) {
        return this.getTabIndexByCoordinate(t3.x + t3.width / 2);
      }
      getDarwinControlWidth() {
        return this.context.isRtlSystem ? 0 : Ft.mX;
      }
    };
    _t([p.F], Gt.prototype, "updateTabUrl", null), _t([p.F], Gt.prototype, "updateTabs", null), Gt = _t([(0, p.W)("TabPanel")], Gt);
    var Kt = n2(86692), Zt = n2(82007), Qt = n2(37552), qt = n2(97989);
    var Xt, Jt;
    !(function(t3) {
      t3.UpToDate = "up-to-date", t3.Checking = "checking", t3.Downloading = "downloading", t3.ReadyToInstall = "ready-to-install", t3.SystemRequirementsUnmet = "system-requirements-unmet", t3.Installing = "installing", t3.Error = "error";
    })(Xt || (Xt = {})), (function(t3) {
      t3[t3.NoAuthentication = 0] = "NoAuthentication", t3[t3.WaitingToken = 1] = "WaitingToken", t3[t3.TokenReady = 2] = "TokenReady", t3[t3.Waiting2FA = 3] = "Waiting2FA", t3[t3.Authenticated = 4] = "Authenticated", t3[t3.Error = 5] = "Error";
    })(Jt || (Jt = {})), n2(87016), n2(55936);
    const Yt = "user:id";
    function te(t3, e3) {
      return t3.find(((t4) => t4.type === e3));
    }
    class ee {
      claims;
      session;
      constructor(t3, e3) {
        this.claims = t3, this.session = e3;
      }
      get id() {
        return this.getClaim(Yt, "");
      }
      get username() {
        return this.getClaim("user:username", this.id);
      }
      get isAuthenticated() {
        return (function(t3, e3) {
          const n3 = te(t3, e3);
          return void 0 !== n3?.value;
        })(this.claims, Yt);
      }
      get isAnonymous() {
        return !this.isAuthenticated;
      }
      get userpic() {
        return this.getClaim("user:pic", "");
      }
      get isPro() {
        return !!this.getClaim("user:pro", "");
      }
      get plan() {
        return this.getClaim("user:plan", "");
      }
      get userPlanBadgeName() {
        return this.getClaim("user:pro_badge_name") ?? "free";
      }
      getClaim(t3, e3) {
        const n3 = te(this.claims, t3);
        return n3?.value ?? e3;
      }
      hasClaim(t3, e3) {
        return (function(t4, e4, n3) {
          const r3 = t4.find(((t5) => t5.type === e4));
          return void 0 !== r3 && (void 0 === n3 || r3.value === n3);
        })(this.claims, t3, e3);
      }
    }
    var ne, re = n2(4754);
    function ie() {
      return ie = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, ie.apply(null, arguments);
    }
    const oe = function(t3) {
      return r2.createElement("svg", ie({ width: 21, height: 16, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t3), ne || (ne = r2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 1h-4v7.6a5.507 5.507 0 0 0-1 .657V5h-4v10h2.207c.099.349.23.683.393 1H0v-5h5V7h5V4h5V0h6v8.6a5.465 5.465 0 0 0-1-.393V1ZM10 8H6v7h4V8Z", fill: "#787B86" })));
    };
    var ae;
    function se() {
      return se = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, se.apply(null, arguments);
    }
    const le = function(t3) {
      return r2.createElement("svg", se({ width: 7, height: 7, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t3), ae || (ae = r2.createElement("circle", { cx: 3.5, cy: 3.5, r: 3.5, fill: "#FB8C00" })));
    };
    var ce = n2(96297), de = {};
    de.styleTagTransform = et(), de.setAttributes = X(), de.insert = Q().bind(null, "head"), de.domAPI = K(), de.insertStyleElement = Y(), _()(ce.A, de), ce.A && ce.A.locals && ce.A.locals;
    const ue = () => {
      const { t: t3 } = (0, s.Bd)();
      return r2.createElement("div", { className: "bad-connection-icon-wrapper", title: t3("Poor signal means delays. Leave the woodland for flawless updates.") }, r2.createElement("div", { className: "bad-connection-icon" }, r2.createElement(oe, null)), r2.createElement("div", { className: "blinking-dot" }, r2.createElement(le, null)));
    };
    var he = n2(1566), ge = n2(32812), pe = n2(56297), be = {};
    be.styleTagTransform = et(), be.setAttributes = X(), be.insert = Q().bind(null, "head"), be.domAPI = K(), be.insertStyleElement = Y(), _()(pe.A, be), pe.A && pe.A.locals && pe.A.locals;
    const me = ({ icon: t3, isAppUpdateAvailable: e3 }) => {
      const { t: n3 } = (0, s.Bd)(), { windowId: i3 } = (0, r2.useContext)(B.h), [o2, a2] = (0, r2.useState)(false);
      ot((0, ge.O)().menuOpenedChange, a2);
      const l2 = () => {
        (0, ge.O)().showMenu(i3).catch(((t4) => {
          (0, g.yg)().error("<UserButton.showMainMenu()>: mainMenuServiceProxy().showMenu()", t4);
        }));
      };
      return e3 ? r2.createElement(he.SX, { onClick: l2, size: "xsmall", color: "green", variant: "primary", endSlot: t3, className: "main-menu-update-app-button " + (o2 ? "opened" : "") }, n3("Update the app")) : r2.createElement(ut, { onClick: l2, icon: t3, id: "main-menu-button", className: "main-menu-button " + (o2 ? "opened" : ""), title: n3("Main menu") });
    };
    var fe = n2(75654), we = n2(1832);
    const ve = ({ className: t3 = "", ...e3 }) => r2.createElement(we.I, { ...e3, className: `ui-lib-icon ${t3}` }), ye = () => {
      const { t: t3 } = (0, s.Bd)();
      return r2.createElement(ut, { onClick: () => {
        (0, g.yg)().info("App render(): on new window click"), j().openNewWindow().catch(((t4) => {
          (0, g.yg)().error("<NewWindowButton>.onNewWindowClick(): windowServiceProxy().openNewWindow() error", t4);
        }));
      }, icon: r2.createElement(ve, { icon: fe.j }), id: "new-window-button", title: t3("Open new window") });
    };
    var Te = n2(5068), Ce = {};
    function Se(t3, e3) {
      return "" !== t3.id ? Zt.I : e3 ? Qt.x : qt._;
    }
    Ce.styleTagTransform = et(), Ce.setAttributes = X(), Ce.insert = Q().bind(null, "head"), Ce.domAPI = K(), Ce.insertStyleElement = Y(), _()(Te.A, Ce), Te.A && Te.A.locals && Te.A.locals;
    const Re = () => {
      const [t3, e3] = (0, r2.useState)(null);
      ot(h.f.provideProxy("tvd:user-service").userChange, ((t4) => {
        e3(new ee(t4));
      }));
      const [n3, i3] = (0, r2.useState)(true);
      ot(h.f.provideProxy("tvd:network-service").networkStatusChange, i3);
      const [o2, a2] = (0, r2.useState)(false);
      return ot(h.f.provideProxy("tvd:auto-update-service").statusChange, ((t4) => {
        a2(t4 === Xt.ReadyToInstall);
      })), r2.createElement("div", { className: "tab-panel-actions" }, !n3 && r2.createElement(ue, null), !t3?.isAnonymous && r2.createElement(ye, null), !t3?.isAnonymous && false === o2 && r2.createElement(re.n, null), t3 && r2.createElement(me, { icon: r2.createElement(Kt.t, { icon: Se(t3, o2) }), isAppUpdateAvailable: o2 }));
    };
    var Pe = n2(68512), Ee = {};
    Ee.styleTagTransform = et(), Ee.setAttributes = X(), Ee.insert = Q().bind(null, "head"), Ee.domAPI = K(), Ee.insertStyleElement = Y(), _()(Pe.A, Ee), Pe.A && Pe.A.locals && Pe.A.locals;
    var xe = function(t3, e3, n3, r3) {
      var i3, o2 = arguments.length, a2 = o2 < 3 ? e3 : null === r3 ? r3 = Object.getOwnPropertyDescriptor(e3, n3) : r3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a2 = Reflect.decorate(t3, e3, n3, r3);
      else for (var s2 = t3.length - 1; s2 >= 0; s2--) (i3 = t3[s2]) && (a2 = (o2 < 3 ? i3(a2) : o2 > 3 ? i3(e3, n3, a2) : i3(e3, n3)) || a2);
      return o2 > 3 && a2 && Object.defineProperty(e3, n3, a2), a2;
    };
    h.f.initializeRpc();
    const Ae = ["keydown", "keyup", "keypress"];
    let ke = class extends r2.Component {
      state = { windowWidth: window.innerWidth, isAppWindowFocused: true, isLoading: true, windowState: F.y7.Normal, hoverCheckSubject: new c.Subject(), windowResizeSubject: new c.Subject(), tabHintPosition: -1, isConnectionGood: true, isRtlSystem: false, unload: false, hasTokyoNight: false, hideTabsFullscreenMacOS: false };
      windowId = "";
      windowStateSubject = new c.BehaviorSubject(F.y7.Normal);
      eventListeners = /* @__PURE__ */ new Map();
      macosHideTabsInFullscreenSubscription;
      initialize() {
        this.subscribeOnWindowEvents();
      }
      componentDidMount() {
        W(document.documentElement), M().isRtlSystem().then(((t3) => {
          this.setState({ isRtlSystem: t3 });
        })).catch(((t3) => {
          (0, g.yg)().error('<App>.componentDidMount(): "localeServiceProxy().isRtlSystem() error"', t3);
        })), this.tokyoNightInitialize(), this.setParentId().catch(((t3) => {
          (0, g.yg)().error("<App>.componentDidMount(): this.setParentId() error", t3);
        })), this.state.windowResizeSubject.pipe((0, d.BL)(100)).subscribe(((t3) => {
          this.setState({ windowWidth: t3 });
        })), this.windowStateSubject.subscribe(((t3) => {
          this.setState({ windowState: t3 });
        })), Promise.allSettled([(0, z.CI)().getWindowStateAsync(), (async () => {
          for (; !this.props.tReady; ) await (0, L.yy)(100);
        })()]).then((([t3, e3]) => {
          "fulfilled" === t3.status && ((0, g.yg)().debug(`<App>.componentDidMount(): "Will update window state: ${t3.value}"`), this.windowStateChanged(t3.value)), "fulfilled" === e3.status && (h.f.registerRemoteService(this, m.tJ), (0, z.yo)());
        })).catch(((t3) => {
          (0, g.yg)().error("<App>.componentDidMount(): Promise.allSettled() error", t3);
        }));
      }
      componentWillUnmount() {
        this.unsubscribeEvents();
      }
      render() {
        if (!this.props.tReady) return (0, g.yg)().warn(`[${(0, b.QD)(this.windowId)}] App.render(): "translations not ready, loading stub markdown"`), this.renderStub();
        if (this.state.unload) return r2.createElement(r2.Fragment, null);
        const { t: t3 } = this.props, { titleBarOptions: e3 } = (0, z.Mz)(), n3 = (0, l.$)({ app: true, hidden: this.state.windowState === F.y7.Fullscreen && this.state.hideTabsFullscreenMacOS, [this.state.isRtlSystem ? "rtl-system" : "ltr-system"]: true, active: this.state.isAppWindowFocused, [(0, N.iT)() ? "darwin" : "win"]: true, fullscreen: this.state.windowState === F.y7.Fullscreen }), i3 = { windowStateSubject: this.windowStateSubject, windowResizeSubject: this.state.windowResizeSubject, hoverCheckSubject: this.state.hoverCheckSubject, windowFocused: this.state.isAppWindowFocused, windowId: this.windowId, isRtlSystem: this.state.isRtlSystem };
        return r2.createElement("div", { className: n3, onClick: () => {
          (0, z.CI)().triggerMenuCloseEvent("tab-panel-click").catch(((t4) => {
            (0, g.yg)().error("<App>.onClick(): getWindowControl().triggerMenuCloseEvent() error", t4);
          }));
        } }, r2.createElement("header", { className: "header " + (this.state.hasTokyoNight ? "tokyo-night" : "") }, r2.createElement(Vt, { windowStateSubject: this.windowStateSubject }), e3.showTabs && r2.createElement(B.h.Provider, { value: i3 }, r2.createElement(Gt, { t: t3 }), r2.createElement(Re, null)), !e3.showTabs && e3.title && r2.createElement(u.o, { tag: "span", name: "typography-regular-12px", className: "window-title" }, e3.title)), this.state.isLoading && r2.createElement(it, null));
      }
      tokyoNightInitialize() {
        const t3 = j().tokyoNightSubject.subscribe(((t4) => this.setState({ hasTokyoNight: t4 }))), e3 = () => {
          t3?.unsubscribe(), removeEventListener("beforeunload", e3);
        };
        addEventListener("beforeunload", e3);
      }
      renderStub() {
        return r2.createElement(r2.Fragment, null, r2.createElement("div", { className: "header" }));
      }
      async setParentId() {
        this.windowId = await (0, z.CI)().getWindowId(), (0, g.yg)().debug(`App.setParentId(): "Registered window id: ${(0, b.un)(this.windowId)}"`);
      }
      subscribeOnWindowEvents() {
        (0, z.CI)().on(V.Dispose, function() {
          this.setState({ unload: true }), this.unsubscribeEvents();
        }.bind(this)).catch(((t4) => {
          (0, g.yg)().error(`<App>.subscribeOnWindowEvents(): getWindowControl().on(WindowServiceEvent: ${V.Dispose}) error`, t4);
        })), (0, z.CI)().isWindowFocusedChange.subscribe(((t4) => {
          this.setState({ isAppWindowFocused: t4 });
        })), (0, z.CI)().windowLoadingChange.subscribe(((t4) => {
          this.setState({ isLoading: t4 });
        })), (0, N.iT)() && (this.macosHideTabsInFullscreenSubscription = (0, D.Z)().macosHideTabsInFullscreenChange.subscribe(((t4) => {
          this.setState({ hideTabsFullscreenMacOS: t4 });
        })));
        const t3 = (t4) => ({ key: t4.key, code: t4.code, which: t4.which, altKey: t4.altKey, shiftKey: t4.shiftKey, metaKey: t4.metaKey, ctrlKey: t4.ctrlKey, charCode: t4.charCode, keyCode: t4.keyCode, location: t4.location, composed: t4.composed, isComposing: t4.isComposing });
        for (const e4 of Ae) {
          const n3 = (n4) => {
            const r3 = [];
            if (window && window.navigator && r3.push(...window.navigator.languages), n4 instanceof KeyboardEvent) {
              if ("F1" === n4.key) return;
              (0, z.CI)().notifyInputEvent(e4, t3(n4), r3).catch(((t4) => {
                (0, g.yg)().error("<App>.subscribeOnWindowEvents(): getWindowControl().notifyInputEvent() error", t4);
              }));
            }
          };
          window.addEventListener(e4, n3), this.eventListeners.set(e4, n3);
        }
        const e3 = () => this.state.windowResizeSubject.next(window.innerWidth);
        window.addEventListener("resize", e3), this.eventListeners.set("resize", e3);
      }
      unsubscribeEvents() {
        this.macosHideTabsInFullscreenSubscription?.unsubscribe();
        for (const t3 of this.eventListeners.keys()) {
          const e3 = this.eventListeners.get(t3);
          e3 && (console.log(`Will remove listener for event ${t3}`), window.removeEventListener(t3, e3));
        }
      }
      windowStateChanged(t3) {
        this.windowStateSubject.next(t3);
      }
      async getReport() {
        let t3 = process.getCPUUsage();
        return await (0, L.yy)(1e3), t3 = process.getCPUUsage(), { memReport: process.getBlinkMemoryInfo(), procMemReport: await process.getProcessMemoryInfo(), cpuReport: t3 };
      }
    };
    xe([p.F], ke.prototype, "initialize", null), xe([p.F], ke.prototype, "componentDidMount", null), xe([p.F], ke.prototype, "componentWillUnmount", null), xe([p.F], ke.prototype, "tokyoNightInitialize", null), xe([p.F], ke.prototype, "setParentId", null), xe([p.F], ke.prototype, "subscribeOnWindowEvents", null), xe([p.F], ke.prototype, "getReport", null), ke = xe([(0, p.W)("App")], ke);
    const Ie = (0, s.CI)()(ke);
    n2(14448), (0, o.F$)(), (0, a.z)(), (function() {
      const t3 = /* @__PURE__ */ new Map([["--window-header-height", F.tj], ["--darwin-controls-width", Ft.mX], ["--create-new-tab-button-width", F.Oj]]);
      for (const [e3, n3] of t3) document.documentElement.style.setProperty(e3, `${n3}px`);
    })();
    const Me = document.getElementById("root");
    Me && (0, i2.H)(Me).render(r2.createElement((function() {
      return r2.createElement(Ie, { useSuspense: false });
    }), null));
  }, 22259(t2, e2, n2) {
    n2.d(e2, { f: () => r2 }), n2(34957);
    var r2 = n2(56039);
  }, 21383(t2, e2, n2) {
    n2.d(e2, { k: () => r2 });
    const r2 = "tvd:logger-service";
    var i2;
    !(function(t3) {
      t3[t3.Debug = 0] = "Debug", t3[t3.Info = 1] = "Info", t3[t3.Warn = 2] = "Warn", t3[t3.Error = 3] = "Error";
    })(i2 || (i2 = {}));
  }, 7750(t2, e2, n2) {
    n2.d(e2, { Ow: () => l, di: () => s, ld: () => a, yg: () => c });
    var r2 = n2(84157), i2 = n2(22259), o = n2(21383);
    function a() {
      return i2.f.getProvider().provide(o.k);
    }
    function s() {
      return r2.ipcMain ? i2.f.getProvider().provide(o.k) : i2.f.provideProxy(o.k);
    }
    function l() {
      return i2.f.provide(o.k);
    }
    function c() {
      return i2.f.provideProxy(o.k);
    }
  }, 9639(t2, e2, n2) {
    n2.d(e2, { QD: () => i2, un: () => o });
    var r2 = n2(51022);
    function i2(t3) {
      return t3 ? t3.length ? t3.split("-")[0] : t3 : "";
    }
    function o(t3) {
      if (!t3) return "";
      if ((0, r2.Pp)(t3)) return t3;
      const e3 = t3.split("?")[0].replace(/^(?:file\:\/\/)/, "");
      let n3 = __dirname;
      if (n3 += "/", e3.includes(__dirname)) return e3.replace(__dirname, "");
      n3.includes("\\") && (n3 = n3.replace(/\\/gm, "/"));
      const i3 = encodeURIComponent(n3);
      if (e3.includes(i3)) return e3.replace(i3, "");
      const o2 = n3.split("/")?.filter(((t4) => !!t4));
      return n3 = o2[o2.length - 1] ?? "", e3.includes(n3) ? e3.split(n3)?.at(-1) ?? e3 : e3;
    }
    n2(21383);
  }, 10284(t2, e2, n2) {
    n2.d(e2, { l: () => l });
    var r2 = n2(84157), i2 = n2(79896), o = n2(16928), a = n2(7750), s = n2(33077);
    class l {
      static appStorageFolderName = "TVAppStorage";
      static appUserStorageFolderName = "TVUserStorage";
      static appStateFileName = "appState.json";
      static encoding = "utf8";
      static exists(t3) {
        return i2.existsSync(t3);
      }
      static createDir(t3, e3) {
        i2.mkdirSync(t3, e3);
      }
      static deleteDir(t3, e3) {
        return i2.rmdirSync(t3, e3);
      }
      static delete(t3) {
        i2.unlinkSync(t3);
      }
      static deleteAsync(t3) {
        return new Promise(((e3, n3) => {
          i2.unlink(t3, ((t4) => {
            t4 ? n3(t4) : e3();
          }));
        }));
      }
      static writeFileAsync(t3, e3, n3) {
        return i2.promises.writeFile(t3, e3, { encoding: this.encoding, flag: n3 }).catch(((t4) => (0, a.ld)().error("Error while write file: ", t4)));
      }
      static readFileAsync(t3, e3) {
        return new Promise(((n3, r3) => {
          i2.readFile(t3, { encoding: this.encoding, flag: e3 }, ((t4, e4) => {
            null !== t4 ? r3(t4) : n3(e4);
          }));
        }));
      }
      static readFileSync(t3) {
        return i2.readFileSync(t3, { encoding: "utf8" });
      }
      static readDirAsync(t3) {
        return new Promise(((e3, n3) => {
          i2.readdir(t3, { encoding: this.encoding }, ((t4, r3) => {
            null !== t4 ? n3(t4) : e3(r3);
          }));
        }));
      }
      static readDirSync(t3) {
        return i2.readdirSync(t3);
      }
      static fileStats(t3, e3) {
        return new Promise(((n3, r3) => {
          i2.stat(t3, e3 ?? { bigint: false }, ((t4, e4) => {
            null !== t4 ? r3(t4) : n3(e4);
          }));
        }));
      }
      static async dirContentStats(t3) {
        const e3 = await this.readDirAsync(t3);
        return Promise.all(e3.map((async (e4) => {
          const n3 = (0, o.join)(t3, e4);
          return { fullPath: n3, stats: await this.fileStats(n3) };
        })));
      }
      static makeAppDataPath(t3) {
        return (0, o.join)(l.getDefaultCriticalAppPathOrThrow("appData"), r2.app.getName(), t3);
      }
      static makeAppRootPath(t3) {
        const e3 = r2.app.getAppPath();
        return (0, o.join)(e3, t3);
      }
      static createWriteStream(t3, e3) {
        return i2.createWriteStream(t3, e3);
      }
      static getDefaultAppPath(t3) {
        try {
          return r2.app.getPath(t3);
        } catch (e3) {
          (0, a.ld)().error(`[FileSystemProvider.getDefaultAppPath()] Exception on getPath(${t3}): ${(0, s.bw)(e3)}`);
        }
        return null;
      }
      static getDefaultCriticalAppPathOrThrow(t3) {
        return r2.app.getPath(t3);
      }
      static getAppDocumentsPath() {
        const t3 = l.getDefaultAppPath("documents");
        return t3 ? (0, o.join)(t3, r2.app.getName()) : null;
      }
      static getAppUserStorageFolderPath() {
        return (0, o.join)(l.getDefaultCriticalAppPathOrThrow("userData"), l.appUserStorageFolderName);
      }
      static getAppStateFilePath() {
        const t3 = l.getDefaultCriticalAppPathOrThrow("userData"), e3 = (0, o.join)(t3, l.appStorageFolderName);
        return l.exists(e3) || l.createDir(e3, { recursive: true }), (0, o.join)(e3, l.appStateFileName);
      }
    }
  }, 41493(t2, e2, n2) {
    n2.d(e2, { F$: () => r2.F, NA: () => i2.NA, ZQ: () => i2.ZQ });
    var r2 = n2(30190), i2 = (n2(94231), n2(86434));
  }, 94231(t2, e2, n2) {
    n2(48927);
  }, 71457(t2, e2, n2) {
    n2.d(e2, { N1: () => o, ct: () => i2, tJ: () => r2 });
    const r2 = "tvd:tabbed-window-events", i2 = "tvd:tabs-container", o = "tvd:tab";
  }, 27298(t2, e2, n2) {
    n2.d(e2, { $: () => r2 });
    const r2 = "tvd:main-menu-service";
  }, 32812(t2, e2, n2) {
    n2.d(e2, { O: () => o });
    var r2 = n2(22259), i2 = n2(27298);
    function o() {
      return r2.f.provideProxy(i2.$);
    }
  }, 8620(t2, e2, n2) {
    n2.d(e2, { Bd: () => o, gO: () => i2 });
    var r2 = n2(22259);
    function i2() {
      return r2.f.provideProxy("tvd:drag-service");
    }
    const o = { x: 0, y: 0, width: 0, height: 0 };
  }, 8750(t2, e2, n2) {
    n2.d(e2, { Lz: () => s, Oj: () => i2, jm: () => l, tj: () => r2, y7: () => o });
    const r2 = 34, i2 = 34;
    var o, a, s, l;
    !(function(t3) {
      t3[t3.Normal = 0] = "Normal", t3[t3.Maximized = 1] = "Maximized", t3[t3.Minimized = 2] = "Minimized", t3[t3.Hidden = 3] = "Hidden", t3[t3.Fullscreen = 4] = "Fullscreen", t3[t3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(o || (o = {})), (function(t3) {
      t3.Basic = "basic", t3.Options = "options", t3.Credentials = "credentials", t3.SignIn = "sign-in", t3.Settings = "settings", t3.SaveChanges = "save-changes", t3.Welcome = "welcome";
    })(a || (a = {})), (function(t3) {
      t3.Show = "show", t3.Move = "move";
    })(s || (s = {})), (function(t3) {
      t3[t3.Basic = 0] = "Basic", t3[t3.ChartData = 1] = "ChartData";
    })(l || (l = {}));
  }, 1820(t2, e2, n2) {
    n2.d(e2, { oh: () => i2, ox: () => r2 });
    const r2 = "tvd:locale-get-translations", i2 = "tvd:common-view-ready";
  }, 51022(t2, e2, n2) {
    n2.d(e2, { Pp: () => h }), n2(87016);
    var r2 = n2(19405);
    const i2 = "TARGET_TVD_HOST", o = "https://www.tradingview.com/", a = (0, r2.R)((() => {
      const t3 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
      let e3 = o;
      return i2 in process.env && (e3 = process.env[i2] ?? o), null !== new RegExp(t3, "i").exec(e3) ? t3 : (e3.endsWith("/") && (e3 = e3?.substring(0, e3.length - 1)), e3.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
    }));
    function s(t3, e3 = true) {
      const n3 = (t4) => {
        let n4 = t4.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
        return n4.match(/\w+(\/\((\.\*\)))/gi) && (n4 = n4.replace(/\/\((\.\*\))/gi, "(/(.*))?")), n4 = n4.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, a()), n4 = `^${n4}${e3 ? "$" : ""}`, new RegExp(n4, "i");
      };
      return "string" == typeof t3 ? n3(t3) : t3.map(n3);
    }
    const l = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", c = "${TV}/(\\w|-)*screener/*", d = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/", u = ((0, r2.R)((() => s(c))), (0, r2.R)((() => s("${TV}/", true))), (0, r2.R)((() => s("${TV}/chart/", true))), (0, r2.R)((() => s(l))), (0, r2.R)((() => s("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), (0, r2.R)((() => s(d, true))), (0, r2.R)((() => s("${TV}/screener/*"))), (0, r2.R)((() => s("${TV}/heatmap/*"))), (0, r2.R)((() => s("${TV}/community/*"))), (0, r2.R)((() => s("${TV}/pine-script-docs/en/v5/Introduction.html"))), (0, r2.R)((() => s("${TV}/pine-script-reference/v5/"))), (0, r2.R)((() => s("${TV}/x/*"))), (0, r2.R)((() => s("${TV}/*"))));
    function h(t3) {
      return (function(t4, e3) {
        const n3 = t4.split("\n").join("");
        return e3 instanceof RegExp ? e3.test(n3) : e3.some(((t5) => t5.test(n3)));
      })(t3, u());
    }
    (0, r2.R)((() => s("${TV}/account-recovery/*"))), (0, r2.R)((() => s("${TV}/chat/*"))), (0, r2.R)((() => /:\/\/s3\..+\/snapshots\//i)), (0, r2.R)((() => s("${TV}/pine/*"))), (0, r2.R)((() => s("${TV}/markets/*"))), (0, r2.R)((() => s("${TV}/markets/*/news/"))), (0, r2.R)((() => s("${TV}/markets/stocks-*/*"))), (0, r2.R)((() => s("${TV}/markets/world-economy/*"))), (0, r2.R)((() => s("${TV}/u/TradingView/"))), (0, r2.R)((() => s("${TV}/news/*"))), (0, r2.R)((() => s("${TV}/news/"))), (0, r2.R)((() => s("${TV}/news/\\?market=*"))), (0, r2.R)((() => s("${TV}/news/\\?market=topstories"))), (0, r2.R)((() => s("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), (0, r2.R)((() => s("${TV}/support/*"))), (0, r2.R)((() => s("https://status.tradingview.com/", true))), (0, r2.R)((() => s("${TV}/ideas/*"))), (0, r2.R)((() => s("${TV}/scripts/*"))), (0, r2.R)((() => s(["${TV}/", "${TV}/ideas/*", d, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), (0, r2.R)((() => s("${TV}/markets/bonds/*"))), (0, r2.R)((() => s([l, c, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"])));
  }, 84157(t2) {
    t2.exports = require("electron");
  }, 79896(t2) {
    t2.exports = require("fs");
  }, 16928(t2) {
    t2.exports = require("path");
  }, 87016(t2) {
    t2.exports = require("url");
  } }, n = {};
  function r(t2) {
    var i2 = n[t2];
    if (void 0 !== i2) return i2.exports;
    var o = n[t2] = { id: t2, exports: {} };
    return e[t2].call(o.exports, o, o.exports, r), o.exports;
  }
  r.m = e, t = [], r.O = (e2, n2, i2, o) => {
    if (!n2) {
      var a = 1 / 0;
      for (d = 0; d < t.length; d++) {
        for (var [n2, i2, o] = t[d], s = true, l = 0; l < n2.length; l++) (false & o || a >= o) && Object.keys(r.O).every(((t2) => r.O[t2](n2[l]))) ? n2.splice(l--, 1) : (s = false, o < a && (a = o));
        if (s) {
          t.splice(d--, 1);
          var c = i2();
          void 0 !== c && (e2 = c);
        }
      }
      return e2;
    }
    o = o || 0;
    for (var d = t.length; d > 0 && t[d - 1][2] > o; d--) t[d] = t[d - 1];
    t[d] = [n2, i2, o];
  }, r.n = (t2) => {
    var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
    return r.d(e2, { a: e2 }), e2;
  }, r.d = (t2, e2) => {
    for (var n2 in e2) r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, r.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window) return window;
    }
  })(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, (() => {
    var t2;
    r.g.importScripts && (t2 = r.g.location + "");
    var e2 = r.g.document;
    if (!t2 && e2 && (e2.currentScript && "SCRIPT" === e2.currentScript.tagName.toUpperCase() && (t2 = e2.currentScript.src), !t2)) {
      var n2 = e2.getElementsByTagName("script");
      if (n2.length) for (var i2 = n2.length - 1; i2 > -1 && (!t2 || !/^http(s?):/.test(t2)); ) t2 = n2[i2--].src;
    }
    if (!t2) throw new Error("Automatic publicPath is not supported in this browser");
    t2 = t2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = t2 + "../";
  })(), (() => {
    r.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var t2 = { 7988: 0 };
    r.O.j = (e3) => 0 === t2[e3];
    var e2 = (e3, n3) => {
      var i2, o, [a, s, l] = n3, c = 0;
      if (a.some(((e4) => 0 !== t2[e4]))) {
        for (i2 in s) r.o(s, i2) && (r.m[i2] = s[i2]);
        if (l) var d = l(r);
      }
      for (e3 && e3(n3); c < a.length; c++) o = a[c], r.o(t2, o) && t2[o] && t2[o][0](), t2[o] = 0;
      return r.O(d);
    }, n2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    n2.forEach(e2.bind(null, 0)), n2.push = e2.bind(null, n2.push.bind(n2));
  })(), r.nc = void 0;
  var i = r.O(void 0, [3703, 2252, 369, 4870, 1566, 156, 7627, 1208, 3348, 3409, 1892, 3173], (() => r(65910)));
  i = r.O(i);
})();
