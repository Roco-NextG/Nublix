"use client";

const STAGES = [
  "/hero-stages/stage-fragmented.png",
  "/hero-stages/stage-problem.png",
  "/hero-stages/stage-connections.png",
  "/hero-stages/stage-dashboard.png",
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

/** Static illustration per hero frame, crossfaded on the same progress/
 * timing as the hero text — replaces the earlier code-drawn scroll
 * animation (DashboardScrollVisual) with the client's own illustrated
 * stages (public/hero-stages/*.png — cropped from their mockup, text
 * removed, nothing else altered). */
export default function HeroStageImages({ progress }: { progress: number }) {
  const total = STAGES.length;

  return (
    <div className="relative h-[280px] w-[320px] shrink-0 sm:h-[360px] sm:w-[440px] lg:h-[420px] lg:w-[540px]">
      {STAGES.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${src})`, opacity: frameOpacity(progress, i, total) }}
        />
      ))}
    </div>
  );
}
