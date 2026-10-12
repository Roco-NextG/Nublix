import { notFound } from "next/navigation";

/** Catch-all for any unprefixed path that doesn't match a real page
 * (old /metodo, /servicios, /nosotros links from before the single-page
 * consolidation, or any typo'd URL). Matching this route — rather than
 * nothing at all — is what lets Next.js resolve app/(es)/not-found.tsx
 * (and its Header2/Footer2 chrome) instead of falling back to the bare
 * built-in 404, which it can only do for a path inside this route tree. */
export default function CatchAll() {
  notFound();
}
