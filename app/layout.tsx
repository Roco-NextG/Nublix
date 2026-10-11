import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Header2 from "@/components/proposal2/Header2";
import Footer2 from "@/components/proposal2/Footer2";
import "./globals.css";

/**
 * Inter is the site's one typeface — shadowed onto --font-space-grotesk /
 * --font-space-mono (the variables globals.css's `@theme inline` actually
 * bakes into every compiled utility) rather than introducing new token
 * names, so every existing `font-display`/`font-mono`-driven utility class
 * just resolves to Inter without touching globals.css's theme block.
 */
const inter = Inter({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "nublix — software a medida para pymes",
  description:
    "Diseñamos y construimos el software que os falta — webs, apps y herramientas internas — partiendo de vuestro proceso de negocio, no de la tecnología.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full`}
      style={{ "--font-space-mono": "var(--font-space-grotesk)" } as React.CSSProperties}
    >
      <body className="min-h-full bg-paper text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:font-mono focus:text-[13px] focus:text-ink focus:uppercase"
        >
          Saltar al contenido
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
