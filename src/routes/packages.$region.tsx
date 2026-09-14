import {
  createFileRoute,
  notFound,
  Outlet,
  Link,
} from "@tanstack/react-router";
import { getRegions, type RegionWithSubRegions } from "@/lib/packages-db";
import { RegionIndexSkeleton } from "@/components/packages-skeletons";

export const Route = createFileRoute("/packages/$region")({
  loader: async ({ params }) => {
    const regions = await getRegions();
    const region = regions.find((r) => r.slug === params.region);
    if (!region) throw notFound({ data: { regions } });
    return { region };
  },
  pendingComponent: RegionIndexSkeleton,
  head: ({ params, loaderData }) => {
    const region = loaderData?.region;
    if (!region) {
      return {
        meta: [
          { title: "Region — UniSetGo" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${region.name} Travel Packages — UniSetGo`;
    const desc = `Curated ${region.name} travel packages by UniSetGo. ${region.tagline}. Handpicked itineraries with flights, stays and on-trip support.`;
    const url = `/packages/${params.region}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        {
          name: "keywords",
          content: `${region.name} travel packages, ${region.name} tours, ${region.name} holidays, UniSetGo`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: region.image },
        { property: "og:image:alt", content: `${region.name} — UniSetGo` },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: region.image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: RegionNotFound,
  component: () => <Outlet />,
});

function RegionNotFound({ data }: { data?: unknown }) {
  const regions =
    (data as { regions?: RegionWithSubRegions[] } | undefined)?.regions ?? [];
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8">
      <h2 className="text-2xl font-black text-foreground">Region not found</h2>
      <p className="mt-2 text-muted-foreground">Pick from the regions below.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {regions.map((r) => (
          <Link
            key={r.slug}
            to="/packages/$region"
            params={{ region: r.slug }}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
