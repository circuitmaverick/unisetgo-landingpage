import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { Pt as Award, R as MapPin, Tt as Calendar, et as Flag, l as Trophy, o as Users } from "../_libs/lucide-react.mjs";
import { n as WhatsAppCTA, t as PageHero } from "./page-hero-CibwgmII.mjs";
import { t as Route } from "./golf-tourism-DrJnaMd-.mjs";
import { t as PackageCard } from "./packages.index-8_JAspm7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/golf-tourism-Clma9a9l.js
var import_jsx_runtime = require_jsx_runtime();
var ENQUIRY = waLink("Hi UniSetGo, I'd like to plan a golf tour.");
function GolfPage() {
	const { packages: items } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Golf tourism",
			title: "Tee off at the world's",
			accent: "greatest courses",
			description: "From St Andrews to Emirates Golf Club — we sort tee times, caddies, equipment, transfers and the perfect after-round hotel.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
					href: ENQUIRY,
					label: "Plan a Golf Tour"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-primary",
						children: "Why us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-black text-foreground sm:text-4xl",
						children: "Golf holidays, with a special touch."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Booking championship courses takes more than a website — you need lead time on tee slots, caddie preferences, buggy allocation and equipment on arrival. We handle all of it, and we build the rest of the holiday around it: partner-friendly spas, wine regions, city breaks and family days."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Whether it's a fourball weekend in Dubai or a two-week Scotland pilgrimage across the Open venues, we design the round and the road."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80",
					alt: "Golf course fairway",
					className: "aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]",
					loading: "lazy"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-black text-foreground sm:text-3xl",
					children: "Signature destinations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: DESTINATIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.image,
							alt: d.title,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold uppercase tracking-widest text-accent",
									children: d.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-lg font-bold text-foreground",
									children: d.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: d.text
								})
							]
						})]
					}, d.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-black text-foreground sm:text-3xl",
					children: [
						"Curated golf packages",
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
					children: "Every trip below can be extended, upgraded or customised — just tell us your dream round."
				}),
				items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-3xl border border-dashed border-border p-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-foreground",
						children: "No packages available."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Check back soon — new golf packages are added regularly."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { pkg: p }, p.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-foreground sm:text-3xl",
				children: "What we include"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5" }),
						title: "Tee-time booking",
						text: "Confirmed slots at championship courses, months in advance."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "h-5 w-5" }),
						title: "Course caddies",
						text: "Experienced caddies, buggies and equipment hire arranged."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5" }),
						title: "Tournament access",
						text: "Ryder Cup, DP World Tour and PGA tournament packages on request."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" }),
						title: "On-course stays",
						text: "Resort hotels on the course — walk from your room to the first tee."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5" }),
						title: "Non-golfer programme",
						text: "Spa days, city tours and wine tastings for the rest of the group."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5" }),
						title: "Pro coaching",
						text: "Optional lessons with PGA pros in Dubai, Thailand and India."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-5 py-14 text-center sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-black sm:text-4xl",
						children: "Where should we tee off?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-2xl text-white/80",
						children: "Tell us the courses on your list — we'll come back with tee-time availability and a full quote."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppCTA, {
							href: ENQUIRY,
							label: "Enquire on WhatsApp"
						})
					})
				]
			})
		})
	] });
}
var DESTINATIONS = [
	{
		tag: "Home of golf",
		title: "Scotland — St Andrews & beyond",
		text: "The Old Course, Carnoustie, Muirfield and Turnberry — the sport's spiritual homeland.",
		image: "https://images.unsplash.com/photo-1552088731-968be2438f8b?w=1200&q=80"
	},
	{
		tag: "Desert golf",
		title: "Dubai & Abu Dhabi",
		text: "Emirates Golf Club, Jumeirah Golf Estates and Yas Links — floodlit fairways and skyline greens.",
		image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80"
	},
	{
		tag: "Value & views",
		title: "Thailand & Vietnam",
		text: "Hua Hin, Phuket, Danang — championship courses at Southeast-Asia value.",
		image: "https://images.unsplash.com/photo-1493409349555-1215bf50776a?w=1200&q=80"
	}
];
function Feature({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-base font-bold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: text
			})
		]
	});
}
//#endregion
export { GolfPage as component };
