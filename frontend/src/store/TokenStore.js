let state = {
  accessToken: null,
  refreshToken: null,
};

const listeners = new Set();

export const tokenStore = {
  get() {
    return state;
  },

  getAccessToken() {
    return state.accessToken;
  },

  getRefreshToken() {
    return state.refreshToken;
  },

  set(tokens) {
    state = tokens
      ? {
          accessToken: tokens.accessToken ?? null,
          refreshToken: tokens.refreshToken ?? null,
        }
      : { accessToken: null, refreshToken: null };

    listeners.forEach((fn) => {
      try {
        fn(state);
      } catch {}
    });
  },

  clear() {
    this.set({ accessToken: null, refreshToken: null });
  },

  subscribe(fn) {
    listeners.add(fn);

    return () => listeners.delete(fn);
  },
};
