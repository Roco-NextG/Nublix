"use client";

import { useState } from "react";
import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import TechLabel from "@/components/system/TechLabel";
import Reveal from "@/components/system/Reveal";

type Project = {
  id: string;
  category: string;
  title: string;
  objective: string;
  tone: "ink" | "mint";
  image?: string;
};

const PROJECTS: Project[] = [
  {
    id: "01",
    category: "SaaS",
    title: "Coach AI",
    objective: "Integración con Telegram.",
    tone: "ink",
    image: "/projects/coach-ai.png",
  },
  {
    id: "02",
    category: "SaaS",
    title: "Retxo",
    objective: "Gestión de alumnos para profesores online.",
    tone: "mint",
    image: "/projects/retxo.png",
  },
  {
    id: "03",
    category: "SaaS",
    title: "DeuceUp",
    objective: "Gestión de torneos de pádel.",
    tone: "ink",
    image: "/projects/deuceup.png",
  },
  {
    id: "04",
    category: "Solución a medida",
    title: "CClean",
    objective: "Solución de IA para ganar productividad.",
    tone: "mint",
    image: "/projects/cclean.jpg",
  },
];

/**
 * Elastic accordion gallery — hover/tap expands a panel at the expense of
 * its siblings (flex-[4] vs flex-[1]), adapted from a community component
 * the user referenced. No stock imagery and no invented metrics/results —
 * just the real product/client name, category and objective for each.
 * Swap in a real image per project once there's one to show; the
 * interaction itself needs no changes.
 */
export default function ProjectsGallery() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id);

  return (
    <section id="proyectos" className="scroll-mt-28 bg-paper px-5 py-16 text-ink sm:px-8 sm:py-24 lg:px-16">
      <Reveal>
        <Eyebrow>Proyectos</Eyebrow>
        <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[0.95] font-bold tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
          Lo que <span className="text-teal">hemos construido.</span>
        </h2>
        <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
          Productos propios y encargos a medida en los que hemos trabajado.
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
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
                className={`relative cursor-pointer overflow-hidden rounded-2xl border border-ink/15 bg-cover bg-top transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  active ? "flex-[4]" : "flex-[1]"
                } ${dark ? "bg-ink" : "bg-mint"}`}
                style={
                  project.image
                    ? {
                        backgroundImage: `linear-gradient(to top, rgba(20,22,31,0.95), rgba(20,22,31,0.4) 45%, rgba(20,22,31,0.05) 75%), url(${project.image})`,
                      }
                    : undefined
                }
              >
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
                      <TechLabel className="text-paper/85">{project.category}</TechLabel>
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
                      {project.objective}
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
