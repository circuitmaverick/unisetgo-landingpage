import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PackageDetailSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { a as getRegionBySlug, r as getPackageDetail } from "./packages-db-DNrljpPj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._region._slug-DIpuEEjt.js
var $$splitComponentImporter = () => import("./packages._region._slug-DzEfzoVl.mjs");
var $$splitNotFoundComponentImporter = () => import("./packages._region._slug-CQx6HY_t.mjs");
var Route = createFileRoute("/packages/$region/$slug")({
	loader: async ({ params }) => {
		const pkg = await getPackageDetail(params.region, params.slug);
		if (!pkg) throw notFound();
		const region = await getRegionBySlug(params.region);
		if (!region) throw notFound();
		return {
			pkg,
			region
		};
	},
	pendingComponent: PackageDetailSkeleton,
	head: ({ params, loaderData }) => {
		const pkg = loaderData?.pkg;
		if (!pkg) return { meta: [{ title: "Package — UniSetGo" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${pkg.title} — ${pkg.days}D / ${pkg.nights}N — UniSetGo`;
		const url = `/packages/${params.region}/${params.slug}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: pkg.summary
				},
				{
					name: "keywords",
					content: `${pkg.title}, ${pkg.country} tour, ${pkg.country} travel package, ${pkg.days} day ${pkg.country}, UniSetGo`
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: pkg.summary
				},
				{
					property: "og:image",
					content: pkg.heroImage
				},
				{
					property: "og:image:alt",
					content: pkg.title
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
					content: String(pkg.priceFrom)
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
					content: pkg.summary
				},
				{
					name: "twitter:image",
					content: pkg.heroImage
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
					name: pkg.title,
					description: pkg.overview,
					touristType: pkg.tripType,
					image: pkg.heroImage,
					itinerary: pkg.itinerary.map((d) => ({
						"@type": "ListItem",
						position: d.day,
						name: d.title,
						description: d.detail
					})),
					offers: {
						"@type": "Offer",
						price: pkg.priceFrom,
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
