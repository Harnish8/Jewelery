"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/LuxuryEffects";

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
      <RevealOnScroll mode="fade-in-up" className="bg-[#1B4341] text-white rounded-3xl p-8 sm:p-14 border border-[#122D2B] shadow-2xl relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200 block mb-2">
            Private Concierge & Salon Appointments
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white">
            Request Private Consultation
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light mt-3 leading-relaxed">
            Connect with an Eglanto private jeweler to schedule a personal viewing, inquire about our archive creations, or commission a personalized ethical gold heirloom.
          </p>
        </div>

        <form onSubmit={handleSubmitInquiry} className="mt-10 max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col text-left">
              <label className="text-xs uppercase tracking-widest font-bold text-amber-200/90 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Your Name"
                className="w-full bg-[#143230] text-white px-5 py-3.5 rounded-xl border border-white/20 text-sm focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 outline-none transition-all placeholder:text-zinc-400"
              />
            </div>
            <div className="flex flex-col text-left">
              <label className="text-xs uppercase tracking-widest font-bold text-amber-200/90 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full bg-[#143230] text-white px-5 py-3.5 rounded-xl border border-white/20 text-sm focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 outline-none transition-all placeholder:text-zinc-400"
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <label className="text-xs uppercase tracking-widest font-bold text-amber-200/90 mb-2">
              Area of Interest
            </label>
            <select
              value={formState.interest}
              onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
              className="w-full bg-[#143230] text-white px-5 py-3.5 rounded-xl border border-white/20 text-sm focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 outline-none transition-all"
            >
              <option value="Botanica & Ethical Gold" className="bg-[#1B4341]">Botanica & Ethical Gold Collection</option>
              <option value="Bespoke Commission" className="bg-[#1B4341]">Bespoke Commission / Custom Creation</option>
              <option value="Private Salon Appointment" className="bg-[#1B4341]">Private Salon Appointment (Lugano/Milan)</option>
              <option value="Archive Acquisition" className="bg-[#1B4341]">Archive Acquisition Inquiry</option>
            </select>
          </div>

          <div className="flex flex-col text-left">
            <label className="text-xs uppercase tracking-widest font-bold text-amber-200/90 mb-2">
              Personal Notes & Specifications
            </label>
            <textarea
              rows={4}
              required
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              placeholder="Detail your preferred gemstone cuts, timeline, or specific collection inquiries..."
              className="w-full bg-[#143230] text-white px-5 py-3.5 rounded-xl border border-white/20 text-sm focus:border-amber-300 focus:ring-2 focus:ring-amber-300/20 outline-none transition-all placeholder:text-zinc-400 resize-none"
            ></textarea>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-12 py-4 bg-white text-[#1B4341] rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-200 transition-all shadow-xl transform hover:-translate-y-1 active:translate-y-0"
            >
              Submit Consultation Request
            </button>
          </div>

          {inquirySent && (
            <div className="mt-4 p-4 bg-amber-300/20 border border-amber-300/40 text-amber-200 rounded-2xl text-center animate-fade-in-up font-medium text-sm">
              ✿ Thank you. Your consultation request has been forwarded to senior atelier management. A private advisor will contact you shortly.
            </div>
          )}
        </form>
      </RevealOnScroll>
    </section>
  );
}
