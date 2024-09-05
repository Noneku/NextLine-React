import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
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

// Composant de la page de profil
const UserProfile: React.FC = () => {
  const { user } = useAuth();

  // Vérifie que l'utilisateur est défini
  if (!user) {
    return <p>Chargement des informations de l'utilisateur...</p>;
  }

  const formatDate = (dateArray: [number, number, number]) => {
    const [year, month, day] = dateArray;
    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

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
                    {user.prenomUtilisateur} {user.nomUtilisateur}{" "}
                    {user.isactive ? (
                      <FaCheckCircle className="text-success" />
                    ) : (
                      <FaTimesCircle className="text-danger" />
                    )}
                  </h2>
                  <Badge bg="secondary">{user.roleDTO.nomRole}</Badge>
                </div>
              </div>
              <Row>
                <Col md={6}>
                  <p>
                    <FaEnvelope className="me-2" />
                    <strong>Email:</strong> {user.emailUtilisateur}
                  </p>
                  <p>
                    <FaCalendarAlt className="me-2" />
                    <strong>Date de création:</strong>{" "}
                    {formatDate(user.dateCreation)}
                  </p>
                  <p>
                    <FaBriefcase className="me-2" />
                    <strong>Numéro de stagiaire:</strong>{" "}
                    {user.numeroBeneficiaireStagiaire}
                  </p>
                </Col>
                <Col md={6}>
                  <p>
                    <FaBirthdayCake className="me-2" />
                    <strong>Date de naissance:</strong>{" "}
                    {formatDate(user.dateNaissance)}
                  </p>
                  <p>
                    <FaCalendarAlt className="me-2" />
                    <strong>Statut:</strong>{" "}
                    {user.isactive ? "Actif 🟢" : "Inactif 🔴"}
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
