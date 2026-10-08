"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import Button2 from "./Button2";
import TechLabel from "@/components/system/TechLabel";
import { ChaosDiagram, MethodDiagram } from "@/components/proposal/illustrations";
import { scrollToHash } from "@/lib/lenisScrollTo";
import HeroScrubVideo from "./HeroScrubVideo";

gsap.registerPlugin(ScrollTrigger);

type Frame = {
  tag: string;
  title: string;
  teal: string;
  sub: string;
  diagram: "chaos" | 2 | 3 | 4;
  cta?: boolean;
};

const FRAMES: Frame[] = [
  {
    tag: "00 — Punto de partida",
    title: "Hoy: Excel, papel y memoria.",
    teal: "Excel, papel y memoria",
    sub: "Los datos de vuestra empresa viven repartidos en media docena de sitios distintos.",
    diagram: "chaos",
  },
  {
    tag: "01 — Lo que hacemos",
    title: "Mapeamos vuestro proceso real.",
    teal: "vuestro proceso real",
    sub: "Antes de escribir una línea de código, entendemos cómo trabaja de verdad el equipo.",
    diagram: 2,
  },
  {
    tag: "02 — Cómo construimos",
    title: "Entregas cada dos semanas.",
    teal: "cada dos semanas",
    sub: "Avances que podéis tocar y probar — nunca una caja negra al final.",
    diagram: 3,
  },
  {
    tag: "03 — El resultado",
    title: "Un sistema a vuestra medida.",
    teal: "a vuestra medida",
    sub: "Software para pymes que ya crecieron más rápido que sus procesos.",
    diagram: 4,
    cta: true,
  },
];

/** Splits `title` on the first occurrence of `teal` and colors that part —
 * the two-tone headline treatment used across propuesta2. */
function Headline({ title, teal }: { title: string; teal: string }) {
  const i = title.indexOf(teal);
  if (i === -1) return <>{title}</>;
  return (
    <>
      {title.slice(0, i)}
      <span className="text-teal">{teal}</span>
      {title.slice(i + teal.length)}
    </>
  );
}

function FrameDiagram({ diagram, className }: { diagram: Frame["diagram"]; className?: string }) {
  return diagram === "chaos" ? (
    <ChaosDiagram className={className} />
  ) : (
    <MethodDiagram step={diagram} className={className} />
  );
}

/** Crossfade window for frame `index` of `total`, evaluated at `progress`
 * (0-1). Full opacity across most of its slice, fading only at the shared
 * boundary with its neighbour — the first frame starts fully visible at
 * progress 0 and the last stays fully visible through progress 1, instead
 * of a symmetric window that would fade them in/out at the scroll edges. */
function frameOpacity(progress: number, index: number, total: number) {
  const span = 1 / total;
  const start = index * span;
  const end = start + span;
  const fade = span * 0.12;

  const fadeInStart = index === 0 ? -Infinity : start - fade;
  const fadeInEnd = index === 0 ? -Infinity : start + fade;
  const fadeOutStart = index === total - 1 ? Infinity : end - fade;
  const fadeOutEnd = index === total - 1 ? Infinity : end + fade;

  if (progress < fadeInStart) return 0;
  if (progress < fadeInEnd) return (progress - fadeInStart) / (fadeInEnd - fadeInStart);
  if (progress < fadeOutStart) return 1;
  if (progress < fadeOutEnd) return 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  return 0;
}

/** Static, always-visible stack: the accessible default and the no-JS /
 * reduced-motion fallback. All four beats readable top to bottom, no pin,
 * nothing to animate. */
function StaticHero() {
  return (
    <section id="hero" className="bg-paper px-5 pt-28 pb-20 sm:px-8 lg:px-16">
      <h1 className="sr-only">Nublix — software a medida para pymes</h1>
      <div className="flex flex-col gap-16">
        {FRAMES.map((frame) => (
          <div
            key={frame.tag}
            className="flex flex-col gap-8 border-b border-dashed border-ink/12 pb-16 last:border-b-0 last:pb-0 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <TechLabel className="text-teal-dim">{frame.tag}</TechLabel>
              <h2 className="mt-5 max-w-[11ch] text-[36px] leading-[0.98] font-bold tracking-[-0.03em] text-ink sm:text-[52px]">
                <Headline title={frame.title} teal={frame.teal} />
              </h2>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
                {frame.sub}
              </p>
              {frame.cta ? (
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button2 href="/contacto">Cuéntanos tu proceso</Button2>
                  <Button2
                    href="#metodo"
                    variant="ghost"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToHash("#metodo");
                    }}
                  >
                    Ver el método
                  </Button2>
                </div>
              ) : null}
            </div>
            <FrameDiagram diagram={frame.diagram} className="h-[140px] w-[190px] shrink-0 text-ink/70" />
          </div>
        ))}
      </div>
    </section>
  );
}

/** Enhanced: pinned full-viewport frame that crossfades through the four
 * beats as the visitor scrolls — the Oryzo "scroll through the story"
 * hero. Scroll distance is one screen height per frame; progress drives
 * opacity directly instead of per-frame tweens, mirroring the scrub +
 * onUpdate pattern already used for the pinned Método track. */
function PinnedHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const total = FRAMES.length;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pin = pinRef.current;
    if (!wrapper || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        pin,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const activeIndex = Math.min(total - 1, Math.floor(progress * total));

  return (
    <section id="hero" ref={wrapperRef} className="relative bg-ink" style={{ height: `${total * 100}vh` }}>
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
        <h1 className="sr-only">Nublix — software a medida para pymes</h1>

        <HeroScrubVideo progress={progress} />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20,22,31,0.88), rgba(20,22,31,0.5) 50%, rgba(20,22,31,0.18))",
          }}
        />

        <div className="relative flex h-full flex-col px-5 pt-28 pb-10 sm:px-8 lg:px-16">
          <div className="relative min-h-[260px] w-full flex-1 sm:min-h-[300px] lg:min-h-[360px] lg:max-w-[52%]">
            {FRAMES.map((frame, i) => {
              const opacity = frameOpacity(progress, i, total);
              const isActive = i === activeIndex;
              return (
                <div
                  key={frame.tag}
                  aria-hidden={!isActive}
                  className="absolute inset-0 flex flex-col items-start justify-center"
                  style={{
                    opacity,
                    transform: `translateY(${(1 - opacity) * 36}px)`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <TechLabel className="text-teal">{frame.tag}</TechLabel>
                  <h2 className="mt-5 max-w-[11ch] text-[40px] leading-[0.95] font-bold tracking-[-0.03em] text-paper sm:text-[64px] lg:text-[80px]">
                    <Headline title={frame.title} teal={frame.teal} />
                  </h2>
                  <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-paper/70 sm:text-[19px]">
                    {frame.sub}
                  </p>
                  {frame.cta ? (
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <Button2 href="/contacto">Cuéntanos tu proceso</Button2>
                      <Button2
                        href="#metodo"
                        variant="ghost"
                        className="!text-paper/80 hover:!text-paper"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToHash("#metodo");
                        }}
                      >
                        Ver el método
                      </Button2>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="relative mt-6 flex items-center gap-4">
            <span className="font-mono text-[12px] tracking-[0.04em] text-paper/50">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-paper/15">
              <div
                className="h-px w-full origin-left bg-teal transition-transform duration-100 ease-out"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ScrollHero() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <StaticHero /> : <PinnedHero />;
}
