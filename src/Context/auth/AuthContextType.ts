export interface RoleDTO {
  id: number;
  nomRole: string;
}

export interface UserAuthentified {
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
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
  user: UserAuthentified | null;
}
