import React, { createContext, useState, ReactNode } from "react";
import { AuthContextType, UserAuthentified } from "./AuthContextType";
import { loginUser } from "../../services/apiService";

// Créer le contexte d'authentification
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Fournisseur de contexte d'authentification
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserAuthentified | null>(null);

  const login = async (login: string, password: string) => {
    try {
      const { user: userData, token } = await loginUser(login, password);

      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authToken"); // Suppression du token du stockage
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
