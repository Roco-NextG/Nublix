"use client";

import { useRef } from "react";
import Eyebrow from "@/components/system/Eyebrow";
import ArrowButton from "@/components/system/ArrowButton";
import NodeMark from "@/components/system/NodeMark";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { smoothstep } from "@/components/engine/engineModel";
import { FINAL_CTA, PROMISES } from "@/lib/content";

/**
 * Final CTA — the outcome of the story. Every lane of the engine resolved
 * into one hub; here that hub becomes the isotipo-nodo itself, drawn in
 * by scroll (clip wipe + light), next to the one action that matters.
 */
export default function Contact() {
  const reducedMotion = usePrefersReducedMotion();
  const markRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const sectionRef = useScrollProgress<HTMLElement>(
    (p) => {
      const draw = smoothstep(0.05, 0.75, p);
      if (markRef.current)
        markRef.current.style.clipPath = `inset(0 ${100 - draw * 100}% 0 0)`;
      if (glowRef.current) {
        const light = smoothstep(0.45, 0.95, p);
        glowRef.current.style.opacity = String(light);
        glowRef.current.style.transform = `scale(${0.7 + light * 0.3})`;
      }
    },
    { start: "top 85%", end: "center 55%", enabled: !reducedMotion },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink py-24 text-paper sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <Reveal>
          <Eyebrow>{FINAL_CTA.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[12ch] text-[44px] leading-[0.92] font-medium tracking-[-0.035em] sm:text-[72px] lg:text-[96px]">
            {FINAL_CTA.title}
          </h2>
          <p className="mt-7 max-w-[40ch] text-[17px] leading-relaxed text-paper/60 sm:text-[19px]">
            {FINAL_CTA.description}
          </p>

          <div className="mt-9">
            <ArrowButton href={FINAL_CTA.cta.href}>{FINAL_CTA.cta.label}</ArrowButton>
          </div>

          <ul className="mt-12 flex flex-col gap-3 border-t border-dashed border-paper/12 pt-6 font-mono text-[12px] tracking-[0.05em] text-paper/55 uppercase sm:flex-row sm:flex-wrap sm:gap-x-8">
            {PROMISES.map((promise) => (
              <li key={promise} className="inline-flex items-center gap-2.5">
                <StatusDot />
                {promise}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="relative mx-auto aspect-square w-[min(72vw,300px)] sm:w-[360px] lg:mr-0 lg:w-full lg:max-w-[440px]">
          <div
            ref={glowRef}
            aria-hidden="true"
            className="absolute inset-[12%] rounded-full bg-teal/25 blur-[80px]"
            style={reducedMotion ? undefined : { opacity: 0 }}
          />
          <NodeMark
            ref={markRef}
            className="relative h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
