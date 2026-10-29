import Eyebrow from "@/components/system/Eyebrow";
import TechLabel from "@/components/system/TechLabel";
import Reveal from "@/components/system/Reveal";
import { METHOD_STEPS } from "@/lib/proposalContent";
import type { Locale } from "@/lib/i18n";

const HEADING = {
  eyebrow: { es: "Método Nublix", en: "The Nublix Method" },
  title: {
    es: (
      <>
        <span className="text-teal">Primero el proceso.</span> Luego la tecnología.
      </>
    ),
    en: (
      <>
        <span className="text-teal">Process first.</span> Technology second.
      </>
    ),
  },
} as const;

/** Editorial treatment: a giant translucent numeral sits behind each step
 * instead of a diagram — magazine-spread rhythm rather than a product-reveal
 * panel. Static grid, not pinned horizontal scroll — of the site's
 * choreographed sections, only Hero and Servicios are GSAP-pinned. Also a
 * different texture from the first proposal's node-diagram panels. */
export default function MethodEditorial({ locale }: { locale: Locale }) {
  return (
    <section id="metodo" className="scroll-mt-28 bg-paper px-5 py-16 text-ink sm:px-8 sm:py-24 lg:px-16">
      <Reveal>
        <Eyebrow>{HEADING.eyebrow[locale]}</Eyebrow>
        <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[1.2] font-bold tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
          {HEADING.title[locale]}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-16 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20">
        {METHOD_STEPS.map((step) => (
          <Reveal key={step.index} className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-2 text-[120px] leading-none font-medium text-ink/[0.06] select-none sm:-top-14 sm:text-[160px]"
            >
              {step.index}
            </span>
            <div className="relative border-t border-dashed border-ink/20 pt-6">
              <h3 className="text-[26px] leading-[1.2] font-bold tracking-[-0.01em] sm:text-[32px]">
                {step.title[locale]}
              </h3>
              <TechLabel className="mt-3 text-teal-dim">{step.lead[locale]}</TechLabel>
              <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
                {step.description[locale]}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
