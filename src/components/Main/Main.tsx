import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import videoSrc from "../../assets/WorkVideo.mp4"; // Assure-toi de remplacer ce chemin
import heroImage from "../../assets/photo1.jpg"; // Assure-toi de remplacer ce chemin
import featureImage1 from "../../assets/photo2.jpg"; // Assure-toi de remplacer ce chemin
import featureImage2 from "../../assets/photo3.jpg"; // Assure-toi de remplacer ce chemin

const Main: React.FC = () => {
  return (
    <main>
      <section className="hero-section text-center py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-4 mb-4">Bienvenue sur Nextline 🚀</h1>
              <p className="lead mb-4">
                Découvrez notre application dédiée à la dématérialisation des
                conventions de stage et au suivi des formateurs.
                <br /> Optimisez la gestion des stages avec des outils puissants
                et une interface intuitive.
              </p>
              <Button variant="primary" href="#contact">
                Nous Contacter
              </Button>
            </Col>
            <Col md={6}>
              <Image src={heroImage} fluid className="rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="video-section text-center py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">Découvrez en vidéo</h2>
              <video
                autoPlay
                loop
                muted
                controls
                width="100%"
                className="rounded"
              >
                <source src={videoSrc} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo HTML5.
              </video>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="features-section py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <Image src={featureImage1} fluid className="rounded mb-3" />
              <h3>Mise en relation simplifiée</h3>
              <p>
                Notre application facilite la mise en relation entre entreprises
                et stagiaires, offrant un processus de sélection et de
                communication efficace et sécurisé.
              </p>
            </Col>
            <Col md={6} className="mb-4">
              <Image src={featureImage2} fluid className="rounded mb-3" />
              <h3>Sécurisée et facile à utiliser</h3>
              <p>
                Profitez d'une interface intuitive avec des fonctionnalités
                sécurisées pour garantir la confidentialité des informations et
                une expérience utilisateur fluide.
              </p>
            </Col>
            <Col md={6} className="mb-4">
              <Image src={featureImage2} fluid className="rounded mb-3" />
              <h3>Support client réactif</h3>
              <p>
                Notre équipe de support est disponible pour vous aider à chaque
                étape, assurant une assistance rapide et efficace pour répondre
                à toutes vos questions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Main;
