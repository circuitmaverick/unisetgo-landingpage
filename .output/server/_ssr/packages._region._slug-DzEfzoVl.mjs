import { n as __toESM } from "../_runtime.mjs";
import { a as mailLink, c as waLink } from "./contact-_gGvfOe5.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as MessageCircle, Lt as ArrowLeft, R as MapPin, a as WandSparkles, ft as Clock, gt as CircleCheck, h as Sparkles, ht as CircleX, m as Star, vt as ChevronRight, yt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { i as formatINR, n as TRIP_TYPES } from "./packages-gHrvwJaJ.mjs";
import { t as CachedImage } from "./cached-image-0z5AXFOs.mjs";
import { n as PackageReviewsSection, t as PackageEnquiryForm } from "./package-reviews-CfkIIssU.mjs";
import { t as Route } from "./packages._region._slug-DIpuEEjt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages._region._slug-DzEfzoVl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PackageDetail() {
	const { pkg, region } = Route.useLoaderData();
	const bookMsg = `Hi UniSetGo, I'd like to proceed with booking the "${pkg.title}" (${pkg.days}D/${pkg.nights}N, from ${formatINR(pkg.priceFrom)}). Please share the next steps.`;
	const customMsg = `Hi UniSetGo, I'd like to customise the "${pkg.title}" package (${pkg.days}D/${pkg.nights}N). Could we adjust the dates/cities/stays?`;
	const tripTypeLabel = TRIP_TYPES.find((t) => t.value === pkg.tripType)?.label ?? pkg.tripType;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/9] max-h-[70vh] w-full overflow-hidden bg-primary sm:aspect-[16/7]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CachedImage, {
				src: pkg.heroImage,
				alt: pkg.title,
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
						to: "/packages/$region",
						params: { region: pkg.region },
						className: "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.22em] text-accent hover:text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }),
							" ",
							region.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary",
								children: tripTypeLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-accent/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent",
								children: [
									pkg.days,
									"D / ",
									pkg.nights,
									"N"
								]
							}),
							pkg.reviewCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-current text-accent" }),
									pkg.rating.toFixed(1),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-normal text-muted-foreground",
										children: [
											"(",
											pkg.reviewCount,
											")"
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-black text-foreground sm:text-5xl",
						children: pkg.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted-foreground",
						children: pkg.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								icon: Clock,
								label: "Duration",
								value: `${pkg.days}D / ${pkg.nights}N`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								icon: MapPin,
								label: "Country",
								value: pkg.country
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.65rem] uppercase tracking-widest text-muted-foreground",
									children: "Price from"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-black text-primary",
									children: formatINR(pkg.priceFrom)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "per person"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meta, {
								icon: Sparkles,
								label: "Trip type",
								value: tripTypeLabel
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
								href: waLink(customMsg),
								target: "_blank",
								rel: "noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "mr-2 h-4 w-4" }), " Customise This Package"]
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
				children: "Trip overview"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: pkg.overview
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground leading-relaxed",
				children: "Every UniSetGo journey is delivered end to end — flights, transfers, handpicked stays and a real trip designer on WhatsApp before, during and after your trip. Prices are indicative from-rates for twin sharing; we'll tailor a final quote to your dates, group size and preferred hotel category."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Gallery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
				images: pkg.gallery,
				title: pkg.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Highlights"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 sm:grid-cols-2",
				children: pkg.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2 rounded-xl bg-secondary/50 p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" }), h]
				}, h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-black text-foreground",
				children: "Day-by-day itinerary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-4",
				children: pkg.itinerary.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
								children: "Book this trip, or make it yours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-white/80",
								children: "Confirm the itinerary as-is on WhatsApp, or ask us to swap cities, upgrade stays, add days or shift dates."
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
							href: waLink(customMsg),
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "mr-2 h-4 w-4" }), " Customise This Package"]
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
						children: pkg.inclusions.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
						children: pkg.exclusions.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
							children: "Enquire about this trip"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"Have a question about ",
								pkg.title,
								"? Send us a message and we'll get back to you."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageEnquiryForm, {
								packageSlug: pkg.slug,
								idPrefix: `package-enquiry-${pkg.slug}`
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
								href: mailLink(`Enquiry: ${pkg.title}`, bookMsg),
								children: "Email us"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageReviewsSection, {
					title: pkg.title,
					rating: pkg.rating,
					reviewCount: pkg.reviewCount,
					reviews: pkg.reviews
				})
			]
		})]
	})] });
}
function Gallery({ images, title }) {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const total = images.length;
	const go = (dir) => setIdx((i) => (i + dir + total) % total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
		}), total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6",
			children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setIdx(i),
				"aria-label": `Show image ${i + 1}`,
				className: `aspect-square overflow-hidden rounded-xl border-2 transition ${i === idx ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CachedImage, {
					src,
					alt: "",
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}, src + i))
		})]
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
var SplitComponent = PackageDetail;
//#endregion
export { SplitComponent as component };
