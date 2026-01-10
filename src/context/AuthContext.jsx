import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const data = await getCurrentUser();
      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser(); // 🔑 hydration on refresh
  }, []);

  const logout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null); 
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, logout, refreshUser: loadUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
