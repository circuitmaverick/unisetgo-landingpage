import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { getCachedImageUrl, fetchAndCacheImage } from "@/lib/image-cache";
import { Skeleton } from "@/components/ui/skeleton";

type CachedImageProps = ImgHTMLAttributes<HTMLImageElement> & { src: string };

// Per-session memoization: once a URL has been resolved once (cache hit,
// fresh fetch, or failure fallback), every later mount of that same URL in
// this tab resolves synchronously from here — no repeat IndexedDB round trip.
// Resolved blob URLs are intentionally never revoked — they're shared,
// session-lifetime state; the browser releases them when the tab closes.
const resolved = new Map<string, string>();

// Concurrent mounts of the same not-yet-resolved URL share one resolution
// instead of each doing their own IndexedDB check / fetch.
const inflight = new Map<string, Promise<string>>();

function resolveSrc(src: string): Promise<string> {
  const existing = inflight.get(src);
  if (existing) return existing;

  const promise = (async () => {
    const cached = await getCachedImageUrl(src);
    const finalSrc = cached ?? (await fetchAndCacheImage(src)) ?? src;
    resolved.set(src, finalSrc);
    return finalSrc;
  })().finally(() => {
    inflight.delete(src);
  });

  inflight.set(src, promise);
  return promise;
}

/**
 * Drop-in <img> replacement that avoids the network entirely on a cache hit.
 *
 * Setting a real remote `src` on first render would make the browser's own
 * image loader fetch it immediately — before any async cache check could
 * run — defeating the point of caching. So instead this renders a skeleton
 * placeholder matching layout until the IndexedDB check resolves, then
 * renders the real `<img>` with either a cached blob URL or,
 * on a miss, the plain remote URL (which is fetched-and-cached for next
 * time). The gap is normally a handful of milliseconds — a local IndexedDB
 * read — and applies uniformly on SSR hard-loads and client navigation
 * alike, since image resolution is always client-driven either way.
 */
export function CachedImage({ src, ...rest }: CachedImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState<string | null>(
    () => resolved.get(src) ?? null,
  );

  useEffect(() => {
    const known = resolved.get(src);
    if (known) {
      setResolvedSrc(known);
      return;
    }

    let cancelled = false;
    setResolvedSrc(null);

    resolveSrc(src).then((finalSrc) => {
      if (!cancelled) setResolvedSrc(finalSrc);
    });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (resolvedSrc === null) {
    // All current call sites size the image via CSS (h-full w-full, etc.),
    // not the width/height attributes (those are just intrinsic-size hints
    // for the browser) — so matching className alone reproduces the layout.
    return <Skeleton aria-hidden className={rest.className} />;
  }

  return <img src={resolvedSrc} {...rest} />;
}
