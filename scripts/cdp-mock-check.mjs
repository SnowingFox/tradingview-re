#!/usr/bin/env node
// Checks the DevTool's local account against the running shell.
//
//   bun run start -- --remote-debugging-port=9333 --tvre-quiet
//   node scripts/cdp-mock-check.mjs [port] [--round-trip]
//
// --tvre-quiet keeps the launch off the desktop (accessory policy, windows
// moved offscreen), so the check never steals the mouse or keyboard.
//
// Read-only by default: the panel must show the local account as applied, and
// the shell window must behave like a signed-in one (new-window button, plan
// badge in the main menu). With --round-trip it signs out, checks the shell
// went anonymous, then signs in again through the shell's own menu button —
// which must take the local sign-in path (no TradingView dialog).

import { callOn, connect, domTools, findPanelTarget, listTargets, sleep } from './lib/cdp.mjs';

const port = process.argv[2] ?? '9333';
const roundTrip = process.argv.includes('--round-trip');

async function panelState() {
  // Sign-in/sign-out recreates the tab that hosts the panel; retry until a
  // target with the panel exists again (the app keeps polling its user).
  let found;
  for (let i = 0; i < 20; i++) {
    found = await findPanelTarget(port);
    if (found) break;
    await sleep(500);
  }
  if (!found) return undefined;
  const { target, page } = found;
  const dom = domTools(page.send);
  let root = await dom.tree();
  const pill = dom.find(root, (n) => n.nodeName === 'BUTTON' && dom.attr(n, 'class') === 'pill');
  if (pill && dom.attr(pill, 'aria-expanded') !== 'true') {
    await callOn(page.send, pill.nodeId, 'function () { this.click(); }');
    await sleep(1200);
    root = await dom.tree();
  }
  const panel = dom.find(root, (n) => n.nodeName === 'DIV' && dom.attr(n, 'class') === 'panel');
  let text = panel ? dom.text(panel).replace(/\s+/g, ' ').trim() : '';
  // Info arrives asynchronously; wait for it rather than reading "Loading…".
  for (let i = 0; i < 15 && !/Account /.test(text); i++) {
    await sleep(300);
    root = await dom.tree();
    const latest = dom.find(root, (n) => n.nodeName === 'DIV' && dom.attr(n, 'class') === 'panel');
    text = latest ? dom.text(latest).replace(/\s+/g, ' ').trim() : '';
  }
  const account = (text.match(/Account (Active|Applying…|Signed out|Disabled by env|Off)/) ?? [])[1];
  const user = (text.match(/User ([A-Za-z ]+?) Tab /) ?? [])[1];
  return { target, page, dom, text, account, user };
}

async function clickPanelButton(label) {
  const state = await panelState();
  if (!state) return false;
  const button = state.dom.find(
    (await state.dom.tree()),
    (n) =>
      n.nodeName === 'BUTTON' && state.dom.attr(n, 'class') === 'button' && state.dom.text(n).trim() === label,
  );
  if (!button) {
    state.page.close();
    return false;
  }
  await callOn(state.page.send, button.nodeId, 'function () { this.click(); }');
  state.page.close();
  return true;
}

async function shellButtons() {
  const target = (await listTargets(port)).find((t) => /\/app\/window\//.test(t.url));
  if (!target) return undefined;
  const page = await connect(target);
  try {
    const ids = JSON.parse(
      await page.evaluate(`JSON.stringify([...document.querySelectorAll('button')].map((b) => b.id || b.title))`),
    );
    return { newWindow: ids.includes('new-window-button'), mainMenu: ids.includes('main-menu-button') };
  } finally {
    page.close();
  }
}

/** The shell's title-bar buttons act on mouseup (button 0), not on click. */
const CLICK_MAIN_MENU = `(() => {
  const b = document.getElementById('main-menu-button');
  if (!b) return false;
  b.dispatchEvent(new MouseEvent('mouseup', { button: 0, bubbles: true }));
  return true;
})()`;

/** Opens the main menu and reads its user card ("tvre Premium" when the claims carry the plan). */
async function menuUserCard() {
  for (let attempt = 0; attempt < 3; attempt++) {
    const target = (await listTargets(port)).find((t) => /\/app\/window\//.test(t.url));
    if (!target) return undefined;
    const page = await connect(target);
    try {
      await page.evaluate(CLICK_MAIN_MENU);
    } finally {
      page.close();
    }
    // The menu is its own window: wait for it, then for its user card.
    for (let i = 0; i < 12; i++) {
      await sleep(300);
      const menu = (await listTargets(port)).find((t) => /\/app\/menu\//.test(t.url));
      if (!menu) continue;
      const menuPage = await connect(menu);
      try {
        const card = await menuPage.evaluate(
          `document.querySelector('.user-card-container')?.innerText.replace(/\\s+/g, ' ').trim()`,
        );
        if (card) return card;
      } finally {
        menuPage.close();
      }
    }
  }
  return '';
}

/** Clicks the menu's user card, i.e. the shell's own Sign in button. */
async function clickMenuSignIn() {
  const target = (await listTargets(port)).find((t) => /\/app\/window\//.test(t.url));
  if (!target) return false;
  const page = await connect(target);
  try {
    await page.evaluate(CLICK_MAIN_MENU);
  } finally {
    page.close();
  }
  await sleep(1200);
  const menu = (await listTargets(port)).find((t) => /\/app\/menu\//.test(t.url));
  if (!menu) return false;
  const menuPage = await connect(menu);
  try {
    const clicked = await menuPage.evaluate(
      `(() => { const card = document.querySelector('.user-card'); if (!card) return false; card.click(); return true; })()`,
    );
    return clicked === true;
  } finally {
    menuPage.close();
  }
}

const state = await panelState();
if (!state) {
  console.error('no tab with the DevTool panel found');
  process.exit(1);
}
const signedIn = { account: state.account, user: state.user };
state.page.close();

const result = {
  panel: signedIn,
  shell: await shellButtons(),
  menuUserCard: await menuUserCard(),
};

if (roundTrip) {
  result.roundTrip = {};
  if (await clickPanelButton('Sign out')) {
    await sleep(2500);
    let afterSignOut = await panelState();
    for (let i = 0; i < 6 && !afterSignOut; i++) {
      await sleep(1000);
      afterSignOut = await panelState();
    }
    result.roundTrip.afterSignOut = { account: afterSignOut?.account, user: afterSignOut?.user };
    afterSignOut?.page.close();
    result.roundTrip.shellAfterSignOut = await shellButtons();

    // The shell's own sign-in must take the local path: no dialog, no browser.
    const clicked = await clickMenuSignIn();
    await sleep(2500);
    const afterSignIn = await panelState();
    result.roundTrip.afterShellSignIn = { clicked, account: afterSignIn?.account, user: afterSignIn?.user };
    afterSignIn?.page.close();
    result.roundTrip.shellAfterSignIn = await shellButtons();
  } else {
    result.roundTrip.error = 'could not click "Sign out" in the panel';
  }
}

console.log(JSON.stringify(result, null, 2));

const ok =
  signedIn.account === 'Active' &&
  signedIn.user === 'Local account' &&
  result.shell?.newWindow === true &&
  /Premium|Essential|Plus|Expert|Ultimate/i.test(result.menuUserCard ?? '') &&
  (!roundTrip ||
    (result.roundTrip.afterSignOut?.account === 'Signed out' &&
      result.roundTrip.shellAfterSignOut?.newWindow === false &&
      result.roundTrip.afterShellSignIn?.account === 'Active'));
process.exit(ok ? 0 : 1);
