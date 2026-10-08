import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "ghostLight";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ARROW_WRAP =
  "relative inline-block h-[1em] w-[1em] overflow-hidden align-[-0.15em]";
const ARROW_INNER =
  "absolute inset-0 flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-1/2";

/** Primary CTA: on hover the arrow rolls from → to ↗ and a line draws
 * in underneath — never just a scale-up. */
export default function ArrowButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: Props) {
  const base =
    "group relative inline-flex items-center gap-3 px-7 py-4 font-mono text-[13px] tracking-[0.04em] uppercase transition-colors duration-150 ease-out active:scale-[0.98]";
  const skin =
    variant === "primary"
      ? "rounded-full bg-teal text-ink hover:bg-teal-dim"
      : variant === "ghostLight"
        ? "rounded-full border border-ink/20 text-ink hover:border-ink/45"
        : "rounded-[22px] border border-paper/20 text-paper hover:border-paper/45";

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
