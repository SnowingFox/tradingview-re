# tradingview-re

A runnable, readable reconstruction of the **TradingView** desktop app for macOS,
extracted from the official `TradingView.dmg`, with an in-app **DevTool** panel
for inspecting how the desktop shell works.

| | |
|---|---|
| TradingView Desktop | 3.4.1 (build 3.4.1.8194, built 2026-09-08) |
| Electron | 41.7.1 (Chrome 146) |

TradingView ships no source maps, so the "source" here is the shipped JavaScript
reformatted with esbuild: identifiers stay minified, but every bundle is
pretty-printed, diffable and **runs as-is**.

## Quick start

```bash
git lfs install           # native modules (.node) are stored in LFS
git clone https://github.com/SnowingFox/tradingview-re.git && cd tradingview-re
bun install               # Electron 41.7.1 (matches the ABI of app/'s native modules), Vite, TypeScript, …
bun run start             # builds "dist/TradingView RE.app" on first run, then launches it
```

`bun run start` runs with an isolated profile in `./.tradingview-dev`, so it
never touches an installed TradingView's settings or login state. Use
`bun run start -- --real-profile` to share `~/Library/Application Support/TradingView`.
Credentials TradingView saves through keytar still go to the login keychain.

## What the app is

TradingView Desktop is a thin Electron shell around `https://www.tradingview.com`.
Charts, Pine Script, accounts and plans are all served by the website at runtime;
the bundle in `app/` is only the shell:

- each chart tab is a `BrowserView` on `tradingview.com/chart/`, **sandboxed with
  context isolation**; only local `file:` / `tvd:` views (new tab, menus, splash,
  dialogs) get Node integration;
- the site talks to the shell through `window.TVD` (`app/preload/platform-preload.js`),
  backed by ~65 `tvd:*` IPC channels: layouts, watchlists, theme, crosshair sync,
  notifications, screen/camera/audio capture, keychain credentials;
- `app/configs/nav-rules.json` decides whether a URL opens in a tab, a popup or
  the system browser;
- native modules: `tvdbridge.node` (raw pointer capture), `keytar.node`,
  `classic_level.node` (LevelDB), `notificationstate.node`;
- environment overrides: `TVD_HOST` / `TARGET_TVD_HOST` (which site to load),
  `TVD_DEBUGMODE`, `TVD_SESSION_COOKIE`, `TVD_SENTRY_*`.

The shell also resolves its own signed-in user (from the session cookie plus
`/api/v1/user/profile/me/`) and derives plan claims from it, which gate shell
actions like opening a second window and the plan badge in the window menu. The
DevTool can answer that lookup with a **local account** (below). What happens
inside tradingview.com — chart data, indicators, Pine limits — is always
decided by TradingView's servers and is never touched.

## DevTool

A draggable **DEV** pill on the right edge of every tab opens a panel
(tweakpane-style, after the one in [SnowingFox/cursor](https://github.com/SnowingFox/cursor)):

| Folder | Shows |
|---|---|
| **App** | Version, Electron / Chromium / Node, dev or built mode, profile folder |
| **Session** | Host, session cookie name, signed-in state and where the shell's user comes from (local account / TradingView cookie), tab id and URL, `TVD_*` overrides set at launch |
| **Account** | The **local account** the desktop shell signs in as: name, email, plan (Free → Ultimate), theme, avatar, sign in / sign out. Everything stays on this machine — the shell never contacts TradingView for it |
| **IPC** | Live log of the shell's IPC across every window: direction (`→ send`, `→ sync`, `→ invoke`, `← push`), channel, size, invoke latency, failures. Filter (`tvd -sentry`), pause, clear, busiest channels. Argument values are never recorded, only their size |
| **Tab** | Tab DevTools, shell window DevTools, reload / hard reload, open profile / logs folder, copy diagnostics |

The panel is plain DOM in a closed shadow root, mounted by a sandboxed preload.
Remote tabs keep context isolation, so tradingview.com's own JavaScript can't
see the panel or reach its IPC.

### Local account

The DevTool signs the desktop shell in as a local user (default `tvre`,
Premium), without a TradingView account: `UserService.updateCurrentUser()` gets
the profile from the DevTool instead of the network, and derives the same claims
a real sign-in would (`user:id`, `user:pro`, `user:plan`, `user:pro_badge_name`).
The shell then behaves like any paid account: the window menu shows the plan
badge, and the authenticated-only shell actions (new window, detach tab, drag a
tab out) work. The shell's own Sign in (menu, first launch, platform requests)
takes the same local path instead of opening TradingView's auth flow, and the
first-launch onboarding dialog is skipped.

All state stays local and persists like a real account: the shell stores its
app state in `<userData>/TVUserStorage/id-tvre-local-user/settings.json` and
restores it on the next launch, and the account itself lives in
`<userData>/devtool/local-account.json`. `TVRE_LOCAL_ACCOUNT=off` disables the
local account for one launch and restores upstream behaviour.

The website's own features are unaffected: charts, plans and Pine limits inside
tradingview.com still come from TradingView's servers.

## Changes to the upstream app

Everything TradingView ships is in the **Import TradingView 3.4.1** commit,
untouched apart from the esbuild reformat. On top of it:

**Patches** (`build/patches/patches.mjs`, exact string replacements in `app/index.js`):

| Patch | Why |
|---|---|
| `devtool/loader` | Loads `app/devtool/main.js` before the app's entry module, so the IPC recorder wraps `ipcMain` before TradingView registers its handlers |
| `devtool/tab-flag` | Adds `--tvre-devtool` to chart tabs' `additionalArguments`, so the session-wide preload only mounts in tabs, not popups or sign-in windows |
| `mock/account` | `UserService.updateCurrentUser()` asks the DevTool's local account (`globalThis.__tvreMockUser`) before the session cookie, so the shell signs in without a TradingView account. The first sign-in goes through the shell's own `updateAuthentication()` (state restored from / stored in `TVUserStorage/id-<id>`); later edits only refresh the claims, so windows and tabs are not reset |
| `mock/sign-in` | The shell's own sign-in entry points (`doSignIn`: menu, first launch, platform requests) enable the local account instead of opening the welcome dialog and the TradingView browser flow |
| `mock/no-onboarding` | Skips the first-launch onboarding dialog while the local account is in use; it belongs to TradingView's own sign-in |
| `profile/logs-in-user-data` | Upstream writes logs to `<appData>/TradingView/logs`, ignoring `--user-data-dir`, and its non-recursive `mkdir` crashes startup when TradingView was never installed. Logs now go to `<userData>/logs` (the same folder for the real profile) |
| `updater/no-startup-check` | The update feed (`tvd-packages.tradingview.com`) serves the official build, which would replace this one |
| `protocol/keep-official-handler` | Leaves the `tradingview://` URL scheme with the installed app |
| `sentry/no-upload` | No crash reports to TradingView's Sentry from a modified build, unless `TVD_SENTRY_FORCE_UPLOAD` is set |

**Added files** (built by Vite from `src/`):

- `app/devtool/main.js`: DevTool main-process module (IPC recorder, local
  account, info and action handlers, preload registration). TradingView calls
  `defaultSession.setPreloads()` after its first window opens, which drops
  every registered frame preload; the module wraps that call and re-registers.
- `app/preload/devtool-preload.js`: the panel.

**Bundle** (`bun run package`): `dist/TradingView RE.app` uses upstream's
`Info.plist` with its own name and bundle id (`dev.snowingfox.tradingview-re`),
without `CFBundleURLTypes`, `ElectronAsarIntegrity` and `ElectronTeamID`; the
executable and Electron's helper apps are renamed to match (`TradingView RE
Helper (Renderer)`, …) and everything is signed ad-hoc.

## Layout

```
app/                  the application (== TradingView.app/Contents/Resources/app.asar + .unpacked), runs as-is
  index.js            main process (reformatted webpack bundle, patched)
  preload/            upstream preloads + devtool-preload.js (built)
  devtool/main.js     ← built from src/main
src/
  common/             IPC protocol, the local-account model and formatting helpers (+ Vitest tests)
  main/               DevTool main-process module, IPC recorder, local-account store
  devtool/            DevTool preload and panel
build/patches/        glue patches into app/index.js + apply.mjs
upstream/             version metadata, sha256 manifest, Info.plist/.icns of the extracted build
scripts/              extract / build / package / start / dev tooling + CDP smoke tests
```

## Scripts

| Command | What it does |
|---|---|
| `bun run start` | Build `dist/TradingView RE.app` if needed and launch it |
| `bun run dev` | Watch-build `src/`; preload changes reload the tabs showing the panel, main-process changes need a restart |
| `bun run build` | Vite-build `src/` into `app/`, then apply `build/patches` |
| `bun run apply` / `apply:check` | (Re)apply the patches from the pristine import commit / only verify their anchors |
| `bun run package` | Assemble `dist/TradingView RE.app`; `Resources/app` is a symlink to `./app`, so edits take effect on relaunch |
| `bun run package:standalone` | Same, but copies `./app` into the bundle (movable `.app`) |
| `bun run extract -- <TradingView.dmg\|TradingView.app>` | Re-extract from an upstream build; commit the result as `Import TradingView <version>` before `bun run build` |
| `bun run check:devtool` | Smoke test against a build started with `--remote-debugging-port=9333 --tvre-quiet` (`node scripts/cdp-check.mjs [port] [screenshot.png]`) |
| `bun run check:mock` | Local-account check against a build started with `--remote-debugging-port=9333 --tvre-quiet`: panel + shell state; `node scripts/cdp-mock-check.mjs [port] [--round-trip]` also signs out and back in through the shell's own menu |
| `bun run typecheck` / `test` / `lint` / `format` | TypeScript, Vitest, Biome |

`--tvre-quiet` runs the app as a macOS accessory with its windows offscreen:
automated checks can drive it over CDP without it coming to the front or
stealing the mouse and keyboard.

`app/` is committed in its built state (patched bundle plus the Vite output),
so a fresh clone runs without a build step. Run `bun run build` before committing
source changes.

## How it runs

`npx @electron/fuses read` shows upstream ships with `OnlyLoadAppFromAsar` and
`EmbeddedAsarIntegrityValidation` **disabled**, so the stock Electron 41.7.1
binary from npm loads `Resources/app` as a plain directory instead of
`app.asar`. Because the Electron version is identical, the prebuilt native
modules in `app/` load without rebuilding.

## Notes

- macOS only (the native modules in `app/` are universal darwin builds).
- TradingView is proprietary software by TradingView, Inc. This repository is a
  research and interoperability workspace.
