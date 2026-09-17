import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { d as useMatchRoute, f as Outlet, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, t as PackagesHero } from "./packages-CEOL62F6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-DUPjhNgF.js
var import_jsx_runtime = require_jsx_runtime();
function PackagesLayout() {
	const { regions } = Route.useLoaderData();
	const matchRoute = useMatchRoute();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesHero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 bg-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-max gap-2 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabLink, {
							to: "/packages",
							label: "All",
							active: !!matchRoute({
								to: "/packages",
								fuzzy: false
							})
						}),
						regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabLink, {
							to: "/packages/$region",
							params: { region: r.slug },
							label: r.name,
							active: !!matchRoute({
								to: "/packages/$region",
								params: { region: r.slug },
								fuzzy: true
							})
						}, r.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabLink, {
							to: "/packages",
							label: "Golf Tourism",
							active: !!matchRoute({
								to: "/golf-tourism",
								fuzzy: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabLink, {
							to: "/packages",
							label: "Honeymoon",
							active: !!matchRoute({
								to: "/honeymoon",
								fuzzy: false
							})
						})
					]
				})
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] });
}
function TabLink({ to, params, label, active }) {
	const className = `shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${active ? "bg-accent text-accent-foreground" : "bg-white/10 text-white hover:bg-white/20"}`;
	if (to === "/packages/$region" && params) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		params: { region: params.region },
		className,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/packages",
		className,
		children: label
	});
}
//#endregion
export { PackagesLayout as component };
