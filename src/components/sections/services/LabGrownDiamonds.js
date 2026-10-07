// // components/LabGrownDiamonds.jsx
// "use client";
// import Image from "next/image";

// import {
//   RevealOnScroll,
//   TextSplitReveal,
// } from "@/components/LuxuryEffects";

// const shapes = [
//   {
//     name: "Diamond",
//     note: "Maximum Sparkle",
//     image: "/image/webp/diamond.png",
//   },
//   {
//     name: "Oval Cut",
//     note: "Elongating Fire",
//     image: "/image/webp/5.webp",
//   },
//   {
//     name: "Princess Cut",
//     note: "Modern Precision",
//     image: "/image/webp/7.webp",
//   },
//   {
//     name: "Marquise Cut",
//     note: "Timeless Elegance",
//     image: "/image/webp/8.webp",
//   },
// ];

// export default function LabGrownDiamonds() {
//   return (
//     <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-white">
//       <RevealOnScroll
//         mode="fade-in-up"
//         className="text-center max-w-xl mx-auto mb-16"
//       >
//         <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
//           Certified & Sustainable
//         </span>
//         <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
//           <TextSplitReveal text="Lab Grown Diamonds" type="words" />
//         </h2>
//         <p className="mt-4 text-sm sm:text-base text-[#666] font-light leading-relaxed">
//           Chemically, physically, and optically identical to natural diamonds —
//           GIA-certified, ethically sourced, and available in every cut you love.
//         </p>
//       </RevealOnScroll>

//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//         {shapes.map((s, idx) => (
//           <RevealOnScroll key={s.name} mode="scale-up" delay={idx * 120}>
//             <div className="relative rounded-2xl overflow-hidden border border-[#EADFC9] aspect-square group">
//               <Image
//                 src={s.image}
//                 alt={`${s.name} lab grown diamond`}
//                 fill
//                 sizes="(min-width: 1024px) 25vw, 50vw"
//                 className="object-cover scale-70 group-hover:scale-85 transition-transform duration-700"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
//               <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
//                 <h3 className="text-xs sm:text-sm font-serif leading-tight">
//                   {s.name}
//                 </h3>
//                 <p className="text-[10px] sm:text-xs text-white/70 font-light mt-0.5">
//                   {s.note}
//                 </p>
//               </div>
//             </div>
//           </RevealOnScroll>
//         ))}
//       </div>
//     </section>
//   );
// }

// components/Diamonds.jsx
"use client";
import Image from "next/image";

import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const groups = [
  {
    id: "natural",
    label: "Natural Diamonds",
    sub: "Formed over billions of years beneath the earth",
    items: [
      {
        name: "Natural Rough Diamond",
        note: "Uncut, Straight From Earth",
        cert: "GIA Certified",
        image: "/image/webp/diamond.png", // replace with natural diamond image
      },
      {
        name: "Natural Fancy Color",
        note: "Earth-Formed Natural Color",
        cert: "GIA Certified",
        image: "/image/webp/5.webp", // replace with natural diamond image
      },
    ],
  },
  {
    id: "lab",
    label: "Lab Grown Diamonds",
    sub: "Grown in a laboratory, identical in chemistry and structure",
    items: [
      {
        name: "Princess Cut",
        note: "Modern Precision",
        cert: "IGI Certified",
        image: "/image/webp/7.webp", // replace with lab grown diamond image
      },
      {
        name: "Marquise Cut",
        note: "Timeless Elegance",
        cert: "IGI Certified",
        image: "/image/webp/8.webp", // replace with lab grown diamond image
      },
    ],
  },
];

const badgeStyles = {
  natural: "bg-[#EADFC9] text-[#1B4341]",
  lab: "bg-[#1B4341] text-white",
};


export default function Diamonds() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <RevealOnScroll
        mode="fade-in-up"
        className="w-full max-w-3xl mx-auto mb-12 sm:mb-16 text-center"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-3">
          GIA & IGI Certified
        </span>

        <h2
          className="w-full text-center text-3xl sm:text-4xl lg:text-5xl leading-tight font-serif font-light text-[#1B4341]
                     [&>*]:w-full [&>*]:text-center [&>*]:justify-center"
        >
          <TextSplitReveal text="Natural & Lab Grown Diamonds" type="words" />
        </h2>

        <p className="mt-4 mx-auto max-w-xl text-sm sm:text-base text-[#666] font-light leading-relaxed">
          Choose natural or laboratory-grown. Every stone is independently
          graded and accompanied by a GIA or IGI report.
        </p>
      </RevealOnScroll>

      {/* Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0">
        {groups.map((group, gIdx) => (
          <div
            key={group.id}
            className={`lg:px-8 xl:px-12 ${
              gIdx === 0 ? "lg:border-r lg:border-[#EADFC9]" : ""
            }`}
          >
            <RevealOnScroll
              mode="fade-in-up"
              className="mb-6 sm:mb-8 text-center"
            >
              <h3 className="text-xl sm:text-2xl font-serif font-light text-[#1B4341]">
                {group.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#666] font-light mt-1.5 max-w-xs sm:max-w-sm mx-auto">
                {group.sub}
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-md sm:max-w-lg mx-auto">
              {group.items.map((s, idx) => (
                <RevealOnScroll
                  key={`${group.id}-${s.name}`}
                  mode="scale-up"
                  delay={idx * 120}
                  className="h-full"
                >
                  <div className="group h-full flex flex-col rounded-2xl overflow-hidden border border-[#EADFC9] bg-white">
                    {/* Image */}
                    <div className="relative aspect-square bg-white overflow-hidden">
                      <Image
                        src={s.image}
                        alt={`${s.name} ${
                          group.id === "natural" ? "natural" : "lab grown"
                        } diamond`}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 45vw"
                        className="object-contain p-5 sm:p-8 transition-transform duration-700 group-hover:scale-105"
                      />
                      <span
                        className={`absolute top-2.5 left-2.5 sm:top-3 sm:left-3 text-[8px] sm:text-[10px] uppercase tracking-widest font-semibold px-2 sm:px-2.5 py-1 rounded-full ${
                          badgeStyles[group.id]
                        }`}
                      >
                        {group.id === "natural" ? "Natural" : "Lab Grown"}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 border-t border-[#EADFC9] bg-[#FBF8F1] px-2 sm:px-4 py-3 sm:py-4 text-center">
                      <h4 className="text-sm sm:text-base font-serif text-[#1B4341] leading-tight">
                        {s.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#666] font-light mt-1">
                        {s.note}
                      </p>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#1B4341] font-semibold mt-2">
                        {s.cert}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}