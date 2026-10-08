import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import Contact from "@/components/Contact";
import SectionSeam from "@/components/system/SectionSeam";

export const metadata: Metadata = {
  title: "Nosotros — nublix",
  description:
    "Nublix es una empresa de desarrollo de software a medida cofundada por 3 socios en Barcelona, para pymes que siguen gestionando su operativa con Excel y herramientas desconectadas.",
};

const VALUES = [
  {
    index: "01",
    title: "Empezamos por el proceso, no por la tecnología",
    description:
      "Antes de escribir una línea de código, entendemos cómo trabaja de verdad vuestro equipo. La herramienta se diseña para encajar ahí, no al revés.",
  },
  {
    index: "02",
    title: "Precio cerrado, sin sorpresas",
    description:
      "Sabéis lo que pagáis desde el diagnóstico. Sin horas sueltas que se acumulan ni presupuestos que crecen a mitad de proyecto.",
  },
  {
    index: "03",
    title: "Sin permanencia",
    description:
      "Os quedáis porque el software funciona, no porque haya un contrato que os ata. Si algo no va, lo decimos primero nosotros.",
  },
  {
    index: "04",
    title: "Hablas con quien construye",
    description:
      "No hay capas de gestión entre vosotros y el equipo técnico. Los tres socios seguimos siendo accesibles después de la entrega.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Tres socios en Barcelona, un mismo criterio."
        description="Nublix nace para las pymes que siguen gestionando su operativa con Excel, papel y herramientas desconectadas. Creamos software a medida que se implanta rápido, se entiende sin formación y crece con la empresa."
      />

      <SectionSeam tone="onDark" />

      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Por qué existimos</Eyebrow>
            <h2 className="mt-5 max-w-[24ch] text-[28px] leading-[1.05] font-medium tracking-[-0.02em] text-ink sm:text-[42px]">
              Demasiadas pymes dependen de un Excel que solo entiende una
              persona.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-relaxed text-ink/60 sm:text-[17px]">
              Datos dispersos en varias hojas de cálculo, procesos que se
              rompen si alguien coge vacaciones, malas experiencias con
              freelancers que desaparecieron o SaaS caros que nadie usa
              entero. Fundamos Nublix para resolver eso concretamente:
              software a medida, del equipo que lo construye y lo mantiene.
            </p>
          </Reveal>

          <Reveal stagger className="mt-16 border-t border-dashed border-ink/10">
            {VALUES.map((value) => (
              <div
                key={value.index}
                className="group flex flex-col gap-2 border-b border-dashed border-ink/10 py-7 transition-transform duration-200 ease-out sm:flex-row sm:items-baseline sm:gap-10 sm:py-9 sm:hover:translate-x-2"
              >
                <span className="font-mono text-[13px] text-teal">
                  {value.index}
                </span>
                <h3 className="text-[21px] font-medium tracking-[-0.01em] text-ink sm:w-[26ch] sm:shrink-0 sm:text-[24px]">
                  {value.title}
                </h3>
                <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink/55">
                  {value.description}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SectionSeam tone="onLight" />

      <Contact />
    </>
  );
}
