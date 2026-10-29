import Button2 from "./Button2";
import TechLabel from "@/components/system/TechLabel";
import Reveal from "@/components/system/Reveal";
import { CONTACT_PATH, UI, type Locale } from "@/lib/i18n";

const COPY = {
  label: { es: "Siguiente paso", en: "Next step" },
  title: {
    es: (
      <>
        ¿Hablamos de <span className="text-teal">vuestro proceso?</span>
      </>
    ),
    en: (
      <>
        Shall we talk about <span className="text-teal">your process?</span>
      </>
    ),
  },
  body: {
    es: "Una llamada de 30 minutos, gratis y sin compromiso. El diagnóstico llega después, si encajamos.",
    en: "A 30-minute call, free and no commitment. The diagnosis comes after, if we're a fit.",
  },
} as const;

export default function FinalCta({ locale }: { locale: Locale }) {
  return (
    <section className="border-t border-dashed border-paper/15 bg-ink px-5 py-28 text-paper sm:px-8 lg:px-16">
      <Reveal>
        <TechLabel dot className="text-paper/50">
          {COPY.label[locale]}
        </TechLabel>
        <h2 className="mt-5 max-w-[16ch] text-[38px] leading-[0.95] font-bold tracking-[-0.02em] sm:text-[56px] lg:text-[64px]">
          {COPY.title[locale]}
        </h2>
        <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-paper/60 sm:text-[18px]">
          {COPY.body[locale]}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button2 href={CONTACT_PATH[locale]}>{UI.primaryCta[locale]}</Button2>
        </div>
      </Reveal>
    </section>
  );
}
