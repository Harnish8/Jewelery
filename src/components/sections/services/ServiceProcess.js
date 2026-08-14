"use client";

import { RevealOnScroll } from "@/components/LuxuryEffects";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Meet with our jewellery experts to discuss your ideas, style, budget, and preferences for a personalised design experience.",
  },
  {
    step: "02",
    title: "Design & Approval",
    description:
      "We create detailed design concepts and refine every element with your feedback before the crafting process begins.",
  },
  {
    step: "03",
    title: "Craft & Perfect",
    description:
      "Our skilled artisans carefully handcraft your jewellery using premium materials, ensuring precision in every detail.",
  },
  {
    step: "04",
    title: "Deliver & Treasure",
    description:
      "Receive your beautifully finished jewellery, crafted to celebrate life's special moments and be cherished for generations.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBF8F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <RevealOnScroll mode="fade-in-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#1B4341]/30" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1B4341]">
                How It Works
              </span>
              <span className="h-px w-8 bg-[#1B4341]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1B4341] tracking-tight">
              Your Journey With Us
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#666] font-light max-w-lg mx-auto leading-relaxed">
              From your first consultation to the final handcrafted piece, our
              process is transparent, personalised, and designed to bring your
              vision to life with complete confidence.
            </p>
          </div>
        </RevealOnScroll>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EADFC9] to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((item, idx) => (
              <RevealOnScroll
                key={item.step}
                mode="fade-in-up"
                delay={idx * 150}
              >
                <div className="group relative text-center bg-white rounded-2xl p-6 sm:p-8 border border-[#EADFC9]/50 hover:border-[#1B4341]/30 hover:shadow-xl transition-all duration-500">
                  {/* Step number */}
                  <div className="w-14 h-14 rounded-full bg-[#1B4341] text-white flex items-center justify-center text-lg font-serif mx-auto mb-5 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    {item.step}
                  </div>

                  {/* Arrow connector (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[#EADFC9] text-xl">
                      →
                    </div>
                  )}

                  <h3 className="text-lg font-serif text-[#1B4341] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#666] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <RevealOnScroll mode="fade-in-up" delay={400}>
          <div className="mt-16 sm:mt-20 bg-[#1B4341] rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-white/5" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white/5" />
              <div className="absolute top-8 left-[20%] w-3 h-3 border border-white/10 rotate-45" />
              <div className="absolute bottom-12 right-[25%] w-4 h-4 border border-white/10 rotate-45" />
            </div>

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight mb-4">
                Ready to Create Your Perfect Jewellery?
              </h3>
              <p className="text-sm sm:text-base text-white/60 font-light max-w-lg mx-auto leading-relaxed mb-8">
                Whether you&apos;re designing a bespoke ring, choosing wedding
                jewellery, or creating a personalised heirloom, our experts are
                here to bring your vision to life with exceptional
                craftsmanship.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#1B4341] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#EADFC9] transition-all shadow-lg transform hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="tel:+918160383801"
                  className="border border-white/30 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Call Us Today
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
