import Hero from "@/components/Hero";
import MethodTeaser from "@/components/MethodTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import SectionSeam from "@/components/system/SectionSeam";

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
