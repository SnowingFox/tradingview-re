(() => {
  "use strict";
  var t, e, n, r = { 10919(t2, e2, n2) {
    n2.d(e2, { A: () => s });
    var r2 = n2(30050), i2 = n2.n(r2), a2 = n2(77259), o2 = n2.n(a2)()(i2());
    o2.push([t2.id, `.dialog {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: var(--color-container-fill-tertiary-inverse);

	&.basic {
		height: calc(100vh - 80px);
		padding: 40px;
	}

	&.options {
		height: calc(100vh - 38px);
		padding: 22px 20px 16px;
	}

	&.credentials {
		height: calc(100vh - 40px);
		padding: 24px 20px 16px;
	}

	&.settings {
		height: 100vh;
		padding: 0;

		& .dialog-title {
			margin: 22px 20px;
		}
	}

	&.padding-small {
		padding: 20px;
	}
}

[data-theme="dark"] .dialog.tokyo-night {
	filter: url(#tokyo-filter_svg__filter);
}

.dialog-title {
	color: var(--color-content-primary-neutral-bold);
	margin: 0 0 16px;
}

.dialog-text {
	color: var(--color-content-primary-neutral-bold);
	margin: 0 0 24px;
}

.dialog-buttons {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 12px;
}

.dialog-close-button {
	position: absolute;

	/* basic dialog */
	.dialog.basic > & {
		top: 16px;
	}

	[dir='ltr'] .dialog.basic > & {
		right: 16px;
	}

	[dir='rtl'] .dialog.basic > & {
		left: 16px;
	}

	/* options dialog */
	.dialog.options > & {
		top: 26px;
	}

	[dir='ltr'] .dialog.options > & {
		right: 24px;
	}

	[dir='rtl'] .dialog.options > & {
		left: 24px;
	}

	/* credentials dialog */
	.dialog.credentials > & {
		top: 28px;
	}

	[dir='ltr'] .dialog.credentials > & {
		right: 28px;
	}

	[dir='rtl'] .dialog.credentials > & {
		left: 28px;
	}

	/* settings dialog */
	.dialog.settings > & {
		top: 28px;
	}

	[dir='ltr'] .dialog.settings > & {
		right: 26px;
	}

	[dir='rtl'] .dialog.settings > & {
		left: 26px;
	}

	/* save changes dialog */
	.dialog.save-changes > & {
		top: 16px;
	}

	[dir='ltr'] .dialog.save-changes > & {
		right: 16px;
	}

	[dir='rtl'] .dialog.save-changes > & {
		left: 16px;
	}
}

.dialog-window-separator {
	width: 100vw !important;

	[dir='ltr'] & {
		margin-left: calc((100% - 100vw) / 2) !important;
	}

	[dir='rtl'] & {
		margin-right: calc((100% - 100vw) / 2) !important;
	}
}
`, ""]);
    const s = o2;
  }, 42952(t2, e2, n2) {
    n2.d(e2, { Mz: () => c, O2: () => d, yo: () => p });
    var r2 = n2(84157), i2 = n2(22259), a2 = n2(7750), o2 = n2(1820), s = n2(9691);
    const l = { windowControl: null, dialogControl: null, toastWindowHandler: null };
    function c() {
      const t3 = (0, s.G)(new URLSearchParams(window.location.search).get("rendererInitialData") ?? "{}");
      if (!t3) throw new Error("getRendererInitialData() jsonParse error");
      return t3;
    }
    function d() {
      return l.dialogControl = (function(t3, e3, n3) {
        let r3 = window?.remoteServiceInstanceId ?? c().remoteServiceInstanceId;
        if (n3 && (r3 = n3), !e3 || r3 !== window?.initialRemoteServiceInstanceId) {
          (0, a2.yg)().debug(`[Renderer] initializeIpcProxyForInstance ${t3} id: ${r3}; Old id ${window?.initialRemoteServiceInstanceId}`);
          const e4 = i2.f.provideProxy(r3);
          return window.initialRemoteServiceInstanceId = r3, e4;
        }
        return e3;
      })("dialogControl", l.dialogControl), l.dialogControl;
    }
    function p() {
      r2.ipcRenderer.send(o2.oh);
    }
  }, 65238(t2, e2, n2) {
    n2.d(e2, { n: () => M });
    var r2, i2 = n2(79474), a2 = n2(48088), o2 = n2(41493), s = n2(8750), l = n2(12129), c = n2(7750), d = n2(62020), p = n2(18865), u = n2(1566), g = n2(45922), h = n2(20369), m = n2(22259), f = n2(53524), y = n2(16309), v = n2(59587), b = n2(75739), w = n2(42952);
    function T() {
      return T = Object.assign ? Object.assign.bind() : function(t3) {
        for (var e3 = 1; e3 < arguments.length; e3++) {
          var n3 = arguments[e3];
          for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (t3[r3] = n3[r3]);
        }
        return t3;
      }, T.apply(null, arguments);
    }
    const x = function(t3) {
      return i2.createElement("svg", T({ xmlns: "http://www.w3.org/2000/svg" }, t3), r2 || (r2 = i2.createElement("defs", null, i2.createElement("filter", { id: "tokyo-filter_svg__filter" }, i2.createElement("feComponentTransfer", { in: "SourceGraphic" }, i2.createElement("feFuncR", { type: "linear", slope: 1.9, intercept: -0.3 }), i2.createElement("feFuncG", { type: "linear", slope: 1.9, intercept: -0.3 }), i2.createElement("feFuncB", { type: "linear", slope: 1.9, intercept: -0.3 })), i2.createElement("feGaussianBlur", { stdDeviation: 15 }), i2.createElement("feComposite", { in2: "SourceGraphic", operator: "lighter" }), i2.createElement("feComponentTransfer", null, i2.createElement("feFuncR", { type: "linear", slope: 1.35, intercept: -0.1 }), i2.createElement("feFuncG", { type: "linear", slope: 1.35, intercept: -0.1 }), i2.createElement("feFuncB", { type: "linear", slope: 1.35, intercept: -0.1 }))))));
    };
    var k = n2(72539), $ = n2.n(k), R = n2(48560), E = n2.n(R), S = n2(57148), V = n2.n(S), C = n2(60251), N = n2.n(C), z = n2(81263), I = n2.n(z), D = n2(50892), O = n2.n(D), j = n2(10919), A = {};
    A.styleTagTransform = O(), A.setAttributes = N(), A.insert = V().bind(null, "head"), A.domAPI = E(), A.insertStyleElement = I(), $()(j.A, A), j.A && j.A.locals && j.A.locals;
    var P = function(t3, e3, n3, r3) {
      var i3, a3 = arguments.length, o3 = a3 < 3 ? e3 : null === r3 ? r3 = Object.getOwnPropertyDescriptor(e3, n3) : r3;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o3 = Reflect.decorate(t3, e3, n3, r3);
      else for (var s2 = t3.length - 1; s2 >= 0; s2--) (i3 = t3[s2]) && (o3 = (a3 < 3 ? i3(o3) : a3 > 3 ? i3(e3, n3, o3) : i3(e3, n3)) || o3);
      return a3 > 3 && o3 && Object.defineProperty(e3, n3, o3), o3;
    };
    m.f.initializeRpc();
    let F = class extends i2.Component {
      dataChangeSubscription = null;
      dialogInput;
      tokyoNightSubscription = null;
      state = { hasTokyoNight: false };
      constructor(t3) {
        super(t3), this.keyDownHandler = this.keyDownHandler.bind(this), this.unsubscribeEvents = this.unsubscribeEvents.bind(this);
      }
      componentDidMount() {
        (0, y.eq)(document.documentElement), (0, w.yo)();
        const { dialogData: t3 } = (0, w.Mz)();
        this.setState({ data: t3 });
        const e3 = M.getRenderer(t3.type);
        this.setState({ renderer: e3 }), (0, v.YZ)().getTokyoNightStatus().then(((t4) => {
          this.setState({ hasTokyoNight: t4 });
        })).catch(((t4) => {
          (0, c.yg)().error("<DialogWindow>.componentDidMount(): windowServiceIpc().getTokyoNightStatus() error", t4);
        })), this.tokyoNightSubscription = (0, v.YZ)().tokyoNightSubject.subscribe(((t4) => {
          this.setState({ hasTokyoNight: t4 });
        })), addEventListener("keydown", this.keyDownHandler), window?.addEventListener("beforeunload", this.unsubscribeEvents);
      }
      render() {
        if (void 0 === this.state.data) return i2.createElement(i2.Fragment, null);
        if ([s.hs.SaveChanges, s.hs.Welcome].includes(this.state.data.type)) return this.renderer();
        const t3 = this.state.data.type === s.hs.Settings;
        return i2.createElement(i2.Fragment, null, this.state.hasTokyoNight && i2.createElement("div", { style: { display: "none" } }, i2.createElement(x, null)), i2.createElement("div", { className: `dialog ${this.state.data.type ?? ""} ${this.state.hasTokyoNight ? "tokyo-night" : ""}` }, i2.createElement(h.o, { tag: "h1", name: "typography-accent-20px-semibold", className: "dialog-title" }, t3 ? this.props.t("Settings") : this.state.data.title ?? ""), this.state.data.type === s.hs.Options && i2.createElement(g.c, { orientation: "horizontal", type: "primary", size: "xsmall", className: "dialog-window-separator" }), i2.createElement("div", { className: "dialog-content" }, this.state.data.text && i2.createElement(h.o, { tag: "p", name: "typography-regular-16px", className: "dialog-text" }, this.state.data.text), this.renderer()), [s.hs.Credentials, s.hs.Options].includes(this.state.data.type) && i2.createElement(g.c, { orientation: "horizontal", type: "primary", size: "xsmall", className: "dialog-window-separator" }), this.state.data.buttons && i2.createElement("div", { className: "dialog-buttons" }, this.state.data.buttons.map((({ text: t4, color: e3, variant: n3, id: r3 }, a3) => i2.createElement(u.SX, { key: r3, onClick: () => this.submit(r3, a3), size: "small", color: e3, variant: n3 }, t4)))), i2.createElement("div", { className: "dialog-close-button" }, i2.createElement(p.J, { "aria-label": "close-dialog-window", onClick: () => this.close("cross"), size: "medium", tabIndex: !t3 || (0, b.iT)() ? -1 : 0 }))));
      }
      close(t3) {
        (0, w.O2)().closeDialogWindow(t3).catch(((t4) => {
          (0, c.yg)().error("<DialogWindow>.close(): getDialogControl().closeDialogWindow() error", t4);
        }));
      }
      keyDownHandler(t3) {
        if (t3.code === b.N$.Escape) {
          if (this.state.data?.type === s.hs.SaveChanges || this.state.data?.type === s.hs.Welcome && !this.state.data.closable) return;
          this.close("esc");
        }
      }
      unsubscribeEvents() {
        removeEventListener("keydown", this.keyDownHandler), this.tokyoNightSubscription && (this.tokyoNightSubscription.unsubscribe(), this.tokyoNightSubscription = null), this.dataChangeSubscription && (this.dataChangeSubscription.unsubscribe(), this.dataChangeSubscription = null), window?.removeEventListener("beforeunload", this.unsubscribeEvents);
      }
      submit(t3, e3) {
        const n3 = { dialogAction: t3, button: e3, input: this.dialogInput };
        (0, w.O2)().submitInput(n3).catch(((t4) => {
          (0, c.yg)().error("<DialogWindow>.submit(): getDialogControl().submitInput() error", t4);
        }));
      }
      onInputChange(t3) {
        this.dialogInput = t3;
      }
      renderer() {
        return this.state.renderer && this.state.data ? this.state.renderer({ inputChange: (t3) => this.onInputChange(t3), data: this.state.data }) : i2.createElement(i2.Fragment, null);
      }
    };
    P([f.F], F.prototype, "close", null), P([f.F], F.prototype, "keyDownHandler", null), P([f.F], F.prototype, "submit", null), F = P([(0, f.W)("DialogWindow")], F);
    const _ = F, L = (0, d.CI)()(_);
    n2(14448), (0, o2.F$)(), (0, l.z)();
    const M = new class {
      renderers = /* @__PURE__ */ new Map();
      registerLazyRenderer(t3, e3) {
        this.renderers.set(t3, ((t4) => {
          const n3 = e3;
          return i2.createElement(n3, { ...t4 });
        }));
      }
      getRenderer(t3) {
        const e3 = this.renderers.get(t3);
        return e3 || (0, c.yg)().error(`Renderer for type ${t3} not registered, check renderers configuration`), e3;
      }
    }();
    M.registerLazyRenderer(s.hs.Options, i2.lazy((() => n2.e(9771).then(n2.bind(n2, 69771))))), M.registerLazyRenderer(s.hs.Credentials, i2.lazy((() => Promise.all([n2.e(2312), n2.e(3642)]).then(n2.bind(n2, 50473))))), M.registerLazyRenderer(s.hs.Settings, i2.lazy((() => Promise.all([n2.e(156), n2.e(2312), n2.e(2353), n2.e(9810), n2.e(8374), n2.e(6787)]).then(n2.bind(n2, 86787))))), M.registerLazyRenderer(s.hs.SaveChanges, i2.lazy((() => n2.e(7396).then(n2.bind(n2, 47396))))), M.registerLazyRenderer(s.hs.Welcome, i2.lazy((() => Promise.all([n2.e(9247), n2.e(8374), n2.e(3739)]).then(n2.bind(n2, 4019)))));
    const W = document.getElementById("root");
    W && (0, a2.H)(W).render(i2.createElement(i2.Suspense, { fallback: false }, i2.createElement((function() {
      return i2.createElement(L, null);
    }), null)));
  }, 9639(t2, e2, n2) {
    function r2(t3) {
      return t3 ? t3.length ? t3.split("-")[0] : t3 : "";
    }
    n2.d(e2, { QD: () => r2 }), n2(51022), n2(21383);
  }, 41493(t2, e2, n2) {
    n2.d(e2, { F$: () => r2.F, NA: () => i2.NA, ZQ: () => i2.ZQ });
    var r2 = n2(30190), i2 = (n2(94231), n2(86434));
  }, 61888(t2, e2, n2) {
    (0, n2(62340).iT)();
  }, 68671(t2, e2, n2) {
    n2.d(e2, { v: () => a2 });
    var r2 = n2(87574), i2 = n2(87894);
    const a2 = async (t3) => {
      i2.A.language !== t3 && await r2.Ay.changeLanguage(t3);
    };
  }, 87894(t2, e2, n2) {
    n2.d(e2, { A: () => u });
    var r2 = n2(16928), i2 = n2(84157), a2 = n2(87574), o2 = n2(14381), s = n2(62020), l = n2(10284), c = n2(1820), d = n2(9691);
    let p;
    if (i2.ipcMain) {
      let g = function() {
        const t3 = {}, e3 = r2.join(i2.app.getAppPath(), "resources", "locales");
        for (const n3 of l.l.readDirSync(e3)) {
          const i3 = l.l.readFileSync(r2.join(e3, n3)), a3 = r2.parse(n3).name, o3 = (0, d.G)(i3);
          o3 && (t3[a3] = { translation: o3 });
        }
        return t3;
      };
      p = g(), i2.ipcMain.on(c.ox, ((t3) => {
        t3.returnValue = p;
      }));
    } else p = i2.ipcRenderer.sendSync(c.ox);
    a2.Ay.use(o2.A).use(s.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: p, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
    const u = a2.Ay;
  }, 32812(t2, e2, n2) {
    n2(22259);
  }, 59587(t2, e2, n2) {
    n2.d(e2, { YZ: () => a2 });
    var r2 = n2(22259), i2 = n2(20802);
    function a2() {
      return r2.f.provideProxy(i2.k);
    }
  }, 8750(t2, e2, n2) {
    function r2(t3) {
      let e3 = { width: 350, height: 220 };
      const n3 = (/* @__PURE__ */ new Map([["br", { width: 365 }], ["de_DE", { width: 445 }], ["es", { width: 430 }], ["fr", { width: 395, height: 248 }], ["id", { width: 360 }], ["ms_MY", { width: 360 }], ["pl", { width: 358 }], ["ru", { width: 400 }], ["zh_CN", { width: 360, height: 196 }], ["zh_TW", { width: 360, height: 196 }]])).get(t3);
      return n3 && (e3 = { ...e3, ...n3 }), e3;
    }
    var i2, a2, o2, s;
    n2.d(e2, { Jn: () => r2, hs: () => a2, y7: () => i2 }), (function(t3) {
      t3[t3.Normal = 0] = "Normal", t3[t3.Maximized = 1] = "Maximized", t3[t3.Minimized = 2] = "Minimized", t3[t3.Hidden = 3] = "Hidden", t3[t3.Fullscreen = 4] = "Fullscreen", t3[t3.FullscreenWithPanel = 5] = "FullscreenWithPanel";
    })(i2 || (i2 = {})), (function(t3) {
      t3.Basic = "basic", t3.Options = "options", t3.Credentials = "credentials", t3.SignIn = "sign-in", t3.Settings = "settings", t3.SaveChanges = "save-changes", t3.Welcome = "welcome";
    })(a2 || (a2 = {})), (function(t3) {
      t3.Show = "show", t3.Move = "move";
    })(o2 || (o2 = {})), (function(t3) {
      t3[t3.Basic = 0] = "Basic", t3[t3.ChartData = 1] = "ChartData";
    })(s || (s = {}));
  }, 1820(t2, e2, n2) {
    n2.d(e2, { oh: () => i2, ox: () => r2 });
    const r2 = "tvd:locale-get-translations", i2 = "tvd:common-view-ready";
  }, 33077(t2, e2, n2) {
    n2.d(e2, { bw: () => r2.b }), n2(42494);
    var r2 = n2(46699);
    n2(93100);
  }, 92763(t2, e2, n2) {
    n2.d(e2, { uY: () => i2 }), n2(7750);
    var r2 = n2(33077);
    function i2(t3) {
      t3.catch(((t4) => {
        const e3 = (0, r2.bw)(t4);
        console.warn(`Ignoring promise, but error: ${e3}`), console.warn(t4.stack);
      }));
    }
  }, 20850(t2, e2, n2) {
    n2.d(e2, { iT: () => r2.iT, j9: () => r2.j9 });
    var r2 = n2(62340);
  }, 75739(t2, e2, n2) {
    n2.d(e2, { Dd: () => o2.Dd, HL: () => o2.HL, N$: () => a2.N$, iT: () => i2.iT, j9: () => i2.j9, uY: () => r2.uY });
    var r2 = n2(92763), i2 = n2(20850), a2 = n2(95398), o2 = n2(78449);
    n2(51022), n2(16793), n2(86216);
  }, 62340(t2, e2, n2) {
    n2.d(e2, { iT: () => r2, j9: () => i2 });
    const r2 = () => "darwin" === process.platform, i2 = () => "linux" === process.platform;
  }, 51022(t2, e2, n2) {
    n2(87016);
    var r2 = n2(19405);
    const i2 = "TARGET_TVD_HOST", a2 = "https://www.tradingview.com/", o2 = (0, r2.R)((() => {
      const t3 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
      let e3 = a2;
      return i2 in process.env && (e3 = process.env[i2] ?? a2), null !== new RegExp(t3, "i").exec(e3) ? t3 : (e3.endsWith("/") && (e3 = e3?.substring(0, e3.length - 1)), e3.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
    }));
    function s(t3, e3 = true) {
      const n3 = (t4) => {
        let n4 = t4.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
        return n4.match(/\w+(\/\((\.\*\)))/gi) && (n4 = n4.replace(/\/\((\.\*\))/gi, "(/(.*))?")), n4 = n4.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, o2()), n4 = `^${n4}${e3 ? "$" : ""}`, new RegExp(n4, "i");
      };
      return "string" == typeof t3 ? n3(t3) : t3.map(n3);
    }
    const l = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", c = "${TV}/(\\w|-)*screener/*", d = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/";
    (0, r2.R)((() => s(c))), (0, r2.R)((() => s("${TV}/", true))), (0, r2.R)((() => s("${TV}/chart/", true))), (0, r2.R)((() => s(l))), (0, r2.R)((() => s("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), (0, r2.R)((() => s(d, true))), (0, r2.R)((() => s("${TV}/screener/*"))), (0, r2.R)((() => s("${TV}/heatmap/*"))), (0, r2.R)((() => s("${TV}/community/*"))), (0, r2.R)((() => s("${TV}/pine-script-docs/en/v5/Introduction.html"))), (0, r2.R)((() => s("${TV}/pine-script-reference/v5/"))), (0, r2.R)((() => s("${TV}/x/*"))), (0, r2.R)((() => s("${TV}/*"))), (0, r2.R)((() => s("${TV}/account-recovery/*"))), (0, r2.R)((() => s("${TV}/chat/*"))), (0, r2.R)((() => /:\/\/s3\..+\/snapshots\//i)), (0, r2.R)((() => s("${TV}/pine/*"))), (0, r2.R)((() => s("${TV}/markets/*"))), (0, r2.R)((() => s("${TV}/markets/*/news/"))), (0, r2.R)((() => s("${TV}/markets/stocks-*/*"))), (0, r2.R)((() => s("${TV}/markets/world-economy/*"))), (0, r2.R)((() => s("${TV}/u/TradingView/"))), (0, r2.R)((() => s("${TV}/news/*"))), (0, r2.R)((() => s("${TV}/news/"))), (0, r2.R)((() => s("${TV}/news/\\?market=*"))), (0, r2.R)((() => s("${TV}/news/\\?market=topstories"))), (0, r2.R)((() => s("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), (0, r2.R)((() => s("${TV}/support/*"))), (0, r2.R)((() => s("https://status.tradingview.com/", true))), (0, r2.R)((() => s("${TV}/ideas/*"))), (0, r2.R)((() => s("${TV}/scripts/*"))), (0, r2.R)((() => s(["${TV}/", "${TV}/ideas/*", d, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), (0, r2.R)((() => s("${TV}/markets/bonds/*"))), (0, r2.R)((() => s([l, c, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"])));
  }, 84157(t2) {
    t2.exports = require("electron");
  }, 79896(t2) {
    t2.exports = require("fs");
  }, 16928(t2) {
    t2.exports = require("path");
  }, 87016(t2) {
    t2.exports = require("url");
  } }, i = {};
  function a(t2) {
    var e2 = i[t2];
    if (void 0 !== e2) return e2.exports;
    var n2 = i[t2] = { id: t2, exports: {} };
    return r[t2].call(n2.exports, n2, n2.exports, a), n2.exports;
  }
  a.m = r, t = [], a.O = (e2, n2, r2, i2) => {
    if (!n2) {
      var o2 = 1 / 0;
      for (d = 0; d < t.length; d++) {
        for (var [n2, r2, i2] = t[d], s = true, l = 0; l < n2.length; l++) (false & i2 || o2 >= i2) && Object.keys(a.O).every(((t2) => a.O[t2](n2[l]))) ? n2.splice(l--, 1) : (s = false, i2 < o2 && (o2 = i2));
        if (s) {
          t.splice(d--, 1);
          var c = r2();
          void 0 !== c && (e2 = c);
        }
      }
      return e2;
    }
    i2 = i2 || 0;
    for (var d = t.length; d > 0 && t[d - 1][2] > i2; d--) t[d] = t[d - 1];
    t[d] = [n2, r2, i2];
  }, a.n = (t2) => {
    var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
    return a.d(e2, { a: e2 }), e2;
  }, a.d = (t2, e2) => {
    for (var n2 in e2) a.o(e2, n2) && !a.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
  }, a.f = {}, a.e = (t2) => Promise.all(Object.keys(a.f).reduce(((e2, n2) => (a.f[n2](t2, e2), e2)), [])), a.u = (t2) => t2 + ".js", a.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window) return window;
    }
  })(), a.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), e = {}, n = "tradingview-desktop:", a.l = (t2, r2, i2, o2) => {
    if (e[t2]) e[t2].push(r2);
    else {
      var s, l;
      if (void 0 !== i2) for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
        var p = c[d];
        if (p.getAttribute("src") == t2 || p.getAttribute("data-webpack") == n + i2) {
          s = p;
          break;
        }
      }
      s || (l = true, (s = document.createElement("script")).charset = "utf-8", a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", n + i2), s.src = t2), e[t2] = [r2];
      var u = (n2, r3) => {
        s.onerror = s.onload = null, clearTimeout(g);
        var i3 = e[t2];
        if (delete e[t2], s.parentNode && s.parentNode.removeChild(s), i3 && i3.forEach(((t3) => t3(r3))), n2) return n2(r3);
      }, g = setTimeout(u.bind(null, void 0, { type: "timeout", target: s }), 12e4);
      s.onerror = u.bind(null, s.onerror), s.onload = u.bind(null, s.onload), l && document.head.appendChild(s);
    }
  }, a.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, (() => {
    var t2;
    a.g.importScripts && (t2 = a.g.location + "");
    var e2 = a.g.document;
    if (!t2 && e2 && (e2.currentScript && "SCRIPT" === e2.currentScript.tagName.toUpperCase() && (t2 = e2.currentScript.src), !t2)) {
      var n2 = e2.getElementsByTagName("script");
      if (n2.length) for (var r2 = n2.length - 1; r2 > -1 && (!t2 || !/^http(s?):/.test(t2)); ) t2 = n2[r2--].src;
    }
    if (!t2) throw new Error("Automatic publicPath is not supported in this browser");
    t2 = t2.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = t2 + "../";
  })(), (() => {
    a.b = "undefined" != typeof document && document.baseURI || self.location.href;
    var t2 = { 8976: 0 };
    a.f.j = (e3, n3) => {
      var r2 = a.o(t2, e3) ? t2[e3] : void 0;
      if (0 !== r2) if (r2) n3.push(r2[2]);
      else {
        var i2 = new Promise(((n4, i3) => r2 = t2[e3] = [n4, i3]));
        n3.push(r2[2] = i2);
        var o2 = a.p + a.u(e3), s = new Error();
        a.l(o2, ((n4) => {
          if (a.o(t2, e3) && (0 !== (r2 = t2[e3]) && (t2[e3] = void 0), r2)) {
            var i3 = n4 && ("load" === n4.type ? "missing" : n4.type), o3 = n4 && n4.target && n4.target.src;
            s.message = "Loading chunk " + e3 + " failed.\n(" + i3 + ": " + o3 + ")", s.name = "ChunkLoadError", s.type = i3, s.request = o3, r2[1](s);
          }
        }), "chunk-" + e3, e3);
      }
    }, a.O.j = (e3) => 0 === t2[e3];
    var e2 = (e3, n3) => {
      var r2, i2, [o2, s, l] = n3, c = 0;
      if (o2.some(((e4) => 0 !== t2[e4]))) {
        for (r2 in s) a.o(s, r2) && (a.m[r2] = s[r2]);
        if (l) var d = l(a);
      }
      for (e3 && e3(n3); c < o2.length; c++) i2 = o2[c], a.o(t2, i2) && t2[i2] && t2[i2][0](), t2[i2] = 0;
      return a.O(d);
    }, n2 = global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || [];
    n2.forEach(e2.bind(null, 0)), n2.push = e2.bind(null, n2.push.bind(n2));
  })(), a.nc = void 0;
  var o = a.O(void 0, [3703, 2252, 369, 4870, 1566, 9883, 8775, 3409, 292], (() => a(65238)));
  o = a.O(o);
})();
