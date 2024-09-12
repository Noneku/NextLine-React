import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCalendar,
  FaHashtag,
  FaPassport,
} from "react-icons/fa";
import { User } from "../../models/User";
import { useAuth } from "../../Context/auth/AuthContextHook";
import { updateUser } from "../../services/apiService";

const FirstConnexionForm: React.FC = () => {
  const { user: userFromContext } = useAuth();

  // Définir un état initial pour 'user'
  const [user, setUser] = useState<User>({
    id:
      typeof userFromContext?.id === "number" ? userFromContext.id : undefined,
    nomUtilisateur: userFromContext?.nomUtilisateur || "",
    prenomUtilisateur: userFromContext?.prenomUtilisateur || "",
    emailUtilisateur: userFromContext?.emailUtilisateur || "",
    dateCreation: new Date().toISOString().split("T")[0],
    isactive: true,
    numeroBeneficiaireStagiaire: "",
    numeroSecuStagiaire: "",
    mdpUtilisateur: "",
    utilisateurLogin: userFromContext?.utilisateurLogin || "",
    dateNaissance: userFromContext?.dateNaissance || null,
    roleDTO: userFromContext?.roleDTO || { nomRole: "" },
  });

  useEffect(() => {
    if (userFromContext) {
      setUser((prevUser) => ({
        ...prevUser,
        id: userFromContext.id,
        nomUtilisateur: userFromContext.nomUtilisateur,
        prenomUtilisateur: userFromContext.prenomUtilisateur,
        emailUtilisateur: userFromContext.emailUtilisateur,
        utilisateurLogin: userFromContext.utilisateurLogin,
        dateNaissance: userFromContext.dateNaissance,
        roleDTO: userFromContext.roleDTO,
      }));
    }
  }, [userFromContext]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await updateUser(user);
    } catch (error) {
      console.log("Problem !", error);
    }

    console.log("Utilisateur soumis :", user);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        📝 Super ! C'est votre première connexion, remplissez les informations
        manquantes
      </h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Nom de l'utilisateur */}
        <div style={styles.formGroup}>
          <label htmlFor="nomUtilisateur" style={styles.label}>
            <FaUser /> Nom :
          </label>
          <input
            type="text"
            id="nomUtilisateur"
            name="nomUtilisateur"
            value={user.nomUtilisateur}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        {/* Prénom de l'utilisateur */}
        <div style={styles.formGroup}>
          <label htmlFor="prenomUtilisateur" style={styles.label}>
            <FaUser /> Prénom :
          </label>
          <input
            type="text"
            id="prenomUtilisateur"
            name="prenomUtilisateur"
            value={user.prenomUtilisateur}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        {/* Email de l'utilisateur */}
        <div style={styles.formGroup}>
          <label htmlFor="emailUtilisateur" style={styles.label}>
            <FaEnvelope /> Email :
          </label>
          <input
            type="email"
            id="emailUtilisateur"
            name="emailUtilisateur"
            value={user.emailUtilisateur}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="mdpUtilisateur" style={styles.label}>
            <FaPassport /> Mot de passe :
          </label>
          <input
            type="password"
            id="mdpUtilisateur"
            name="mdpUtilisateur"
            value={user.mdpUtilisateur}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>

        {/* Date de naissance */}
        <div style={styles.formGroup}>
          <label htmlFor="dateNaissance" style={styles.label}>
            <FaCalendar /> Date de Naissance :
          </label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            value={user.dateNaissance ?? ""}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        {/* Numéro bénéficiaire stagiaire */}
        <div style={styles.formGroup}>
          <label htmlFor="numeroBeneficiaireStagiaire" style={styles.label}>
            <FaHashtag /> Numéro Bénéficiaire :
          </label>
          <input
            type="text"
            id="numeroBeneficiaireStagiaire"
            name="numeroBeneficiaireStagiaire"
            value={user.numeroBeneficiaireStagiaire ?? ""}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="numeroSecuStagiaire" style={styles.label}>
            <FaHashtag /> Numéro Sécurité Sociale :
          </label>
          <input
            type="text"
            id="numeroSecuStagiaire"
            name="numeroSecuStagiaire"
            value={user.numeroSecuStagiaire ?? ""}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>

        {/* Bouton de soumission */}
        <button type="submit" style={styles.button}>
          🔒 Soumettre
        </button>
      </form>
    </div>
  );
};

// Styles en ligne pour le composant
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
    marginBottom: "20px",
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
    display: "block",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default FirstConnexionForm;
