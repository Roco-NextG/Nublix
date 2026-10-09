/**
 * Todo el copy editable del sitio en vivo (`app/(site)`) vive aquí, agrupado
 * por sección. Los componentes solo leen de este archivo — para cambiar un
 * texto, cámbialo aquí y no en el JSX.
 *
 * (El copy de /propuesta vive aparte, en lib/proposalContent.ts.)
 */

// ─── Global ────────────────────────────────────────────────────────────────

export const CONTACT_EMAIL = "hola@nublix.com"; // placeholder — confirmar el real

export const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/nosotros", label: "Nosotros" },
] as const;

export const STEPS = [
  {
    index: "01",
    title: "Diagnóstico",
    description:
      "Sesión de 2-3h con vuestro equipo + un informe con quick wins. Precio fijo, sin compromiso. Es la puerta de entrada.",
    detail:
      "No entramos a construir sin entender primero qué os frena. En 2-3 horas revisamos con vosotros cómo fluye hoy la información, dónde se pierde tiempo y qué depende de una sola persona. Salís con un informe con quick wins accionables, aunque no sigáis con nosotros después.",
  },
  {
    index: "02",
    title: "Diseño del proceso",
    description:
      "Mapeamos cómo trabaja hoy vuestro equipo antes de tocar una sola línea de código. Primero el proceso, luego la tecnología.",
    detail:
      "Dibujamos el proceso real —no el ideal— con las personas que lo ejecutan cada día. Definimos qué se automatiza, qué se simplifica y qué se queda igual. La tecnología se elige después, en función de lo que el proceso necesita.",
  },
  {
    index: "03",
    title: "Construcción",
    description:
      "Entregas parciales cada semana, con avances que podéis probar. Nunca una caja negra que aparece al final.",
    detail:
      "Trabajamos en ciclos cortos con entregas semanales que podéis tocar y probar. Si algo no encaja con cómo trabajáis de verdad, lo corregimos esa misma semana, no tres meses después.",
  },
  {
    index: "04",
    title: "Entrega y soporte",
    description:
      "Habláis con quien construyó la herramienta, no con un ticket sin nombre. El soporte lo damos nosotros tres.",
    detail:
      "Cuando algo falla o cambia el proceso, escribís directamente a quien lo construyó. Sin capas de soporte, sin tickets que se pierden. Los tres socios seguimos siendo accesibles después de la entrega.",
  },
] as const;

export const SERVICES = [
  {
    index: "01",
    icon: "dashboard",
    title: "Paneles y herramientas internas",
    description:
      "Un panel donde todo el equipo ve los mismos números, sin depender del Excel que solo entiende una persona.",
    detail:
      "Sustituimos la hoja de cálculo que solo entiende una persona por un panel compartido: pedidos, stock, producción o lo que gestionéis hoy a mano, con permisos por rol y datos siempre actualizados.",
  },
  {
    index: "02",
    icon: "automatizacion",
    title: "Automatización de procesos",
    description:
      "Lo que hoy hacéis a mano —copiar datos, mandar el mismo email, revisar hojas— pasa a hacerse solo.",
    detail:
      "Identificamos las tareas repetitivas que se comen horas cada semana —copiar entre hojas, mandar el mismo correo, revisar manualmente— y las convertimos en procesos automáticos con alertas cuando algo necesita a una persona.",
  },
  {
    index: "03",
    icon: "conexion",
    title: "Integraciones y conexión de datos",
    description:
      "Unimos vuestro ERP, la web y el Excel de turno en un solo sitio, sin duplicar el trabajo.",
    detail:
      "Conectamos las herramientas que ya usáis —ERP, web, facturación, ese Excel que nadie quiere tocar— para que los datos viajen solos entre sistemas, sin que nadie tenga que teclearlos dos veces.",
  },
  {
    index: "04",
    icon: "codigo",
    title: "Webs y apps a medida",
    description:
      "Desde la web corporativa hasta la app que necesita producción, construida para vuestro proceso.",
    detail:
      "Diseñamos y construimos desde la web que os representa hasta la app interna que necesita el equipo de producción o comercial, siempre partiendo del proceso real, no de una plantilla genérica.",
  },
  {
    index: "05",
    icon: "cloud",
    title: "Cloud e infraestructura gestionada",
    description:
      "Alojamos y mantenemos lo que construimos. Sin servidores que gestionar ni sustos de última hora.",
    detail:
      "Nos encargamos del alojamiento, las copias de seguridad y las actualizaciones de lo que construimos. Vosotros no tenéis que contratar a nadie para mantenerlo en marcha.",
  },
  {
    index: "06",
    icon: "pagos",
    title: "Sistemas de pago",
    description:
      "Cobros online y facturación conectada, sin que nadie tenga que cruzar hojas a mano.",
    detail:
      "Integramos pasarelas de pago, cobros recurrentes y conciliación con vuestra facturación, para que el dinero entre y quede registrado sin revisión manual.",
  },
  {
    index: "07",
    icon: "iot",
    title: "IoT y sensórica",
    description:
      "Sensores en planta, maquinaria o flota que alimentan vuestro panel en tiempo real.",
    detail:
      "Conectamos sensores y dispositivos —temperatura, maquinaria, flota, stock— directamente a vuestro panel, para sustituir el registro manual por datos en tiempo real.",
  },
] as const;

export const PROMISES = [
  "Sin permanencia",
  "Presupuesto cerrado, sin sorpresas",
  "Habláis con quien construye",
] as const;

// ─── Hero (Home) ───────────────────────────────────────────────────────────

export const HERO = {
  status: "System online",
  coordinates: "Barcelona — 41°23'N 02°10'E",
  title: "Software para empresas que han crecido más rápido que sus procesos.",
  description:
    "Diseñamos y construimos el software que os falta —webs, apps y herramientas internas— partiendo de vuestro proceso, no de la tecnología.",
  tagline: "Webs / Apps / Herramientas internas",
  primaryCta: { href: "/contacto", label: "Cuéntanos tu proceso" },
  secondaryCta: { href: "/metodo", label: "Ver el método" },
  card: { label: "Diagnóstico", value: "2-3h · Precio fijo" },
  scrollHint: "Desplázate",
} as const;

/** Los cuatro actos de la narrativa CHAOS → SYSTEM que el Hero recorre con
 * el scroll (ver components/engine/). Cada uno se corresponde con un estado
 * del "motor" de nodos: disperso → conectado → ordenado → en marcha. */
export const ENGINE_STAGES = [
  {
    index: "01",
    label: "Caos",
    title: "Excel, papel y herramientas desconectadas.",
    body: "Datos dispersos en varias hojas de cálculo y procesos que se rompen si alguien coge vacaciones.",
  },
  {
    index: "02",
    label: "Proceso",
    title: "Empezamos por el proceso, no por la tecnología.",
    body: "Antes de escribir una línea de código, entendemos cómo trabaja de verdad vuestro equipo.",
  },
  {
    index: "03",
    label: "Sistema",
    title: "Lo que hoy hacéis a mano pasa a hacerse solo.",
    body: "Unimos vuestro ERP, la web y el Excel de turno en un solo sitio, sin duplicar el trabajo.",
  },
  {
    index: "04",
    label: "Control",
    title: "Tu proceso ya funciona. Lo hacemos funcionar mejor.",
    body: "Un panel donde todo el equipo ve los mismos números, sin depender del Excel que solo entiende una persona.",
  },
] as const;

// ─── Secciones de la Home ──────────────────────────────────────────────────

export const METHOD_SECTION = {
  eyebrow: "Method",
  title: "Cuatro pasos, siempre en este orden.",
  link: { href: "/metodo", label: "Ver el método completo" },
} as const;

export const SERVICES_SECTION = {
  eyebrow: "Services",
  title: "Software para lo que hoy resolvéis a mano.",
  link: { href: "/servicios", label: "Ver todos los servicios" },
  mapLabel: "Módulos conectados",
} as const;

export const FAQ_SECTION = {
  eyebrow: "FAQ",
  title: "Antes de reservar el diagnóstico.",
} as const;

export const FAQS = [
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

/** CTA final (bloque "Contact"), compartido por todas las páginas. */
export const FINAL_CTA = {
  eyebrow: "Next step",
  title: "Reservemos el diagnóstico.",
  description:
    "2-3 horas con vuestro equipo, un informe con quick wins y precio fijo. Sin letra pequeña.",
  cta: { href: "/contacto", label: "Cuéntanos tu proceso" },
} as const;

// ─── Páginas interiores ────────────────────────────────────────────────────

export const PAGES = {
  metodo: {
    metaTitle: "Método — nublix",
    metaDescription:
      "Los cuatro pasos que seguimos en cada proyecto: diagnóstico, diseño del proceso, construcción y entrega con soporte.",
    eyebrow: "El método Nublix",
    title: "Cuatro pasos, siempre en este orden.",
    description:
      "No vendemos horas de programación sueltas. Cada proyecto sigue el mismo proceso, de principio a fin — pensado para que nunca perdáis de vista qué se está construyendo ni por qué.",
  },
  servicios: {
    metaTitle: "Servicios — nublix",
    metaDescription:
      "Paneles internos, automatización de procesos, integraciones, webs y apps a medida, cloud gestionado. Software para lo que hoy resolvéis a mano.",
    eyebrow: "Servicios",
    title: "Software para lo que hoy resolvéis a mano.",
    description:
      "No vendemos un producto cerrado. Construimos la pieza concreta que os falta, con el resto de vuestro sistema en mente.",
  },
  nosotros: {
    metaTitle: "Nosotros — nublix",
    metaDescription:
      "Nublix es una empresa de desarrollo de software a medida cofundada por 3 socios en Barcelona, para pymes que siguen gestionando su operativa con Excel y herramientas desconectadas.",
    eyebrow: "Nosotros",
    title: "Tres socios en Barcelona, un mismo criterio.",
    description:
      "Nublix nace para las pymes que siguen gestionando su operativa con Excel, papel y herramientas desconectadas. Creamos software a medida que se implanta rápido, se entiende sin formación y crece con la empresa.",
  },
  contacto: {
    metaTitle: "Contacto — nublix",
    metaDescription:
      "Reservad el diagnóstico digital: 2-3 horas con vuestro equipo, un informe con quick wins y precio fijo.",
    eyebrow: "Contacto",
    title: "Reservemos el diagnóstico.",
    description:
      "Escribidnos y os proponemos fecha para la sesión de diagnóstico. Sin letra pequeña.",
  },
} as const;

export const ABOUT = {
  eyebrow: "Por qué existimos",
  title: "Demasiadas pymes dependen de un Excel que solo entiende una persona.",
  body: "Datos dispersos en varias hojas de cálculo, procesos que se rompen si alguien coge vacaciones, malas experiencias con freelancers que desaparecieron o SaaS caros que nadie usa entero. Fundamos Nublix para resolver eso concretamente: software a medida, del equipo que lo construye y lo mantiene.",
  valuesEyebrow: "Principios",
} as const;

export const VALUES = [
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
] as const;

export const CONTACT_PAGE = {
  processEyebrow: "Nublix Diagnostic",
  status: "Status: ready",
  title: "Escribidnos directamente.",
  description:
    "Contadnos en dos líneas qué os gustaría resolver. Os respondemos nosotros, no un formulario automático.",
} as const;

/** Los 4 pasos del proceso de contacto en /contacto. */
export const CONTACT_STEPS = [
  {
    index: "01",
    title: "Tell us how it works",
    description: "Nos contáis cómo funciona hoy vuestro proceso.",
  },
  {
    index: "02",
    title: "We map the process",
    description:
      "Sesión de 2-3h con vuestro equipo, presencial o remota, para dibujarlo.",
  },
  {
    index: "03",
    title: "We find the friction",
    description: "Un informe con quick wins, os quedéis con nosotros o no.",
  },
  {
    index: "04",
    title: "We design the system",
    description: "Precio fijo, cerrado antes de empezar a construir.",
  },
] as const;

// ─── Footer ────────────────────────────────────────────────────────────────

export const FOOTER = {
  homeLabel: "Inicio",
  contactLinkLabel: "Contacto",
  location: "Barcelona / ES",
  legalName: "Nublix Digital Solutions, S.L.",
  navLabel: "Navegación",
  contactLabel: "Contacto",
} as const;
