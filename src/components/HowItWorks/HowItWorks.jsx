import { Container, Row, Col } from "react-bootstrap";
import "./HowItWorks.css";

export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Contact on WhatsApp",
      desc: "Click the WhatsApp button and say hi",
    },
    {
      step: "2",
      title: "Share Details",
      desc: "Send photos, text, and your idea",
    },
    {
      step: "3",
      title: "We Build Website",
      desc: "We design and build your surprise website",
    },
    {
      step: "4",
      title: "Get Your Link 🎉",
      desc: "Share the link and surprise your loved one",
    },
  ];

  return (
    <section className="how" id="how-it-works">
      <Container>
        <div className="how-header">
          <h2>How It Works</h2>
          <p>Just 4 simple steps to create a beautiful digital surprise</p>
        </div>

        <Row>
          {steps.map((item, i) => (
            <Col md={3} sm={6} xs={12} key={i} className="mb-4">
              <div className="how-card">
                <div className="step-circle">{item.step}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
