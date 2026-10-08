/** The line that marks a dark/light transition instead of a plain
 * background swap — a system boundary, not just a color change. */
export default function SectionSeam({
  tone = "onDark",
}: {
  tone?: "onDark" | "onLight";
}) {
  const line = tone === "onDark" ? "bg-paper/10" : "bg-ink/10";
  return (
    <div className="relative h-px w-full" aria-hidden="true">
      <div className={`absolute inset-0 ${line}`} />
      <span className="absolute top-1/2 left-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal" />
    </div>
  );
}
