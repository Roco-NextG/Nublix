"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

/**
 * Scroll reveal for marketing content — clip-path + opacity, fires once
 * via IntersectionObserver. `stagger` reveals direct children in sequence
 * (see .reveal-stagger in globals.css) instead of the block as a whole.
 * Under prefers-reduced-motion, renders children with no reveal markup
 * at all: nothing to animate, nothing to keep hidden if JS never runs.
 */
export default function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`${stagger ? "reveal-stagger" : ""} ${className}`}
      {...(!stagger ? { "data-reveal": "" } : {})}
    >
      {children}
    </div>
  );
}
