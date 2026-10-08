import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import { MARKET_CONTEXT } from "@/lib/proposalContent";

export default function ContextGrid() {
  return (
    <section className="bg-paper px-5 py-16 text-ink sm:px-8 sm:py-24 lg:px-16">
      <Reveal>
        <Eyebrow>Contexto</Eyebrow>
        <h2 className="mt-5 max-w-[14ch] text-[30px] leading-[1] font-bold tracking-[-0.02em] sm:text-[38px]">
          La digitalización <span className="text-teal">ya no es opcional</span>
        </h2>
      </Reveal>

      <Reveal stagger className="mt-14 grid gap-3 sm:grid-cols-2">
        {MARKET_CONTEXT.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-ink/12 px-6 py-8 sm:px-8"
          >
            <StatusDot active={false} className="mt-[6px] text-ink/40" />
            <p className="max-w-[42ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
              {item}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
