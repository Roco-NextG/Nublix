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
          Last updated October 13, 2026. Short and direct, like the rest of the site.
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
              None. This site doesn&apos;t use analytics, advertising, or tracking cookies of any kind.
              We don&apos;t measure visits with Google Analytics or anything similar, and there are no
              social media pixels loading in the background. Your browser may save a few basic
              technical things so the site works properly (keeping the menu&apos;s open state while you
              navigate, for example), but that stays in your own browser and we never read it.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              If that changes
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              If we ever add analytics or another tool that uses cookies, we&apos;ll update this page
              with what the cookie is, what it does, and how long it lasts, and ask for your
              consent first wherever the law requires it.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Managing cookies in your browser
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Even though this site doesn&apos;t need them today, you can review and delete cookies
              saved by any site from your browser&apos;s settings. Chrome, Safari, Firefox, and most
              others have a privacy or cookies section for this.
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
