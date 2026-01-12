import { Container, Row, Col } from "react-bootstrap";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const reasons = [
    { text: "100% Custom Made", icon: "🎨" },
    { text: "Affordable Pricing", icon: "💰" },
    { text: "Mobile Friendly Websites", icon: "📱" },
    { text: "Fast Delivery (24–48 hrs)", icon: "⚡" },
    { text: "WhatsApp Support", icon: "💬" },
    { text: "Loved by Customers", icon: "❤️" },
  ];

  return (
    <section className="why" id="why-choose-us">
      <Container>
        <div className="why-header">
          <h2>Why Choose Us?</h2>
          <p>We focus on quality, speed, and happiness ✨</p>
        </div>

        <Row>
          {reasons.map((item, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <div
                className="why-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="why-icon">{item.icon}</span>
                <h5>{item.text}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
