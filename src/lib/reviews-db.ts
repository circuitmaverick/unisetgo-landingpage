import { supabase } from "./supabase";
import { withCache, SEVEN_DAYS_MS } from "./browser-cache";

export type GalleryReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  images: string[]; // always at least 1 entry
};

type GalleryPhoto = { url: string; public: boolean };

type RawReviewRow = {
  id: string;
  name: string | null;
  rating: number | null;
  review: string | null;
  gallery: GalleryPhoto[] | null;
  anonymous: boolean;
};

/**
 * Reviews that have at least one *publicly-visible* gallery photo. A review
 * must be both `visibility` and `approved` to be returned at all — enforced
 * by the "Public can view visible approved reviews" RLS policy — and on top
 * of that, each photo in `gallery` carries its own client-chosen `public`
 * flag (set on the review-form page), so a review with photos where every
 * single one is marked private is excluded here too, same as having no
 * photos at all.
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
      .map((row: RawReviewRow) => ({
        id: row.id,
        name: row.anonymous ? "Anonymous" : row.name || "Anonymous",
        rating: row.rating ?? 0,
        review: row.review ?? "",
        images: (row.gallery ?? [])
          .filter((photo) => photo.public)
          .map((photo) => photo.url),
      }))
      .filter((review) => review.images.length > 0);
  });
}
