import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Next-Line</h5>
            <p>
              © 2024 Next-Line. Tous droits réservés.
              <br />
              123 Rue Exemple, Paris, France
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <h5>Suivez-nous</h5>
            <div className="d-flex justify-content-end">
              <a
                href="https://facebook.com"
                className="me-3"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                className="me-3"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                className="me-3"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
