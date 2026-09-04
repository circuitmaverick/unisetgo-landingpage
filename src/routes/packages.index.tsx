import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  PACKAGES,
  TRIP_TYPES,
  formatINR,
  type Package,
  type TripType,
} from "@/data/packages";
import { REGIONS, regionBySlug, type RegionSlug } from "@/data/regions";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "All Travel Packages — Search & Filter | UniSetGo" },
      {
        name: "description",
        content:
          "Search every UniSetGo travel package by destination, region, duration or trip type — from Dubai and the Swiss Alps to Kerala and Ladakh.",
      },
      { property: "og:title", content: "All Travel Packages — UniSetGo" },
      {
        property: "og:description",
        content:
          "Every curated journey in one place. Search by destination, region, duration or type.",
      },
      { property: "og:url", content: "/packages" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: AllPackages,
});

function AllPackages() {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<RegionSlug | "all">("all");
  const [tripType, setTripType] = useState<TripType | "all">("all");
  const [duration, setDuration] = useState<"all" | "short" | "medium" | "long">(
    "all",
  );

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return PACKAGES.filter((p) => {
      if (region !== "all" && p.region !== region) return false;
      if (tripType !== "all" && p.tripType !== tripType) return false;
      if (duration === "short" && p.days > 5) return false;
      if (duration === "medium" && (p.days < 6 || p.days > 7))
        return false;
      if (duration === "long" && p.days < 8) return false;
      if (needle) {
        const hay =
          `${p.title} ${p.country} ${p.summary} ${p.overview} ${p.highlights.join(" ")}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [q, region, tripType, duration]);

  const anyFilterActive =
    q || region !== "all" || tripType !== "all" || duration !== "all";
  const reset = () => {
    setQ("");
    setRegion("all");
    setTripType("all");
    setDuration("all");
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-2xl font-black text-foreground sm:text-3xl">
          All packages{" "}
          <span className="text-lg font-medium text-muted-foreground">
            ({filtered.length}/{PACKAGES.length})
          </span>
        </h2>
        <p className="text-muted-foreground">
          Search by destination or filter by region, duration and type.
        </p>
      </div>

      {/* Search + filter bar */}
      <div className="mb-10 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5">
        <div className="grid gap-3 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search destinations, e.g. Bali, Alps, Kerala…"
              className="h-11 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Search packages"
            />
          </label>

          <SelectField
            label="Region"
            value={region}
            onChange={(v) => setRegion(v as RegionSlug | "all")}
            options={[
              { value: "all", label: "All regions" },
              ...REGIONS.map((r) => ({ value: r.slug, label: r.name })),
            ]}
          />

          <SelectField
            label="Trip type"
            value={tripType}
            onChange={(v) => setTripType(v as TripType | "all")}
            options={[
              { value: "all", label: "All types" },
              ...TRIP_TYPES.map((t) => ({ value: t.value, label: t.label })),
            ]}
          />

          <SelectField
            label="Duration"
            value={duration}
            onChange={(v) => setDuration(v as typeof duration)}
            options={[
              { value: "all", label: "Any duration" },
              { value: "short", label: "Short (up to 5 days)" },
              { value: "medium", label: "Medium (6–7 days)" },
              { value: "long", label: "Long (8+ days)" },
            ]}
          />
        </div>

        {anyFilterActive && (
          <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <SlidersHorizontal className="h-3 w-3" /> Active filters
            </span>
            {q && <FilterChip label={`"${q}"`} onClear={() => setQ("")} />}
            {region !== "all" && (
              <FilterChip
                label={regionBySlug(region)?.name ?? region}
                onClear={() => setRegion("all")}
              />
            )}
            {tripType !== "all" && (
              <FilterChip
                label={
                  TRIP_TYPES.find((t) => t.value === tripType)?.label ??
                  tripType
                }
                onClear={() => setTripType("all")}
              />
            )}
            {duration !== "all" && (
              <FilterChip label={duration} onClear={() => setDuration("all")} />
            )}
            <button
              type="button"
              onClick={reset}
              className="ml-auto text-xs font-semibold text-primary hover:text-accent"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border p-12 text-center">
          <p className="text-lg font-semibold text-foreground">
            No trips match those filters.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try broadening the search — or reach out; we build custom
            itineraries too.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PackageCard key={p.slug} pkg={p} />
          ))}
        </div>
      )}
    </section>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        className="h-11 w-full rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {label}: {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function FilterChip({
  label,
  onClear,
}: {
  label: string;
  onClear: () => void;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
      {label}
      <button
        type="button"
        onClick={onClear}
        aria-label={`Clear ${label}`}
        className="hover:text-accent"
      >
        <X className="h-3 w-3" />
      </button>
    </span>
  );
}

export function PackageCard({ pkg }: { pkg: Package }) {
  const region = regionBySlug(pkg.region);
  return (
    <Link
      to="/packages/$region/$slug"
      params={{ region: pkg.region, slug: pkg.slug }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          loading="lazy"
          width={1400}
          height={900}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur">
          {region?.name}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground">
          {pkg.days}D / {pkg.nights}N
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {pkg.country}
        </p>
        <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary">
          {pkg.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {pkg.summary}
        </p>
        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div>
            <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              From
            </p>
            <p className="text-lg font-black text-primary">
              {formatINR(pkg.priceFrom)}
            </p>
          </div>
          <span className="text-sm font-semibold text-accent">View →</span>
        </div>
      </div>
    </Link>
  );
}
