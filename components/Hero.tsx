"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import ArrowButton from "@/components/system/ArrowButton";
import TechLabel from "@/components/system/TechLabel";
import NodeMark from "@/components/system/NodeMark";
import Reveal from "@/components/system/Reveal";

export default function Hero() {
  const markRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const mark = markRef.current;
    if (!mark || reducedMotion) return;

    gsap.set(mark, { clipPath: "inset(0 100% 0 0)" });
    gsap.to(mark, {
      clipPath: "inset(0 0% 0 0)",
      duration: 1.1,
      ease: "power2.out",
      delay: 0.15,
    });
  }, [reducedMotion]);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1240px] px-5 pt-36 pb-24 sm:px-8 sm:pt-44 sm:pb-32">
        <div className="flex items-center justify-between border-b border-dashed border-paper/15 pb-5">
          <TechLabel dot className="text-paper/60">
            System online
          </TechLabel>
          <TechLabel className="hidden text-paper/40 sm:inline-flex">
            Barcelona — 41°23&apos;N 02°10&apos;E
          </TechLabel>
        </div>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <Reveal stagger>
            <h1 className="max-w-[15ch] text-[42px] leading-[0.96] font-medium tracking-[-0.03em] sm:text-[64px] lg:text-[76px]">
              Software para empresas que han crecido más rápido que sus
              procesos.
            </h1>

            <p className="mt-7 max-w-[46ch] text-[17px] leading-relaxed text-paper/60 sm:text-[19px]">
              Diseñamos y construimos el software que os falta —webs, apps y
              herramientas internas— partiendo de vuestro proceso, no de la
              tecnología.
            </p>

            <TechLabel className="mt-7 text-paper/40">
              Webs / Apps / Herramientas internas
            </TechLabel>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ArrowButton href="/contacto">Cuéntanos tu proceso</ArrowButton>
              <ArrowButton href="/metodo" variant="ghost">
                Ver el método
              </ArrowButton>
            </div>
          </Reveal>

          <div className="relative mx-auto flex h-[240px] w-[240px] items-center justify-center sm:h-[320px] sm:w-[320px] lg:ml-auto lg:h-[360px] lg:w-[360px]">
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full bg-teal/20 blur-[70px]"
            />
            <NodeMark ref={markRef} className="relative h-full w-full" />

            <div className="absolute -bottom-6 -left-4 border border-paper/15 bg-ink/85 px-5 py-4 backdrop-blur-md sm:-bottom-8 sm:-left-8">
              <TechLabel className="text-paper/45">Diagnóstico</TechLabel>
              <div className="my-2 border-t border-dashed border-paper/15" />
              <p className="text-[18px] leading-none font-medium whitespace-nowrap">
                2-3h · Precio fijo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
