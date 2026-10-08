import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import { DIFFERENTIATORS } from "@/lib/proposalContent";

export default function DifferentiationSection() {
  return (
    <section className="bg-paper px-5 py-24 text-ink sm:px-8 sm:py-32 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Por qué Nublix</Eyebrow>
          <h2 className="mt-5 max-w-[18ch] text-[30px] leading-[1] font-medium tracking-[-0.02em] sm:text-[38px]">
            No somos la agencia grande, ni el freelance que desaparece, ni
            el programa estándar que os obliga a trabajar como él quiere.
          </h2>
        </Reveal>

        <Reveal stagger className="flex flex-col border-t border-dashed border-ink/15">
          {DIFFERENTIATORS.map((item) => (
            <div key={item} className="flex items-start gap-3 border-b border-dashed border-ink/15 py-5">
              <StatusDot className="mt-[6px]" />
              <span className="text-[16px] leading-snug sm:text-[17px]">{item}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
