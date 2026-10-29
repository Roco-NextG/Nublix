import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import Button2 from "@/components/proposal2/Button2";

/** Branded 404 for the English route group — mirrors app/(es)/not-found.tsx. */
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-start justify-center bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-[18ch] text-[clamp(2.25rem,5vw,4rem)] leading-[1.2] font-bold tracking-[-0.02em]">
          This page <span className="text-teal">doesn&apos;t exist.</span>
        </h1>
        <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          The link may have changed since you saved it. The method, services, and projects all
          live on the home page now.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button2 href="/en">Back to home</Button2>
        </div>
      </Reveal>
    </section>
  );
}
