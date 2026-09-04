import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Guest Reviews — UniSetGo" },
      {
        name: "description",
        content:
          "Read what UniSetGo travellers have to say — real trip feedback from families, couples and groups across our destinations.",
      },
      { property: "og:title", content: "Guest Reviews — UniSetGo" },
      {
        property: "og:description",
        content: "Real feedback from real UniSetGo travellers.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const total = TESTIMONIALS.length;
  const average =
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / total || 0;

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Guest reviews
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            Stories from <em className="not-italic text-accent">real trips</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Every review below is unedited feedback from travellers who
            planned their trip with UniSetGo.
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
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((review, i) => (
            <article
              key={i}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]"
            >
              <img
                src={review.image}
                alt={review.author}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-6">
                <div className="mb-3 flex text-accent">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="whitespace-pre-line text-sm text-foreground/90">
                  "{review.text}"
                </blockquote>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-bold text-foreground">{review.author}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
