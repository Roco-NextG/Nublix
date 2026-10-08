import Link from "next/link";
import Logo from "@/components/Logo";
import TechLabel from "@/components/system/TechLabel";
import ArrowButton from "@/components/system/ArrowButton";

const SECTIONS = [
  { href: "#problema", label: "El problema" },
  { href: "#metodo", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#dudas", label: "Dudas" },
] as const;

/** Full-width fixed bar instead of the live site's floating pill — this
 * page runs dark → light → dark, so the bar stays ink/85+blur throughout
 * for legibility rather than going transparent-over-photo like Oryzo's nav. */
export default function ProposalHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-dashed border-paper/15 bg-ink/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="hidden items-center gap-1.5 rounded-full border border-dashed border-paper/20 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-paper/45 uppercase sm:inline-flex">
            Propuesta · v2
          </span>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="font-mono text-[12px] tracking-[0.05em] text-paper/60 uppercase transition-colors duration-150 ease-out hover:text-paper"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ArrowButton href="/contacto" className="!px-5 !py-2.5">
            Cuéntanos tu proceso
          </ArrowButton>
        </div>

        <div className="lg:hidden">
          <Link href="/">
            <TechLabel className="text-paper/50">Sitio actual</TechLabel>
          </Link>
        </div>
      </div>
    </header>
  );
}
