import { supabase } from "./supabase";
import { withCache, SEVEN_DAYS_MS } from "./browser-cache";

export type Testimonial = {
  id: string;
  image: string;
  author: string;
  rating: number;
  text: string;
};

type RawTestimonialRow = {
  id: string;
  highlight_image: string;
  reviews: {
    name: string | null;
    rating: number | null;
    review: string | null;
    anonymous: boolean;
  } | null;
};

/**
 * Testimonials curated for the homepage carousel. `testimonials.id` is a
 * shared-PK foreign key into `reviews.id`, so if that review isn't
 * `visibility && approved`, RLS embeds it as null here (rather than
 * filtering out the testimonial row itself) — those are dropped below too.
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  return withCache("testimonials", SEVEN_DAYS_MS, async () => {
    const { data, error } = await supabase
      .from("testimonials")
      .select("id, highlight_image, reviews(name, rating, review, anonymous)")
      // testimonials.id -> reviews.id is a shared-PK, to-one relationship,
      // but supabase-js can't infer that cardinality without generated
      // Database types, so it defaults to typing `reviews` as an array.
      .returns<RawTestimonialRow[]>();

    if (error) throw error;

    return (data ?? [])
      .filter((row) => row.reviews !== null)
      .map((row) => {
        const r = row.reviews!;
        return {
          id: row.id,
          image: row.highlight_image,
          author: r.anonymous ? "Anonymous" : r.name || "Anonymous",
          rating: r.rating ?? 0,
          text: r.review ?? "",
        };
      });
  });
}
