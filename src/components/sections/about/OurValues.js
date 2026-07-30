// import { IconLeaf, IconGem, IconAward, IconMapPin } from "@/components/Icons";
// import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

// const values = [
//   { icon: IconLeaf, title: "Radical Sustainability", copy: "Every gram of gold we work with is recycled. No exceptions, no offsets used as a substitute." },
//   { icon: IconGem, title: "Conflict-Free Stones", copy: "Full chain-of-custody tracing on every gemstone, sourced exclusively from Western Australia." },
//   { icon: IconAward, title: "Master Craftsmanship", copy: "Our artisans train for years before a single piece leaves the atelier bearing our name." },
//   { icon: IconMapPin, title: "Local, Not Outsourced", copy: "Every piece is designed, cast, and finished inside our three Australian ateliers." },
// ];

// export default function OurValues() {
//   return (
//     <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-[#F5EDE1]/60 rounded-[2.5rem] mb-4">
//       <RevealOnScroll mode="fade-in-up" className="text-center max-w-xl mx-auto mb-16 pt-4">
//         <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
//           What We Stand For
//         </span>
//         <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
//           Our Values
//         </h2>
//       </RevealOnScroll>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {values.map((v, idx) => (
//           <RevealOnScroll key={v.title} mode="fade-in-up" delay={idx * 120}>
//             <Card3DTilt
//               spotlightColor="rgba(27, 67, 65, 0.18)"
//               className="bg-white p-8 rounded-3xl border border-[#EADFC9] shadow-sm h-full flex flex-col items-start"
//             >
//               <div className="w-14 h-14 rounded-full bg-[#1B4341] text-white flex items-center justify-center mb-6 shrink-0">
//                 <v.icon className="w-6 h-6" />
//               </div>
//               <h3 className="text-lg font-serif font-semibold text-[#1D1D1D]">{v.title}</h3>
//               <p className="text-sm text-[#666] font-light mt-3 leading-relaxed">{v.copy}</p>
//             </Card3DTilt>
//           </RevealOnScroll>
//         ))}
//       </div>
//     </section>
//   );
// }



import { IconLeaf, IconGem, IconAward, IconMapPin } from "@/components/Icons";
import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";

const values = [
  { icon: IconAward, title: "Heritage & Trust", copy: "For over 100 years, our family has earned the trust of generations through honesty, transparency, and exceptional craftsmanship that stands the test of time." },
  { icon: IconGem, title: "Quality & Purity", copy: "We use carefully selected gold, silver, diamonds, gemstones, and colour stones, ensuring every jewellery piece meets the highest standards of quality and authenticity." },
  { icon: IconLeaf, title: "Personalised Craftsmanship", copy: "Every customer has a unique story. Our artisans create customised jewellery that reflects your vision with precision, care, and attention to every detail." },
  { icon: IconMapPin, title: "Relationships First", copy: "We believe jewellery is more than a purchase. By offering expert guidance and genuine service, we build lifelong relationships with every family we serve." },
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
        <p className="mt-4 text-sm sm:text-base text-[#666] font-light leading-relaxed">
          Every piece we create reflects the values that have guided GR Jewellers for over a
          century. From honest craftsmanship to personalised service, these principles define
          who we are and every relationship we build.
        </p>
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