// /* eslint-disable @next/next/no-img-element */
// import { IconArrowRight } from "@/components/Icons";
// import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

// export default function StatsBanner() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
//       <RevealOnScroll mode="scale-up" className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-xl border border-[#EADFC9]">
//         {/* Left Dark Emerald Pendant Box (Span 3) */}
//         <Card3DTilt
//           spotlightColor="rgba(255, 255, 255, 0.2)"
//           className="lg:col-span-3 bg-[#1B4341] p-8 flex flex-col items-center justify-center text-center text-white relative group cursor-pointer min-h-[220px]"
//         >
//           <div className="w-28 h-28 overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
//             <img
//               src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
//               alt="Sapphire Pendant"
//               className="w-full h-full object-contain filter drop-shadow-lg"
//             />
//           </div>
//           <span className="text-[10px] uppercase tracking-widest opacity-80 mt-2">HERITAGE CRAFTSMANSHIP</span>
//           <span className="font-sans text-xs bg-amber-300/20 text-amber-200 px-3 py-1 rounded-full uppercase tracking-wider font-semibold mt-1.5">CUSTOM & PERSONALISED</span>
//         </Card3DTilt>

//         {/* Right Stats & Rotating Badge Banner (Span 9) */}
//         <div className="lg:col-span-9 bg-[#F3EAD8] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 text-[#1B4341]">
//           <div className="grid grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left flex-1">
//             <div>
//               <h3 className="text-4xl sm:text-5xl font-serif font-normal">GIA Certified</h3>
//               <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">Jewellery Designer</p>
//             </div>
//             <div>
//               <h3 className="text-4xl sm:text-5xl font-serif font-normal">Diamond, Gold & Silver</h3>
//               <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">Fine Jewellery</p>
//             </div>
//             <div>
//               <h3 className="text-4xl sm:text-5xl font-serif font-normal">Custom Jewellery</h3>
//               <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">Made for You</p>
//             </div>
//           </div>

//           {/* Rotating Circular Stamp Badge */}
//           <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
//             <div className="absolute inset-0 border border-[#1B4341]/30 rounded-full animate-spin-slow flex items-center justify-center">
//               <span className="text-[9px] uppercase tracking-widest font-bold font-sans text-[#1B4341] block">
//                 EXPLORE COLLECTION • G R Jewellers •
//               </span>
//             </div>
//             <div className="w-12 h-12 rounded-full bg-[#1B4341] text-white flex items-center justify-center shadow-md">
//               <IconArrowRight className="w-5 h-5 transform rotate-90" />
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// }


/* eslint-disable @next/next/no-img-element */
import { IconArrowRight } from "@/components/Icons";
import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

export default function StatsBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
      <RevealOnScroll
        mode="scale-up"
        className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-xl border border-[#EADFC9]"
      >
        {/* Left Dark Emerald Pendant Box */}
        <Card3DTilt
          spotlightColor="rgba(255, 255, 255, 0.2)"
          className="lg:col-span-3 bg-[#1B4341] p-6 sm:p-8 flex flex-col items-center justify-center text-center text-white relative group cursor-pointer min-h-[180px] sm:min-h-[220px]"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
            <img
              src="/image/gr/5.png"
              alt="Sapphire Pendant"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest opacity-80 mt-2">
            HERITAGE CRAFTSMANSHIP
          </span>
          <span className="font-sans text-xs bg-amber-300/20 text-amber-200 px-3 py-1 rounded-full uppercase tracking-wider font-semibold mt-1.5">
            CUSTOM &amp; PERSONALISED
          </span>
        </Card3DTilt>

        {/* Right Stats & Badge Banner */}
        <div className="lg:col-span-9 bg-[#F3EAD8] p-6 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 lg:gap-10 text-[#1B4341]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 text-center sm:text-left flex-1 w-full">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-normal leading-tight">
                GIA Certified
              </h3>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">
                Jewellery Designer
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-normal leading-tight">
                Diamond, Gold &amp; Silver
              </h3>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">
                Fine Jewellery
              </p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-normal leading-tight">
                Custom Jewellery
              </h3>
              <p className="text-xs uppercase tracking-widest mt-1 opacity-75 font-semibold">
                Made for You
              </p>
            </div>
          </div>

          {/* Rotating Circular Stamp Badge */}
          <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center shrink-0">
            <div className="hidden sm:flex absolute inset-0 border border-[#1B4341]/30 rounded-full animate-spin-slow items-center justify-center">
              <span className="text-[9px] uppercase tracking-widest font-bold font-sans text-[#1B4341] block">
                EXPLORE COLLECTION • G R Jewellers •
              </span>
            </div>
            <div className="sm:hidden absolute inset-0 border border-[#1B4341]/30 rounded-full" />
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#1B4341] text-white flex items-center justify-center shadow-md">
              <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-90" />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}