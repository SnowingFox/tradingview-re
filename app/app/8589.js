"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[8589], { 10375(e, n, t) {
  t.d(n, { A: () => o });
  var r = t(30050), s = t.n(r), a = t(77259), i = t.n(a)()(s());
  i.push([e.id, ".spinner-container {\n	position: absolute;\n	top: 50%;\n	left: 50%;\n	width: 64px;\n	height: 64px;\n	transform: translate(-50%, -50%);  \n}\n", ""]);
  const o = i;
}, 16285(e, n, t) {
  var r = t(72539), s = t.n(r), a = t(48560), i = t.n(a), o = t(57148), c = t.n(o), l = t(60251), d = t.n(l), p = t(81263), u = t.n(p), T = t(50892), $ = t.n(T), V = t(10375), m = {};
  m.styleTagTransform = $(), m.setAttributes = d(), m.insert = c().bind(null, "head"), m.domAPI = i(), m.insertStyleElement = u(), s()(V.A, m), V.A && V.A.locals && V.A.locals;
}, 23704(e, n, t) {
  t.d(n, { s: () => i });
  var r = t(79474), s = t(62020), a = t(16309);
  function i(e2) {
    const n2 = (0, s.Bd)();
    return (0, r.useEffect)((() => {
      (0, a.eq)(e2);
    }), [e2]), n2;
  }
}, 36970(e, n, t) {
  t.d(n, { $: () => s });
  var r = t(79474);
  function s(e2, n2) {
    (0, r.useEffect)((() => {
      document.title = n2, e2.on("languageChanged", (() => {
        document.title = n2;
      }));
    }), [e2, n2]);
  }
}, 12329(e, n, t) {
  t.d(n, { J: () => s });
  var r = t(79474);
  function s(e2, n2, t2 = []) {
    (0, r.useEffect)((() => {
      if (!e2) return;
      let t3 = e2.subscribe(n2);
      const r2 = () => {
        t3?.unsubscribe(), t3 = null;
      };
      return window.addEventListener("beforeunload", r2), () => {
        window.removeEventListener("beforeunload", r2), r2();
      };
    }), t2);
  }
}, 13375(e, n, t) {
  t.d(n, { y: () => r.y });
  var r = t(43486);
}, 43486(e, n, t) {
  t.d(n, { y: () => a });
  var r = t(79474), s = t(97917);
  t(16285);
  const a = () => r.createElement("div", { className: "spinner-container", role: "progressbar" }, r.createElement(s.f, { intent: "neutral", size: "large" }));
}, 9639(e, n, t) {
  function r(e2) {
    return e2 ? e2.length ? e2.split("-")[0] : e2 : "";
  }
  t.d(n, { QD: () => r }), t(51022), t(21383);
}, 87894(e, n, t) {
  t.d(n, { A: () => u });
  var r = t(16928), s = t(84157), a = t(87574), i = t(14381), o = t(62020), c = t(10284), l = t(1820), d = t(9691);
  let p;
  if (s.ipcMain) {
    let T = function() {
      const e2 = {}, n2 = r.join(s.app.getAppPath(), "resources", "locales");
      for (const t2 of c.l.readDirSync(n2)) {
        const s2 = c.l.readFileSync(r.join(n2, t2)), a2 = r.parse(t2).name, i2 = (0, d.G)(s2);
        i2 && (e2[a2] = { translation: i2 });
      }
      return e2;
    };
    p = T(), s.ipcMain.on(l.ox, ((e2) => {
      e2.returnValue = p;
    }));
  } else p = s.ipcRenderer.sendSync(l.ox);
  a.Ay.use(i.A).use(o.r9).init({ keySeparator: "::", nsSeparator: ":::", resources: p, fallbackLng: "en", returnEmptyString: false, interpolation: { escapeValue: false } });
  const u = a.Ay;
}, 32812(e, n, t) {
  t(22259);
}, 8750(e, n, t) {
  var r, s, a, i;
  !(function(e2) {
    e2[e2.Normal = 0] = "Normal", e2[e2.Maximized = 1] = "Maximized", e2[e2.Minimized = 2] = "Minimized", e2[e2.Hidden = 3] = "Hidden", e2[e2.Fullscreen = 4] = "Fullscreen", e2[e2.FullscreenWithPanel = 5] = "FullscreenWithPanel";
  })(r || (r = {})), (function(e2) {
    e2.Basic = "basic", e2.Options = "options", e2.Credentials = "credentials", e2.SignIn = "sign-in", e2.Settings = "settings", e2.SaveChanges = "save-changes", e2.Welcome = "welcome";
  })(s || (s = {})), (function(e2) {
    e2.Show = "show", e2.Move = "move";
  })(a || (a = {})), (function(e2) {
    e2[e2.Basic = 0] = "Basic", e2[e2.ChartData = 1] = "ChartData";
  })(i || (i = {}));
}, 33077(e, n, t) {
  t.d(n, { bw: () => r.b }), t(42494);
  var r = t(46699);
  t(93100);
}, 20850(e, n, t) {
  t.d(n, { iT: () => r.iT });
  var r = t(62340);
}, 62340(e, n, t) {
  t.d(n, { iT: () => r });
  const r = () => "darwin" === process.platform;
}, 51022(e, n, t) {
  t.d(n, { CH: () => p }), t(87016);
  var r = t(19405);
  const s = "TARGET_TVD_HOST", a = "https://www.tradingview.com/", i = (0, r.R)((() => {
    const e2 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
    let n2 = a;
    return s in process.env && (n2 = process.env[s] ?? a), null !== new RegExp(e2, "i").exec(n2) ? e2 : (n2.endsWith("/") && (n2 = n2?.substring(0, n2.length - 1)), n2.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
  }));
  function o(e2, n2 = true) {
    const t2 = (e3) => {
      let t3 = e3.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
      return t3.match(/\w+(\/\((\.\*\)))/gi) && (t3 = t3.replace(/\/\((\.\*\))/gi, "(/(.*))?")), t3 = t3.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, i()), t3 = `^${t3}${n2 ? "$" : ""}`, new RegExp(t3, "i");
    };
    return "string" == typeof e2 ? t2(e2) : e2.map(t2);
  }
  const c = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", l = "${TV}/(\\w|-)*screener/*", d = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/";
  function p() {
    return localStorage.getItem(s) ?? a;
  }
  (0, r.R)((() => o(l))), (0, r.R)((() => o("${TV}/", true))), (0, r.R)((() => o("${TV}/chart/", true))), (0, r.R)((() => o(c))), (0, r.R)((() => o("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), (0, r.R)((() => o(d, true))), (0, r.R)((() => o("${TV}/screener/*"))), (0, r.R)((() => o("${TV}/heatmap/*"))), (0, r.R)((() => o("${TV}/community/*"))), (0, r.R)((() => o("${TV}/pine-script-docs/en/v5/Introduction.html"))), (0, r.R)((() => o("${TV}/pine-script-reference/v5/"))), (0, r.R)((() => o("${TV}/x/*"))), (0, r.R)((() => o("${TV}/*"))), (0, r.R)((() => o("${TV}/account-recovery/*"))), (0, r.R)((() => o("${TV}/chat/*"))), (0, r.R)((() => /:\/\/s3\..+\/snapshots\//i)), (0, r.R)((() => o("${TV}/pine/*"))), (0, r.R)((() => o("${TV}/markets/*"))), (0, r.R)((() => o("${TV}/markets/*/news/"))), (0, r.R)((() => o("${TV}/markets/stocks-*/*"))), (0, r.R)((() => o("${TV}/markets/world-economy/*"))), (0, r.R)((() => o("${TV}/u/TradingView/"))), (0, r.R)((() => o("${TV}/news/*"))), (0, r.R)((() => o("${TV}/news/"))), (0, r.R)((() => o("${TV}/news/\\?market=*"))), (0, r.R)((() => o("${TV}/news/\\?market=topstories"))), (0, r.R)((() => o("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), (0, r.R)((() => o("${TV}/support/*"))), (0, r.R)((() => o("https://status.tradingview.com/", true))), (0, r.R)((() => o("${TV}/ideas/*"))), (0, r.R)((() => o("${TV}/scripts/*"))), (0, r.R)((() => o(["${TV}/", "${TV}/ideas/*", d, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), (0, r.R)((() => o("${TV}/markets/bonds/*"))), (0, r.R)((() => o([c, l, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"])));
} }]);
