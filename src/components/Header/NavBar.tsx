// NavBar.js
import React from "react";
import { useAuth } from "../../Context/auth/AuthContextHook";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaEnvelope,
  FaUser,
  FaRocket,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import EmailModal from "../Pages/Stagiaire/EmailModal";
import LoginForm from "../Forms/LoginForm";

const NavBar = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [showEmailModal, setShowEmailModal] = React.useState(false);
  const [showLoginForm, setShowLoginForm] = React.useState(false);

  const handleShowEmailModal = () => setShowEmailModal(true);
  const handleCloseEmailModal = () => setShowEmailModal(false);

  const handleShowLoginForm = () => setShowLoginForm(true);
  const handleCloseLoginForm = () => setShowLoginForm(false);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-sm p-3 mb-5 bg-white rounded sticky-top"
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
                    {user?.roleDTO?.nomRole === "FORMATEUR" && (
                      <Link to="/internList" className="dropdown-item">
                        <FaRocket className="me-2" /> Ajouter un stagiaire
                      </Link>
                    )}
                    {user?.roleDTO?.nomRole === "STAGIAIRE" && (
                      <>
                        <Link
                          to="#"
                          className="dropdown-item"
                          onClick={handleShowEmailModal}
                        >
                          <FaEnvelope className="me-2" /> Démarrer une procédure
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <FaBuilding className="me-2" /> Consulter les
                          entreprises
                        </Link>
                      </>
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
                    {user?.roleDTO?.nomRole}
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
      {showEmailModal && <EmailModal handleClose={handleCloseEmailModal} />}
    </>
  );
};

export default NavBar;
