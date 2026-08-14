/* eslint-disable @next/next/no-img-element */
import { IconMapPin, IconPhone, IconMail, IconClock } from "@/components/Icons";
import { RevealOnScroll, ParallaxBox } from "@/components/LuxuryEffects";
import Script from "next/script";

const ateliers = [
  {
    city: "Anand, Gujarat",
    address: "Near Tower, Chokshi Bajar, Mathiya Chora, 388001",
  },
];

const contactDetails = [
  {
    icon: IconPhone,
    title: "Call Us",
    lines: ["+91 8160383801", "+91 2691256606"],
  },
  {
    icon: IconMail,
    title: "Email Us",
    lines: ["gr_jewellers@ymail.com"],
  },
  {
    icon: IconClock,
    title: "Showroom Hours",
    lines: ["Monday to Saturday, 10 AM – 8 PM"],
  },
];

export default function ContactSplit() {
  return (
    <section id="contact-form" className="py-8 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] overflow-hidden border border-[#EADFC9] shadow-xl">
        {/* Left: image + addresses */}
        <RevealOnScroll
          mode="fade-in-up"
          className="lg:col-span-5 relative bg-[#1B4341] text-white min-h-[420px] lg:min-h-full"
        >
          <ParallaxBox speed={0.05} className="absolute inset-0 w-full h-full">
            <img
              src="/image/webp/ring2.webp"
              alt="G R Jewellers private salon"
              className="w-full h-full object-cover opacity-30 scale-110"
            />
          </ParallaxBox>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4341]/95 via-[#1B4341]/80 to-[#122D2B]/95" />

          {/* <div className="relative p-8 sm:p-12 flex flex-col h-full justify-center">
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
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      {a.city}
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">
                      {a.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
            <div className="h-px bg-white/15 my-8" />

            
            <div className="space-y-6">
              {contactDetails.map((d) => (
                <div key={d.title} className="flex items-start gap-3">
                  <d.icon className="w-4 h-4 mt-1 text-amber-200 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      {d.title}
                    </h4>
                    {d.lines.map((line) => (
                      <p
                        key={line}
                        className="text-xs text-zinc-300 font-light mt-0.5"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col h-full justify-center lg:justify-start">
            <div className="mb-8 lg:mb-6">
              <h2 className="text-2xl lg:text-3xl font-serif font-light tracking-wide text-amber-200 inline-block pb-2 border-b border-amber-200/60 uppercase">
                Our Ateliers
              </h2>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-xl font-serif font-light mb-8 lg:mb-6">
              Visit us by private appointment
            </h3>

            {/* Address */}
            <div className="space-y-6 lg:space-y-4">
              {ateliers.map((a) => (
                <div key={a.city} className="flex items-start gap-3">
                  <IconMapPin className="w-4 h-4 mt-1 text-amber-200 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      {a.city}
                    </h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">
                      {a.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/15 my-8 lg:my-5" />

            {/* Phone / Email / Hours */}
            <div className="space-y-6 lg:space-y-4">
              {contactDetails.map((d) => (
                <div key={d.title} className="flex items-start gap-3">
                  <d.icon className="w-4 h-4 mt-1 text-amber-200 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      {d.title}
                    </h4>
                    {d.lines.map((line) => (
                      <p
                        key={line}
                        className="text-xs text-zinc-300 font-light mt-0.5"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/15 my-8 lg:my-5" />

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/15 h-50 lg:h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.701303154052!2d72.95189156133472!3d22.55275803034874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f9261bd77ab%3A0x66a24dbf62a5b5f9!2sTower%20bazaar!5e1!3m2!1sen!2sin!4v1786679161493!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="G R Jewellers Location"
              />
            </div>
          </div>
        </RevealOnScroll>

        {/* Right: form */}
        <RevealOnScroll
          mode="fade-in-up"
          delay={150}
          className="lg:col-span-7 bg-white p-8 sm:p-12"
        >
          {/* <ContactPageForm /> */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/uJZQZ3GHGTXuMCFqDYdI"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: 0,
            }}
            id="inline-uJZQZ3GHGTXuMCFqDYdI"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="G R Jewellers"
            data-height="undefined"
            data-layout-iframe-id="inline-uJZQZ3GHGTXuMCFqDYdI"
            data-form-id="uJZQZ3GHGTXuMCFqDYdI"
            title="G R Jewellers"
          ></iframe>
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="lazyOnload"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
