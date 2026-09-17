import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as getSeniorCitizenPackages } from "./packages-db-DNrljpPj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/senior-citizens-NosGQJvy.js
var $$splitComponentImporter = () => import("./senior-citizens-DB4ojSRf.mjs");
var Route = createFileRoute("/senior-citizens")({
	loader: async () => ({ packages: await getSeniorCitizenPackages() }),
	head: () => ({
		meta: [
			{ title: "Senior Citizen Travel Packages — UniSetGo" },
			{
				name: "description",
				content: "Gentle-paced holidays for senior citizens — comfortable stays, low walking days and doctor-on-call support across India and abroad."
			},
			{
				property: "og:title",
				content: "Senior Citizen Packages — UniSetGo"
			},
			{
				property: "og:description",
				content: "Comfort-first holidays designed for senior travellers."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/senior-citizens"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
