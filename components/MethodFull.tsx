"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { STEPS } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

function StepPanel({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <article className="flex h-full flex-col border-t border-dashed border-ink/15 pt-6">
      <span className="font-mono text-[13px] text-teal">{step.index}</span>
      <h3 className="mt-6 text-[30px] leading-[1.05] font-medium tracking-[-0.02em] text-ink sm:text-[36px]">
        {step.title}
      </h3>
      <p className="mt-4 text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
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

  return (
    <section className="bg-paper">
      <div ref={wrapperRef} className="relative h-screen overflow-hidden">
        <div className="mx-auto flex h-full max-w-[1240px] flex-col px-5 pt-16 pb-10 sm:px-8">
          <div
            ref={trackRef}
            className="mt-10 flex flex-1 items-stretch gap-8 will-change-transform sm:mt-14 sm:gap-10 md:gap-14"
          >
            {STEPS.map((step) => (
              <div
                key={step.index}
                className="w-[80vw] shrink-0 sm:w-[48vw] md:w-[34vw] lg:w-[26vw]"
              >
                <StepPanel step={step} />
              </div>
            ))}
          </div>

          <div className="mt-8 h-px w-full max-w-[280px] bg-ink/10">
            <div
              className="h-px bg-teal transition-[width] duration-100 ease-out"
              style={{ width: `${Math.round(progress * 100)}%` }}
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
