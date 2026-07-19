import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

export default function OurStory() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Sticky-feeling label column */}
        <div className="lg:col-span-4">
          <RevealOnScroll mode="fade-in-up" className="lg:sticky lg:top-32">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1B4341] block mb-3">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[#1B4341] leading-tight">
              <TextSplitReveal text="A quieter kind of luxury" type="words" />
            </h2>
          </RevealOnScroll>
        </div>

        {/* Narrative column */}
        <div className="lg:col-span-8 space-y-8">
          <RevealOnScroll mode="fade-in-up" delay={100}>
            <p className="text-lg sm:text-xl font-serif text-[#1D1D1D] leading-relaxed">
              In 1970, our founder set out with a simple conviction: a piece of jewelry should
              carry no hidden cost. Not to the land it was mined from, not to the people who
              shaped it, and not to the wearer who would carry it for a lifetime.
            </p>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={200}>
            <p className="text-sm sm:text-base text-[#666] font-light leading-relaxed">
              What began as a single workbench in Sydney has grown into three carbon-negative
              ateliers across Australia — yet the philosophy hasn&rsquo;t moved an inch. We still
              refuse to run a transactional storefront. Every piece is either drawn from a
              numbered, limited archive or commissioned privately with a client who wants
              something that has never existed before.
            </p>
          </RevealOnScroll>

          <RevealOnScroll mode="scale-up" delay={250} className="border-l-2 border-[#1B4341] pl-6 py-2">
            <p className="text-xl sm:text-2xl font-serif italic text-[#1B4341] leading-snug">
              &ldquo;We don&rsquo;t chase trends. We chase the point where craft, ethics, and
              beauty stop competing with each other.&rdquo;
            </p>
            <span className="block mt-3 text-xs uppercase tracking-widest text-[#777]">
              Founding Atelier Philosophy, 1970
            </span>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={300}>
            <p className="text-sm sm:text-base text-[#666] font-light leading-relaxed">
              Today that same conviction shapes every decision we make — from the recycled gold
              in our vaults to the conflict-free stones in our cases, to the artisans who spend
              years, not weeks, mastering a single technique.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
