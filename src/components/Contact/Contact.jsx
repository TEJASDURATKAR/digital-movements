import { useState } from "react";
import "./Contact.css";
import { getWhatsAppURL } from "../../config/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp message
    const whatsappMessage = `
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}
    `;

    // Open WhatsApp
    window.open(getWhatsAppURL(whatsappMessage), "_blank");

    // **Reset the form after opening WhatsApp**
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Send me a message!</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
