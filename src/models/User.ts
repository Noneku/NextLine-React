import { RoleDTO } from "./RoleDTO"; // Assurez-vous que roleDTO est défini dans un fichier approprié

export class User {
  id?: number | null;
  nomUtilisateur?: string;
  prenomUtilisateur?: string;
  emailUtilisateur?: string;
  dateCreation: string; // Utilisation de string pour LocalDate
  isactive: boolean;
  numeroBeneficiaireStagiaire?: string | null; // Utilisation de ? pour indiquer que la propriété est optionnelle (correspond à String en Java)
  dateNaissance?: string | null; // Utilisation de string pour LocalDate
  roleDTO: RoleDTO;
  utilisateurLogin?: string;

  // Ces propriétés ne seront pas incluses lors de la sérialisation/désérialisation JSON
  public mdpUtilisateur?: string;
  public numeroSecuStagiaire?: string;

  constructor(
    nomUtilisateur: string,
    prenomUtilisateur: string,
    emailUtilisateur: string,
    dateCreation: string,
    isactive: boolean,
    numeroBeneficiaireStagiaire: string | undefined,
    dateNaissance: string | null,
    roleDTO: RoleDTO,
    utilisateurLogin?: string,
    mdpUtilisateur?: string,
    numeroSecuStagiaire?: string
  ) {
    this.nomUtilisateur = nomUtilisateur;
    this.prenomUtilisateur = prenomUtilisateur;
    this.emailUtilisateur = emailUtilisateur;
    this.dateCreation = dateCreation;
    this.isactive = isactive;
    this.numeroBeneficiaireStagiaire = numeroBeneficiaireStagiaire;
    this.dateNaissance = dateNaissance;
    this.roleDTO = roleDTO;
    this.utilisateurLogin = utilisateurLogin;
    this.mdpUtilisateur = mdpUtilisateur;
    this.numeroSecuStagiaire = numeroSecuStagiaire;
    this.utilisateurLogin = utilisateurLogin;
  }
}
