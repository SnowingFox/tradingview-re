      async updateCurrentUser() {
        let e3, t3 = { id: void 0 };
        // [tradingview-re] Local account (DevTool, src/main/mockAccount.ts). The
        // shell signs in as a local user instead of using the session cookie.
        // The first sign-in goes through updateAuthentication() like a real one,
        // so app state is restored from TVUserStorage/id-<id> and saved there;
        // later edits only refresh the claims, which must not reset windows.
        const __tvre = globalThis.__tvreMockUser;
        if (__tvre && __tvre.active()) {
          const __tvreSession = __tvre.session();
          if (__tvreSession.value !== this.currentUser.session?.value) {
            const __tvreProfile = __tvre.profile();
            if (this.currentUser.isAuthenticated && true === this.currentUser.session?.mock) {
              const __tvreUser = new yD.K(iO.VY(__tvreProfile), __tvreSession);
              this.currentUser = __tvreUser, this.userChangeEvent.next(__tvreUser.claims);
            } else {
              (0, M.uY)(this.updateAuthentication(__tvreProfile, __tvreSession));
            }
          }
          return;
        }
        if (this.session) try {
