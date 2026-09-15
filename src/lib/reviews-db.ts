import { supabase } from "./supabase";
import { withCache, SEVEN_DAYS_MS } from "./browser-cache";

export type GalleryReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  images: string[]; // always at least 1 entry
};

type RawReviewRow = {
  id: string;
  name: string | null;
  rating: number | null;
  review: string | null;
  gallery: string[] | null;
  anonymous: boolean;
};

/**
 * Reviews that have at least one gallery photo, visible on the public
 * gallery page. A review must be both `visibility` and `approved` to be
 * returned — enforced by the "Public can view visible approved reviews"
 * RLS policy, not just this filter.
 */
export async function getGalleryReviews(): Promise<GalleryReview[]> {
  return withCache("gallery-reviews", SEVEN_DAYS_MS, async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, rating, review, gallery, anonymous")
      .eq("visibility", true)
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return (data ?? [])
      .filter((row): row is RawReviewRow => Boolean(row.gallery?.length))
      .map((row) => ({
        id: row.id,
        name: row.anonymous ? "Anonymous" : row.name || "Anonymous",
        rating: row.rating ?? 0,
        review: row.review ?? "",
        images: row.gallery as string[],
      }));
  });
}
