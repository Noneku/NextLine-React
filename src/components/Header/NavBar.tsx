import React from "react";
import { useAuth } from "../Context/AuthContext"; // Assure-toi d'importer le bon chemin
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginForm from "../Forms/LoginForm";
import { Button } from "react-bootstrap";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [showLoginForm, setShowLoginForm] = React.useState(false);

  const handleShowLoginForm = () => setShowLoginForm(true);
  const handleCloseLoginForm = () => setShowLoginForm(false);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Next-Line 🚀</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <FaHome /> Accueil
              </Nav.Link>
              <Nav.Link href="#about">
                <FaInfoCircle /> À Propos
              </Nav.Link>
              <Nav.Link href="#services">
                <FaCogs /> Services
              </Nav.Link>
              <Nav.Link href="#contact">
                <FaEnvelope /> Contact
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {isAuthenticated ? (
                <>
                  <Navbar.Text className="me-3">Bonjour, {user} 👋</Navbar.Text>
                  <Button variant="outline-danger" onClick={logout}>
                    <FaSignOutAlt /> Déconnexion
                  </Button>
                </>
              ) : (
                <Button variant="primary" onClick={handleShowLoginForm}>
                  <FaSignInAlt /> Connexion
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showLoginForm && <LoginForm handleClose={handleCloseLoginForm} />}
    </>
  );
};

export default NavBar;
