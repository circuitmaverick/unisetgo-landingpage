import { supabase } from "./supabase";
import { withCache, SEVEN_DAYS_MS } from "./browser-cache";

export type RegionWithSubRegions = {
  slug: string;
  name: string;
  kind: "international" | "domestic";
  tagline: string;
  image: string;
  subRegions: { slug: string; name: string }[];
};

export type PackageSummary = {
  slug: string;
  title: string;
  region: string;
  regionName: string;
  subRegion: string | null;
  groupTag: string;
  country: string;
  days: number;
  nights: number;
  priceFrom: number;
  heroImage: string;
  gallery: string[];
  tripType: string;
  summary: string;
  overview: string;
};

export type PackageDetail = PackageSummary & {
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; detail: string }[];
};

type RawRegionRow = {
  slug: string;
  name: string;
  kind: "international" | "domestic";
  tag: string;
  image: string;
};

type RawSubRegionRow = {
  region_slug: string;
  sub_region_slug: string;
  name: string;
};

type RawPackageRow = {
  slug: string;
  title: string;
  region: string;
  sub_region: string | null;
  group_tag: string;
  country: string;
  days: number;
  nights: number;
  price_from: number;
  hero_image: string;
  gallery: string[] | null;
  trip_type: string;
  summary: string;
  overview: string;
};

type RawPackageDetailRow = RawPackageRow & {
  itineraries: { day: number; title: string; itinerary: string }[];
  packages_highlights: { highlights: { highlight: string } | null }[];
  packages_inclusions: { inclusions: { inclusion: string } | null }[];
  packages_exclusions: { exclusions: { exclusion: string } | null }[];
};

function mapRegionRow(
  row: RawRegionRow,
  subRegions: RawSubRegionRow[],
): RegionWithSubRegions {
  return {
    slug: row.slug,
    name: row.name,
    kind: row.kind,
    tagline: row.tag,
    image: row.image,
    subRegions: subRegions
      .filter((s) => s.region_slug === row.slug)
      .map((s) => ({ slug: s.sub_region_slug, name: s.name })),
  };
}

export async function getRegions(): Promise<RegionWithSubRegions[]> {
  return withCache("regions", SEVEN_DAYS_MS, async () => {
    const [regionsRes, subRegionsRes] = await Promise.all([
      supabase.from("regions").select("*"),
      supabase.from("sub_regions").select("*"),
    ]);
    if (regionsRes.error) throw regionsRes.error;
    if (subRegionsRes.error) throw subRegionsRes.error;

    const subRegions = subRegionsRes.data ?? [];
    return (regionsRes.data ?? []).map((r) => mapRegionRow(r, subRegions));
  });
}

export async function getRegionBySlug(
  slug: string,
): Promise<RegionWithSubRegions | undefined> {
  const regions = await getRegions();
  return regions.find((r) => r.slug === slug);
}

function mapPackageRow(
  row: RawPackageRow,
  regionName: string,
): PackageSummary {
  return {
    slug: row.slug,
    title: row.title,
    region: row.region,
    regionName,
    subRegion: row.sub_region,
    groupTag: row.group_tag,
    country: row.country,
    days: row.days,
    nights: row.nights,
    priceFrom: row.price_from,
    heroImage: row.hero_image,
    gallery: row.gallery ?? [],
    tripType: row.trip_type,
    summary: row.summary,
    overview: row.overview,
  };
}

export async function getPackages(): Promise<PackageSummary[]> {
  return withCache("packages:all", SEVEN_DAYS_MS, async () => {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("published", true);
    if (error) throw error;

    const regions = await getRegions();
    const regionNameBySlug = new Map(regions.map((r) => [r.slug, r.name]));

    return (data ?? []).map((row) =>
      mapPackageRow(row, regionNameBySlug.get(row.region) ?? row.region),
    );
  });
}

export async function getPackageDetail(
  region: string,
  slug: string,
): Promise<PackageDetail | undefined> {
  // `null` (not `undefined`) is used as the cached "not found" sentinel so
  // it round-trips cleanly through JSON — a stale/mistyped slug stays
  // cached as not-found for the same TTL as everything else.
  const result = await withCache<PackageDetail | null>(
    `package-detail:${region}:${slug}`,
    SEVEN_DAYS_MS,
    async () => {
      const { data, error } = await supabase
        .from("packages")
        .select(
          `*,
          itineraries(day, title, itinerary),
          packages_highlights(highlights(highlight)),
          packages_inclusions(inclusions(inclusion)),
          packages_exclusions(exclusions(exclusion))`,
        )
        .eq("published", true)
        .eq("region", region)
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;

      const row = data as unknown as RawPackageDetailRow;
      const regions = await getRegions();
      const regionName =
        regions.find((r) => r.slug === row.region)?.name ?? row.region;

      return {
        ...mapPackageRow(row, regionName),
        itinerary: [...row.itineraries]
          .sort((a, b) => a.day - b.day)
          .map((i) => ({ day: i.day, title: i.title, detail: i.itinerary })),
        highlights: row.packages_highlights
          .map((h) => h.highlights?.highlight)
          .filter((h): h is string => Boolean(h)),
        inclusions: row.packages_inclusions
          .map((i) => i.inclusions?.inclusion)
          .filter((i): i is string => Boolean(i)),
        exclusions: row.packages_exclusions
          .map((e) => e.exclusions?.exclusion)
          .filter((e): e is string => Boolean(e)),
      };
    },
  );

  return result ?? undefined;
}
