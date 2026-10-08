"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/** Brand moment right after the hero video: just the "nublix" wordmark —
 * no icon, no capsule, solid white fill — holds at full size/opacity for
 * the first stretch of scroll, then dissolves progressively as the
 * visitor keeps scrolling, scrubbed to scroll position rather than a
 * timed animation. Stays pinned via `sticky` while it fades so the
 * dissolve reads as deliberate, not as the word just scrolling off-screen. */
export default function HeroWordmarkReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const ctx = gsap.context(() => {
      gsap.to(text, {
        ease: "none",
        keyframes: {
          "0%": { opacity: 1, scale: 1 },
          "18%": { opacity: 1, scale: 1 },
          "100%": { opacity: 0, scale: 0.86 },
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      id="hero-wordmark"
      ref={sectionRef}
      className={`relative bg-ink ${reducedMotion ? "py-28" : "h-[105vh]"}`}
    >
      <div
        className={`flex items-center justify-center overflow-hidden ${
          reducedMotion ? "" : "sticky top-0 h-screen"
        }`}
      >
        <h2
          ref={textRef}
          aria-hidden="true"
          className="select-none text-[20vw] leading-none font-black tracking-[-0.03em] text-paper sm:text-[180px] lg:text-[240px]"
        >
          nublix
        </h2>
      </div>
      <span className="sr-only">Nublix</span>
    </section>
  );
}
