import {
  createFileRoute,
  Link,
  Outlet,
  useMatchRoute,
} from "@tanstack/react-router";
import { REGIONS } from "@/data/regions";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Travel Packages — UniSetGo" },
      {
        name: "description",
        content:
          "Browse UniSetGo's curated packages across Middle East, Europe, Asia, Africa, the Americas and India.",
      },
      { property: "og:title", content: "Travel Packages — UniSetGo" },
      {
        property: "og:description",
        content: "Curated packages across every region we cover.",
      },
    ],
  }),
  component: PackagesLayout,
});

function PackagesLayout() {
  const matchRoute = useMatchRoute();
  return (
    <div>
      {/* section hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Curated packages
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Journeys, by <em className="not-italic text-accent">region and reason</em>.
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Sample plans you can book as-is or customise. Every trip is designed
            by a real trip designer, not a template.
          </p>
        </div>

        {/* region tabs */}
        <div className="border-t border-white/10 bg-primary">
          <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8">
            <div className="flex min-w-max gap-2 py-4">
              <TabLink
                to="/packages"
                label="All"
                active={!!matchRoute({ to: "/packages", fuzzy: false })}
              />
              {REGIONS.map((r) => (
                <TabLink
                  key={r.slug}
                  to="/packages/$region"
                  params={{ region: r.slug }}
                  label={r.name}
                  active={
                    !!matchRoute({
                      to: "/packages/$region",
                      params: { region: r.slug },
                      fuzzy: true,
                    })
                  }
                />
              ))}
              {/* add golf and honeymoon tabs - fix the links*/}
              <TabLink
                to="/packages"
                label="Golf Tourism"
                active={!!matchRoute({ to: "/golf-tourism", fuzzy: false })}
              />
              <TabLink
                to="/packages"
                label="Honeymoon"
                active={!!matchRoute({ to: "/honeymoon", fuzzy: false })}
              />
            </div>
          </div>
        </div>
      </section>

      <Outlet />
    </div>
  );
}

function TabLink({
  to,
  params,
  label,
  active,
}: {
  to: "/packages" | "/packages/$region";
  params?: { region: string };
  label: string;
  active: boolean;
}) {
  const className = `shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
    active
      ? "bg-accent text-accent-foreground"
      : "bg-white/10 text-white hover:bg-white/20"
  }`;
  if (to === "/packages/$region" && params) {
    return (
      <Link to={to} params={{ region: params.region }} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <Link to="/packages" className={className}>
      {label}
    </Link>
  );
}
