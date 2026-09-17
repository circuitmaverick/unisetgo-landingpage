import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as PackageCard } from "./packages.index-8_JAspm7.mjs";
import { t as Route } from "./packages._region.index-DmPuUoYw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._region.index-Dx467EfQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegionIndex() {
	const { region, packages } = Route.useLoaderData();
	const [subFilter, setSubFilter] = (0, import_react.useState)(null);
	const filtered = subFilter ? packages.filter((p) => p.subRegion === subFilter) : packages;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.22em] text-accent",
						children: region.kind === "domestic" ? "India" : "International"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-black text-foreground sm:text-4xl",
						children: region.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: region.tagline
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						filtered.length,
						" package",
						filtered.length === 1 ? "" : "s"
					]
				})]
			}),
			region.subRegions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubChip, {
					label: "All",
					active: subFilter === null,
					onClick: () => setSubFilter(null)
				}), region.subRegions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubChip, {
					label: s.name,
					active: subFilter === s.slug,
					onClick: () => setSubFilter(s.slug)
				}, s.slug))]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-dashed border-border p-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-foreground",
					children: "No packages here yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Every UniSetGo trip is customisable — reach out and we'll design one for you."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { pkg: p }, p.slug))
			})
		]
	});
}
function SubChip({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `rounded-full border px-4 py-1.5 text-sm font-semibold transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary"}`,
		children: label
	});
}
//#endregion
export { RegionIndex as component };
