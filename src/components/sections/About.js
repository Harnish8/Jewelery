/* eslint-disable @next/next/no-img-element */
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-[#EADFC9]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <RevealOnScroll mode="fade-in-up" className="lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4341] block mb-3">
            ✿ ABOUT GR JEWELLERS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4341] leading-tight">
            <TextSplitReveal
              text="Where Heritage Meets Timeless Craftsmanship"
              type="words"
            />
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#666] font-light leading-relaxed">
            Founded in 2003 in Anand, Gujarat, GR Jewellers has built its
            reputation on trust, exceptional craftsmanship, and lasting customer
            relationships. Established by Hasmukhbhai Coorthunbhai Soni and
            Rajeshbhai Hasmukhbhai Soni, our passion for fine jewellery
            continues to inspire every creation, blending traditional artistry
            with contemporary elegance.
          </p>
          <p className="mt-4 text-sm sm:text-base text-[#666] font-light leading-relaxed">
            From custom and personalised jewellery to exquisite diamond
            jewellery, gold jewellery, gemstone jewellery, and colour stone
            jewellery, every piece is thoughtfully crafted by our GIA Certified
            Jewellery Designer. Whether celebrating life&apos;s milestones or
            creating a treasured family heirloom, we are committed to delivering
            jewellery that reflects your story with unmatched quality and
            precision.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-[#EADFC9]">
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1B4341] block">
                ESTABLISHED
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">
                2003 • Anand, Gujarat
              </span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1B4341] block">
                SPECIALISTS
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">
                Diamonds, Gemstones & Colour Stones
              </span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#1B4341] block">
                BESPOKE
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#777]">
                Custom & Personalised Jewellery
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* <RevealOnScroll mode="scale-up" delay={200} className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EADFC9]">
            <img
              src="/image/gr/all/ring3.png"
              alt="G R Jewellers Indian Craftsmanship"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4341]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold">ANAND • GUJARAT • SERVING CLIENTS WORLDWIDE</span>
              <p className="text-2xl font-serif mt-1">Crafted with Heritage. Designed for Generations.</p>
            </div>
          </div>
        </RevealOnScroll> */}

        <RevealOnScroll mode="scale-up" delay={200} className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EADFC9]">
            <img
              src="/image/gr/all/ring3.png"
              alt="G R Jewellers Indian Craftsmanship"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4341]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto text-white">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-200 font-semibold">
                ANAND • GUJARAT • SERVING CLIENTS WORLDWIDE
              </span>
              <p className="text-lg sm:text-xl lg:text-2xl font-serif leading-snug mt-1">
                Crafted with Heritage. Designed for Generations.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
