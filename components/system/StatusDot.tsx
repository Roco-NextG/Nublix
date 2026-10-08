/** The brand's "system active" mark — teal = active/live, outline = idle.
 * Used anywhere the interface needs to say "this is on" without a card. */
export default function StatusDot({
  active = true,
  className = "",
}: {
  active?: boolean;
  className?: string;
}) {
  return active ? (
    <span
      aria-hidden="true"
      className={`inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-teal ${className}`}
    />
  ) : (
    <span
      aria-hidden="true"
      className={`inline-block h-[7px] w-[7px] shrink-0 rounded-full border border-current opacity-40 ${className}`}
    />
  );
}
