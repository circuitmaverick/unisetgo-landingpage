import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/gallery")({
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
  const total = TESTIMONIALS.length;
  const average =
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / total || 0;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {TESTIMONIALS.map((review, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary text-left shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <img
                src={review.image}
                alt={`Photo shared by ${review.author}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 pt-10">
                <div className="flex text-accent">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-1 truncate text-sm font-bold text-white">
                  {review.author}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ReviewLightbox
        activeIndex={activeIndex}
        onIndexChange={setActiveIndex}
      />
    </div>
  );
}

function ReviewLightbox({
  activeIndex,
  onIndexChange,
}: {
  activeIndex: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const total = TESTIMONIALS.length;
  const open = activeIndex !== null;
  const review = activeIndex !== null ? TESTIMONIALS[activeIndex] : null;

  const go = (dir: 1 | -1) => {
    if (activeIndex === null) return;
    onIndexChange(((activeIndex + dir) % total + total) % total);
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
  }, [open, activeIndex]);

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onIndexChange(null)}>
      <DialogContent className="max-h-[90vh] max-w-4xl gap-0 overflow-hidden p-0 sm:rounded-3xl">
        {review && (
          <div className="grid max-h-[calc(90vh-2px)] overflow-y-auto md:grid-cols-2">
            <DialogTitle className="sr-only">
              Photo and review from {review.author}
            </DialogTitle>
            <div className="relative aspect-[4/5] bg-secondary md:aspect-auto">
              <img
                src={review.image}
                alt={`Photo shared by ${review.author}`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto">
              <div className="flex text-accent">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                "{review.text}"
              </blockquote>
              <p className="mt-6 border-t border-border pt-4 font-bold text-foreground">
                {review.author}
              </p>
            </div>
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
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
