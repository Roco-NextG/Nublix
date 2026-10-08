import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import { ChaosDiagram } from "./illustrations";
import { PROBLEM_POINTS } from "@/lib/proposalContent";

/** Oryzo's "Product Reveal Section" pattern, repurposed: no product to
 * render, so the centered object is the problem itself — a scattered,
 * unconnected node diagram. Stays on the hero's dark canvas; Acto I of
 * CHAOS → SYSTEM keeps its weight instead of resolving too soon. */
export default function ProblemSection() {
  return (
    <section id="problema" className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-16">
      <Reveal>
        <Eyebrow>El problema</Eyebrow>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
        <Reveal>
          <h2 className="max-w-[16ch] text-[32px] leading-[0.95] font-medium tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
            Vuestros datos están repartidos entre Excel, papel y programas
            que no se hablan entre sí.
          </h2>
        </Reveal>

        <Reveal className="order-first flex justify-center lg:order-none">
          <ChaosDiagram className="h-[140px] w-[180px] text-paper/70 sm:h-[160px] sm:w-[210px]" />
        </Reveal>

        <Reveal>
          <p className="max-w-[48ch] text-[16px] leading-relaxed text-paper/60 sm:text-[18px]">
            No es que falten ganas. Cada área resolvió su día a día con
            parches —una hoja de cálculo aquí, un programa barato allá— y
            nadie se sentó nunca a pensar la tecnología de forma global. El
            resultado: nunca tenéis una foto clara y fiable de lo que pasa
            en la empresa.
          </p>
        </Reveal>
      </div>

      <Reveal stagger className="mt-16 grid gap-x-8 gap-y-4 border-t border-dashed border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
        {PROBLEM_POINTS.map((point) => (
          <div key={point} className="flex items-start gap-2.5">
            <StatusDot active={false} className="mt-[7px] text-paper/40" />
            <span className="text-[13px] leading-snug text-paper/55">{point}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
