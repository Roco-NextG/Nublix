import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import SignalList from "@/components/system/SignalList";
import { METHOD_SECTION, STEPS } from "@/lib/content";

/** Home · Método — light zone. Sticky heading on the left, the four steps
 * as a scroll-driven signal path on the right (see SignalList). */
export default function MethodTeaser() {
  return (
    <section id="metodo" className="bg-paper py-24 text-ink sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <Reveal>
            <Eyebrow>{METHOD_SECTION.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-[14ch] text-[34px] leading-[0.98] font-medium tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
              {METHOD_SECTION.title}
            </h2>
            <Link
              href={METHOD_SECTION.link.href}
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-dashed border-ink/25 pb-1 font-mono text-[12px] tracking-[0.05em] text-ink/65 uppercase transition-colors duration-150 ease-out hover:border-ink/60 hover:text-ink"
            >
              {METHOD_SECTION.link.label}
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>

        <SignalList items={STEPS} tone="onLight" />
      </div>
    </section>
  );
}
