"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[5833], { 12129(e, n, r) {
  r.d(n, { z: () => p });
  var o = r(7750), t = r(41493), i = r(47242), a = r(42952);
  let s, c = false, u = 0, d = 0;
  function l() {
    const e2 = (0, a.Mz)().remoteServiceInstanceId ?? window.location.href, n2 = Math.round(performance.memory.usedJSHeapSize / i.p8), r2 = Math.round(performance.memory.totalJSHeapSize / i.p8), s2 = Math.round(performance.memory.jsHeapSizeLimit / i.p8), l2 = n2 / s2, p2 = `Heap info for renderer - ${e2}. Heap Used ${n2} Kb. Heap Total ${r2} Kb. Heap Limit ${s2} Kb.`;
    return l2 <= i.ie ? (u = 0, void (d = 0)) : l2 > i.ie && u < 2 ? ((0, o.yg)().warn(p2), void u++) : void (l2 > i.RC && (c || ((0, t.ZQ)({ level: "warning", breadcrumb: p2 }), c = true), d < 2 && ((0, o.yg)().warn(p2), d++)));
  }
  function p(e2 = i.aK) {
    !(function() {
      const e3 = Math.round(performance.memory.jsHeapSizeLimit / i.p8);
      (0, t.NA)("memory.heapLimit", e3.toString());
    })(), s ? (0, o.yg)().error("Heap log for this renderer already exist") : s = setInterval(l, e2);
  }
}, 21383(e, n, r) {
  r.d(n, { k: () => o });
  const o = "tvd:logger-service";
  var t;
  !(function(e2) {
    e2[e2.Debug = 0] = "Debug", e2[e2.Info = 1] = "Info", e2[e2.Warn = 2] = "Warn", e2[e2.Error = 3] = "Error";
  })(t || (t = {}));
}, 7750(e, n, r) {
  r.d(n, { Ow: () => s, di: () => a, yg: () => c });
  var o = r(84157), t = r(22259), i = r(21383);
  function a() {
    return o.ipcMain ? t.f.getProvider().provide(i.k) : t.f.provideProxy(i.k);
  }
  function s() {
    return t.f.provide(i.k);
  }
  function c() {
    return t.f.provideProxy(i.k);
  }
}, 10284(e, n, r) {
  r(84157), r(79896), r(16928), r(7750), r(33077);
}, 86434(e, n, r) {
  r.d(n, { NA: () => i, ZQ: () => t });
  var o = r(48927);
  function t(e2) {
    (0, o.ZQ)({ category: "message", message: e2.breadcrumb, level: e2.level });
  }
  function i(e2, n2) {
    (0, o.NA)(e2, n2);
  }
}, 41493(e, n, r) {
  r.d(n, { F$: () => o.F, NA: () => t.NA, ZQ: () => t.ZQ });
  var o = r(30190), t = (r(94231), r(86434));
}, 94231(e, n, r) {
  r(48927);
}, 47242(e, n, r) {
  r.d(n, { RC: () => a, aK: () => o, ie: () => i, p8: () => t });
  const o = 6e4, t = 1024, i = 0.8, a = 0.97;
}, 8750(e, n, r) {
  var o, t, i, a;
  !(function(e2) {
    e2[e2.Normal = 0] = "Normal", e2[e2.Maximized = 1] = "Maximized", e2[e2.Minimized = 2] = "Minimized", e2[e2.Hidden = 3] = "Hidden", e2[e2.Fullscreen = 4] = "Fullscreen", e2[e2.FullscreenWithPanel = 5] = "FullscreenWithPanel";
  })(o || (o = {})), (function(e2) {
    e2.Basic = "basic", e2.Options = "options", e2.Credentials = "credentials", e2.SignIn = "sign-in", e2.Settings = "settings", e2.SaveChanges = "save-changes", e2.Welcome = "welcome";
  })(t || (t = {})), (function(e2) {
    e2.Show = "show", e2.Move = "move";
  })(i || (i = {})), (function(e2) {
    e2[e2.Basic = 0] = "Basic", e2[e2.ChartData = 1] = "ChartData";
  })(a || (a = {}));
}, 92763(e, n, r) {
  r.d(n, { uY: () => t }), r(7750);
  var o = r(33077);
  function t(e2) {
    e2.catch(((e3) => {
      const n2 = (0, o.bw)(e3);
      console.warn(`Ignoring promise, but error: ${n2}`), console.warn(e3.stack);
    }));
  }
}, 9691(e, n, r) {
  r.d(n, { G: () => t });
  var o = r(7750);
  const t = (e2, n2) => {
    try {
      return JSON.parse(e2, n2);
    } catch (e3) {
      return (0, o.di)().error("jsonParse JSON.parse error", e3), null;
    }
  };
}, 31544(e, n, r) {
  r.d(n, { Cp: () => c, J0: () => l, J5: () => m, NA: () => d, r: () => u });
  var o = r(90066), t = r(11555), i = r(3103), a = r(31784), s = r(68752);
  function c(e2, n2) {
    return (0, t.o5)().captureException(e2, (0, s.li)(n2));
  }
  function u(e2, n2) {
    return (0, t.o5)().captureEvent(e2, n2);
  }
  function d(e2, n2) {
    (0, t.rm)().setTag(e2, n2);
  }
  function l(e2) {
    const n2 = (0, t.KU)(), r2 = (0, t.rm)(), s2 = (0, t.o5)(), { release: c2, environment: u2 = o.U } = n2 && n2.getOptions() || {}, { userAgent: d2 } = a.O.navigator || {}, l2 = (0, i.fj)({ release: c2, environment: u2, user: s2.getUser() || r2.getUser(), ...d2 && { userAgent: d2 }, ...e2 }), g2 = r2.getSession();
    return g2 && "ok" === g2.status && (0, i.qO)(g2, { status: "exited" }), p(), r2.setSession(l2), s2.setSession(l2), l2;
  }
  function p() {
    const e2 = (0, t.rm)(), n2 = (0, t.o5)(), r2 = n2.getSession() || e2.getSession();
    r2 && (0, i.Vu)(r2), g(), e2.setSession(), n2.setSession();
  }
  function g() {
    const e2 = (0, t.rm)(), n2 = (0, t.o5)(), r2 = (0, t.KU)(), o2 = n2.getSession() || e2.getSession();
    o2 && r2 && r2.captureSession(o2);
  }
  function m(e2 = false) {
    e2 ? p() : g();
  }
}, 48927(e, n, r) {
  r.d(n, { NA: () => o.NA, Ts: () => i.T, ZQ: () => t.Z });
  var o = r(31544), t = r(26637), i = (r(11314), r(73042), r(23100));
  r(67602), r(86049);
} }]);
