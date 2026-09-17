import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as WhatsAppCTA, t as PageHero } from "./page-hero-CibwgmII.mjs";
import { t as PackageCard } from "./packages.index-8_JAspm7.mjs";
import { t as Route } from "./senior-citizens-NosGQJvy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/senior-citizens-DB4ojSRf.js
var import_jsx_runtime = require_jsx_runtime();
function SeniorCitizensPage() {
	const { packages: items } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Senior citizens",
		title: "Holidays at a",
		accent: "gentler pace",
		description: "Comfort-first itineraries with shorter travel days, ground-floor rooms, verified vegetarian meals and doctor-on-call support — so parents and grandparents travel worry-free.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
			href: waLink("Hi UniSetGo, I'd like a senior-friendly holiday package."),
			label: "Plan a Senior Trip"
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
					"Handpicked for senior travellers",
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
				children: "Every itinerary below is reviewed for pacing, walking distance and accommodation comfort."
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-3xl border border-dashed border-border p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-foreground",
					children: "No packages available."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Check back soon — new senior-friendly packages are added regularly."
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
		tag: "Pace",
		title: "Shorter travel days",
		detail: "Fewer city changes, comfortable coach rides, buffer time built in."
	},
	{
		tag: "Stays",
		title: "Comfortable, vetted stays",
		detail: "Curated hotels checked for comfort, cleanliness and location."
	},
	{
		tag: "Meals",
		title: "Meals your way",
		detail: "Choice of Indian, Jain, continental and local cuisines on request."
	},
	{
		tag: "Support",
		title: "Emergency support",
		detail: "A helpline you can reach anytime, anywhere on your trip."
	}
];
//#endregion
export { SeniorCitizensPage as component };
