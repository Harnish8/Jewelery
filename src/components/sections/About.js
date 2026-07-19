/* eslint-disable @next/next/no-img-element */
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#EADFC9]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <RevealOnScroll mode="fade-in-up" className="lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4341] block mb-3">
            ✿ Our Australian Sustainable Heritage
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4341] leading-tight">
            <TextSplitReveal text="About Eglanto Maison Australia" type="words" />
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#666] font-light leading-relaxed">
            Founded on the Australian philosophy that true luxury must protect our pristine natural landscapes, Eglanto is an esteemed brand house dedicated exclusively to 100% recycled Australian 18k gold and Western Australian conflict-free gemstone curation.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#666] font-light leading-relaxed">
            We do not operate transactional e-commerce storefronts. Instead, our creations are handcrafted in numbered editions within our carbon-negative **Sydney & Melbourne Ateliers**, celebrating private salon relationships with discerning patrons.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-[#EADFC9]">
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1B4341] block">AUSTRALIAN</span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">100% Recycled Gold</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1B4341] block">SYDNEY • MELB</span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">Carbon-Negative Ateliers</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1B4341] block">BESPOKE</span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">Private Appointments</span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll mode="scale-up" delay={200} className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EADFC9]">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80"
              alt="Eglanto Australian Sustainable Atelier Craftsmanship"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4341]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold">Sydney • Melbourne • Perth Ateliers</span>
              <p className="text-2xl font-serif mt-1">Sculpted Under Australian Skies</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
