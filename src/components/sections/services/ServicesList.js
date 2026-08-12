/* eslint-disable @next/next/no-img-element */
"use client";

import { RevealOnScroll, Card3DTilt } from "@/components/LuxuryEffects";
import { IconGem, IconAward, IconLeaf } from "@/components/Icons";

const services = [
  {
    icon: IconGem,
    title: "Bespoke Ring Designs",
    description:
      "Every special moment deserves a ring designed exclusively for you. Our bespoke ring design service combines traditional craftsmanship with modern creativity to create custom engagement rings, wedding rings, and personalised jewellery that reflects your unique style. From the initial consultation to the final handcrafted piece, our artisans ensure every detail is crafted to perfection using premium gold, certified diamonds, gemstones, and colour stones.",
    highlights: [
      "One-to-one jewellery design consultation",
      "CAD design & 3D visual preview",
      "GIA-certified diamond & gemstone guidance",
      "Custom engagement & wedding ring design",
      "Premium gold, diamonds, gemstones & colour stones",
      "Handcrafted with exceptional precision and care",
    ],
    image:
      "/image/gr/all/1/ring1.png",
    accent: "from-[#1B4341] to-[#2A5E5B]",
  },
  {
    icon: IconAward,
    title: "Wedding Jewellery Specialist",
    description:
      "Celebrate your special day with beautifully crafted wedding jewellery designed to match your story. From custom engagement rings and bridal jewellery to couple wedding rings and personalised wedding bands, we create elegant pieces that blend timeless craftsmanship with your unique style. Every design is handcrafted to make your wedding memories last a lifetime.",
    highlights: [
      "Custom bridal jewellery & wedding sets",
      "Bespoke engagement & wedding rings",
      "Matching wedding bands for couples",
      "Personalised engraving & jewellery customisation",
      "Gold, diamond, gemstone & colour stone options",
      "Expert guidance from design to final creation",
    ],
    image:
      "/image/gr/all/1/set3.png",
    accent: "from-[#6B5B3E] to-[#8B7355]",
  },
  {
    icon: IconLeaf,
    title: "Gold, Silver & Diamond Retailer",
    description:
      "Discover an exquisite collection of gold, silver, diamond, gemstone, and colour stone jewellery crafted with exceptional quality and timeless elegance. From everyday luxury to special occasions, GR Jewellers offers certified diamonds, handcrafted gold jewellery, and personalised designs that combine heritage craftsmanship with modern sophistication.",
    highlights: [
      "Certified natural & lab-grown diamond jewellery",
      "Gold, silver, platinum, gemstone & colour stone collections",
      "GIA-certified diamond & gemstone expertise",
      "Custom jewellery & personalised design services",
      "Trusted quality, purity & authentic craftsmanship",
      "Elegant jewellery for every occasion",
    ],
    image:
      "/image/gr/all/1/set1.png",
    accent: "from-[#3D3229] to-[#5C4E3E]",
  },
];

export default function ServicesList() {
  return (
    <section id="our-services" className="py-20 sm:py-28 bg-[#FBF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <RevealOnScroll mode="fade-in-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#1B4341]/30" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#1B4341]">
                Our Expertise
              </span>
              <span className="h-px w-8 bg-[#1B4341]/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1B4341] tracking-tight">
              Services We Offer
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#666] font-light max-w-xl mx-auto leading-relaxed">
              Backed by over 100 years of family craftsmanship, we offer bespoke ring designs, wedding jewellery, and exquisite gold, silver, and diamond collections, thoughtfully crafted to be treasured for generations.
            </p>
          </div>
        </RevealOnScroll>

        {/* Service Cards */}
        <div className="space-y-16 sm:space-y-24">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.title} mode="fade-in-up" delay={150}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                  idx % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${
                    idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Card3DTilt className="rounded-3xl overflow-hidden h-[360px] flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-700"
                    />
                  </Card3DTilt>
                </div>

                {/* Content */}
                <div
                  className={`${
                    idx % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.accent} text-white flex items-center justify-center shadow-md`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#999]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1B4341] tracking-tight mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#555] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlight list */}
                  <ul className="space-y-3 mb-8">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[#444]">
                        <span className="w-5 h-5 rounded-full bg-[#1B4341]/10 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-[#1B4341]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#1B4341] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#122D2B] transition-all shadow-md transform hover:-translate-y-0.5"
                  >
                    Enquire Now
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
