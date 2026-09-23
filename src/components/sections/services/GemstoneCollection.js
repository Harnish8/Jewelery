// components/GemstoneCollection.jsx
"use client";

import { RevealOnScroll, ParallaxBox } from "@/components/LuxuryEffects";

const gemstones = [
  {
    name: "Ruby",
    note: "Passion & Vitality",
    image:
      "https://keevajewels.com/cdn/shop/files/A_high-resolution_close-up_of_a_faceted_ruby_gemstone_placed_on_a_clean_pure_white_background._The_ruby_shines_with_deep_vibrant_red_tones_displaying_sharp_light_reflections_and_inter_360x.jpg?v=1748065242",
  },
  {
    name: "Emerald",
    note: "Renewal & Growth",
    image:
      "https://keevajewels.com/cdn/shop/files/A_high-resolution_close-up_of_a_faceted_green_emerald_gemstone_placed_on_a_clean_pure_white_background._The_emerald_displays_rich_deep_green_hues_with_subtle_variations_and_natural_in_360x.jpg?v=1748066795",
  },
  {
    name: "Sapphire",
    note: "Wisdom & Loyalty",
    image:
      "https://keevajewels.com/cdn/shop/files/I_need_prompt_for_blue_sapphire_gemstone_hd_image_in_white_back_ground_360x.jpg?v=1748066890",
  },
  {
    name: "Topaz",
    note: "Warmth & Clarity",
    image:
      "https://keevajewels.com/cdn/shop/files/A_high-resolution_close-up_of_a_faceted_peridot_gemstone_resting_on_a_clean_pure_white_background._The_gemstone_glows_with_vibrant_green_hues_and_golden_undertones_showcasing_its_natu_360x.jpg?v=1748066716",
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
              <ParallaxBox
                speed={0.04}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={g.image}
                  alt={`${g.name} gemstone`}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  loading="lazy"
                />
              </ParallaxBox>
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
