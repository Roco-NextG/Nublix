import Header3 from "@/components/proposal3/Header3";
import Footer3 from "@/components/proposal3/Footer3";

export default function Propuesta3Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="propuesta3-root">
      <Header3 />
      <main id="main-content">{children}</main>
      <Footer3 />
    </div>
  );
}
