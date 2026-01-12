import "./WhatsAppCTA.css";
import { getWhatsAppURL } from "../../config/whatsapp";

export default function WhatsAppCTA() {
  return (
    <section className="whatsapp-cta">
      <div className="cta-content">
        <span className="cta-badge">💡 Got an idea?</span>

        <h2>
          Let’s Build Something <span>Beautiful</span> ❤️
        </h2>

        <p>
          Share your idea with us on WhatsApp and get your
          <strong> custom surprise website</strong> started today.
        </p>

        <a
          href={getWhatsAppURL(
            "Hi! I have an idea for a surprise website. Please guide me."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
