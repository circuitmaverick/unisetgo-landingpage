import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._region-Bg9i3LpG.js
var import_jsx_runtime = require_jsx_runtime();
function RegionNotFound({ data }) {
	const regions = data?.regions ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-24 text-center sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-foreground",
				children: "Region not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Pick from the regions below."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/packages/$region",
					params: { region: r.slug },
					className: "rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground",
					children: r.name
				}, r.slug))
			})
		]
	});
}
//#endregion
export { RegionNotFound as notFoundComponent };
