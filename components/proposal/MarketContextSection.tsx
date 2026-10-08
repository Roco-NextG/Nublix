import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import { MARKET_CONTEXT } from "@/lib/proposalContent";

export default function MarketContextSection() {
  return (
    <section className="bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Contexto</Eyebrow>
          <h2 className="mt-5 max-w-[14ch] text-[30px] leading-[1] font-medium tracking-[-0.02em] sm:text-[38px]">
            La digitalización ya no es opcional
          </h2>
        </Reveal>

        <Reveal stagger className="flex flex-col gap-5">
          {MARKET_CONTEXT.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <StatusDot active={false} className="mt-[6px] text-paper/40" />
              <p className="max-w-[56ch] text-[15px] leading-relaxed text-paper/60 sm:text-[16px]">
                {item}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
