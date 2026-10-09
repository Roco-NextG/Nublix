"use client";

import { useRef } from "react";
import EditorialAccordion, {
  type EditorialEntry,
} from "@/components/system/EditorialAccordion";
import TechLabel from "@/components/system/TechLabel";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { SERVICES_SECTION } from "@/lib/content";

const ROW = 68;
const PAD = 34;
const HUB_X = 30;
const TRUNK_X = 140;
const TILE_X = 236;
const TILE = 44;

/**
 * Services as modules plugging into one system. Desktop: a sticky map on
 * the left — a teal hub with one route per service — whose routes draw in
 * as the list on the right is scrolled. Mobile: the list alone (the map
 * would only repeat it at a size too small to read).
 */
export default function ServicesSystem({
  items,
}: {
  items: readonly EditorialEntry[];
}) {
  const reducedMotion = usePrefersReducedMotion();
  const routeRefs = useRef<(SVGPathElement | null)[]>([]);
  const moduleRefs = useRef<(SVGGElement | null)[]>([]);
  const n = items.length;
  const height = PAD * 2 + ROW * (n - 1);
  const hubY = height / 2;

  const listRef = useScrollProgress<HTMLDivElement>(
    (p) => {
      routeRefs.current.forEach((path, i) => {
        const f = Math.min(1, Math.max(0, p * (n + 0.4) - i));
        if (path) path.style.strokeDashoffset = String(1 - f);
        const mod = moduleRefs.current[i];
        if (mod) mod.dataset.on = f >= 0.98 ? "true" : "false";
      });
    },
    { start: "top 65%", end: "bottom 70%", enabled: !reducedMotion },
  );

  return (
    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-36">
          <TechLabel dot className="text-paper/50">
            {SERVICES_SECTION.mapLabel}
          </TechLabel>
          <svg
            viewBox={`0 0 320 ${height}`}
            className="mt-8 w-full max-w-[340px]"
            aria-hidden="true"
          >
            {items.map((item, i) => {
              const y = PAD + ROW * i;
              const d = `M${HUB_X} ${hubY} H${TRUNK_X} V${y} H${TILE_X}`;
              return (
                <g key={item.index}>
                  <path
                    d={d}
                    fill="none"
                    className="stroke-paper/15"
                    strokeDasharray="3 5"
                  />
                  <path
                    ref={(el) => {
                      routeRefs.current[i] = el;
                    }}
                    d={d}
                    fill="none"
                    pathLength={1}
                    strokeDasharray="1 1"
                    style={{ strokeDashoffset: reducedMotion ? 0 : 1 }}
                    className="stroke-teal"
                    strokeWidth={1.5}
                  />
                  <g
                    ref={(el) => {
                      moduleRefs.current[i] = el;
                    }}
                    data-on={reducedMotion ? "true" : "false"}
                    className="service-module"
                  >
                    <rect
                      x={TILE_X}
                      y={y - TILE / 2}
                      width={TILE}
                      height={TILE}
                      rx={2}
                      className="fill-paper"
                    />
                    {item.icon ? (
                      <image
                        href={`/brand/icons/${item.icon}.svg`}
                        x={TILE_X + 11}
                        y={y - 11}
                        width={22}
                        height={22}
                      />
                    ) : null}
                    <rect
                      x={TILE_X - 4}
                      y={y - TILE / 2 - 4}
                      width={TILE + 8}
                      height={TILE + 8}
                      rx={4}
                      fill="none"
                      className="service-module-ring stroke-teal"
                    />
                    <text
                      x={TILE_X + TILE + 12}
                      y={y + 4}
                      className="fill-paper/45 font-mono text-[11px]"
                    >
                      {item.index}
                    </text>
                  </g>
                </g>
              );
            })}
            <circle cx={HUB_X} cy={hubY} r={22} className="fill-teal/15" />
            <circle cx={HUB_X} cy={hubY} r={9} className="fill-teal" />
          </svg>
        </div>
      </div>

      <div ref={listRef}>
        <EditorialAccordion items={items} tone="onDark" />
      </div>
    </div>
  );
}
