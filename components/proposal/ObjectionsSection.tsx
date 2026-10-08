import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { OBJECTIONS } from "@/lib/proposalContent";

/** A dedicated accordion rather than reusing EditorialAccordion — these
 * titles are full questions, not short labels, so they need to wrap
 * across lines instead of truncating to one. */
export default function ObjectionsSection() {
  return (
    <section id="dudas" className="bg-paper px-5 pb-24 text-ink sm:px-8 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>Antes de escribirnos</Eyebrow>
        <h2 className="mt-5 max-w-[16ch] text-[30px] leading-[1] font-medium tracking-[-0.02em] sm:text-[38px]">
          Las dudas que nos repiten
        </h2>
      </Reveal>

      <Reveal stagger className="mt-12 border-t border-dashed border-ink/15">
        {OBJECTIONS.map((item) => (
          <details key={item.index} className="group border-b border-dashed border-ink/15">
            <summary className="flex cursor-pointer list-none items-start gap-5 py-6 [&::-webkit-details-marker]:hidden sm:items-center sm:gap-6 sm:py-7">
              <span className="pt-0.5 font-mono text-[13px] tracking-[0.04em] text-ink/35 sm:pt-0">
                {item.index}
              </span>
              <span className="flex-1 text-[18px] leading-snug font-medium tracking-[-0.01em] sm:text-[22px]">
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 h-[7px] w-[7px] shrink-0 rounded-full border border-teal opacity-40 transition-opacity duration-150 ease-out group-open:bg-teal group-open:opacity-100 sm:mt-0"
              />
            </summary>

            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <p className="max-w-[56ch] pb-7 pl-[2.1rem] text-[15px] leading-relaxed text-ink/60 sm:pl-[2.6rem] sm:text-[16px]">
                  {item.description}
                </p>
              </div>
            </div>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
