import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getHoneymoonPackages } from "./packages-db-DNrljpPj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/honeymoon-DqtbWjJ4.js
var $$splitComponentImporter = () => import("./honeymoon-D2GAg1DD.mjs");
var Route = createFileRoute("/honeymoon")({
	loader: async () => ({ packages: await getHoneymoonPackages() }),
	head: () => ({
		meta: [
			{ title: "Honeymoon Packages — Romantic Getaways | UniSetGo" },
			{
				name: "description",
				content: "Handpicked honeymoon packages for newlyweds — Bali coves, Swiss alps, Italian sunsets, Andaman shores and Kerala backwaters."
			},
			{
				property: "og:title",
				content: "Honeymoon Packages — UniSetGo"
			},
			{
				property: "og:description",
				content: "Romantic getaways designed for newlyweds."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/honeymoon"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
