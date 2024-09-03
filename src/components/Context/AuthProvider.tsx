import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";

// Définir les interfaces
interface RoleDTO {
  id: number;
  nomRole: string;
}

interface UserAuthentified {
  id: number;
  nomUtilisateur: string;
  prenomUtilisateur: string;
  emailUtilisateur: string;
  dateCreation: [number, number, number];
  isactive: boolean;
  numeroBeneficiaireStagiaire: string;
  dateNaissance: [number, number, number];
  roleDTO: RoleDTO;
}

// Définir le type de contexte d'authentification
interface AuthContextType {
  isAuthenticated: boolean;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
  user: UserAuthentified | null;
}

// Créer le contexte d'authentification
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fournisseur de contexte d'authentification
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserAuthentified | null>(null);

  // Fonction de connexion
  const login = async (login: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api-nextline/auth/login",
        { login, password }
      );

      if (response.data.token) {
        setIsAuthenticated(true);

        // Stock l'utilisateur authentifié dans mon context
        const userData: UserAuthentified = response.data.user;
        setUser(userData);

        localStorage.setItem("authToken", response.data.token);
      }
    } catch (error) {
      console.error("Échec de la connexion:", error);
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

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
