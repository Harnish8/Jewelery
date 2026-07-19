/* eslint-disable @next/next/no-img-element */
import { IconMapPin } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal, ParallaxBox } from "@/components/LuxuryEffects";

const ateliers = [
  { city: "Sydney", note: "Flagship & Founding Atelier", image: "https://images.unsplash.com/photo-1620656798579-1984d9e87dfa?auto=format&fit=crop&w=800&q=80" },
  { city: "Melbourne", note: "Private Salon Appointments", image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80" },
  { city: "Perth", note: "Gemstone Sourcing House", image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=800&q=80" },
];

export default function Ateliers() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <RevealOnScroll mode="fade-in-up" className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Where We Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Three Ateliers" type="words" />
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {ateliers.map((a, idx) => (
          <RevealOnScroll key={a.city} mode="scale-up" delay={idx * 150}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg border-4 border-white aspect-[3/4] group">
              <ParallaxBox speed={0.06} className="absolute inset-0 w-full h-full">
                <img
                  src={a.image}
                  alt={`Eglanto ${a.city} atelier`}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </ParallaxBox>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4341]/90 via-[#1B4341]/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-amber-200 mb-1">
                  <IconMapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold">{a.note}</span>
                </div>
                <h3 className="text-2xl font-serif">{a.city}</h3>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
