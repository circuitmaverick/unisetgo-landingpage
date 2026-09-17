import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Rt as Anchor, b as Ship, i as Waves } from "../_libs/lucide-react.mjs";
import { n as Route, r as Stat, t as CruisesHero } from "./cruises.index-JCsa718U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cruises.index-DFhayRD1.js
var import_jsx_runtime = require_jsx_runtime();
function CruisesPage() {
	const { cruises } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CruisesHero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10 grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "h-5 w-5" }),
					label: "Cruise lines",
					value: `${cruises.length}+`
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: cruises.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CruiseCard, { c }, c.slug))
		})]
	})] });
}
function CruiseCard({ c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/cruises/$slug",
			params: { slug: c.slug },
			className: "flex flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/3] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.image,
						alt: c.name,
						loading: "lazy",
						className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" }),
					c.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground",
						children: c.badge
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-6 pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: c.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-lg font-bold text-foreground group-hover:text-primary",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 flex-1 text-sm text-muted-foreground",
						children: c.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs font-semibold text-primary",
						children: c.regions.join(" • ")
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-6 pt-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: waLink(`Hi UniSetGo, I'd like to enquire about a ${c.name} cruise.`),
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex w-full items-center justify-center rounded-full gradient-accent px-4 py-2.5 text-sm font-bold text-accent-foreground hover:opacity-95",
				children: "Enquire on WhatsApp"
			})
		})]
	});
}
//#endregion
export { CruisesPage as component };
