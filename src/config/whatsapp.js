// src/config/whatsapp.js
export const WHATSAPP_NUMBER = "918805379060"; // Your number with country code
export const WHATSAPP_MESSAGE = "Hi, I want to build a website";

export const getWhatsAppURL = (message = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
