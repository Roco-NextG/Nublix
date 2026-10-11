import Reveal from "@/components/system/Reveal";
import { PROCESS_FACTS } from "@/lib/proposal3Content";

/**
 * Replaces the "by the numbers" stats band (Indicium: 600+ experts, 50+
 * clients) with real process commitments — Nublix has no clients or
 * metrics yet (see PRODUCT.md, Evidence on Hand). Same visual rhythm,
 * honest content: big mono figure + what it actually means.
 */
export default function ProcessFacts() {
  return (
    <section className="border-y border-paper/10 bg-ink px-5 py-16 sm:px-8">
      <Reveal
        stagger
        className="mx-auto grid max-w-[1100px] grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4"
      >
        {PROCESS_FACTS.map((f) => (
          <div key={f.label} className="text-center sm:text-left">
            <span className="block font-mono text-[34px] leading-none font-medium text-teal sm:text-[42px]">
              {f.value}
            </span>
            <span className="mt-3 block text-[13px] leading-snug text-paper/50 sm:text-[14px]">
              {f.label}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
