import ProposalHeader from "@/components/proposal/ProposalHeader";
import Footer from "@/components/Footer";

export default function ProposalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProposalHeader />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
