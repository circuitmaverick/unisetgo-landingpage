import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Headset,
  Sparkles,
  ShieldCheck,
  Star,
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroCollage from "@/assets/hero-collage.jpg";
import { REGIONS } from "@/data/regions";
import { featuredPackages, formatINR } from "@/data/packages";
import { waLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import vatican1 from '@/assets/pkg-vatican-1.jpg';
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Pillar from "@/components/pillar";
import { getTestimonials } from "@/lib/testimonials-db";

export const Route = createFileRoute("/")({
  loader: async () => ({ testimonials: await getTestimonials() }),
  head: () => ({
    meta: [
      { title: "UniSetGo — Explore Beyond Boundaries" },
      {
        name: "description",
        content:
          "Bespoke corporate travel and curated leisure packages across the Middle East, Europe, Asia and India.",
      },
      { property: "og:title", content: "UniSetGo — Explore Beyond Boundaries" },
      {
        property: "og:description",
        content:
          "Bespoke corporate travel and curated leisure packages worldwide.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const featured = featuredPackages();
  const { testimonials } = Route.useLoaderData();

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative -mt-16 min-h-[92vh] overflow-hidden bg-primary pt-16 text-primary-foreground">
        {/* background image */}
        <img
          src={heroCollage}
          alt="Travel destinations collage"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.28_0.16_269)_10%,oklch(0.28_0.16_269_/_0.6)_55%,transparent_100%)]" />

        {/* decorative bars */}
        <div className="pointer-events-none absolute right-8 top-32 hidden gap-1 lg:flex">
          <span className="h-1.5 w-16 rounded-full bg-accent" />
          <span className="h-1.5 w-8 rounded-full bg-white/60" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-24 pt-16 sm:px-8 md:min-h-[80vh] md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          <div className="max-w-2xl">
            <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
              Corporate travel, curated
            </span>
            <h1 className="mt-6 text-balance font-black leading-[0.95] tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Explore <em className="not-italic text-accent">Beyond</em>
              <br />
              Boundaries.
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              UniSetGo designs bespoke journeys for corporate and families —
              flights, stays, itineraries and on-trip concierge, engineered end
              to end.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-elegant)] hover:opacity-95"
              >
                <Link to="/packages">
                  Explore Packages <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <a
                  href={waLink("Hi UniSetGo, I'd like to plan a custom trip.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Plan a Custom Trip
                </a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat n="12+" label="Regions covered" />
              <Stat n="500+" label="Trips delivered" />
              <Stat n="4.9★" label="Client rating" />
            </div>
          </div>

          {/* floating package card preview */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-6 rounded-3xl bg-white/5 blur-2xl" />
            <div className="relative rotate-[3deg] rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md shadow-[var(--shadow-elegant)]">
              <img
                src={featured[0].heroImage}
                alt={featured[0].title}
                width={800}
                height={520}
                loading="lazy"
                className="h-64 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">
                    Featured
                  </p>
                  <p className="text-lg font-bold">{featured[0].title}</p>
                </div>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  {featured[0].durationDays}D
                </span>
              </div>
            </div>
            {/* <div className="absolute -bottom-6 -left-8 rotate-[-4deg] rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
              <p className="text-[0.6rem] uppercase tracking-widest text-white/60">
                From
              </p>
              <p className="text-lg font-black">
                {formatINR(featured[0].priceFrom)}
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* REGION STRIP */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Where next</span>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              Curated <span className="text-primary">regions</span>, real
              expertise.
            </h2>
          </div>
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            All packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {REGIONS.map((r, i) => (
            <Link
              key={r.slug}
              to="/packages/$region"
              params={{ region: r.slug }}
              // className={`group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${
              //   i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto" : "aspect-[4/5]"
              // }`}
              className={`group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] aspect-[4/5]`}
            >
              <img
                src={r.image}
                alt={r.name}
                loading="lazy"
                width={1000}
                height={1200}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" /> */}
              <div className="relative flex h-full flex-col justify-end p-5 bg-linear-to-t from-gray-900/70 via-transparent to-transparent">
                {/* <span className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-accent">
                  {r.kind === "domestic" ? "India" : "International"}
                </span> */}
                <h3 className={`mt-1 font-black leading-tight text-xl`}>
                  {r.name}
                </h3>
                <p className="mt-1 text-sm text-white/70">{r.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Editor's picks</span>
              <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
                Signature <span className="text-primary">journeys</span>.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A handful of our most-booked packages. Every one is customisable —
              swap cities, add days, upgrade stays.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/packages/$region/$slug"
                params={{ region: p.region, slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    loading="lazy"
                    width={1400}
                    height={900}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground">
                    {p.country}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                        From
                      </p>
                      <p className="text-lg font-black text-primary">
                        {formatINR(p.priceFrom)}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-accent">
                      {p.durationDays}D / {p.nights}N →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY UNISETGO */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <span className="eyebrow">Why UniSetGo</span>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              Travel like a <span className="text-primary">guest</span>,<br />{" "}
              not a planner.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Behind every trip is a real trip designer — someone who visits,
              negotiates and double-checks. Elegance, without the guesswork.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Pillar
              icon={Compass}
              title="Tailored Itineraries"
              body="Every route, every stay, every meal — designed around you."
            />
            <Pillar
              icon={Sparkles}
              title="Corporate & MICE"
              body="Team offsites, conferences and incentive trips, handled."
            />
            <Pillar
              icon={Headset}
              title="On-trip Support"
              body="A real person on the other end, in your timezone."
            />
            <Pillar
              icon={ShieldCheck}
              title="Trusted Partners"
              body="IATA-affiliated, vetted vendors across 30+ countries."
            />
          </div>
        </div>
      </section>

      {/* DOMESTIC BAND */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Domestic India
              </span>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                A subcontinent, <br /> in every mood.
              </h2>
              <p className="mt-4 text-white/80">
                From the Himalayan north to the beaches of the south — pick a
                region, we'll do the rest.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-accent text-accent-foreground"
            >
              <Link to="/packages/$region" params={{ region: "domestic" }}>
                All Domestic Packages <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              "North India",
              "South India",
              "Himalayas",
              "Beaches & Islands",
            ].map((name) => (
              <Link
                key={name}
                to="/packages/$region"
                params={{ region: "domestic" }}
                className="group rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition hover:border-accent hover:bg-white/10"
              >
                <p className="text-lg font-bold">{name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/60 group-hover:text-accent">
                  View packages →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <TestimonialsCarousel testimonials={testimonials} />
      {/* <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
            >
              <div className="mb-4 flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-bold text-foreground">{t.author}</p>
                <p className="text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] gradient-hero p-10 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-16">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                Let's build it
              </span>
              <h2 className="mt-4 text-3xl font-black sm:text-5xl">
                Ready to plan your{" "}
                <em className="not-italic text-accent">next trip?</em>
              </h2>
              <p className="mt-3 text-white/80">
                Tell us where and when — we'll send a bespoke plan within 24
                hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent text-accent-foreground hover:opacity-95"
              >
                <a
                  href={waLink("Hi UniSetGo, I'd like to plan a custom trip.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link to="/contact">Contact page</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black text-white">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-white/60">
        {label}
      </p>
    </div>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="bg-muted/60 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-14 text-center">
          <span className="eyebrow">Client stories</span>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
            What our <span className="text-primary">travellers</span> say
          </h2>
        </div>

        <div className="relative mx-auto max-w-lg py-4">
          {/* peeking cards behind */}
          <div className="absolute -left-10 top-8 hidden h-[85%] w-[94%] rotate-[-4deg] rounded-3xl bg-card opacity-70 shadow-[var(--shadow-card)] sm:block" />
          <div className="absolute -right-10 top-8 hidden h-[85%] w-[94%] rotate-[4deg] rounded-3xl bg-card opacity-70 shadow-[var(--shadow-card)] sm:block" />

          {/* nav buttons */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-foreground shadow-[var(--shadow-card)] transition hover:scale-105 sm:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-white text-foreground shadow-[var(--shadow-card)] transition hover:scale-105 sm:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* main card */}
          <figure className="relative z-10 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
            <div className="flex items-center justify-between">
              <div className="flex text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              {/* Swap for Google's actual "G" mark if you want brand-exact icon */}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-sm font-black text-muted-foreground">
                G
              </span>
            </div>

            <blockquote className="mt-4 text-foreground/90">
              "{t.quote}"
            </blockquote>

            <button
              type="button"
              className="mt-4 inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
            >
              Read Full Review <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <div className="my-6 border-t border-border" />

            <figcaption className="flex items-center gap-4">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${t.avatarBg}`}
              >
                {t.initial}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-foreground">{t.author}</p>
                  <span className="text-xs text-muted-foreground">
                    {t.time}
                  </span>
                </div>
                <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
                  <BadgeCheck className="h-3.5 w-3.5" /> Source Google
                </span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "UniSetGo planned our 60-person offsite to Dubai down to the last transfer. Zero hiccups, and finance loved the pricing.",
    author: "Ananya Rao",
    role: "COO, Fintech Startup",
    rating: 5,
    time: "2 months ago",
    initial: "A",
    avatarBg: "bg-royal",
  },
  {
    quote:
      "The Switzerland honeymoon they built for us felt like a Netflix travel show. Every hotel was a story.",
    author: "Rohit & Priya",
    role: "Bangalore",
    rating: 5,
    time: "4 months ago",
    initial: "R",
    avatarBg: "bg-accent",
  },
  {
    quote:
      "Our board summit needed white-glove handling in Doha. They delivered — and stayed on WhatsApp through the trip.",
    author: "Vikram Sethi",
    role: "MD, Consulting Firm",
    rating: 5,
    time: "6 months ago",
    initial: "V",
    avatarBg: "bg-navy",
  },
];
