// Copy for /propuesta — grounded in Cliente_ideal.docx, Tu_servicio.docx y
// Analisis_competencia.docx. Vive aparte de lib/content.ts (el sitio en
// vivo) para no tocar copy ya validado mientras se explora esta dirección.

export const PROBLEM_POINTS = [
  "Datos dispersos entre Excel, papel y correos",
  "Horas perdidas cada semana en tareas manuales",
  "Software genérico que no encaja con el proceso",
  "Web que no refleja la empresa ni genera contactos",
  "Malas experiencias con proveedores anteriores",
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

export const DIFFERENTIATORS = [
  "Empezamos por vuestro proceso, no por la tecnología",
  "Precio cerrado y por escrito desde el diagnóstico",
  "Habláis con quien construye la herramienta, no con un ticket sin nombre",
  "Tres socios, código y documentación vuestros desde el primer día",
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
] as const;

export const MARKET_CONTEXT = [
  "La facturación electrónica obligatoria (Verifactu, Ley Crea y Crece) está empujando a las pymes a revisar cómo gestionan sus datos.",
  "Las ayudas del Kit Digital se han ido cerrando — muchas pymes se quedaron con una web o un CRM genérico que no resolvió el fondo del problema.",
  "La IA está en boca de todos, pero la mayoría de gerentes no sabe por dónde empezar ni en quién confiar.",
  "Cuesta encontrar y retener talento — lo que hace más valioso automatizar las tareas repetitivas que nadie quiere hacer.",
] as const;
