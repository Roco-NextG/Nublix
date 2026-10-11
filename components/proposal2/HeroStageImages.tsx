"use client";

import Image from "next/image";

const STAGES = [
  "/hero-stages/stage-01-fragmented.png",
  "/hero-stages/stage-02-connections.png",
  "/hero-stages/stage-03-build.png",
  "/hero-stages/stage-04-dashboard.png",
] as const;

/** Mirrors ScrollHero's own frameOpacity exactly, duplicated locally so this
 * component stays a drop-in visual with no coupling to the hero's internals
 * beyond the `progress` number both already share. */
function frameOpacity(progress: number, index: number, total: number) {
  const span = 1 / total;
  const start = index * span;
  const end = start + span;
  const fade = span * 0.12;

  const fadeInStart = index === 0 ? -Infinity : start - fade;
  const fadeInEnd = index === 0 ? -Infinity : start + fade;
  const fadeOutStart = index === total - 1 ? Infinity : end - fade;
  const fadeOutEnd = index === total - 1 ? Infinity : end + fade;

  if (progress < fadeInStart) return 0;
  if (progress < fadeInEnd) return (progress - fadeInStart) / (fadeInEnd - fadeInStart);
  if (progress < fadeOutStart) return 1;
  if (progress < fadeOutEnd) return 1 - (progress - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  return 0;
}

/** Full-bleed hero background, crossfaded per stage on the same progress as
 * the hero text. These OpenArt renders are deliberately composed with every
 * window/card packed into the right ~45% of the frame and the left half
 * left empty — so the text column (left-aligned in ScrollHero) never sits
 * on top of UI clutter without needing a heavy scrim. object-right keeps
 * that right-weighted content anchored if a viewport is narrower than 16:9
 * and object-cover has to crop — cropping eats into the empty left margin
 * first, not the composition.
 *
 * Rendered via next/image (not a CSS background) so the four ~1.3MB source
 * PNGs get served as right-sized, modern-format (AVIF/WebP) variants
 * instead of their full original weight — only the first frame is
 * `priority`, since it's the one visible at first paint and the one that
 * actually counts toward LCP. */
export default function HeroStageImages({ progress }: { progress: number }) {
  const total = STAGES.length;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {STAGES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className="object-cover object-right"
          style={{ opacity: frameOpacity(progress, i, total) }}
        />
      ))}
    </div>
  );
}
