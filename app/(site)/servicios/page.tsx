import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesFull from "@/components/ServicesFull";
import Contact from "@/components/Contact";
import { PAGES } from "@/lib/content";

const page = PAGES.servicios;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        seed={19}
      />
      <ServicesFull />
      <Contact />
    </>
  );
}
