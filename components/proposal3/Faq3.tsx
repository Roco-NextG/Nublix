import Reveal from "@/components/system/Reveal";
import Eyebrow3 from "./Eyebrow3";

const FAQS = [
  {
    q: "¿Trabajáis con pymes pequeñas?",
    a: "Sí. Solemos trabajar con pymes industriales o de servicios de entre 10 y 100 empleados, pero no es un requisito estricto — lo que importa es que tengáis un proceso real que resolver, no el tamaño de la empresa.",
  },
  {
    q: "¿Qué incluye el diagnóstico?",
    a: "Una sesión de 2-3h con vuestro equipo y un informe con quick wins al final, precio fijo. Es la puerta de entrada, no un compromiso a construir nada.",
  },
  {
    q: "¿Qué pasa si no seguimos después del diagnóstico?",
    a: "Os quedáis con el informe igualmente. No hay permanencia ni letra pequeña — si decidís no continuar, no pasa nada.",
  },
  {
    q: "¿Cómo se calcula el precio?",
    a: "Precio cerrado, definido después del diagnóstico y antes de empezar a construir. Sin horas sueltas que se acumulan ni presupuestos que crecen a mitad de proyecto.",
  },
  {
    q: "¿Dais soporte después de la entrega?",
    a: "Sí. Habláis directamente con quien construyó la herramienta, no con un ticket sin nombre. El soporte lo damos los tres socios.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance que salga del diagnóstico. Trabajamos con entregas parciales cada semana, así que veis avances reales desde la primera semana, no solo al final.",
  },
] as const;

export default function Faq3() {
  return (
    <section id="dudas" className="scroll-mt-20 bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[840px]">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow3 tone="onLight">Dudas</Eyebrow3>
          <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[1.1] font-medium tracking-[-0.015em] sm:text-[44px]">
            Antes de reservar el diagnóstico.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-14 border-t border-ink/10">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-ink/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
                <span className="text-[16px] font-medium tracking-[-0.01em] sm:text-[18px]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-[18px] leading-none text-teal transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="max-w-[62ch] pb-7 text-[14px] leading-relaxed text-ink/55 sm:text-[15px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
