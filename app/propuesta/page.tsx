import type { Metadata } from "next";
import ProposalHero from "@/components/proposal/ProposalHero";
import ProblemSection from "@/components/proposal/ProblemSection";
import MethodReveal from "@/components/proposal/MethodReveal";
import ServicesReveal from "@/components/proposal/ServicesReveal";
import DifferentiationSection from "@/components/proposal/DifferentiationSection";
import ObjectionsSection from "@/components/proposal/ObjectionsSection";
import MarketContextSection from "@/components/proposal/MarketContextSection";
import FinalCta from "@/components/proposal/FinalCta";
import SectionSeam from "@/components/system/SectionSeam";

export const metadata: Metadata = {
  title: "nublix — propuesta v2",
  robots: { index: false, follow: false },
};

export default function PropuestaPage() {
  return (
    <>
      <ProposalHero />
      <ProblemSection />
      <SectionSeam tone="onDark" />
      <MethodReveal />
      <ServicesReveal />
      <SectionSeam tone="onDark" />
      <DifferentiationSection />
      <ObjectionsSection />
      <SectionSeam tone="onLight" />
      <MarketContextSection />
      <FinalCta />
    </>
  );
}
