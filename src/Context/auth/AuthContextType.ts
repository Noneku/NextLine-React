import { User } from "../../models/User";

// Définir le type de contexte d'authentification
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
  user: User | null;
}
