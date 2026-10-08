import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-ink pt-[calc(72px_+_64px)] pb-16 text-paper sm:pt-[calc(72px_+_96px)] sm:pb-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-[20ch] text-[40px] leading-[0.98] font-medium tracking-[-0.03em] sm:text-[64px] lg:text-[80px]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-paper/60 sm:text-[19px]">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
