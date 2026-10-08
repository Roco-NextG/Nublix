"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Static fallback: native scroll, no Lenis, no GSAP scroll driving.
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Exposed so in-page nav links can call lenis.scrollTo() instead of a
    // native hash jump — a native jump sets scrollTop directly, which Lenis
    // doesn't know about until its next rAF tick, so it can silently fight
    // the jump back toward its last tracked position. This was the root
    // cause of anchor links on /propuesta2 landing at a different, wrong
    // scroll position on every click.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // font-display: swap can reflow the page (and therefore every pinned
    // ScrollTrigger's measured height) after GSAP already cached its
    // offsets from the pre-swap layout — refresh once fonts finish loading
    // so pinned sections and anchor targets measure correctly.
    document.fonts?.ready?.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return <>{children}</>;
}
