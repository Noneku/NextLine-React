import React, { createContext, useState, ReactNode } from "react";
import { AuthContextType } from "./AuthContextType";
import { User } from "../../models/User";
import { loginUser } from "../../services/apiService";
import FirstConnexionForm from "../../components/Forms/FirstConnexionForm";

// Créer le contexte d'authentification
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Fournisseur de contexte d'authentification
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (login: string, password: string) => {
    try {
      const { user: userData, token } = await loginUser(login, password);

      // Stocker le token et l'utilisateur après une connexion réussie
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
      {isAuthenticated && !user?.isactive ? <FirstConnexionForm /> : children}
    </AuthContext.Provider>
  );
};
