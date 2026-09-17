import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { G as Landmark, d as Timer, gt as CircleCheck, jt as Banknote, u as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/refund-policy-BPlJN69w.js
var import_jsx_runtime = require_jsx_runtime();
var RULES = [
	{
		icon: Landmark,
		title: "Original source of payment",
		body: "Refunds are issued back to the original method used to pay."
	},
	{
		icon: CircleCheck,
		title: "Supplier cancellation terms apply",
		body: "Refunds are issued only as per the cancellation terms of the relevant suppliers or airlines."
	},
	{
		icon: Timer,
		title: "Subject to supplier acceptance",
		body: "A refund is issued only after it has been accepted by the principal supplier."
	},
	{
		icon: Banknote,
		title: "Released on receipt from supplier",
		body: "Refunds are passed on once we receive the corresponding refund from the airline or supplier."
	},
	{
		icon: TriangleAlert,
		title: "Amount as per cancellation date",
		body: "The refund amount is whatever was applicable at the time of cancellation — not the original booking value."
	}
];
function RefundPolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
					children: "Policies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl",
					children: ["Refund ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "not-italic text-accent",
						children: "Policy"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-white/80",
					children: "How refunds are processed, and the rules that apply when a booking is cancelled."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-4xl px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold text-foreground",
					children: "Overriding terms"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "The terms of the supplier, hotel, or airline will override the general terms and conditions below and will apply wherever relevant."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Refunds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-black text-foreground sm:text-3xl",
						children: "Process & rules"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "A refund will be processed for all eligible cases based on the following:"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4",
				children: RULES.map(({ icon: Icon, title, body }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-foreground",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: body
					})] })]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-foreground",
						children: "Have a question about a specific booking?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Our team can walk you through where your refund stands."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink("Hi UniSetGo, I have a question about a refund."),
								target: "_blank",
								rel: "noreferrer",
								children: "Chat with us"
							})
						})
					})
				]
			})
		]
	})] });
}
//#endregion
export { RefundPolicyPage as component };
