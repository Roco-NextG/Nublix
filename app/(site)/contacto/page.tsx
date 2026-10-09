import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/system/Eyebrow";
import StatusDot from "@/components/system/StatusDot";
import Reveal from "@/components/system/Reveal";
import SectionSeam from "@/components/system/SectionSeam";
import SignalList from "@/components/system/SignalList";
import {
  CONTACT_EMAIL,
  CONTACT_PAGE,
  CONTACT_STEPS,
  PAGES,
  PROMISES,
} from "@/lib/content";

const page = PAGES.contacto;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        seed={41}
      />

      <SectionSeam tone="onDark" />

      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>{CONTACT_PAGE.processEyebrow}</Eyebrow>
              </Reveal>
              <div className="mt-8 border-t border-dashed border-ink/15">
                <SignalList items={CONTACT_STEPS} tone="onLight" size="md" />
              </div>
            </div>

            <div className="lg:sticky lg:top-36 lg:self-start">
              <Reveal className="border border-ink/12 bg-mint/60 p-7 sm:p-10">
                <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.06em] text-ink/55 uppercase">
                  <StatusDot />
                  {CONTACT_PAGE.status}
                </span>
                <h2 className="mt-6 text-[30px] leading-[1] font-medium tracking-[-0.02em] sm:text-[40px]">
                  {CONTACT_PAGE.title}
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink/65">
                  {CONTACT_PAGE.description}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group mt-8 inline-flex max-w-full items-center gap-3 rounded-full bg-teal px-7 py-4 font-mono text-[13px] tracking-[0.04em] text-ink uppercase transition-colors duration-150 ease-out hover:bg-teal-dim active:scale-[0.98]"
                >
                  <span className="truncate">{CONTACT_EMAIL}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
                <ul className="mt-8 flex flex-col gap-2.5 border-t border-dashed border-ink/15 pt-6 font-mono text-[12px] tracking-[0.04em] text-ink/55 uppercase">
                  {PROMISES.map((promise) => (
                    <li key={promise} className="inline-flex items-center gap-2.5">
                      <StatusDot />
                      {promise}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
