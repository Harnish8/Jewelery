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

import {
  RevealOnScroll,
  TextSplitReveal,
} from "@/components/LuxuryEffects";

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
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-white">
      <RevealOnScroll
        mode="fade-in-up"
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          GIA & IGI Certified
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Natural & Lab Grown Diamonds" type="words" />
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#666] font-light leading-relaxed">
          Choose natural or laboratory-grown. Every stone is independently
          graded and accompanied by a GIA or IGI report.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
        {groups.map((group) => (
          <div key={group.id}>
            <RevealOnScroll mode="fade-in-up" className="mb-5">
              <h3 className="text-xl sm:text-2xl font-serif font-light text-[#1B4341]">
                {group.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#666] font-light mt-1">
                {group.sub}
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {group.items.map((s, idx) => (
                <RevealOnScroll
                  key={`${group.id}-${s.name}`}
                  mode="scale-up"
                  delay={idx * 120}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[#EADFC9] aspect-square group">
                    <Image
                      src={s.image}
                      alt={`${s.name} ${
                        group.id === "natural" ? "natural" : "lab grown"
                      } diamond`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover scale-75 group-hover:scale-90 transition-transform duration-700"
                    />

                    <span
                      className={`absolute top-3 left-3 text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full ${
                        badgeStyles[group.id]
                      }`}
                    >
                      {group.id === "natural" ? "Natural" : "Lab Grown"}
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                      <h4 className="text-xs sm:text-sm font-serif leading-tight">
                        {s.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-white/70 font-light mt-0.5">
                        {s.note}
                      </p>
                      <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/90 mt-1.5">
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