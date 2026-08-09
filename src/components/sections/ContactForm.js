"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/LuxuryEffects";
import Script from "next/script";

export default function ContactForm() {
  const [inquirySent, setInquirySent] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", interest: "Botanica & Ethical Gold", message: "" });

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setFormState({ name: "", email: "", interest: "Botanica & Ethical Gold", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-16 max-w-5xl mx-auto border-t border-[#EADFC9]">
      <RevealOnScroll mode="fade-in-up" className="bg-white text-[#1B4341] rounded-3xl p-8 sm:p-14 border border-[#122D2B] shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5d44f] block mb-2">
            Private Concierge & Salon Appointments
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
            Request Private Consultation
          </h2>
          <p className="text-xs sm:text-sm text-[#1B4341] font-light mt-3 leading-relaxed">
            Connect with an G R Jewellers private jeweller to schedule a personal viewing, inquire about our archive creations, or commission a personalized ethical gold heirloom.
          </p>
        </div>

        <iframe
                    src="https://api.leadconnectorhq.com/widget/form/uJZQZ3GHGTXuMCFqDYdI"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      borderRadius: 0,
                    }}
                    id="inline-uJZQZ3GHGTXuMCFqDYdI"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="G R Jewellers"
                    data-height="undefined"
                    data-layout-iframe-id="inline-uJZQZ3GHGTXuMCFqDYdI"
                    data-form-id="uJZQZ3GHGTXuMCFqDYdI"
                    title="G R Jewellers"
                  ></iframe>
                  <Script
                    src="https://link.msgsndr.com/js/form_embed.js"
                    strategy="lazyOnload"
                  />

        
      </RevealOnScroll>
    </section>
  );
}
