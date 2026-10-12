"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import Button2 from "./Button2";
import TechLabel from "@/components/system/TechLabel";
import { ChaosDiagram, MethodDiagram } from "./illustrations";
import { scrollToHash } from "@/lib/lenisScrollTo";
import HeroStageImages from "./HeroStageImages";
import { CONTACT_PATH, UI, type Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Frame = {
  tag: Record<Locale, string>;
  title: Record<Locale, string>;
  teal: Record<Locale, string>;
  sub: Record<Locale, string>;
  diagram: "chaos" | 2 | 3 | 4;
  cta?: boolean;
};

const FRAMES: Frame[] = [
  {
    tag: { es: "00. Punto de partida", en: "00. Starting point" },
    title: { es: "Hoy: Excel, papel y memoria.", en: "Today: Excel, paper, and memory." },
    teal: { es: "Excel, papel y memoria", en: "Excel, paper, and memory" },
    sub: {
      es: "Los datos de vuestra empresa viven repartidos en media docena de sitios distintos.",
      en: "Your company's data lives scattered across half a dozen different places.",
    },
    diagram: "chaos",
  },
  {
    tag: { es: "01. Lo que hacemos", en: "01. What we do" },
    title: { es: "Mapeamos vuestro proceso real.", en: "We map your real process." },
    teal: { es: "vuestro proceso real", en: "your real process" },
    sub: {
      es: "Antes de escribir una línea de código, entendemos cómo trabaja de verdad el equipo.",
      en: "Before writing a single line of code, we understand how your team actually works.",
    },
    diagram: 2,
  },
  {
    tag: { es: "02. Cómo construimos", en: "02. How we build" },
    title: { es: "Entregas cada dos semanas.", en: "Deliveries every two weeks." },
    teal: { es: "cada dos semanas", en: "every two weeks" },
    sub: {
      es: "Avances que podéis tocar y probar, nunca una caja negra al final.",
      en: "Progress you can touch and test, never a black box at the end.",
    },
    diagram: 3,
  },
  {
    tag: { es: "03. El resultado", en: "03. The result" },
    title: { es: "Un sistema a vuestra medida.", en: "A system built around you." },
    teal: { es: "a vuestra medida", en: "built around you" },
    sub: {
      es: "Software para empresas que ya crecieron más rápido que sus procesos.",
      en: "Software for businesses that have already outgrown their processes.",
    },
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
 * nothing to animate. The first frame's headline doubles as the page's
 * real, visible H1 — carrying the actual positioning copy instead of a
 * hidden generic string, so it's both what visitors read first and what
 * search engines read as the page's primary heading. */
function StaticHero({ locale }: { locale: Locale }) {
  return (
    <section id="hero" className="bg-paper px-5 pt-28 pb-20 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-16">
        {FRAMES.map((frame, i) => {
          const HeadingTag = i === 0 ? "h1" : "h2";
          return (
            <div
              key={frame.tag.es}
              className="flex flex-col gap-8 border-b border-dashed border-ink/12 pb-16 last:border-b-0 last:pb-0 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <TechLabel className="text-teal-dim">{frame.tag[locale]}</TechLabel>
                <HeadingTag className="mt-5 max-w-[11ch] text-[36px] leading-[0.98] font-bold tracking-[-0.03em] text-ink sm:text-[52px]">
                  <Headline title={frame.title[locale]} teal={frame.teal[locale]} />
                </HeadingTag>
                <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
                  {frame.sub[locale]}
                </p>
                {frame.cta ? (
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Button2 href={CONTACT_PATH[locale]}>{UI.primaryCta[locale]}</Button2>
                    <Button2
                      href="#metodo"
                      variant="ghost"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToHash("#metodo");
                      }}
                    >
                      {UI.secondaryCta[locale]}
                    </Button2>
                  </div>
                ) : null}
              </div>
              <FrameDiagram diagram={frame.diagram} className="h-[140px] w-[190px] shrink-0 text-ink/70" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

/** Enhanced: pinned full-viewport frame that crossfades through the four
 * beats as the visitor scrolls — the Oryzo "scroll through the story"
 * hero. Scroll distance is one screen height per frame; progress drives
 * opacity directly instead of per-frame tweens, mirroring the scrub +
 * onUpdate pattern already used for the pinned Método track. Each frame's
 * headline renders as an H1 only while active (the others sit at
 * aria-hidden="true"/opacity 0), so the DOM always carries exactly one
 * live H1 matching what's on screen, through every beat of the sequence —
 * not just the first. */
function PinnedHero({ locale }: { locale: Locale }) {
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
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden bg-ink">
        <HeroStageImages progress={progress} />
        {/* Below lg the text column spans the full width (no empty left
            zone to sit in), so the image needs a flat scrim everywhere
            rather than the directional one — otherwise text lands directly
            on top of the right-weighted illustration instead of beside it. */}
        <div aria-hidden="true" className="absolute inset-0 bg-ink/75 lg:hidden" />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to left, rgba(20,22,31,0) 0%, rgba(20,22,31,0.45) 40%, rgba(20,22,31,0.88) 62%, rgba(20,22,31,0.88) 100%)",
          }}
        />

        <div className="relative flex h-full flex-col px-5 pt-28 pb-10 sm:px-8 lg:px-16">
          <div className="relative flex flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:justify-start lg:gap-12">
            <div className="relative min-h-[260px] w-full sm:min-h-[300px] lg:min-h-[360px] lg:mr-auto lg:max-w-[40%]">
              {FRAMES.map((frame, i) => {
                const opacity = frameOpacity(progress, i, total);
                const isActive = i === activeIndex;
                const HeadingTag = isActive ? "h1" : "h2";
                return (
                  <div
                    key={frame.tag.es}
                    aria-hidden={!isActive}
                    className="absolute inset-0 flex flex-col items-start justify-center"
                    style={{
                      opacity,
                      transform: `translateY(${(1 - opacity) * 36}px)`,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <TechLabel className="text-teal">{frame.tag[locale]}</TechLabel>
                    <HeadingTag className="mt-5 max-w-[11ch] text-[40px] leading-[0.95] font-bold tracking-[-0.03em] text-paper sm:text-[64px] lg:text-[80px]">
                      <Headline title={frame.title[locale]} teal={frame.teal[locale]} />
                    </HeadingTag>
                    <p className="mt-6 max-w-[42ch] text-[16px] leading-relaxed text-paper/70 sm:text-[19px]">
                      {frame.sub[locale]}
                    </p>
                    {frame.cta ? (
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button2 href={CONTACT_PATH[locale]}>{UI.primaryCta[locale]}</Button2>
                        <Button2
                          href="#metodo"
                          variant="ghost"
                          className="!text-paper/80 hover:!text-paper"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToHash("#metodo");
                          }}
                        >
                          {UI.secondaryCta[locale]}
                        </Button2>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
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

export default function ScrollHero({ locale }: { locale: Locale }) {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <StaticHero locale={locale} /> : <PinnedHero locale={locale} />;
}
