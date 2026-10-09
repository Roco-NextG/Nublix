import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import ServicesSystem from "@/components/ServicesSystem";
import { SERVICES, SERVICES_SECTION } from "@/lib/content";

const FEATURED = SERVICES.slice(0, 4);

export default function ServicesTeaser() {
  return (
    <section id="servicios" className="bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 border-b border-dashed border-paper/12 pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-14">
          <div>
            <Eyebrow>{SERVICES_SECTION.eyebrow}</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] text-[34px] leading-[0.98] font-medium tracking-[-0.03em] sm:text-[52px] lg:text-[60px]">
              {SERVICES_SECTION.title}
            </h2>
          </div>
          <Link
            href={SERVICES_SECTION.link.href}
            className="inline-flex w-fit items-center gap-2 border-b border-dashed border-paper/25 pb-1 font-mono text-[12px] tracking-[0.05em] text-paper/65 uppercase transition-colors duration-150 ease-out hover:border-paper/60 hover:text-paper"
          >
            {SERVICES_SECTION.link.label}
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          <ServicesSystem items={FEATURED} />
        </div>
      </div>
    </section>
  );
}
