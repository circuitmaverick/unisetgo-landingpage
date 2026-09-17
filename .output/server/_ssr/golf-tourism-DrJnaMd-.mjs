import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getGolfPackages } from "./packages-db-DNrljpPj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/golf-tourism-DrJnaMd-.js
var $$splitComponentImporter = () => import("./golf-tourism-Clma9a9l.mjs");
var Route = createFileRoute("/golf-tourism")({
	loader: async () => ({ packages: await getGolfPackages() }),
	head: () => ({
		meta: [
			{ title: "Golf Tourism — Play the World's Best Courses | UniSetGo" },
			{
				name: "description",
				content: "Tee off at championship courses in Scotland, Dubai, Thailand, Vietnam and India — curated golf holidays with tee times, caddies and equipment sorted."
			},
			{
				property: "og:title",
				content: "Golf Tourism — UniSetGo"
			},
			{
				property: "og:description",
				content: "Golf holidays at the world's best courses, curated end to end."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/golf-tourism"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
