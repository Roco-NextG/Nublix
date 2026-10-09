import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MethodFull from "@/components/MethodFull";
import Contact from "@/components/Contact";
import SectionSeam from "@/components/system/SectionSeam";
import { PAGES } from "@/lib/content";

const page = PAGES.metodo;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function MetodoPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        seed={3}
      />
      <SectionSeam tone="onDark" />
      <MethodFull />
      <SectionSeam tone="onLight" />
      <Contact />
    </>
  );
}
