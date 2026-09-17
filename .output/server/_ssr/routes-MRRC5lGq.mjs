import { n as __toESM } from "../_runtime.mjs";
import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ft as ArrowUpRight, It as ArrowRight, X as Headset, dt as Compass, h as Sparkles, m as Star, vt as ChevronRight, x as ShieldCheck, yt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { i as formatINR, r as featuredPackages } from "./packages-gHrvwJaJ.mjs";
import { t as REGIONS } from "./regions-2tGm7cEL.mjs";
import { t as Route } from "./routes-D-Cr5O4m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-MRRC5lGq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_collage_default = "/assets/hero-collage-DeMsFlbZ.jpg";
var AUTOPLAY_MS = 5e3;
function circularOffset(index, active, length) {
	let diff = index - active;
	if (diff > length / 2) diff -= length;
	if (diff < -length / 2) diff += length;
	return diff;
}
function cardPosition(offset) {
	if (offset === 0) return {
		className: "translate-x-0 scale-100 opacity-100 z-30",
		interactive: true
	};
	if (offset === 1) return {
		className: "translate-x-[62%] rotate-2 scale-[0.94] opacity-40 z-10 pointer-events-none",
		interactive: false
	};
	if (offset === -1) return {
		className: "-translate-x-[62%] -rotate-2 scale-[0.94] opacity-40 z-10 pointer-events-none",
		interactive: false
	};
	if (offset > 1) return {
		className: "translate-x-[120%] rotate-3 scale-[0.88] opacity-0 z-0 pointer-events-none",
		interactive: false
	};
	return {
		className: "-translate-x-[120%] -rotate-3 scale-[0.88] opacity-0 z-0 pointer-events-none",
		interactive: false
	};
}
function TestimonialsCarousel({ testimonials }) {
	const length = testimonials.length;
	const [active, setActive] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const timerRef = (0, import_react.useRef)(null);
	const goTo = (i) => setActive((i % length + length) % length);
	const next = () => goTo(active + 1);
	const prev = () => goTo(active - 1);
	(0, import_react.useEffect)(() => {
		if (paused || length === 0) return;
		timerRef.current = setInterval(() => {
			setActive((i) => (i + 1) % length);
		}, AUTOPLAY_MS);
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [paused, length]);
	const handleManualNav = (fn) => {
		fn();
		if (timerRef.current) clearInterval(timerRef.current);
		setPaused(false);
	};
	const positioned = (0, import_react.useMemo)(() => testimonials.map((review, index) => ({
		review,
		index,
		...cardPosition(circularOffset(index, active, length))
	})), [
		testimonials,
		active,
		length
	]);
	if (length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Client stories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 text-3xl font-black text-foreground sm:text-4xl",
					children: [
						"What our ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "clients"
						}),
						" say"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto h-[430px] max-w-3xl sm:h-[360px]",
				onMouseEnter: () => setPaused(true),
				onMouseLeave: () => setPaused(false),
				children: [
					positioned.map(({ review, index, className, interactive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						tabIndex: interactive ? 0 : -1,
						"aria-hidden": !interactive,
						className: `absolute inset-0 mx-auto flex w-full max-w-2xl transform-gpu overflow-hidden rounded-3xl border border-transparent bg-navy/70 backdrop-blur-lg shadow-[var(--shadow-elegant)] transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${className}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden w-2/5 shrink-0 sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: review.image,
								alt: review.author,
								className: "h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col justify-between p-6 sm:p-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex text-accent",
								children: Array.from({ length: review.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "line-clamp-6 whitespace-pre-line text-sm text-white sm:text-base",
								children: [
									"\"",
									review.text,
									"\""
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/gallery",
									search: { review: review.id },
									className: "inline-flex w-fit items-center gap-1.5 rounded-full border border-accent px-3.5 py-1.5 text-xs font-semibold bg-accent text-white transition hover:border-primary hover:bg-primary hover:text-primary-foreground sm:text-sm",
									children: ["Read Full Review ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 border-t border-border pt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-white",
										children: review.author
									})
								})]
							})]
						})]
					}, index)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleManualNav(prev),
						"aria-label": "Previous testimonial",
						className: "absolute left-0 top-1/2 z-40 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] transition hover:scale-105 sm:h-11 sm:w-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4 sm:h-5 sm:w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleManualNav(next),
						"aria-label": "Next testimonial",
						className: "absolute right-0 top-1/2 z-40 grid h-9 w-9 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-border bg-card shadow-[var(--shadow-card)] transition hover:scale-105 sm:h-11 sm:w-11",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 sm:h-5 sm:w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-center gap-2",
				children: testimonials.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => handleManualNav(() => goTo(i)),
					"aria-label": `Go to testimonial ${i + 1}`,
					className: `h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-primary" : "w-1.5 bg-border"}`
				}, i))
			})
		]
	});
}
function Pillar({ icon: Icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 place-items-center rounded-xl gradient-accent text-accent-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-bold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: body
			})
		]
	});
}
function LandingPage() {
	const featured = featuredPackages();
	const { testimonials } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative -mt-16 min-h-[92vh] overflow-hidden bg-primary pt-16 text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_collage_default,
						alt: "Travel destinations collage",
						width: 1600,
						height: 1200,
						className: "absolute inset-0 h-full w-full object-cover opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(120deg,oklch(0.28_0.16_269)_10%,oklch(0.28_0.16_269_/_0.6)_55%,transparent_100%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pointer-events-none absolute right-8 top-32 hidden gap-1 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-16 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-8 rounded-full bg-white/60" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-24 pt-16 sm:px-8 md:min-h-[80vh] md:grid-cols-[1.15fr_0.85fr] md:pt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
									children: "Corporate travel, curated"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-6 text-balance font-black leading-[0.95] tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem]",
									children: [
										"Explore ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "not-italic text-accent",
											children: "Beyond"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Boundaries."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-base text-white/80 sm:text-lg",
									children: "UniSetGo designs bespoke journeys for corporate and families — flights, stays, itineraries and on-trip concierge, engineered end to end."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										className: "rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-elegant)] hover:opacity-95",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/packages",
											children: ["Explore Packages ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "lg",
										variant: "outline",
										className: "rounded-full border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: waLink("Hi UniSetGo, I'd like to plan a custom trip."),
											target: "_blank",
											rel: "noreferrer",
											children: "Plan a Custom Trip"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-12 grid grid-cols-3 gap-6 max-w-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											n: "12+",
											label: "Regions covered"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											n: "500+",
											label: "Trips delivered"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											n: "4.9★",
											label: "Client rating"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative hidden md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 rounded-3xl bg-white/5 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative rotate-[3deg] rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-md shadow-[var(--shadow-elegant)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: featured[0].heroImage,
									alt: featured[0].title,
									width: 800,
									height: 520,
									loading: "lazy",
									className: "h-64 w-full rounded-2xl object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between px-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-accent",
										children: "Featured"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-bold",
										children: featured[0].title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground",
										children: [featured[0].durationDays, "D"]
									})]
								})]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative mx-auto max-w-7xl px-5 py-20 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Where next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl font-black text-foreground sm:text-4xl",
						children: [
							"Curated ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "regions"
							}),
							", real expertise."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/packages",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent",
						children: ["All packages ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
					children: REGIONS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/packages/$region",
						params: { region: r.slug },
						className: `group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] aspect-[4/5]`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: r.name,
							loading: "lazy",
							width: 1e3,
							height: 1200,
							className: "absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full flex-col justify-end p-5 bg-linear-to-t from-gray-900/70 via-transparent to-transparent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: `mt-1 font-black leading-tight text-xl`,
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/70",
								children: r.tagline
							})]
						})]
					}, r.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/50 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Editor's picks"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl font-black text-foreground sm:text-4xl",
							children: [
								"Signature ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "journeys"
								}),
								"."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-sm text-muted-foreground",
							children: "A handful of our most-booked packages. Every one is customisable — swap cities, add days, upgrade stays."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 md:grid-cols-3",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/packages/$region/$slug",
							params: {
								region: p.region,
								slug: p.slug
							},
							className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.heroImage,
									alt: p.title,
									loading: "lazy",
									width: 1400,
									height: 900,
									className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground",
									children: p.country
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold text-foreground",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 line-clamp-2 text-sm text-muted-foreground",
										children: p.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-end justify-between border-t border-border pt-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[0.65rem] uppercase tracking-widest text-muted-foreground",
											children: "From"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-black text-primary",
											children: formatINR(p.priceFrom)
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-semibold text-accent",
											children: [
												p.durationDays,
												"D / ",
												p.nights,
												"N →"
											]
										})]
									})
								]
							})]
						}, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-5 py-24 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Why UniSetGo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl font-black text-foreground sm:text-4xl",
							children: [
								"Travel like a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "guest"
								}),
								",",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" ",
								"not a planner."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-muted-foreground",
							children: "Behind every trip is a real trip designer — someone who visits, negotiates and double-checks. Elegance, without the guesswork."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
								icon: Compass,
								title: "Tailored Itineraries",
								body: "Every route, every stay, every meal — designed around you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
								icon: Sparkles,
								title: "Corporate & MICE",
								body: "Team offsites, conferences and incentive trips, handled."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
								icon: Headset,
								title: "On-trip Support",
								body: "A real person on the other end, in your timezone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pillar, {
								icon: ShieldCheck,
								title: "Trusted Partners",
								body: "IATA-affiliated, vetted vendors across 30+ countries."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden bg-primary text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 opacity-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-0 h-96 w-96 rounded-full bg-accent blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky blur-3xl" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-5 py-20 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-[0.22em] text-accent",
									children: "Domestic India"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-3 text-3xl font-black sm:text-5xl",
									children: [
										"A subcontinent, ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										" in every mood."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-white/80",
									children: "From the Himalayan north to the beaches of the south — pick a region, we'll do the rest."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/packages/$region",
								params: { region: "domestic" },
								children: ["All Domestic Packages ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							"North India",
							"South India",
							"Himalayas",
							"Beaches & Islands"
						].map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/packages/$region",
							params: { region: "domestic" },
							className: "group rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition hover:border-accent hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold",
								children: name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-widest text-white/60 group-hover:text-accent",
								children: "View packages →"
							})]
						}, name))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsCarousel, { testimonials }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 pb-24 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2rem] gradient-hero p-10 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
									children: "Let's build it"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 text-3xl font-black sm:text-5xl",
									children: [
										"Ready to plan your",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "not-italic text-accent",
											children: "next trip?"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-white/80",
									children: "Tell us where and when — we'll send a bespoke plan within 24 hours."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-full bg-accent text-accent-foreground hover:opacity-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink("Hi UniSetGo, I'd like to plan a custom trip."),
									target: "_blank",
									rel: "noreferrer",
									children: "WhatsApp us"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Contact page"
								})
							})]
						})]
					})]
				})
			})
		]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-3xl font-black text-white",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs uppercase tracking-widest text-white/60",
		children: label
	})] });
}
//#endregion
export { LandingPage as component };
