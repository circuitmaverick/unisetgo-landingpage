import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { B as Lock, C as Share2, lt as Cookie, s as UserCheck, st as Database, v as SlidersVertical, x as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-policy-CaJQ-gNM.js
var import_jsx_runtime = require_jsx_runtime();
var SECTIONS = [
	{
		icon: Database,
		title: "Information we collect",
		points: [
			"Personal details: name, contact number, email, address.",
			"Travel information: passport details, visa documents, preferences, itineraries.",
			"Payment information: billing details, transaction records.",
			"Website/app usage: cookies, browsing activity, device information."
		]
	},
	{
		icon: SlidersVertical,
		title: "How we use your information",
		points: [
			"To process bookings and reservations.",
			"To provide customized travel itineraries and services.",
			"To communicate updates, offers, and travel alerts."
		]
	},
	{
		icon: Share2,
		title: "Information sharing",
		intro: "We do not sell or rent your personal data. Information may be shared only with:",
		points: [
			"Airlines, hotels, and travel partners (for confirmed bookings).",
			"Payment gateways (for secure transactions).",
			"Government authorities (when legally required)."
		]
	},
	{
		icon: Lock,
		title: "Data security",
		points: ["Access is restricted to authorized personnel only.", "We maintain compliance with applicable data protection practices."]
	},
	{
		icon: UserCheck,
		title: "Your rights",
		points: ["You may ask for corrections or updates to your personal data."]
	},
	{
		icon: Cookie,
		title: "Cookies & tracking",
		points: ["Our website may use cookies to enhance your user experience.", "You can disable cookies in your browser settings, but some features may not function properly as a result."]
	}
];
function PrivacyPolicyPage() {
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
					children: ["Privacy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "not-italic text-accent",
						children: "Policy"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-white/80",
					children: "We value your trust and are committed to protecting your personal information. Here's how we collect, use, and safeguard your data when you interact with our services."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6",
				children: SECTIONS.map(({ icon: Icon, title, intro, points }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-muted-foreground",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-foreground",
									children: title
								})]
							})]
						}),
						intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
							}, point))
						})
					]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-4 rounded-2xl border border-border bg-secondary/50 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-6 w-6 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "This policy may be updated from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Please check this page periodically for the latest version."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-foreground",
						children: "Have a question about your data?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Reach out and our team will help."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink("Hi UniSetGo, I have a question about my data / privacy."),
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
export { PrivacyPolicyPage as component };
