/** The full brand lockup — wordmark + "DIGITAL SOLUTIONS" tagline under a
 * teal capsule — matching the definitive logo file (NUBLIX LOGO VECTOR.pdf,
 * page 2/4). Reserved for large, rare brand moments; the nav/footer use the
 * compact isotipo+wordmark lockup (`Logo.tsx`) instead. */
export default function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <span className="block text-[15vw] leading-[0.85] font-medium tracking-[-0.03em] text-paper sm:text-[96px] lg:text-[128px]">
        nublix
      </span>
      <div className="mt-3 flex items-center gap-3 sm:mt-4">
        <span
          aria-hidden="true"
          className="h-[11px] w-12 shrink-0 rounded-full bg-teal sm:h-[13px] sm:w-14"
        />
        <span className="font-mono text-[12px] tracking-[0.18em] text-paper uppercase sm:text-[14px]">
          Digital Solutions
        </span>
      </div>
    </div>
  );
}
