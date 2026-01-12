import { getWhatsAppURL } from "../../config/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppURL()}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "#fff",
        borderRadius: "50%",
        padding: "15px",
        fontSize: "24px",
        textDecoration: "none",
        zIndex: 9999,
      }}
    >
      💬
    </a>
  );
}
