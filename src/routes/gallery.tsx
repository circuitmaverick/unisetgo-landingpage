import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Images, Star } from "lucide-react";
import { getGalleryReviews, type GalleryReview } from "@/lib/reviews-db";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PAGE_SIZE = 12;

export const Route = createFileRoute("/gallery")({
  validateSearch: (search: Record<string, unknown>): { review?: string } => ({
    review: typeof search.review === "string" ? search.review : undefined,
  }),
  loader: async () => {
    const reviews = await getGalleryReviews();
    return { reviews };
  },
  head: () => ({
    meta: [
      { title: "Gallery — UniSetGo" },
      {
        name: "description",
        content:
          "Photos from real UniSetGo trips, shared by our travellers — click any photo to read their story.",
      },
      { property: "og:title", content: "Gallery — UniSetGo" },
      {
        property: "og:description",
        content: "Real photos and stories from real UniSetGo travellers.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { reviews } = Route.useLoaderData();
  const { review: reviewIdParam } = Route.useSearch();
  const total = reviews.length;
  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / total || 0;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const pageStart = (page - 1) * PAGE_SIZE;
  const pageItems = useMemo(
    () => reviews.slice(pageStart, pageStart + PAGE_SIZE),
    [reviews, pageStart],
  );

  // Deep link from the homepage testimonials — open the matching review's
  // dialog directly (and jump the grid to its page) instead of making the
  // visitor find it themselves. Silently no-ops if the id isn't found (e.g.
  // its photos are all private, or it's not approved/visible).
  useEffect(() => {
    if (!reviewIdParam) return;
    const idx = reviews.findIndex((r) => r.id === reviewIdParam);
    if (idx < 0) return;
    setActiveIndex(idx);
    setPage(Math.floor(idx / PAGE_SIZE) + 1);
  }, [reviewIdParam, reviews]);

  function goToPage(next: number) {
    const clamped = Math.min(Math.max(next, 1), totalPages);
    setPage(clamped);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Gallery
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            Moments from <em className="not-italic text-accent">real trips</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Every photo below was shared by a traveller who planned their
            trip with UniSetGo. Click a photo to read their story.
          </p>

          {total > 0 && (
            <div className="mt-8 flex items-center gap-3">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.round(average) ? "fill-current" : "opacity-30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-white/90">
                {average.toFixed(1)} average from {total} reviews
              </span>
            </div>
          )}
        </div>
      </section>

      <section ref={gridRef} className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {total === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-16 text-center">
            <p className="text-lg font-semibold text-foreground">
              No photos yet.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check back soon — traveller photos will show up here as
              reviews come in.
            </p>
          </div>
        ) : (
          <>
            {totalPages > 1 && (
              <div className="mb-6">
                <GalleryPagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {pageItems.map((review, i) => {
                const globalIndex = pageStart + i;
                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setActiveIndex(globalIndex)}
                    className="group relative aspect-[4/5] overflow-hidden bg-secondary text-left shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                  >
                    <img
                      src={review.images[0]}
                      alt={`Photo shared by ${review.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {review.images.length > 1 && (
                      <span className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/50 text-white backdrop-blur">
                        <Images className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="mt-10">
                <GalleryPagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              </div>
            )}
          </>
        )}
      </section>

      <ReviewLightbox
        reviews={reviews}
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
}

/** Always includes page 1 and the last page, plus a window around the
 * current page, collapsing any gaps into an ellipsis marker. */
function getPageNumbers(page: number, totalPages: number): (number | "ellipsis")[] {
  const pages = new Set<number>([1, totalPages, page - 1, page, page + 1]);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev && p - prev > 1) result.push("ellipsis");
    result.push(p);
    prev = p;
  }
  return result;
}

function GalleryPagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) onPageChange(page - 1);
            }}
            aria-disabled={page === 1}
            className={page === 1 ? "pointer-events-none opacity-50" : undefined}
          />
        </PaginationItem>

        {pageNumbers.map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) onPageChange(page + 1);
            }}
            aria-disabled={page === totalPages}
            className={
              page === totalPages ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function ReviewLightbox({
  reviews,
  activeIndex,
  onIndexChange,
}: {
  reviews: GalleryReview[];
  activeIndex: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const total = reviews.length;
  const open = activeIndex !== null;
  const review = activeIndex !== null ? reviews[activeIndex] : null;
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [activeIndex]);

  const go = (dir: 1 | -1) => {
    if (activeIndex === null) return;
    onIndexChange(((activeIndex + dir) % total + total) % total);
  };

  const goImage = (dir: 1 | -1) => {
    if (!review) return;
    const count = review.images.length;
    setImageIndex((i) => ((i + dir) % count + count) % count);
  };

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, activeIndex, total]);

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onIndexChange(null)}>
      <DialogContent className="max-h-[90vh] max-w-4xl gap-0 overflow-hidden p-0 sm:rounded-3xl">
        {review && (
          <div className="grid max-h-[calc(90vh-2px)] overflow-y-auto md:grid-cols-2">
            <DialogTitle className="sr-only">
              Photo and review from {review.name}
            </DialogTitle>
            <div className="relative aspect-[4/5] bg-secondary md:aspect-auto">
              <img
                src={review.images[imageIndex]}
                alt={`Photo ${imageIndex + 1} shared by ${review.name}`}
                className="h-full w-full object-cover"
              />

              {review.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => goImage(-1)}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goImage(1)}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {review.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setImageIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${
                          i === imageIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto">
              <div className="flex text-accent">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                "{review.review}"
              </blockquote>
              <p className="mt-6 border-t border-border pt-4 font-bold text-foreground">
                {review.name}
              </p>
            </div>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="absolute right-16 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
