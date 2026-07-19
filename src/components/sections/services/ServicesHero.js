/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const serviceHighlights = [
  { label: "Bespoke Rings", icon: "💎" },
  { label: "Wedding Specialist", icon: "💍" },
  { label: "Gold & Diamond", icon: "✦" },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#1B4341] min-h-[85vh] flex items-center">
      {/* Abstract geometric shapes for unique look */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Large circle accent */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-white/5" />
        {/* Warm gradient blob */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#EADFC9]/15 via-transparent to-transparent rounded-full blur-3xl" />
        {/* Diagonal accent line */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Floating diamond pattern */}
        <div className="absolute top-20 left-[15%] w-3 h-3 border border-white/20 rotate-45" />
        <div className="absolute top-40 right-[25%] w-4 h-4 border border-white/15 rotate-45" />
        <div className="absolute bottom-32 left-[35%] w-2 h-2 border border-white/25 rotate-45" />
        <div className="absolute bottom-48 right-[15%] w-5 h-5 border border-white/10 rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-20 sm:py-24 w-full">
        <RevealOnScroll mode="fade-in-up">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/50 mb-12 sm:mb-16">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">Services</span>
          </nav>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <RevealOnScroll mode="fade-in-up" delay={100}>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-[#EADFC9]/60" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#EADFC9]">
                  What We Offer
                </span>
              </div>
            </RevealOnScroll>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.08] tracking-tight">
              <TextSplitReveal text="Crafting" type="words" delay={200} />
              <br />
              <TextSplitReveal text="Timeless" type="words" delay={350} />
              <br />
              <span className="text-[#EADFC9]">
                <TextSplitReveal text="Elegance" type="words" delay={500} />
              </span>
            </h1>

            <RevealOnScroll mode="fade-in-up" delay={700}>
              <p className="mt-8 text-sm sm:text-base text-white/60 font-light max-w-md leading-relaxed">
                From bespoke engagement rings to heirloom wedding sets, we bring
                your vision to life with ethically sourced gold, silver, and
                diamonds — handcrafted with decades of expertise.
              </p>
            </RevealOnScroll>

            <RevealOnScroll mode="fade-in-up" delay={900}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-white text-[#1B4341] px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#EADFC9] transition-all shadow-lg transform hover:-translate-y-0.5"
                >
                  Get Started
                </a>
                <a
                  href="#our-services"
                  className="border border-white/30 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Explore Services
                </a>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Floating service cards */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-1 gap-5 w-full max-w-sm">
              {serviceHighlights.map((item, idx) => (
                <RevealOnScroll
                  key={item.label}
                  mode="fade-in-up"
                  delay={400 + idx * 200}
                >
                  <div
                    className={`group relative bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 cursor-default ${
                      idx === 1 ? "lg:translate-x-8" : ""
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#EADFC9]/15 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-serif text-lg tracking-wide">
                        {item.label}
                      </h3>
                      <div className="h-0.5 w-8 bg-[#EADFC9]/40 mt-2 group-hover:w-14 transition-all duration-500" />
                    </div>
                    <span className="ml-auto text-white/20 text-2xl font-serif">
                      0{idx + 1}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FBF8F3] to-transparent" />
    </section>
  );
}
