import "../_runtime.mjs";
import { t as supabase } from "./supabase-BIUzkaSY.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as withCache, t as SEVEN_DAYS_MS } from "./browser-cache-C8xCvnar.mjs";
require_react();
require_jsx_runtime();
/**
* Testimonials curated for the homepage carousel. `testimonials.id` is a
* shared-PK foreign key into `reviews.id`, so if that review isn't
* `visibility && approved`, RLS embeds it as null here (rather than
* filtering out the testimonial row itself) — those are dropped below too.
*/
async function getTestimonials() {
	return withCache("testimonials", SEVEN_DAYS_MS, async () => {
		const { data, error } = await supabase.from("testimonials").select("id, highlight_image, reviews(name, rating, review, anonymous)").returns();
		if (error) throw error;
		return (data ?? []).filter((row) => row.reviews !== null).map((row) => {
			const r = row.reviews;
			return {
				id: row.id,
				image: row.highlight_image,
				author: r.anonymous ? "Anonymous" : r.name || "Anonymous",
				rating: r.rating ?? 0,
				text: r.review ?? ""
			};
		});
	});
}
var $$splitComponentImporter = () => import("./routes-MRRC5lGq.mjs");
var Route = createFileRoute("/")({
	loader: async () => ({ testimonials: await getTestimonials() }),
	head: () => ({ meta: [
		{ title: "UniSetGo — Explore Beyond Boundaries" },
		{
			name: "description",
			content: "Bespoke corporate travel and curated leisure packages across the Middle East, Europe, Asia and India."
		},
		{
			property: "og:title",
			content: "UniSetGo — Explore Beyond Boundaries"
		},
		{
			property: "og:description",
			content: "Bespoke corporate travel and curated leisure packages worldwide."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
