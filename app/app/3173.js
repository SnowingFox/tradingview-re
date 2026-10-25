"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[3173], { 14768(t, e, n) {
  n.d(e, { A: () => s });
  var a = n(30050), o = n.n(a), r = n(77259), i = n.n(r)()(o());
  i.push([t.id, ".create-new-tab-button-container {\n	width: var(--create-new-tab-button-width);\n	height: var(--window-header-height);\n	position: absolute;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n}\n\n.create-new-tab-button {\n	.app:not(.active) & {\n		--ui-lib-iconButton-background-color-hover: var(--color-container-fill-primary-neutral-normal);\n	}\n\n	.app.active & {\n		--ui-lib-iconButton-background-color-hover: var(--color-container-fill-primary-neutral-normal);\n	}\n}\n", ""]);
  const s = i;
}, 11832(t, e, n) {
  n.d(e, { A: () => s });
  var a = n(30050), o = n.n(a), r = n(77259), i = n.n(r)()(o());
  i.push([t.id, ".tab-panel-divider {\n	width: 1px;\n	height: 16px;\n	background-color: var(--color-border-primary-neutral-normal);\n}\n", ""]);
  const s = i;
}, 44456(t, e, n) {
  n.d(e, { A: () => s });
  var a = n(30050), o = n.n(a), r = n(77259), i = n.n(r)()(o());
  i.push([t.id, ".tabs {\n	-webkit-app-region: none;\n	grid-area: tabs;\n	max-width: 100%;\n	display: flex;\n	flex-flow: row nowrap;\n	overflow-x: scroll;\n\n	&::-webkit-scrollbar {\n		display: none;\n	}\n}\n\n.tabs-container {\n	display: inherit;\n	align-items: center;\n	margin-right: var(--create-new-tab-button-width); /* required to move draggable-area so the CreateNewTabButton would work */\n}\n\n.draggable-area {\n	-webkit-app-region: drag;\n	width: 100%;\n	min-width: 50px;\n	flex-shrink: 10;\n}\n\n@media screen and (max-width: 599px) {\n	.draggable-area {\n		min-width: 20px;\n	}\n}\n", ""]);
  const s = i;
}, 27685(t, e, n) {
  n.d(e, { A: () => s });
  var a = n(30050), o = n.n(a), r = n(77259), i = n.n(r)()(o());
  i.push([t.id, ".extender {\n	position: absolute;\n	display: none;\n	bottom: 0;\n	width: 6px;\n	height: 6px;\n	overflow: hidden;\n\n	/* app NOT active, tab hovered, tab NOT active */\n	.app:not(.active) .tab:not(.active):hover & {\n		display: flex;\n		color: var(--color-container-fill-primary-neutral-light);\n	}\n\n	/* app active, tab hovered, tab NOT active */\n	.app.active .tab:not(.active):hover & {\n		display: flex;\n		color: var(--color-container-fill-primary-neutral-normal);\n	}\n\n	/* tab active */\n	.app:not(.active) .tab.active &,\n	.app.active .tab.active & {\n		display: flex;\n		color: var(--color-background-secondary-inverse);\n	}\n\n	&.left {\n		left: -6px;\n	}\n\n	&.right {\n		right: -6px;\n\n		& > svg {\n			transform: scale(-1, 1);\n		}\n	}\n}\n", ""]);
  const s = i;
}, 45977(t, e, n) {
  n.d(e, { A: () => s });
  var a = n(30050), o = n.n(a), r = n(77259), i = n.n(r)()(o());
  i.push([t.id, `[dir='ltr'] {
	--fadeout-gradient-direction: 90deg;
}

[dir='rtl'] {
	--fadeout-gradient-direction: 270deg;
}

.tab {
	-webkit-app-region: none;
	position: relative;
	min-width: 25px;
	height: 100%;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: minmax(0, auto) 1fr auto;
	grid-template-rows: 1fr 3px;
	align-items: center;
	flex-basis: 250px;
	flex-shrink: 1;
	border-radius: 4px 4px 0 0;
	cursor: default !important;

	[dir='ltr'] & {
		grid-template-areas: "layout-icon title close";
		padding: 0 8px 0 12px;
	}

	[dir='rtl'] & {
		grid-template-areas: "close title layout-icon";
		padding: 0 12px 0 8px;
	}

	&:first-of-type {
		.app.win,
		.app.darwin.fullscreen & {
			border-top-left-radius: 0;
		}
	}

	/* app NOT active, tab NOT hovered, tab NOT active */
	.app:not(.active) &:not(.active) {
		background-color: transparent;
	}

	/* app NOT active, tab hovered, tab NOT active */
	.app:not(.active) &:not(.active):hover {
		background-color: var(--color-container-fill-primary-neutral-light);
		z-index: 1;
	}

	/* app active, tab NOT hovered, tab NOT active */
	.app.active &:not(.active) {
		background-color: transparent;
	}

	/* app active, tab hovered, tab NOT active */
	.app.active &:not(.active):hover {
		background-color: var(--color-container-fill-primary-neutral-normal);
		z-index: 1;
	}

	/* tab active */
	.app:not(.active) &.active,
	.app.active &.active {
		background-color: var(--color-background-secondary-inverse);
		z-index: 2;
		box-shadow: 0 4px 12px 0 var(--color-background-primary-neutral-normal), 
					0 0 2px 0 var(--color-other-shadow-primary-neutral-light);

		&.xxsmall {
			grid-template-columns: 1fr;
			grid-template-areas: "close";
			align-items: center;
			justify-content: center;
			padding: 0 10px;

			& > .tab-link-indicator {
				margin: 0;
			}
		}
	}

	& > .tab-panel-divider {
		position: absolute;
		right: 0;
	}

	/* do not show divider for: */
	/* tab preceding hovered inactive tab */
	&:has(+ &:not(.active):hover) > .tab-panel-divider,
	/* hovered inactive tab */
	&:not(.active):hover > .tab-panel-divider,
	/* tab preceding active */
	&:has(+ &.active) > .tab-panel-divider,
	/* active tab */
	&.active > .tab-panel-divider {
		display: none;
	}
}

.tab-link-indicator {
	height: 3px;
	box-sizing: border-box;
	background-color: transparent;
	grid-row: 2;
	grid-column: 1/span2;
	align-self: center;
	margin: 0 4px 0 0;
	border-radius: 3px;
}

.tab-title {
	display: flex;
	align-items: center;
	grid-area: title;
	grid-row: 1/span2;
	overflow: hidden;
	white-space: nowrap;

	.tab.active > &.xxsmall {
		display: none;
	}

	[dir='ltr'] & {
		justify-content: flex-start;
	}

	[dir='rtl'] & {
		justify-content: flex-end;
	}
}

.tab-close-button-container {
	grid-area: close;
	grid-row: 1/span2;
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.fadeout {
	position: absolute;
	width: 36px;
	height: 18px;

	/* normal tab size */
	[dir='ltr'] & {
		left: -36px;
	}

	[dir='rtl'] & {
		right: -36px;
	}

	/* small tab size */
	.tab.small > .tab-close-button-container > & {
		width: 24px;
	}

	[dir='ltr'] .tab.small > .tab-close-button-container > & {
		left: -24px;
	}

	[dir='rtl'] .tab.small > .tab-close-button-container > & {
		right: -24px;
	}

	/* xsmall and xxsmall tab sizes */
	.tab.xsmall > .tab-close-button-container > &,
	.tab.xxsmall > .tab-close-button-container > & {
		width: 16px;
	}

	[dir='ltr'] .tab.xsmall > .tab-close-button-container > &,
	[dir='ltr'] .tab.xxsmall > .tab-close-button-container > & {
		left: -16px;
	}

	[dir='rtl'] .tab.xsmall > .tab-close-button-container > &,
	[dir='rtl'] .tab.xxsmall > .tab-close-button-container > & {
		right: -16px;
	}

	.tab.active.xxsmall > .tab-close-button-container > & {
		display: none;
	}

	/* app NOT active, tab NOT hovered, tab NOT active */
	.app:not(.active) .tab:not(.active) > .tab-close-button-container > & {
		background: linear-gradient(
			var(--fadeout-gradient-direction),
			transparent,
			var(--color-background-primary-neutral-extra-light)
		);
	}

	/* app active, tab NOT hovered, tab NOT active */
	.app.active .tab:not(.active) > .tab-close-button-container > & {
		background: linear-gradient(
			var(--fadeout-gradient-direction),
			transparent,
			var(--color-background-secondary-neutral-normal)
		);
	}

	/* app NOT active, tab hovered, tab NOT active */
	.app:not(.active) .tab:not(.active):hover > .tab-close-button-container > & {
		background: linear-gradient(
			var(--fadeout-gradient-direction),
			transparent,
			var(--color-container-fill-primary-neutral-light)
		);
	}

	/* app active, tab hovered, tab NOT active */
	.app.active .tab:not(.active):hover > .tab-close-button-container > & {
		background: linear-gradient(
			var(--fadeout-gradient-direction),
			transparent,
			var(--color-container-fill-primary-neutral-normal)
		);
	}

	/* tab active */
	.app:not(.active) .tab.active > .tab-close-button-container > &,
	.app.active .tab.active > .tab-close-button-container > & {
		background: linear-gradient(
			var(--fadeout-gradient-direction),
			transparent,
			var(--color-background-secondary-inverse)
		);
	}
}

.tab-close-button {
	/* app NOT active, tab NOT active */
	.app:not(.active) .tab:not(.active) > .tab-close-button-container > & {
		--ui-lib-iconButton-background-color-hover: var(--color-container-fill-secondary-neutral-normal);
	}

	/* app active, tab NOT active */
	.app.active .tab:not(.active) > .tab-close-button-container > & {
		--ui-lib-iconButton-background-color-hover: var(--color-container-fill-secondary-neutral-normal);
	}

	/* tab active */
	.app:not(.active) .tab.active > .tab-close-button-container > &,
	.app.active .tab.active > .tab-close-button-container > & {
		--ui-lib-iconButton-background-color-hover: var(--color-container-fill-primary-neutral-extra-light);
	}
}
`, ""]);
  const s = i;
}, 62806(t, e, n) {
  var a = n(72539), o = n.n(a), r = n(48560), i = n.n(r), s = n(57148), l = n.n(s), c = n(60251), d = n.n(c), p = n(81263), u = n.n(p), b = n(50892), h = n.n(b), v = n(44456), g = {};
  g.styleTagTransform = h(), g.setAttributes = d(), g.insert = l().bind(null, "head"), g.domAPI = i(), g.insertStyleElement = u(), o()(v.A, g), v.A && v.A.locals && v.A.locals;
}, 42952(t, e, n) {
  n.d(e, { CI: () => d, Mz: () => c, yo: () => p });
  var a = n(84157), o = n(22259), r = n(7750), i = n(1820), s = n(9691);
  const l = { windowControl: null, dialogControl: null, toastWindowHandler: null };
  function c() {
    const t2 = (0, s.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
    if (!t2) throw new Error("getRendererInitialData() jsonParse error");
    return t2;
  }
  function d(t2) {
    return l.windowControl = (function(t3, e2, n2) {
      let a2 = window?.remoteServiceInstanceId ?? c().remoteServiceInstanceId;
      if (n2 && (a2 = n2), !e2 || a2 !== window?.initialRemoteServiceInstanceId) {
        (0, r.yg)().debug(`[Renderer] initializeIpcProxyForInstance ${t3} id: ${a2}; Old id ${window?.initialRemoteServiceInstanceId}`);
        const e3 = o.f.provideProxy(a2);
        return window.initialRemoteServiceInstanceId = a2, e3;
      }
      return e2;
    })("windowControl", l.windowControl, t2), l.windowControl;
  }
  function p() {
    a.ipcRenderer.send(i.oh);
  }
}, 51144(t, e, n) {
  function a(t2, e2, n2, a2) {
    if (n2 < 0) return;
    const o2 = (function(t3, e3) {
      if (!t3) return [];
      const n3 = [];
      return t3.forEach(((t4, a3) => {
        let o3 = a3;
        if (t4.offset && 0 !== t4.offset && t4.id !== e3) o3 = t4.offset > 0 ? o3 + 1 : o3 - 1;
        else if (n3[o3]) return;
        n3[o3] = t4;
      })), n3;
    })(a2, t2);
    let r, i, s, l = o2.findIndex(((t3) => !t3));
    if (l < 0 && (l = o2.length < a2.length ? a2.length - 1 : o2.findIndex(((e3) => e3.id === t2))), n2 < l) r = n2, i = l, s = e2;
    else {
      if (!(n2 > l)) return { tabState: a2, holeIndex: l };
      r = l + 1, i = n2 + 1, s = -e2;
    }
    for (let t3 = r; t3 < i; t3++) {
      const e3 = a2.find(((e4) => e4 === o2[t3]));
      e3 && (e3.offset || (e3.offset = 0), e3.offset += s);
    }
    return { tabState: a2, holeIndex: l };
  }
  function o(t2) {
    if (t2) {
      for (const e2 of t2) e2.offset = void 0;
      return t2;
    }
  }
  n.d(e, { H: () => a, V: () => o });
}, 30828(t, e, n) {
  n.d(e, { h: () => s });
  var a = n(87574), o = n(79474), r = n(12069), i = n(8750);
  const s = o.createContext({ windowStateSubject: new r.BehaviorSubject(i.y7.Normal), windowResizeSubject: new r.Subject(), hoverCheckSubject: new r.Subject(), windowFocused: false, windowId: "", isRtlSystem: false });
  o.createContext({ t: a.Ay.t });
}, 24388(t, e, n) {
  n.d(e, { O: () => C });
  var a = n(79474), o = n(62020), r = n(99933), i = n(762), s = n(7750), l = n(42952), c = n(72539), d = n.n(c), p = n(48560), u = n.n(p), b = n(57148), h = n.n(b), v = n(60251), g = n.n(v), m = n(81263), f = n.n(m), w = n(50892), T = n.n(w), y = n(14768), x = {};
  function A() {
    (0, l.CI)().createAndAddTab({}).catch(((t2) => {
      (0, s.yg)().error("<CreateNewTabButton>.createNewTab(): getWindowControl().createAndAddTab() error", t2);
    }));
  }
  x.styleTagTransform = T(), x.setAttributes = g(), x.insert = h().bind(null, "head"), x.domAPI = u(), x.insertStyleElement = f(), d()(y.A, x), y.A && y.A.locals && y.A.locals;
  const C = ({ offset: t2 }) => {
    const { t: e2 } = (0, o.Bd)();
    return a.createElement("div", { className: "create-new-tab-button-container", style: { left: `${t2}px` } }, a.createElement(r.s_, { title: e2("New tab"), icon: i.z, onClick: A, colorClassName: "create-new-tab-button", tabIndex: -1 }));
  };
}, 4754(t, e, n) {
  n.d(e, { n: () => f });
  var a = n(79474), o = n(72539), r = n.n(o), i = n(48560), s = n.n(i), l = n(57148), c = n.n(l), d = n(60251), p = n.n(d), u = n(81263), b = n.n(u), h = n(50892), v = n.n(h), g = n(11832), m = {};
  m.styleTagTransform = v(), m.setAttributes = p(), m.insert = c().bind(null, "head"), m.domAPI = s(), m.insertStyleElement = b(), r()(g.A, m), g.A && g.A.locals && g.A.locals;
  const f = () => a.createElement("div", { className: "tab-panel-divider" });
}, 25510(t, e, n) {
  n.d(e, { $: () => R, v: () => a });
  var a, o = n(26162), r = n(89968), i = n(33873), s = n(69560), l = n(19037), c = n(17092), d = n(45272), p = n(4228), u = n(78509), b = n(93062), h = n(63975), v = n(78885), g = n(69392), m = n(47232), f = n(91184), w = n(54240), T = n(4612), y = n(40048), x = n(89642), A = n(92038), C = n(87200), I = n(61237), k = n(65470), O = n(11381), S = n(33790), N = n(17562), E = n(70989), M = n(29274), D = n(71737), z = n(17316);
  !(function(t2) {
    t2.Normal = "", t2.Small = "small", t2.XSmall = "xsmall", t2.XXSmall = "xxsmall";
  })(a || (a = {}));
  const R = /* @__PURE__ */ new Map([["about", M.A], ["advertising-info", p.A], ["athletes", M.A], ["bounty", x.A], ["broker-awards", r.A], ["brokerage-integration", p.A], ["brokers", r.A], ["careers", M.A], [o.zw.community, i.A], ["cookies-policy", x.A], ["countries", s.A], ["data-coverage", M.A], ["disclaimer", l.A], [o.zw.economicCalendar, c.A], [o.zw.earningsCalendar, c.A], [o.zw.dividendCalendar, c.A], [o.zw.ipoCalendar, c.A], [o.zw.revenueCalendar, c.A], ["education", v.A], ["errorView", d.A], ["features", M.A], ["follow", M.A], ["heatmap", b.A], ["home", M.A], ["house-rules", M.A], ["html5-stock-forex-bitcoin-charting-library", p.A], ["ideas", v.A], ["licenses", g.A], ["lightweight-charts", p.A], ["manifesto", M.A], ["markets", D.A], ["mobile", f.A], ["moderators", w.A], ["news", T.A], [o.zw.newsFlow, T.A], [o.zw.options, y.A], ["partner-program", p.A], ["pine-script-docs", k.A], ["pine-script-reference", k.A], ["pine-wizards", k.A], ["policies", x.A], ["privacy-policy", x.A], ["referral-program", p.A], ["screener", I.A], ["script", k.A], ["scripts", k.A], ["share-your-love", C.A], ["snaps", O.A], ["sparks", S.A], ["status", N.A], ["streams", E.A], [o.zw.helpCenter, h.A], ["tradingview-for-the-web", p.A], ["wall-of-love", M.A], ["widget", p.A], ["worldEconomy", D.A], [o.zw.fundamentalGraphs, u.A], [o.zw.macroMaps, m.A], [o.zw.portfolios, A.A], [o.zw.yieldCurves, z.A]]);
}, 89978(t, e, n) {
  n.d(e, { o: () => H });
  var a = n(79474), o = n(99933), r = n(99030), i = n(22259), s = n(7750), l = n(53524), c = n(9639), d = n(71457), p = n(71431), u = n(8750), b = n(75739), h = n(42952);
  const v = /* @__PURE__ */ new Map([["Red", { backgroundColor: "#F23645" }], ["Green", { backgroundColor: "#4CAF50" }], ["Blue", { backgroundColor: "#3179F5" }], ["Yellow", { backgroundColor: "#FDD835" }], ["Orange", { backgroundColor: "#FB8C00" }], ["Sky Blue", { backgroundColor: "#00BCD4" }], ["Grapes Purple", { backgroundColor: "#9C27B0" }], ["Rose", { backgroundColor: "#FF80AB" }], ["Purple", { backgroundColor: "#651FFF" }]]);
  var g, m = n(30828), f = n(4754), w = n(25510);
  function T() {
    return T = Object.assign ? Object.assign.bind() : function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var n2 = arguments[e2];
        for (var a2 in n2) ({}).hasOwnProperty.call(n2, a2) && (t2[a2] = n2[a2]);
      }
      return t2;
    }, T.apply(null, arguments);
  }
  const y = function(t2) {
    return a.createElement("svg", T({ width: 6, height: 6, xmlns: "http://www.w3.org/2000/svg" }, t2), g || (g = a.createElement("path", { d: "M6 0v6H0a6 6 0 0 0 6-6Z", fill: "currentColor" })));
  };
  var x = n(72539), A = n.n(x), C = n(48560), I = n.n(C), k = n(57148), O = n.n(k), S = n(60251), N = n.n(S), E = n(81263), M = n.n(E), D = n(50892), z = n.n(D), R = n(27685), B = {};
  B.styleTagTransform = z(), B.setAttributes = N(), B.insert = O().bind(null, "head"), B.domAPI = I(), B.insertStyleElement = M(), A()(R.A, B), R.A && R.A.locals && R.A.locals;
  const F = () => a.createElement("div", { className: "extenders" }, a.createElement("div", { className: "extender left" }, a.createElement(y, null)), a.createElement("div", { className: "extender right" }, a.createElement(y, null)));
  var P = n(59108), j = n(45977), $ = {};
  $.styleTagTransform = z(), $.setAttributes = N(), $.insert = O().bind(null, "head"), $.domAPI = I(), $.insertStyleElement = M(), A()(j.A, $), j.A && j.A.locals && j.A.locals;
  var L = function(t2, e2, n2, a2) {
    var o2, r2 = arguments.length, i2 = r2 < 3 ? e2 : null === a2 ? a2 = Object.getOwnPropertyDescriptor(e2, n2) : a2;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i2 = Reflect.decorate(t2, e2, n2, a2);
    else for (var s2 = t2.length - 1; s2 >= 0; s2--) (o2 = t2[s2]) && (i2 = (r2 < 3 ? o2(i2) : r2 > 3 ? o2(e2, n2, i2) : o2(e2, n2)) || i2);
    return r2 > 3 && i2 && Object.defineProperty(e2, n2, i2), i2;
  };
  i.f.initializeRpc();
  let H = class extends a.Component {
    static contextType = m.h;
    remoteServiceInstanceId;
    tabRef;
    timeoutOnMouseOver;
    state = { title: { type: u.jm.Basic, title: "" }, linkColor: null };
    componentDidMount() {
      this.tabRef = a.createRef(), this.props.setRef(this.tabRef);
      this.remoteServiceInstanceId || (this.remoteServiceInstanceId = i.f.registerRemoteObject(this, d.N1), (0, h.CI)().registerTabController(this.props.id, this.remoteServiceInstanceId).then((() => (0, s.yg)().debug(`<Tab>.componentDidMount(): "registered controller for tab ${(0, c.QD)(this.remoteServiceInstanceId)}"`))).catch(((t2) => (0, s.yg)().error(`Failed to register tab controller for ${(0, c.QD)(this.remoteServiceInstanceId)}`, t2))), (0, b.uY)((async () => {
        if (this.remoteServiceInstanceId) try {
          const t2 = (0, p.gO)();
          await t2.registerDraggable(this.remoteServiceInstanceId, this.context.windowId), (0, s.yg)().debug(`<Tab>.componentDidMount(): "registered draggable with id ${(0, c.QD)(this.remoteServiceInstanceId)}"`);
        } catch (t2) {
          (0, s.yg)().error(`Could not register draggable ${this.remoteServiceInstanceId}`, t2);
        }
      })())), this.context.windowResizeSubject.subscribe((() => {
        this.hideTooltipHandler();
      }));
    }
    componentWillUnmount() {
      (0, s.yg)().debug(`<Tab>.componentWillUnmount(): "Unmounting ${(0, c.QD)(this.remoteServiceInstanceId)}"`), this.remoteServiceInstanceId && i.f.unregisterRemoteObject(this.remoteServiceInstanceId), clearTimeout(this.timeoutOnMouseOver);
    }
    shouldComponentUpdate(t2) {
      return this.props.isTooltipVisibleGlobal === t2.isTooltipVisibleGlobal;
    }
    getBounds() {
      const t2 = this.tabRef?.current?.getBoundingClientRect() ?? p.Bd;
      return Promise.resolve({ x: Math.round(t2.x), y: Math.round(t2.y), width: Math.round(t2.width), height: Math.round(t2.height) });
    }
    setTitle(t2) {
      return this.setState({ title: t2 }), Promise.resolve();
    }
    setLinkColor(t2) {
      this.setState({ linkColor: t2 });
    }
    closeTab(t2, e2) {
      t2.stopPropagation(), this.props.mouseOverTab(null), this.props.setLastTabClickedId(e2), (0, h.CI)().closeTab(e2, { silent: false, addToHistory: true }).catch(((t3) => {
        (0, s.yg)().error("<Tab>.closeTab(): getWindowControl().closeTab() error", t3);
      }));
    }
    changeActiveTab(t2) {
      this.hideTooltipHandler(), this.props.active || ((0, h.CI)().changeTab(t2).catch(((e2) => {
        (0, s.yg)().error(`<Tab>.changeActiveTab(): getWindowControl().changeTab(id: ${t2}) error`, e2);
      })), (0, h.CI)().activateTooltip(true).catch(((t3) => {
        (0, s.yg)().error("<Tab>.changeActiveTab(): getWindowControl().activateTooltip() error", t3);
      })));
    }
    duplicateActiveTab(t2) {
      this.hideTooltipHandler(), (0, h.CI)().duplicateTab(t2).catch(((e2) => {
        (0, s.yg)().error(`<Tab>.duplicateActiveTab(): getWindowControl().duplicateTab(id: ${t2}) error`, e2);
      }));
    }
    tabClick({ detail: t2 }) {
      const { id: e2, lastTabClickedId: n2, setLastTabClickedId: a2 } = this.props;
      2 !== t2 || n2 !== e2 ? (a2(e2), this.changeActiveTab(e2)) : this.duplicateActiveTab(e2);
    }
    htmlDragStart(t2) {
      t2.preventDefault(), this.remoteServiceInstanceId && ((0, h.CI)().triggerMenuCloseEvent("tab-panel-click"), (0, p.gO)().startDrag(this.remoteServiceInstanceId).catch(((t3) => {
        (0, s.yg)().warn(`IDragService.startDrag(${JSON.stringify(this.remoteServiceInstanceId)}): ${JSON.stringify(t3)}`);
      })));
    }
    onDragStart(t2) {
      this.hideTooltipHandler(), this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver), console.log("tab drag start"), this.props.active || this.changeActiveTab(this.props.id);
      const e2 = { x: t2.x, y: t2.y };
      if (this.setState({ prevCursorPoint: e2 }), !this.context.windowId) return;
      const n2 = { tabId: this.props.id };
      (0, p.gO)().setDragData(n2).catch(((t3) => {
        (0, s.yg)().warn(`IDragService.setDragData(${JSON.stringify(n2)}): ${JSON.stringify(t3)}`);
      }));
    }
    onDragEnd(t2, e2) {
    }
    onDragOver(t2) {
    }
    onDragEnter(t2) {
    }
    onDragLeave(t2) {
    }
    onDrop(t2) {
    }
    showMenu(t2) {
      this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver), this.timeoutOnMouseOver = void 0, this.hideTooltipHandler(), (0, h.CI)().showTabMenu(this.props.id, t2.shiftKey, { x: t2.clientX, y: t2.clientY });
    }
    mouseUp(t2) {
      1 === t2.button && (t2.stopPropagation(), this.hideTooltipHandler(), (0, h.CI)().closeTab(this.props.id).catch(((t3) => {
        (0, s.yg)().error("<Tab>.mouseUp(): getWindowControl().closeTab() error", t3);
      })));
    }
    updateTooltipBounds() {
      const t2 = this.tabRef?.current;
      t2 && this.context.windowFocused && (0, h.CI)().setTooltipOffset(t2.offsetLeft);
    }
    async moveTooltip() {
      if (!this.props.isChart) return void this.hideTooltipHandler();
      this.updateTooltipBounds();
      const t2 = this.state.title;
      (0, h.CI)().setTooltipText({ text: t2, type: u.Lz.Move }), await (0, h.CI)().moveTooltip(10, 4, this.props.active), (0, h.CI)().setTooltipText({ text: t2, type: u.Lz.Show });
    }
    async showTooltipHandler() {
      const t2 = await this.getBounds();
      if (!this.context.windowFocused || t2.width > 224 || !this.props.isChart) return;
      const e2 = this.state.title;
      (0, h.CI)().setTooltipText({ text: e2, type: u.Lz.Show }), this.updateTooltipBounds(), this.tabRef && this.tabRef.current && ((0, h.CI)().activateTooltip(this.props.active), (0, h.CI)().showTooltip(this.props.id));
    }
    hideTooltipHandler() {
      this.props.isTooltipVisibleGlobalChange(false), (0, h.CI)().closeTooltip();
    }
    mouseEnter(t2) {
      if (this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver), this.props.isTooltipVisibleGlobal) (0, b.uY)(this.moveTooltip());
      else {
        const t3 = async () => {
          await this.showTooltipHandler(), this.props.isTooltipVisibleGlobalChange(true);
        };
        this.timeoutOnMouseOver = setTimeout(t3, 1e3);
      }
      t2.buttons || this.props.mouseOverTab(this.props.index);
    }
    mouseLeave() {
      this.timeoutOnMouseOver && clearTimeout(this.timeoutOnMouseOver), this.timeoutOnMouseOver = void 0;
    }
    render() {
      const t2 = this.getTabStyle(), e2 = !this.props.pinned && !this.props.hideCloseTabButton && (this.props.active || this.props.tabSize === w.v.Normal);
      return a.createElement("div", { id: this.props.id, className: `tab ${this.props.active ? "active" : ""} ${this.props.tabSize}`, draggable: true, onDragStart: (t3) => this.htmlDragStart(t3), onMouseEnter: (t3) => this.mouseEnter(t3), onMouseLeave: () => this.mouseLeave(), onClick: (t3) => this.tabClick(t3), onMouseUp: (t3) => this.mouseUp(t3), onContextMenuCapture: () => {
        (0, h.CI)().triggerMenuCloseEvent("tab-context-menu").catch(((t3) => {
          (0, s.yg)().error("<Tab>.onContextMenuCapture(): getWindowControl().triggerMenuCloseEvent() error", t3);
        }));
      }, onContextMenu: (t3) => this.showMenu(t3), style: t2, key: this.props.id, ref: this.tabRef }, a.createElement("div", { className: "tab-link-indicator", style: this.getTabLinkingColor() }), a.createElement("div", { className: `tab-title ${this.props.tabSize}` }, a.createElement(P.I, { title: this.state.title, isLogoVisible: true, active: this.props.active, t: this.props.t })), a.createElement("div", { className: "tab-close-button-container" }, a.createElement("div", { className: "fadeout" }), e2 && a.createElement(o.s_, { title: this.props.t("Close"), icon: r.F, onClick: (t3) => {
        this.closeTab(t3, this.props.id);
      }, colorClassName: "tab-close-button", tabIndex: -1 })), a.createElement(f.n, null), a.createElement(F, null));
    }
    getTabLinkingColor() {
      if (null === this.state.linkColor) return;
      const t2 = v.get(this.state.linkColor);
      return void 0 !== t2 ? { backgroundColor: t2.backgroundColor } : void 0;
    }
    getTabStyle() {
      const t2 = {};
      if (this.props.active || void 0 === this.props.offset || (t2.transition = "transform 0.2s ease-out"), this.props.offset) {
        const e2 = Math.round(this.props.offset);
        t2.transform = `translate(${e2 || 0}px, 0px)`;
      }
      return this.props.initialWidth && (t2.flexBasis = this.props.initialWidth), t2;
    }
  };
  L([l.F], H.prototype, "closeTab", null), L([l.F], H.prototype, "changeActiveTab", null), L([l.F], H.prototype, "duplicateActiveTab", null), L([l.F], H.prototype, "tabClick", null), L([l.F], H.prototype, "htmlDragStart", null), L([l.F], H.prototype, "onDragStart", null), L([l.F], H.prototype, "showMenu", null), H = L([(0, l.W)("Tab")], H);
}, 30190(t, e, n) {
  n.d(e, { F: () => i });
  var a = n(84157), o = n(48927);
  const r = void 0 !== a.ipcMain;
  function i() {
    if (r) throw new Error("This initialization must be called from renderer process");
    (0, o.Ts)();
  }
}, 61888(t, e, n) {
  n.d(e, { Js: () => r, mX: () => o });
  var a = n(62340);
  const o = 76, r = (0, a.iT)() ? o : 0;
}, 71431(t, e, n) {
  n.d(e, { Bd: () => a.Bd, gO: () => a.gO });
  var a = n(8620);
}, 98260(t, e, n) {
  n.d(e, { Q: () => o });
  var a = n(22259);
  function o() {
    return a.f.provideProxy("tvd:tab-drag-handler");
  }
}, 20802(t, e, n) {
  n.d(e, { k: () => a });
  const a = "tvd:window-service";
  var o;
  !(function(t2) {
    t2.Ask = "ask", t2.CheckOnly = "check-only";
  })(o || (o = {}));
}, 33077(t, e, n) {
  n.d(e, { bw: () => a.b }), n(42494);
  var a = n(46699);
  n(93100);
}, 92763(t, e, n) {
  n.d(e, { uY: () => r, yy: () => o }), n(7750);
  var a = n(33077);
  function o(t2, e2) {
    return e2 && e2.signal.aborted ? Promise.resolve(false) : new Promise(((n2) => {
      let a2;
      const o2 = () => {
        a2 && (clearTimeout(a2), a2 = void 0, n2(false));
      };
      e2 && e2.signal.addEventListener("abort", o2, { once: true }), a2 = setTimeout((() => {
        a2 = void 0, e2?.signal.removeEventListener("abort", o2), n2(true);
      }), t2);
    }));
  }
  function r(t2) {
    t2.catch(((t3) => {
      const e2 = (0, a.bw)(t3);
      console.warn(`Ignoring promise, but error: ${e2}`), console.warn(t3.stack);
    }));
  }
}, 20850(t, e, n) {
  n.d(e, { iT: () => a.iT });
  var a = n(62340);
}, 75739(t, e, n) {
  n.d(e, { iT: () => o.iT, uY: () => a.uY, yy: () => a.yy });
  var a = n(92763), o = n(20850);
  n(95398), n(51022), n(16793), n(86216);
}, 95398(t, e, n) {
  var a;
  n(55701), n(41939), (function(t2) {
    t2.Enter = "Enter", t2.Space = "Space", t2.Tab = "Tab", t2.ArrowUp = "ArrowUp", t2.ArrowDown = "ArrowDown", t2.Escape = "Escape";
  })(a || (a = {}));
}, 9691(t, e, n) {
  n.d(e, { G: () => o });
  var a = n(7750);
  const o = (t2, e2) => {
    try {
      return JSON.parse(t2, e2);
    } catch (t3) {
      return (0, a.di)().error("jsonParse JSON.parse error", t3), null;
    }
  };
}, 62340(t, e, n) {
  n.d(e, { iT: () => a });
  const a = () => "darwin" === process.platform;
} }]);
