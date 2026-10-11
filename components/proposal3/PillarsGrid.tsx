import Reveal from "@/components/system/Reveal";
import Eyebrow3 from "./Eyebrow3";
import { PILLARS } from "@/lib/proposal3Content";

/** The Indicium "Drive Growth / Reduce Risk / Lower Costs" numbered-card
 * pattern, carrying Nublix's own three commitments instead. Plain bordered
 * cards, no rotation, no clip-path — the number is the only ornament. */
export default function PillarsGrid() {
  return (
    <section id="por-que" className="scroll-mt-20 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow3 tone="onLight">Por qué Nublix</Eyebrow3>
          <h2 className="mt-5 max-w-[26ch] text-[32px] leading-[1.1] font-medium tracking-[-0.015em] sm:text-[44px]">
            Tres compromisos que una consultora grande no puede igualar.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.index} className="border border-ink/10 px-7 py-9">
              <span className="font-mono text-[13px] tracking-[0.04em] text-teal-dim">
                {p.index}
              </span>
              <h3 className="mt-5 text-[19px] font-medium tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/55">{p.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
