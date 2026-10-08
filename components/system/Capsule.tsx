/** The brand's distinctive mark, lifted from the wordmark's underline
 * capsule — a short teal bar used as a bullet in front of eyebrows and
 * index labels instead of a generic dot or dash. */
export default function Capsule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[3px] w-6 shrink-0 rounded-full bg-teal ${className}`}
    />
  );
}
