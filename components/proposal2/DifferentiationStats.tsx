import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { DIFFERENTIATORS } from "@/lib/proposalContent";
import type { Locale } from "@/lib/i18n";

const HEADING = {
  eyebrow: { es: "Por qué Nublix", en: "Why Nublix" },
  title: {
    es: (
      <>
        Software que <span className="text-teal">se adapta a vosotros</span>, no al revés.
      </>
    ),
    en: (
      <>
        Software that <span className="text-teal">adapts to you</span>, not the other way around.
      </>
    ),
  },
} as const;

/** A horizontal stat strip instead of a vertical checklist — four short
 * claims read like a dashboard row rather than a bulleted sales pitch. */
export default function DifferentiationStats({ locale }: { locale: Locale }) {
  return (
    <section className="bg-paper px-5 py-16 text-ink sm:px-8 sm:py-24 lg:px-16">
      <Reveal>
        <Eyebrow>{HEADING.eyebrow[locale]}</Eyebrow>
        <h2 className="mt-5 max-w-[18ch] text-[30px] leading-[1.05] font-bold tracking-[-0.02em] sm:text-[40px]">
          {HEADING.title[locale]}
        </h2>
      </Reveal>

      <Reveal stagger className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DIFFERENTIATORS[locale].map((item, i) => (
          <div key={item} className="rounded-2xl border border-ink/12 px-6 py-8 sm:px-7 sm:py-10">
            <span className="block font-mono text-[13px] tracking-[0.04em] text-teal-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-[17px] leading-snug font-medium tracking-[-0.01em] sm:text-[18px]">
              {item}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
