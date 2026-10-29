"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import StatusDot from "@/components/system/StatusDot";
import { COOKIES_PATH, UI, localeFromPathname } from "@/lib/i18n";
import { useCookieConsent } from "@/lib/useCookieConsent";

const CLARITY_PROJECT_ID = "yz4qbq3psl";

/** Microsoft Clarity (session recordings, heatmaps) loads only once the
 * visitor accepts — not on mount — since it sets its own tracking
 * cookies. The banner and the script-gating logic live in one component
 * rather than two kept in sync, so there's no separate event/context
 * needed to tell the script loader "the visitor just clicked accept."
 * Consent itself is read via useCookieConsent (useSyncExternalStore over
 * localStorage, same pattern as usePrefersReducedMotion) rather than
 * useState+useEffect, so there's no synchronous setState-in-effect and no
 * hand-rolled hydration-mismatch guard. */
export default function CookieConsent() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const { consent, decide } = useCookieConsent();

  return (
    <>
      {consent === "accepted" ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
        </Script>
      ) : null}

      {consent === "pending" ? (
        <div className="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-[400px]">
          <div className="rounded-2xl border border-dashed border-ink/15 bg-paper p-5 shadow-[0_10px_30px_rgb(var(--color-ink-rgb)_/_0.15)]">
            <div className="flex items-start gap-2">
              <StatusDot className="mt-[6px] text-teal" />
              <p className="text-[13px] leading-relaxed text-ink/70">
                {UI.cookieBannerText[locale]}{" "}
                <Link
                  href={COOKIES_PATH[locale]}
                  className="text-teal-dim underline underline-offset-2"
                >
                  {UI.cookieBannerLearnMore[locale]}
                </Link>
              </p>
            </div>
            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => decide("rejected")}
                className="text-[13px] font-semibold text-ink/70 transition-colors duration-150 ease-out hover:text-ink"
              >
                {UI.cookieBannerReject[locale]}
              </button>
              <button
                type="button"
                onClick={() => decide("accepted")}
                className="rounded-full bg-teal px-4 py-2 text-[13px] font-semibold text-ink transition-colors duration-150 ease-out hover:bg-teal-dim active:scale-[0.98]"
              >
                {UI.cookieBannerAccept[locale]}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
