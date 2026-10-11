"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { STATEMENT } from "@/lib/proposal3Content";

gsap.registerPlugin(ScrollTrigger);

const WORDS = STATEMENT.split(" ");

/**
 * This surface's one signature interaction (see direction contract,
 * FIRST VIEWPORT / FORM): the statement brightens word by word as the
 * visitor scrolls past it, tied directly to scroll position via scrub —
 * not a one-shot reveal-on-enter. Pattern matches the pinned-progress
 * hooks already used in this codebase (ScrollHero.tsx), just driving
 * per-word color instead of frame opacity.
 */
function PinnedStatement() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pin = pinRef.current;
    if (!wrapper || !pin) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        pin,
        invalidateOnRefresh: true,
        onUpdate: (self) => setActiveCount(Math.round(self.progress * WORDS.length)),
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapperRef} className="relative bg-paper" style={{ height: "180vh" }}>
      <div ref={pinRef} className="flex h-screen items-center justify-center bg-paper px-5 sm:px-8">
        <p className="max-w-[20ch] text-center text-[30px] leading-[1.3] font-medium tracking-[-0.01em] sm:max-w-[26ch] sm:text-[40px] lg:text-[46px]">
          {WORDS.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="transition-colors duration-200 ease-out"
              style={{ color: i < activeCount ? "var(--color-ink)" : "rgba(20,22,31,0.18)" }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/** Reduced-motion fallback: the full statement, fully legible, no pin. */
function StaticStatement() {
  return (
    <section className="bg-paper px-5 py-28 sm:px-8 sm:py-36">
      <p className="mx-auto max-w-[26ch] text-center text-[30px] leading-[1.3] font-medium tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[46px]">
        {STATEMENT}
      </p>
    </section>
  );
}

export default function ScrollStatement() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <StaticStatement /> : <PinnedStatement />;
}
