"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { PAGES, STEPS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

function StepPanel({
  step,
  active = true,
}: {
  step: (typeof STEPS)[number];
  active?: boolean;
}) {
  return (
    <article className="relative flex h-full flex-col border-t border-dashed border-ink/15 pt-6">
      <span
        aria-hidden="true"
        className={`absolute -top-px left-0 h-px w-full origin-left bg-teal transition-transform duration-700 ease-out-strong ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute -top-[4px] left-0 h-[7px] w-[7px] rounded-full border border-teal transition-[background-color,box-shadow] duration-300 ease-out-strong ${
          active ? "bg-teal shadow-[0_0_0_5px_rgb(31_156_144/0.16)]" : "bg-paper"
        }`}
      />
      <span
        className={`font-mono text-[13px] transition-colors duration-300 ${
          active ? "text-teal" : "text-ink/35"
        }`}
      >
        {step.index}
      </span>
      <h3 className="mt-6 text-[30px] leading-[1.02] font-medium tracking-[-0.025em] text-ink sm:text-[40px] lg:text-[48px]">
        {step.title}
      </h3>
      <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-ink/65 sm:text-[17px]">
        {step.detail}
      </p>
    </article>
  );
}

/** Static, always-visible layout: the accessible default and the
 * no-JS / reduced-motion fallback. Never depends on scroll JS. */
function StaticMethod() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {STEPS.map((step) => (
            <StepPanel key={step.index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Enhanced layout: four steps in a horizontally pinned scroll track,
 * progress mapped to translateX. Only mounted once JS confirms the
 * visitor has not requested reduced motion. */
function PinnedMethod() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const ctx = gsap.context(() => {
      const distance = () =>
        Math.max(track.scrollWidth - wrapper.clientWidth, 0);

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const current = Math.min(STEPS.length, Math.floor(progress * STEPS.length) + 1);

  return (
    <section className="bg-paper text-ink">
      <div ref={wrapperRef} className="relative h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center px-5 pt-28 pb-12 sm:px-8 sm:pt-32">
          <div className="flex items-center justify-between font-mono text-[12px] tracking-[0.06em] text-ink/45 uppercase">
            <span>{PAGES.metodo.eyebrow}</span>
            <span aria-hidden="true">
              <span className="text-teal">{String(current).padStart(2, "0")}</span> /{" "}
              {String(STEPS.length).padStart(2, "0")}
            </span>
          </div>

          <div
            ref={trackRef}
            className="relative mt-12 flex items-stretch gap-8 will-change-transform sm:mt-16 sm:gap-10 md:gap-14"
          >
            {STEPS.map((step, i) => (
              <div
                key={step.index}
                className="w-[80vw] shrink-0 sm:w-[52vw] md:w-[40vw] lg:w-[30vw]"
              >
                <StepPanel
                  step={step}
                  active={progress >= i / STEPS.length - 0.001}
                />
              </div>
            ))}
          </div>

          <div className="mt-14 h-px w-full max-w-[280px] bg-ink/10">
            <div
              className="h-px origin-left bg-teal"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MethodFull() {
  const reducedMotion = usePrefersReducedMotion();
  return reducedMotion ? <StaticMethod /> : <PinnedMethod />;
}
