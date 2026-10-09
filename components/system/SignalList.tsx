"use client";

import { useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useScrollProgress } from "@/lib/useScrollProgress";

export type SignalEntry = {
  index: string;
  title: string;
  description: string;
};

/**
 * A process drawn as a signal path: a vertical rail with one node per
 * step. Scroll progress fills the rail in teal and each node switches
 * ○ → ● as the signal reaches it — the hero's engine, now explaining
 * the steps in order. Content is plain, always-visible markup; under
 * reduced motion the rail is simply drawn complete.
 */
export default function SignalList({
  items,
  tone = "onLight",
  size = "lg",
}: {
  items: readonly SignalEntry[];
  tone?: "onDark" | "onLight";
  size?: "lg" | "md";
}) {
  const reducedMotion = usePrefersReducedMotion();
  const fillRef = useRef<HTMLSpanElement>(null);
  const nodeRefs = useRef<(HTMLLIElement | null)[]>([]);

  const listRef = useScrollProgress<HTMLOListElement>(
    (p, list) => {
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`;
      const height = list.offsetHeight || 1;
      nodeRefs.current.forEach((li) => {
        if (!li) return;
        const at = (li.offsetTop + 34) / height;
        li.dataset.on = p >= at - 0.02 ? "true" : "false";
      });
    },
    { start: "top 70%", end: "bottom 55%", enabled: !reducedMotion },
  );

  const dark = tone === "onDark";
  const rail = dark ? "bg-paper/12" : "bg-ink/12";
  const title = dark ? "text-paper" : "text-ink";
  const body = dark ? "text-paper/55" : "text-ink/60";
  const divider = dark ? "border-paper/12" : "border-ink/10";
  const titleSize =
    size === "lg"
      ? "text-[24px] sm:text-[34px] lg:text-[40px]"
      : "text-[20px] sm:text-[24px]";

  return (
    <ol ref={listRef} className="relative">
      <span
        aria-hidden="true"
        className={`absolute top-0 bottom-0 left-[3px] w-px ${rail}`}
      >
        <span
          ref={fillRef}
          className="absolute inset-0 origin-top bg-teal"
          style={{ transform: reducedMotion ? "scaleY(1)" : "scaleY(0)" }}
        />
      </span>

      {items.map((item, i) => (
        <li
          key={item.index}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          data-on={reducedMotion ? "true" : "false"}
          className={`signal-item group relative grid gap-3 border-b border-dashed pl-9 sm:pl-14 ${divider} py-7 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:gap-10 sm:py-10`}
        >
          <span
            aria-hidden="true"
            className={`signal-node absolute top-[38px] left-0 h-[7px] w-[7px] rounded-full border border-teal sm:top-[48px] ${
              dark ? "bg-ink" : "bg-paper"
            }`}
          />
          <div className="flex items-baseline gap-4">
            <span className="signal-index font-mono text-[13px] tracking-[0.04em]">
              {item.index}
            </span>
            <h3
              className={`font-medium tracking-[-0.02em] leading-[1.02] ${titleSize} ${title}`}
            >
              {item.title}
            </h3>
          </div>
          <p
            className={`max-w-[48ch] text-[15px] leading-relaxed sm:pt-2 sm:text-[17px] ${body}`}
          >
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
