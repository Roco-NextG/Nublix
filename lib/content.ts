import type { Locale } from "./i18n";

// NAV_LINKS and STEPS below are leftover from the old single-page-per-route
// site structure and are no longer imported anywhere (propuesta2 uses its
// own in-page SECTIONS/METHOD_STEPS) — left as-is, not part of the bilingual
// pass since nothing renders them.
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

type LocalizedService = {
  index: string;
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  detail: Record<Locale, string>;
};

export const SERVICES: LocalizedService[] = [
  {
    index: "01",
    icon: "dashboard",
    title: { es: "Paneles y herramientas internas", en: "Dashboards and internal tools" },
    description: {
      es: "Un panel donde todo el equipo ve los mismos números, sin depender del Excel que solo entiende una persona.",
      en: "One dashboard where the whole team sees the same numbers, instead of relying on the spreadsheet only one person understands.",
    },
    detail: {
      es: "Sustituimos la hoja de cálculo que solo entiende una persona por un panel compartido: pedidos, stock, producción o lo que gestionéis hoy a mano, con permisos por rol y datos siempre actualizados.",
      en: "We replace the spreadsheet only one person understands with a shared dashboard: orders, stock, production, or whatever you manage by hand today, with role-based permissions and always-current data.",
    },
  },
  {
    index: "02",
    icon: "automatizacion",
    title: { es: "Automatización de procesos", en: "Process automation" },
    description: {
      es: "Lo que hoy hacéis a mano (copiar datos, mandar el mismo email, revisar hojas) pasa a hacerse solo.",
      en: "What you do by hand today (copying data, sending the same email, checking spreadsheets) starts happening on its own.",
    },
    detail: {
      es: "Identificamos las tareas repetitivas que se comen horas cada semana (copiar entre hojas, mandar el mismo correo, revisar manualmente) y las convertimos en procesos automáticos con alertas cuando algo necesita a una persona.",
      en: "We find the repetitive tasks eating hours every week (copying between sheets, sending the same email, manual checks) and turn them into automatic processes, with alerts when something actually needs a person.",
    },
  },
  {
    index: "03",
    icon: "conexion",
    title: { es: "Integraciones y conexión de datos", en: "Integrations and data connections" },
    description: {
      es: "Unimos vuestro ERP, la web y el Excel de turno en un solo sitio, sin duplicar el trabajo.",
      en: "We bring your ERP, website, and that one spreadsheet into a single place, with no duplicated work.",
    },
    detail: {
      es: "Conectamos las herramientas que ya usáis (ERP, web, facturación, ese Excel que nadie quiere tocar) para que los datos viajen solos entre sistemas, sin que nadie tenga que teclearlos dos veces.",
      en: "We connect the tools you already use (ERP, website, invoicing, that spreadsheet nobody wants to touch) so data moves between systems on its own, without anyone typing it twice.",
    },
  },
  {
    index: "04",
    icon: "codigo",
    title: { es: "Webs y apps a medida", en: "Custom websites and apps" },
    description: {
      es: "Desde la web corporativa hasta la app que necesita producción, construida para vuestro proceso.",
      en: "From your corporate website to the app your production team needs, built around your process.",
    },
    detail: {
      es: "Diseñamos y construimos desde la web que os representa hasta la app interna que necesita el equipo de producción o comercial, siempre partiendo del proceso real, no de una plantilla genérica.",
      en: "We design and build everything from the website that represents you to the internal app your production or sales team needs, always starting from the real process, never a generic template.",
    },
  },
  {
    index: "05",
    icon: "cloud",
    title: { es: "Cloud e infraestructura gestionada", en: "Cloud and managed infrastructure" },
    description: {
      es: "Alojamos y mantenemos lo que construimos. Sin servidores que gestionar ni sustos de última hora.",
      en: "We host and maintain what we build. No servers to manage, no last-minute surprises.",
    },
    detail: {
      es: "Nos encargamos del alojamiento, las copias de seguridad y las actualizaciones de lo que construimos. Vosotros no tenéis que contratar a nadie para mantenerlo en marcha.",
      en: "We take care of hosting, backups, and updates for everything we build. You don't need to hire anyone to keep it running.",
    },
  },
  {
    index: "06",
    icon: "pagos",
    title: { es: "Sistemas de pago", en: "Payment systems" },
    description: {
      es: "Cobros online y facturación conectada, sin que nadie tenga que cruzar hojas a mano.",
      en: "Online payments and connected invoicing, with no one cross-checking spreadsheets by hand.",
    },
    detail: {
      es: "Integramos pasarelas de pago, cobros recurrentes y conciliación con vuestra facturación, para que el dinero entre y quede registrado sin revisión manual.",
      en: "We integrate payment gateways, recurring billing, and reconciliation with your invoicing, so money comes in and gets recorded without manual review.",
    },
  },
  {
    index: "07",
    icon: "iot",
    title: { es: "IoT y sensórica", en: "IoT and sensors" },
    description: {
      es: "Sensores en planta, maquinaria o flota que alimentan vuestro panel en tiempo real.",
      en: "Sensors on your floor, machinery, or fleet that feed your dashboard in real time.",
    },
    detail: {
      es: "Conectamos sensores y dispositivos (temperatura, maquinaria, flota, stock) directamente a vuestro panel, para sustituir el registro manual por datos en tiempo real.",
      en: "We connect sensors and devices (temperature, machinery, fleet, stock) directly to your dashboard, replacing manual logging with real-time data.",
    },
  },
];

export const PROMISES: Record<Locale, string[]> = {
  es: ["Sin permanencia", "Presupuesto cerrado, sin sorpresas", "Habláis con quien construye"],
  en: ["No commitment", "Fixed budget, no surprises", "You talk to the people who build it"],
};
