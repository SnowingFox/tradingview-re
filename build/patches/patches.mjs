// Glue patches into the upstream bundles.
//
// The DevTool itself lives in src/ and is built by Vite into files next to the
// bundles (app/devtool/main.js, app/preload/devtool-preload.js). These patches
// only load it and keep the RE build from interfering with an installed
// TradingView or reporting to TradingView's services:
//
//   * load the DevTool main module before the app's entry module runs, so its
//     IPC recorder sees every ipcMain handler TradingView registers;
//   * flag chart tabs (`--tvre-devtool`) so the session-wide DevTool preload
//     only mounts in tab views, not in popups or sign-in windows;
//   * skip the startup update check (the feed serves the official build);
//   * leave the tradingview:// URL scheme with the installed app;
//   * keep logs inside the profile passed with --user-data-dir;
//   * stop crash uploads to TradingView's Sentry unless TVD_SENTRY_FORCE_UPLOAD is set.

import { readFileSync } from 'node:fs';

const MAIN = 'index.js';

const inject = (name) => readFileSync(new URL(`./inject/${name}`, import.meta.url), 'utf8');

export const patches = [
  {
    id: 'devtool/loader',
    file: MAIN,
    find: '  i(93906);\n})();',
    replace: `${inject('main-loader.js')}  i(93906);\n})();`,
  },
  {
    id: 'devtool/tab-flag',
    file: MAIN,
    find: 'n3.webPreferences = { preload: W.l.makeAppRootPath(t3 ?? ft), devTools: true };',
    replace:
      'n3.webPreferences = { preload: W.l.makeAppRootPath(t3 ?? ft), devTools: true, additionalArguments: ["--tvre-devtool"] };',
  },
  {
    // Logs go to <appData>/<app name>/logs, which ignores --user-data-dir and
    // throws (non-recursive mkdir) when TradingView was never installed. For the
    // real profile userData is that same folder.
    id: 'profile/logs-in-user-data',
    file: MAIN,
    find: 'return (0, o.join)(c.getDefaultCriticalAppPathOrThrow("appData"), r2.app.getName(), e3);',
    replace: 'return (0, o.join)(c.getDefaultCriticalAppPathOrThrow("userData"), e3);',
  },
  {
    id: 'updater/no-startup-check',
    file: MAIN,
    find: '(0, M.j9)() || xu().checkForUpdates();',
    replace: '(0, M.j9)() || void 0 /* [tradingview-re] update feed serves the official build */;',
  },
  {
    id: 'protocol/keep-official-handler',
    file: MAIN,
    find: 'i2.app.isDefaultProtocolClient("tradingview") || i2.app.setAsDefaultProtocolClient("tradingview"), ',
    replace: '',
  },
  {
    id: 'sentry/no-upload',
    file: MAIN,
    find: 'e3.sentry.upload = !e3.advanced.debugMode || l2,',
    replace: 'e3.sentry.upload = "TVD_SENTRY_FORCE_UPLOAD" in process.env && l2,',
  },
];
