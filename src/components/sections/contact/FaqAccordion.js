"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const faqs = [
  {
    q: "Do you have a walk-in store?",
    a: "No — Eglanto operates entirely by private appointment across our Sydney, Melbourne, and Perth ateliers. This lets every visit be a dedicated, one-on-one session with an advisor.",
  },
  {
    q: "How does a bespoke commission work?",
    a: "It starts with a private consultation to discuss your vision, budget, and timeline. Our artisans then sketch, cast, and finish the piece by hand, with check-ins at every stage.",
  },
  {
    q: "Where does your gold and stones come from?",
    a: "Every gram of gold we use is 100% recycled. Every gemstone is conflict-free and fully traceable to its Western Australian source.",
  },
  {
    q: "Do you offer resizing or repairs?",
    a: "Yes. All Eglanto pieces include complimentary resizing within the first year, and our ateliers offer ongoing repair and maintenance services after that.",
  },
  {
    q: "How long does a commission typically take?",
    a: "Most bespoke pieces take 6–10 weeks from final design approval, depending on complexity and stone sourcing.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 lg:px-16 max-w-3xl mx-auto border-t border-[#EADFC9]">
      <RevealOnScroll mode="fade-in-up" className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Good To Know
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Frequently Asked" type="words" />
        </h2>
      </RevealOnScroll>

      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <RevealOnScroll key={item.q} mode="fade-in-up" delay={idx * 80}>
              <div className="border border-[#EADFC9] rounded-2xl bg-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#1D1D1D]">{item.q}</span>
                  <IconChevronDown
                    className={`w-5 h-5 text-[#1B4341] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-[#666] font-light leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
