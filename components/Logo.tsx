import Link from "next/link";
import NodeMark from "@/components/system/NodeMark";

/** Nav/footer lockup: isotipo-nodo + wordmark, matching the definitive
 * logo file (NUBLIX LOGO VECTOR.pdf, page 1 — mark + wordmark, no tagline).
 * Always paper-on-ink; both nav and footer are dark surfaces. */
export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="nublix — inicio"
    >
      <span className="relative block h-8 w-8 shrink-0 transition-transform duration-200 ease-out group-active:scale-95">
        <NodeMark className="h-full w-full" />
      </span>
      <span className="text-[19px] font-medium leading-none tracking-tight text-paper">
        nublix
      </span>
    </Link>
  );
}
