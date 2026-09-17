import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PackageReview } from "@/lib/packages-db";

const PREVIEW_COUNT = 3;

function StarRow({
  rating,
  size = "h-4 w-4",
}: {
  rating: number;
  size?: string;
}) {
  return (
    <div className="flex text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < Math.round(rating) ? "fill-current" : "opacity-30"
          }`}
        />
      ))}
    </div>
  );
}

export function PackageReviewsSection({
  title,
  rating,
  reviewCount,
  reviews,
}: {
  title: string;
  rating: number;
  reviewCount: number;
  reviews: PackageReview[];
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const preview = reviews.slice(0, PREVIEW_COUNT);

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h3 className="text-lg font-bold text-primary">Reviews</h3>

      {reviewCount === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">
          No reviews yet for this package.
        </p>
      ) : (
        <>
          <div className="mt-3 flex items-center gap-2">
            <StarRow rating={rating} />
            <span className="text-sm font-semibold text-foreground">
              {rating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              ({reviewCount} review{reviewCount === 1 ? "" : "s"})
            </span>
          </div>

          <ul className="mt-4 space-y-4">
            {preview.map((r) => (
              <li
                key={r.id}
                className="border-t border-border pt-3 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {r.name}
                  </p>
                  <StarRow rating={r.rating} size="h-3.5 w-3.5" />
                </div>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                  {r.review}
                </p>
              </li>
            ))}
          </ul>

          {reviewCount > PREVIEW_COUNT && (
            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="mt-4 w-full rounded-full border border-border py-2 text-sm font-semibold text-primary transition hover:bg-secondary"
            >
              View all {reviewCount} reviews
            </button>
          )}
        </>
      )}

      <ReviewsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={title}
        rating={rating}
        reviewCount={reviewCount}
        reviews={reviews}
      />
    </div>
  );
}

function ReviewsDialog({
  open,
  onOpenChange,
  title,
  rating,
  reviewCount,
  reviews,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  rating: number;
  reviewCount: number;
  reviews: PackageReview[];
}) {
  const [sort, setSort] = useState<"best" | "worst">("best");

  const distribution = useMemo(() => {
    const counts = [0, 0, 0, 0, 0]; // index 0 -> 1 star ... index 4 -> 5 star
    for (const r of reviews) {
      const idx = Math.round(r.rating) - 1;
      if (idx >= 0 && idx <= 4) counts[idx] += 1;
    }
    return counts;
  }, [reviews]);

  const sorted = useMemo(() => {
    const copy = [...reviews];
    copy.sort((a, b) => (sort === "best" ? b.rating - a.rating : a.rating - b.rating));
    return copy;
  }, [reviews, sort]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] max-w-2xl gap-0 overflow-hidden p-0 sm:rounded-3xl">
        <div className="flex max-h-[85vh] flex-col">
          <div className="shrink-0 border-b border-border p-6">
            <DialogTitle className="text-xl font-black text-foreground">
              Reviews for {title}
            </DialogTitle>

            <div className="mt-3 flex items-center gap-2">
              <StarRow rating={rating} />
              <span className="text-lg font-black text-foreground">
                {rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({reviewCount} review{reviewCount === 1 ? "" : "s"})
              </span>
            </div>

            <div className="mt-4 space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = distribution[star - 1];
                const pct = reviewCount ? (count / reviewCount) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="w-8 shrink-0 text-muted-foreground">
                      {star}★
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="w-6 shrink-0 text-right text-muted-foreground">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <label
                htmlFor="review-sort"
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                Sort
              </label>
              <select
                id="review-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as "best" | "worst")}
                className="h-9 rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="best">Highest rated first</option>
                <option value="worst">Lowest rated first</option>
              </select>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-5">
              {sorted.map((r) => (
                <li key={r.id} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-foreground">{r.name}</p>
                    <StarRow rating={r.rating} size="h-3.5 w-3.5" />
                  </div>
                  <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">
                    {r.review}
                  </p>
                  {r.images.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.images.map((src, i) => (
                        <a
                          key={src + i}
                          href={src}
                          target="_blank"
                          rel="noreferrer"
                          className="block h-16 w-16 overflow-hidden rounded-lg bg-secondary"
                        >
                          <img
                            src={src}
                            alt={`Photo ${i + 1} from ${r.name}'s review`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
