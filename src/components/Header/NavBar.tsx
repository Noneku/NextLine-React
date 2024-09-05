import React from "react";
import { useAuth } from "../../Context/auth/AuthContextHook";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginForm from "../Forms/LoginForm";
import { Button } from "react-bootstrap";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [showLoginForm, setShowLoginForm] = React.useState(false);

  const handleShowLoginForm = () => setShowLoginForm(true);
  const handleCloseLoginForm = () => setShowLoginForm(false);

  console.log("isAuthenticated:", isAuthenticated);
  console.log("user:", user);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-sm p-3 mb-5 bg-white rounded sticky-top"
        style={{ zIndex: 1000 }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">
            Next-Line 🚀
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="d-flex align-items-center">
                <FaHome className="me-2" /> Accueil
              </Nav.Link>
              <Nav.Link href="#about" className="d-flex align-items-center">
                <FaInfoCircle className="me-2" /> À Propos
              </Nav.Link>
              <Nav.Link href="#services" className="d-flex align-items-center">
                <FaCogs className="me-2" /> Services
              </Nav.Link>
              <Nav.Link href="#contact" className="d-flex align-items-center">
                <FaEnvelope className="me-2" /> Contact
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {isAuthenticated ? (
                <>
                  <NavDropdown
                    title={`Bonjour, ${
                      user
                        ? user.nomUtilisateur + " " + user.prenomUtilisateur
                        : "Invité"
                    } 👋`}
                    id="user-dropdown"
                    align="end"
                    className="me-3"
                  >
                    <Link to="/profile" className="dropdown-item">
                      <FaUser className="me-2" /> Profile
                    </Link>
                    {user?.roleDTO.nomRole === "FORMATEUR" &&
                      isAuthenticated && (
                        <Link to="/internList" className="dropdown-item">
                          <FaUser className="me-2" /> Liste des stagiaires
                        </Link>
                      )}
                    <NavDropdown.Item href="#settings">
                      <FaCogs className="me-2" /> Paramètres
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
                      <FaSignOutAlt className="me-2" /> Déconnexion
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Navbar.Text className="me-3 text-muted">
                    {user?.roleDTO.nomRole}
                  </Navbar.Text>
                </>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleShowLoginForm}
                  className="d-flex align-items-center"
                >
                  <FaSignInAlt className="me-2" /> Connexion
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
