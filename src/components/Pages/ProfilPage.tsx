import React, { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  Button,
  Form,
} from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaBirthdayCake,
  FaBriefcase,
} from "react-icons/fa";
import { useAuth } from "../../Context/auth/AuthContextHook";
import { User } from "../../models/User"; // Assurez-vous d'importer User depuis le bon chemin
import { updateUser } from "../../services/apiService"; // Fonction pour mettre à jour l'utilisateur

// Fonction pour formater les dates
const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("fr-FR");
};

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<User>(user as User);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(formData); // Assurez-vous que cette fonction met à jour l'utilisateur
      setEditMode(false);
    } catch (error) {
      console.log("Erreur lors de la mise à jour", error);
    }
  };

  if (!user) {
    return <p>Chargement des informations de l'utilisateur...</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm p-4">
            <Card.Body>
              <div className="d-flex align-items-center mb-4">
                <FaUser size={50} className="text-primary me-3" />
                <div>
                  <h2 className="mb-0">
                    {formData.prenomUtilisateur} {formData.nomUtilisateur}{" "}
                    {formData.isactive ? (
                      <FaCheckCircle className="text-success" />
                    ) : (
                      <FaTimesCircle className="text-danger" />
                    )}
                  </h2>
                  <Badge bg="secondary">{formData.roleDTO.nomRole}</Badge>
                </div>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>
                        <FaEnvelope className="me-2" /> Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="emailUtilisateur"
                        value={formData.emailUtilisateur}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                      />
                    </Form.Group>
                    <Form.Group controlId="dateCreation">
                      <Form.Label>
                        <FaCalendarAlt className="me-2" /> Date de création
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="dateCreation"
                        value={formatDate(formData.dateCreation)}
                        onChange={handleInputChange}
                        readOnly
                      />
                    </Form.Group>
                    <Form.Group controlId="numeroBeneficiaire">
                      <Form.Label>
                        <FaBriefcase className="me-2" /> Numéro de stagiaire
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="numeroBeneficiaireStagiaire"
                        value={formData.numeroBeneficiaireStagiaire ?? ""}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="dateNaissance">
                      <Form.Label>
                        <FaBirthdayCake className="me-2" /> Date de naissance
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="dateNaissance"
                        value={formData.dateNaissance ?? ""}
                        onChange={handleInputChange}
                        readOnly={!editMode}
                      />
                    </Form.Group>
                    <Form.Group controlId="statut">
                      <Form.Label>
                        <FaCalendarAlt className="me-2" /> Statut
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={formData.isactive ? "Actif 🟢" : "Inactif 🔴"}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant={editMode ? "success" : "primary"}
                  type={editMode ? "submit" : "button"}
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? "Enregistrer" : "Modifier"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
