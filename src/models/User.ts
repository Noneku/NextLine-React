import { RoleDTO } from "./RoleDTO"; // Assurez-vous que roleDTO est défini dans un fichier approprié

export class User {
  idUtilisateur: number;
  nomUtilisateur: string;
  prenomUtilisateur: string;
  emailUtilisateur: string;
  dateCreation: string; // Utilisation de string pour LocalDate
  isactive: boolean;
  numeroBeneficiaireStagiaire?: string | null; // Utilisation de ? pour indiquer que la propriété est optionnelle (correspond à String en Java)
  dateNaissance?: string | null; // Utilisation de string pour LocalDate
  roleDTO: RoleDTO;

  // Ces propriétés ne seront pas incluses lors de la sérialisation/désérialisation JSON
  private utilisateurLogin?: string;
  private mdpUtilisateur?: string;
  private numeroSecuStagiaire?: string;

  constructor(
    idUtilisateur: number,
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
    this.idUtilisateur = idUtilisateur;
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
  }
}
