/* eslint-disable @next/next/no-img-element */
import { IconArrowRight } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal, Card3DTilt } from "@/components/LuxuryEffects";

export default function JewelleryCollection() {
  return (
    <section id="jewellery" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <RevealOnScroll mode="fade-in-up" className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl sm:text-6xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Discover Jewellery Collection" type="words" />
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center">
        {/* Col 1: Rings */}
        <RevealOnScroll mode="fade-in-up" delay={100}>
          <Card3DTilt className="flex flex-col items-start bg-[#F5EDE1] p-8 rounded-3xl border border-[#EADFC9] shadow-sm transform hover:-translate-y-1 transition-all">
            <span className="text-xs font-bold tracking-widest uppercase text-[#1B4341]">Category 01</span>
            <h3 className="text-2xl font-serif text-[#1D1D1D] mt-2 leading-tight">
              Rings for Joyful <br /> Connection
            </h3>
            <button className="mt-4 px-5 py-2 rounded-full bg-white border border-[#EADFC9] text-xs font-bold uppercase tracking-wider text-[#1B4341] hover:bg-[#1B4341] hover:text-white transition-all flex items-center gap-1.5">
              <span>See All</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="w-full aspect-square mt-6 overflow-hidden rounded-2xl bg-white flex items-center justify-center p-4 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
                alt="Joyful Connection Ring"
                className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </Card3DTilt>
        </RevealOnScroll>

        {/* Col 2: Necklaces Arched Photo */}
        <RevealOnScroll mode="scale-up" delay={250}>
          <Card3DTilt className="flex flex-col items-center bg-[#ECE6DC] p-8 rounded-t-full rounded-b-3xl border border-[#DCD3C6] shadow-md transform hover:-translate-y-2 transition-all mt-0 md:-mt-12">
            <div className="w-full aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden bg-white mb-6 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
                alt="Inspiration Necklaces"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-serif text-[#1B4341] text-center leading-tight">
              Inspiration with <br /> Necklaces
            </h3>
            <button className="mt-4 px-6 py-2.5 rounded-full bg-[#1B4341] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#122D2B] transition-all flex items-center gap-2 shadow-md">
              <span>Explore</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </button>
          </Card3DTilt>
        </RevealOnScroll>

        {/* Col 3: Earrings */}
        <RevealOnScroll mode="fade-in-up" delay={400}>
          <Card3DTilt className="flex flex-col items-start bg-[#F5EDE1] p-8 rounded-3xl border border-[#EADFC9] shadow-sm transform hover:-translate-y-1 transition-all">
            <span className="text-xs font-bold tracking-widest uppercase text-[#1B4341]">Category 03</span>
            <h3 className="text-2xl font-serif text-[#1D1D1D] mt-2 leading-tight">
              Discover Amazing <br /> Earrings
            </h3>
            <button className="mt-4 px-5 py-2 rounded-full bg-white border border-[#EADFC9] text-xs font-bold uppercase tracking-wider text-[#1B4341] hover:bg-[#1B4341] hover:text-white transition-all flex items-center gap-1.5">
              <span>See All</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="w-full aspect-square mt-6 overflow-hidden rounded-2xl bg-white flex items-center justify-center p-4 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80"
                alt="Amazing Earrings"
                className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </Card3DTilt>
        </RevealOnScroll>
      </div>
    </section>
  );
}
