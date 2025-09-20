import { createContext, useContext, useEffect, useState } from "react";
import { tokenStore } from "../store/TokenStore";
import { setTokenService, clearTokenService } from "../services/TokenService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(tokenStore.get());

  useEffect(() => {
    tokenStore.subscribe(setAuth);
  }, []);

  const login = (tokens) => setTokenService(tokens);
  const logout = () => clearTokenService();

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
