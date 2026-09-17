import { t as supabase } from "./supabase-BIUzkaSY.mjs";
import { n as withCache, t as SEVEN_DAYS_MS } from "./browser-cache-C8xCvnar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cruises-db-lXUF-coR.js
function mapCruiseRow(row) {
	return {
		slug: row.slug,
		name: row.name,
		tagline: row.tagline,
		blurb: row.blurb,
		regions: row.regions ?? [],
		image: row.image,
		badge: row.badge,
		duration: row.duration,
		priceFrom: row.price_from
	};
}
async function getCruises() {
	return withCache("cruises:all", SEVEN_DAYS_MS, async () => {
		const { data, error } = await supabase.from("cruise_packages").select("*");
		if (error) throw error;
		return (data ?? []).map(mapCruiseRow);
	});
}
async function getCruiseDetail(slug) {
	return await withCache(`cruise-detail:${slug}`, 6048e5, async () => {
		const { data, error } = await supabase.from("cruise_packages").select(`*,
          cruise_itinerary(day, title, itinerary),
          cruise_highlights(highlights(highlight)),
          cruise_inclusions(inclusions(inclusion)),
          cruise_exclusions(exclusions(exclusion)),
          cruise_cabin_types(cabin_types(cabin_type))`).eq("slug", slug).maybeSingle();
		if (error) throw error;
		if (!data) return null;
		const row = data;
		const { data: reviewRows, error: reviewsError } = await supabase.from("reviews").select("id, name, anonymous, rating, review, gallery, created_at").eq("related_package", slug).eq("visibility", true).eq("approved", true).order("created_at", { ascending: false });
		if (reviewsError) throw reviewsError;
		const reviews = (reviewRows ?? []).map((r) => ({
			id: r.id,
			name: r.anonymous ? "Anonymous" : r.name || "Anonymous",
			rating: r.rating ?? 0,
			review: r.review ?? "",
			images: (r.gallery ?? []).filter((photo) => photo.public).map((photo) => photo.url),
			createdAt: r.created_at
		}));
		const reviewCount = reviews.length;
		const rating = reviewCount ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount : 0;
		return {
			...mapCruiseRow(row),
			overview: row.overview,
			ports: row.ports ?? [],
			gallery: row.gallery ?? [],
			cabinTypes: row.cruise_cabin_types.map((c) => c.cabin_types?.cabin_type).filter((c) => Boolean(c)),
			highlights: row.cruise_highlights.map((h) => h.highlights?.highlight).filter((h) => Boolean(h)),
			inclusions: row.cruise_inclusions.map((i) => i.inclusions?.inclusion).filter((i) => Boolean(i)),
			exclusions: row.cruise_exclusions.map((e) => e.exclusions?.exclusion).filter((e) => Boolean(e)),
			itinerary: [...row.cruise_itinerary].sort((a, b) => a.day - b.day).map((i) => ({
				day: i.day,
				title: i.title,
				detail: i.itinerary
			})),
			rating,
			reviewCount,
			reviews
		};
	}) ?? void 0;
}
//#endregion
export { getCruises as n, getCruiseDetail as t };
