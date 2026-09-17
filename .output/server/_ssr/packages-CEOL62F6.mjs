import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RegionTabsSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { o as getRegions } from "./packages-db-DNrljpPj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-CEOL62F6.js
var import_jsx_runtime = require_jsx_runtime();
function PackagesHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
				children: "Curated packages"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-4 text-4xl font-black leading-tight sm:text-6xl",
				children: [
					"Journeys, by ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "not-italic text-accent",
						children: "region and reason"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-white/80",
				children: "Sample plans you can book as-is or customise. Every trip is designed by a real trip designer, not a template."
			})
		]
	});
}
var $$splitComponentImporter = () => import("./packages-DUPjhNgF.mjs");
var Route = createFileRoute("/packages")({
	loader: async () => {
		return { regions: await getRegions() };
	},
	pendingComponent: PackagesLayoutPending,
	head: () => ({ meta: [
		{ title: "Travel Packages — UniSetGo" },
		{
			name: "description",
			content: "Browse UniSetGo's curated packages across Middle East, Europe, Asia, Africa, the Americas and India."
		},
		{
			property: "og:title",
			content: "Travel Packages — UniSetGo"
		},
		{
			property: "og:description",
			content: "Curated packages across every region we cover."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function PackagesLayoutPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesHero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionTabsSkeleton, {})]
	}) });
}
//#endregion
export { Route as n, PackagesHero as t };
