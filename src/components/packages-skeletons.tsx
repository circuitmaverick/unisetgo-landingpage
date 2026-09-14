import { Skeleton } from "@/components/ui/skeleton";

export function RegionTabsSkeleton() {
  return (
    <div className="border-t border-white/10 bg-primary">
      <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8">
        <div className="flex min-w-max gap-2 py-4">
          {["4rem", "6rem", "7rem", "5rem", "6rem", "6rem"].map((w, i) => (
            <Skeleton
              key={i}
              className="h-9 shrink-0 rounded-full bg-white/15"
              style={{ width: w }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PackageCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div className="space-y-2">
            <Skeleton className="h-2.5 w-10" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
}

export function PackagesGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <PackageCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function FilterBarSkeleton() {
  return (
    <div className="mb-10 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <Skeleton className="h-11 w-full rounded-full" />
        <Skeleton className="h-11 w-full rounded-full" />
        <Skeleton className="h-11 w-full rounded-full" />
        <Skeleton className="h-11 w-full rounded-full" />
      </div>
    </div>
  );
}

export function AllPackagesSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-6 flex flex-col gap-2">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-4 w-80" />
      </div>
      <FilterBarSkeleton />
      <PackagesGridSkeleton />
    </section>
  );
}

export function SubRegionChipsSkeleton() {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {["3.5rem", "5rem", "6rem", "5.5rem"].map((w, i) => (
        <Skeleton key={i} className="h-8 rounded-full" style={{ width: w }} />
      ))}
    </div>
  );
}

export function RegionIndexSkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
      <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-4 w-72" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>
      <SubRegionChipsSkeleton />
      <PackagesGridSkeleton />
    </section>
  );
}

export function PackageDetailSkeleton() {
  return (
    <article>
      <section className="relative">
        <Skeleton className="aspect-[16/9] max-h-[70vh] w-full rounded-none sm:aspect-[16/7]" />

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative -mt-32 space-y-4 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:-mt-40 sm:p-10">
            <Skeleton className="h-3 w-24" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full max-w-2xl" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-2.5 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Skeleton className="h-12 w-full rounded-full" />
              <Skeleton className="h-12 w-full rounded-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />

          <Skeleton className="mt-8 h-7 w-32" />
          <Skeleton className="aspect-[16/10] w-full rounded-3xl" />

          <Skeleton className="mt-8 h-7 w-32" />
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-11 w-full rounded-xl" />
            ))}
          </div>

          <Skeleton className="mt-8 h-7 w-56" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-20 w-full rounded-2xl" />
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <Skeleton className="h-5 w-24" />
            <div className="mt-3 space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <Skeleton className="h-5 w-24" />
            <div className="mt-3 space-y-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </aside>
      </section>
    </article>
  );
}
