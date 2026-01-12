import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { getWhatsAppURL } from "../../config/whatsapp";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          {/* Brand */}
          <Col md={4} sm={12} className="mb-3">
            <h4>Digital Moments</h4>
            <p>
              We create beautiful surprise websites for birthdays, love,
              proposals & weddings 💖
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} sm={12} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} sm={12} className="mb-3">
            <h5>Contact</h5>
            <p>📱 WhatsApp Support</p>

            <a
              className="price-btn"
              href={getWhatsAppURL(
                "Hi! I want to create a surprise website. Please share details."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </Col>
        </Row>

        <hr />

        <p className="footer-bottom">
          © {new Date().getFullYear()} Digital Moments. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
