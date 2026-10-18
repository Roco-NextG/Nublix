import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { COOKIES_PATH, METADATA, PRIVACY_PATH } from "@/lib/i18n";

export const metadata: Metadata = {
  title: METADATA.cookies.title.en,
  description: METADATA.cookies.description.en,
  alternates: {
    canonical: COOKIES_PATH.en,
    languages: {
      es: COOKIES_PATH.es,
      en: COOKIES_PATH.en,
      "x-default": COOKIES_PATH.es,
    },
  },
};

export default function CookiesPage() {
  return (
    <section className="bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>Cookies</Eyebrow>
        <h1 className="mt-5 max-w-[20ch] text-[36px] leading-[0.98] font-bold tracking-[-0.02em] sm:text-[52px]">
          Cookie <span className="text-teal">policy.</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          Last updated October 18, 2026. Short and direct, like the rest of the site.
        </p>
      </Reveal>

      <Reveal className="mt-16 max-w-[70ch] border-t border-dashed border-ink/12 pt-10">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              What a cookie is
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              A small file a website saves in your browser to remember something between visits: a
              preference, a signed-in session, or which pages you&apos;ve seen.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              What cookies this site uses right now
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              We use Microsoft Clarity to understand how you navigate the site: it records
              sessions in aggregate and generates click and scroll heatmaps, so we can see what
              works and what doesn&apos;t. Clarity doesn&apos;t activate until you accept it in the
              banner you see when you arrive; if you decline, nothing loads and no cookie of its
              is saved. If you accept, it saves cookies in your browser that recognize it as a
              visitor across pages and visits. We don&apos;t use Google Analytics or advertising
              pixels, and we don&apos;t sell this data to anyone. You can read the detail on
              Clarity&apos;s cookies and how Microsoft handles them in its{" "}
              <a
                href="https://clarity.microsoft.com/legal/privacy-notice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-dim underline underline-offset-2"
              >
                privacy notice
              </a>
              . Beyond this, your browser may save a few basic technical things so the site works
              properly (keeping the menu&apos;s open state while you navigate, for example), which
              never leaves your own browser.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              If we add anything else
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              If we ever add another analytics, advertising, or other tool that uses cookies,
              we&apos;ll update this page with what the cookie is, what it does, and how long it
              lasts, and ask for your consent first wherever the law requires it.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Managing cookies in your browser
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              You can review and delete cookies saved by any site, including this one, from your
              browser&apos;s settings. Chrome, Safari, Firefox, and most others have a privacy or
              cookies section for this.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">Questions</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Write to{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              and you&apos;ll hear back from us, not an automated form. You can also read our{" "}
              <Link href={PRIVACY_PATH.en} className="text-teal-dim underline underline-offset-2">
                privacy policy
              </Link>{" "}
              for more detail on how we handle the data you do give us directly.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
