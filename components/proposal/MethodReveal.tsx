import Eyebrow from "@/components/system/Eyebrow";
import TechLabel from "@/components/system/TechLabel";
import Reveal from "@/components/system/Reveal";
import { MethodDiagram } from "./illustrations";
import { METHOD_STEPS } from "@/lib/proposalContent";

/** Four stacked product-reveal panels instead of the live site's pinned
 * horizontal scroll — a calmer, more literal read of the same four steps.
 * The node diagram visibly gains connections step over step: CHAOS → SYSTEM
 * made legible as a progression instead of a single abstract effect. */
export default function MethodReveal() {
  return (
    <section id="metodo" className="bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-16">
      <Reveal>
        <Eyebrow>Método Nublix</Eyebrow>
        <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[0.95] font-medium tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
          Primero el proceso. Luego la tecnología.
        </h2>
      </Reveal>

      <div className="mt-16 border-t border-dashed border-ink/12">
        {METHOD_STEPS.map((step, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal key={step.index} className="border-b border-dashed border-ink/12 py-14 sm:py-16">
              <div
                className={`grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-14 ${
                  reversed ? "lg:[&>*:first-child]:order-3" : ""
                }`}
              >
                <div>
                  <span className="font-mono text-[13px] tracking-[0.04em] text-ink/35">
                    {step.index}
                  </span>
                  <h3 className="mt-3 text-[28px] leading-[0.95] font-medium tracking-[-0.01em] sm:text-[36px]">
                    {step.title}
                  </h3>
                  <TechLabel className="mt-4 text-teal-dim">{step.lead}</TechLabel>
                </div>

                <div className="flex justify-center">
                  <MethodDiagram
                    step={(i + 1) as 1 | 2 | 3 | 4}
                    className="h-[100px] w-[130px] text-ink/70 sm:h-[120px] sm:w-[150px]"
                  />
                </div>

                <p className="max-w-[46ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
