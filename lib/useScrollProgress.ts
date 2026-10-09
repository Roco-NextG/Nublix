"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Feeds the 0..1 scroll progress of `target` (between `start` and `end`,
 * ScrollTrigger syntax) to `onProgress` — no React state, so scrubbing
 * never re-renders. Synced with Lenis through ScrollTrigger.update (see
 * SmoothScrollProvider). Pass `enabled: false` under reduced motion.
 */
export function useScrollProgress<T extends HTMLElement>(
  onProgress: (p: number, el: T) => void,
  {
    start = "top 75%",
    end = "bottom 60%",
    enabled = true,
  }: { start?: string; end?: string; enabled?: boolean } = {},
) {
  const ref = useRef<T>(null);
  const callback = useRef(onProgress);

  useEffect(() => {
    callback.current = onProgress;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      end,
      onUpdate: (self) => callback.current(self.progress, el),
      onRefresh: (self) => callback.current(self.progress, el),
    });
    callback.current(st.progress, el);
    return () => st.kill();
  }, [start, end, enabled]);

  return ref;
}
