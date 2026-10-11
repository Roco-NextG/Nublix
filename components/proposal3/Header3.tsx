"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import { scrollToHash } from "@/lib/lenisScrollTo";

const SECTIONS = [
  { href: "#metodo", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué nosotros" },
  { href: "#dudas", label: "Dudas" },
] as const;

/** A plain solid bar, always ink, hairline bottom border — the quiet
 * enterprise-header pattern (indicium.ai), not a floating translucent
 * pill. The chrome should be forgettable; the content is the point. */
export default function Header3() {
  const [open, setOpen] = useState(false);

  function go(hash: string) {
    setOpen(false);
    scrollToHash(hash);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={(e) => {
                e.preventDefault();
                go(s.href);
              }}
              className="font-mono text-[12px] tracking-[0.04em] text-paper/55 uppercase transition-colors duration-150 ease-out hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              go("#contacto");
            }}
            className="inline-flex items-center rounded-[8px] bg-teal px-5 py-2.5 font-mono text-[12px] tracking-[0.04em] text-ink uppercase transition-colors duration-150 ease-out hover:bg-teal-dim"
          >
            Cuéntanos tu proceso
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute inset-x-0 top-0 h-[2px] bg-paper transition-transform duration-200 ease-out ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-[2px] bg-paper transition-transform duration-200 ease-out ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-paper/10 bg-ink px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {SECTIONS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(s.href);
                }}
                className="font-mono text-[14px] tracking-[0.04em] text-paper/70 uppercase"
              >
                {s.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                go("#contacto");
              }}
              className="mt-2 inline-flex w-fit items-center rounded-[8px] bg-teal px-5 py-2.5 font-mono text-[12px] tracking-[0.04em] text-ink uppercase"
            >
              Cuéntanos tu proceso
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
