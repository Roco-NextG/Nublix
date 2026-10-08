import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MethodFull from "@/components/MethodFull";
import Contact from "@/components/Contact";
import SectionSeam from "@/components/system/SectionSeam";

export const metadata: Metadata = {
  title: "Método — nublix",
  description:
    "Los cuatro pasos que seguimos en cada proyecto: diagnóstico, diseño del proceso, construcción y entrega con soporte.",
};

export default function MetodoPage() {
  return (
    <>
      <PageHero
        eyebrow="El método Nublix"
        title="Cuatro pasos, siempre en este orden."
        description="No vendemos horas de programación sueltas. Cada proyecto sigue el mismo proceso, de principio a fin — pensado para que nunca perdáis de vista qué se está construyendo ni por qué."
      />
      <SectionSeam tone="onDark" />
      <MethodFull />
      <SectionSeam tone="onLight" />
      <Contact />
    </>
  );
}
