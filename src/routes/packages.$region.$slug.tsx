import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { packageBySlug, formatINR, TRIP_TYPES } from "@/data/packages";
import type { Package } from "@/data/packages";
import { regionBySlug } from "@/data/regions";
import type { Region } from "@/data/regions";
import {
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, mailLink } from "@/lib/contact";

export const Route = createFileRoute("/packages/$region/$slug")({
  loader: ({ params }) => {
    const pkg = packageBySlug(params.region, params.slug);
    if (!pkg) throw notFound();
    const region = regionBySlug(params.region)!;
    return { pkg, region };
  },
  head: ({ params, loaderData }) => {
    const pkg = loaderData?.pkg;
    if (!pkg) {
      return {
        meta: [
          { title: "Package — UniSetGo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${pkg.title} — ${pkg.days}D / ${pkg.nights}N — UniSetGo`;
    const url = `/packages/${params.region}/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: pkg.summary },
        {
          name: "keywords",
          content: `${pkg.title}, ${pkg.country} tour, ${pkg.country} travel package, ${pkg.days} day ${pkg.country}, UniSetGo`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: pkg.summary },
        { property: "og:image", content: pkg.heroImage },
        { property: "og:image:alt", content: pkg.title },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "product:price:amount", content: String(pkg.priceFrom) },
        { property: "product:price:currency", content: "INR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: pkg.summary },
        { name: "twitter:image", content: pkg.heroImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: pkg.title,
            description: pkg.overview,
            touristType: pkg.tripType,
            image: pkg.heroImage,
            itinerary: pkg.itinerary.map((d) => ({
              "@type": "ListItem",
              position: d.day,
              name: d.title,
              description: d.detail,
            })),
            offers: {
              "@type": "Offer",
              price: pkg.priceFrom,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
            provider: { "@type": "TravelAgency", name: "UniSetGo" },
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: PackageDetail,
});

function PackageDetail() {
  const { pkg, region } = Route.useLoaderData() as {
    pkg: Package;
    region: Region;
  };
  const bookMsg = `Hi UniSetGo, I'd like to proceed with booking the "${pkg.title}" (${pkg.days}D/${pkg.nights}N, from ${formatINR(pkg.priceFrom)}). Please share the next steps.`;
  const customMsg = `Hi UniSetGo, I'd like to customise the "${pkg.title}" package (${pkg.days}D/${pkg.nights}N). Could we adjust the dates/cities/stays?`;
  const tripTypeLabel =
    TRIP_TYPES.find((t) => t.value === pkg.tripType)?.label ?? pkg.tripType;

  return (
    <article>
      {/* Hero */}
      <section className="relative">
        <div className="relative aspect-[16/9] max-h-[70vh] w-full overflow-hidden bg-primary sm:aspect-[16/7]">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative -mt-32 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:-mt-40 sm:p-10">
            <Link
              to="/packages/$region"
              params={{ region: pkg.region }}
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.22em] text-accent hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> {region.name}
            </Link>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary">
                {tripTypeLabel}
              </span>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent">
                {pkg.days}D / {pkg.nights}N
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-black text-foreground sm:text-5xl">
              {pkg.title}
            </h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {pkg.summary}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Meta
                icon={Clock}
                label="Duration"
                value={`${pkg.days}D / ${pkg.nights}N`}
              />
              <Meta icon={MapPin} label="Country" value={pkg.country} />
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  Price from
                </p>
                <p className="text-2xl font-black text-primary">
                  {formatINR(pkg.priceFrom)}
                </p>
                <p className="text-xs text-muted-foreground">per person</p>
              </div>
              <Meta icon={Sparkles} label="Trip type" value={tripTypeLabel} />
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Button
                asChild
                className="h-12 rounded-full gradient-accent text-accent-foreground shadow-[var(--shadow-card)] hover:opacity-95"
              >
                <a href={waLink(bookMsg)} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> Proceed to Booking
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href={waLink(customMsg)} target="_blank" rel="noreferrer">
                  <Wand2 className="mr-2 h-4 w-4" /> Customise This Package
                </a>
              </Button>
            </div>
            <p className="mt-2 text-center text-[0.7rem] text-muted-foreground">
              Both options open a WhatsApp chat with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl font-black text-foreground">Trip overview</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {pkg.overview}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every UniSetGo journey is delivered end to end — flights, transfers,
            handpicked stays and a real trip designer on WhatsApp before, during
            and after your trip. Prices are indicative from-rates for twin
            sharing; we'll tailor a final quote to your dates, group size and
            preferred hotel category.
          </p>

          <h2 className="mt-12 text-2xl font-black text-foreground">Gallery</h2>
          <Gallery images={pkg.gallery} title={pkg.title} />

          <h2 className="mt-12 text-2xl font-black text-foreground">
            Highlights
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {pkg.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 rounded-xl bg-secondary/50 p-3 text-sm"
              >
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-black text-foreground">
            Day-by-day itinerary
          </h2>
          <ol className="mt-6 space-y-4">
            {pkg.itinerary.map((d) => (
              <li
                key={d.day}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary font-black text-primary-foreground">
                  D{d.day}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-foreground">{d.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {d.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-3 rounded-3xl gradient-hero p-8 text-primary-foreground shadow-[var(--shadow-card)] sm:grid-cols-2">
            <div className="sm:col-span-2">
              <p className="text-xs uppercase tracking-widest text-accent">
                Ready when you are
              </p>
              <p className="mt-2 text-2xl font-black">
                Book this trip, or make it yours.
              </p>
              <p className="mt-1 text-sm text-white/80">
                Confirm the itinerary as-is on WhatsApp, or ask us to swap
                cities, upgrade stays, add days or shift dates.
              </p>
            </div>
            <Button
              asChild
              className="h-12 rounded-full bg-accent text-accent-foreground hover:opacity-95"
            >
              <a href={waLink(bookMsg)} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Proceed to Booking
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={waLink(customMsg)} target="_blank" rel="noreferrer">
                <Wand2 className="mr-2 h-4 w-4" /> Customise This Package
              </a>
            </Button>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary">Inclusions</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {pkg.inclusions.map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent mt-0.5" />{" "}
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary">Exclusions</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {pkg.exclusions.map((i) => (
                <li key={i} className="flex gap-2">
                  <XCircle className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />{" "}
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Prefer email?
            </p>
            <p className="mt-2 text-sm text-foreground">
              Drop us a note and we'll respond within a working day with a
              tailored quote.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-4 w-full rounded-full"
            >
              <a href={mailLink(`Enquiry: ${pkg.title}`, bookMsg)}>Email us</a>
            </Button>
          </div>
        </aside>
      </section>
    </article>
  );
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  const go = (dir: 1 | -1) => setIdx((i) => (i + dir + total) % total);

  return (
    <div className="mt-4">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-secondary shadow-[var(--shadow-card)]">
        {images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={`${title} — image ${i + 1}`}
            width={1600}
            height={1000}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Show image ${i + 1}`}
              className={`aspect-square overflow-hidden rounded-xl border-2 transition ${
                i === idx
                  ? "border-accent"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <p className="flex items-center gap-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </p>
      <p className="mt-1 truncate text-base font-bold text-foreground">
        {value}
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h2 className="text-2xl font-black">Package not found</h2>
      <p className="mt-2 text-muted-foreground">Browse all packages instead.</p>
      <Link
        to="/packages"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
      >
        See all packages
      </Link>
    </div>
  );
}
