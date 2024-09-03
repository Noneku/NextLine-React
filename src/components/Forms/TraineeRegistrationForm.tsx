import React, { useState } from "react";

// Définition des types pour les données du formulaire
type RoleDTO = {
  id: number;
  nomRole: string;
};

type TraineeFormData = {
  nomUtilisateur: string;
  prenomUtilisateur: string;
  utilisateurLogin: string;
  emailUtilisateur: string;
  mdpUtilisateur: string;
  dateCreation: string;
  isactive: boolean;
  numeroSecuStagiaire: string;
  numeroBeneficiaireStagiaire: string;
  dateNaissance: string;
  roleDTO: RoleDTO;
};

// Composant principal pour le formulaire d'enregistrement
const TraineeRegistrationForm: React.FC = () => {
  // État pour les données du formulaire
  const [formData, setFormData] = useState<TraineeFormData>({
    nomUtilisateur: "",
    prenomUtilisateur: "",
    utilisateurLogin: "",
    emailUtilisateur: "",
    mdpUtilisateur: "",
    dateCreation: new Date().toISOString().split("T")[0], // Date du jour par défaut
    isactive: true,
    numeroSecuStagiaire: "",
    numeroBeneficiaireStagiaire: "",
    dateNaissance: "",
    roleDTO: { id: 1, nomRole: "STAGIAIRE" },
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // À compléter : Ajouter la logique pour gérer l'enregistrement des données
    console.log("Formulaire soumis avec les données :", formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 Formulaire d'enregistrement du stagiaire</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="nomUtilisateur" style={styles.label}>
            Nom :
          </label>
          <input
            type="text"
            id="nomUtilisateur"
            name="nomUtilisateur"
            value={formData.nomUtilisateur}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="prenomUtilisateur" style={styles.label}>
            Prénom :
          </label>
          <input
            type="text"
            id="prenomUtilisateur"
            name="prenomUtilisateur"
            value={formData.prenomUtilisateur}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="utilisateurLogin" style={styles.label}>
            Login :
          </label>
          <input
            type="text"
            id="utilisateurLogin"
            name="utilisateurLogin"
            value={formData.utilisateurLogin}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="emailUtilisateur" style={styles.label}>
            Email :
          </label>
          <input
            type="email"
            id="emailUtilisateur"
            name="emailUtilisateur"
            value={formData.emailUtilisateur}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="mdpUtilisateur" style={styles.label}>
            Mot de passe :
          </label>
          <input
            type="password"
            id="mdpUtilisateur"
            name="mdpUtilisateur"
            value={formData.mdpUtilisateur}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="dateNaissance" style={styles.label}>
            Date de naissance :
          </label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="numeroSecuStagiaire" style={styles.label}>
            Numéro de Sécurité Sociale :
          </label>
          <input
            type="text"
            id="numeroSecuStagiaire"
            name="numeroSecuStagiaire"
            value={formData.numeroSecuStagiaire}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="numeroBeneficiaireStagiaire" style={styles.label}>
            Numéro de Bénéficiaire :
          </label>
          <input
            type="text"
            id="numeroBeneficiaireStagiaire"
            name="numeroBeneficiaireStagiaire"
            value={formData.numeroBeneficiaireStagiaire}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          📤 Enregistrer le stagiaire
        </button>
      </form>
    </div>
  );
};

// Styles en ligne pour le formulaire
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default TraineeRegistrationForm;
