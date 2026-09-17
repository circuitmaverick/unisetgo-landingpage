import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { Rt as Anchor, b as Ship, i as Waves } from "../_libs/lucide-react.mjs";
import { n as WhatsAppCTA, t as PageHero } from "./page-hero-CibwgmII.mjs";
import { r as PackagesGridSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { n as getCruises } from "./cruises-db-lXUF-coR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cruises.index-JCsa718U.js
var import_jsx_runtime = require_jsx_runtime();
function CruisesHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Cruise holidays",
		title: "Sail with the world's",
		accent: "finest cruise lines",
		description: "From India's own Cordelia to Disney's magic and Royal Caribbean's bold new giants — we book, upgrade and design cruise holidays end to end.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
				href: waLink("Hi UniSetGo, I'd like to plan a cruise holiday."),
				label: "Plan a Cruise"
			})
		})
	});
}
function Stat({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-2xl font-black text-primary",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		})] })]
	});
}
var $$splitComponentImporter = () => import("./cruises.index-DFhayRD1.mjs");
var Route = createFileRoute("/cruises/")({
	loader: async () => {
		return { cruises: await getCruises() };
	},
	pendingComponent: CruisesIndexPending,
	head: () => ({
		meta: [
			{ title: "Cruise Lines — Sail with UniSetGo" },
			{
				name: "description",
				content: "Book curated cruise holidays with Cordelia, Genting, Royal Caribbean, NCL, MSC, Costa and Disney Cruise Lines through UniSetGo."
			},
			{
				property: "og:title",
				content: "Cruise Lines — UniSetGo"
			},
			{
				property: "og:description",
				content: "Curated cruise holidays with the world's best-loved cruise lines."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cruises"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function CruisesIndexPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CruisesHero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "h-5 w-5" }),
					label: "Cruise lines",
					value: "7+"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-5 w-5" }),
					label: "Sailing regions",
					value: "20+"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { className: "h-5 w-5" }),
					label: "Departures / year",
					value: "200+"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesGridSkeleton, {})]
	})] });
}
//#endregion
export { Route as n, Stat as r, CruisesHero as t };
