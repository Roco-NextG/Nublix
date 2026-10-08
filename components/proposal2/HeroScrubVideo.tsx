"use client";

import { useEffect, useRef } from "react";

/** Scroll-scrubbed hero video — currentTime is driven entirely by scroll
 * `progress` (0-1 across the whole pinned hero), never autoplays on its
 * own. Covers the full fragmented → connected → dashboard story in one
 * clip, so it replaces the four crossfaded stage illustrations outright
 * rather than sitting alongside them. */
export default function HeroScrubVideo({ progress }: { progress: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    // video.duration reads live off the element — no need to cache it via
    // the loadedmetadata event, which can fire before this effect subscribes
    // (readyState already HAVE_METADATA on fast/cached loads) and then never
    // fire again, leaving a cached duration of 0 forever.
    if (!video || !isFinite(video.duration) || video.duration <= 0) return;
    const target = progress * video.duration;
    if (Math.abs(video.currentTime - target) > 0.03) {
      video.currentTime = target;
    }
  }, [progress]);

  return (
    <video
      ref={videoRef}
      src="/hero-video/stage-video.mp4"
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
