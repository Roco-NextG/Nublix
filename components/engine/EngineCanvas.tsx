"use client";

import { useEffect, useRef } from "react";
import {
  clamp01,
  createEngine,
  getLayout,
  lanePath,
  pathLength,
  phases,
  pointAt,
  type EngineVariant,
} from "./engineModel";

// Brand tokens (globals.css @theme) as raw RGB for canvas alpha work.
const PAPER = "246, 244, 239";
const TEAL = "31, 156, 144";

const PULSES_PER_LANE = 2;
const PULSE_SPEED = 120; // px / s along the lane path
const TAIL = 46;

type Props = {
  /** 0..1 story progress, written by the parent's scroll logic. */
  progressRef: React.RefObject<number>;
  variant?: EngineVariant;
  seed?: number;
  /** Draw a single resolved frame and never animate (reduced motion). */
  still?: boolean;
  className?: string;
};

/**
 * Canvas renderer for "The Invisible Engine" (see engineModel.ts).
 * Decorative: aria-hidden, absolutely positioned by the parent, never
 * holds content. The rAF loop only runs while the canvas is on screen and
 * the tab is visible; `still` draws once (and on resize) with no loop.
 */
export default function EngineCanvas({
  progressRef,
  variant = "hero",
  seed = 7,
  still = false,
  className = "",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let engine = createEngine(60, 4, seed);
    let layout = getLayout(1, 1, engine.lanes, variant);
    let shown = still ? 1 : progressRef.current ?? 0;
    let raf = 0;
    let last = performance.now();
    let elapsed = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const wide = w >= 1024;
      const count =
        variant === "hero" ? (wide ? 84 : w >= 640 ? 60 : 44) : wide ? 40 : 28;
      engine = createEngine(count, 4, seed);
      layout = getLayout(w, h, engine.lanes, variant);
    };

    const draw = (t: number) => {
      const p = shown;
      const ph = phases(p);
      const { nodes, perLane } = engine;
      ctx.clearRect(0, 0, w, h);

      const laneSpan = layout.xb - layout.x0 - 18;
      const positions: [number, number, number][] = nodes.map((n) => {
        const local = clamp01(
          (p - ph.migrateStart - n.delay * ph.migrateStagger) / ph.migrateSpan,
        );
        const m = local * local * (3 - 2 * local);
        const drift = 1 - m;
        const ax =
          layout.chaos.x +
          n.cx * layout.chaos.w +
          Math.sin(t * 0.32 + n.phase) * n.amp * drift;
        const ay =
          layout.chaos.y +
          n.cy * layout.chaos.h +
          Math.cos(t * 0.24 + n.phase * 1.3) * n.amp * drift;
        const sx = layout.x0 + ((n.slot + 0.5) / perLane) * laneSpan;
        const sy = layout.laneYs[n.lane];
        return [ax + (sx - ax) * m, ay + (sy - ay) * m, m];
      });

      // 1 — chaos links: brief flickers before scrolling ("something is
      // happening underneath"), then steady while the process is mapped.
      ctx.lineWidth = 1;
      nodes.forEach((n, i) => {
        const [x, y, m] = positions[i];
        if (m >= 1) return;
        for (const j of n.links) {
          if (j < i && nodes[j].links.includes(i)) continue;
          const flicker =
            Math.pow(Math.max(0, Math.sin(t * 0.55 + n.phase * 3 + j)), 14) *
            0.32;
          const alpha =
            (flicker * (1 - ph.connect) + ph.connect * 0.22) * (1 - m);
          if (alpha < 0.01) continue;
          const [x2, y2] = positions[j];
          ctx.strokeStyle = `rgba(${PAPER}, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      });

      // 2 — lanes: draw in like a route being laid, dashed underneath
      // (the site's structural-divider signature), solid once complete.
      const paths = layout.laneYs.map((_, i) => lanePath(layout, i));
      if (ph.lanes > 0) {
        paths.forEach((path) => {
          const len = pathLength(path);
          ctx.strokeStyle = `rgba(${PAPER}, ${0.16 * ph.lanes})`;
          ctx.setLineDash([len * ph.lanes, len]);
          ctx.beginPath();
          ctx.moveTo(path[0][0], path[0][1]);
          for (let k = 1; k < path.length; k++) ctx.lineTo(path[k][0], path[k][1]);
          ctx.stroke();
        });
        ctx.setLineDash([]);
      }

      // 3 — pulses: teal signals travelling every lane into the hub.
      const pulseXs: number[][] = layout.laneYs.map(() => []);
      let hubFlash = 0;
      if (ph.pulses > 0) {
        paths.forEach((path, lane) => {
          const len = pathLength(path);
          for (let k = 0; k < PULSES_PER_LANE; k++) {
            const offset = (lane * 0.37 + k / PULSES_PER_LANE) % 1;
            const d = ((t * PULSE_SPEED) / len + offset) % 1;
            const dist = d * len;
            const [px, py] = pointAt(path, dist);
            if (py === layout.laneYs[lane]) pulseXs[lane].push(px);
            const toEnd = len - dist;
            if (toEnd < 30) hubFlash = Math.max(hubFlash, 1 - toEnd / 30);
            for (let s = 0; s < 8; s++) {
              const [tx, ty] = pointAt(path, dist - (TAIL * s) / 8);
              const [tx2, ty2] = pointAt(path, dist - (TAIL * (s + 1)) / 8);
              ctx.strokeStyle = `rgba(${TEAL}, ${(1 - s / 8) * 0.8 * ph.pulses})`;
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(tx, ty);
              ctx.lineTo(tx2, ty2);
              ctx.stroke();
            }
            ctx.fillStyle = `rgba(${TEAL}, ${ph.pulses})`;
            ctx.beginPath();
            ctx.arc(px, py, 2.4, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        ctx.lineWidth = 1;
      }

      // 4 — nodes: fragments (squares) become nodes as they find a lane;
      // a node lights teal for a moment as a pulse passes through it.
      nodes.forEach((n, i) => {
        const [x, y, m] = positions[i];
        let lit = 0;
        if (m > 0.95) {
          for (const px of pulseXs[n.lane]) {
            lit = Math.max(lit, 1 - Math.abs(px - x) / 26);
          }
          lit *= ph.pulses;
        }
        const base = 0.3 + 0.35 * m;
        const color = lit > 0 ? TEAL : PAPER;
        const alpha = lit > 0 ? Math.max(base, lit) : base;

        if (n.fragment && m < 1) {
          const s = 5.5;
          ctx.strokeStyle = `rgba(${PAPER}, ${0.4 * (1 - m)})`;
          ctx.strokeRect(x - s / 2, y - s / 2, s, s);
        }
        const r = n.fragment ? n.r * m : n.r + 0.4 * m;
        if (r <= 0.05) return;
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, r + lit * 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5 — the hub: the teal node every lane resolves into.
      if (ph.hub > 0) {
        const hx = layout.xh;
        const hy = layout.hubY;
        const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 90);
        glow.addColorStop(0, `rgba(${TEAL}, ${0.32 * ph.hub + hubFlash * 0.12})`);
        glow.addColorStop(1, `rgba(${TEAL}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(hx, hy, 90, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${TEAL}, ${ph.hub})`;
        ctx.beginPath();
        ctx.arc(hx, hy, 9 * ph.hub + hubFlash * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(${TEAL}, ${0.45 * ph.hub})`;
        ctx.beginPath();
        ctx.arc(hx, hy, 17 + hubFlash * 4, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      elapsed += dt;
      const target = progressRef.current ?? 0;
      shown += (target - shown) * (1 - Math.exp(-dt * 7));
      if (Math.abs(target - shown) < 0.0005) shown = target;
      draw(elapsed);
      raf = visible ? requestAnimationFrame(frame) : 0;
    };

    const start = () => {
      if (raf || still) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    // Still frames use a fixed time so pulses sit mid-lane, not at 0.
    if (still) draw(2.2);

    const ro = new ResizeObserver(() => {
      resize();
      if (still) draw(2.2);
    });
    ro.observe(canvas);

    let io: IntersectionObserver | undefined;
    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };
    if (!still) {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      });
      io.observe(canvas);
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      stop();
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [progressRef, variant, seed, still]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block h-full w-full ${className}`}
    />
  );
}
