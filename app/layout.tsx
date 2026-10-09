import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full bg-ink text-paper antialiased">
        {/* Without JS nothing can reveal or drive the engine: show every
            Reveal block as-is and let the pinned Hero collapse to its copy. */}
        <noscript>
          <style>{`[data-reveal],.reveal-stagger>*{opacity:1!important;clip-path:none!important}.hero-engine{height:auto!important}.hero-engine .engine-motion-only{display:none!important}`}</style>
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:font-mono focus:text-[13px] focus:text-ink focus:uppercase"
        >
          Saltar al contenido
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
