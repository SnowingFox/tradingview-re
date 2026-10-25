"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[292], { 12129(e, t, r) {
  r.d(t, { z: () => u });
  var a = r(7750), n = r(41493), i = r(47242), o = r(42952);
  let c, s = false, d = 0, p = 0;
  function l() {
    const e2 = (0, o.Mz)().remoteServiceInstanceId ?? window.location.href, t2 = Math.round(performance.memory.usedJSHeapSize / i.p8), r2 = Math.round(performance.memory.totalJSHeapSize / i.p8), c2 = Math.round(performance.memory.jsHeapSizeLimit / i.p8), l2 = t2 / c2, u2 = `Heap info for renderer - ${e2}. Heap Used ${t2} Kb. Heap Total ${r2} Kb. Heap Limit ${c2} Kb.`;
    return l2 <= i.ie ? (d = 0, void (p = 0)) : l2 > i.ie && d < 2 ? ((0, a.yg)().warn(u2), void d++) : void (l2 > i.RC && (s || ((0, n.ZQ)({ level: "warning", breadcrumb: u2 }), s = true), p < 2 && ((0, a.yg)().warn(u2), p++)));
  }
  function u(e2 = i.aK) {
    !(function() {
      const e3 = Math.round(performance.memory.jsHeapSizeLimit / i.p8);
      (0, n.NA)("memory.heapLimit", e3.toString());
    })(), c ? (0, a.yg)().error("Heap log for this renderer already exist") : c = setInterval(l, e2);
  }
}, 22259(e, t, r) {
  r.d(t, { f: () => a }), r(34957);
  var a = r(56039);
}, 21383(e, t, r) {
  r.d(t, { k: () => a });
  const a = "tvd:logger-service";
  var n;
  !(function(e2) {
    e2[e2.Debug = 0] = "Debug", e2[e2.Info = 1] = "Info", e2[e2.Warn = 2] = "Warn", e2[e2.Error = 3] = "Error";
  })(n || (n = {}));
}, 7750(e, t, r) {
  r.d(t, { Ow: () => s, di: () => c, ld: () => o, yg: () => d });
  var a = r(84157), n = r(22259), i = r(21383);
  function o() {
    return n.f.getProvider().provide(i.k);
  }
  function c() {
    return a.ipcMain ? n.f.getProvider().provide(i.k) : n.f.provideProxy(i.k);
  }
  function s() {
    return n.f.provide(i.k);
  }
  function d() {
    return n.f.provideProxy(i.k);
  }
}, 10284(e, t, r) {
  r.d(t, { l: () => s });
  var a = r(84157), n = r(79896), i = r(16928), o = r(7750), c = r(33077);
  class s {
    static appStorageFolderName = "TVAppStorage";
    static appUserStorageFolderName = "TVUserStorage";
    static appStateFileName = "appState.json";
    static encoding = "utf8";
    static exists(e2) {
      return n.existsSync(e2);
    }
    static createDir(e2, t2) {
      n.mkdirSync(e2, t2);
    }
    static deleteDir(e2, t2) {
      return n.rmdirSync(e2, t2);
    }
    static delete(e2) {
      n.unlinkSync(e2);
    }
    static deleteAsync(e2) {
      return new Promise(((t2, r2) => {
        n.unlink(e2, ((e3) => {
          e3 ? r2(e3) : t2();
        }));
      }));
    }
    static writeFileAsync(e2, t2, r2) {
      return n.promises.writeFile(e2, t2, { encoding: this.encoding, flag: r2 }).catch(((e3) => (0, o.ld)().error("Error while write file: ", e3)));
    }
    static readFileAsync(e2, t2) {
      return new Promise(((r2, a2) => {
        n.readFile(e2, { encoding: this.encoding, flag: t2 }, ((e3, t3) => {
          null !== e3 ? a2(e3) : r2(t3);
        }));
      }));
    }
    static readFileSync(e2) {
      return n.readFileSync(e2, { encoding: "utf8" });
    }
    static readDirAsync(e2) {
      return new Promise(((t2, r2) => {
        n.readdir(e2, { encoding: this.encoding }, ((e3, a2) => {
          null !== e3 ? r2(e3) : t2(a2);
        }));
      }));
    }
    static readDirSync(e2) {
      return n.readdirSync(e2);
    }
    static fileStats(e2, t2) {
      return new Promise(((r2, a2) => {
        n.stat(e2, t2 ?? { bigint: false }, ((e3, t3) => {
          null !== e3 ? a2(e3) : r2(t3);
        }));
      }));
    }
    static async dirContentStats(e2) {
      const t2 = await this.readDirAsync(e2);
      return Promise.all(t2.map((async (t3) => {
        const r2 = (0, i.join)(e2, t3);
        return { fullPath: r2, stats: await this.fileStats(r2) };
      })));
    }
    static makeAppDataPath(e2) {
      return (0, i.join)(s.getDefaultCriticalAppPathOrThrow("appData"), a.app.getName(), e2);
    }
    static makeAppRootPath(e2) {
      const t2 = a.app.getAppPath();
      return (0, i.join)(t2, e2);
    }
    static createWriteStream(e2, t2) {
      return n.createWriteStream(e2, t2);
    }
    static getDefaultAppPath(e2) {
      try {
        return a.app.getPath(e2);
      } catch (t2) {
        (0, o.ld)().error(`[FileSystemProvider.getDefaultAppPath()] Exception on getPath(${e2}): ${(0, c.bw)(t2)}`);
      }
      return null;
    }
    static getDefaultCriticalAppPathOrThrow(e2) {
      return a.app.getPath(e2);
    }
    static getAppDocumentsPath() {
      const e2 = s.getDefaultAppPath("documents");
      return e2 ? (0, i.join)(e2, a.app.getName()) : null;
    }
    static getAppUserStorageFolderPath() {
      return (0, i.join)(s.getDefaultCriticalAppPathOrThrow("userData"), s.appUserStorageFolderName);
    }
    static getAppStateFilePath() {
      const e2 = s.getDefaultCriticalAppPathOrThrow("userData"), t2 = (0, i.join)(e2, s.appStorageFolderName);
      return s.exists(t2) || s.createDir(t2, { recursive: true }), (0, i.join)(t2, s.appStateFileName);
    }
  }
}, 86434(e, t, r) {
  r.d(t, { NA: () => i, ZQ: () => n });
  var a = r(48927);
  function n(e2) {
    (0, a.ZQ)({ category: "message", message: e2.breadcrumb, level: e2.level });
  }
  function i(e2, t2) {
    (0, a.NA)(e2, t2);
  }
}, 30190(e, t, r) {
  r.d(t, { F: () => o });
  var a = r(84157), n = r(48927);
  const i = void 0 !== a.ipcMain;
  function o() {
    if (i) throw new Error("This initialization must be called from renderer process");
    (0, n.Ts)();
  }
}, 94231(e, t, r) {
  r(48927);
}, 59954(e, t, r) {
  r.d(t, { W: () => a });
  const a = "tvd:locale-service";
}, 16309(e, t, r) {
  r.d(t, { MY: () => l, eq: () => g });
  var a = r(84157), n = r(22259), i = r(7750), o = r(78449), c = r(87894), s = r(68671), d = r(59954);
  const p = void 0 !== a.ipcMain;
  function l() {
    return n.f.provideProxy(d.W);
  }
  function u(e2, t2) {
    e2.setAttribute("dir", t2 ? "rtl" : "ltr");
  }
  function g(e2) {
    e2 && "" === e2.dir && u(e2, (0, o.HL)(c.A.language)), (function(e3) {
      let t2;
      t2 = p ? n.f.provide(d.W).localeChange.subscribe(e3) : l().localeChange.subscribe(e3);
      const r2 = () => {
        t2?.unsubscribe(), t2 = void 0, window.removeEventListener("beforeunload", r2);
      };
      "undefined" != typeof window && window.addEventListener("beforeunload", r2);
    })(((t2) => {
      "" !== t2 && ((0, s.v)(t2).catch(((e3) => {
        (0, i.yg)().error("setupI18nLocaleHandler(): changeLocale() error", e3);
      })), e2 && u(e2, (0, o.HL)(t2)));
    }));
  }
}, 20802(e, t, r) {
  r.d(t, { k: () => a });
  const a = "tvd:window-service";
  var n;
  !(function(e2) {
    e2.Ask = "ask", e2.CheckOnly = "check-only";
  })(n || (n = {}));
}, 47242(e, t, r) {
  r.d(t, { RC: () => o, aK: () => a, ie: () => i, p8: () => n });
  const a = 6e4, n = 1024, i = 0.8, o = 0.97;
}, 95398(e, t, r) {
  var a;
  r.d(t, { N$: () => a }), r(55701), r(41939), (function(e2) {
    e2.Enter = "Enter", e2.Space = "Space", e2.Tab = "Tab", e2.ArrowUp = "ArrowUp", e2.ArrowDown = "ArrowDown", e2.Escape = "Escape";
  })(a || (a = {}));
}, 9691(e, t, r) {
  r.d(t, { G: () => n });
  var a = r(7750);
  const n = (e2, t2) => {
    try {
      return JSON.parse(e2, t2);
    } catch (e3) {
      return (0, a.di)().error("jsonParse JSON.parse error", e3), null;
    }
  };
}, 78449(e, t, r) {
  r.d(t, { Dd: () => o, HL: () => i });
  const a = ["ar", "ar_AE"], n = ["he", "he_IL"], i = (e2) => [...a, ...n].includes(e2), o = () => "rtl" === window.document.dir;
} }]);
