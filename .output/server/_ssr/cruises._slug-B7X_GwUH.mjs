import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PackageDetailSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { t as getCruiseDetail } from "./cruises-db-lXUF-coR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cruises._slug-B7X_GwUH.js
var $$splitComponentImporter = () => import("./cruises._slug-C-SyDy9o.mjs");
var $$splitNotFoundComponentImporter = () => import("./cruises._slug-Dv_VMBzW.mjs");
var Route = createFileRoute("/cruises/$slug")({
	loader: async ({ params }) => {
		const cruise = await getCruiseDetail(params.slug);
		if (!cruise) throw notFound();
		return { cruise };
	},
	pendingComponent: PackageDetailSkeleton,
	head: ({ params, loaderData }) => {
		const cruise = loaderData?.cruise;
		if (!cruise) return { meta: [{ title: "Cruise — UniSetGo" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${cruise.name} — ${cruise.duration} — UniSetGo`;
		const url = `/cruises/${params.slug}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: cruise.blurb
				},
				{
					name: "keywords",
					content: `${cruise.name}, cruise holiday, ${cruise.regions.join(", ")}, UniSetGo`
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: cruise.blurb
				},
				{
					property: "og:image",
					content: cruise.image
				},
				{
					property: "og:image:alt",
					content: cruise.name
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "product:price:amount",
					content: String(cruise.priceFrom)
				},
				{
					property: "product:price:currency",
					content: "INR"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: cruise.blurb
				},
				{
					name: "twitter:image",
					content: cruise.image
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "TouristTrip",
					name: cruise.name,
					description: cruise.overview,
					image: cruise.image,
					itinerary: cruise.itinerary.map((d) => ({
						"@type": "ListItem",
						position: d.day,
						name: d.title,
						description: d.detail
					})),
					offers: {
						"@type": "Offer",
						price: cruise.priceFrom,
						priceCurrency: "INR",
						availability: "https://schema.org/InStock"
					},
					provider: {
						"@type": "TravelAgency",
						name: "UniSetGo"
					}
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
