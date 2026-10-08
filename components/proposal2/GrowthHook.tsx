import Reveal from "@/components/system/Reveal";

/** "Crece con la empresa" used to be its own service card — pulled out of
 * the grid (it's a promise about the system, not a discrete service) and
 * reduced to a single centered statement here, no section dressing. */
export default function GrowthHook() {
  return (
    <div className="bg-mint px-5 py-16 text-center text-ink sm:py-20">
      <Reveal>
        <h2 className="mx-auto max-w-[18ch] text-[28px] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[38px] lg:text-[44px]">
          Cuanto más crece la empresa, <span className="text-teal">más lejos llega el sistema.</span>
        </h2>
      </Reveal>
    </div>
  );
}
