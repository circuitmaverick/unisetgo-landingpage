import { supabase } from "./supabase";
import { withCache, SEVEN_DAYS_MS } from "./browser-cache";
import type { PackageReview } from "./packages-db";

export type CruiseSummary = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  regions: string[];
  image: string;
  badge: string | null;
  duration: string;
  priceFrom: number;
};

export type CruiseDetail = CruiseSummary & {
  overview: string;
  ports: string[];
  gallery: string[];
  cabinTypes: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: { day: number; title: string; detail: string }[];
  rating: number;
  reviewCount: number;
  reviews: PackageReview[];
};

type RawCruiseRow = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  overview: string;
  regions: string[] | null;
  ports: string[] | null;
  image: string;
  gallery: string[] | null;
  badge: string | null;
  duration: string;
  price_from: number;
};

type RawCruiseDetailRow = RawCruiseRow & {
  cruise_itinerary: { day: number; title: string; itinerary: string }[];
  cruise_highlights: { highlights: { highlight: string } | null }[];
  cruise_inclusions: { inclusions: { inclusion: string } | null }[];
  cruise_exclusions: { exclusions: { exclusion: string } | null }[];
  cruise_cabin_types: { cabin_types: { cabin_type: string } | null }[];
};

type RawReviewGalleryPhoto = { url: string; public: boolean };

type RawReviewRow = {
  id: string;
  name: string | null;
  anonymous: boolean;
  rating: number | null;
  review: string | null;
  gallery: RawReviewGalleryPhoto[] | null;
  created_at: string;
};

function mapCruiseRow(row: RawCruiseRow): CruiseSummary {
  return {
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    blurb: row.blurb,
    regions: row.regions ?? [],
    image: row.image,
    badge: row.badge,
    duration: row.duration,
    priceFrom: row.price_from,
  };
}

export async function getCruises(): Promise<CruiseSummary[]> {
  return withCache("cruises:all", SEVEN_DAYS_MS, async () => {
    const { data, error } = await supabase.from("cruise_packages").select("*");
    if (error) throw error;
    return (data ?? []).map(mapCruiseRow);
  });
}

export async function getCruiseDetail(
  slug: string,
): Promise<CruiseDetail | undefined> {
  const result = await withCache<CruiseDetail | null>(
    `cruise-detail:${slug}`,
    SEVEN_DAYS_MS,
    async () => {
      const { data, error } = await supabase
        .from("cruise_packages")
        .select(
          `*,
          cruise_itinerary(day, title, itinerary),
          cruise_highlights(highlights(highlight)),
          cruise_inclusions(inclusions(inclusion)),
          cruise_exclusions(exclusions(exclusion)),
          cruise_cabin_types(cabin_types(cabin_type))`,
        )
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      if (!data) return null;

      const row = data as unknown as RawCruiseDetailRow;

      const { data: reviewRows, error: reviewsError } = await supabase
        .from("reviews")
        .select("id, name, anonymous, rating, review, gallery, created_at")
        .eq("related_package", slug)
        .eq("visibility", true)
        .eq("approved", true)
        .order("created_at", { ascending: false });
      if (reviewsError) throw reviewsError;

      const reviews: PackageReview[] = ((reviewRows ??
        []) as RawReviewRow[]).map((r) => ({
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
      const rating = reviewCount
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
        : 0;

      return {
        ...mapCruiseRow(row),
        overview: row.overview,
        ports: row.ports ?? [],
        gallery: row.gallery ?? [],
        cabinTypes: row.cruise_cabin_types
          .map((c) => c.cabin_types?.cabin_type)
          .filter((c): c is string => Boolean(c)),
        highlights: row.cruise_highlights
          .map((h) => h.highlights?.highlight)
          .filter((h): h is string => Boolean(h)),
        inclusions: row.cruise_inclusions
          .map((i) => i.inclusions?.inclusion)
          .filter((i): i is string => Boolean(i)),
        exclusions: row.cruise_exclusions
          .map((e) => e.exclusions?.exclusion)
          .filter((e): e is string => Boolean(e)),
        itinerary: [...row.cruise_itinerary]
          .sort((a, b) => a.day - b.day)
          .map((i) => ({ day: i.day, title: i.title, detail: i.itinerary })),
        rating,
        reviewCount,
        reviews,
      };
    },
  );

  return result ?? undefined;
}
