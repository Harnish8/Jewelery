import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { RevealOnScroll, SectionBgTransition, TextSplitReveal } from "@/components/LuxuryEffects";

export default function AboutCta() {
  return (
    <SectionBgTransition
      bgInView="bg-[#1B4341] text-white"
      bgOutView="bg-[#FBF8F3] text-[#1D1D1D]"
      className="py-24 px-6 lg:px-16 mt-8"
    >
      <RevealOnScroll mode="fade-in-up" className="max-w-3xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-amber-200 font-semibold block mb-3">
          Ready When You Are
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif font-light leading-tight">
          <TextSplitReveal text="Let's Design Your Heirloom" type="words" />
        </h2>
        <p className="mt-6 text-sm sm:text-base text-zinc-300 font-light max-w-lg mx-auto leading-relaxed">
          Book a private consultation with one of our artisans and start a piece that will
          outlast the trend it was born in.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#1B4341] px-10 py-4.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-amber-200 transition-all shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Get In Touch</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </RevealOnScroll>
    </SectionBgTransition>
  );
}
