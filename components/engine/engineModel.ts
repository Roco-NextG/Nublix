/**
 * "The Invisible Engine" — pure geometry for the node field drawn by
 * EngineCanvas. No DOM, no React: just a seeded node set plus the two
 * layouts every node interpolates between.
 *
 *  - chaos:  nodes scattered across the frame, drifting, a few fragments
 *            (squares — the abstracted Excel/papel) among the dots.
 *  - system: the same nodes snapped onto parallel process lanes that merge
 *            into a single trunk and end in a teal hub — the isotipo-nodo's
 *            own grammar (node → stroke → teal node), drawn as a system.
 *
 * Progress (0→1) decides how far along that story the field is. The phase
 * curves live in `phases()` so the copy layered on top (Hero.tsx) and the
 * drawing stay in sync from one place.
 */

export type EngineVariant = "hero" | "compact";

export type EngineNode = {
  /** chaos position, normalized 0..1 inside the chaos rect */
  cx: number;
  cy: number;
  lane: number;
  slot: number;
  /** 0..1 — stagger offset for the migration into lanes */
  delay: number;
  phase: number;
  amp: number;
  r: number;
  fragment: boolean;
  /** indexes of the two nearest chaos neighbours */
  links: [number, number];
};

export type Engine = {
  nodes: EngineNode[];
  lanes: number;
  perLane: number;
};

export type Rect = { x: number; y: number; w: number; h: number };

export type Layout = {
  chaos: Rect;
  x0: number;
  xb: number;
  xh: number;
  laneYs: number[];
  hubY: number;
};

/** Small deterministic PRNG so SSR-free canvases still draw the same
 * composition on every visit (mulberry32). */
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createEngine(count: number, lanes: number, seed = 7): Engine {
  const rand = rng(seed);
  const perLane = Math.ceil(count / lanes);
  const nodes: EngineNode[] = [];

  for (let i = 0; i < count; i++) {
    // Jittered stratified scatter: reads as "random", never clumps into
    // one blob or leaves a big hole.
    const cols = Math.ceil(Math.sqrt(count * 1.6));
    const rows = Math.ceil(count / cols);
    const col = i % cols;
    const row = Math.floor(i / cols);
    nodes.push({
      cx: (col + 0.15 + rand() * 0.7) / cols,
      cy: (row + 0.15 + rand() * 0.7) / rows,
      lane: 0,
      slot: 0,
      delay: rand(),
      phase: rand() * Math.PI * 2,
      amp: 4 + rand() * 10,
      r: 1.1 + rand() * 1.5,
      fragment: rand() < 0.22,
      links: [0, 0],
    });
  }

  // Assign lanes by chaos height so nodes travel mostly sideways when they
  // resolve — the migration reads as "sorting", not as a shuffle.
  const byY = nodes.map((n, i) => i).sort((a, b) => nodes[a].cy - nodes[b].cy);
  byY.forEach((nodeIndex, order) => {
    nodes[nodeIndex].lane = Math.min(lanes - 1, Math.floor(order / perLane));
  });
  for (let lane = 0; lane < lanes; lane++) {
    nodes
      .map((n, i) => i)
      .filter((i) => nodes[i].lane === lane)
      .sort((a, b) => nodes[a].cx - nodes[b].cx)
      .forEach((nodeIndex, slot) => {
        nodes[nodeIndex].slot = slot;
      });
  }

  nodes.forEach((n, i) => {
    let best = -1;
    let second = -1;
    let bestD = Infinity;
    let secondD = Infinity;
    nodes.forEach((m, j) => {
      if (i === j) return;
      const d = (n.cx - m.cx) ** 2 + (n.cy - m.cy) ** 2;
      if (d < bestD) {
        second = best;
        secondD = bestD;
        best = j;
        bestD = d;
      } else if (d < secondD) {
        second = j;
        secondD = d;
      }
    });
    n.links = [best, second];
  });

  return { nodes, lanes, perLane };
}

export function getLayout(
  w: number,
  h: number,
  lanes: number,
  variant: EngineVariant,
): Layout {
  const wide = w >= 1024;
  let chaos: Rect;
  let x0: number, xb: number, xh: number, top: number, bottom: number;

  if (variant === "hero") {
    if (wide) {
      chaos = { x: w * 0.03, y: h * 0.1, w: w * 0.95, h: h * 0.86 };
      x0 = w * 0.5;
      xb = w * 0.84;
      xh = w * 0.92;
      top = h * 0.3;
      bottom = h * 0.7;
    } else {
      chaos = { x: 0, y: h * 0.06, w, h: h * 0.92 };
      x0 = w * 0.07;
      xb = w * 0.8;
      xh = w * 0.9;
      top = h * 0.68;
      bottom = h * 0.84;
    }
  } else if (wide) {
    chaos = { x: w * 0.52, y: h * 0.34, w: w * 0.46, h: h * 0.6 };
    x0 = w * 0.58;
    xb = w * 0.87;
    xh = w * 0.94;
    top = h * 0.42;
    bottom = h * 0.82;
  } else {
    chaos = { x: 0, y: h * 0.3, w, h: h * 0.68 };
    x0 = w * 0.3;
    xb = w * 0.82;
    xh = w * 0.92;
    top = h * 0.66;
    bottom = h * 0.88;
  }

  const laneYs = Array.from(
    { length: lanes },
    (_, i) => top + ((bottom - top) * i) / Math.max(1, lanes - 1),
  );
  return { chaos, x0, xb, xh, laneYs, hubY: (top + bottom) / 2 };
}

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function smoothstep(a: number, b: number, v: number) {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
}

/** Every phase of the story as a function of scroll progress. Shared by the
 * canvas and the copy overlay so they can never drift apart. */
export function phases(p: number) {
  return {
    /** neighbour links fade in while "understanding" the process… */
    connect: smoothstep(0.32, 0.46, p) * (1 - smoothstep(0.56, 0.72, p)),
    /** …nodes migrate onto the lanes… */
    migrateStart: 0.49,
    migrateSpan: 0.16,
    migrateStagger: 0.1,
    /** …the lanes draw in… */
    lanes: smoothstep(0.55, 0.74, p),
    /** …and the engine runs: pulses travel into the hub. */
    pulses: smoothstep(0.74, 0.88, p),
    hub: smoothstep(0.76, 0.92, p),
  };
}

export function lanePath(layout: Layout, lane: number) {
  const y = layout.laneYs[lane];
  return [
    [layout.x0 - 24, y],
    [layout.xb, y],
    [layout.xb, layout.hubY],
    [layout.xh, layout.hubY],
  ] as const;
}

export function pathLength(points: readonly (readonly [number, number])[]) {
  let len = 0;
  for (let i = 1; i < points.length; i++) {
    len += Math.hypot(
      points[i][0] - points[i - 1][0],
      points[i][1] - points[i - 1][1],
    );
  }
  return len;
}

export function pointAt(
  points: readonly (readonly [number, number])[],
  dist: number,
): [number, number] {
  let remaining = Math.max(0, dist);
  for (let i = 1; i < points.length; i++) {
    const [ax, ay] = points[i - 1];
    const [bx, by] = points[i];
    const seg = Math.hypot(bx - ax, by - ay);
    if (remaining <= seg) {
      const t = seg === 0 ? 0 : remaining / seg;
      return [ax + (bx - ax) * t, ay + (by - ay) * t];
    }
    remaining -= seg;
  }
  const last = points[points.length - 1];
  return [last[0], last[1]];
}
