import { n as __toESM } from "../_runtime.mjs";
import { a as mailLink, c as waLink } from "./contact-_gGvfOe5.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as MessageCircle, Lt as ArrowLeft, R as MapPin, Rt as Anchor, ft as Clock, gt as CircleCheck, h as Sparkles, ht as CircleX, m as Star, vt as ChevronRight, yt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as Route } from "./cruises._slug-B7X_GwUH.mjs";
import { t as CachedImage } from "./cached-image-0z5AXFOs.mjs";
import { n as PackageReviewsSection, t as PackageEnquiryForm } from "./package-reviews-CfkIIssU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cruises._slug-C-SyDy9o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function formatINR(n) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(n);
}
function CruiseDetailPage() {
	const { cruise } = Route.useLoaderData();
	const { rating, reviewCount } = cruise;
	const bookMsg = `Hi UniSetGo, I'd like to proceed with booking a ${cruise.name} cruise (${cruise.duration}, from ${formatINR(cruise.priceFrom)}). Please share the next steps.`;
	const enquireMsg = `Hi UniSetGo, I'd like to enquire about a ${cruise.name} cruise.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/9] max-h-[70vh] w-full overflow-hidden bg-primary sm:aspect-[16/7]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CachedImage, {
				src: cruise.image,
				alt: cruise.name,
				width: 1600,
				height: 900,
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative -mt-32 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:-mt-40 sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cruises",
						className: "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.22em] text-accent hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " All Cruise Lines"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-2",
						children: [
							cruise.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary",
								children: cruise.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent",
								children: cruise.duration
							}),
							reviewCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-current text-accent" }),
									rating.toFixed(1),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-normal text-muted-foreground",
										children: [
											"(",
											reviewCount,
											")"
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-black text-foreground sm:text-5xl",
						children: cruise.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: cruise.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								icon: Clock,
								label: "Duration",
								value: cruise.duration
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								icon: MapPin,
								label: "Regions",
								value: cruise.regions.slice(0, 2).join(", ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] uppercase tracking-widest text-muted-foreground",
									children: "Price from"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-black text-primary",
									children: formatINR(cruise.priceFrom)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "per person"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								icon: Sparkles,
								label: "Cabin types",
								value: cruise.cabinTypes[0]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "h-12 rounded-full gradient-accent text-accent-foreground shadow-[var(--shadow-card)] hover:opacity-95",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(bookMsg),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-2 h-4 w-4" }), " Proceed to Booking"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "h-12 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink(enquireMsg),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { className: "mr-2 h-4 w-4" }), " Enquire on WhatsApp"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-[0.7rem] text-muted-foreground",
						children: "Both options open a WhatsApp chat with our team."
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black text-foreground",
				children: "Cruise overview"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: cruise.overview
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: "Every UniSetGo cruise booking is handled end to end — cabin selection, port transfers and a real trip designer on WhatsApp before, during and after you sail. Prices are indicative from-rates for twin sharing; we'll tailor a final quote to your sail dates, cabin category and group size."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
				images: cruise.gallery,
				title: cruise.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Highlights"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: cruise.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 rounded-xl bg-secondary/50 p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" }), h]
				}, h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Ports of call"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: cruise.ports.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-accent" }),
						" ",
						p
					]
				}, p))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Day-by-day itinerary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-4",
				children: cruise.itinerary.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary font-black text-primary-foreground",
						children: ["D", d.day]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-foreground",
							children: d.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: d.detail
						})]
					})]
				}, d.day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Cabin types"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: cruise.cabinTypes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2 rounded-xl border border-border bg-card p-3 text-sm font-semibold text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { className: "h-4 w-4 shrink-0 text-accent" }),
						" ",
						c
					]
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-3 rounded-3xl gradient-hero p-8 text-primary-foreground shadow-[var(--shadow-card)] sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-widest text-accent",
								children: "Ready when you are"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-2xl font-black",
								children: "Book this cruise, or ask us to tailor it."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/80",
								children: "Confirm the sailing as-is on WhatsApp, or ask us to swap cabin categories, add pre/post-cruise stays or shift dates."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "h-12 rounded-full bg-accent text-accent-foreground hover:opacity-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(bookMsg),
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-2 h-4 w-4" }), " Proceed to Booking"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						className: "h-12 rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink(enquireMsg),
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, { className: "mr-2 h-4 w-4" }), " Enquire on WhatsApp"]
						})
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-primary",
						children: "Inclusions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: cruise.inclusions.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 shrink-0 text-accent mt-0.5" }),
								" ",
								i
							]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-primary",
						children: "Exclusions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm",
						children: cruise.exclusions.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 shrink-0 text-muted-foreground mt-0.5" }),
								" ",
								i
							]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-primary",
							children: "Enquire about this cruise"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"Have a question about ",
								cruise.name,
								"? Send us a message and we'll get back to you."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageEnquiryForm, {
								packageSlug: cruise.slug,
								idPrefix: `cruise-enquiry-${cruise.slug}`
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Prefer email?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-foreground",
							children: "Drop us a note and we'll respond within a working day with a tailored quote."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "mt-4 w-full rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: mailLink(`Enquiry: ${cruise.name}`, bookMsg),
								children: "Email us"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageReviewsSection, {
					title: cruise.name,
					rating,
					reviewCount,
					reviews: cruise.reviews
				})
			]
		})]
	})] });
}
function Gallery({ images, title }) {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const total = images.length;
	const go = (dir) => setIdx((i) => (i + dir + total) % total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-secondary shadow-[var(--shadow-card)]",
			children: [images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CachedImage, {
				src,
				alt: `${title} — image ${i + 1}`,
				width: 1600,
				height: 1e3,
				loading: i === 0 ? "eager" : "lazy",
				className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === idx ? "opacity-100" : "opacity-0"}`
			}, src + i)), total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(-1),
					"aria-label": "Previous image",
					className: "absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(1),
					"aria-label": "Next image",
					className: "absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur",
					children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIdx(i),
						"aria-label": `Go to image ${i + 1}`,
						className: `h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`
					}, i))
				})
			] })]
		})
	});
}
function Meta({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }),
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 truncate text-base font-bold text-foreground",
			children: value
		})]
	});
}
//#endregion
export { CruiseDetailPage as component };
