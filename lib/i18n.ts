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
  logoAriaLabel: { es: "nublix — inicio", en: "nublix — home" },
  openMenu: { es: "Abrir menú", en: "Open menu" },
  closeMenu: { es: "Cerrar menú", en: "Close menu" },
  languageSwitcherLabel: { es: "English", en: "Español" },
  primaryCta: { es: "Cuéntanos tu proceso", en: "Tell us about your process" },
  secondaryCta: { es: "Ver el método", en: "See the method" },
  heroSrOnlyTitle: {
    es: "Nublix — software a medida para pymes",
    en: "Nublix — custom software for SMEs",
  },
  footerLead: { es: "Hablemos de tu proceso", en: "Let's talk about your process" },
  footerHeadline: {
    es: "Software a medida para pymes que han crecido más rápido que sus procesos.",
    en: "Custom software for SMEs that have outgrown their processes.",
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
} as const satisfies Record<string, Record<Locale, string>>;

export const SECTIONS: { href: string; label: Record<Locale, string> }[] = [
  { href: "#metodo", label: { es: "Método", en: "Method" } },
  { href: "#servicios", label: { es: "Servicios", en: "Services" } },
  { href: "#proyectos", label: { es: "Proyectos", en: "Projects" } },
  { href: "#dudas", label: { es: "Dudas", en: "FAQ" } },
] as const;

export const METADATA = {
  home: {
    title: {
      es: "Nublix — Software a medida para pymes en Barcelona",
      en: "Nublix — Custom Software for SMEs in Barcelona",
    },
    description: {
      es: "Diseñamos y construimos el software que os falta — webs, apps y herramientas internas — partiendo de vuestro proceso de negocio, no de la tecnología.",
      en: "We design and build the software you're missing — websites, apps, and internal tools — starting from your business process, not the technology.",
    },
  },
  contact: {
    title: {
      es: "Contacto — Reserva tu diagnóstico | Nublix",
      en: "Contact — Book Your Diagnosis | Nublix",
    },
    description: {
      es: "Reservad el diagnóstico digital: 2-3 horas con vuestro equipo, un informe con quick wins y precio fijo.",
      en: "Book your digital diagnosis: 2-3 hours with your team, a quick-wins report, and a fixed price.",
    },
  },
} as const;

export const SITE_URL = "https://nublix.com";
