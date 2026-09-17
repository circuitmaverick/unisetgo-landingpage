import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Ship, Waves } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";
import { getCruises, type CruiseSummary } from "@/lib/cruises-db";
import { PackagesGridSkeleton } from "@/components/packages-skeletons";

export const Route = createFileRoute("/cruises/")({
  loader: async () => {
    const cruises = await getCruises();
    return { cruises };
  },
  pendingComponent: CruisesIndexPending,
  head: () => ({
    meta: [
      { title: "Cruise Lines — Sail with UniSetGo" },
      {
        name: "description",
        content:
          "Book curated cruise holidays with Cordelia, Genting, Royal Caribbean, NCL, MSC, Costa and Disney Cruise Lines through UniSetGo.",
      },
      { property: "og:title", content: "Cruise Lines — UniSetGo" },
      {
        property: "og:description",
        content:
          "Curated cruise holidays with the world's best-loved cruise lines.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/cruises" }],
  }),
  component: CruisesPage,
});

function CruisesHero() {
  return (
    <PageHero
      eyebrow="Cruise holidays"
      title="Sail with the world's"
      accent="finest cruise lines"
      description="From India's own Cordelia to Disney's magic and Royal Caribbean's bold new giants — we book, upgrade and design cruise holidays end to end."
    >
      <div className="flex flex-wrap gap-3">
        <WhatsAppCTA href={waLink("Hi UniSetGo, I'd like to plan a cruise holiday.")} label="Plan a Cruise" />
      </div>
    </PageHero>
  );
}

function CruisesIndexPending() {
  return (
    <div>
      <CruisesHero />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <Stat icon={<Ship className="h-5 w-5" />} label="Cruise lines" value="7+" />
          <Stat icon={<Waves className="h-5 w-5" />} label="Sailing regions" value="20+" />
          <Stat icon={<Anchor className="h-5 w-5" />} label="Departures / year" value="200+" />
        </div>
        <PackagesGridSkeleton />
      </section>
    </div>
  );
}

function CruisesPage() {
  const { cruises } = Route.useLoaderData();
  return (
    <div>
      <CruisesHero />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <Stat icon={<Ship className="h-5 w-5" />} label="Cruise lines" value={"7+"} />
          <Stat icon={<Waves className="h-5 w-5" />} label="Sailing regions" value="20+" />
          <Stat icon={<Anchor className="h-5 w-5" />} label="Departures / year" value="200+" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cruises.map((c) => (
            <CruiseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary">{icon}</div>
      <div>
        <p className="text-2xl font-black text-primary">{value}</p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

function CruiseCard({ c }: { c: CruiseSummary }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <Link
        to="/cruises/$slug"
        params={{ slug: c.slug }}
        className="flex flex-1 flex-col"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={c.image}
            alt={c.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          {c.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
              {c.badge}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6 pb-0">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.tagline}</p>
          <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary">{c.name}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.blurb}</p>
          <p className="mt-3 text-xs font-semibold text-primary">{c.regions.join(" • ")}</p>
        </div>
      </Link>
      <div className="p-6 pt-5">
        <a
          href={waLink(`Hi UniSetGo, I'd like to enquire about a ${c.name} cruise.`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full gradient-accent px-4 py-2.5 text-sm font-bold text-accent-foreground hover:opacity-95"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
