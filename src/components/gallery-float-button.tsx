import { Link, useMatchRoute } from "@tanstack/react-router";
import { Images } from "lucide-react";

/**
 * Floating tab pinned to the side of the viewport, shown only at the `xl`
 * breakpoint and up — the same breakpoint where SiteHeader swaps its
 * hamburger menu for the full desktop nav (see site-header.tsx's
 * `xl:flex`/`xl:hidden`), so this never competes with the mobile menu.
 */
export function GalleryFloatButton() {
  const matchRoute = useMatchRoute();
  const onGalleryPage = !!matchRoute({ to: "/gallery", fuzzy: false });
  if (onGalleryPage) return null;

  return (
    <Link
      to="/gallery"
      aria-label="Open the photo gallery"
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-r-full bg-primary py-3 pl-4 pr-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-primary/90 hover:pr-6 xl:flex"
    >
      <Images className="h-4 w-4" />
      Gallery
    </Link>
  );
}
