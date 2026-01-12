import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { getWhatsAppURL } from "../../config/whatsapp";
import "./Navbar.css";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // 👈 control navbar

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}              // 👈 controlled
      className={`main-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="brand">
          Digital <span>Moments</span> ❤️
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)} // 👈 manual toggle
        />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-center nav-links">
            {/* NAV LINKS */}
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#demos">Demos</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            {/* WhatsApp CTA */}
            <Button
              className="whatsapp-btn"
              href={getWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
