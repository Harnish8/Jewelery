/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

export default function Heritage() {
  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Arched Photo (Span 6) */}
        <RevealOnScroll mode="fade-in-up" className="lg:col-span-6 relative">
          <div className="w-4/5 aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl bg-[#EADFC9] border-4 border-white mx-auto lg:mx-0">
            <img
              src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=1000&q=80"
              alt="Tradition Cared For Since 1970"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Round Close-up Ring Photo */}
          <div className="absolute bottom-4 right-4 sm:right-12 w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"
              alt="Gold ring close up"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
        </RevealOnScroll>

        {/* Right Text Content (Span 6) */}
        <RevealOnScroll mode="fade-in-up" delay={200} className="lg:col-span-6 pl-0 lg:pl-6 text-center lg:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-bold block mb-3">
            Heirloom Craftsmanship
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4341] leading-tight">
            <TextSplitReveal text="Tradition Cared For Since 1970" type="words" />
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#666] font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            For more than five decades, our master artisans have dedicated their lives to preserving traditional metalsmithing while incorporating modern design aesthetics that make every piece truly remarkable.
          </p>
          <div className="mt-8">
            <Link
              href="#products"
              className="inline-flex items-center gap-2 bg-[#1B4341] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#122D2B] transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <span>See All Products</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
