"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between">
        <div
          className={`flex items-center gap-1 rounded-full border border-paper/10 bg-ink/75 py-2 pr-2 pl-4 backdrop-blur-lg transition-[border-radius] duration-200 ${
            menuOpen ? "rounded-b-2xl" : ""
          }`}
        >
          <Logo />

          <nav className="ml-8 hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[12px] tracking-[0.05em] text-paper/65 uppercase transition-colors duration-150 ease-out hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacto"
            className="ml-6 hidden items-center gap-2 rounded-full bg-teal px-4 py-2 font-mono text-[12px] tracking-[0.05em] text-ink uppercase transition-colors duration-150 ease-out hover:bg-teal-dim active:scale-[0.97] md:inline-flex"
          >
            Contacto
            <span aria-hidden="true">↗</span>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="ml-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 ease-out hover:bg-paper/10 active:scale-95 md:hidden"
          >
            <span className="relative block h-[13px] w-[16px]">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-paper transition-transform duration-200 ease-out ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-paper transition-transform duration-200 ease-out ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`mx-auto grid max-w-[1240px] md:hidden ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-[grid-template-rows] duration-300 ease-out`}
      >
        <div className="overflow-hidden">
          <nav className="mt-1 flex flex-col gap-1 rounded-2xl border border-paper/10 bg-ink/90 p-3 backdrop-blur-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-mono text-[13px] tracking-[0.05em] text-paper/75 uppercase transition-colors duration-150 ease-out hover:bg-paper/5 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3 font-mono text-[13px] tracking-[0.05em] text-ink uppercase active:scale-[0.97]"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
