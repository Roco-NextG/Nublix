import Reveal from "@/components/system/Reveal";
import Eyebrow3 from "./Eyebrow3";
import { SERVICES } from "@/lib/content";

/** Plain bordered cards, square corners — the Indicium "Solutions Across
 * the Full Lifecycle" grid, carrying Nublix's seven real services. No
 * clip-path, no hover rotation, nothing fighting the content. */
export default function Services3() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow3 tone="onLight">Servicios</Eyebrow3>
          <h2 className="mt-5 max-w-[26ch] text-[32px] leading-[1.1] font-medium tracking-[-0.015em] sm:text-[44px]">
            Siete piezas del mismo sistema.
          </h2>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-ink/55 sm:text-[16px]">
            Elige por dónde empezar — el diagnóstico decide el resto. Todo se
            conecta al mismo panel de control.
          </p>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.index}
              className="border border-ink/10 p-7 transition-colors duration-150 ease-out hover:border-teal/50"
            >
              <span className="font-mono text-[12px] tracking-[0.04em] text-teal-dim">
                {s.index}
              </span>
              <h3 className="mt-4 text-[17px] font-medium tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/55">{s.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
