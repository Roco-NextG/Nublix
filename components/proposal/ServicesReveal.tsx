import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { SERVICES } from "@/lib/content";
import {
  DashboardIllustration,
  AutomationIllustration,
  IntegrationIllustration,
  BuildIllustration,
  CloudIllustration,
  GrowthIllustration,
  PaymentIllustration,
  IotIllustration,
} from "./illustrations";

const ILLUSTRATIONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  dashboard: DashboardIllustration,
  automatizacion: AutomationIllustration,
  conexion: IntegrationIllustration,
  codigo: BuildIllustration,
  cloud: CloudIllustration,
  crecimiento: GrowthIllustration,
  pagos: PaymentIllustration,
  iot: IotIllustration,
};

/** Same eight services as the live site's EditorialAccordion, read instead as
 * eight product-reveal panels — each gets its own abstract technical diagram
 * (custom line-art, no stock photography) standing in for "the product". */
export default function ServicesReveal() {
  return (
    <section id="servicios" className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-16">
      <Reveal>
        <Eyebrow>Servicios</Eyebrow>
        <h2 className="mt-5 max-w-[22ch] text-[32px] leading-[0.95] font-medium tracking-[-0.02em] sm:text-[44px] lg:text-[48px]">
          Siete formas de quitarle peso al Excel.
        </h2>
      </Reveal>

      <div className="mt-16 border-t border-dashed border-paper/15">
        {SERVICES.map((service, i) => {
          const Illustration = ILLUSTRATIONS[service.icon];
          const reversed = i % 2 === 1;
          return (
            <Reveal key={service.index} className="border-b border-dashed border-paper/15 py-12 sm:py-14">
              <div
                className={`grid items-center gap-8 lg:grid-cols-[1fr_auto_1.1fr] lg:gap-14 ${
                  reversed ? "lg:[&>*:first-child]:order-3" : ""
                }`}
              >
                <div>
                  <span className="font-mono text-[13px] tracking-[0.04em] text-paper/35">
                    {service.index}
                  </span>
                  <h3 className="mt-3 max-w-[18ch] text-[24px] leading-[1.02] font-medium tracking-[-0.01em] sm:text-[30px]">
                    {service.title}
                  </h3>
                </div>

                <div className="flex justify-center">
                  {Illustration ? (
                    <Illustration className="h-[90px] w-[120px] text-paper/70 sm:h-[110px] sm:w-[140px]" />
                  ) : null}
                </div>

                <p className="max-w-[50ch] text-[15px] leading-relaxed text-paper/55 sm:text-[16px]">
                  {service.detail}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
