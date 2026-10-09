import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import TechLabel from "@/components/system/TechLabel";
import PageEngine from "@/components/engine/PageEngine";
import { HERO } from "@/lib/content";

export default function PageHero({
  eyebrow,
  title,
  description,
  seed,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  /** Varies the engine's node layout per page. */
  seed?: number;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-[calc(72px_+_64px)] pb-20 text-paper sm:pt-[calc(72px_+_104px)] sm:pb-28">
      <PageEngine seed={seed} />
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center justify-between border-b border-dashed border-paper/15 pb-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <TechLabel dot className="hidden text-paper/45 sm:inline-flex">
              {HERO.status}
            </TechLabel>
          </div>
          <h1 className="mt-10 max-w-[16ch] text-[42px] leading-[0.94] font-medium tracking-[-0.035em] text-balance sm:text-[68px] lg:max-w-[14ch] lg:text-[88px] lg:leading-[0.9]">
            {title}
          </h1>
          {description ? (
            <p className="mt-7 max-w-[50ch] text-[17px] leading-relaxed text-paper/65 sm:text-[19px]">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
