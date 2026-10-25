      async doSignIn(e3) {
        // [tradingview-re] Sign in locally (DevTool, src/main/mockAccount.ts):
        // the shell's sign-in entry points (menu, platform request, first
        // launch) enable the local account instead of opening the welcome
        // dialog and the TradingView browser flow. The user poll applies it.
        const __tvre = globalThis.__tvreMockUser;
        if (__tvre && __tvre.available()) {
          __tvre.signIn();
          return;
        }
        this.currentUser.isAuthenticated ? (0, u.Ow)().warn("Requesting sign in when authentication is active") : await this.authHandler.signIn(e3);
      }
