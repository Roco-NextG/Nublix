"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import EngineCanvas from "./EngineCanvas";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useScrollProgress } from "@/lib/useScrollProgress";

/**
 * Compact engine for interior page heroes: it "boots" from loose nodes to
 * connected ones on load, then scrolling the hero away resolves it into
 * lanes and a running hub — the same story as Home, told in one breath.
 */
export default function PageEngine({ seed = 11 }: { seed?: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const progress = useRef(reducedMotion ? 1 : 0.3);
  const intro = useRef({ value: 0.3 });
  const scrolled = useRef(0);

  const update = () => {
    progress.current = Math.min(1, intro.current.value + scrolled.current * 0.42);
  };

  const ref = useScrollProgress<HTMLDivElement>(
    (p) => {
      scrolled.current = p;
      update();
    },
    { start: "top top", end: "bottom top", enabled: !reducedMotion },
  );

  useEffect(() => {
    if (reducedMotion) {
      progress.current = 1;
      return;
    }
    const tween = gsap.to(intro.current, {
      value: 0.6,
      duration: 2.2,
      delay: 0.2,
      ease: "power2.inOut",
      onUpdate: update,
    });
    return () => {
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <div ref={ref} className="absolute inset-0 opacity-70 lg:opacity-100" aria-hidden="true">
      <EngineCanvas
        progressRef={progress}
        variant="compact"
        seed={seed}
        still={reducedMotion}
      />
    </div>
  );
}
