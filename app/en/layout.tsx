import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ClarityScript from "@/components/ClarityScript";
import Header2 from "@/components/proposal2/Header2";
import Footer2 from "@/components/proposal2/Footer2";
import OrganizationSchema from "@/components/system/OrganizationSchema";
import { METADATA, SITE_URL, UI } from "@/lib/i18n";
import "../globals.css";

/**
 * English root layout — a second, independent root layout alongside
 * app/(es)/layout.tsx (see that file's comment for why two root layouts
 * exist: each needs its own <html lang>, which a single shared layout
 * can't vary per-route in the App Router). Content is identical in
 * structure; only `lang` and the metadata/UI strings differ.
 */
const inter = Inter({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: METADATA.home.title.en,
  description: METADATA.home.description.en,
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: METADATA.home.title.en,
    description: METADATA.home.description.en,
    url: "/en",
    siteName: "Nublix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.home.title.en,
    description: METADATA.home.description.en,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full`}
      style={{ "--font-space-mono": "var(--font-space-grotesk)" } as React.CSSProperties}
    >
      <body className="min-h-full bg-paper text-ink antialiased">
        <ClarityScript />
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:font-mono focus:text-[13px] focus:text-ink focus:uppercase"
        >
          {UI.skipToContent.en}
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
