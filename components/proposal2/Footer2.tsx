import Link from "next/link";
import StatusDot from "@/components/system/StatusDot";
import TechLabel from "@/components/system/TechLabel";
import { PROMISES } from "@/lib/content";

const NAV_COLUMN = [
  { href: "#metodo", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#dudas", label: "Dudas" },
] as const;

const COMPANY_COLUMN = [{ href: "/contacto", label: "Contacto" }] as const;

/** The site's footer — a full multi-column layout (nav, compañía,
 * contacto) closing on a copyright row, then a single massive "nublix"
 * wordmark bleeding past the content edge — the pattern studied from
 * clean-web-black1.vercel.app's footer. Deliberately just the plain name,
 * no icon/capsule/subtitle. Every link here is real — in-page anchors or
 * pages that exist (/contacto) — nothing fabricated (no socials, no phone,
 * no legal pages we don't have). */
export default function Footer2() {
  return (
    <footer className="overflow-hidden border-t border-dashed border-ink/12 bg-paper pt-14 text-ink sm:pt-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr_1fr] sm:gap-8">
          <div>
            <TechLabel className="text-teal-dim">Hablemos de tu proceso</TechLabel>
            <p className="mt-4 max-w-[30ch] text-[22px] leading-[1.15] font-bold tracking-[-0.01em] text-ink sm:text-[26px]">
              Software a medida para pymes que han crecido más rápido que sus procesos.
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              {PROMISES.map((promise) => (
                <li key={promise} className="flex items-center gap-2 text-[13px] text-ink/55">
                  <StatusDot className="text-teal" />
                  {promise}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TechLabel className="text-ink/40">Navegación</TechLabel>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_COLUMN.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[15px] text-ink/65 transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TechLabel className="text-ink/40">Compañía</TechLabel>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY_COLUMN.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[15px] text-ink/65 transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TechLabel className="text-ink/40">Contacto</TechLabel>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hola@nublix.com"
                  className="text-[15px] text-ink/65 transition-colors hover:text-ink"
                >
                  hola@nublix.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-[15px] text-ink/65">
                <StatusDot />
                Barcelona, España
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-dashed border-ink/12 pt-6 sm:mt-20">
          <span className="text-[13px] text-ink/40">
            © {new Date().getFullYear()} Nublix Digital Solutions, S.L. Todos los derechos reservados.
          </span>
        </div>
      </div>

      <div className="mt-10 sm:mt-14">
        <span
          aria-hidden="true"
          className="block pl-4 text-[22vw] leading-[0.8] font-extrabold tracking-[-0.04em] text-ink select-none sm:pl-6 sm:text-[200px] lg:text-[260px]"
        >
          nublix
        </span>
      </div>
    </footer>
  );
}
