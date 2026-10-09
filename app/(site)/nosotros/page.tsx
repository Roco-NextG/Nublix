import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import Contact from "@/components/Contact";
import SectionSeam from "@/components/system/SectionSeam";
import { ABOUT, PAGES, VALUES } from "@/lib/content";

const page = PAGES.nosotros;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        seed={29}
      />

      <SectionSeam tone="onDark" />

      <section className="bg-paper py-24 text-ink sm:py-32 lg:py-40">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Eyebrow className="self-start lg:pt-4">{ABOUT.eyebrow}</Eyebrow>
            <div>
              <h2 className="max-w-[20ch] text-[32px] leading-[1] font-medium tracking-[-0.03em] text-balance sm:text-[48px] lg:text-[56px]">
                {ABOUT.title}
              </h2>
              <p className="mt-8 max-w-[58ch] text-[16px] leading-relaxed text-ink/65 sm:text-[18px]">
                {ABOUT.body}
              </p>
            </div>
          </Reveal>

          <div className="mt-24 sm:mt-32">
            <Reveal>
              <Eyebrow>{ABOUT.valuesEyebrow}</Eyebrow>
            </Reveal>
            <Reveal
              stagger
              className="mt-8 grid border-t border-dashed border-ink/15 sm:grid-cols-2"
            >
              {VALUES.map((value, i) => (
                <article
                  key={value.index}
                  className={`group flex flex-col border-b border-dashed border-ink/15 py-10 sm:py-12 ${
                    i % 2 === 0
                      ? "sm:border-r sm:pr-10 lg:pr-16"
                      : "sm:pl-10 lg:pl-16"
                  }`}
                >
                  <span className="font-mono text-[13px] text-teal">
                    {value.index}
                  </span>
                  <h3 className="mt-8 max-w-[18ch] text-[26px] leading-[1.02] font-medium tracking-[-0.02em] transition-transform duration-200 ease-out sm:mt-12 sm:text-[34px] sm:group-hover:translate-x-2">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
                    {value.description}
                  </p>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <SectionSeam tone="onLight" />

      <Contact />
    </>
  );
}
