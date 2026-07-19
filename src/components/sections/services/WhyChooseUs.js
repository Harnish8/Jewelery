"use client";

import { RevealOnScroll } from "@/components/LuxuryEffects";

const reasons = [
  {
    number: "01",
    title: "Master Craftsmanship",
    description:
      "Over five decades of jewellery-making expertise passed down through generations. Every piece is meticulously handcrafted by our skilled artisans.",
    icon: "🔨",
  },
  {
    number: "02",
    title: "Ethically Sourced Materials",
    description:
      "We use 100% recycled gold and conflict-free, certified natural diamonds. Luxury that you can feel good about wearing.",
    icon: "🌿",
  },
  {
    number: "03",
    title: "Personalised Experience",
    description:
      "From private consultations to bespoke design sessions, every client receives dedicated, white-glove service tailored to their vision.",
    icon: "✨",
  },
  {
    number: "04",
    title: "Lifetime Guarantee",
    description:
      "Every Eglanto piece comes with a lifetime craftsmanship warranty, complimentary cleaning, and free annual inspections for your peace of mind.",
    icon: "🛡️",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EDE1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sticky headline */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <RevealOnScroll mode="fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#1B4341]/30" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1B4341]">
                  Why Eglanto
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1B4341] tracking-tight leading-tight">
                The Eglanto
                <br />
                <span className="text-[#6B5B3E]">Difference</span>
              </h2>
              <p className="mt-6 text-sm sm:text-base text-[#666] font-light leading-relaxed max-w-sm">
                We don&rsquo;t just make jewellery — we create lasting legacies.
                Here&rsquo;s what sets us apart from every other jeweller.
              </p>

              <div className="mt-8 hidden lg:block">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1B4341] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#122D2B] transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  Start Your Journey
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-7 space-y-6">
            {reasons.map((reason, idx) => (
              <RevealOnScroll
                key={reason.number}
                mode="fade-in-up"
                delay={idx * 120}
              >
                <div className="group bg-white rounded-2xl p-6 sm:p-8 border border-[#EADFC9]/60 hover:border-[#1B4341]/20 hover:shadow-xl transition-all duration-500 cursor-default">
                  <div className="flex items-start gap-5 sm:gap-6">
                    {/* Number badge */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1B4341]/5 flex items-center justify-center shrink-0 group-hover:bg-[#1B4341] transition-colors duration-500">
                      <span className="text-xl group-hover:hidden transition-opacity">
                        {reason.icon}
                      </span>
                      <span className="text-sm font-serif text-white hidden group-hover:block transition-opacity">
                        {reason.number}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg sm:text-xl font-serif text-[#1B4341] tracking-tight">
                          {reason.title}
                        </h3>
                        <span className="text-xs font-bold text-[#EADFC9] tracking-widest font-sans">
                          {reason.number}
                        </span>
                      </div>
                      <p className="text-sm text-[#666] font-light leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            {/* Mobile CTA */}
            <div className="lg:hidden text-center pt-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1B4341] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#122D2B] transition-all shadow-md"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
