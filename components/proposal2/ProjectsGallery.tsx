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
];

type Module = {
  id: string;
  title: Record<Locale, string>;
  client: string;
  description: Record<Locale, string>;
  hoursSaved: Record<Locale, string>;
  icon: string;
  image?: string;
};

/** Three real modules built for Clean, a custom-solution client (not a
 * Nublix product like the SaaS row above). Hours-saved figures are the
 * client's own numbers, not estimates we invented — per field, not a
 * single blended metric, since each module saves time differently (a
 * flat weekly amount, a range, or a per-document amount). */
const MODULES: Module[] = [
  {
    id: "exec-dashboard",
    title: { es: "Dashboard Ejecutivo", en: "Executive Dashboard" },
    client: "Clean",
    description: {
      es: "Dashboard integral para conocer el estado de la empresa día a día.",
      en: "A complete dashboard to see the company's status day to day.",
    },
    hoursSaved: { es: "4h de ahorro semanales", en: "4 hours saved per week" },
    icon: "dashboard",
    image: "/projects/modules/dashboard-ejecutivo.png",
  },
  {
    id: "sales-module",
    title: { es: "Módulo comercial", en: "Sales Module" },
    client: "Clean",
    description: {
      es: "Buscador de leads cualificados en LinkedIn.",
      en: "A search tool for qualified leads on LinkedIn.",
    },
    hoursSaved: { es: "Entre 6h y 12h de ahorro semanales", en: "6 to 12 hours saved per week" },
    icon: "conexion",
    image: "/projects/modules/modulo-comercial.png",
  },
  {
    id: "contract-reader",
    title: { es: "Lectura de Contratos", en: "Contract Reading" },
    client: "Clean",
    description: {
      es: "Lector y base de datos de contratos firmados.",
      en: "A reader and database for signed contracts.",
    },
    hoursSaved: { es: "1h de ahorro por contrato", en: "1 hour saved per contract" },
    icon: "automatizacion",
    image: "/projects/modules/lectura-contratos.png",
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
  ownProducts: { es: "Productos propios", en: "Our own products" },
  customSolution: { es: "Solución a medida", en: "Custom solution" },
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
function OwnProductsGallery({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
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
                  alt={`${project.title}: ${project.objective[locale]}`}
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
                <h4
                  className={`text-[24px] leading-none font-bold tracking-[-0.01em] sm:text-[30px] ${
                    lightText ? "text-paper" : "text-ink"
                  }`}
                >
                  {project.title}
                </h4>
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
  );
}

/** Flip card: an icon face at rest (no screenshot exists yet for these
 * modules), 3D-rotating on hover/tap to a face with the real detail —
 * client, what it does, and the hours-saved figure the client gave us.
 * `onMouseLeave` un-flips for desktop so hover genuinely previews the
 * back rather than pinning it. `onClick` only sets flipped (never
 * toggles) — a simulated click fires onMouseEnter first, so a toggle
 * there would immediately cancel itself out; a real touch tap has no
 * hover to conflict with and simply stays flipped until another card is
 * tapped or the page scrolls on. */
function ModuleCard({ module, locale }: { module: Module; locale: Locale }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${module.title[locale]}: ${module.description[locale]}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped(true);
        }
      }}
      className="h-[280px] cursor-pointer [perspective:1200px] focus-visible:outline-none"
    >
      <div
        className="relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front: the real screenshot, title overlaid at the bottom —
            falls back to an icon treatment only if a module ever ships
            without one. */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-ink/12 [backface-visibility:hidden]">
          {module.image ? (
            <>
              <Image
                src={module.image}
                alt={module.title[locale]}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(20,22,31,0.9), rgba(20,22,31,0.25) 50%, rgba(20,22,31,0.05) 75%)",
                }}
              />
              <h4 className="absolute inset-x-0 bottom-0 p-5 text-[17px] font-bold tracking-[-0.01em] text-paper">
                {module.title[locale]}
              </h4>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 bg-mint p-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper">
                <Image src={`/brand/icons/${module.icon}.svg`} alt="" width={28} height={28} />
              </span>
              <h4 className="text-[17px] font-bold tracking-[-0.01em] text-ink">{module.title[locale]}</h4>
            </div>
          )}
        </div>

        {/* Back: the real detail */}
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-ink/15 bg-ink p-6 text-paper [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div>
            <StatusDot className="text-teal" />
            <h4 className="mt-3 text-[19px] leading-tight font-bold tracking-[-0.01em]">
              {module.title[locale]}
            </h4>
            <p className="mt-2 text-[13px] leading-relaxed text-paper/60">{module.description[locale]}</p>
          </div>
          <p className="font-mono text-[12px] tracking-[0.04em] text-teal uppercase">
            {module.hoursSaved[locale]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsGallery({ locale }: { locale: Locale }) {
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

      <Reveal className="mt-14">
        <TechLabel className="text-teal-dim">{HEADING.customSolution[locale]}</TechLabel>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} locale={locale} />
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16 border-t border-dashed border-ink/12 pt-14">
        <TechLabel className="text-teal-dim">{HEADING.ownProducts[locale]}</TechLabel>
        <div className="mt-6">
          <OwnProductsGallery locale={locale} />
        </div>
      </Reveal>
    </section>
  );
}
