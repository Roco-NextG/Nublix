"use client";

import { useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import TechLabel from "@/components/system/TechLabel";
import Reveal from "@/components/system/Reveal";
import type { Locale } from "@/lib/i18n";

type Project = {
  id: string;
  title: string;
  category: Record<Locale, string>;
  objective: Record<Locale, string>;
  tone: "ink" | "mint";
  image?: string;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Coach AI",
    category: { es: "SaaS", en: "SaaS" },
    objective: { es: "Integración con Telegram.", en: "Telegram integration." },
    tone: "ink",
    image: "/projects/coach-ai.png",
  },
  {
    id: "02",
    title: "Retxo",
    category: { es: "SaaS", en: "SaaS" },
    objective: {
      es: "Gestión de alumnos para profesores online.",
      en: "Student management for online teachers.",
    },
    tone: "mint",
    image: "/projects/retxo.png",
  },
  {
    id: "03",
    title: "DeuceUp",
    category: { es: "SaaS", en: "SaaS" },
    objective: { es: "Gestión de torneos de pádel.", en: "Padel tournament management." },
    tone: "ink",
    image: "/projects/deuceup.png",
  },
  {
    id: "04",
    title: "CClean",
    category: { es: "Solución a medida", en: "Custom solution" },
    objective: {
      es: "Solución de IA para ganar productividad.",
      en: "AI solution to boost productivity.",
    },
    tone: "mint",
    image: "/projects/cclean.jpg",
  },
];

const HEADING = {
  eyebrow: { es: "Proyectos", en: "Projects" },
  title: {
    es: (
      <>
        Lo que <span className="text-teal">hemos construido.</span>
      </>
    ),
    en: (
      <>
        What <span className="text-teal">we&apos;ve built.</span>
      </>
    ),
  },
  subtitle: {
    es: "Productos propios y encargos a medida en los que hemos trabajado.",
    en: "Our own products and custom projects we've worked on.",
  },
} as const;

/**
 * Elastic accordion gallery — hover/tap expands a panel at the expense of
 * its siblings (flex-[4] vs flex-[1]), adapted from a community component
 * the user referenced. No stock imagery and no invented metrics/results —
 * just the real product/client name, category and objective for each.
 * Screenshots render through next/image (not a raw CSS background) so
 * they carry real alt text and are eligible for Google Images — the
 * gradient scrim layers on top as its own absolutely-positioned div.
 */
export default function ProjectsGallery({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <section id="proyectos" className="scroll-mt-28 bg-paper px-5 py-16 text-ink sm:px-8 sm:py-24 lg:px-16">
      <Reveal>
        <Eyebrow>{HEADING.eyebrow[locale]}</Eyebrow>
        <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[0.95] font-bold tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
          {HEADING.title[locale]}
        </h2>
        <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
          {HEADING.subtitle[locale]}
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="flex h-[420px] w-full flex-col gap-2 sm:h-[520px] sm:flex-row sm:gap-3">
          {PROJECTS.map((project) => {
            const active = activeId === project.id;
            const dark = project.tone === "ink";
            const lightText = dark || Boolean(project.image);
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-pressed={active}
                aria-label={project.title}
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(project.id);
                  }
                }}
                className={`relative cursor-pointer overflow-hidden rounded-2xl border border-ink/15 transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:z-10 ${
                  active ? "flex-[4]" : "flex-[1]"
                } ${dark ? "bg-ink" : "bg-mint"}`}
              >
                {project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.objective[locale]}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "linear-gradient(to top, rgba(20,22,31,0.95), rgba(20,22,31,0.4) 45%, rgba(20,22,31,0.05) 75%)",
                      }}
                    />
                  </>
                ) : null}

                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-6 -left-2 text-[120px] leading-none font-medium select-none transition-opacity duration-500 sm:text-[160px] ${
                    lightText ? "text-paper/[0.06]" : "text-ink/[0.05]"
                  } ${active ? "opacity-100" : "opacity-60"}`}
                >
                  {project.id}
                </span>

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
                  <div
                    className={`flex flex-col gap-3 transition-all duration-500 ${
                      active ? "translate-y-0 opacity-100 delay-150" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <div className="glass-dark inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
                      <StatusDot className="text-paper" />
                      <TechLabel className="text-paper/85">{project.category[locale]}</TechLabel>
                    </div>
                    <h3
                      className={`text-[24px] leading-none font-bold tracking-[-0.01em] sm:text-[30px] ${
                        lightText ? "text-paper" : "text-ink"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`max-w-[32ch] text-[14px] leading-relaxed sm:text-[15px] ${
                        lightText ? "text-paper/55" : "text-ink/55"
                      }`}
                    >
                      {project.objective[locale]}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-5 left-1/2 -translate-x-1/2 transition-all duration-500 sm:bottom-8 ${
                      active ? "scale-50 opacity-0" : "opacity-100 delay-300"
                    }`}
                  >
                    <span
                      className={`hidden text-[13px] font-medium tracking-[0.1em] uppercase [writing-mode:vertical-rl] sm:block ${
                        lightText ? "text-paper/70" : "text-ink/55"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span
                      className={`block font-mono text-[12px] sm:hidden ${lightText ? "text-paper/60" : "text-ink/50"}`}
                    >
                      {project.id}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
