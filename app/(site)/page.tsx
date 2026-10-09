import Hero from "@/components/Hero";
import MethodTeaser from "@/components/MethodTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import SectionSeam from "@/components/system/SectionSeam";

/** Home — one continuous story: the engine resolves in the Hero (chaos →
 * control), the Método explains it as a signal path, Servicios shows the
 * modules plugging in, the FAQ is the calm beat, and the final CTA closes
 * on the isotipo-nodo itself. */
export default function Home() {
  return (
    <>
      <Hero />
      <SectionSeam tone="onDark" />
      <MethodTeaser />
      <SectionSeam tone="onLight" />
      <ServicesTeaser />
      <SectionSeam tone="onDark" />
      <Faq />
      <SectionSeam tone="onLight" />
      <Contact />
    </>
  );
}
