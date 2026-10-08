import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { STEPS } from "@/lib/content";

export default function MethodTeaser() {
  return (
    <section id="metodo" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Method</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[1] font-medium tracking-[-0.02em] text-ink sm:text-[48px]">
              Cuatro pasos, siempre en este orden.
            </h2>
          </div>
          <Link
            href="/metodo"
            className="inline-flex w-fit items-center gap-2 font-mono text-[12px] tracking-[0.05em] text-ink/60 uppercase transition-colors duration-150 ease-out hover:text-ink"
          >
            Ver el método completo
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <Reveal stagger className="mt-12 border-t border-dashed border-ink/10 sm:mt-16">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className="group flex flex-col gap-2 border-b border-dashed border-ink/10 py-6 transition-transform duration-200 ease-out sm:flex-row sm:items-baseline sm:gap-8 sm:py-8 sm:hover:translate-x-2"
            >
              <span className="font-mono text-[13px] text-teal">
                {step.index}
              </span>
              <span className="text-[22px] font-medium tracking-[-0.01em] text-ink sm:w-[16ch] sm:shrink-0 sm:text-[26px]">
                {step.title}
              </span>
              <p className="text-[15px] leading-relaxed text-ink/55 sm:text-[16px]">
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
