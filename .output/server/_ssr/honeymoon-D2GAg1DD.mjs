import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as WhatsAppCTA, t as PageHero } from "./page-hero-CibwgmII.mjs";
import { t as PackageCard } from "./packages.index-8_JAspm7.mjs";
import { t as Route } from "./honeymoon-DqtbWjJ4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/honeymoon-D2GAg1DD.js
var import_jsx_runtime = require_jsx_runtime();
function HoneymoonPage() {
	const { packages: items } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Curated selections for newlyweds",
		title: "Honeymoons in",
		accent: "the details",
		description: "Rose-petal turndowns, sunset dinners, private transfers and photo-perfect stays — curated for the two of you, in the world's most romantic corners.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
			href: waLink("Hi UniSetGo, we're planning our honeymoon."),
			label: "Plan Our Honeymoon"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: PROMISES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-widest text-accent",
							children: p.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-bold text-foreground",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.detail
						})
					]
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "text-2xl font-black text-foreground sm:text-3xl",
				children: [
					"Curated honeymoon trips",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-lg font-medium text-muted-foreground",
						children: [
							"(",
							items.length,
							")"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Every trip below can be extended, upgraded or customised — just tell us your dream."
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-3xl border border-dashed border-border p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-foreground",
					children: "No packages available."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Check back soon — new honeymoon packages are added regularly."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { pkg: p }, p.slug))
			})
		]
	})] });
}
var PROMISES = [
	{
		tag: "Stays",
		title: "Honeymoon suites",
		detail: "Upgraded rooms with private balconies, pools or ocean views."
	},
	{
		tag: "Dining",
		title: "Sunset dinners",
		detail: "Private beach or rooftop dinners on at least one evening."
	},
	{
		tag: "Extras",
		title: "Petals & bubbly",
		detail: "Room décor, cake and welcome bubbly on arrival."
	},
	{
		tag: "Support",
		title: "Concierge on WhatsApp",
		detail: "One thread for spa, tours, upgrades — throughout the trip."
	}
];
//#endregion
export { HoneymoonPage as component };
