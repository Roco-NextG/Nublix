import Capsule from "./Capsule";

/** Section label: capsule mark + short mono tag. Replaces the plain
 * teal caption used across every section intro. */
export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Capsule />
      <span className="font-mono text-[12px] tracking-[0.06em] text-teal uppercase">
        {children}
      </span>
    </div>
  );
}
