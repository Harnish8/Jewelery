// "use client";

// import { useState } from "react";
// import { IconChevronDown } from "@/components/Icons";
// import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

// const faqs = [
//   {
//     q: "Do you have a walk-in store?",
//     a: "No — Eglanto operates entirely by private appointment across our Sydney, Melbourne, and Perth ateliers. This lets every visit be a dedicated, one-on-one session with an advisor.",
//   },
//   {
//     q: "How does a bespoke commission work?",
//     a: "It starts with a private consultation to discuss your vision, budget, and timeline. Our artisans then sketch, cast, and finish the piece by hand, with check-ins at every stage.",
//   },
//   {
//     q: "Where does your gold and stones come from?",
//     a: "Every gram of gold we use is 100% recycled. Every gemstone is conflict-free and fully traceable to its Western Australian source.",
//   },
//   {
//     q: "Do you offer resizing or repairs?",
//     a: "Yes. All Eglanto pieces include complimentary resizing within the first year, and our ateliers offer ongoing repair and maintenance services after that.",
//   },
//   {
//     q: "How long does a commission typically take?",
//     a: "Most bespoke pieces take 6–10 weeks from final design approval, depending on complexity and stone sourcing.",
//   },
// ];

// export default function FaqAccordion() {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="py-24 px-6 lg:px-16 max-w-3xl mx-auto border-t border-[#EADFC9]">
//       <RevealOnScroll mode="fade-in-up" className="text-center mb-14">
//         <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
//           Good To Know
//         </span>
//         <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
//           <TextSplitReveal text="Frequently Asked" type="words" />
//         </h2>
//       </RevealOnScroll>

//       <div className="space-y-3">
//         {faqs.map((item, idx) => {
//           const isOpen = openIndex === idx;
//           return (
//             <RevealOnScroll key={item.q} mode="fade-in-up" delay={idx * 80}>
//               <div className="border border-[#EADFC9] rounded-2xl bg-white overflow-hidden">
//                 <button
//                   onClick={() => setOpenIndex(isOpen ? -1 : idx)}
//                   className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="font-serif text-base sm:text-lg text-[#1D1D1D]">{item.q}</span>
//                   <IconChevronDown
//                     className={`w-5 h-5 text-[#1B4341] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 <div
//                   className="grid transition-all duration-300 ease-in-out"
//                   style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
//                 >
//                   <div className="overflow-hidden">
//                     <p className="px-6 pb-5 text-sm text-[#666] font-light leading-relaxed">
//                       {item.a}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </RevealOnScroll>
//           );
//         })}
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/Icons";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const faqs = [
  {
    q: "What types of jewellery does GR Jewellers specialise in?",
    intro:
      "At GR Jewellers, we offer a wide range of fine jewellery, combining over 100 years of family craftsmanship with modern design expertise.",
    listTitle: "We specialise in:",
    points: [
      "Bespoke and custom jewellery designs",
      "Personalised jewellery for every occasion",
      "Wedding and bridal jewellery collections",
      "Engagement rings and couple wedding bands",
      "Gold, silver, platinum, and diamond jewellery",
      "Natural diamonds and lab-grown diamonds",
      "Certified gemstones and colour stone jewellery",
      "Jewellery designed for anniversaries, gifting, and family heirlooms",
    ],
    outro:
      "Every piece is thoughtfully crafted to reflect your personal style while maintaining the highest standards of quality, purity, and craftsmanship.",
  },
  {
    q: "Can I customise my jewellery at GR Jewellers?",
    intro: "Yes. Custom jewellery design is one of our core specialities.",
    listTitle: "Our jewellery customisation process includes:",
    points: [
      "Personal design consultation with our experts",
      "Understanding your style, occasion, and preferences",
      "Selection of gold, diamonds, gemstones, or colour stones",
      "Bespoke ring design and jewellery customisation",
      "Handcrafted finishing with exceptional attention to detail",
      "Final quality inspection before delivery",
    ],
    outro:
      "Whether you're creating a custom engagement ring, bridal jewellery, or redesigning an existing piece, our experienced team will help transform your vision into timeless jewellery.",
  },
  {
    q: "Do you provide certified diamonds and gemstones?",
    intro:
      "Absolutely. At GR Jewellers, authenticity and quality are at the heart of everything we create.",
    listTitle: "We offer:",
    points: [
      "Certified natural diamonds",
      "Premium lab-grown diamonds",
      "Carefully selected coloured gemstones",
      "Expert guidance from our GIA-certified jewellery professional",
      "High-quality gold, silver, and platinum jewellery",
      "Transparent recommendations based on your preferences and budget",
    ],
    outro:
      "Our goal is to help every customer choose jewellery with complete confidence and peace of mind.",
  },
  {
    q: "Do you create wedding and engagement jewellery?",
    intro:
      "Yes. We specialise in creating elegant wedding jewellery that celebrates every stage of your journey.",
    listTitle: "Our wedding jewellery services include:",
    points: [
      "Custom engagement rings",
      "Bespoke wedding rings",
      "Couple wedding bands",
      "Bridal jewellery collections",
      "Personalised bridal jewellery",
      "Matching jewellery sets",
      "Custom engraving and personalisation",
      "Jewellery designed to become treasured family heirlooms",
    ],
    outro:
      "Every design is handcrafted to reflect your story, making each piece as meaningful as the occasion itself.",
  },
  {
    q: "Where is GR Jewellers located, and do you serve customers outside Anand?",
    intro:
      "GR Jewellers proudly welcomes customers from Anand, across Gujarat, and around the world.",
    listTitle: "You can visit us for:",
    points: [
      "Personal jewellery consultations",
      "Bespoke jewellery design services",
      "Wedding jewellery appointments",
      "Diamond and gemstone guidance",
      "Custom jewellery recommendations",
      "Jewellery gifting for special occasions",
    ],
    outro:
      "We also proudly assist NRI customers from the UK, USA, and Australia, helping them create personalised jewellery while preserving their family's heritage and traditions.",
  },
  {
    q: "Why choose GR Jewellers for custom jewellery in Anand, Gujarat?",
    intro:
      "Choosing the right jeweller is about more than finding a beautiful design—it's about trust, expertise, and lasting craftsmanship.",
    listTitle: "Here's why customers choose GR Jewellers:",
    points: [
      "Over 100 years of family jewellery heritage across four generations",
      "Official showroom established in 2003 in Anand, Gujarat",
      "Expert guidance from a GIA-certified jewellery professional",
      "Specialists in gold, silver, platinum, diamonds, gemstones, and colour stones",
      "Bespoke and personalised jewellery designed around your vision",
      "Honest advice, transparent service, and uncompromising quality",
      "A commitment to building long-term relationships with every customer",
    ],
    outro:
      "Whether you're investing in your first jewellery piece or creating a family heirloom, we're dedicated to delivering jewellery you'll treasure for generations.",
  },
  {
    q: "Can you redesign or remodel my existing jewellery?",
    intro:
      "Yes. We offer jewellery remodelling and customisation services to help you transform existing jewellery into a new design while preserving its sentimental value.",
    listTitle: "Our redesign services include:",
    points: [
      "Converting inherited jewellery into modern designs",
      "Remodelling old gold jewellery",
      "Resetting diamonds and precious gemstones",
      "Upgrading engagement and wedding rings",
      "Creating personalised jewellery from existing materials",
      "Refreshing classic designs with contemporary craftsmanship",
    ],
    outro:
      "Our team carefully evaluates every piece and works closely with you to create jewellery that honours its history while reflecting your personal style.",
  },
  {
    q: "How do I book a consultation with GR Jewellers?",
    intro:
      "Booking a consultation is the best way to discuss your ideas and receive personalised guidance from our jewellery experts.",
    listTitle: "During your consultation, you can:",
    points: [
      "Discuss your custom jewellery requirements",
      "Explore engagement and wedding jewellery options",
      "Select diamonds, gemstones, and colour stones",
      "Receive expert recommendations based on your style and budget",
      "Review personalised design ideas for your jewellery",
      "Ask questions about craftsmanship, materials, and customisation",
    ],
    outro:
      "Simply contact our team by phone, email, or visit our showroom in Anand, Gujarat to schedule your consultation. We'll be happy to help you create jewellery that's uniquely yours.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 lg:px-16 max-w-3xl mx-auto border-t border-[#EADFC9]">
      <RevealOnScroll mode="fade-in-up" className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Good To Know
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Frequently Asked" type="words" />
        </h2>
      </RevealOnScroll>

      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <RevealOnScroll key={item.q} mode="fade-in-up" delay={idx * 80}>
              <div className="border border-[#EADFC9] rounded-2xl bg-white overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#1D1D1D]">
                    {item.q}
                  </span>
                  <IconChevronDown
                    className={`w-5 h-5 text-[#1B4341] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-sm text-[#666] font-light leading-relaxed space-y-3">
                      <p>{item.intro}</p>
                      {item.listTitle && (
                        <p className="font-medium text-[#1D1D1D]">{item.listTitle}</p>
                      )}
                      {item.points && (
                        <ul className="list-disc pl-5 space-y-1.5">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                      {item.outro && <p>{item.outro}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}