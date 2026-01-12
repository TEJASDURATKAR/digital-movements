import { Container, Button } from "react-bootstrap";
import "./Hero.css";
import { getWhatsAppURL } from "../../config/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Container fluid className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">✨ Surprise Your Loved Ones</span>

          <h1>
            Create <span>Beautiful Digital Moments</span>
            <br /> That Last Forever ❤️
          </h1>

          <p>
            We design custom surprise websites for
            <strong> birthdays, love stories, proposals & weddings</strong>.
            <br />
            Simple • Fast • Affordable
          </p>

          <div className="hero-buttons">
            <Button
              className="hero-btn primary"
              href="#demos"
            >
              View Demo Websites
            </Button>

            <Button
              className="hero-btn whatsapp"
              href={getWhatsAppURL(
                "Hi! I want to create a surprise website. Please share demo links."
              )}
              target="_blank"
            >
              💬 Chat on WhatsApp
            </Button>
          </div>

          <div className="hero-trust">
            ⭐ Trusted by Happy Customers • 🚀 Delivered in 24–48 hrs
          </div>
        </div>
      </Container>
    </section>
  );
}
