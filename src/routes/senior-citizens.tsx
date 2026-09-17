import { createFileRoute } from "@tanstack/react-router";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { PackageCard } from "@/routes/packages.index";
import { getSeniorCitizenPackages } from "@/lib/packages-db";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/senior-citizens")({
  loader: async () => ({ packages: await getSeniorCitizenPackages() }),
  head: () => ({
    meta: [
      { title: "Senior Citizen Travel Packages — UniSetGo" },
      {
        name: "description",
        content:
          "Gentle-paced holidays for senior citizens — comfortable stays, low walking days and doctor-on-call support across India and abroad.",
      },
      { property: "og:title", content: "Senior Citizen Packages — UniSetGo" },
      {
        property: "og:description",
        content: "Comfort-first holidays designed for senior travellers.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/senior-citizens" }],
  }),
  component: SeniorCitizensPage,
});

function SeniorCitizensPage() {
  const { packages: items } = Route.useLoaderData();
  return (
    <div>
      <PageHero
        eyebrow="Senior citizens"
        title="Holidays at a"
        accent="gentler pace"
        description="Comfort-first itineraries with shorter travel days, ground-floor rooms, verified vegetarian meals and doctor-on-call support — so parents and grandparents travel worry-free."
      >
        <WhatsAppCTA
          href={waLink(
            "Hi UniSetGo, I'd like a senior-friendly holiday package.",
          )}
          label="Plan a Senior Trip"
        />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                {p.tag}
              </p>
              <p className="mt-2 font-bold text-foreground">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-black text-foreground sm:text-3xl">
          Handpicked for senior travellers{" "}
          <span className="text-lg font-medium text-muted-foreground">
            ({items.length})
          </span>
        </h2>
        <p className="mt-2 text-muted-foreground">
          Every itinerary below is reviewed for pacing, walking distance and
          accommodation comfort.
        </p>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="text-lg font-semibold text-foreground">
              No packages available.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Check back soon — new senior-friendly packages are added
              regularly.
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
  {
    tag: "Pace",
    title: "Shorter travel days",
    detail:
      "Fewer city changes, comfortable coach rides, buffer time built in.",
  },
  {
    tag: "Stays",
    title: "Comfortable, vetted stays",
    detail: "Curated hotels checked for comfort, cleanliness and location.",
  },
  {
    tag: "Meals",
    title: "Meals your way",
    detail:
      "Choice of Indian, Jain, continental and local cuisines on request.",
  },
  {
    tag: "Support",
    title: "Emergency support",
    detail: "A helpline you can reach anytime, anywhere on your trip.",
  },
];
