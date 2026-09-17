import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as Star } from "../_libs/lucide-react.mjs";
import { i as formatINR } from "./packages-gHrvwJaJ.mjs";
import { t as AllPackagesSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { t as CachedImage } from "./cached-image-0z5AXFOs.mjs";
import { i as getPackages, o as getRegions } from "./packages-db-DNrljpPj.mjs";
import { n as regionBySlug } from "./regions-2tGm7cEL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages.index-8_JAspm7.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./packages.index-D9iMlewc.mjs");
var Route = createFileRoute("/packages/")({
	loader: async () => {
		const [packages, regions] = await Promise.all([getPackages(), getRegions()]);
		return {
			packages,
			regions
		};
	},
	pendingComponent: AllPackagesSkeleton,
	head: () => ({
		meta: [
			{ title: "All Travel Packages — Search & Filter | UniSetGo" },
			{
				name: "description",
				content: "Search every UniSetGo travel package by destination, region, duration or trip type — from Dubai and the Swiss Alps to Kerala and Ladakh."
			},
			{
				property: "og:title",
				content: "All Travel Packages — UniSetGo"
			},
			{
				property: "og:description",
				content: "Every curated journey in one place. Search by destination, region, duration or type."
			},
			{
				property: "og:url",
				content: "/packages"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/packages"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function PackageCard({ pkg }) {
	const regionLabel = pkg.regionName ?? regionBySlug(pkg.region)?.name ?? pkg.region;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/packages/$region/$slug",
		params: {
			region: pkg.region,
			slug: pkg.slug
		},
		className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CachedImage, {
					src: pkg.heroImage,
					alt: pkg.title,
					loading: "lazy",
					width: 1400,
					height: 900,
					className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur",
					children: regionLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground",
					children: [
						pkg.days,
						"D / ",
						pkg.nights,
						"N"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: pkg.country
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-lg font-bold text-foreground group-hover:text-primary",
					children: pkg.title
				}),
				pkg.reviewCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-foreground",
							children: pkg.rating.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								"(",
								pkg.reviewCount,
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground",
					children: pkg.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-end justify-between border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.65rem] uppercase tracking-widest text-muted-foreground",
						children: "From"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-black text-primary",
						children: formatINR(pkg.priceFrom)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-accent",
						children: "View →"
					})]
				})
			]
		})]
	});
}
//#endregion
export { Route as n, PackageCard as t };
