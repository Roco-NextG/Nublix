import { notFound } from "next/navigation";

/** Catch-all for any unmatched path under /en — see app/(es)/[...slug]/page.tsx
 * for why this needs to exist at all. */
export default function CatchAll() {
  notFound();
}
