/** Minimal line-weight globe glyph for the language switcher — the one
 * stroke-based icon in a system that's otherwise filled shapes (NodeMark)
 * and solid dots/capsules. Rendered small (~18px) in the header, so the
 * stroke is 1.75 rather than a true hairline — thin strokes lose almost
 * all contrast at that size against the dark hero pill. */
export default function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.3 2.4 3.5 5.4 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.4-3.5-8.5S9.7 5.9 12 3.5Z" />
    </svg>
  );
}
