import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { PackageCard } from "@/routes/packages.index";
import { getHoneymoonPackages } from "@/lib/packages-db";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/honeymoon")({
  loader: async () => ({ packages: await getHoneymoonPackages() }),
  head: () => ({
    meta: [
      { title: "Honeymoon Packages — Romantic Getaways | UniSetGo" },
      {
        name: "description",
        content:
          "Handpicked honeymoon packages for newlyweds — Bali coves, Swiss alps, Italian sunsets, Andaman shores and Kerala backwaters.",
      },
      { property: "og:title", content: "Honeymoon Packages — UniSetGo" },
      { property: "og:description", content: "Romantic getaways designed for newlyweds." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/honeymoon" }],
  }),
  component: HoneymoonPage,
});

function HoneymoonPage() {
  const { packages: items } = Route.useLoaderData();
  return (
    <div>
      <PageHero
        eyebrow="Curated selections for newlyweds"
        title="Honeymoons in"
        accent="the details"
        description="Rose-petal turndowns, sunset dinners, private transfers and photo-perfect stays — curated for the two of you, in the world's most romantic corners."
      >
        <WhatsAppCTA href={waLink("Hi UniSetGo, we're planning our honeymoon.")} label="Plan Our Honeymoon" />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">{p.tag}</p>
              <p className="mt-2 font-bold text-foreground">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-foreground sm:text-3xl">
          Curated honeymoon trips{" "}
          <span className="text-lg font-medium text-muted-foreground">({items.length})</span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          Every trip below can be extended, upgraded or customised — just tell us your dream.
        </p>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="text-lg font-semibold text-foreground">
              No packages available.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check back soon — new honeymoon packages are added regularly.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const PROMISES = [
  { tag: "Stays", title: "Honeymoon suites", detail: "Upgraded rooms with private balconies, pools or ocean views." },
  { tag: "Dining", title: "Sunset dinners", detail: "Private beach or rooftop dinners on at least one evening." },
  { tag: "Extras", title: "Petals & bubbly", detail: "Room décor, cake and welcome bubbly on arrival." },
  { tag: "Support", title: "Concierge on WhatsApp", detail: "One thread for spa, tours, upgrades — throughout the trip." },
];
