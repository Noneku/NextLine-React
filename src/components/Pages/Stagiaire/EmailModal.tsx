import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { sendEmailBusiness } from "../../../services/apiService";
import { useAuth } from "../../../Context/auth/AuthContextHook";

const EmailModal = () => {
  const { user } = useAuth();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  // Fonction pour gérer l'ouverture et la fermeture du modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Adresse email soumise :", email);

    try {
      sendEmailBusiness(user?.id?.toString(), email);
    } catch (error) {
      console.error("probleme", error);
    }
    handleClose();
  };

  return (
    <>
      {/* Bouton pour ouvrir le modal */}
      <Button variant="primary" onClick={handleShow}>
        Envoyer un email
      </Button>

      {/* Modal pour entrer l'adresse email */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entrer l'adresse email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Formulaire pour entrer l'email */}
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
              Soumettre
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmailModal;
