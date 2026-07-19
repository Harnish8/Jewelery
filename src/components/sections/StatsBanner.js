/* eslint-disable @next/next/no-img-element */
import { IconArrowRight } from "@/components/Icons";
import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

export default function StatsBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
      <RevealOnScroll mode="scale-up" className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-xl border border-[#EADFC9]">
        {/* Left Dark Emerald Pendant Box (Span 3) */}
        <Card3DTilt
          spotlightColor="rgba(255, 255, 255, 0.2)"
          className="lg:col-span-3 bg-[#1B4341] p-8 flex flex-col items-center justify-center text-center text-white relative group cursor-pointer min-h-[220px]"
        >
          <div className="w-28 h-28 overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
              alt="Sapphire Pendant"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest opacity-80 mt-2">Exclusive Pendant</span>
          <span className="font-sans text-xs bg-amber-300/20 text-amber-200 px-3 py-1 rounded-full uppercase tracking-wider font-semibold mt-1.5">WA Recycled Gold</span>
        </Card3DTilt>

        {/* Right Stats & Rotating Badge Banner (Span 9) */}
        <div className="lg:col-span-9 bg-[#F3EAD8] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-[#1B4341]">
          <div className="grid grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left flex-1">
            <div>
              <h3 className="text-4xl sm:text-5xl font-serif font-normal">12</h3>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">All over World</p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-serif font-normal">150+</h3>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">Product Available</p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-serif font-normal">1K+</h3>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">Product Reviews</p>
            </div>
          </div>

          {/* Rotating Circular Stamp Badge */}
          <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
            <div className="absolute inset-0 border border-[#1B4341]/30 rounded-full animate-spin-slow flex items-center justify-center">
              <span className="text-[9px] uppercase tracking-widest font-bold font-sans text-[#1B4341] block">
                EXPLORE ALL EVERY DAY • EGLANTO •
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#1B4341] text-white flex items-center justify-center shadow-md">
              <IconArrowRight className="w-5 h-5 transform rotate-90" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
