import { createFileRoute } from "@tanstack/react-router";
import { Anchor, Ship, Waves } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/cruises")({
  head: () => ({
    meta: [
      { title: "Cruise Lines — Sail with UniSetGo" },
      {
        name: "description",
        content:
          "Book curated cruise holidays with Cordelia, Genting, Royal Caribbean, NCL, MSC, Costa and Disney Cruise Lines through UniSetGo.",
      },
      { property: "og:title", content: "Cruise Lines — UniSetGo" },
      { property: "og:description", content: "Curated cruise holidays with the world's best-loved cruise lines." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/cruises" }],
  }),
  component: CruisesPage,
});

type CruiseLine = {
  name: string;
  tagline: string;
  blurb: string;
  regions: string[];
  image: string;
  badge?: string;
};

const CRUISES: CruiseLine[] = [
  {
    name: "Cordelia Cruises",
    tagline: "India's own premium cruise line",
    blurb:
      "Sail from Mumbai and Chennai to Goa, Lakshadweep and Sri Lanka aboard India's flagship cruise experience — desi flavours, world-class entertainment.",
    regions: ["Mumbai · Goa · Lakshadweep · Sri Lanka"],
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80",
    badge: "Made in India",
  },
  {
    name: "Genting Dream Cruises",
    tagline: "Asia's leading luxury cruise",
    blurb:
      "Sail Singapore, Malaysia, Thailand and beyond aboard Genting's Dream and World-class ships — spa villas, waterparks and Michelin-starred dining.",
    regions: ["Singapore · Malaysia · Thailand"],
    image: "https://images.unsplash.com/photo-1580541631950-7282082b53fe?w=1200&q=80",
  },
  {
    name: "Royal Caribbean",
    tagline: "The world's boldest ships",
    blurb:
      "From Icon of the Seas to Wonder of the Seas — surf simulators, ice skating, zip lines and Broadway shows at sea. Caribbean, Mediterranean, Asia and Alaska.",
    regions: ["Caribbean · Mediterranean · Alaska"],
    image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=1200&q=80",
    badge: "Global",
  },
  {
    name: "Norwegian Cruise Line (NCL)",
    tagline: "Freestyle cruising, no dress codes",
    blurb:
      "Cruise your way — no fixed dining times, no formal nights. NCL's freestyle format is perfect for first-time cruisers and families who want flexibility.",
    regions: ["Caribbean · Europe · Hawaii"],
    image: "https://images.unsplash.com/photo-1566375638485-4d29e5b76d67?w=1200&q=80",
  },
  {
    name: "MSC Cruises",
    tagline: "European elegance, worldwide",
    blurb:
      "Italian-designed ships with a distinctly European sensibility — Mediterranean summers, Caribbean winters, and the exclusive MSC Yacht Club suites.",
    regions: ["Mediterranean · Caribbean · Northern Europe"],
    image: "https://images.unsplash.com/photo-1607435097405-db48f377bff6?w=1200&q=80",
  },
  {
    name: "Costa Cruises",
    tagline: "La dolce vita at sea",
    blurb:
      "Italy's most-loved cruise brand — pasta made fresh, aperitivo on deck, and unhurried port stops across the Mediterranean and the Emirates.",
    regions: ["Mediterranean · UAE · Northern Europe"],
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80",
  },
  {
    name: "Disney Cruise Line",
    tagline: "Magic at sea for the whole family",
    blurb:
      "Character breakfasts, Broadway-scale shows, adults-only lounges and Disney's own private island — the gold standard for family cruising.",
    regions: ["Caribbean · Bahamas · Europe"],
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&q=80",
    badge: "Family favourite",
  },
];

function CruisesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Cruise holidays"
        title="Sail with the world's"
        accent="finest cruise lines"
        description="From India's own Cordelia to Disney's magic and Royal Caribbean's bold new giants — we book, upgrade and design cruise holidays end to end."
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppCTA href={waLink("Hi UniSetGo, I'd like to plan a cruise holiday.")} label="Plan a Cruise" />
          {/* <WhatsAppCTA
            variant="outline"
            href={waLink("Hi UniSetGo, share cruise deals for this season.")}
            label="See This Season's Deals"
          /> */}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <Stat icon={<Ship className="h-5 w-5" />} label="Cruise lines" value="7+" />
          <Stat icon={<Waves className="h-5 w-5" />} label="Sailing regions" value="20+" />
          <Stat icon={<Anchor className="h-5 w-5" />} label="Departures / year" value="200+" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CRUISES.map((c) => (
            <CruiseCard key={c.name} c={c} />
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

function CruiseCard({ c }: { c: CruiseLine }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
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
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.tagline}</p>
        <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary">{c.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.blurb}</p>
        <p className="mt-3 text-xs font-semibold text-primary">{c.regions.join(" • ")}</p>
        <a
          href={waLink(`Hi UniSetGo, I'd like to enquire about a ${c.name} cruise.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full gradient-accent px-4 py-2.5 text-sm font-bold text-accent-foreground hover:opacity-95"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
