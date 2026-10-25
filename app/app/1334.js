"use strict";
(global.webpackChunktradingview_desktop = global.webpackChunktradingview_desktop || []).push([[1334], { 10300(t, e, r) {
  r(79474);
}, 79278(t, e, r) {
  r(79474);
}, 34097(t, e, r) {
  r(79474);
}, 49131(t, e, r) {
  r(79474), r(35492), r(12329);
}, 57179(t, e, r) {
  r(79474), r(7750), r(59587), r(12329), r(49131);
}, 22259(t, e, r) {
  r.d(e, { f: () => a }), r(34957);
  var a = r(56039);
}, 21383(t, e, r) {
  r.d(e, { k: () => a });
  const a = "tvd:logger-service";
  var n;
  !(function(t2) {
    t2[t2.Debug = 0] = "Debug", t2[t2.Info = 1] = "Info", t2[t2.Warn = 2] = "Warn", t2[t2.Error = 3] = "Error";
  })(n || (n = {}));
}, 7750(t, e, r) {
  r.d(e, { Ow: () => s, di: () => o, ld: () => c, yg: () => l });
  var a = r(84157), n = r(22259), i = r(21383);
  function c() {
    return n.f.getProvider().provide(i.k);
  }
  function o() {
    return a.ipcMain ? n.f.getProvider().provide(i.k) : n.f.provideProxy(i.k);
  }
  function s() {
    return n.f.provide(i.k);
  }
  function l() {
    return n.f.provideProxy(i.k);
  }
}, 10284(t, e, r) {
  r.d(e, { l: () => s });
  var a = r(84157), n = r(79896), i = r(16928), c = r(7750), o = r(33077);
  class s {
    static appStorageFolderName = "TVAppStorage";
    static appUserStorageFolderName = "TVUserStorage";
    static appStateFileName = "appState.json";
    static encoding = "utf8";
    static exists(t2) {
      return n.existsSync(t2);
    }
    static createDir(t2, e2) {
      n.mkdirSync(t2, e2);
    }
    static deleteDir(t2, e2) {
      return n.rmdirSync(t2, e2);
    }
    static delete(t2) {
      n.unlinkSync(t2);
    }
    static deleteAsync(t2) {
      return new Promise(((e2, r2) => {
        n.unlink(t2, ((t3) => {
          t3 ? r2(t3) : e2();
        }));
      }));
    }
    static writeFileAsync(t2, e2, r2) {
      return n.promises.writeFile(t2, e2, { encoding: this.encoding, flag: r2 }).catch(((t3) => (0, c.ld)().error("Error while write file: ", t3)));
    }
    static readFileAsync(t2, e2) {
      return new Promise(((r2, a2) => {
        n.readFile(t2, { encoding: this.encoding, flag: e2 }, ((t3, e3) => {
          null !== t3 ? a2(t3) : r2(e3);
        }));
      }));
    }
    static readFileSync(t2) {
      return n.readFileSync(t2, { encoding: "utf8" });
    }
    static readDirAsync(t2) {
      return new Promise(((e2, r2) => {
        n.readdir(t2, { encoding: this.encoding }, ((t3, a2) => {
          null !== t3 ? r2(t3) : e2(a2);
        }));
      }));
    }
    static readDirSync(t2) {
      return n.readdirSync(t2);
    }
    static fileStats(t2, e2) {
      return new Promise(((r2, a2) => {
        n.stat(t2, e2 ?? { bigint: false }, ((t3, e3) => {
          null !== t3 ? a2(t3) : r2(e3);
        }));
      }));
    }
    static async dirContentStats(t2) {
      const e2 = await this.readDirAsync(t2);
      return Promise.all(e2.map((async (e3) => {
        const r2 = (0, i.join)(t2, e3);
        return { fullPath: r2, stats: await this.fileStats(r2) };
      })));
    }
    static makeAppDataPath(t2) {
      return (0, i.join)(s.getDefaultCriticalAppPathOrThrow("appData"), a.app.getName(), t2);
    }
    static makeAppRootPath(t2) {
      const e2 = a.app.getAppPath();
      return (0, i.join)(e2, t2);
    }
    static createWriteStream(t2, e2) {
      return n.createWriteStream(t2, e2);
    }
    static getDefaultAppPath(t2) {
      try {
        return a.app.getPath(t2);
      } catch (e2) {
        (0, c.ld)().error(`[FileSystemProvider.getDefaultAppPath()] Exception on getPath(${t2}): ${(0, o.bw)(e2)}`);
      }
      return null;
    }
    static getDefaultCriticalAppPathOrThrow(t2) {
      return a.app.getPath(t2);
    }
    static getAppDocumentsPath() {
      const t2 = s.getDefaultAppPath("documents");
      return t2 ? (0, i.join)(t2, a.app.getName()) : null;
    }
    static getAppUserStorageFolderPath() {
      return (0, i.join)(s.getDefaultCriticalAppPathOrThrow("userData"), s.appUserStorageFolderName);
    }
    static getAppStateFilePath() {
      const t2 = s.getDefaultCriticalAppPathOrThrow("userData"), e2 = (0, i.join)(t2, s.appStorageFolderName);
      return s.exists(e2) || s.createDir(e2, { recursive: true }), (0, i.join)(e2, s.appStateFileName);
    }
  }
}, 68671(t, e, r) {
  r.d(e, { v: () => i });
  var a = r(87574), n = r(87894);
  const i = async (t2) => {
    n.A.language !== t2 && await a.Ay.changeLanguage(t2);
  };
}, 59954(t, e, r) {
  r.d(e, { W: () => a });
  const a = "tvd:locale-service";
}, 59587(t, e, r) {
  r(22259), r(20802);
}, 20802(t, e, r) {
  var a;
  !(function(t2) {
    t2.Ask = "ask", t2.CheckOnly = "check-only";
  })(a || (a = {}));
}, 1820(t, e, r) {
  r.d(e, { ox: () => a });
  const a = "tvd:locale-get-translations";
}, 92763(t, e, r) {
  r.d(e, { uY: () => n }), r(7750);
  var a = r(33077);
  function n(t2) {
    t2.catch(((t3) => {
      const e2 = (0, a.bw)(t3);
      console.warn(`Ignoring promise, but error: ${e2}`), console.warn(t3.stack);
    }));
  }
}, 9691(t, e, r) {
  r.d(e, { G: () => n });
  var a = r(7750);
  const n = (t2, e2) => {
    try {
      return JSON.parse(t2, e2);
    } catch (t3) {
      return (0, a.di)().error("jsonParse JSON.parse error", t3), null;
    }
  };
} }]);
