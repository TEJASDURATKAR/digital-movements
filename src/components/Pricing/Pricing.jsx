import { Container, Row, Col, Button } from "react-bootstrap";
import "./Pricing.css";
import { getWhatsAppURL } from "../../config/whatsapp";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹499",
      tag: "Starter",
      features: [
        "Text Content",
        "Background Music",
        "Mobile Friendly Design",
        "1 Page Website",
      ],
    },
    {
      name: "Standard",
      price: "₹999",
      tag: "Most Popular",
      popular: true,
      features: [
        "Photos + Text",
        "Background Music",
        "Custom Design",
        "Mobile & Desktop Friendly",
      ],
    },
    {
      name: "Premium",
      price: "₹1999",
      tag: "Best Value",
      features: [
        "Full Animations",
        "Unlimited Photos",
        "Premium Design",
        "Priority Delivery",
      ],
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <Container>
        <div className="pricing-header">
          <h2>Pricing Plans</h2>
          <p>Choose a plan that fits your surprise perfectly 💖</p>
        </div>

        <Row>
          {plans.map((plan, i) => (
            <Col md={4} sm={12} key={i} className="mb-4">
              <div className={`price-card ${plan.popular ? "popular" : ""}`}>
                {plan.tag && <span className="price-tag">{plan.tag}</span>}

                <h4>{plan.name}</h4>
                <h3>{plan.price}</h3>

                <ul>
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✓ {f}</li>
                  ))}
                </ul>

                <Button
                  className="price-btn"
                  href={getWhatsAppURL(
                    `I want to order the ${plan.name} plan. Please share details.`
                  )}
                  target="_blank"
                >
                  Order on WhatsApp
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        <p className="pricing-note">
          *Prices may vary based on customization. Final cost confirmed on WhatsApp.
        </p>
      </Container>
    </section>
  );
}
