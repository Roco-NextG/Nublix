import { Inter } from "next/font/google";
import Header2 from "@/components/proposal2/Header2";
import Footer2 from "@/components/proposal2/Footer2";

const inter = Inter({
  variable: "--font-propuesta-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * /propuesta2-only typography swap (Inter, replacing Sora / JetBrains Mono
 * — the mono "machine layer" read as too digital/terminal-like, and Sora's
 * geometric shapes still felt close to the sitewide Space Grotesk). Inter
 * has distinctly different letterforms and a huge weight range, so it reads
 * as a clean break rather than a subtle variant. Headlines were bumped from
 * font-medium to font-bold/font-extrabold across proposal2 components in
 * the same pass — the typeface swap alone wasn't legible at the weight the
 * site already used everywhere. globals.css declares --font-display /
 * --font-mono inside `@theme inline`, which makes Tailwind bake their
 * literal value into every compiled utility at build time rather than
 * read a live CSS variable — so overriding those two names on a wrapper
 * does nothing. The values it bakes in still reference --font-space-grotesk
 * / --font-space-mono (the real runtime variables next/font's `.variable`
 * classes set on <html>), so THOSE are what we need to shadow here. Body
 * text has no explicit font-family of its own below <body>, so it also
 * needs a fresh `font-family` declaration at this wrapper to actually
 * re-resolve — just overriding the variable isn't enough for inherited
 * font-family, only for utilities (like .font-mono) that re-declare it
 * locally at each use. Doesn't touch the live site or /propuesta.
 */
export default function Proposal2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`propuesta2-root ${inter.variable} [font-family:var(--font-propuesta-inter)] [--font-space-mono:var(--font-propuesta-inter)]`}
    >
      <Header2 />
      <main id="main-content">{children}</main>
      <Footer2 />
    </div>
  );
}
