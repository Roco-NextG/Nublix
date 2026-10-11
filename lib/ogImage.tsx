import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

/** Shared renderer behind each locale's opengraph-image.tsx — a plain
 * on-brand card (wordmark + capsule + tagline on ink) generated at request
 * time via next/og instead of a static export from the hero imagery, so it
 * stays lightweight and never goes stale if the brand mark changes. */
export function renderOgImage(tagline: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#14161f",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 16, height: 64, borderRadius: 4, backgroundColor: "#1f9c90" }} />
          <div style={{ fontSize: 80, fontWeight: 800, color: "#f6f4ef", letterSpacing: "-0.03em" }}>
            nublix
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 36,
            color: "rgba(246,244,239,0.7)",
            maxWidth: 860,
            lineHeight: 1.35,
          }}
        >
          {tagline}
        </div>
      </div>
    ),
    { ...ogImageSize },
  );
}
