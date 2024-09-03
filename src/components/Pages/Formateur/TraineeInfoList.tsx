import React from "react";

// Définition du type pour les informations sur les stagiaires
type TraineeInfo = {
  id: number;
  name: string;
  email: string;
  company: string;
  sentDate: string;
};

// Composant principal qui affiche les informations sur les stagiaires
const TraineeInfoList: React.FC = () => {
  // Exemple de données de stagiaires
  const trainees: TraineeInfo[] = [
    {
      id: 1,
      name: "Alice Dupont",
      email: "alice.dupont@example.com",
      company: "Entreprise ABC",
      sentDate: "2024-09-01",
    },
    {
      id: 2,
      name: "Bob Martin",
      email: "bob.martin@example.com",
      company: "Société XYZ",
      sentDate: "2024-09-02",
    },
    {
      id: 3,
      name: "Claire Petit",
      email: "claire.petit@example.com",
      company: "Startup Innov",
      sentDate: "2024-09-03",
    },
    {
      id: 4,
      name: "Hamid Dupont",
      email: "h.dupont@example.com",
      company: "Raïb Innov",
      sentDate: "2024-08-07",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        📋 Liste des Stagiaires ayant envoyé leur fiche de renseignement
      </h2>
      <ul style={styles.list}>
        {trainees.map((trainee) => (
          <li key={trainee.id} style={styles.card}>
            <h3 style={styles.name}>👤 {trainee.name}</h3>
            <p style={styles.info}>
              🏢 Entreprise : <strong>{trainee.company}</strong>
            </p>
            <p style={styles.info}>
              📧 E-mail d'envoi :{" "}
              <a href={`mailto:${trainee.email}`} style={styles.email}>
                {trainee.email}
              </a>
            </p>
            <p style={styles.info}>
              📅 Date d'envoi : <em>{trainee.sentDate}</em>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles en ligne pour le composant
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "0 auto",
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
