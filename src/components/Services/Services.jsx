import { Container, Row, Col, Card } from "react-bootstrap";
import "./Services.css";

export default function Services() {
  const servicesList = [
    "Birthday Surprise Website",
    "Couple / Love Website",
    "Proposal Page",
    "Wedding Invitation",
  ];

  return (
    <section id="services" className="services">
      <Container>
        <h2 className="text-center mb-5">What I Offer</h2>
        <Row>
          {servicesList.map((service, i) => (
            <Col md={3} sm={6} xs={12} key={i} className="mb-4">
              <Card className="service-card text-center shadow-sm h-100">
                <Card.Body>
                  <h5 className="service-title">{service}</h5>
                  <p className="service-desc">
                    I can create a beautiful {service.toLowerCase()} for you, fully personalized.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
