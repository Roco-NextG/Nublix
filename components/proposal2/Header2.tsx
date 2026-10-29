"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button2 from "./Button2";
import { scrollToHash } from "@/lib/lenisScrollTo";
import NodeMark from "@/components/system/NodeMark";
import NodeMarkLight from "./NodeMarkLight";
import Capsule from "@/components/system/Capsule";
import GlobeIcon from "@/components/system/GlobeIcon";
import { CONTACT_PATH, HOME_PATH, SECTIONS, UI, alternatePath, localeFromPathname } from "@/lib/i18n";

/** Floating glass pill nav — one rounded capsule holding logo/nav/CTA, with
 * a real frosted-glass surface. Below `lg` it collapses to a hamburger +
 * dropdown instead of silently dropping nav and CTA.
 *
 * The logo starts large while the hero (#hero, then #hero-wordmark) is
 * still in view, then shrinks to a normal nav-sized mark once the visitor
 * scrolls past — tracked via IntersectionObserver rather than a scroll-
 * position threshold, so it stays correct regardless of viewport height.
 * The hero's background is dark there, so while it's in view the pill also
 * swaps to .glass-dark + the paper-on-ink NodeMark/text — the paper-tinted
 * .glass-light surface would read as illegible ink-on-dark otherwise. Both
 * glass variants are opaque enough (92%) to stay legible regardless of
 * what scrolls underneath the fixed pill, since content routinely reaches
 * the very top of the viewport (FAQ cards, service cards) — blur alone
 * isn't a reliable separator across browsers/devices.
 *
 * Mounted once from each locale's root layout — it reads the locale from
 * the current pathname (/en/* vs everything else) rather than taking a
 * prop, since the two root layouts (app/(es)/layout.tsx, app/en/layout.tsx)
 * share this exact component. */
export default function Header2() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const homePath = HOME_PATH[locale];
  const isHome = pathname === homePath;
  const [menuOpen, setMenuOpen] = useState(false);
  // Starts false (light pill) rather than assuming a hero is present —
  // Header2 is now mounted sitewide from the root layout, and pages
  // without #hero/#hero-wordmark (e.g. /contacto) never get an
  // IntersectionObserver callback to correct an optimistic `true` default.
  const [heroInView, setHeroInView] = useState(false);
  // Resets the moment `pathname` changes (during render, not in an effect —
  // see https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes)
  // to a safe default before the observer effect below has a chance to run,
  // since Header2 never remounts across client-side navigation and would
  // otherwise carry the previous page's heroInView value into the new one.
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setHeroInView(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    // Re-runs on every route change (not just on mount) because Header2
    // lives in the root layout and never remounts across client-side
    // navigation — without the `pathname` dependency, the observer set up
    // on one page keeps watching that page's (now-unmounted) targets
    // instead of the new page's. The render-phase reset above already
    // covers pages with no hero at all; this only needs to attach a fresh
    // observer when one exists.
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
  }, [pathname]);

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
            <Link href={homePath} className="group flex items-center gap-2.5" aria-label={UI.logoAriaLabel[locale]}>
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

            <nav className="ml-7 hidden items-center gap-6 lg:flex">
              {SECTIONS.map((s) => (
                <Link
                  key={s.href}
                  href={isHome ? s.href : `${homePath}${s.href}`}
                  onClick={
                    isHome
                      ? (e) => {
                          e.preventDefault();
                          handleNavClick(s.href);
                        }
                      : undefined
                  }
                  className={`font-mono text-[12px] tracking-[0.05em] uppercase transition-colors duration-150 ease-out ${
                    heroInView ? "text-paper/85 hover:text-paper" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {s.label[locale]}
                </Link>
              ))}
            </nav>

            <Link
              href={alternatePath(pathname)}
              title={UI.languageSwitcherLabel[locale]}
              aria-label={UI.languageSwitcherLabel[locale]}
              className={`ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-150 ease-out active:scale-95 ${
                heroInView ? "text-paper hover:bg-paper/10" : "text-ink/60 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              <GlobeIcon className="h-[18px] w-[18px]" />
            </Link>

            <div className="ml-4 hidden lg:block">
              <Button2 href={CONTACT_PATH[locale]}>{UI.primaryCta[locale]}</Button2>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="propuesta2-mobile-menu"
              aria-label={menuOpen ? UI.closeMenu[locale] : UI.openMenu[locale]}
              className={`ml-1 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 ease-out active:scale-95 lg:hidden ${
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
                <Link
                  key={s.href}
                  href={isHome ? s.href : `${homePath}${s.href}`}
                  onClick={
                    isHome
                      ? (e) => {
                          e.preventDefault();
                          handleNavClick(s.href);
                        }
                      : () => setMenuOpen(false)
                  }
                  className="rounded-lg px-3 py-3 font-mono text-[13px] tracking-[0.05em] text-ink/70 uppercase transition-colors duration-150 ease-out hover:bg-ink/5 hover:text-ink"
                >
                  {s.label[locale]}
                </Link>
              ))}
              <Button2 href={CONTACT_PATH[locale]} className="mt-1 justify-center" onClick={() => setMenuOpen(false)}>
                {UI.primaryCta[locale]}
              </Button2>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
