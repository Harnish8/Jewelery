// components/GemstoneCollection.jsx
"use client";
import Image from "next/image";

import { RevealOnScroll } from "@/components/LuxuryEffects";



const gemstones = [
  {
    name: "Ruby",
    note: "Passion & Vitality",
    image: "/image/webp/2.webp",
  },
  {
    name: "Emerald",
    note: "Renewal & Growth",
    image: "/image/webp/1.webp",
  },
  {
    name: "Sapphire",
    note: "Wisdom & Loyalty",
    image: "/image/webp/3.webp",
  },
  {
    name: "Topaz",
    note: "Warmth & Clarity",
    image: "/image/webp/4.webp",
  },
];

export default function GemstoneCollection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-[#1B4341] rounded-[2.5rem] my-4">
      <RevealOnScroll
        mode="fade-in-up"
        className="text-center max-w-xl mx-auto mb-16 pt-4"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-amber-200 font-semibold block mb-2">
          Certified Colour Stones
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-white">
          Gemstone Collection
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/70 font-light leading-relaxed">
          Hand-selected by our GIA-certified gemologist, each stone is chosen
          for its colour, clarity, and character — set to be treasured for
          generations.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {gemstones.map((g, idx) => (
          <RevealOnScroll key={g.name} mode="scale-up" delay={idx * 120}>
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 aspect-square group">
              <Image
                src={g.image}
                alt={`${g.name} gemstone`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover scale-70 group-hover:scale-85 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <h3 className="text-xs sm:text-sm font-serif leading-tight">
                  {g.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/70 font-light mt-0.5">
                  {g.note}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
