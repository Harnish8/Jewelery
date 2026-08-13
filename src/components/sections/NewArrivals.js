/* eslint-disable @next/next/no-img-element */
import { RevealOnScroll, TextSplitReveal, Card3DTilt, SectionBgTransition } from "@/components/LuxuryEffects";
import { IconArrowLeft, IconArrowRight } from "@/components/Icons";

const newArrivals = [
  {
    id: 101,
    name: "Diamond Ring",
    spec: "Certified Diamond",
    img: "/image/webp/ring6.webp",
  },
  {
    id: 102,
    name: "Diamond Bracelet",
    spec: "Luxury Collection",
    img: "/image/webp/bracelet2.webp",
  },
  {
    id: 103,
    name: "Gold Earrings",
    spec: "Handcrafted Design",
    img: "/image/webp/earring.webp",
  },
  {
    id: 104,
    name: "Gold Necklace",
    spec: "Custom Available",
    img: "/image/webp/necklace2.webp",
  },
];

export default function NewArrivals() {
  return (
    <SectionBgTransition
      bgInView="bg-[#1B4341] text-white"
      bgOutView="bg-[#FBF8F3] text-[#1D1D1D]"
      className="py-20 px-6 lg:px-16 my-12"
    >
      <div id="products" className="max-w-7xl mx-auto">
        <RevealOnScroll
          mode="fade-in-up"
          className="flex items-end justify-between pb-10 border-b border-white/15"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-amber-200 font-semibold block mb-2">
              LATEST CREATIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light">
              <TextSplitReveal text="Featured Jewellery" type="words" />
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#1B4341] transition-all">
              <IconArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#1B4341] transition-all">
              <IconArrowRight className="w-4 h-4" />
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {newArrivals.map((item, idx) => (
            <RevealOnScroll
              key={item.id}
              mode="fade-in-up"
              delay={idx * 140}
              className="h-full"
            >
              <Card3DTilt
                spotlightColor="rgba(27, 67, 65, 0.2)"
                className="bg-white text-[#1D1D1D] rounded-2xl overflow-hidden p-4 shadow-lg group flex flex-col justify-between h-full"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center p-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 pb-2 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
                      {item.name}
                    </h4>
                    <span className="text-xs font-bold text-[#1B4341] mt-0.5 block bg-[#EADFC9]/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.spec}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-full bg-[#1B4341] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-black transition-all shadow-sm"
                  >
                    Inquire
                  </a>
                </div>
              </Card3DTilt>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionBgTransition>
  );
}
