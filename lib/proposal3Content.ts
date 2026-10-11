// Copy + data for /propuesta3 v2 ("enterprise trust, en calma" — pivoted
// after the user rejected the diagonal v1 and pointed to indicium.ai).
// Facts are grounded in Cliente_ideal.docx, Tu_servicio.docx y
// Analisis_competencia.docx. No client logos, no invented metrics — see
// PRODUCT.md "Evidence on Hand".

export const HERO_COPY = {
  eyebrow: "Software a medida · Barcelona",
  headline: "Software para empresas que han crecido más rápido que sus procesos.",
  sub: "Diseñamos y construimos el software que os falta —webs, apps y herramientas internas— partiendo de vuestro proceso, no de la tecnología.",
  ctaPrimary: "Cuéntanos tu proceso",
  ctaSecondary: "Ver el método",
  trustLine: "Sin permanencia · Presupuesto cerrado, sin sorpresas · Habláis con quien construye",
};

/** The validated "1 Big Thing" from Tu_servicio.docx, split into short
 * phrases for the word-by-word scroll reveal — Indicium's signature
 * mechanic, carrying this surface's actual strategic hook instead of
 * decoration. */
export const STATEMENT =
  "Tu empresa no necesita más Excel ni otro programa genérico. Necesita una herramienta hecha a la medida de cómo trabajáis — y es más accesible de lo que crees.";

export const PILLARS = [
  {
    index: "01",
    title: "Empezamos por tu proceso",
    description:
      "Mapeamos cómo trabaja hoy tu equipo antes de tocar una sola línea de código. La tecnología se elige después, en función de lo que el proceso necesita.",
  },
  {
    index: "02",
    title: "Precio cerrado, sin sorpresas",
    description:
      "Diagnóstico con precio fijo, alcance y presupuesto cerrados por escrito antes de empezar a construir. Sin horas sueltas que se acumulan.",
  },
  {
    index: "03",
    title: "Hablas con quien construye",
    description:
      "Sin ticket sin nombre ni capas de soporte. Los tres socios seguimos siendo accesibles después de la entrega.",
  },
] as const;

export const METHOD_STEPS = [
  {
    index: "01",
    title: "Diagnóstico",
    lead: "2-3h con tu equipo. Precio fijo.",
    description:
      "Nos sentamos contigo y tu equipo para entender cómo trabajáis hoy, dónde se pierde el tiempo y qué datos necesitas de verdad. Sales con un informe de mejoras rápidas y una hoja de ruta — aunque no sigas con nosotros.",
  },
  {
    index: "02",
    title: "Diseño y precio cerrado",
    lead: "Prototipo navegable antes de programar.",
    description:
      "Diseñamos un prototipo navegable de la solución para que la veas antes de que se escriba una sola línea de código. Te damos alcance, plazos y precio cerrados, por escrito.",
  },
  {
    index: "03",
    title: "Construcción por entregas",
    lead: "Ciclos de dos semanas.",
    description:
      "Desarrollamos en ciclos cortos y te enseñamos avances reales que puedes tocar y probar cada dos semanas. Nada de cajas negras ni sorpresas al final.",
  },
  {
    index: "04",
    title: "Implantación y evolución",
    lead: "Formación + mantenimiento.",
    description:
      "Ponemos la herramienta en marcha, formamos a tu equipo y nos quedamos contigo con un plan de mantenimiento y mejora continua.",
  },
] as const;

/** Replaces the stats-grid pattern (Indicium's "600+ experts, 50+ clients")
 * with real, honest process facts — Nublix has no clients or metrics to
 * show yet, so the same visual rhythm carries verifiable commitments
 * instead of fabricated numbers. */
export const PROCESS_FACTS = [
  { value: "2-3H", label: "Diagnóstico inicial, precio fijo" },
  { value: "2", label: "Semanas por ciclo de entrega" },
  { value: "3", label: "Socios — sin subcontratas" },
  { value: "0", label: "Permanencia obligatoria" },
] as const;

export const OBJECTIONS = [
  {
    index: "01",
    title: "¿No es muy caro el software a medida?",
    description:
      "Empezamos por un diagnóstico de bajo coste y proyectos por fases. Calculamos juntos el ahorro en horas para que veas el retorno antes de decidir nada más.",
  },
  {
    index: "02",
    title: "No tengo tiempo para meterme en un proyecto así",
    description:
      "Te pedimos pocas horas: un diagnóstico inicial y revisiones cortas cada dos semanas. Del resto nos ocupamos nosotros.",
  },
  {
    index: "03",
    title: "Ya lo intenté con un freelance o una agencia y salió mal",
    description:
      "Precio cerrado, entregas visibles cada dos semanas, y código y documentación tuyos desde el primer día — no desde el final del proyecto.",
  },
  {
    index: "04",
    title: "Sois una empresa pequeña, ¿y si desaparecéis?",
    description:
      "Somos tres socios, con documentación completa y un contrato de mantenimiento. No dependéis de una sola persona para que la herramienta siga funcionando.",
  },
  {
    index: "05",
    title: "Mi equipo no va a usar una herramienta nueva — ya lo intentamos",
    description:
      "Diseñamos con quien va a usarla desde el primer día, no después. Una herramienta pensada para quien la usa, se usa.",
  },
  {
    index: "06",
    title: "¿Cuánto tarda un proyecto?",
    description:
      "Depende del alcance que salga del diagnóstico. Trabajamos con entregas parciales cada dos semanas, así que veis avances reales desde el principio, no solo al final.",
  },
] as const;
