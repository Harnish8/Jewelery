

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
              <TextSplitReveal text="A Legacy Crafted Across Four Generations" type="words" />
            </h2>
          </RevealOnScroll>
        </div>

        {/* Narrative column */}
        <div className="lg:col-span-8 space-y-8">
          <RevealOnScroll mode="fade-in-up" delay={100}>
            <p className="text-lg sm:text-xl font-serif text-[#1D1D1D] leading-relaxed">
              The journey of GR Jewellers began over a century ago with the vision of Shri
              Hasmukhbhai Godabhai Soni, who believed every piece of jewellery should reflect
              trust, purity, and exceptional craftsmanship. What started as handcrafted
              creations delivered personally to customers laid the foundation for relationships
              that continue to flourish today.
            </p>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={200}>
            <p className="text-sm sm:text-base text-[#666] font-light leading-relaxed">
              Through the dedication of Hasmukh Gordhan Soni and Rajeshbhai Hasmukhbhai Soni,
              this family tradition evolved into the trusted GR Jewellers showroom, established
              in 2003 in Anand, Gujarat. Today, under the leadership of the fourth generation,
              Kevin Rajeshbhai Soni, we continue creating fine jewellery while embracing modern
              design, GIA-certified expertise, and personalised craftsmanship.
            </p>
          </RevealOnScroll>

          <RevealOnScroll mode="scale-up" delay={250} className="border-l-2 border-[#1B4341] pl-6 py-2">
            <p className="text-xl sm:text-2xl font-serif italic text-[#1B4341] leading-snug">
              &ldquo;For us, jewellery is more than an ornament — it is a symbol of heritage,
              trust, and memories crafted to be treasured for generations.&rdquo;
            </p>
            <span className="block mt-3 text-xs uppercase tracking-widest text-[#777]">
              GR Jewellers Family Legacy
            </span>
          </RevealOnScroll>

          <RevealOnScroll mode="fade-in-up" delay={300}>
            <p className="text-sm sm:text-base text-[#666] font-light leading-relaxed">
              From timeless gold and silver jewellery to certified diamonds, gemstones, colour
              stones, platinum, and modern lab-grown diamonds, every creation reflects our
              commitment to quality, authenticity, and lasting relationships. While techniques
              have evolved, our promise remains unchanged — to create jewellery that becomes a
              cherished part of your family&rsquo;s story.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}