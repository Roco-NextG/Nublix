"use client";

import Reveal from "@/components/system/Reveal";
import { scrollToHash } from "@/lib/lenisScrollTo";
import Eyebrow3 from "./Eyebrow3";
import { HERO_COPY } from "@/lib/proposal3Content";

/**
 * Flat ink, centered, nothing decorative — the restraint IS the statement.
 * No diagonal, no scattered objects, no parallax. A single calm entrance
 * (Reveal's stagger) is the only motion here; the signature interaction
 * for this surface lives in ScrollStatement right below it.
 */
export default function Hero3() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center bg-ink px-5 pt-16 text-center sm:px-8"
    >
      <Reveal stagger className="flex max-w-[840px] flex-col items-center gap-7">
        <Eyebrow3>{HERO_COPY.eyebrow}</Eyebrow3>

        <h1 className="text-[40px] leading-[1.08] font-medium tracking-[-0.015em] text-paper sm:text-[56px] lg:text-[64px]">
          {HERO_COPY.headline}
        </h1>

        <p className="max-w-[56ch] text-[17px] leading-relaxed text-paper/55 sm:text-[19px]">
          {HERO_COPY.sub}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#contacto");
            }}
            className="inline-flex items-center rounded-[8px] bg-teal px-7 py-3.5 font-mono text-[13px] tracking-[0.04em] text-ink uppercase transition-colors duration-150 ease-out hover:bg-teal-dim"
          >
            {HERO_COPY.ctaPrimary}
          </a>
          <a
            href="#metodo"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#metodo");
            }}
            className="inline-flex items-center rounded-[8px] border border-paper/25 px-7 py-3.5 font-mono text-[13px] tracking-[0.04em] text-paper uppercase transition-colors duration-150 ease-out hover:border-paper/50"
          >
            {HERO_COPY.ctaSecondary}
          </a>
        </div>

        <div className="mt-8 w-full max-w-[420px] border-t border-paper/10 pt-6">
          <p className="font-mono text-[11px] tracking-[0.04em] text-paper/35 uppercase">
            {HERO_COPY.trustLine}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
