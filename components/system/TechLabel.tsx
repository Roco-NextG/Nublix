import StatusDot from "./StatusDot";

/** A small mono "machine layer" label — the site's secondary voice.
 * Never used for body copy, only short technical/status strings. */
export default function TechLabel({
  children,
  dot,
  className = "",
}: {
  children: React.ReactNode;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.06em] uppercase ${className}`}
    >
      {dot ? <StatusDot /> : null}
      {children}
    </span>
  );
}
