"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button2 from "./Button2";
import { scrollToHash } from "@/lib/lenisScrollTo";
import NodeMark from "@/components/system/NodeMark";
import NodeMarkLight from "./NodeMarkLight";
import Capsule from "@/components/system/Capsule";

const SECTIONS = [
  { href: "#metodo", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#dudas", label: "Dudas" },
] as const;

/** Floating glass pill nav — mirrors the live site's Header.tsx shape (one
 * rounded capsule holding logo/nav/CTA), with a real frosted-glass surface.
 * Below `lg` it collapses to a hamburger + dropdown instead of silently
 * dropping nav and CTA.
 *
 * The logo starts large (matching the client's reference lockup) while the
 * pinned hero (#hero) is still in view, then shrinks to a normal nav-sized
 * mark once the visitor scrolls past it — tracked via IntersectionObserver
 * on the hero section rather than a scroll-position threshold, so it stays
 * correct regardless of viewport height or how many hero frames there are.
 * The hero is now a full-bleed dark video, so while it's in view the pill
 * also swaps to .glass-dark + the paper-on-ink NodeMark/text — the near-
 * transparent .glass-light surface (tuned for the paper page background)
 * would read as illegible ink-on-video otherwise. */
export default function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const targets = ["hero", "hero-wordmark"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target, entry.isIntersecting);
        setHeroInView([...visible.values()].some(Boolean));
      },
      { threshold: 0 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToHash(href);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center gap-1 rounded-full pr-2 pl-4 transition-[border-radius,padding,background-color] duration-300 ${
              heroInView ? "glass-dark" : "glass-light"
            } ${menuOpen ? "rounded-b-2xl" : ""} ${heroInView ? "py-3" : "py-2"}`}
          >
            <Link href="/" className="group flex items-center gap-2.5" aria-label="nublix — inicio">
              <span
                className={`block shrink-0 transition-[height,width] duration-300 ease-out group-active:scale-95 ${
                  heroInView ? "h-11 w-11 sm:h-14 sm:w-14" : "h-8 w-8"
                }`}
              >
                {heroInView ? <NodeMark className="h-full w-full" /> : <NodeMarkLight className="h-full w-full" />}
              </span>
              <span className="flex flex-col">
                <span
                  className={`leading-none font-bold tracking-tight transition-[font-size,color] duration-300 ease-out ${
                    heroInView ? "text-paper" : "text-ink"
                  } ${heroInView ? "text-[24px] sm:text-[32px]" : "text-[19px]"}`}
                >
                  nublix
                </span>
                <Capsule
                  className={`mt-1 transition-[width,height] duration-300 ease-out ${
                    heroInView ? "!h-[3px] !w-7" : "!h-[2px] !w-5"
                  }`}
                />
              </span>
            </Link>

            <span
              className={`ml-3 hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] uppercase lg:inline-flex ${
                heroInView ? "bg-paper/10 text-paper/60" : "bg-ink/[0.06] text-ink/50"
              }`}
            >
              Propuesta · v3
            </span>

            <nav className="ml-7 hidden items-center gap-6 lg:flex">
              {SECTIONS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(s.href);
                  }}
                  className={`font-mono text-[12px] tracking-[0.05em] uppercase transition-colors duration-150 ease-out ${
                    heroInView ? "text-paper/70 hover:text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>

            <div className="ml-5 hidden lg:block">
              <Button2 href="/contacto">Cuéntanos tu proceso</Button2>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="propuesta2-mobile-menu"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              className={`ml-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 ease-out active:scale-95 lg:hidden ${
                heroInView ? "hover:bg-paper/10" : "hover:bg-ink/5"
              }`}
            >
              <span className="relative block h-[13px] w-[16px]">
                <span
                  className={`absolute left-0 top-0 h-px w-full transition-transform duration-200 ease-out ${
                    heroInView ? "bg-paper" : "bg-ink"
                  } ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full transition-transform duration-200 ease-out ${
                    heroInView ? "bg-paper" : "bg-ink"
                  } ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="propuesta2-mobile-menu"
          inert={!menuOpen}
          className={`grid lg:hidden ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-[grid-template-rows] duration-300 ease-out`}
        >
          <div className="overflow-hidden">
            <nav className="mt-1 flex flex-col gap-1 rounded-2xl border border-ink/10 bg-paper/95 p-3 shadow-[0_10px_30px_rgba(20,22,31,0.12)] backdrop-blur-xl">
              {SECTIONS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(s.href);
                  }}
                  className="rounded-lg px-3 py-3 font-mono text-[13px] tracking-[0.05em] text-ink/70 uppercase transition-colors duration-150 ease-out hover:bg-ink/5 hover:text-ink"
                >
                  {s.label}
                </a>
              ))}
              <Button2 href="/contacto" className="mt-1 justify-center" onClick={() => setMenuOpen(false)}>
                Cuéntanos tu proceso
              </Button2>
              <Link
                href="/propuesta"
                onClick={() => setMenuOpen(false)}
                className="mt-1 px-3 py-2 text-center font-mono text-[11px] tracking-[0.05em] text-ink/40 uppercase"
              >
                Ver propuesta v2
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
