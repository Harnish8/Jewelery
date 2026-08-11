// /* eslint-disable @next/next/no-img-element */
// import { RevealOnScroll } from "@/components/LuxuryEffects";

// export default function Testimonial() {
//   return (
//     <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-[#EADFC9]">
//       <RevealOnScroll mode="fade-in-up" className="text-center mb-16">
//         <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
//           Client Stories
//         </span>
//         <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
//           What Our Clients Say
//         </h2>
//       </RevealOnScroll>

//       <RevealOnScroll mode="scale-up" className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-[#F3EAD8] rounded-3xl p-8 sm:p-12 border border-[#EADFC9] shadow-lg">
//         {/* Left Quote Text (Span 7) */}
//         <div className="md:col-span-7">
//           <div className="text-5xl font-serif text-[#1B4341]/30 mb-4">&ldquo;</div>
//           <p className="text-xl sm:text-2xl font-serif text-[#1B4341] leading-relaxed italic">
//             &ldquo;I wanted a ring that reflected my family&apos;s heritage but also suited my personal style. The team at GR Jewellers listened carefully, guided me through every detail, and created a beautiful custom piece that exceeded my expectations. The craftsmanship, attention to detail, and quality of the diamonds were truly exceptional.&rdquo;
//           </p>
//           <div className="mt-6">
//             <h4 className="font-bold font-sans text-sm text-[#1D1D1D] uppercase tracking-wider">PRIYA PATEL</h4>
//             <span className="text-xs text-[#666]">London, United Kingdom</span>
//           </div>
//         </div>

//         {/* Right Arched Portrait (Span 5) */}
//         <div className="md:col-span-5 flex justify-center">
//           <div className="w-64 aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
//             <img
//               src="/image/gr/8.png"
//               alt="Priya Patel Testimonial"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// }




/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "@/components/LuxuryEffects";

const testimonials = [
  {
    quote:
      "I wanted a ring that reflected my family's heritage but also suited my personal style. The team at GR Jewellers listened carefully, guided me through every detail, and created a beautiful custom piece that exceeded my expectations. The craftsmanship, attention to detail, and quality of the diamonds were truly exceptional.",
    name: "PRIYA PATEL",
    location: "London, United Kingdom",
  },
  {
    quote:
      "I was looking for something really personal for my wife, and the team at GR Jewellers made the whole process so easy. They understood what I had in mind, helped me choose the right diamond, and kept me involved throughout the design. The final piece came out even better than I expected. You can really see the care and craftsmanship in it.",
    name: "HETAL PATEL",
    location: "Anand, Gujarat",
  },
  {
    quote:
      "I wanted to create a piece of jewellery that had a connection to my family but still felt modern and suited my style. GR Jewellers took the time to understand exactly what I wanted and guided me through the whole process. I really appreciated how personal the experience felt. The finished jewellery was beautiful, and the quality was better than I expected.",
    name: "JIGNESH SHAH",
    location: "Anand, Gujarat",
  },
];

const AUTO_SCROLL_MS = 5000;

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTO_SCROLL_MS);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const current = testimonials[active];

  return (
    <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-[#EADFC9]">
      <RevealOnScroll mode="fade-in-up" className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Client Stories
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          What Our Clients Say
        </h2>
      </RevealOnScroll>

      <RevealOnScroll
        mode="scale-up"
        className="relative bg-[#F3EAD8] rounded-3xl p-8 sm:p-12 border border-[#EADFC9] shadow-lg overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center min-h-[320px]">
          {/* Left Quote Text */}
          <div className="md:col-span-7 transition-opacity duration-500 ease-in-out" key={active}>
            <div className="text-5xl font-serif text-[#1B4341]/30 mb-4">&ldquo;</div>
            <p className="text-xl sm:text-2xl font-serif text-[#1B4341] leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div className="mt-6">
              <h4 className="font-bold font-sans text-sm text-[#1D1D1D] uppercase tracking-wider">
                {current.name}
              </h4>
              <span className="text-xs text-[#666]">{current.location}</span>
            </div>
          </div>

          {/* Right Arched Portrait — single shared image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-64 aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/image/gr/all/modal2.png"
                alt={`${current.name} Testimonial`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-[#1B4341]" : "w-2 bg-[#1B4341]/30"
              }`}
            />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}