/** Section label for /propuesta3 v2 — a quiet mono tag with a short
 * underline rule, not a bullet or icon. Restraint is the point: nothing
 * here should compete for attention with the headline it introduces. */
export default function Eyebrow3({
  children,
  tone = "onDark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "onDark" | "onLight";
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-[2px] w-8 ${tone === "onDark" ? "bg-teal" : "bg-teal-dim"}`}
      />
      <span
        className={`font-mono text-[12px] tracking-[0.1em] uppercase ${
          tone === "onDark" ? "text-paper/55" : "text-ink/45"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
