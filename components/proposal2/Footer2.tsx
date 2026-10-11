"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import StatusDot from "@/components/system/StatusDot";
import TechLabel from "@/components/system/TechLabel";
import { PROMISES } from "@/lib/content";
import { CONTACT_PATH, HOME_PATH, SECTIONS, UI, localeFromPathname } from "@/lib/i18n";

/** The site's footer — a full multi-column layout (nav, compañía,
 * contacto) closing on a copyright row, then a single massive "nublix"
 * wordmark bleeding past the content edge — the pattern studied from
 * clean-web-black1.vercel.app's footer. Deliberately just the plain name,
 * no icon/capsule/subtitle. Every link here is real — in-page anchors or
 * pages that exist (/contacto, /en/contact) — nothing fabricated (no
 * socials, no phone, no legal pages we don't have).
 *
 * Reads locale from the pathname like Header2, since both root layouts
 * mount the same component. */
export default function Footer2() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const homePath = HOME_PATH[locale];

  return (
    <footer className="overflow-hidden border-t border-dashed border-ink/12 bg-paper pt-14 text-ink sm:pt-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr_1fr] sm:gap-8">
          <div>
            <TechLabel className="text-teal-dim">{UI.footerLead[locale]}</TechLabel>
            <p className="mt-4 max-w-[30ch] text-[22px] leading-[1.15] font-bold tracking-[-0.01em] text-ink sm:text-[26px]">
              {UI.footerHeadline[locale]}
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              {PROMISES[locale].map((promise) => (
                <li key={promise} className="flex items-center gap-2 text-[13px] text-ink/55">
                  <StatusDot className="text-teal" />
                  {promise}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TechLabel className="text-ink/40">{UI.footerNavLabel[locale]}</TechLabel>
            <ul className="mt-5 flex flex-col gap-3">
              {SECTIONS.map((item) => (
                <li key={item.href}>
                  <a
                    href={`${homePath}${item.href}`}
                    className="text-[15px] text-ink/65 transition-colors hover:text-ink"
                  >
                    {item.label[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <TechLabel className="text-ink/40">{UI.footerCompanyLabel[locale]}</TechLabel>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link
                  href={CONTACT_PATH[locale]}
                  className="text-[15px] text-ink/65 transition-colors hover:text-ink"
                >
                  {UI.footerContactLink[locale]}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <TechLabel className="text-ink/40">{UI.footerContactLabel[locale]}</TechLabel>
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
                {UI.footerLocation[locale]}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-dashed border-ink/12 pt-6 sm:mt-20">
          <span className="text-[13px] text-ink/40">
            © {new Date().getFullYear()} {UI.footerCopyright[locale]}
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
