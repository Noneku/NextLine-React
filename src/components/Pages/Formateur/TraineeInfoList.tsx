import React, { useEffect, useState } from "react";
import { User } from "../../../models/User";
import { getAllInterns } from "../../../services/apiService";

// Composant principal qui affiche les informations sur les stagiaires
const TraineeInfoList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const internsData = await getAllInterns();
        setUsers(internsData);
      } catch (error) {
        console.log("Problème lors de la récupération des stagiaires", error);
      }
    };

    fetchInterns();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        📋 Liste des Stagiaires ayant envoyé leur fiche de renseignement
      </h2>
      <ul style={styles.list}>
        {users.map((user) => (
          <li key={user.idUtilisateur} style={styles.card}>
            <h3 style={styles.name}>
              👤 {user.nomUtilisateur} {user.prenomUtilisateur}
            </h3>
            <p style={styles.info}>
              🏢 Compte Actif :{" "}
              <strong>{user.isactive ? "Actif 🟢" : "Inactif 🔴"}</strong>
            </p>
            <p style={styles.info}>
              📧 E-mail :{" "}
              <a href={`mailto:${user.emailUtilisateur}`} style={styles.email}>
                {user.emailUtilisateur}
              </a>
            </p>
            <p style={styles.info}>
              📅 Date de Naissance :{" "}
              <em>{user.dateNaissance ?? "Non renseignée"}</em>
            </p>
            <p style={styles.info}>
              🗓 Date de Création : <em>{user.dateCreation}</em>
            </p>
            <p style={styles.info}>
              🏷 Rôle : <strong>{user.roleDTO.nomRole}</strong>
            </p>
            {user.numeroBeneficiaireStagiaire && (
              <p style={styles.info}>
                🆔 Numéro de Bénéficiaire :{" "}
                <strong>{user.numeroBeneficiaireStagiaire}</strong>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles en ligne pour le composant
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "1000px", // Corrigé pour être une largeur réelle
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
  list: {
    listStyleType: "none",
    padding: 0,
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  name: {
    margin: "0 0 10px",
    color: "#2c3e50",
  },
  info: {
    margin: "5px 0",
    color: "#555",
  },
  email: {
    color: "#2980b9",
    textDecoration: "none",
  },
};

export default TraineeInfoList;
