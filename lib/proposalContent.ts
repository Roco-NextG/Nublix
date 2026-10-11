import type { Locale } from "./i18n";

// PROBLEM_POINTS below is leftover from an earlier exploration and isn't
// imported anywhere — left as-is, not part of the bilingual pass.
export const PROBLEM_POINTS = [
  "Datos dispersos entre Excel, papel y correos",
  "Horas perdidas cada semana en tareas manuales",
  "Software genérico que no encaja con el proceso",
  "Web que no refleja la empresa ni genera contactos",
  "Malas experiencias con proveedores anteriores",
] as const;

type LocalizedStep = {
  index: string;
  title: Record<Locale, string>;
  lead: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const METHOD_STEPS: LocalizedStep[] = [
  {
    index: "01",
    title: { es: "Diagnóstico", en: "Diagnosis" },
    lead: { es: "2-3h con tu equipo. Precio fijo.", en: "2-3h with your team. Fixed price." },
    description: {
      es: "Nos sentamos contigo y tu equipo para entender cómo trabajáis hoy, dónde se pierde el tiempo y qué datos necesitas de verdad. Sales con un informe de mejoras rápidas y una hoja de ruta — aunque no sigas con nosotros.",
      en: "We sit down with you and your team to understand how you work today, where time gets lost, and what data you actually need. You walk away with a quick-wins report and a roadmap — even if you don't continue with us.",
    },
  },
  {
    index: "02",
    title: { es: "Diseño y precio cerrado", en: "Design and fixed price" },
    lead: {
      es: "Prototipo navegable antes de programar.",
      en: "A clickable prototype before we write code.",
    },
    description: {
      es: "Diseñamos un prototipo navegable de la solución para que la veas antes de que se escriba una sola línea de código. Te damos alcance, plazos y precio cerrados, por escrito.",
      en: "We design a clickable prototype of the solution so you can see it before a single line of code is written. You get scope, timeline, and price in writing, locked in.",
    },
  },
  {
    index: "03",
    title: { es: "Construcción por entregas", en: "Build in sprints" },
    lead: { es: "Ciclos de dos semanas.", en: "Two-week cycles." },
    description: {
      es: "Desarrollamos en ciclos cortos y te enseñamos avances reales que puedes tocar y probar cada dos semanas. Nada de cajas negras ni sorpresas al final.",
      en: "We build in short cycles and show you real progress you can touch and test every two weeks. No black boxes, no surprises at the end.",
    },
  },
  {
    index: "04",
    title: { es: "Implantación y evolución", en: "Rollout and evolution" },
    lead: { es: "Formación + mantenimiento.", en: "Training + maintenance." },
    description: {
      es: "Ponemos la herramienta en marcha, formamos a tu equipo y nos quedamos contigo con un plan de mantenimiento y mejora continua.",
      en: "We launch the tool, train your team, and stay with you with an ongoing maintenance and improvement plan.",
    },
  },
];

export const DIFFERENTIATORS: Record<Locale, string[]> = {
  es: [
    "Empezamos por vuestro proceso, no por la tecnología",
    "Precio cerrado y por escrito desde el diagnóstico",
    "Habláis con quien construye la herramienta, no con un ticket sin nombre",
    "Tres socios, código y documentación vuestros desde el primer día",
  ],
  en: [
    "We start with your process, not the technology",
    "Fixed price in writing from the diagnosis onward",
    "You talk to the people building the tool, not a nameless support ticket",
    "Three partners, with your code and documentation yours from day one",
  ],
};

type LocalizedObjection = {
  index: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const OBJECTIONS: LocalizedObjection[] = [
  {
    index: "01",
    title: { es: "¿No es muy caro el software a medida?", en: "Isn't custom software expensive?" },
    description: {
      es: "Empezamos por un diagnóstico de bajo coste y proyectos por fases. Calculamos juntos el ahorro en horas para que veas el retorno antes de decidir nada más.",
      en: "We start with a low-cost diagnosis and phased projects. We calculate the time saved together so you see the return before deciding anything else.",
    },
  },
  {
    index: "02",
    title: {
      es: "No tengo tiempo para meterme en un proyecto así",
      en: "I don't have time for a project like this",
    },
    description: {
      es: "Te pedimos pocas horas: un diagnóstico inicial y revisiones cortas cada dos semanas. Del resto nos ocupamos nosotros.",
      en: "We only need a few hours from you: an initial diagnosis and short check-ins every two weeks. We handle the rest.",
    },
  },
  {
    index: "03",
    title: {
      es: "Ya lo intenté con un freelance o una agencia y salió mal",
      en: "I already tried a freelancer or agency and it went badly",
    },
    description: {
      es: "Precio cerrado, entregas visibles cada dos semanas, y código y documentación tuyos desde el primer día — no desde el final del proyecto.",
      en: "Fixed price, visible deliveries every two weeks, and your code and documentation are yours from day one — not just at the end of the project.",
    },
  },
  {
    index: "04",
    title: {
      es: "Sois una empresa pequeña, ¿y si desaparecéis?",
      en: "You're a small company — what if you disappear?",
    },
    description: {
      es: "Somos tres socios, con documentación completa y un contrato de mantenimiento. No dependéis de una sola persona para que la herramienta siga funcionando.",
      en: "We're three partners, with complete documentation and a maintenance agreement. You don't depend on a single person to keep the tool running.",
    },
  },
  {
    index: "05",
    title: {
      es: "Mi equipo no va a usar una herramienta nueva — ya lo intentamos",
      en: "My team won't use a new tool — we've tried before",
    },
    description: {
      es: "Diseñamos con quien va a usarla desde el primer día, no después. Una herramienta pensada para quien la usa, se usa.",
      en: "We design with the people who'll actually use it from day one, not afterward. A tool built for its users gets used.",
    },
  },
];

export const MARKET_CONTEXT: Record<Locale, string[]> = {
  es: [
    "La facturación electrónica obligatoria (Verifactu, Ley Crea y Crece) está empujando a las pymes a revisar cómo gestionan sus datos.",
    "Las ayudas del Kit Digital se han ido cerrando — muchas pymes se quedaron con una web o un CRM genérico que no resolvió el fondo del problema.",
    "La IA está en boca de todos, pero la mayoría de gerentes no sabe por dónde empezar ni en quién confiar.",
    "Cuesta encontrar y retener talento — lo que hace más valioso automatizar las tareas repetitivas que nadie quiere hacer.",
  ],
  en: [
    "Mandatory e-invoicing (Verifactu, Spain's Crea y Crece law) is pushing SMEs to rethink how they manage their data.",
    "Spain's Kit Digital grants have been winding down — many SMEs were left with a generic website or CRM that never solved the real problem.",
    "AI is on everyone's lips, but most owners don't know where to start or who to trust.",
    "Finding and keeping talent is hard — which makes it more valuable to automate the repetitive tasks nobody wants to do.",
  ],
};
