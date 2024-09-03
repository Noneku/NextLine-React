import React, { useState } from "react";

// Définition du type pour les informations des fiches
type FormInfo = {
  id: number;
  traineeName: string;
  company: string;
  receivedDate: string;
  isSigned: boolean;
};

// Composant principal pour la gestion des fiches de renseignement
const ReceivedFormsList: React.FC = () => {
  // Exemple de données de fiches de renseignement
  const [forms, setForms] = useState<FormInfo[]>([
    {
      id: 1,
      traineeName: "Alice Dupont",
      company: "Entreprise ABC",
      receivedDate: "2024-09-01",
      isSigned: false,
    },
    {
      id: 2,
      traineeName: "Bob Martin",
      company: "Société XYZ",
      receivedDate: "2024-09-02",
      isSigned: false,
    },
    {
      id: 3,
      traineeName: "Claire Petit",
      company: "Startup Innov",
      receivedDate: "2024-09-03",
      isSigned: true,
    },
  ]);

  // Fonction pour signer une fiche
  const signForm = (id: number) => {
    setForms((prevForms) =>
      prevForms.map((form) =>
        form.id === id ? { ...form, isSigned: true } : form
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        📑 Fiches de renseignement reçues des stagiaires
      </h2>
      <ul style={styles.list}>
        {forms.map((form) => (
          <li key={form.id} style={styles.card}>
            <h3 style={styles.name}>👤 {form.traineeName}</h3>
            <p style={styles.info}>
              🏢 Entreprise : <strong>{form.company}</strong>
            </p>
            <p style={styles.info}>
              📅 Date de réception : <em>{form.receivedDate}</em>
            </p>
            <p style={styles.info}>
              {form.isSigned ? "✔️ Signée" : "✖️ Non signée"}
            </p>
            {!form.isSigned && (
              <button style={styles.button} onClick={() => signForm(form.id)}>
                ✍️ Signer la fiche
              </button>
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
    position: "relative",
  },
  name: {
    margin: "0 0 10px",
    color: "#2c3e50",
  },
  info: {
    margin: "5px 0",
    color: "#555",
  },
  button: {
    padding: "8px 15px",
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ReceivedFormsList;
