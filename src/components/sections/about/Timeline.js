import { RevealOnScroll, TextSplitReveal } from "@/components/LuxuryEffects";

const milestones = [
  { year: "1970", title: "The First Workbench", copy: "A single artisan bench opens in Sydney, dedicated entirely to bespoke commissions." },
  { year: "1988", title: "The Melbourne Atelier", copy: "A second atelier opens to meet demand for private salon appointments across the south." },
  { year: "2005", title: "100% Recycled Gold", copy: "Eglanto becomes one of the first Australian houses to work exclusively in recycled 18k gold." },
  { year: "2018", title: "Conflict-Free Standard", copy: "Full traceability is introduced across every gemstone sourced from Western Australia." },
  { year: "2024", title: "Carbon-Negative Ateliers", copy: "All three ateliers achieve carbon-negative operating status, offsetting beyond neutral." },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-5xl mx-auto border-t border-[#EADFC9]">
      <RevealOnScroll mode="fade-in-up" className="text-center max-w-xl mx-auto mb-20">
        <span className="text-xs uppercase tracking-[0.25em] text-[#1B4341] font-semibold block mb-2">
          Five Decades
        </span>
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-[#1B4341]">
          <TextSplitReveal text="Our Journey" type="words" />
        </h2>
      </RevealOnScroll>

      <div className="relative">
        {/* Center line */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-[#EADFC9] -translate-x-1/2" />

        <div className="space-y-14 sm:space-y-0">
          {milestones.map((m, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={m.year} className="sm:grid sm:grid-cols-2 sm:gap-10 relative sm:py-10">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#1B4341] border-4 border-[#FBF8F3] shadow-md z-10" />

                {isLeft ? (
                  <>
                    <RevealOnScroll mode="fade-in-up" className="sm:text-right sm:pr-14">
                      <span className="text-3xl font-serif text-[#1B4341] block mb-1">{m.year}</span>
                      <h3 className="text-lg font-serif font-semibold text-[#1D1D1D]">{m.title}</h3>
                      <p className="text-sm text-[#666] font-light mt-2 leading-relaxed">{m.copy}</p>
                    </RevealOnScroll>
                    <div />
                  </>
                ) : (
                  <>
                    <div className="hidden sm:block" />
                    <RevealOnScroll mode="fade-in-up" className="sm:pl-14">
                      <span className="text-3xl font-serif text-[#1B4341] block mb-1">{m.year}</span>
                      <h3 className="text-lg font-serif font-semibold text-[#1D1D1D]">{m.title}</h3>
                      <p className="text-sm text-[#666] font-light mt-2 leading-relaxed">{m.copy}</p>
                    </RevealOnScroll>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
