import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-CibwgmII.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, accent, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 pt-16 pb-14 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black leading-tight sm:text-6xl",
					children: [title, accent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-accent",
							children: accent
						}),
						"."
					] }) : null]
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-white/80",
					children: description
				}) : null,
				children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children
				}) : null
			]
		})
	});
}
function WhatsAppCTA({ href, label = "Enquire on WhatsApp", variant = "accent" }) {
	const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold shadow-[var(--shadow-card)] transition hover:opacity-95";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: variant === "accent" ? `${base} gradient-accent text-accent-foreground` : `${base} border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20`,
		children: label
	});
}
//#endregion
export { WhatsAppCTA as n, PageHero as t };
