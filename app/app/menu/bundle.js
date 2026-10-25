(() => {
  "use strict";
  var e, t = { 65985(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".menu-item {\n	.theme-picker {\n		box-sizing: border-box;\n		justify-content: space-between;\n		padding: 6px 6.5px 4px\n	}\n}\n", ""]);
    const l = i;
  }, 31334(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".linking-channel-switch-tooltip {\n	max-width: 258px;\n}\n", ""]);
    const l = i;
  }, 55866(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".linking-color-button {\n	position: relative;\n	width: 18px;\n	height: 18px;\n	box-sizing: border-box;\n	display: flex;\n	align-items: center;\n	justify-content: center;\n	padding: 0;\n	color: var(--color-white); /* base ui-lib palette color */\n	border-radius: 50%;\n\n	&::before {\n		content: '';\n		position: absolute;\n		width: 100%;\n		height: 100%;\n		background-color: inherit;\n		border-radius: 50%;\n		transform-origin: center;\n		transition: transform 150ms ease-in;\n	}\n\n	&:hover::before {\n		transform: scale(1.222);\n	}\n\n	&:focus-visible {\n		outline: 2px solid var(--color-tv-blue-a600); /* base ui-lib palette color */\n		outline-offset: 2px;\n	}\n}\n\n.linking-color-button-icon {\n	z-index: 1;\n}\n", ""]);
    const l = i;
  }, 19115(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".linking-color-picker {\n	display: flex;\n	flex-direction: row;\n	align-items: center;\n	gap: 12px;\n	padding: 11px 6px;\n	list-style: none;\n}\n", ""]);
    const l = i;
  }, 81187(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".zoom-container {\n	display: flex;\n	align-items: center;\n	min-height: 32px;\n	min-width: 0;\n	width: 100%;\n	flex: 1;\n	padding: 2px 4px;\n}\n\n.zoom-value {\n	margin: 0 8px;\n	text-align: center;\n	color: var(--color-content-primary-neutral-bold);\n\n	&.win32 {\n		width: 30px;\n	}\n\n	&.other {\n		width: 36px;\n	}\n}\n\n.zoom-icon {\n	align-items: center;\n	display: grid;\n	grid-template-columns: repeat(var(--ui-lib-popoverItem-leftSlotItemsNumber), 28px);\n	height: 28px;\n	justify-items: center;\n}\n\n.zoom-title {\n	display: flex;\n	flex-direction: column;\n	gap: 2px;\n	min-width: 0;\n	padding-left: 4px;\n	flex: 1;\n}\n\n.zoom-buttons {\n	align-items: center;\n	box-sizing: border-box;\n	display: flex;\n	gap: 4px;\n	height: 28px;\n	padding: 3px 10px 3px 24px;\n\n	[dir='rtl'] & {\n		padding: 3px 24px 3px 10px;\n	}\n}\n", ""]);
    const l = i;
  }, 11030(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, "body {\n	background: transparent;\n}\n\n/* Popovers (tab menu, its nested submenu, tab group menu) are portaled to\ndocument.body, so the width cap must live on an ancestor of the portal, i.e.\n<body> (class set in use-menu-window). Scoped per window type so the main menu\nis left untouched. 282px must match MAX_BARE_* in with-menu.ts (the bare menu\nwidth inside its window column). */\n.tab-menu-window,\n.tab-group-menu-window {\n	--ui-lib-positioner-max-width: 282px;\n}\n\n.invisible-root {\n	visibility: hidden;\n}\n\n.menu-container {\n	box-sizing: border-box;\n	display: flex;\n	width: 100%;\n	height: 100%;\n	padding: 0 4px;\n\n	[dir='ltr'] &.main-menu {\n		justify-content: end;\n	}\n\n	[dir='rtl'] &.main-menu {\n		justify-content: start;\n	}\n\n	&.tab-menu {\n		> div {\n			position: absolute;\n		}\n\n		/* The base menu is anchored to one window edge; the submenu opens into the reserved\n		space on the other side. Right side (default) anchors near the left edge and grows\n		right; left side mirrors it - anchors near the right edge and grows left. */\n		&.submenu-right > div {\n			left: 4px;\n			right: auto;\n		}\n\n		&.submenu-left > div {\n			left: auto;\n			right: 4px;\n		}\n	}\n\n	[dir='ltr'] &.tab-group-menu {\n		justify-content: start;\n	}\n\n	[dir='rtl'] &.tab-group-menu {\n		justify-content: end;\n	}\n}\n\n.linking-icon {\n	width: 16px;\n	height: 16px;\n	border-radius: 100%;\n}\n", ""]);
    const l = i;
  }, 48269(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".update-app-menu-item {\n	width: 100%;\n	height: 32px;\n	border-radius: 4px;\n	display: flex;\n	align-items: center;\n	background-color: transparent;\n	color: var(--color-content-secondary-neutral-bold);\n	padding: 0;\n	border: none;\n}\n\n.update-app-menu-item.available {\n	background-color: var(--color-container-fill-primary-success-extra-light);\n}\n\n.update-app-menu-item.available:hover {\n	background-color: var(--color-container-fill-primary-success-light);\n}\n\n.update-app-menu-item.warning {\n	background-color: var(--color-container-fill-primary-warning-extra-light);\n}\n\n.update-app-menu-item.warning:hover {\n	background-color: var(--color-container-fill-primary-warning-light);\n}\n\n.update-app-menu-item svg {\n	width: 28px;\n	height: 28px;\n}\n\n[dir='ltr'] .update-app-menu-item > span {\n	margin-left: 4px;\n}\n\n[dir='rtl'] .update-app-menu-item > span {\n	margin-right: 4px;\n}\n\n.update-app-menu-item.available svg {\n	color: var(--color-content-primary-success);\n}\n\n.update-app-menu-item.warning svg {\n	color: var(--color-content-primary-warning);\n}\n", ""]);
    const l = i;
  }, 88716(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, '[data-theme="dark"] {\n	--color-trial-bg-hover: var(--color-cold-gray-550); /* base ui-lib palette color */\n}\n\n[data-theme="light"] {\n	--color-trial-bg-hover: var(--color-cold-gray-450); /* base ui-lib palette color */\n}\n.trial {\n	--ui-lib-badgeSkewed-skewed-background: var(--color-default-gray) !important;\n	&:hover {\n		--ui-lib-badgeSkewed-skewed-background: var(--color-trial-bg-hover) !important;\n	}\n}\n', ""]);
    const l = i;
  }, 50333(e2, t2, n2) {
    n2.d(t2, { A: () => l });
    var r2 = n2(30050), o2 = n2.n(r2), a = n2(77259), i = n2.n(a)()(o2());
    i.push([e2.id, ".user-card-container {\n	padding: 2px 4px;\n}\n\n.user-card {\n	display: flex;\n	flex-direction: column;\n	width: 100%;\n	align-items: center;\n	gap: 8px;\n	border-radius: 4px;\n	padding: 8px 0;\n\n	&:hover {\n		background-color: var(--color-container-fill-primary-neutral-extra-light);\n	}\n}\n\n.user-card-avatar-container {\n	background-color: var(--color-background-primary-neutral-normal);\n	color: var(--color-content-primary-neutral-bold);\n	display: flex;\n	align-items: center;\n	justify-content: center;\n}\n\n.user-card-avatar-container {\n	width: 36px;\n	height: 36px;\n	border-radius: 50%;\n}\n\n.user-card-avatar-container > svg {\n	width: 28px;\n	height: 28px;\n}\n\n.user-name {\n	display: flex;\n	gap: 4px;\n	align-items: center;\n}\n", ""]);
    const l = i;
  }, 39410(e2, t2, n2) {
    var r2 = n2(79474), o2 = n2(48088), a = n2(22259), i = n2(84157), l = n2(48927);
    const c = void 0 !== i.ipcMain;
    var s, d, u = n2(87894);
    !(function(e3) {
      e3.Main = "main-menu", e3.Tab = "tab-menu", e3.TabGroup = "tab-group-menu";
    })(s || (s = {})), (function(e3) {
      e3.Left = "submenu-left", e3.Right = "submenu-right";
    })(d || (d = {}));
    var m = n2(75739), p = n2(7750), g = n2(9691);
    const h = { windowControl: null, dialogControl: null, toastWindowHandler: null };
    function b() {
      const e3 = (0, g.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
      if (!e3) throw new Error("getRendererInitialData() jsonParse error");
      return e3;
    }
    function y(e3) {
      return h.windowControl = (function(e4, t3, n3) {
        let r3 = window?.remoteServiceInstanceId ?? b().remoteServiceInstanceId;
        if (n3 && (r3 = n3), !t3 || r3 !== window?.initialRemoteServiceInstanceId) {
          (0, p.yg)().debug(`[Renderer] initializeIpcProxyForInstance ${e4} id: ${r3}; Old id ${window?.initialRemoteServiceInstanceId}`);
          const t4 = a.f.provideProxy(r3);
          return window.initialRemoteServiceInstanceId = r3, t4;
        }
        return t3;
      })("windowControl", h.windowControl, e3), h.windowControl;
    }
    var v = n2(62020), f = n2(91565), w = n2(66577), k = n2(47148), T = n2(19063), C = n2(43541), E = n2(37456), x = n2(55535), A = n2(6656), S = n2(39150), M = n2(32371), R = n2(29470);
    const O = ({ children: e3 }) => {
      const { onFocus: t3, onKeyDown: n3 } = (0, R.u)();
      return r2.createElement("div", { onFocus: t3, onKeyDown: n3 }, r2.createElement("span", { [M.l8]: true }, e3));
    };
    var $ = n2(72539), I = n2.n($), F = n2(48560), V = n2.n(F), P = n2(57148), N = n2.n(P), z = n2(60251), D = n2.n(z), L = n2(81263), W = n2.n(L), B = n2(50892), j = n2.n(B), _ = n2(65985), G = {};
    G.styleTagTransform = j(), G.setAttributes = D(), G.insert = N().bind(null, "head"), G.domAPI = V(), G.insertStyleElement = W(), I()(_.A, G), _.A && _.A.locals && _.A.locals;
    const H = (e3) => {
      switch (e3.type) {
        case "empty":
          return r2.createElement(r2.Fragment, null);
        case "separator":
          return r2.createElement(C._, null);
        case "custom": {
          const t3 = e3.hasHorizontalNavigation ? O : r2.Fragment;
          return r2.createElement(t3, null, r2.createElement(T.o, { focusable: e3.focusable }, e3.children));
        }
        case "section": {
          const { title: t3, items: n3 } = e3;
          return r2.createElement(r2.Fragment, null, r2.createElement(C._, null), r2.createElement(A.c, { title: t3 }, n3.map(((e4, t4) => r2.createElement(H, { ...e4, key: t4 })))));
        }
        case "nested": {
          const { children: t3, ...n3 } = e3;
          return r2.createElement(E.tv, { ...n3, nestedPopoverRole: "menu" }, t3);
        }
        default: {
          const { onClick: t3, ...n3 } = e3, o3 = (e4) => {
            e4.preventDefault(), e4.stopPropagation(), t3?.()?.catch(((e5) => {
              (0, p.yg)().error("<MenuItem>.handleClick(): onClick() error", e5);
            }));
          };
          return r2.createElement(x.f, { ...n3, ...(0, S.e)(!n3.disabled), tabIndex: n3.disabled ? -1 : 0, onClick: o3 });
        }
      }
    };
    var Z = n2(86692), U = n2(92014), Y = n2(64149), q = n2(60027), K = n2(75654), Q = n2(56007), X = n2(67700), J = n2(42636), ee = n2(65758), te = n2(47547), ne = n2(50265), re = n2(52671), oe = n2(16079), ae = n2(32812), ie = n2(16309);
    const le = "https://www.tradingview.com/?solution=43000706464";
    var ce;
    n2(87016), n2(55936), (function(e3) {
      e3[e3.None = 0] = "None", e3[e3.Alt = 512] = "Alt", e3[e3.Shift = 1024] = "Shift", e3[e3.CtrlOrCmd = (0, m.iT)() ? 2048 : 256] = "CtrlOrCmd";
    })(ce || (ce = {}));
    var se = n2(75594);
    const de = ["Red", "Green", "Blue", "Yellow", "Orange", "Sky Blue", "Grapes Purple", "Rose", "Purple"], ue = { symbol: false, interval: false, time: false, dateRange: false };
    var me = n2(2129), pe = n2(51969), ge = n2(21773), he = n2(31334), be = {};
    be.styleTagTransform = j(), be.setAttributes = D(), be.insert = N().bind(null, "head"), be.domAPI = V(), be.insertStyleElement = W(), I()(he.A, be), he.A && he.A.locals && he.A.locals;
    const ye = ({ title: e3, tooltip: t3, checked: n3, onChange: o3, disabled: a2 = false, tooltipOnDisabled: i2 }) => r2.createElement(x.f, { onClick: o3, title: r2.createElement(r2.Fragment, null, e3, r2.createElement(ge.m, { content: r2.createElement("div", { className: "linking-channel-switch-tooltip" }, t3), placement: "top", delay: 0 }, r2.createElement("div", null, r2.createElement(me.I, { ariaLabel: `${e3} info tooltip`, icon: "info", size: "small", tabIndex: -1 })))), rightSlot: a2 && void 0 !== i2 ? r2.createElement(ge.m, { content: i2, placement: "top-left", delay: 0 }, r2.createElement("div", null, r2.createElement(pe.i, { checked: n3, disabled: a2 }))) : r2.createElement(pe.i, { checked: n3, disabled: a2 }), disabled: a2 });
    var ve = n2(7413), fe = n2(56139);
    const we = /* @__PURE__ */ new Map([["Red", { backgroundColor: "#F23645" }], ["Green", { backgroundColor: "#4CAF50" }], ["Blue", { backgroundColor: "#3179F5" }], ["Yellow", { backgroundColor: "#FDD835" }], ["Orange", { backgroundColor: "#FB8C00" }], ["Sky Blue", { backgroundColor: "#00BCD4" }], ["Grapes Purple", { backgroundColor: "#9C27B0" }], ["Rose", { backgroundColor: "#FF80AB" }], ["Purple", { backgroundColor: "#651FFF" }]]);
    var ke = n2(55866), Te = {};
    Te.styleTagTransform = j(), Te.setAttributes = D(), Te.insert = N().bind(null, "head"), Te.domAPI = V(), Te.insertStyleElement = W(), I()(ke.A, Te), ke.A && ke.A.locals && ke.A.locals;
    const Ce = ({ color: e3, isActive: t3, onClick: n3 }) => {
      const [o3, a2] = (0, r2.useState)(false), i2 = we.get(e3);
      return void 0 === i2 ? r2.createElement(r2.Fragment, null) : r2.createElement("li", null, r2.createElement("button", { ...(0, S.e)(true), onClick: n3, className: "linking-color-button", style: i2, onMouseEnter: () => {
        a2(true);
      }, onMouseLeave: () => {
        a2(false);
      } }, t3 ? r2.createElement(Z.t, { icon: o3 ? fe.J : ve.b, className: "linking-color-button-icon" }) : r2.createElement(r2.Fragment, null)));
    };
    var Ee = n2(19115), xe = {};
    xe.styleTagTransform = j(), xe.setAttributes = D(), xe.insert = N().bind(null, "head"), xe.domAPI = V(), xe.insertStyleElement = W(), I()(Ee.A, xe), Ee.A && Ee.A.locals && Ee.A.locals;
    const Ae = ({ initialTabLinkingState: e3, link: t3, unlink: n3, updateLinkChannelsConfig: o3, isChart: a2, isTimeAndDateRangeSyncEnabled: i2 }) => {
      const { t: l2 } = (0, v.Bd)(), [c2, s2] = (0, r2.useState)(e3.color), [d2, u2] = (0, r2.useState)(e3.channelsConfig), m2 = (e4) => {
        const t4 = { ...d2 }, n4 = { ...t4, [e4]: !d2[e4] };
        u2(n4), o3(n4).catch(((e5) => {
          (0, p.yg)().error("<TabLinkingItem>.handleChannelClick(): updateLinkChannelsConfig() error", e5), u2(t4);
        }));
      };
      return r2.createElement(r2.Fragment, null, r2.createElement("ul", { className: "linking-color-picker" }, de.map(((e4) => {
        const o4 = e4 === c2;
        return r2.createElement(Ce, { key: e4, color: e4, isActive: o4, onClick: () => {
          ((e5, r3) => {
            r3 ? (s2(null), u2(ue), n3(e5)) : (s2(e5), t3(e5).then(u2).catch(((t4) => {
              (0, p.yg)().error(`<TabLinkingItem>.handleColorClick(): link(groupName: ${e5}) error `, t4);
            })));
          })(e4, o4);
        } });
      }))), null !== c2 && r2.createElement(r2.Fragment, null, r2.createElement(ye, { title: l2("Symbol"), tooltip: l2("Changing the symbol updates it across all synced tabs with the same color tag"), checked: d2.symbol, onChange: () => {
        m2("symbol");
      } }), r2.createElement(ye, { title: l2("Interval"), tooltip: l2("Adjusting the interval updates it across all synced tabs with the same color tag"), checked: d2.interval, onChange: () => {
        m2("interval");
      }, disabled: !a2, tooltipOnDisabled: l2("Only available on chart tabs") }), i2 && r2.createElement(r2.Fragment, null, r2.createElement(ye, { title: l2("Time"), tooltip: l2("Changing the point of time in a chart will sync this change to all tabs marked with the same color tag"), checked: d2.time, onChange: () => {
        m2("time");
      }, disabled: !a2, tooltipOnDisabled: l2("Only available on chart tabs") }), r2.createElement(ye, { title: l2("Date range"), tooltip: l2("Modifying the date range updates it across all tabs synced with the same color tag"), checked: d2.dateRange, onChange: () => {
        m2("dateRange");
      }, disabled: !a2, tooltipOnDisabled: l2("Only available on chart tabs") }))));
    };
    var Se = n2(1566), Me = n2(27892), Re = n2(5438), Oe = n2(20369), $e = n2(81187), Ie = {};
    Ie.styleTagTransform = j(), Ie.setAttributes = D(), Ie.insert = N().bind(null, "head"), Ie.domAPI = V(), Ie.insertStyleElement = W(), I()($e.A, Ie), $e.A && $e.A.locals && $e.A.locals;
    const Fe = ({ icon: e3, title: t3, zoom: n3 }) => {
      const [o3, a2] = (0, r2.useState)(n3), i2 = async (e4) => {
        try {
          const t4 = e4 ? await (0, ae.O)().increaseZoom() : await (0, ae.O)().decreaseZoom();
          if (!t4) return;
          a2(((n4) => ((e5, t5, n5) => {
            const r3 = Math.round(100 * t5);
            return (n5 ? r3 > e5 : r3 < e5) ? r3 : e5;
          })(n4, t4, e4)));
        } catch (e5) {
          (0, p.yg)().error("<ZoomItem>.zoomChange(): mainMenuServiceProxy().increaseZoom()/decreaseZoom()", e5);
        }
      };
      return r2.createElement("div", { className: "zoom-container" }, r2.createElement("div", { className: "zoom-icon" }, e3), r2.createElement("div", { className: "zoom-title" }, t3), r2.createElement("div", { className: "zoom-buttons" }, r2.createElement(Se.SX, { ...(0, S.e)(true), variant: "primary", size: "xsmall", color: "gray", iconOnly: true, startSlot: r2.createElement(Z.t, { icon: Me.m }), onClick: () => {
        i2(false);
      } }), r2.createElement(Oe.o, { name: "typography-regular-14px", tag: "div", className: "zoom-value " + ((0, m.wb)() ? "win32" : "other") }, o3, "%"), r2.createElement(Se.SX, { ...(0, S.e)(true), variant: "primary", size: "xsmall", color: "gray", iconOnly: true, startSlot: r2.createElement(Z.t, { icon: Re.y }), onClick: () => {
        i2(true);
      } })));
    };
    var Ve = n2(48269), Pe = {};
    Pe.styleTagTransform = j(), Pe.setAttributes = D(), Pe.insert = N().bind(null, "head"), Pe.domAPI = V(), Pe.insertStyleElement = W(), I()(Ve.A, Pe), Ve.A && Ve.A.locals && Ve.A.locals;
    const Ne = ({ onClick: e3, icon: t3, text: n3, type: o3 }) => r2.createElement("button", { onClick: e3, className: `update-app-menu-item ${o3}` }, t3, r2.createElement(Oe.o, { tag: "span", name: "typography-regular-14px" }, n3));
    var ze = n2(33167), De = n2(70898), Le = n2(48534), We = n2(88716), Be = {};
    function je(e3) {
      return e3.includes("_trial");
    }
    Be.styleTagTransform = j(), Be.setAttributes = D(), Be.insert = N().bind(null, "head"), Be.domAPI = V(), Be.insertStyleElement = W(), I()(We.A, Be), We.A && We.A.locals && We.A.locals;
    const _e = ({ userPlanBadgeName: e3 }) => {
      const t3 = (function(e4) {
        switch (e4) {
          case "pro:pro_expert":
            return "Expert";
          case "pro:pro_premium_expert":
            return "Ultimate";
          case "pro:pro_premium":
          case "pro:pro_premium_trial":
            return "Premium";
          case "pro:pro_realtime":
          case "pro:pro_realtime_trial":
            return "Plus";
          case "pro:pro":
          case "pro:pro_trial":
            return "Essential";
          default:
            return "";
        }
      })(e3);
      return t3 ? r2.createElement(Le.K, { className: je(e3) ? "trial" : "", size: De.v.XSmall }, " ", t3, " ") : r2.createElement(r2.Fragment, null);
    };
    var Ge;
    function He() {
      return He = Object.assign ? Object.assign.bind() : function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
        }
        return e3;
      }, He.apply(null, arguments);
    }
    const Ze = function(e3) {
      return r2.createElement("svg", He({ viewBox: "0 0 28 28", xmlns: "http://www.w3.org/2000/svg" }, e3), Ge || (Ge = r2.createElement("path", { d: "M14 5c-1.7 0-2.98.54-3.82 1.49A5.19 5.19 0 0 0 9 10c0 1.32.35 2.58 1.18 3.51.84.95 2.12 1.49 3.82 1.49 1.7 0 2.98-.54 3.82-1.49A5.19 5.19 0 0 0 19 10c0-1.32-.35-2.58-1.18-3.51C16.98 5.54 15.7 5 14 5Zm0 1.5c1.37 0 2.2.42 2.7.99.52.58.8 1.44.8 2.51a3.7 3.7 0 0 1-.8 2.51c-.5.57-1.33.99-2.7.99s-2.2-.42-2.7-.99a3.7 3.7 0 0 1-.8-2.51c0-1.07.28-1.93.8-2.51.5-.57 1.33-.99 2.7-.99Zm-3 12c-3 0-4.5 2.5-4.5 4.5H5c0-2.85 2.17-6 6-6h6c3.83 0 6 3.15 6 6h-1.5c0-2-1.5-4.5-4.5-4.5h-6Z", fill: "currentColor" })));
    };
    var Ue = n2(50333), Ye = {};
    Ye.styleTagTransform = j(), Ye.setAttributes = D(), Ye.insert = N().bind(null, "head"), Ye.domAPI = V(), Ye.insertStyleElement = W(), I()(Ue.A, Ye), Ue.A && Ue.A.locals && Ue.A.locals;
    const qe = ({ name: e3, avatar: t3, isAnonymous: n3, isPro: o3, userPlanBadgeName: a2 }) => {
      const { t: i2 } = (0, v.Bd)();
      return r2.createElement("section", { className: "user-card-container" }, r2.createElement("button", { className: "user-card", onClick: n3 ? () => {
        (0, ae.O)().signIn().catch(((e4) => {
          (0, p.yg)().error("<UserCard>.onSignIn(): mainMenuServiceProxy().signIn() error", e4);
        }));
      } : () => {
        (0, ae.O)().openUserPage(e3).catch(((t4) => {
          (0, p.yg)().error(`<UserCard>.onProfileClick(): mainMenuServiceProxy().openUserPage(name: ${e3}) error`, t4);
        }));
      }, tabIndex: -1 }, n3 ? r2.createElement(r2.Fragment, null, r2.createElement("div", { className: "user-card-avatar-container" }, r2.createElement(Ze, null)), r2.createElement(Oe.o, { tag: "div", name: "typography-accent-14px-semibold" }, i2("Sign in"))) : r2.createElement(r2.Fragment, null, r2.createElement(ze.i, { logoUrl: t3, size: "medium" }), r2.createElement("div", { className: "user-name" }, r2.createElement(Oe.o, { tag: "span", name: "typography-accent-14px-semibold" }, e3), o3 && r2.createElement(_e, { userPlanBadgeName: a2 })))));
    };
    var Ke;
    function Qe() {
      return Qe = Object.assign ? Object.assign.bind() : function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
        }
        return e3;
      }, Qe.apply(null, arguments);
    }
    const Xe = function(e3) {
      return r2.createElement("svg", Qe({ width: 15, height: 20, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e3), Ke || (Ke = r2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 15v5h1v-5h7v-.5a7.502 7.502 0 0 0-4-6.635V4.874c1.725-.444 3-2.01 3-3.874V0H1v1a4.002 4.002 0 0 0 3 3.874v2.991A7.501 7.501 0 0 0 0 14.5v.5h7Zm-5.981-1H13.98a6.502 6.502 0 0 0-3.448-5.25L10 8.467v-4.37l.75-.192A3.002 3.002 0 0 0 13 1H2c0 1.397.955 2.572 2.25 2.906l.75.193v4.369l-.533.281A6.501 6.501 0 0 0 1.02 14Z", fill: "currentColor" })));
    };
    var Je;
    function et() {
      return et = Object.assign ? Object.assign.bind() : function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
        }
        return e3;
      }, et.apply(null, arguments);
    }
    const tt = function(e3) {
      return r2.createElement("svg", et({ width: 20, height: 21, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, e3), Je || (Je = r2.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.707.707 19 0 0 19l.707.707 19-19ZM3 1v1a4.002 4.002 0 0 0 3 3.874v2.991A7.501 7.501 0 0 0 2 15.5v.086l1.075-1.075a6.506 6.506 0 0 1 3.392-4.762L7 9.468v-4.37l-.75-.192A3.002 3.002 0 0 1 4 2h11l1-1H3Zm6 20h1v-5h7v-.5a7.502 7.502 0 0 0-4-6.635l-.734.743.267.141A6.502 6.502 0 0 1 15.98 15H6.832l-1.008 1H9v5Z", fill: "currentColor" })));
    }, nt = { type: "separator" }, rt = { type: "empty" };
    function ot({ tabId: e3, tabLinkingState: t3, isChart: n3, isTimeAndDateRangeSyncEnabled: o3 }) {
      return [{ type: "custom", children: r2.createElement(Ae, { initialTabLinkingState: t3, link: (t4) => y().linkFromMenu(e3, t4), unlink: (t4) => {
        y().unlinkFromMenu(e3, t4).catch(((n4) => {
          (0, p.yg)().error(`getLinkingItems(): getWindowControl().unlinkFromMenu(tabId: ${e3}, color: ${t4}) error`, n4);
        }));
      }, updateLinkChannelsConfig: (t4) => y().updateLinkChannelsConfigFromMenu(e3, t4), isChart: n3, isTimeAndDateRangeSyncEnabled: o3 }), focusable: false, hasHorizontalNavigation: true }];
    }
    let at = ["Placeholder group 1 loooooooooooooooooooooooooooooooooooongggnngngngngn", "Placeholder group 2", "Placeholder group 3"];
    function it({ onGroupClick: e3 }) {
      return [...at.map(((t3) => ({ type: "common", title: t3, onClick: e3 }))), nt, { type: "common", title: "Add placeholder item", leftSlot: r2.createElement(Z.t, { icon: te.o }), onClick: () => {
        at = [...at, `Placeholder group ${at.length + 1}`];
      } }];
    }
    n2(10300), n2(79278), n2(34097), n2(23704), n2(12329);
    var lt = n2(3156);
    n2(49131), n2(57179), n2(57857);
    const ct = { [s.Tab]: "tab-menu-window", [s.TabGroup]: "tab-group-menu-window" };
    function st() {
      const e3 = (0, r2.useRef)(null), t3 = (0, r2.useRef)(null), [n3, o3] = (0, r2.useState)(false), [a2, i2] = (0, r2.useState)((0, m.iT)()), [l2] = (0, r2.useState)((() => b()));
      (0, r2.useLayoutEffect)((() => {
        if (a2) return;
        const e4 = setTimeout((() => {
          i2(true);
        }), 100);
        return () => {
          clearTimeout(e4);
        };
      }), [a2]), (0, r2.useEffect)((() => {
        const e4 = ct[l2.type];
        if (void 0 !== e4) return document.body.classList.add(e4), () => {
          document.body.classList.remove(e4);
        };
      }), [l2.type]), (0, r2.useEffect)((() => {
        (0, ie.v2)(l2.locale).catch(((e4) => {
          (0, p.yg)().error("useMenuWindow(): changeLanguage() error", e4);
        })).finally((() => {
          o3(true);
        }));
      }), [l2]);
      const c2 = (0, r2.useCallback)((() => {
        var e4;
        (e4 = l2.type) !== s.TabGroup ? e4 !== s.Main ? y().hideTabMenu().catch(((e5) => {
          (0, p.yg)().error("useMenuWindow(): getWindowControl().hideTabMenu() error", e5);
        })) : (0, ae.O)().hideMenu().catch(((e5) => {
          (0, p.yg)().error("useMenuWindow(): mainMenuServiceProxy().hideMenu() error", e5);
        })) : y().hideTabGroupMenu().catch(((e5) => {
          (0, p.yg)().error("useMenuWindow(): getWindowControl().hideTabGroupMenu() error", e5);
        }));
      }), [l2.type]);
      return (0, lt.j)(e3, a2, c2, { escape: true }), { menuRef: e3, anchorMenuRef: t3, isReady: n3, isVisible: a2, rendererData: l2, close: c2 };
    }
    var dt = n2(11030), ut = {};
    ut.styleTagTransform = j(), ut.setAttributes = D(), ut.insert = N().bind(null, "head"), ut.domAPI = V(), ut.insertStyleElement = W(), I()(dt.A, ut), dt.A && dt.A.locals && dt.A.locals;
    const mt = () => {
      const { t: e3 } = (0, v.Bd)(), { menuRef: t3, anchorMenuRef: n3, isReady: o3, isVisible: a2, rendererData: i2 } = st(), [l2, c2] = (0, r2.useState)([]);
      if ((0, r2.useEffect)((() => {
        o3 && (i2.type === s.Main && c2((function({ isDebugMode: e4, t: t4, undoLabel: n4, zoom: o4, isValidClipboard: a3, isUpdateAvailable: i3, systemRequirementsUnmet: l3, user: c3 }) {
          const s2 = { type: "custom", focusable: false, children: r2.createElement(qe, { ...c3 }) }, d2 = i3 ? { type: "custom", focusable: true, children: r2.createElement(Ne, { onClick: () => {
            (0, ae.O)().updateAndRelaunch().catch(((e5) => {
              (0, p.yg)().error("<Menu>.getMenuItems(): mainMenuServiceProxy().updateAndRelaunch() error", e5);
            }));
          }, icon: r2.createElement(Z.t, { icon: Y.Y }), text: t4("Relaunch to update"), type: "available" }) } : rt, u3 = l3 ? { type: "custom", focusable: true, children: r2.createElement(Ne, { onClick: () => {
            (0, ae.O)().openLink(le).catch(((e5) => {
              (0, p.yg)().error(`<Menu>.getMenuItems(): mainMenuServiceProxy().openLink(url: ${le}) error`, e5);
            }));
          }, icon: r2.createElement(Z.t, { icon: Q.f }), text: t4("Unable to update the app"), type: "warning" }) } : rt, g3 = { type: "common", title: t4("Settings"), leftSlot: r2.createElement(Z.t, { icon: X.v, className: "ui-lib-icon" }), hotkey: ce.CtrlOrCmd + ",".charCodeAt(0), onClick: (0, ae.O)().showSettings }, h3 = o4 ? [{ type: "custom", focusable: false, children: r2.createElement(Fe, { title: t4("Zoom"), zoom: o4, icon: r2.createElement(Z.t, { icon: U.W }) }), hasHorizontalNavigation: true }, nt] : [rt], b3 = { type: "common", title: t4("New tab"), leftSlot: r2.createElement(Z.t, { icon: te.o }), hotkey: ce.CtrlOrCmd + "T".charCodeAt(0), onClick: (0, ae.O)().createNewTab }, y2 = { type: "common", title: t4("New window"), leftSlot: r2.createElement(Z.t, { icon: K.j }), hotkey: ce.CtrlOrCmd + "N".charCodeAt(0), onClick: (0, ae.O)().createNewWindow }, v2 = n4 ? { type: "common", title: n4, leftSlot: r2.createElement(Z.t, { icon: ne.h }), hotkey: ce.CtrlOrCmd + ce.Shift + "T".charCodeAt(0), onClick: (0, ae.O)().undo } : rt, f2 = { type: "common", title: t4("Open link from clipboard"), disabled: !a3, leftSlot: r2.createElement(Z.t, { icon: J.N }), onClick: () => {
            a3 ? (0, ae.O)().openLinkFromClipboard().catch(((e5) => {
              (0, p.yg)().error("<Menu>.getMenuItems(): mainMenuServiceProxy().openLinkFromClipboard() error", e5);
            })) : (0, p.yg)().debug("<MenuItem>.onClick: Invalid url in clipboard");
          } }, w2 = { type: "custom", focusable: false, hasHorizontalNavigation: true, children: r2.createElement("div", { className: "menu-item" }, r2.createElement(se.w, { size: "relative" })) }, k2 = { type: "common", title: (0, m.wb)() ? t4("Exit TradingView") : t4("Quit TradingView"), leftSlot: r2.createElement(Z.t, { icon: re.P }), hotkey: ce.CtrlOrCmd + ((0, m.iT)() ? "Q".charCodeAt(0) : ce.Shift + "Q".charCodeAt(0)), onClick: (0, ae.O)().exit }, T2 = e4 ? [nt, { type: "common", title: t4("Open Crash View"), onClick: (0, ae.O)().openCrashView }, { type: "common", title: t4("Open Tab Monitor"), onClick: (0, ae.O)().openTabMonitorView }] : [rt];
          return [s2, nt, d2, u3, g3, b3, y2, v2, f2, nt, ...h3, w2, nt, k2, ...T2];
        })({ ...i2, t: e3 })), i2.type === s.Tab && c2((function({ t: e4, tabId: t4, copyLink: n4, pinned: o4, isDetachTabVisible: a3, isTabTitleCustomizable: i3, canGoBack: l3, canGoForward: c3, isCloseOtherTabsVisible: s2, isCloseTabsToTheRightVisible: d2, isDebugMode: u3, hasShiftKey: m2, isLinkable: g3, tabLinkingState: h3, isChart: b3, isTabGroupsEnabled: v2, isTimeAndDateRangeSyncEnabled: f2 }) {
          const w2 = { type: "common", title: e4("Duplicate tab"), leftSlot: r2.createElement(Z.t, { icon: q.d }), hotkey: ce.CtrlOrCmd + "U".charCodeAt(0), onClick: () => {
            y().duplicateTabFromMenu(t4).catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().duplicateTabFromMenu() error", e5);
            }));
          } }, k2 = { type: "common", title: e4("Reload tab"), leftSlot: r2.createElement(Z.t, { icon: oe.H }), hotkey: ce.CtrlOrCmd + "R".charCodeAt(0), onClick: () => {
            y().reloadTabFromMenu(t4).catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().reloadTabFromMenu() error", e5);
            }));
          } }, T2 = n4 ? { type: "common", title: e4("Copy link"), leftSlot: r2.createElement(Z.t, { icon: J.N }), onClick: () => {
            y().copyLink(n4).catch(((e5) => {
              (0, p.yg)().error(`getTabMenuItems(): getWindowControl().copyLink(copyLink: ${n4}) error`, e5);
            }));
          } } : rt, C2 = { type: "common", title: e4(o4 ? "Unpin tab" : "Pin tab"), leftSlot: o4 ? r2.createElement(tt, null) : r2.createElement(Xe, null), onClick: () => {
            y().togglePinnedTabFromMenu(t4, !o4).catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().togglePinnedTabFromMenu() error", e5);
            }));
          } }, E2 = a3 ? { type: "common", title: e4("Detach tab"), leftSlot: r2.createElement(Z.t, { icon: ee.H }), onClick: () => {
            y().detachTabAction(t4).catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().detachTabAction() error", e5);
            }));
          } } : rt, x2 = i3 ? [nt, { type: "common", title: e4("Customize tab title..."), leftSlot: r2.createElement(Z.t, { icon: X.v }), onClick: () => {
            y().openTabSettings().catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().openTabSettings() error", e5);
            }));
          } }] : [rt], A2 = (function(e5, t5, n5, r3) {
            if (!n5 && !r3) return [];
            const o5 = n5 ? { type: "common", title: e5("Go back"), onClick: () => {
              y().goBackFromMenu(t5).catch(((e6) => {
                (0, p.yg)().error("getGoBackMenuItems(): getWindowControl().goBackFromMenu() error", e6);
              }));
            } } : rt, a4 = r3 ? { type: "common", title: e5("Go forward"), onClick: () => {
              y().goForwardFromMenu(t5).catch(((e6) => {
                (0, p.yg)().error("getGoBackMenuItems(): getWindowControl().goForwardFromMenu() error", e6);
              }));
            } } : rt;
            return [nt, o5, a4];
          })(e4, t4, l3, c3), S2 = it({ onGroupClick: () => {
            y().hideTabMenu().catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().hideTabMenu() error", e5);
            }));
          } }), M2 = v2 ? { type: "nested", title: e4("Move tab"), children: r2.createElement(r2.Fragment, null, S2.map(((e5, t5) => r2.createElement(H, { ...e5, key: t5 })))) } : rt, R2 = { type: "common", title: e4("Close"), hotkey: ce.CtrlOrCmd + "W".charCodeAt(0), onClick: () => {
            y().closeTabFromMenu(t4).catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().closeTabFromMenu() error", e5);
            }));
          } }, O2 = s2 ? { type: "common", title: e4("Close other tabs"), onClick: () => {
            y().closeOtherTabsFromMenu(t4).catch(((e5) => {
              (0, p.yg)().error(`getTabMenuItems(): getWindowControl().closeOtherTabsFromMenu(tabId: ${t4}) error`, e5);
            }));
          } } : rt, $2 = d2 ? { type: "common", title: e4("Close tabs to the right"), onClick: () => {
            y().closeTabsToTheRightFromMenu(t4).catch(((e5) => {
              (0, p.yg)().error(`getTabMenuItems(): getWindowControl().closeTabsToTheRightFromMenu(tabId: ${t4}) error`, e5);
            }));
          } } : rt, I2 = u3 || m2 ? { type: "common", title: e4("Developer tools"), onClick: () => {
            y().openTabDevTools(t4).catch(((e5) => {
              (0, p.yg)().error("getTabMenuItems(): getWindowControl().openTabDevTools() error", e5);
            }));
          } } : rt, F2 = u3 ? { type: "common", title: e4("Toggle debug backdrop"), onClick: () => {
            const e5 = "debug-window-backdrop", t5 = document.getElementById(e5);
            if (null !== t5) return void t5.remove();
            const n5 = document.createElement("div");
            n5.id = e5, n5.style.cssText = "position:fixed;inset:0;background:rgba(255,0,0,0.3);pointer-events:none;z-index:-1;", document.body.appendChild(n5);
          } } : rt, V2 = g3 && null !== h3 ? { type: "section", title: e4("Tab linking"), items: ot({ tabId: t4, tabLinkingState: h3, isChart: b3, isTimeAndDateRangeSyncEnabled: f2 }) } : rt;
          return [w2, k2, T2, C2, E2, ...x2, ...A2, nt, M2, R2, O2, $2, I2, F2, V2];
        })({ ...i2, t: e3 })));
      }), [i2, e3, o3]), !a2) return r2.createElement(r2.Fragment, null);
      const u2 = i2.type === s.Tab, g2 = (function(e4) {
        return e4.type === s.Tab ? e4.isInFullscreenOnWin ? { left: e4.position.x, top: e4.position.y } : { top: e4.menuOffsetY } : e4.isInFullscreenOnWin ? { margin: "35px 4px 0 0" } : {};
      })(i2), h2 = [(u2 && i2.submenuSide === d.Left) !== (0, m.Dd)() ? k.ZG : k.Yp], b2 = u2 ? `${i2.submenuSide}` : "";
      return r2.createElement("div", { className: `menu-container ${i2.type} ${b2}` }, r2.createElement("div", { ref: n3, style: g2 }, r2.createElement(w.o, { isOpen: o3, onClose: () => {
      }, anchored: { type: "element", at: n3 }, placementRules: u2 ? h2 : void 0, refToContentWrapperElement: t3, isRtl: (0, m.Dd)(), closeOnTab: false, focusFirstItemOnOpen: false, mobileBreakpoint: f.W0 }, l2.map(((e4, t4) => r2.createElement(H, { ...e4, key: t4 }))))));
    }, pt = () => {
      const { menuRef: e3, anchorMenuRef: t3, isReady: n3, isVisible: o3, rendererData: a2, close: i2 } = st();
      if (!o3) return r2.createElement(r2.Fragment, null);
      const l2 = it({ onGroupClick: i2 }), c2 = a2.isInFullscreenOnWin ? { margin: `${a2.position.y}px 0 0 ${a2.position.x}px` } : {};
      return r2.createElement("div", { className: `menu-container ${a2.type}` }, r2.createElement("div", { ref: t3, style: c2 }, r2.createElement(w.o, { isOpen: n3, onClose: () => {
      }, anchored: { type: "element", at: t3 }, refToContentWrapperElement: e3, isRtl: (0, m.Dd)(), closeOnTab: false, focusFirstItemOnOpen: false, mobileBreakpoint: f.W0 }, l2.map(((e4, t4) => r2.createElement(H, { ...e4, key: t4 }))))));
    };
    n2(14448), (function() {
      if (c) throw new Error("This initialization must be called from renderer process");
      (0, l.Ts)();
    })(), (0, m.oP)(u.A), a.f.initializeRpc(), u.A.on("languageChanged", (() => {
      (0, m.oP)(u.A);
    }));
    const gt = document.getElementById("root");
    if (gt) {
      gt.classList.remove("invisible-root");
      const e3 = (0, o2.H)(gt), t3 = b().type;
      e3.render(t3 === s.TabGroup ? r2.createElement(pt, null) : r2.createElement(mt, null));
    }
  }, 9639(e2, t2, n2) {
    function r2(e3) {
      return e3 ? e3.length ? e3.split("-")[0] : e3 : "";
    }
    n2.d(t2, { QD: () => r2 }), n2(51022), n2(21383);
  }, 61888(e2, t2, n2) {
    (0, n2(62340).iT)();
  }, 87894(e2, t2, n2) {
    n2.d(t2, { A: () => m });
    var r2 = n2(16928), o2 = n2(84157), a = n2(87574), i = n2(14381), l = n2(62020), c = n2(10284), s = n2(1820), d = n2(9691);
    let u;
    if (o2.ipcMain) {
      let p = function() {
        const e3 = {}, t3 = r2.join(o2.app.getAppPath(), "resources", "locales");
        for (const n3 of c.l.readDirSync(t3)) {
          const o3 = c.l.readFileSync(r2.join(t3, n3)), a2 = r2.parse(n3).name, i2 = (0, d.G)(o3);
          i2 && (e3[a2] = { translation: i2 });
        }
        return e3;
      };
      u = p(), o2.ipcMain.on(s.ox, ((e3) => {
        e3.returnValue = u;
      }));
    } else u = o2.ipcRenderer.sendSync(s.ox);
    a.Ay.use(i.A).use(l.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: u, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
    const m = a.Ay;
  }, 16309(e2, t2, n2) {
    n2.d(t2, { MY: () => l, v2: () => a.v });
    var r2 = n2(84157), o2 = n2(22259), a = (n2(7750), n2(87894), n2(68671)), i = n2(59954);
    function l() {
      return o2.f.provideProxy(i.W);
    }
    r2.ipcMain;
  }, 27298(e2, t2, n2) {
    n2.d(t2, { $: () => r2 });
    const r2 = "tvd:main-menu-service";
  }, 32812(e2, t2, n2) {
    n2.d(t2, { O: () => a });
    var r2 = n2(22259), o2 = n2(27298);
    function a() {
      return r2.f.provideProxy(o2.$);
    }
  }, 8750(e2, t2, n2) {
    var r2, o2, a, i;
    !(function(e3) {
      e3[e3.Normal = 0] = "Normal", e3[e3.Maximized = 1] = "Maximized", e3[e3.Minimized = 2] = "Minimized", e3[e3.Hidden = 3] = "Hidden", e3[e3.Fullscreen = 4] = "Fullscreen", e3[e3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(r2 || (r2 = {})), (function(e3) {
      e3.Basic = "basic", e3.Options = "options", e3.Credentials = "credentials", e3.SignIn = "sign-in", e3.Settings = "settings", e3.SaveChanges = "save-changes", e3.Welcome = "welcome";
    })(o2 || (o2 = {})), (function(e3) {
      e3.Show = "show", e3.Move = "move";
    })(a || (a = {})), (function(e3) {
      e3[e3.Basic = 0] = "Basic", e3[e3.ChartData = 1] = "ChartData";
    })(i || (i = {}));
  }, 33077(e2, t2, n2) {
    n2.d(t2, { bw: () => r2.b }), n2(42494);
    var r2 = n2(46699);
    n2(93100);
  }, 20850(e2, t2, n2) {
    n2.d(t2, { iT: () => r2.iT, wb: () => r2.wb });
    var r2 = n2(62340);
  }, 75739(e2, t2, n2) {
    n2.d(t2, { Dd: () => i.Dd, N$: () => a.N$, iT: () => o2.iT, oP: () => i.oP, uY: () => r2.uY, wb: () => o2.wb });
    var r2 = n2(92763), o2 = n2(20850), a = n2(95398), i = n2(78449);
    n2(51022), n2(16793), n2(86216);
  }, 95398(e2, t2, n2) {
    var r2;
    n2.d(t2, { N$: () => r2 }), n2(55701), n2(41939), (function(e3) {
      e3.Enter = "Enter", e3.Space = "Space", e3.Tab = "Tab", e3.ArrowUp = "ArrowUp", e3.ArrowDown = "ArrowDown", e3.Escape = "Escape";
    })(r2 || (r2 = {}));
  }, 78449(e2, t2, n2) {
    n2.d(t2, { Dd: () => r2, oP: () => o2 });
    const r2 = () => "rtl" === window.document.dir;
    function o2(e3) {
      document.dir = (function(e4) {
        return e4.dir(e4.language.split("_")[0]);
      })(e3);
    }
  }, 62340(e2, t2, n2) {
    n2.d(t2, { iT: () => r2, wb: () => o2 });
    const r2 = () => "darwin" === process.platform, o2 = () => "win32" === process.platform;
  }, 51022(e2, t2, n2) {
    n2(87016);
    var r2 = n2(19405);
    const o2 = "TARGET_TVD_HOST", a = "https://www.tradingview.com/", i = (0, r2.R)((() => {
      const e3 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
      let t3 = a;
      return o2 in process.env && (t3 = process.env[o2] ?? a), null !== new RegExp(e3, "i").exec(t3) ? e3 : (t3.endsWith("/") && (t3 = t3?.substring(0, t3.length - 1)), t3.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
    }));
    function l(e3, t3 = true) {
      const n3 = (e4) => {
        let n4 = e4.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
        return n4.match(/\w+(\/\((\.\*\)))/gi) && (n4 = n4.replace(/\/\((\.\*\))/gi, "(/(.*))?")), n4 = n4.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, i()), n4 = `^${n4}${t3 ? "$" : ""}`, new RegExp(n4, "i");
      };
      return "string" == typeof e3 ? n3(e3) : e3.map(n3);
    }
    const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", s = "${TV}/(\\w|-)*screener/*", d = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/";
    (0, r2.R)((() => l(s))), (0, r2.R)((() => l("${TV}/", true))), (0, r2.R)((() => l("${TV}/chart/", true))), (0, r2.R)((() => l(c))), (0, r2.R)((() => l("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), (0, r2.R)((() => l(d, true))), (0, r2.R)((() => l("${TV}/screener/*"))), (0, r2.R)((() => l("${TV}/heatmap/*"))), (0, r2.R)((() => l("${TV}/community/*"))), (0, r2.R)((() => l("${TV}/pine-script-docs/en/v5/Introduction.html"))), (0, r2.R)((() => l("${TV}/pine-script-reference/v5/"))), (0, r2.R)((() => l("${TV}/x/*"))), (0, r2.R)((() => l("${TV}/*"))), (0, r2.R)((() => l("${TV}/account-recovery/*"))), (0, r2.R)((() => l("${TV}/chat/*"))), (0, r2.R)((() => /:\/\/s3\..+\/snapshots\//i)), (0, r2.R)((() => l("${TV}/pine/*"))), (0, r2.R)((() => l("${TV}/markets/*"))), (0, r2.R)((() => l("${TV}/markets/*/news/"))), (0, r2.R)((() => l("${TV}/markets/stocks-*/*"))), (0, r2.R)((() => l("${TV}/markets/world-economy/*"))), (0, r2.R)((() => l("${TV}/u/TradingView/"))), (0, r2.R)((() => l("${TV}/news/*"))), (0, r2.R)((() => l("${TV}/news/"))), (0, r2.R)((() => l("${TV}/news/\\?market=*"))), (0, r2.R)((() => l("${TV}/news/\\?market=topstories"))), (0, r2.R)((() => l("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), (0, r2.R)((() => l("${TV}/support/*"))), (0, r2.R)((() => l("https://status.tradingview.com/", true))), (0, r2.R)((() => l("${TV}/ideas/*"))), (0, r2.R)((() => l("${TV}/scripts/*"))), (0, r2.R)((() => l(["${TV}/", "${TV}/ideas/*", d, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), (0, r2.R)((() => l("${TV}/markets/bonds/*"))), (0, r2.R)((() => l([c, s, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"])));
  }, 84157(e2) {
    e2.exports = require("electron");
  }, 79896(e2) {
    e2.exports = require("fs");
  }, 16928(e2) {
    e2.exports = require("path");
  }, 87016(e2) {
    e2.exports = require("url");
  } }, n = {};
  function r(e2) {
    var o2 = n[e2];
    if (void 0 !== o2) return o2.exports;
    var a = n[e2] = { id: e2, exports: {} };
    return t[e2].call(a.exports, a, a.exports, r), a.exports;
  }
  r.m = t, e = [], r.O = (t2, n2, o2, a) => {
    if (!n2) {
      var i = 1 / 0;
      for (d = 0; d < e.length; d++) {
        for (var [n2, o2, a] = e[d], l = true, c = 0; c < n2.length; c++) (false & a || i >= a) && Object.keys(r.O).every(((e2) => r.O[e2](n2[c]))) ? n2.splice(c--, 1) : (l = false, a < i && (i = a));
        if (l) {
          e.splice(d--, 1);
          var s = o2();
          void 0 !== s && (t2 = s);
        }
      }
      return t2;
    }
    a = a || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > a; d--) e[d] = e[d - 1];
    e[d] = [n2, o2, a];
  }, r.n = (e2) => {
    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return r.d(t2, { a: t2 }), t2;
  }, r.d = (e2, t2) => {
    for (var n2 in t2) r.o(t2, n2) && !r.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
  }, r.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, (() => {
    var e2;
    r.g.importScripts && (e2 = r.g.location + "");
    var t2 = r.g.document;
    if (!e2 && t2 && (t2.currentScript && "SCRIPT" === t2.currentScript.tagName.toUpperCase() && (e2 = t2.currentScript.src), !e2)) {
      var n2 = t2.getElementsByTagName("script");
      if (n2.length) for (var o2 = n2.length - 1; o2 > -1 && (!e2 || !/^http(s?):/.test(e2)); ) e2 = n2[o2--].src;
    }
    if (!e2) throw new Error("Automatic publicPath is not supported in this browser");
    e2 = e2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = e2 + "../";
  })(), (() => {
    r.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var e2 = { 1854: 0 };
    r.O.j = (t3) => 0 === e2[t3];
    var t2 = (t3, n3) => {
      var o2, a, [i, l, c] = n3, s = 0;
      if (i.some(((t4) => 0 !== e2[t4]))) {
        for (o2 in l) r.o(l, o2) && (r.m[o2] = l[o2]);
        if (c) var d = c(r);
      }
      for (t3 && t3(n3); s < i.length; s++) a = i[s], r.o(e2, a) && e2[a] && e2[a][0](), e2[a] = 0;
      return r.O(d);
    }, n2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    n2.forEach(t2.bind(null, 0)), n2.push = t2.bind(null, n2.push.bind(n2));
  })(), r.nc = void 0;
  var o = r.O(void 0, [3703, 2252, 369, 4870, 1566, 9883, 2353, 2210, 6595, 3409, 1334, 8374], (() => r(39410)));
  o = r.O(o);
})();
