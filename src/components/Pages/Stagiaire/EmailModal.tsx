import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { sendEmailBusiness } from "../../../services/apiService";
import { useAuth } from "../../../Context/auth/AuthContextHook";

interface EmailModalProps {
  handleClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ handleClose }) => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Adresse email soumise :", email);

    try {
      sendEmailBusiness(user?.id?.toString(), email);
    } catch (error) {
      console.error("Problème lors de l'envoi de l'email", error);
    }
    handleClose();
  };

  return (
    <Modal show onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Démarrer une procédure d'envoi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Vous allez démarrer une procédure d'envoi d'email. Veuillez entrer
          l'adresse email à laquelle vous souhaitez envoyer la demande.
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Adresse Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrer l'adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Envoyer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EmailModal;
