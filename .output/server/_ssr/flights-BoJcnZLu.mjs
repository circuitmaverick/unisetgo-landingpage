import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { f as Ticket, h as Sparkles, k as PlaneTakeoff, ot as Earth } from "../_libs/lucide-react.mjs";
import { n as WhatsAppCTA, t as PageHero } from "./page-hero-CibwgmII.mjs";
import { t as AutoSlideshow } from "./auto-slideshow-v1OMcjvO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flights-BoJcnZLu.js
var import_jsx_runtime = require_jsx_runtime();
var FLIGHT_IMAGES = [
	"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
	"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1200&q=80",
	"https://images.unsplash.com/photo-1540339832862-474599807836?w=1200&q=80",
	"https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=80",
	"https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80"
];
function FlightsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Flight bookings",
		title: "Fly smart,",
		accent: "fly informed",
		description: "First, business or economy — we facilitate good deals and handle re-routes when things go sideways.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
			href: waLink("Hi UniSetGo, I'd like to book flights."),
			label: "Enquire on WhatsApp"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoSlideshow, {
				images: FLIGHT_IMAGES,
				alt: "Flights"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black text-foreground sm:text-4xl",
					children: "Every seat, sorted."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "With UniSetGo, your flights are handpicked for comfort, convenience, and value — so you can focus on the journey, not the logistics."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaneTakeoff, { className: "h-5 w-5" }),
							title: "Flexible options",
							text: "Tailored choices for economy, premium economy, business, or first class depending on client preference."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "h-5 w-5" }),
							title: "Seat & meal choice",
							text: "Pre-selected seats, special meals sorted."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }),
							title: "Special Assitance",
							text: "Support for wheelchair assistance, and group bookings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-5 w-5" }),
							title: "Multi-city itineraries",
							text: "Round-the-world and open-jaw tickets designed to save cost and time."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
						href: waLink("Hi UniSetGo, I'd like to book flights."),
						label: "Enquire on WhatsApp"
					})
				})
			] })]
		})
	})] });
}
function Feature({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-bold text-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: text
		})] })]
	});
}
//#endregion
export { FlightsPage as component };
