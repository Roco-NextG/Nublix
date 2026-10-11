import type { Metadata } from "next";
import Hero3 from "@/components/proposal3/Hero3";
import ScrollStatement from "@/components/proposal3/ScrollStatement";
import PillarsGrid from "@/components/proposal3/PillarsGrid";
import ProcessFacts from "@/components/proposal3/ProcessFacts";
import Method3 from "@/components/proposal3/Method3";
import Services3 from "@/components/proposal3/Services3";
import Faq3 from "@/components/proposal3/Faq3";
import FinalCta3 from "@/components/proposal3/FinalCta3";

export const metadata: Metadata = {
  title: "nublix — software a medida",
  robots: { index: false, follow: false },
};

export default function Propuesta3Page() {
  return (
    <>
      <Hero3 />
      <ScrollStatement />
      <PillarsGrid />
      <ProcessFacts />
      <Method3 />
      <Services3 />
      <Faq3 />
      <FinalCta3 />
    </>
  );
}
