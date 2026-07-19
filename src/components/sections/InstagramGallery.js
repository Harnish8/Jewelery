/* eslint-disable @next/next/no-img-element */
import { IconArrowRight, IconInstagram } from "@/components/Icons";
import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

export default function InstagramGallery() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <RevealOnScroll mode="fade-in-up" delay={0}>
          <Card3DTilt className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer relative bg-black">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" alt="Insta 1" className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <IconInstagram className="w-8 h-8" />
            </div>
          </Card3DTilt>
        </RevealOnScroll>

        <RevealOnScroll mode="fade-in-up" delay={120}>
          <Card3DTilt className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer relative bg-black">
            <img src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=600&q=80" alt="Insta 2" className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <IconInstagram className="w-8 h-8" />
            </div>
          </Card3DTilt>
        </RevealOnScroll>

        <RevealOnScroll mode="fade-in-up" delay={240}>
          <Card3DTilt className="aspect-square rounded-2xl overflow-hidden shadow-md group cursor-pointer relative bg-black">
            <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" alt="Insta 3" className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
              <IconInstagram className="w-8 h-8" />
            </div>
          </Card3DTilt>
        </RevealOnScroll>

        <RevealOnScroll mode="fade-in-up" delay={360}>
          <Card3DTilt className="aspect-square rounded-2xl bg-[#A2734C] text-white p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md hover:bg-[#8F633E] transition-colors cursor-pointer group">
            <IconInstagram className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest leading-relaxed">
              @Follow On <br /> Instagram
            </span>
            <IconArrowRight className="w-5 h-5 mt-3 group-hover:translate-x-1 transition-transform" />
          </Card3DTilt>
        </RevealOnScroll>
      </div>
    </section>
  );
}
