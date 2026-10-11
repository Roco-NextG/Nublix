import Reveal from "@/components/system/Reveal";
import type { Locale } from "@/lib/i18n";

const HEADLINE = {
  es: (
    <>
      Cuanto más crece la empresa, <span className="text-teal">más lejos llega el sistema.</span>
    </>
  ),
  en: (
    <>
      The more your company grows, <span className="text-teal">the further the system scales with it.</span>
    </>
  ),
} as const;

/** "Crece con la empresa" used to be its own service card — pulled out of
 * the grid (it's a promise about the system, not a discrete service) and
 * reduced to a single centered statement here, no section dressing. */
export default function GrowthHook({ locale }: { locale: Locale }) {
  return (
    <div className="bg-mint px-5 py-16 text-center text-ink sm:py-20">
      <Reveal>
        <h2 className="mx-auto max-w-[18ch] text-[28px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
          {HEADLINE[locale]}
        </h2>
      </Reveal>
    </div>
  );
}
