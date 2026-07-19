import Link from "next/link";
import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

export default function ContactHero() {
  return (
    <section className="relative bg-[#F5EDE1] border-b border-[#EADFC9] overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#EADFC9]/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#1B4341]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-16 pt-16 pb-20 text-center">
        <RevealOnScroll mode="fade-in-up">
          <nav className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#1B4341]/70 mb-8">
            <Link href="/" className="hover:text-[#1B4341] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1B4341] font-semibold">Contact Us</span>
          </nav>
        </RevealOnScroll>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#1B4341] leading-[1.1]">
          <TextSplitReveal text="Let's Create" type="words" delay={150} />
          <br />
          <TextSplitReveal text="Something Timeless" type="words" delay={300} />
        </h1>

        <RevealOnScroll mode="fade-in-up" delay={550}>
          <p className="mt-6 text-sm sm:text-base text-[#555] font-light max-w-lg mx-auto leading-relaxed">
            Whether you&rsquo;re commissioning a bespoke piece or simply have a question about
            our archives, our private advisors are here to help.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
