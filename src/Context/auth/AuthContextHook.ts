import { useContext } from "react";
import { AuthContextType } from "./AuthContextType";
import { AuthContext } from "./AuthContext";

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContext");
  }
  return context;
};
