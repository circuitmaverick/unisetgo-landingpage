import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { At as BedDouble, h as Sparkles, r as Wifi, ut as ConciergeBell } from "../_libs/lucide-react.mjs";
import { n as WhatsAppCTA, t as PageHero } from "./page-hero-CibwgmII.mjs";
import { t as AutoSlideshow } from "./auto-slideshow-v1OMcjvO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hotels-BJ4tiJux.js
var import_jsx_runtime = require_jsx_runtime();
var HOTEL_IMAGES = [
	"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
	"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
	"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
	"https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
	"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80"
];
function HotelsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Hotel bookings",
		title: "Comfort,",
		accent: "anywhere",
		description: "From five-star icons to smart budget stays — booked at the best rate, with our concierge on WhatsApp through your trip.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
			href: waLink("Hi UniSetGo, I'd like to book a hotel."),
			label: "Enquire on WhatsApp"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-black text-foreground sm:text-4xl",
					children: "Every stay, sorted."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Every UniSetGo journey includes selected hotels — blending comfort, culture, and convenience for an unforgettable stay."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-5 w-5" }),
							title: "Luxury to budget",
							text: "Wide variety of options to choose from."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConciergeBell, { className: "h-5 w-5" }),
							title: "Room upgrades",
							text: "Upgrade options to choose from."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" }),
							title: "Special occasions",
							text: "Cake, décor and champagne for birthdays, anniversaries and honeymoons."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "h-5 w-5" }),
							title: "Verified essentials",
							text: "Wi-Fi, air-con, meals, add-on services and more."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
						href: waLink("Hi UniSetGo, I'd like to book a hotel."),
						label: "Enquire on WhatsApp"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoSlideshow, {
				images: HOTEL_IMAGES,
				alt: "Hotel rooms"
			})]
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
export { HotelsPage as component };
