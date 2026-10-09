"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import ArrowButton from "@/components/system/ArrowButton";
import TechLabel from "@/components/system/TechLabel";
import StatusDot from "@/components/system/StatusDot";
import EngineCanvas from "@/components/engine/EngineCanvas";
import { smoothstep } from "@/components/engine/engineModel";
import { ENGINE_STAGES, HERO } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/** Scroll windows (0..1 of the pinned hero) for each act's copy. Kept in
 * step with the canvas phases in engineModel.ts → phases(). */
const STAGE_WINDOWS = [
  [0.15, 0.35],
  [0.35, 0.55],
  [0.55, 0.76],
  [0.76, 1.01],
] as const;
const COPY_OUT: [number, number] = [0.05, 0.15];

function HeroCopy() {
  return (
    <>
      <h1 className="max-w-[15ch] text-[42px] leading-[0.94] font-medium tracking-[-0.035em] text-balance sm:text-[64px] lg:max-w-[14ch] lg:text-[80px] lg:leading-[0.9] xl:text-[92px]">
        {HERO.title}
      </h1>
      <p className="mt-6 max-w-[44ch] text-[16px] leading-relaxed text-paper/65 sm:mt-8 sm:text-[19px]">
        {HERO.description}
      </p>
      <TechLabel className="mt-5 text-paper/40 sm:mt-6">{HERO.tagline}</TechLabel>
      <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
        <ArrowButton href={HERO.primaryCta.href}>{HERO.primaryCta.label}</ArrowButton>
        <ArrowButton href={HERO.secondaryCta.href} variant="ghost">
          {HERO.secondaryCta.label}
        </ArrowButton>
      </div>
    </>
  );
}

function DiagnosticCard({
  className = "",
  ref,
}: {
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className={`border border-paper/15 bg-ink/85 px-5 py-4 ${className}`}>
      <TechLabel className="text-paper/45">{HERO.card.label}</TechLabel>
      <div className="my-2 border-t border-dashed border-paper/15" />
      <p className="text-[18px] leading-none font-medium whitespace-nowrap">
        {HERO.card.value}
      </p>
    </div>
  );
}

function StatusRow() {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-paper/15 pb-4">
      <TechLabel dot className="text-paper/60">
        {HERO.status}
      </TechLabel>
      <TechLabel className="hidden text-paper/40 sm:inline-flex">
        {HERO.coordinates}
      </TechLabel>
    </div>
  );
}

/** Reduced motion: no pinning, no loop. The engine is drawn once, already
 * resolved, and the four acts read as a plain list under the copy. */
function StaticHero() {
  const progress = useRef(1);
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-x-0 top-0 h-svh opacity-60 lg:opacity-100">
        <EngineCanvas progressRef={progress} still />
      </div>
      <div className="hero-scrim absolute inset-x-0 top-0 h-svh" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1240px] px-5 pt-32 pb-20 sm:px-8 sm:pt-40">
        <StatusRow />
        <div className="mt-12">
          <HeroCopy />
        </div>
        <DiagnosticCard className="mt-12 w-fit" />
        <ol className="mt-20 grid gap-8 border-t border-dashed border-paper/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {ENGINE_STAGES.map((stage) => (
            <li key={stage.index}>
              <TechLabel className="text-teal">
                {stage.index} — {stage.label}
              </TechLabel>
              <p className="mt-3 text-[20px] leading-tight font-medium">{stage.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-paper/55">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * Hero — "The Invisible Engine". A tall section with a sticky viewport:
 * scroll progress drives both the node field (EngineCanvas) and the copy
 * on top of it through the four acts CHAOS → PROCESO → SISTEMA → CONTROL.
 * Native scroll + CSS sticky (no GSAP pin), so touch, keyboard and
 * trackpads all scroll it normally; ScrollTrigger only reads progress.
 */
function EngineHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const copyRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);
  const railRefs = useRef<(HTMLLIElement | null)[]>([]);
  const barRef = useRef<HTMLSpanElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const apply = (p: number) => {
      progress.current = p;

      const out = smoothstep(COPY_OUT[0], COPY_OUT[1], p);
      const copy = copyRef.current;
      if (copy) {
        copy.style.opacity = String(1 - out);
        copy.style.transform = `translate3d(0, ${-48 * out}px, 0)`;
        copy.style.visibility = out >= 1 ? "hidden" : "visible";
      }
      if (cardRef.current) cardRef.current.style.opacity = String(1 - out);

      let active = -1;
      STAGE_WINDOWS.forEach(([a, b], i) => {
        const el = stageRefs.current[i];
        const enter = smoothstep(a, a + 0.06, p);
        const leave = i === STAGE_WINDOWS.length - 1 ? 0 : smoothstep(b - 0.05, b, p);
        const o = enter * (1 - leave);
        if (p >= a && p < b) active = i;
        if (!el) return;
        el.style.opacity = String(o);
        el.style.transform = `translate3d(0, ${(1 - enter) * 28 - leave * 28}px, 0)`;
        el.style.visibility = o <= 0.001 ? "hidden" : "visible";
      });

      railRefs.current.forEach((el, i) => {
        if (!el) return;
        el.dataset.state = i < active ? "done" : i === active ? "active" : "idle";
      });
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (hintRef.current)
        hintRef.current.style.opacity = String(1 - smoothstep(0.02, 0.08, p));
    };

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => apply(self.progress),
      onRefresh: (self) => apply(self.progress),
    });
    apply(st.progress);

    return () => st.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Nublix — de caos a sistema"
      className="hero-engine relative h-[290vh] bg-ink text-paper lg:h-[330vh]"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="absolute inset-0">
          <EngineCanvas progressRef={progress} />
        </div>
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto flex h-full max-w-[1240px] flex-col px-5 pt-24 pb-6 sm:px-8 sm:pt-32 sm:pb-8">
          <StatusRow />

          <div className="relative mt-8 flex-1 sm:mt-12">
            <div ref={copyRef} className="will-change-transform">
              <HeroCopy />
            </div>

            <ol className="engine-motion-only" aria-label="De caos a sistema">
              {ENGINE_STAGES.map((stage, i) => (
                <li
                  key={stage.index}
                  ref={(el) => {
                    stageRefs.current[i] = el;
                  }}
                  style={{ opacity: 0, visibility: "hidden" }}
                  className="absolute inset-x-0 top-0 will-change-transform lg:top-[8%]"
                >
                  <TechLabel className="text-teal">
                    {stage.index} — {stage.label}
                  </TechLabel>
                  <p className="mt-5 max-w-[16ch] text-[38px] leading-[0.96] font-medium tracking-[-0.03em] text-balance sm:text-[56px] lg:max-w-[13ch] lg:text-[72px]">
                    {stage.title}
                  </p>
                  <p className="mt-6 max-w-[40ch] text-[16px] leading-relaxed text-paper/60 sm:text-[18px]">
                    {stage.body}
                  </p>
                  {i === ENGINE_STAGES.length - 1 ? (
                    <div className="mt-8">
                      <ArrowButton href={HERO.primaryCta.href}>
                        {HERO.primaryCta.label}
                      </ArrowButton>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className="engine-motion-only flex items-end justify-between gap-6 border-t border-dashed border-paper/15 pt-4">
            <ol aria-hidden="true" className="flex gap-4 sm:gap-7">
              {ENGINE_STAGES.map((stage, i) => (
                <li
                  key={stage.index}
                  ref={(el) => {
                    railRefs.current[i] = el;
                  }}
                  data-state="idle"
                  className="engine-rail-item inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] uppercase sm:text-[12px]"
                >
                  <StatusDot active={false} className="engine-rail-idle" />
                  <StatusDot className="engine-rail-on" />
                  <span>{stage.index}</span>
                  <span className="hidden md:inline">{stage.label}</span>
                </li>
              ))}
            </ol>

            <div className="flex items-center gap-4">
              <div
                ref={hintRef}
                className="hidden font-mono text-[11px] tracking-[0.08em] text-paper/45 uppercase sm:block"
              >
                {HERO.scrollHint} ↓
              </div>
              <span className="relative block h-px w-16 bg-paper/15 sm:w-28">
                <span
                  ref={barRef}
                  className="absolute inset-0 origin-left scale-x-0 bg-teal"
                />
              </span>
            </div>
          </div>

          <DiagnosticCard
            ref={cardRef}
            className="pointer-events-none absolute right-8 bottom-24 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <StaticHero /> : <EngineHero />;
}
