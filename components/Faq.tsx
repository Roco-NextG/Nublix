import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { FAQ_SECTION, FAQS } from "@/lib/content";

/** Home · FAQ — the calm, editorial beat after the services map: no
 * scroll choreography, just a sticky heading and native <details>. */
export default function Faq() {
  return (
    <section className="bg-paper py-24 text-ink sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <Reveal>
            <Eyebrow>{FAQ_SECTION.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] text-[34px] leading-[0.98] font-medium tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
              {FAQ_SECTION.title}
            </h2>
          </Reveal>
        </div>

        <Reveal stagger className="border-t border-dashed border-ink/15">
          {FAQS.map((item, i) => (
            <details key={item.q} className="group border-b border-dashed border-ink/15">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
                <span className="flex items-baseline gap-4 transition-transform duration-200 ease-out sm:gap-6 sm:group-hover:translate-x-2">
                  <span className="font-mono text-[12px] text-ink/35 transition-colors duration-150 group-open:text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[18px] leading-snug font-medium tracking-[-0.01em] sm:text-[22px]">
                    {item.q}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-2 h-3 w-3 shrink-0 sm:mt-2.5"
                >
                  <span className="absolute top-1/2 left-0 h-px w-3 bg-ink/50" />
                  <span className="absolute top-0 left-1/2 h-3 w-px bg-ink/50 transition-transform duration-300 ease-out-strong group-open:scale-y-0" />
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="max-w-[60ch] pb-7 pl-9 text-[15px] leading-relaxed text-ink/65 sm:pl-12 sm:text-[17px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
