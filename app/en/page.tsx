import ScrollHero from "@/components/proposal2/ScrollHero";
import HeroWordmarkReveal from "@/components/proposal2/HeroWordmarkReveal";
import MethodEditorial from "@/components/proposal2/MethodEditorial";
import ServicesCarousel from "@/components/proposal2/ServicesCarousel";
import GrowthHook from "@/components/proposal2/GrowthHook";
import ProjectsGallery from "@/components/proposal2/ProjectsGallery";
import DifferentiationStats from "@/components/proposal2/DifferentiationStats";
import ObjectionsGrid from "@/components/proposal2/ObjectionsGrid";
import ContextGrid from "@/components/proposal2/ContextGrid";
import FinalCta from "@/components/proposal2/FinalCta";

export default function HomePage() {
  return (
    <>
      <ScrollHero locale="en" />
      <HeroWordmarkReveal />
      <MethodEditorial locale="en" />
      <ServicesCarousel locale="en" />
      <GrowthHook locale="en" />
      <ProjectsGallery locale="en" />
      <DifferentiationStats locale="en" />
      <ObjectionsGrid locale="en" />
      <ContextGrid locale="en" />
      <FinalCta locale="en" />
    </>
  );
}
