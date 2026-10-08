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
