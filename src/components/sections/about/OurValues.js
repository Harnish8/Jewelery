import { IconLeaf, IconGem, IconAward, IconMapPin } from "@/components/Icons";
import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

const values = [
  { icon: IconLeaf, title: "Radical Sustainability", copy: "Every gram of gold we work with is recycled. No exceptions, no offsets used as a substitute." },
  { icon: IconGem, title: "Conflict-Free Stones", copy: "Full chain-of-custody tracing on every gemstone, sourced exclusively from Western Australia." },
  { icon: IconAward, title: "Master Craftsmanship", copy: "Our artisans train for years before a single piece leaves the atelier bearing our name." },
  { icon: IconMapPin, title: "Local, Not Outsourced", copy: "Every piece is designed, cast, and finished inside our three Australian ateliers." },
];

export default function OurValues() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-[#F5EDE1]/60 rounded-[2.5rem] mb-4">
      <RevealOnScroll mode="fade-in-up" className="text-center max-w-xl mx-auto mb-16 pt-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          What We Stand For
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          Our Values
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, idx) => (
          <RevealOnScroll key={v.title} mode="fade-in-up" delay={idx * 120}>
            <Card3DTilt
              spotlightColor="rgba(27, 67, 65, 0.18)"
              className="bg-white p-8 rounded-3xl border border-[#EADFC9] shadow-sm h-full flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-full bg-[#1B4341] text-white flex items-center justify-center mb-6 shrink-0">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-[#1D1D1D]">{v.title}</h3>
              <p className="text-sm text-[#666] font-light mt-3 leading-relaxed">{v.copy}</p>
            </Card3DTilt>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
