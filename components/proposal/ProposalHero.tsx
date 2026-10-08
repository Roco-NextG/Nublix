"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import ArrowButton from "@/components/system/ArrowButton";
import TechLabel from "@/components/system/TechLabel";
import NodeMark from "@/components/system/NodeMark";
import Reveal from "@/components/system/Reveal";
import { PROMISES } from "@/lib/content";

/** Full-bleed, edge-to-edge hero — the live site's v4 Hero sits inside a
 * contained max-w-[1240px] column; this proposal pushes the literal Oryzo
 * reading instead: overflowing display type, a vertical rail label at the
 * right edge, and a bottom-left overlay card instead of an inline card. */
export default function ProposalHero() {
  const markRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const mark = markRef.current;
    if (!mark || reducedMotion) return;
    gsap.set(mark, { clipPath: "inset(0 100% 0 0)" });
    gsap.to(mark, { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power2.out", delay: 0.2 });
  }, [reducedMotion]);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[-10%] h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-teal/10 blur-[120px] sm:right-[2%]"
      />

      <div className="relative px-5 pt-28 pb-40 sm:px-8 sm:pt-32 lg:px-16 lg:pb-56">
        <div className="flex items-center justify-between border-b border-dashed border-paper/15 pb-5">
          <TechLabel dot className="text-paper/60">
            System online
          </TechLabel>
          <TechLabel className="hidden text-paper/40 sm:inline-flex">
            Barcelona — 41°23&apos;N 02°10&apos;E
          </TechLabel>
        </div>

        <Reveal stagger>
          <TechLabel className="mt-10 text-teal">Propuesta de diseño — software a medida para pymes</TechLabel>

          <h1 className="mt-5 max-w-[17ch] text-[46px] leading-[0.92] font-medium tracking-[-0.03em] sm:text-[76px] lg:text-[108px] lg:leading-[0.88]">
            Tu negocio ya no cabe en un Excel.
          </h1>

          <p className="mt-8 max-w-[50ch] text-[17px] leading-relaxed text-paper/60 sm:text-[20px]">
            Recuperad el control: vuestros datos en un solo sitio, sin tareas
            manuales y con un socio tecnológico que os habla claro.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            {PROMISES.map((p) => (
              <TechLabel key={p} dot className="text-paper/45">
                {p}
              </TechLabel>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ArrowButton href="/contacto">Cuéntanos tu proceso</ArrowButton>
            <ArrowButton href="#metodo" variant="ghost">
              Ver el método
            </ArrowButton>
          </div>
        </Reveal>

        <div className="relative mt-20 flex justify-end sm:mt-24 lg:mt-16">
          <div className="relative h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]">
            <NodeMark ref={markRef} className="h-full w-full opacity-90" />
          </div>
        </div>

        <div className="absolute bottom-10 left-5 max-w-[260px] border border-paper/15 bg-ink/85 px-5 py-4 backdrop-blur-md sm:left-8 lg:left-16">
          <TechLabel className="text-paper/45">Diagnóstico</TechLabel>
          <div className="my-3 border-t border-dashed border-paper/15" />
          <p className="text-[18px] leading-tight font-medium">2-3h · Precio fijo</p>
          <p className="mt-2 text-[13px] leading-snug text-paper/50">
            Informe con quick wins, aunque no sigas con nosotros después.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-4 hidden -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] lg:block"
        >
          <TechLabel className="text-paper/30">
            Nublix — Software a medida — Barcelona
          </TechLabel>
        </div>
      </div>
    </section>
  );
}
