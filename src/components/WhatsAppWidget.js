"use client";

import { IconWhatsApp, IconClose } from "@/components/Icons";

export default function SimpleWhatsAppButton() {
  const phoneNumber = "919825238877";
  const defaultMessage = encodeURIComponent("Hello! I came from your website.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <IconWhatsApp className="h-7 w-7 fill-current" />
    </a>
  );
}

