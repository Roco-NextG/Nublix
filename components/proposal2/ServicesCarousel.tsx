"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import Eyebrow from "@/components/system/Eyebrow";
import TechLabel from "@/components/system/TechLabel";
import { SERVICES } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger);

type Tone = "ink" | "paper" | "mint";

/** First card anchors the row in ink; the rest alternate paper/mint so no
 * two neighbours match. */
const TONES: Tone[] = ["ink", "paper", "mint", "paper", "mint", "paper"];

const TONE_STYLES: Record<Tone, { bg: string; text: string; sub: string; circle: string }> = {
  ink: { bg: "bg-ink", text: "text-paper", sub: "text-paper/60", circle: "bg-paper/10" },
  paper: { bg: "bg-paper", text: "text-ink", sub: "text-ink/60", circle: "bg-mint" },
  mint: { bg: "bg-mint", text: "text-ink", sub: "text-ink/60", circle: "bg-paper" },
};

const HEADING = {
  eyebrow: { es: "Servicios", en: "Services" },
  title: {
    es: (
      <>
        Seis piezas. <span className="text-teal">Un mismo sistema.</span>
      </>
    ),
    en: (
      <>
        Six pieces. <span className="text-teal">One system.</span>
      </>
    ),
  },
} as const;

function ServiceCard({
  service,
  index,
  locale,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  locale: Locale;
}) {
  const tone = TONE_STYLES[TONES[index % TONES.length]];
  const isFirst = index === 0;

  return (
    <div
      className={`relative flex h-[320px] w-[72vw] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-6 sm:h-[360px] sm:w-[280px] sm:p-7 md:w-[250px] lg:w-[230px] ${tone.bg}`}
    >
      {isFirst ? (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-6 -left-3 text-[140px] leading-none font-extrabold select-none ${tone.text} opacity-[0.07]`}
        >
          {service.index}
        </span>
      ) : null}

      <div className="relative">
        <TechLabel className={tone.sub}>{service.index}</TechLabel>
        <h3
          className={`mt-3 line-clamp-4 text-[19px] leading-[1.15] font-bold tracking-[-0.01em] sm:text-[21px] ${tone.text}`}
        >
          {service.title[locale]}
        </h3>
      </div>

      <div className="relative flex min-h-[72px] flex-1 items-center justify-center py-2">
        <span className={`absolute h-[72px] w-[72px] rounded-full ${tone.circle}`} />
        <Image
          src={`/brand/icons/${service.icon}.svg`}
          alt=""
          width={34}
          height={34}
          className="relative"
        />
      </div>

      <p className={`relative text-[13px] leading-snug sm:text-[14px] ${tone.sub}`}>
        {service.description[locale]}
      </p>
    </div>
  );
}

/** Static, always-visible fallback: a plain horizontal scroll (native,
 * user-controlled), no pin, nothing to fight under prefers-reduced-motion
 * or if JS never runs. */
function StaticServices({ locale }: { locale: Locale }) {
  return (
    <section id="servicios" className="scroll-mt-28 bg-paper py-16 text-ink sm:py-24">
      <div className="px-5 sm:px-8 lg:px-16">
        <Eyebrow>{HEADING.eyebrow[locale]}</Eyebrow>
        <h2 className="mt-5 max-w-[22ch] text-[32px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
          {HEADING.title[locale]}
        </h2>
      </div>
      <div className="mt-10 flex gap-3 overflow-x-auto px-5 pb-4 sm:gap-4 sm:px-8 lg:px-16">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.index} service={service} index={i} locale={locale} />
        ))}
      </div>
    </section>
  );
}

/** Enhanced: the services section pins full-viewport while vertical scroll
 * drives horizontal progress through all seven cards (same mechanism as
 * the live site's pinned Método) — the visitor can't skip past the
 * section without scrolling through every service first. */
function PinnedServices({ locale }: { locale: Locale }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const total = SERVICES.length;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => Math.max(track.scrollWidth - wrapper.clientWidth, 0);

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" className="scroll-mt-28 bg-paper">
      <div ref={wrapperRef} className="relative h-screen overflow-hidden">
        <div className="flex h-full flex-col pt-16 pb-10 sm:pt-20">
          <div className="px-5 sm:px-8 lg:px-16">
            <Eyebrow>{HEADING.eyebrow[locale]}</Eyebrow>
            <h2 className="mt-5 max-w-[22ch] text-[32px] leading-[1.08] font-bold tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
              {HEADING.title[locale]}
            </h2>
          </div>

          <div
            ref={trackRef}
            className="mt-10 flex flex-1 items-center gap-3 pl-5 will-change-transform sm:gap-4 sm:pl-8 lg:pl-16"
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.index} service={service} index={i} locale={locale} />
            ))}
            <div aria-hidden="true" className="w-[5vw] shrink-0 sm:w-[10vw]" />
          </div>

          <div className="mt-8 flex items-center gap-4 px-5 sm:px-8 lg:px-16">
            <span className="font-mono text-[12px] tracking-[0.04em] text-ink/40">
              {String(Math.min(total, Math.ceil(progress * total) || 1)).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
            <div className="h-px w-32 flex-1 bg-ink/10 sm:w-48 sm:flex-none">
              <div
                className="h-px origin-left bg-teal transition-transform duration-100 ease-out"
                style={{ transform: `scaleX(${progress})`, width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesCarousel({ locale }: { locale: Locale }) {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <StaticServices locale={locale} /> : <PinnedServices locale={locale} />;
}
