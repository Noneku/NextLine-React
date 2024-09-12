import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { FaBuilding } from "react-icons/fa";

// Définition du type pour les informations sur les entreprises
type CompanyInfo = {
  id: number;
  name: string;
  email: string;
  address: string;
  foundedDate: [number, number, number];
};

// Composant principal qui affiche les informations sur les entreprises
const CompanyList: React.FC = () => {
  // Exemple de données d'entreprises
  const companies: CompanyInfo[] = [
    {
      id: 1,
      name: "Entreprise ABC",
      email: "contact@entrepriseabc.com",
      address: "123 Rue Principale, Paris",
      foundedDate: [2020, 1, 15],
    },
    {
      id: 2,
      name: "Société XYZ",
      email: "contact@societexyz.com",
      address: "456 Avenue des Champs, Lyon",
      foundedDate: [2018, 5, 23],
    },
    {
      id: 3,
      name: "Startup Innov",
      email: "hello@startupinnov.com",
      address: "789 Boulevard de la République, Marseille",
      foundedDate: [2021, 8, 30],
    },
  ];

  const formatDate = (dateArray: [number, number, number]) => {
    const [year, month, day] = dateArray;
    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">🏢 Liste des Entreprises</h2>
      <Row>
        {companies.map((company) => (
          <Col md={4} key={company.id} className="mb-4">
            <Card className="shadow-sm p-3 h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center mb-3">
                    <FaBuilding size={40} className="text-primary me-3" />
                    <h4 className="mb-0">{company.name}</h4>
                  </div>
                  <div className="mb-3">
                    <p className="mb-1">
                      <strong>Adresse :</strong> {company.address}
                    </p>
                    <p className="mb-1">
                      <strong>Date de création :</strong>{" "}
                      {formatDate(company.foundedDate)}
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompanyList;
