/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { IconLeaf, IconGem, IconAward } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal, ParallaxBox, Card3DTilt } from "@/components/LuxuryEffects";

const stats = [
  { icon: IconLeaf, value: "100%", label: "Recycled Gold" },
  { icon: IconGem, value: "3", label: "Ateliers" },
  { icon: IconAward, value: "1970", label: "Founded" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF8F3] pt-6 pb-20 sm:pb-28">
      {/* Soft decorative wash, not a flat photo overlay */}
      <div className="absolute top-0 right-0 w-[38rem] h-[38rem] bg-[#EADFC9]/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <RevealOnScroll mode="fade-in-up">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#1B4341]/70 mb-10 sm:mb-16">
            <Link href="/" className="hover:text-[#1B4341] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1B4341] font-semibold">About Us</span>
          </nav>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Layered image collage (Span 5) */}
          <div className="lg:col-span-5 relative min-h-[420px] order-2 lg:order-1 flex items-center">
            <ParallaxBox speed={0.1} scaleOnScroll className="w-4/5 mx-auto lg:mx-0">
              <Card3DTilt className="aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EADFC9]">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80"
                  alt="Eglanto atelier craftsmanship"
                  className="w-full h-full object-cover"
                />
              </Card3DTilt>
            </ParallaxBox>

            <RevealOnScroll
              mode="clip-wipe"
              delay={350}
              className="absolute bottom-2 -right-2 sm:right-4 w-2/5 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#1B4341]"
            >
              <img
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=500&q=80"
                alt="Recycled gold ring detail"
                className="w-full h-full object-cover"
              />
            </RevealOnScroll>

            {/* Rotating founding stamp */}
            <div className="hidden sm:flex absolute -top-6 -left-2 w-24 h-24 items-center justify-center">
              <div className="absolute inset-0 border border-[#1B4341]/30 rounded-full animate-spin-slow flex items-center justify-center bg-[#FBF8F3]">
                <span className="text-[8px] uppercase tracking-widest font-bold text-[#1B4341] text-center px-2 leading-tight">
                  Est. 1970 • Sydney •
                </span>
              </div>
            </div>
          </div>

          {/* Headline (Span 7) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <RevealOnScroll mode="fade-in-up" delay={100}>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#1B4341] bg-[#EADFC9]/60 px-4 py-2 rounded-full inline-block mb-6 shadow-sm">
                Our Story
              </span>
            </RevealOnScroll>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-[#1B4341] leading-[1.08] tracking-tight">
              <TextSplitReveal text="Ethics, Woven" type="words" delay={200} />
              <br />
              <TextSplitReveal text="Into Every Gram" type="words" delay={380} />
              <br />
              <TextSplitReveal text="of Gold" type="words" delay={560} />
            </h1>

            <RevealOnScroll mode="fade-in-up" delay={800}>
              <p className="mt-8 text-base sm:text-lg text-[#666] font-light max-w-lg leading-relaxed">
                Five decades proving that true luxury and genuine sustainability aren&rsquo;t
                opposing ideals — they&rsquo;re the same pursuit, sculpted by hand.
              </p>
            </RevealOnScroll>

            <RevealOnScroll mode="fade-in-up" delay={950} className="mt-10 flex flex-wrap items-center gap-8 sm:gap-10">
              {stats.map((s, idx) => (
                <div key={s.label} className="flex items-center gap-3">
                  {idx !== 0 && <span className="hidden sm:block w-px h-8 bg-[#EADFC9]" />}
                  <div className="w-9 h-9 rounded-full bg-[#1B4341] text-white flex items-center justify-center shrink-0">
                    <s.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-lg font-serif text-[#1B4341] block leading-none">{s.value}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#777]">{s.label}</span>
                  </div>
                </div>
              ))}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}