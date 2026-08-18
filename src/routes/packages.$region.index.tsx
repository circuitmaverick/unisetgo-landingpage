import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { regionBySlug, type RegionSlug } from "@/data/regions";
import { packagesByRegion } from "@/data/packages";
import { PackageCard } from "./packages.index";

export const Route = createFileRoute("/packages/$region/")({
  component: RegionIndex,
});

function RegionIndex() {
  const { region: regionSlug } = Route.useParams();
  const region = regionBySlug(regionSlug);
  if (!region) throw notFound();
  const packages = packagesByRegion(region.slug as RegionSlug);
  const [subFilter, setSubFilter] = useState<string | null>(null);

  const filtered = subFilter
    ? packages.filter((p) => p.subRegion === subFilter)
    : packages;

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
            {region.kind === "domestic" ? "India" : "International"}
          </p>
          <h2 className="mt-2 text-3xl font-black text-foreground sm:text-4xl">
            {region.name}
          </h2>
          <p className="mt-2 text-muted-foreground">{region.tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {filtered.length} package{filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {region.subRegions && (
        <div className="mb-8 flex flex-wrap gap-2">
          <SubChip
            label="All"
            active={subFilter === null}
            onClick={() => setSubFilter(null)}
          />
          {region.subRegions.map((s) => (
            <SubChip
              key={s.slug}
              label={s.name}
              active={subFilter === s.slug}
              onClick={() => setSubFilter(s.slug)}
            />
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border p-12 text-center">
          <p className="text-lg font-semibold text-foreground">
            No packages here yet.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Every UniSetGo trip is customisable — reach out and we'll design one
            for you.
          </p>
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

function SubChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary"
      }`}
    >
      {label}
    </button>
  );
}
