"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export type EditorialEntry = {
  index: string;
  title: string;
  description: string;
  detail?: string;
  icon?: string;
};

/** "Services as an interface" — a numbered, borderless list instead of
 * cards. Each row is a native <details>, so it works with no JS and
 * stays keyboard/screen-reader friendly; the dot and rule are pure CSS
 * driven by the [open] state. */
export default function EditorialAccordion({
  items,
  tone = "onDark",
}: {
  items: readonly EditorialEntry[];
  tone?: "onDark" | "onLight";
}) {
  const divider = tone === "onDark" ? "border-paper/12" : "border-ink/10";
  const text = tone === "onDark" ? "text-paper" : "text-ink";
  const textDim = tone === "onDark" ? "text-paper/55" : "text-ink/55";
  const indexColor = tone === "onDark" ? "text-paper/35" : "text-ink/35";

  return (
    <Reveal stagger className={`border-t border-dashed ${divider}`}>
      {items.map((item) => (
        <details key={item.index} className={`group border-b border-dashed ${divider}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden sm:py-8">
            <span className="flex min-w-0 items-baseline gap-4 transition-transform duration-200 ease-out sm:gap-6 sm:group-hover:translate-x-2">
              <span
                className={`font-mono text-[13px] tracking-[0.04em] ${indexColor}`}
              >
                {item.index}
              </span>
              <span
                className={`truncate text-[22px] font-medium tracking-[-0.01em] sm:text-[32px] ${text}`}
              >
                {item.title}
              </span>
            </span>

            <span className="flex shrink-0 items-center gap-4">
              <span
                className={`hidden max-w-[32ch] text-right text-[14px] leading-snug lg:block ${textDim}`}
              >
                {item.description}
              </span>
              <span
                aria-hidden="true"
                className="h-[7px] w-[7px] shrink-0 rounded-full border border-teal opacity-40 transition-opacity duration-150 ease-out group-open:bg-teal group-open:opacity-100"
              />
            </span>
          </summary>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                <p
                  className={`max-w-[54ch] text-[15px] leading-relaxed sm:text-[16px] ${textDim}`}
                >
                  {item.detail ?? item.description}
                </p>
                {item.icon ? (
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center border ${
                      tone === "onDark" ? "border-paper/15" : "border-ink/15"
                    }`}
                  >
                    <Image
                      src={`/brand/icons/${item.icon}.svg`}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </details>
      ))}
    </Reveal>
  );
}
