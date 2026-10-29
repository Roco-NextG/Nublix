// Locale system for the bilingual site (es = default, unprefixed; en = /en).
// Keeps path mapping and shared UI-chrome copy (nav, CTAs, footer, aria
// labels, metadata) in one place — component-level data arrays (services,
// method steps, objections...) stay in lib/content.ts / lib/proposalContent.ts
// with per-field { es, en } values instead, so an array can't drift out of
// sync in length/order between languages.

export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];
export const DEFAULT_LOCALE: Locale = "es";

export const HOME_PATH: Record<Locale, string> = {
  es: "/",
  en: "/en",
};

export const CONTACT_PATH: Record<Locale, string> = {
  es: "/contacto",
  en: "/en/contact",
};

export const PRIVACY_PATH: Record<Locale, string> = {
  es: "/privacidad",
  en: "/en/privacy",
};

export const COOKIES_PATH: Record<Locale, string> = {
  es: "/cookies",
  en: "/en/cookies",
};

/** Derives the current locale from a Next.js pathname (usePathname()). */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

/** The other locale's equivalent of the current page — home maps to home,
 * contact maps to contact. Used by the header's language switcher. */
export function alternatePath(pathname: string): string {
  const locale = localeFromPathname(pathname);
  const other: Locale = locale === "es" ? "en" : "es";
  if (pathname === CONTACT_PATH[locale]) return CONTACT_PATH[other];
  return HOME_PATH[other];
}

export const UI = {
  skipToContent: { es: "Saltar al contenido", en: "Skip to content" },
  logoAriaLabel: { es: "nublix, inicio", en: "nublix, home" },
  openMenu: { es: "Abrir menú", en: "Open menu" },
  closeMenu: { es: "Cerrar menú", en: "Close menu" },
  languageSwitcherLabel: { es: "Cambiar a English", en: "Switch to Español" },
  primaryCta: { es: "Cuéntanos tu proceso", en: "Tell us about your process" },
  secondaryCta: { es: "Ver el método", en: "See the method" },
  footerLead: { es: "Hablemos de tu proceso", en: "Let's talk about your process" },
  footerHeadline: {
    es: "Software a medida para empresas que han crecido más rápido que sus procesos.",
    en: "Custom software for businesses that have outgrown their processes.",
  },
  footerNavLabel: { es: "Navegación", en: "Navigation" },
  footerCompanyLabel: { es: "Compañía", en: "Company" },
  footerContactLabel: { es: "Contacto", en: "Contact" },
  footerContactLink: { es: "Contacto", en: "Contact" },
  footerLocation: { es: "Barcelona, España", en: "Barcelona, Spain" },
  footerCopyright: {
    es: "Nublix Digital Solutions, S.L. Todos los derechos reservados.",
    en: "Nublix Digital Solutions, S.L. All rights reserved.",
  },
  footerPrivacyLink: { es: "Privacidad", en: "Privacy" },
  footerCookiesLink: { es: "Cookies", en: "Cookies" },
  cookieBannerText: {
    es: "Usamos Microsoft Clarity para entender cómo navegáis por la web (sesiones agregadas, mapas de calor de clics y scroll). No se activa hasta que lo aceptéis.",
    en: "We use Microsoft Clarity to understand how you use the site (aggregate sessions, click and scroll heatmaps). It doesn't activate until you accept.",
  },
  cookieBannerLearnMore: { es: "Más información", en: "Learn more" },
  cookieBannerReject: { es: "Rechazar", en: "Decline" },
  cookieBannerAccept: { es: "Aceptar", en: "Accept" },
} as const satisfies Record<string, Record<Locale, string>>;

export const SECTIONS: { href: string; label: Record<Locale, string> }[] = [
  { href: "#metodo", label: { es: "Método", en: "Method" } },
  { href: "#servicios", label: { es: "Servicios", en: "Services" } },
  { href: "#proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "#faq", label: { es: "FAQ", en: "FAQ" } },
] as const;

export const METADATA = {
  home: {
    title: {
      es: "Nublix: software a medida para empresas en Barcelona",
      en: "Nublix: Custom Software for Businesses in Barcelona",
    },
    description: {
      es: "Diseñamos y construimos el software que os falta: webs, apps y herramientas internas, partiendo de vuestro proceso de negocio, no de la tecnología.",
      en: "We design and build the software you're missing: websites, apps, and internal tools, starting from your business process, not the technology.",
    },
  },
  contact: {
    title: {
      es: "Contacto: reserva tu llamada gratuita | Nublix",
      en: "Contact: Book Your Free Call | Nublix",
    },
    description: {
      es: "Reservad una llamada de 30 minutos, sin coste ni compromiso, para ver si encajamos.",
      en: "Book a free, no-commitment 30-minute call to see if we're a fit.",
    },
  },
  privacy: {
    title: {
      es: "Política de privacidad | Nublix",
      en: "Privacy Policy | Nublix",
    },
    description: {
      es: "Cómo tratamos los datos que nos enviáis por email en Nublix Digital Solutions, S.L.",
      en: "How Nublix Digital Solutions, S.L. handles the data you send us by email.",
    },
  },
  cookies: {
    title: {
      es: "Política de cookies | Nublix",
      en: "Cookie Policy | Nublix",
    },
    description: {
      es: "Qué cookies usa este sitio web de Nublix, incluida Microsoft Clarity, y para qué sirven.",
      en: "What cookies this Nublix website uses, including Microsoft Clarity, and what they're for.",
    },
  },
} as const;

export const SITE_URL = "https://nublix.es";
