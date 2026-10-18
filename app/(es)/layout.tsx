import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CookieConsent from "@/components/CookieConsent";
import Header2 from "@/components/proposal2/Header2";
import Footer2 from "@/components/proposal2/Footer2";
import OrganizationSchema from "@/components/system/OrganizationSchema";
import { METADATA, SITE_URL, UI } from "@/lib/i18n";
import "../globals.css";

/**
 * Inter is the site's one typeface — shadowed onto --font-space-grotesk /
 * --font-space-mono (the variables globals.css's `@theme inline` actually
 * bakes into every compiled utility) rather than introducing new token
 * names, so every existing `font-display`/`font-mono`-driven utility class
 * just resolves to Inter without touching globals.css's theme block.
 *
 * This is the Spanish root layout — paired with app/en/layout.tsx as a
 * second, independent root layout (via the (es) route group, which keeps
 * the default locale unprefixed at `/`). Each renders its own <html lang>,
 * which a single shared root layout can't do per-route in the App Router.
 */
const inter = Inter({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: METADATA.home.title.es,
  description: METADATA.home.description.es,
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: METADATA.home.title.es,
    description: METADATA.home.description.es,
    url: "/",
    siteName: "Nublix",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.home.title.es,
    description: METADATA.home.description.es,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full`}
      style={{ "--font-space-mono": "var(--font-space-grotesk)" } as React.CSSProperties}
    >
      <body className="min-h-full bg-paper text-ink antialiased">
        <CookieConsent />
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:font-mono focus:text-[13px] focus:text-ink focus:uppercase"
        >
          {UI.skipToContent.es}
        </a>
        <SmoothScrollProvider>
          <Header2 />
          <main id="main-content">{children}</main>
          <Footer2 />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
