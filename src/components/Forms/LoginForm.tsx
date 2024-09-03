import React, { useState, FormEvent } from "react";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { useAuth } from "../Context/AuthProvider"; // Assure-toi d'importer le bon chemin

interface LoginFormProps {
  handleClose: () => void; // Fonction pour fermer le modal
}

const LoginForm: React.FC<LoginFormProps> = ({ handleClose }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Ajout de l'état de chargement
  const { login: loginUser } = useAuth(); // Accéder à la fonction de connexion

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Démarrer l'animation de chargement
    try {
      await loginUser(login, password);
      handleClose(); // Fermer le modal après soumission
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false); // Arrêter l'animation de chargement
    }
  };

  return (
    <Modal show onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Connexion 🔒</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>
              <FaUser /> Login
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre Login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>
              <FaLock /> Mot de passe
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Chargement...
              </>
            ) : (
              "Connexion"
            )}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
