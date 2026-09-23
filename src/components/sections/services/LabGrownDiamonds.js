// components/LabGrownDiamonds.jsx
"use client";

import {
  RevealOnScroll,
  Card3DTilt,
  TextSplitReveal,
  ParallaxBox,
} from "@/components/LuxuryEffects";

// const shapes = [
//   {
//     name: "Round Brilliant",
//     note: "Maximum Sparkle",
//     image: "/image/webp/diamond-round.webp",
//   },
//   {
//     name: "Oval Cut",
//     note: "Elongating Fire",
//     image: "/image/webp/diamond-oval.webp",
//   },
//   {
//     name: "Princess Cut",
//     note: "Modern Precision",
//     image: "/image/webp/diamond-princess.webp",
//   },
//   {
//     name: "Marquise Cut",
//     note: "Timeless Elegance",
//     image: "/image/webp/diamond-marquise.webp",
//   },
// ];

const shapes = [
  {
    name: "Round Brilliant",
    note: "Maximum Sparkle",
    image:
      "https://keevajewels.com/cdn/shop/files/Flux_Dev_A_highresolution_closeup_of_a_round_brilliantcut_labg_1_900x.jpg?v=1748063422",
  },
  {
    name: "Oval Cut",
    note: "Elongating Fire",
    image:
      "https://keevajewels.com/cdn/shop/files/A_high-resolution_close-up_of_a_Oval_shape_lab-grown_diamond_resting_on_a_dark_matte_background._The_diamond_sparkles_vividly_with_crisp_sharp_light_reflections_and_multicolored_dispe_900x.jpg?v=1748064549",
  },
  {
    name: "Princess Cut",
    note: "Modern Precision",
    image:
      "https://keevajewels.com/cdn/shop/files/A_high-resolution_close-up_of_a_princess_shape_lab-grown_diamond_resting_on_a_dark_matte_background._The_diamond_sparkles_vividly_with_crisp_sharp_light_reflections_and_multicolored_d_900x.jpg?v=1748064597",
  },
  {
    name: "Marquise Cut",
    note: "Timeless Elegance",
    image:
      "https://keevajewels.com/cdn/shop/files/A_high-resolution_close-up_of_a_marquise_shape_lab-grown_diamond_resting_on_a_dark_matte_background._The_diamond_sparkles_vividly_with_crisp_sharp_light_reflections_and_multicolored_d_900x.jpg?v=1748064655",
  },
];

export default function LabGrownDiamonds() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-white">
      <RevealOnScroll
        mode="fade-in-up"
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Certified & Sustainable
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Lab Grown Diamonds" type="words" />
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#666] font-light leading-relaxed">
          Chemically, physically, and optically identical to natural diamonds —
          GIA-certified, ethically sourced, and available in every cut you love.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {shapes.map((s, idx) => (
          <RevealOnScroll key={s.name} mode="scale-up" delay={idx * 120}>
            <div className="relative rounded-2xl overflow-hidden border border-[#EADFC9] aspect-square group">
              <ParallaxBox
                speed={0.04}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={s.image}
                  alt={`${s.name} lab grown diamond`}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  loading="lazy"
                />
              </ParallaxBox>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                <h3 className="text-xs sm:text-sm font-serif leading-tight">
                  {s.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/70 font-light mt-0.5">
                  {s.note}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
