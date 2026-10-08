import type Lenis from "@studio-freight/lenis";

/**
 * Scroll an in-page hash link via the shared Lenis instance (see
 * SmoothScrollProvider) instead of letting the browser do a native jump.
 * Lenis doesn't learn about a native jump until its next rAF tick, so it
 * can fight the jump back toward whatever position it last tracked —
 * that's what made /propuesta2's nav links land somewhere different on
 * every click. Falls back to a plain scrollIntoView when Lenis isn't
 * running (prefers-reduced-motion skips it entirely) or the target is
 * missing.
 */
export function scrollToHash(hash: string, offset = -96) {
  const target = document.querySelector(hash);
  if (!target) return;

  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  if (lenis) {
    lenis.scrollTo(target as HTMLElement, { offset });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
