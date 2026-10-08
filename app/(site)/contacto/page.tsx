import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import SectionSeam from "@/components/system/SectionSeam";
import { PROMISES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto — nublix",
  description:
    "Reservad el diagnóstico digital: 2-3 horas con vuestro equipo, un informe con quick wins y precio fijo.",
};

const INCLUDES = [
  {
    index: "01",
    title: "Tell us how it works",
    description: "Nos contáis cómo funciona hoy vuestro proceso.",
  },
  {
    index: "02",
    title: "We map the process",
    description:
      "Sesión de 2-3h con vuestro equipo, presencial o remota, para dibujarlo.",
  },
  {
    index: "03",
    title: "We find the friction",
    description: "Un informe con quick wins, os quedéis con nosotros o no.",
  },
  {
    index: "04",
    title: "We design the system",
    description: "Precio fijo, cerrado antes de empezar a construir.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Reservemos el diagnóstico."
        description="Escribidnos y os proponemos fecha para la sesión de diagnóstico. Sin letra pequeña."
      />

      <SectionSeam tone="onDark" />

      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div>
              <Reveal>
                <Eyebrow>Nublix Diagnostic</Eyebrow>
              </Reveal>
              <Reveal stagger className="mt-8 border-t border-dashed border-ink/10">
                {INCLUDES.map((item) => (
                  <div
                    key={item.index}
                    className="group flex flex-col gap-2 border-b border-dashed border-ink/10 py-6 transition-transform duration-200 ease-out sm:flex-row sm:items-baseline sm:gap-8 sm:hover:translate-x-2"
                  >
                    <span className="font-mono text-[13px] text-teal">
                      {item.index}
                    </span>
                    <span className="text-[19px] font-medium tracking-[-0.01em] text-ink sm:w-[22ch] sm:shrink-0">
                      {item.title}
                    </span>
                    <p className="text-[14px] leading-relaxed text-ink/55">
                      {item.description}
                    </p>
                  </div>
                ))}
              </Reveal>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] tracking-[0.04em] text-ink/45 uppercase">
                {PROMISES.map((promise) => (
                  <li key={promise}>{promise}</li>
                ))}
              </ul>
            </div>

            <Reveal className="border-t border-dashed border-ink/10 pt-8">
              <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.06em] text-ink/50 uppercase">
                <StatusDot />
                Status: ready
              </span>
              <h2 className="mt-6 text-[26px] leading-[1.05] font-medium tracking-[-0.01em] text-ink sm:text-[32px]">
                Escribidnos directamente.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
                Contadnos en dos líneas qué os gustaría resolver. Os
                respondemos nosotros, no un formulario automático.
              </p>
              <a
                href="mailto:hola@nublix.com"
                className="mt-8 inline-flex items-center gap-3 bg-teal px-7 py-4 font-mono text-[13px] tracking-[0.04em] text-ink uppercase transition-colors duration-150 ease-out hover:bg-teal-dim active:scale-[0.98]"
              >
                hola@nublix.com
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
