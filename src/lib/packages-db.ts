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
  rating: number; // average of approved+visible reviews, 0 if none
  reviewCount: number;
};

export type PackageReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  images: string[];
  createdAt: string;
};

export type PackageDetail = PackageSummary & {
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; detail: string }[];
  reviews: PackageReview[];
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

type RawReviewGalleryPhoto = { url: string; public: boolean };

type RawPackageReviewRow = {
  id: string;
  name: string | null;
  anonymous: boolean;
  rating: number | null;
  review: string | null;
  gallery: RawReviewGalleryPhoto[] | null;
  created_at: string;
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
  ratingInfo?: { avg: number; count: number },
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
    rating: ratingInfo?.avg ?? 0,
    reviewCount: ratingInfo?.count ?? 0,
  };
}

/**
 * One review query, aggregated client-side into a per-package {avg, count}
 * — cheaper than one query per package. Only approved+visible reviews count
 * (also enforced by RLS), matching the rule everywhere ratings are shown.
 */
async function getPackageRatings(): Promise<
  Map<string, { avg: number; count: number }>
> {
  const rows = await withCache<{ slug: string; avg: number; count: number }[]>(
    "package-ratings",
    SEVEN_DAYS_MS,
    async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("related_package, rating")
        .eq("visibility", true)
        .eq("approved", true)
        .not("related_package", "is", null);
      if (error) throw error;

      const sums = new Map<string, { sum: number; count: number }>();
      for (const row of data ?? []) {
        const slug = row.related_package as string | null;
        if (!slug || row.rating == null) continue;
        const entry = sums.get(slug) ?? { sum: 0, count: 0 };
        entry.sum += row.rating;
        entry.count += 1;
        sums.set(slug, entry);
      }

      return Array.from(sums, ([slug, { sum, count }]) => ({
        slug,
        avg: sum / count,
        count,
      }));
    },
  );

  return new Map(rows.map((r) => [r.slug, { avg: r.avg, count: r.count }]));
}

export async function getPackages(): Promise<PackageSummary[]> {
  return withCache("packages:all", SEVEN_DAYS_MS, async () => {
    const { data, error } = await supabase
      .from("packages")
      .select("*")
      .eq("published", true);
    if (error) throw error;

    const [regions, ratings] = await Promise.all([
      getRegions(),
      getPackageRatings(),
    ]);
    const regionNameBySlug = new Map(regions.map((r) => [r.slug, r.name]));

    return (data ?? []).map((row) =>
      mapPackageRow(
        row,
        regionNameBySlug.get(row.region) ?? row.region,
        ratings.get(row.slug),
      ),
    );
  });
}

const CURATED_TABLES = {
  honeymoon: "honeymoon_packages",
  seniorCitizen: "senior_citizen_packages",
  golf: "golf_packages",
} as const;

async function getCuratedPackages(
  kind: keyof typeof CURATED_TABLES,
): Promise<PackageSummary[]> {
  return withCache(`curated-packages:${kind}`, SEVEN_DAYS_MS, async () => {
    const { data, error } = await supabase
      .from(CURATED_TABLES[kind])
      .select("package");
    if (error) throw error;

    const slugs = new Set((data ?? []).map((row) => row.package));
    const all = await getPackages();
    return all.filter((p) => slugs.has(p.slug));
  });
}

export const getHoneymoonPackages = () => getCuratedPackages("honeymoon");
export const getSeniorCitizenPackages = () =>
  getCuratedPackages("seniorCitizen");
export const getGolfPackages = () => getCuratedPackages("golf");

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

      const { data: reviewRows, error: reviewsError } = await supabase
        .from("reviews")
        .select("id, name, anonymous, rating, review, gallery, created_at")
        .eq("related_package", slug)
        .eq("visibility", true)
        .eq("approved", true)
        .order("created_at", { ascending: false });
      if (reviewsError) throw reviewsError;

      const reviews: PackageReview[] = ((reviewRows ??
        []) as RawPackageReviewRow[]).map((r) => ({
        id: r.id,
        name: r.anonymous ? "Anonymous" : r.name || "Anonymous",
        rating: r.rating ?? 0,
        review: r.review ?? "",
        images: (r.gallery ?? [])
          .filter((photo) => photo.public)
          .map((photo) => photo.url),
        createdAt: r.created_at,
      }));
      const reviewCount = reviews.length;
      const ratingAvg = reviewCount
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
        : 0;

      return {
        ...mapPackageRow(row, regionName, {
          avg: ratingAvg,
          count: reviewCount,
        }),
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
        reviews,
      };
    },
  );

  return result ?? undefined;
}
