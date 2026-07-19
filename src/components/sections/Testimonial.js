/* eslint-disable @next/next/no-img-element */
import { RevealOnScroll } from "@/components/LuxuryEffects";

export default function Testimonial() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto border-t border-[#EADFC9]">
      <RevealOnScroll mode="fade-in-up" className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Client Stories
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          What People Say
        </h2>
      </RevealOnScroll>

      <RevealOnScroll mode="scale-up" className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center bg-[#F3EAD8] rounded-3xl p-8 sm:p-12 border border-[#EADFC9] shadow-lg">
        {/* Left Quote Text (Span 7) */}
        <div className="md:col-span-7">
          <div className="text-5xl font-serif text-[#1B4341]/30 mb-4">&ldquo;</div>
          <p className="text-xl sm:text-2xl font-serif text-[#1B4341] leading-relaxed italic">
            &ldquo;Amazing service. My ring was a bit too big and they offered to resize it for free and very swiftly. The craftsmanship is breathtaking and the ethical diamond really sparkles.&rdquo;
          </p>
          <div className="mt-6">
            <h4 className="font-bold font-sans text-sm text-[#1D1D1D] uppercase tracking-wider">Kathryn Murphy</h4>
            <span className="text-xs text-[#666]">London, United Kingdom</span>
          </div>
        </div>

        {/* Right Arched Portrait (Span 5) */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-64 aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
            <img
              src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80"
              alt="Kathryn Murphy testimonial portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
