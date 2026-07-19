"use client";

import { useState } from "react";
import { IconCheck } from "@/components/Icons";

const initialState = {
  name: "",
  email: "",
  phone: "",
  atelier: "Sydney",
  appointment: false,
  message: "",
};

export default function ContactPageForm() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState(initialState);
    }, 4500);
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[#1B4341] text-white flex items-center justify-center mb-6">
          <IconCheck className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-serif text-[#1B4341]">Message Received</h3>
        <p className="text-sm text-[#666] font-light mt-3 max-w-xs leading-relaxed">
          Thank you for reaching out. A private advisor will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col">
          <label className="text-xs uppercase tracking-widest font-bold text-[#1B4341] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="Your Name"
            className="w-full bg-[#FBF8F3] text-[#1D1D1D] px-5 py-3.5 rounded-xl border border-[#EADFC9] text-sm focus:border-[#1B4341] focus:ring-2 focus:ring-[#1B4341]/10 outline-none transition-all placeholder:text-zinc-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs uppercase tracking-widest font-bold text-[#1B4341] mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formState.phone}
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
            placeholder="Optional"
            className="w-full bg-[#FBF8F3] text-[#1D1D1D] px-5 py-3.5 rounded-xl border border-[#EADFC9] text-sm focus:border-[#1B4341] focus:ring-2 focus:ring-[#1B4341]/10 outline-none transition-all placeholder:text-zinc-400"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-xs uppercase tracking-widest font-bold text-[#1B4341] mb-2">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          placeholder="name@example.com"
          className="w-full bg-[#FBF8F3] text-[#1D1D1D] px-5 py-3.5 rounded-xl border border-[#EADFC9] text-sm focus:border-[#1B4341] focus:ring-2 focus:ring-[#1B4341]/10 outline-none transition-all placeholder:text-zinc-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs uppercase tracking-widest font-bold text-[#1B4341] mb-2">
          Preferred Atelier
        </label>
        <select
          value={formState.atelier}
          onChange={(e) => setFormState({ ...formState, atelier: e.target.value })}
          className="w-full bg-[#FBF8F3] text-[#1D1D1D] px-5 py-3.5 rounded-xl border border-[#EADFC9] text-sm focus:border-[#1B4341] focus:ring-2 focus:ring-[#1B4341]/10 outline-none transition-all"
        >
          <option value="Sydney">Sydney</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Perth">Perth</option>
          <option value="No preference">No preference</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-xs uppercase tracking-widest font-bold text-[#1B4341] mb-2">
          Your Message *
        </label>
        <textarea
          rows={4}
          required
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Tell us about your enquiry or the piece you have in mind..."
          className="w-full bg-[#FBF8F3] text-[#1D1D1D] px-5 py-3.5 rounded-xl border border-[#EADFC9] text-sm focus:border-[#1B4341] focus:ring-2 focus:ring-[#1B4341]/10 outline-none transition-all placeholder:text-zinc-400 resize-none"
        ></textarea>
      </div>

      <label className="flex items-start gap-3 text-xs text-[#555] font-light cursor-pointer">
        <input
          type="checkbox"
          checked={formState.appointment}
          onChange={(e) => setFormState({ ...formState, appointment: e.target.checked })}
          className="mt-0.5 w-4 h-4 accent-[#1B4341]"
        />
        <span>I&rsquo;d like to schedule an in-person appointment at my preferred atelier.</span>
      </label>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-[#1B4341] text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#122D2B] transition-all shadow-md transform hover:-translate-y-0.5"
      >
        Send Message
      </button>
    </form>
  );
}
