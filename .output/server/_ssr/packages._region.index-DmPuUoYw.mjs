import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RegionIndexSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { a as getRegionBySlug, i as getPackages } from "./packages-db-DNrljpPj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._region.index-DmPuUoYw.js
var $$splitComponentImporter = () => import("./packages._region.index-Dx467EfQ.mjs");
var Route = createFileRoute("/packages/$region/")({
	loader: async ({ params }) => {
		const region = await getRegionBySlug(params.region);
		if (!region) throw notFound();
		return {
			region,
			packages: (await getPackages()).filter((p) => p.region === region.slug)
		};
	},
	pendingComponent: RegionIndexSkeleton,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
