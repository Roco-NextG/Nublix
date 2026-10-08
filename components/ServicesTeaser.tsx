import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import EditorialAccordion from "@/components/system/EditorialAccordion";
import Reveal from "@/components/system/Reveal";
import { SERVICES } from "@/lib/content";

const FEATURED = SERVICES.slice(0, 4);

export default function ServicesTeaser() {
  return (
    <section id="servicios" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Services</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] text-[32px] leading-[1] font-medium tracking-[-0.02em] text-paper sm:text-[48px]">
              Software para lo que hoy resolvéis a mano.
            </h2>
          </div>
          <Link
            href="/servicios"
            className="inline-flex w-fit items-center gap-2 font-mono text-[12px] tracking-[0.05em] text-paper/60 uppercase transition-colors duration-150 ease-out hover:text-paper"
          >
            Ver todos los servicios
            <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          <EditorialAccordion items={FEATURED} tone="onDark" />
        </div>
      </div>
    </section>
  );
}
