import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";

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
];

export default function Faq() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[1] font-medium tracking-[-0.02em] text-ink sm:text-[48px]">
            Antes de reservar el diagnóstico.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-12 border-t border-dashed border-ink/10 sm:mt-16">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-dashed border-ink/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden sm:py-7">
                <span className="text-[18px] font-medium tracking-[-0.01em] text-ink transition-transform duration-200 ease-out sm:text-[21px] sm:group-hover:translate-x-2">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className="h-[7px] w-[7px] shrink-0 rounded-full border border-teal opacity-40 transition-opacity duration-150 ease-out group-open:bg-teal group-open:opacity-100"
                />
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="max-w-[62ch] pb-7 text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
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
