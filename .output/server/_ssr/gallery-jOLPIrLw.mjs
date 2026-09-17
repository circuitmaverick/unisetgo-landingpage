import { t as supabase } from "./supabase-BIUzkaSY.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as withCache, t as SEVEN_DAYS_MS } from "./browser-cache-C8xCvnar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-jOLPIrLw.js
/**
* Reviews that have at least one *publicly-visible* gallery photo. A review
* must be both `visibility` and `approved` to be returned at all — enforced
* by the "Public can view visible approved reviews" RLS policy — and on top
* of that, each photo in `gallery` carries its own client-chosen `public`
* flag (set on the review-form page), so a review with photos where every
* single one is marked private is excluded here too, same as having no
* photos at all.
*/
async function getGalleryReviews() {
	return withCache("gallery-reviews", SEVEN_DAYS_MS, async () => {
		const { data, error } = await supabase.from("reviews").select("id, name, rating, review, gallery, anonymous").eq("visibility", true).eq("approved", true).order("created_at", { ascending: false });
		if (error) throw error;
		return (data ?? []).map((row) => ({
			id: row.id,
			name: row.anonymous ? "Anonymous" : row.name || "Anonymous",
			rating: row.rating ?? 0,
			review: row.review ?? "",
			images: (row.gallery ?? []).filter((photo) => photo.public).map((photo) => photo.url)
		})).filter((review) => review.images.length > 0);
	});
}
var $$splitComponentImporter = () => import("./gallery-Dfl8P8mg.mjs");
var Route = createFileRoute("/gallery")({
	validateSearch: (search) => ({ review: typeof search.review === "string" ? search.review : void 0 }),
	loader: async () => {
		return { reviews: await getGalleryReviews() };
	},
	head: () => ({ meta: [
		{ title: "Gallery — UniSetGo" },
		{
			name: "description",
			content: "Photos from real UniSetGo trips, shared by our travellers — click any photo to read their story."
		},
		{
			property: "og:title",
			content: "Gallery — UniSetGo"
		},
		{
			property: "og:description",
			content: "Real photos and stories from real UniSetGo travellers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
