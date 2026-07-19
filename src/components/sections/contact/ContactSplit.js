/* eslint-disable @next/next/no-img-element */
import { IconMapPin } from "@/components/Icons";
import { RevealOnScroll, ParallaxBox } from "@/components/LuxuryEffects";
import ContactPageForm from "@/components/sections/contact/ContactPageForm";

const ateliers = [
  { city: "Sydney", address: "12 Macquarie Lane, Sydney NSW 2000" },
  { city: "Melbourne", address: "88 Collins Street, Melbourne VIC 3000" },
  { city: "Perth", address: "5 Hay Street, Perth WA 6000" },
];

export default function ContactSplit() {
  return (
    <section id="contact-form" className="py-8 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden border border-[#EADFC9] shadow-xl">
        {/* Left: image + addresses */}
        <RevealOnScroll mode="fade-in-up" className="lg:col-span-5 relative bg-[#1B4341] text-white min-h-[320px] lg:min-h-full">
          <ParallaxBox speed={0.05} className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80"
              alt="Eglanto private salon"
              className="w-full h-full object-cover opacity-30 scale-110"
            />
          </ParallaxBox>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4341]/95 via-[#1B4341]/80 to-[#122D2B]/95" />

          <div className="relative p-8 sm:p-12 flex flex-col h-full justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-200 font-semibold block mb-3">
              Our Ateliers
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light mb-8">
              Visit us by private appointment
            </h3>
            <div className="space-y-6">
              {ateliers.map((a) => (
                <div key={a.city} className="flex items-start gap-3">
                  <IconMapPin className="w-4 h-4 mt-1 text-amber-200 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">{a.city}</h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">{a.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Right: form */}
        <RevealOnScroll mode="fade-in-up" delay={150} className="lg:col-span-7 bg-white p-8 sm:p-12">
          <ContactPageForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
