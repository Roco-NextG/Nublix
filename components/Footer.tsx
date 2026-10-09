import Link from "next/link";
import Logo from "./Logo";
import StatusDot from "./system/StatusDot";
import LogoLockup from "./system/LogoLockup";
import { CONTACT_EMAIL, FOOTER, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-dashed border-paper/10 bg-ink py-16 text-paper/50 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <LogoLockup />

          <div className="grid grid-cols-2 gap-10 font-mono text-[12px] tracking-[0.05em] uppercase sm:gap-16">
            <nav aria-label={FOOTER.navLabel}>
              <p className="text-paper/35">{FOOTER.navLabel}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  { href: "/", label: FOOTER.homeLabel },
                  ...NAV_LINKS,
                  { href: "/contacto", label: FOOTER.contactLinkLabel },
                ].map(
                  (link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-paper/70 transition-colors duration-150 ease-out hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
            <div>
              <p className="text-paper/35">{FOOTER.contactLabel}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 inline-block break-all normal-case text-paper/70 transition-colors duration-150 ease-out hover:text-paper"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-dashed border-paper/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <div className="flex flex-col gap-2 font-mono text-[12px] tracking-[0.03em] uppercase sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <StatusDot />
              {FOOTER.location}
            </span>
            <span>
              © {new Date().getFullYear()} {FOOTER.legalName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
