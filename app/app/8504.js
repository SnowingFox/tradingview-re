"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[8504], { 9639(e, r, t) {
  function s(e2) {
    return e2 ? e2.length ? e2.split("-")[0] : e2 : "";
  }
  t.d(r, { QD: () => s }), t(51022), t(21383);
}, 30190(e, r, t) {
  t.d(r, { F: () => i });
  var s = t(84157), a = t(48927);
  const n = void 0 !== s.ipcMain;
  function i() {
    if (n) throw new Error("This initialization must be called from renderer process");
    (0, a.Ts)();
  }
}, 61888(e, r, t) {
  (0, t(62340).iT)();
}, 32812(e, r, t) {
  t(22259);
}, 33077(e, r, t) {
  t.d(r, { bw: () => s.b }), t(42494);
  var s = t(46699);
  t(93100);
}, 20850(e, r, t) {
  t.d(r, { iT: () => s.iT });
  var s = t(62340);
}, 75739(e, r, t) {
  t.d(r, { iT: () => a.iT, uY: () => s.uY });
  var s = t(92763), a = t(20850);
  t(95398), t(51022), t(16793), t(86216);
}, 95398(e, r, t) {
  var s;
  t(55701), t(41939), (function(e2) {
    e2.Enter = "Enter", e2.Space = "Space", e2.Tab = "Tab", e2.ArrowUp = "ArrowUp", e2.ArrowDown = "ArrowDown", e2.Escape = "Escape";
  })(s || (s = {}));
}, 62340(e, r, t) {
  t.d(r, { iT: () => s });
  const s = () => "darwin" === process.platform;
}, 51022(e, r, t) {
  t(87016);
  var s = t(19405);
  const a = "TARGET_TVD_HOST", n = "https://www.tradingview.com/", i = (0, s.R)((() => {
    const e2 = "http(s?):\\/\\/((\\w|-)*\\.)?tradingview\\.com";
    let r2 = n;
    return a in process.env && (r2 = process.env[a] ?? n), null !== new RegExp(e2, "i").exec(r2) ? e2 : (r2.endsWith("/") && (r2 = r2?.substring(0, r2.length - 1)), r2.replace(/\./gi, "\\.").replace(/\//gi, "\\/"));
  }));
  function c(e2, r2 = true) {
    const t2 = (e3) => {
      let t3 = e3.toString().replace(/\./gi, "\\.").replace(/(?<!\))\*/gi, "(.*)");
      return t3.match(/\w+(\/\((\.\*\)))/gi) && (t3 = t3.replace(/\/\((\.\*\))/gi, "(/(.*))?")), t3 = t3.replace(/\//gi, "\\/").replace(/\$\{TV\}/gi, i()), t3 = `^${t3}${r2 ? "$" : ""}`, new RegExp(t3, "i");
    };
    return "string" == typeof e2 ? t2(e2) : e2.map(t2);
  }
  const o = "${TV}/chart/([a-zA-Z0-9]{0,12})?/?", T = "${TV}/(\\w|-)*screener/*", $ = "${TV}/chart/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/[a-z0-9-._~:\\?#@!$&'()*+,;%=]+/";
  (0, s.R)((() => c(T))), (0, s.R)((() => c("${TV}/", true))), (0, s.R)((() => c("${TV}/chart/", true))), (0, s.R)((() => c(o))), (0, s.R)((() => c("(${TV}/chart/([a-zA-Z0-9]{0,12})?)/\\?*?"))), (0, s.R)((() => c($, true))), (0, s.R)((() => c("${TV}/screener/*"))), (0, s.R)((() => c("${TV}/heatmap/*"))), (0, s.R)((() => c("${TV}/community/*"))), (0, s.R)((() => c("${TV}/pine-script-docs/en/v5/Introduction.html"))), (0, s.R)((() => c("${TV}/pine-script-reference/v5/"))), (0, s.R)((() => c("${TV}/x/*"))), (0, s.R)((() => c("${TV}/*"))), (0, s.R)((() => c("${TV}/account-recovery/*"))), (0, s.R)((() => c("${TV}/chat/*"))), (0, s.R)((() => /:\/\/s3\..+\/snapshots\//i)), (0, s.R)((() => c("${TV}/pine/*"))), (0, s.R)((() => c("${TV}/markets/*"))), (0, s.R)((() => c("${TV}/markets/*/news/"))), (0, s.R)((() => c("${TV}/markets/stocks-*/*"))), (0, s.R)((() => c("${TV}/markets/world-economy/*"))), (0, s.R)((() => c("${TV}/u/TradingView/"))), (0, s.R)((() => c("${TV}/news/*"))), (0, s.R)((() => c("${TV}/news/"))), (0, s.R)((() => c("${TV}/news/\\?market=*"))), (0, s.R)((() => c("${TV}/news/\\?market=topstories"))), (0, s.R)((() => c("${TV}/HTML5-stock-forex-bitcoin-charting-library/"))), (0, s.R)((() => c("${TV}/support/*"))), (0, s.R)((() => c("https://status.tradingview.com/", true))), (0, s.R)((() => c("${TV}/ideas/*"))), (0, s.R)((() => c("${TV}/scripts/*"))), (0, s.R)((() => c(["${TV}/", "${TV}/ideas/*", $, "${TV}/scripts/*", "${TV}/script/*", "${TV}/community/*", "${TV}/widget/", "${TV}/markets/corporate-bonds/*", "${TV}/social-network/", "${TV}/the-leap/*", "${TV}/broker/*", "${TV}/data-coverage/", "${TV}/markets/stocks-*/*"]))), (0, s.R)((() => c("${TV}/markets/bonds/*"))), (0, s.R)((() => c([o, T, "${TV}/markets/*", "${TV}/symbols/*", "${TV}/(\\w|-)*calendar/*"])));
} }]);
