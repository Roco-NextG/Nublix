import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { OBJECTIONS } from "@/lib/proposalContent";
import type { Locale } from "@/lib/i18n";

const HEADING = {
  eyebrow: { es: "Antes de escribirnos", en: "Before you reach out" },
  title: {
    es: (
      <>
        Las FAQ <span className="text-teal">que nos repiten</span>
      </>
    ),
    en: (
      <>
        The questions <span className="text-teal">we hear most</span>
      </>
    ),
  },
  otherQuestion: {
    es: "¿Tienes otra duda? Escríbenos directamente.",
    en: "Have another question? Just write to us directly.",
  },
} as const;

/** FAQPage structured data from the exact same OBJECTIONS content rendered
 * below — real objection-handling copy the business already stands behind,
 * not content written just for schema. Helps Google understand this
 * section and makes it eligible for a rich FAQ result. */
function FaqSchema({ locale }: { locale: Locale }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: OBJECTIONS.map((item) => ({
      "@type": "Question",
      name: item.title[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.description[locale],
      },
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

/** A solid mint band (not just an alternating row) to break the paper
 * rhythm once, then a 2-column card grid instead of a full-width accordion
 * list — cards read as a FAQ board, not a stacked interrogation. */
export default function ObjectionsGrid({ locale }: { locale: Locale }) {
  return (
    <section id="faq" className="scroll-mt-28 bg-mint px-5 py-16 text-ink sm:px-8 sm:py-24 lg:px-16">
      <FaqSchema locale={locale} />
      <Reveal>
        <Eyebrow>{HEADING.eyebrow[locale]}</Eyebrow>
        <h2 className="mt-5 max-w-[16ch] text-[30px] leading-[1.2] font-bold tracking-[-0.02em] sm:text-[38px]">
          {HEADING.title[locale]}
        </h2>
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2">
        {OBJECTIONS.map((item) => (
          <details
            key={item.index}
            className="group rounded-2xl border border-ink/10 bg-paper/70 px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 open:border-transparent open:bg-ink/75 open:text-paper open:shadow-[0_10px_30px_rgb(var(--color-ink-rgb)_/_0.25),inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <span className="text-[16px] leading-snug font-medium tracking-[-0.01em] sm:text-[18px]">
                {item.title[locale]}
              </span>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 font-mono text-[14px] text-teal transition-transform duration-200 ease-out group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-ink/60 group-open:text-paper/65 sm:text-[15px]">
              {item.description[locale]}
            </p>
          </details>
        ))}

        <a
          href="mailto:info@nublix.es"
          className="group flex items-center justify-between gap-4 rounded-2xl border border-dashed border-ink/20 px-6 py-6 transition-colors duration-200 hover:border-ink/40 sm:col-span-2"
        >
          <span className="text-[16px] leading-snug font-medium tracking-[-0.01em] text-ink/70 sm:text-[18px]">
            {HEADING.otherQuestion[locale]}
          </span>
          <span className="shrink-0 font-mono text-[14px] text-teal transition-transform duration-200 ease-out group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
    </section>
  );
}
