import type { Metadata } from "next";
import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import { PROMISES } from "@/lib/content";
import { CONTACT_PATH, METADATA } from "@/lib/i18n";

export const metadata: Metadata = {
  title: METADATA.contact.title.es,
  description: METADATA.contact.description.es,
  alternates: {
    canonical: CONTACT_PATH.es,
    languages: {
      es: CONTACT_PATH.es,
      en: CONTACT_PATH.en,
      "x-default": CONTACT_PATH.es,
    },
  },
  openGraph: {
    title: METADATA.contact.title.es,
    description: METADATA.contact.description.es,
    url: CONTACT_PATH.es,
    siteName: "Nublix",
    locale: "es_ES",
    type: "website",
  },
};

const STEPS = [
  {
    index: "01",
    title: "Contadnos cómo trabajáis hoy",
    description: "Nos contáis cómo funciona hoy vuestro proceso.",
  },
  {
    index: "02",
    title: "Mapeamos el proceso",
    description: "Sesión de 2-3h con vuestro equipo, presencial o remota, para dibujarlo.",
  },
  {
    index: "03",
    title: "Encontramos la fricción",
    description: "Un informe con quick wins, os quedéis con nosotros o no.",
  },
  {
    index: "04",
    title: "Diseñamos el sistema",
    description: "Precio fijo, cerrado antes de empezar a construir.",
  },
] as const;

export default function ContactoPage() {
  return (
    <section className="bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>Contacto</Eyebrow>
        <h1 className="mt-5 max-w-[16ch] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-bold tracking-[-0.02em]">
          Reservemos el <span className="text-teal">diagnóstico.</span>
        </h1>
        <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          Escribidnos y os proponemos fecha para la sesión de diagnóstico. Sin letra pequeña.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <Reveal stagger className="border-t border-dashed border-ink/10">
            {STEPS.map((step) => (
              <div
                key={step.index}
                className="group flex flex-col gap-2 border-b border-dashed border-ink/10 py-6 transition-transform duration-200 ease-out sm:flex-row sm:items-baseline sm:gap-8 sm:hover:translate-x-2"
              >
                <span className="font-mono text-[13px] text-teal">{step.index}</span>
                <h3 className="text-[19px] font-bold tracking-[-0.01em] text-ink sm:w-[22ch] sm:shrink-0">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink/60">{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="border-t border-dashed border-ink/10 pt-8">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.06em] text-ink/50 uppercase">
            <StatusDot />
            Status: ready
          </span>
          <h2 className="mt-6 text-[26px] leading-[1.05] font-bold tracking-[-0.01em] text-ink sm:text-[32px]">
            Escribidnos directamente.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
            Contadnos en dos líneas qué os gustaría resolver. Os respondemos nosotros, no un formulario automático.
          </p>
          <ul className="mt-6 flex flex-col gap-2">
            {PROMISES.es.map((promise) => (
              <li
                key={promise}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/12 bg-paper px-3 py-1.5 text-[13px] text-ink/75"
              >
                <StatusDot className="text-teal" />
                {promise}
              </li>
            ))}
          </ul>
          <a
            href="mailto:hola@nublix.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-teal px-6 py-3 text-[14px] font-semibold text-ink transition-colors duration-150 ease-out hover:bg-teal-dim active:scale-[0.98]"
          >
            hola@nublix.com
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
