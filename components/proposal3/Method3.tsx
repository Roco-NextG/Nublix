import Reveal from "@/components/system/Reveal";
import Eyebrow3 from "./Eyebrow3";
import { METHOD_STEPS } from "@/lib/proposal3Content";

/** A plain numbered list, hairline dividers, no indent, no diagonal —
 * the calm "Our Approach" pattern instead of the v1's zigzag diagonal
 * spine. */
export default function Method3() {
  return (
    <section id="metodo" className="scroll-mt-20 bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[920px]">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow3>El método</Eyebrow3>
          <h2 className="mt-5 max-w-[22ch] text-[32px] leading-[1.1] font-medium tracking-[-0.015em] sm:text-[44px]">
            Cuatro pasos, nunca una caja negra.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-paper/10">
          {METHOD_STEPS.map((step) => (
            <Reveal key={step.index}>
              <div className="flex flex-col gap-3 border-b border-paper/10 py-9 sm:flex-row sm:items-start sm:gap-10">
                <span className="font-mono text-[14px] tracking-[0.04em] text-teal">
                  {step.index}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-[20px] font-medium tracking-[-0.01em]">{step.title}</h3>
                    <span className="font-mono text-[12px] tracking-[0.03em] text-paper/40 uppercase">
                      {step.lead}
                    </span>
                  </div>
                  <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-paper/55">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
