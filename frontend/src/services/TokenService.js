import { tokenStore } from "../store/TokenStore";

export const setTokenService = async (tokens) => {
  if (!tokens?.accessToken) return null;

  tokenStore.set(tokens);

  return tokens;
};

export const clearTokenService = () => {
  tokenStore.clear();
};
