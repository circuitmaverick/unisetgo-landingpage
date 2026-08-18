import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

// Swap `image` for real photos (e.g. imported assets like your `vatican1`
// import) once you have them — these are placeholders so the layout can
// be previewed.
const REVIEWS = [
  {
    author: "Ananya Rao",
    role: "COO, Fintech Startup",
    time: "2 months ago",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-1/400/500",
    text: "UniSetGo planned our 60-person offsite to Dubai down to the last transfer. Zero hiccups, and finance loved the pricing.",
  },
  {
    author: "Rohit & Priya",
    role: "Bangalore",
    time: "4 months ago",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-2/400/500",
    text: "The Switzerland honeymoon they built for us felt like a Netflix travel show. Every hotel was a story, every transfer on time.",
  },
  {
    author: "Vikram Sethi",
    role: "MD, Consulting Firm",
    time: "6 months ago",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-3/400/500",
    text: "Our board summit needed white-glove handling in Doha. They delivered — and stayed on WhatsApp through the whole trip.",
  },
  {
    author: "Meera Iyer",
    role: "Founder, D2C Brand",
    time: "3 weeks ago",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-4/400/500",
    text: "First time using a travel partner for a work retreat and it was seamless. Clear pricing, fast replies, no surprises on ground.",
  },
  {
    author: "Karan Malhotra",
    role: "Head of People, SaaS Co",
    time: "5 months ago",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-5/400/500",
    text: "We've done three offsites with UniSetGo now. Each one better organised than the last — they actually listen to feedback.",
  },
];

const AUTOPLAY_MS = 5000;

// Circular offset: how far `index` sits from `active`, wrapped to the
// shortest signed distance around the array — so with 5 reviews and the
// last one active, the "next" card correctly wraps back to index 0.
function circularOffset(index: number, active: number, length: number) {
  let diff = index - active;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

function cardPosition(offset: number) {
  if (offset === 0) {
    return {
      className: "translate-x-0 scale-100 opacity-100 z-30",
      interactive: true,
    };
  }
  if (offset === 1) {
    return {
      className:
        "translate-x-[62%] rotate-2 scale-[0.94] opacity-40 z-10 pointer-events-none",
      interactive: false,
    };
  }
  if (offset === -1) {
    return {
      className:
        "-translate-x-[62%] -rotate-2 scale-[0.94] opacity-40 z-10 pointer-events-none",
      interactive: false,
    };
  }
  if (offset > 1) {
    return {
      className:
        "translate-x-[120%] rotate-3 scale-[0.88] opacity-0 z-0 pointer-events-none",
      interactive: false,
    };
  }
  return {
    className:
      "-translate-x-[120%] -rotate-3 scale-[0.88] opacity-0 z-0 pointer-events-none",
    interactive: false,
  };
}

export default function TestimonialsCarousel() {
  const length = REVIEWS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setActive(((i % length) + length) % length);
  const next = () => goTo(active + 1);
  const prev = () => goTo(active - 1);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, length]);

  // manual nav resets the timer so it doesn't jump right after a click
  const handleManualNav = (fn: () => void) => {
    fn();
    if (timerRef.current) clearInterval(timerRef.current);
    setPaused(false);
  };

  const positioned = useMemo(
    () =>
      REVIEWS.map((review, index) => ({
        review,
        index,
        ...cardPosition(circularOffset(index, active, length)),
      })),
    [active, length],
  );

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="mb-12 text-center">
        <span className="eyebrow">Client stories</span>
        <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
          What our <span className="text-primary">clients</span> say
        </h2>
      </div>

      <div
        className="relative mx-auto h-[360px] max-w-3xl sm:h-[300px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {positioned.map(({ review, index, className, interactive }) => (
          <article
            key={review.author}
            tabIndex={interactive ? 0 : -1}
            aria-hidden={!interactive}
            className={`absolute inset-0 mx-auto flex w-full max-w-2xl transform-gpu overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${className}`}
          >
            <div className="hidden w-2/5 shrink-0 sm:block">
              <img
                src={review.image}
                alt={review.author}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="mb-3 flex text-accent">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="line-clamp-4 text-sm text-foreground/90 sm:text-base">
                  "{review.text}"
                </blockquote>
              </div>

              <div className="mt-4">
                {/* <button
                  type="button"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground sm:text-sm"
                >
                  Read Full Review <ArrowUpRight className="h-3.5 w-3.5" />
                </button> */}

                <div className="mt-4 border-t border-border pt-3">
                  <p className="font-bold text-foreground">{review.author}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {review.role} · {review.time}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}

        <button
          type="button"
          onClick={() => handleManualNav(prev)}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 z-40 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] transition hover:scale-105 sm:h-11 sm:w-11"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          type="button"
          onClick={() => handleManualNav(next)}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 z-40 grid h-9 w-9 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] transition hover:scale-105 sm:h-11 sm:w-11"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* dots */}
      <div className="mt-8 flex justify-center gap-2">
        {REVIEWS.map((review, i) => (
          <button
            key={review.author}
            type="button"
            onClick={() => handleManualNav(() => goTo(i))}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-primary" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  );
}