import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ARROW_WRAP = "relative inline-block h-[1em] w-[1em] overflow-hidden align-[-0.15em]";
const ARROW_INNER =
  "absolute inset-0 flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2";

/** propuesta2's own, more minimal CTA — no uppercase/mono/pill-border
 * treatment like the shared ArrowButton. Primary stays a solid teal pill
 * but tighter; ghost drops the border entirely and reads as a plain text
 * link with the same arrow-roll micro-interaction. */
export default function Button2({ href, children, variant = "primary", className = "", onClick }: Props) {
  const base =
    "group relative inline-flex items-center gap-2 text-[14px] font-semibold transition-colors duration-150 ease-out active:scale-[0.98]";
  const skin =
    variant === "primary"
      ? "rounded-full bg-teal px-5 py-2.5 text-ink hover:bg-teal-dim"
      : "text-ink/80 hover:text-ink";

  return (
    <Link href={href} onClick={onClick} className={`${base} ${skin} ${className}`}>
      {children}
      <span className={ARROW_WRAP}>
        <span className={ARROW_INNER}>
          <span className="flex h-[1em] items-center justify-center">→</span>
          <span className="flex h-[1em] items-center justify-center">↗</span>
        </span>
      </span>
    </Link>
  );
}
