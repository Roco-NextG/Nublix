import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesFull from "@/components/ServicesFull";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Servicios — nublix",
  description:
    "Paneles internos, automatización de procesos, integraciones, webs y apps a medida, cloud gestionado. Software para lo que hoy resolvéis a mano.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Software para lo que hoy resolvéis a mano."
        description="No vendemos un producto cerrado. Construimos la pieza concreta que os falta, con el resto de vuestro sistema en mente."
      />
      <ServicesFull />
      <Contact />
    </>
  );
}
