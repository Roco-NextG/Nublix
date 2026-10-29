import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/system/Eyebrow";
import Reveal from "@/components/system/Reveal";
import { COOKIES_PATH, METADATA, PRIVACY_PATH } from "@/lib/i18n";

export const metadata: Metadata = {
  title: METADATA.privacy.title.en,
  description: METADATA.privacy.description.en,
  alternates: {
    canonical: PRIVACY_PATH.en,
    languages: {
      es: PRIVACY_PATH.es,
      en: PRIVACY_PATH.en,
      "x-default": PRIVACY_PATH.es,
    },
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper px-5 pt-36 pb-24 text-ink sm:px-8 sm:pt-44 sm:pb-32 lg:px-16">
      <Reveal>
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-5 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.08] font-bold tracking-[-0.02em]">
          Privacy <span className="text-teal">policy.</span>
        </h1>
        <p className="mt-6 max-w-[60ch] text-[16px] leading-relaxed text-ink/60 sm:text-[18px]">
          Last updated October 13, 2026. Here is what we do with the data you send us, in plain
          language.
        </p>
      </Reveal>

      <Reveal className="mt-16 max-w-[70ch] border-t border-dashed border-ink/12 pt-10">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Who&apos;s responsible for your data
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Nublix Digital Solutions, S.L., based in Barcelona. You can write to us at{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              with any question about this policy or your data.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              What data we collect
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              This site doesn&apos;t have a form that collects data automatically. The only moment you
              share information with us is when you write to{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              yourself: your name, your email address, and whatever you tell us in the message. We
              don&apos;t collect anything beyond that, and this site uses no analytics or tracking
              cookies (see the detail in our{" "}
              <Link href={COOKIES_PATH.en} className="text-teal-dim underline underline-offset-2">
                cookie policy
              </Link>
              ).
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              What we use it for
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Only to answer your message and, if you decide to move forward, to organize and run
              the diagnosis or project we discuss. We don&apos;t sell or share your data with third
              parties, and we won&apos;t use it to send you marketing unless you ask us to.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Why we&apos;re allowed to process it
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              Because you give it to us voluntarily when you write to us, which counts as your
              consent, and because if we move forward on a project together we need that data to
              manage the relationship.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              How long we keep it
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              For as long as our conversation or business relationship lasts, and after that for
              however long the law requires us to keep project records. If you only wrote to us
              once and we didn&apos;t move forward, we delete the email after a reasonable time.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Your rights
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              You can ask us to access, correct, or delete your data, limit how we use it, get a
              copy of it, or object to our processing it. Write to{" "}
              <a href="mailto:hola@nublix.com" className="text-teal-dim underline underline-offset-2">
                hola@nublix.com
              </a>{" "}
              and we&apos;ll sort it out directly with you, no middlemen. If you&apos;re not satisfied, you
              can also file a complaint with Spain&apos;s data protection authority (the AEPD).
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">Security</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              We treat your data with the care you&apos;d expect: access limited to the three partners
              who manage our inbox, and we don&apos;t share it with outside tools or services that
              don&apos;t need to see it.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] font-bold tracking-[-0.01em] sm:text-[22px]">
              Changes to this policy
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
              If we add analytics, a form, or any other way of collecting data, we&apos;ll update this
              page and note it here with the new date.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
