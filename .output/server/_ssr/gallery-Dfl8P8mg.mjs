import { n as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { n as buttonVariants } from "./button-BkEeRci-.mjs";
import { at as Ellipsis, m as Star, q as Images, vt as ChevronRight, yt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as DialogContent, r as DialogTitle, t as Dialog } from "./dialog-Br4tP9GX.mjs";
import { t as Route } from "./gallery-jOLPIrLw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-Dfl8P8mg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Pagination = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
	role: "navigation",
	"aria-label": "pagination",
	className: cn("mx-auto flex w-full justify-center", className),
	...props
});
Pagination.displayName = "Pagination";
var PaginationContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
	ref,
	className: cn("flex flex-row items-center gap-1", className),
	...props
}));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
	ref,
	className: cn("", className),
	...props
}));
PaginationItem.displayName = "PaginationItem";
var PaginationLink = ({ className, isActive, size = "icon", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
	"aria-current": isActive ? "page" : void 0,
	className: cn(buttonVariants({
		variant: isActive ? "outline" : "ghost",
		size
	}), className),
	...props
});
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, {
	"aria-label": "Go to previous page",
	size: "default",
	className: cn("gap-1 pl-2.5", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Previous" })]
});
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationLink, {
	"aria-label": "Go to next page",
	size: "default",
	className: cn("gap-1 pr-2.5", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Next" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
});
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
	"aria-hidden": true,
	className: cn("flex h-9 w-9 items-center justify-center", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: "More pages"
	})]
});
PaginationEllipsis.displayName = "PaginationEllipsis";
var PAGE_SIZE = 12;
function GalleryPage() {
	const { reviews } = Route.useLoaderData();
	const { review: reviewIdParam } = Route.useSearch();
	const total = reviews.length;
	const average = reviews.reduce((sum, r) => sum + r.rating, 0) / total || 0;
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(null);
	const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
	const [page, setPage] = (0, import_react.useState)(1);
	const gridRef = (0, import_react.useRef)(null);
	const pageStart = (page - 1) * PAGE_SIZE;
	const pageItems = (0, import_react.useMemo)(() => reviews.slice(pageStart, pageStart + PAGE_SIZE), [reviews, pageStart]);
	(0, import_react.useEffect)(() => {
		if (!reviewIdParam) return;
		const idx = reviews.findIndex((r) => r.id === reviewIdParam);
		if (idx < 0) return;
		setActiveIndex(idx);
		setPage(Math.floor(idx / PAGE_SIZE) + 1);
	}, [reviewIdParam, reviews]);
	function goToPage(next) {
		setPage(Math.min(Math.max(next, 1), totalPages));
		gridRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-5 py-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
						children: "Gallery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl",
						children: [
							"Moments from ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-accent",
								children: "real trips"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg text-white/80",
						children: "Every photo below was shared by a traveller who planned their trip with UniSetGo. Click a photo to read their story."
					}),
					total > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex text-accent",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-5 w-5 ${i < Math.round(average) ? "fill-current" : "opacity-30"}` }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-semibold text-white/90",
							children: [
								average.toFixed(1),
								" average from ",
								total,
								" reviews"
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: gridRef,
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: total === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-dashed border-border p-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-semibold text-foreground",
					children: "No photos yet."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Check back soon — traveller photos will show up here as reviews come in."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPagination, {
						page,
						totalPages,
						onPageChange: goToPage
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
					children: pageItems.map((review, i) => {
						const globalIndex = pageStart + i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveIndex(globalIndex),
							className: "group relative aspect-[4/5] overflow-hidden bg-secondary text-left shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: review.images[0],
								alt: `Photo shared by ${review.name}`,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
							}), review.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-black/50 text-white backdrop-blur",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "h-3.5 w-3.5" })
							})]
						}, review.id);
					})
				}),
				totalPages > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPagination, {
						page,
						totalPages,
						onPageChange: goToPage
					})
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewLightbox, {
			reviews,
			activeIndex,
			onIndexChange: setActiveIndex
		})
	] });
}
/** Always includes page 1 and the last page, plus a window around the
* current page, collapsing any gaps into an ellipsis marker. */
function getPageNumbers(page, totalPages) {
	const pages = /* @__PURE__ */ new Set([
		1,
		totalPages,
		page - 1,
		page,
		page + 1
	]);
	const sorted = Array.from(pages).filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
	const result = [];
	let prev = 0;
	for (const p of sorted) {
		if (prev && p - prev > 1) result.push("ellipsis");
		result.push(p);
		prev = p;
	}
	return result;
}
function GalleryPagination({ page, totalPages, onPageChange }) {
	const pageNumbers = getPageNumbers(page, totalPages);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PaginationContent, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationPrevious, {
			href: "#",
			onClick: (e) => {
				e.preventDefault();
				if (page > 1) onPageChange(page - 1);
			},
			"aria-disabled": page === 1,
			className: page === 1 ? "pointer-events-none opacity-50" : void 0
		}) }),
		pageNumbers.map((p, i) => p === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationEllipsis, {}) }, `ellipsis-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationLink, {
			href: "#",
			isActive: p === page,
			onClick: (e) => {
				e.preventDefault();
				onPageChange(p);
			},
			children: p
		}) }, p)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationNext, {
			href: "#",
			onClick: (e) => {
				e.preventDefault();
				if (page < totalPages) onPageChange(page + 1);
			},
			"aria-disabled": page === totalPages,
			className: page === totalPages ? "pointer-events-none opacity-50" : void 0
		}) })
	] }) });
}
function ReviewLightbox({ reviews, activeIndex, onIndexChange }) {
	const total = reviews.length;
	const open = activeIndex !== null;
	const review = activeIndex !== null ? reviews[activeIndex] : null;
	const [imageIndex, setImageIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setImageIndex(0);
	}, [activeIndex]);
	const go = (dir) => {
		if (activeIndex === null) return;
		onIndexChange(((activeIndex + dir) % total + total) % total);
	};
	const goImage = (dir) => {
		if (!review) return;
		const count = review.images.length;
		setImageIndex((i) => ((i + dir) % count + count) % count);
	};
	(0, import_react.useEffect)(() => {
		if (!open) return;
		function onKeyDown(e) {
			if (e.key === "ArrowLeft") go(-1);
			if (e.key === "ArrowRight") go(1);
		}
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [
		open,
		activeIndex,
		total
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => !next && onIndexChange(null),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] max-w-4xl gap-0 overflow-hidden p-0 sm:rounded-3xl",
			children: [review && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid max-h-[calc(90vh-2px)] overflow-y-auto md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "sr-only",
						children: ["Photo and review from ", review.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] bg-secondary md:aspect-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: review.images[imageIndex],
							alt: `Photo ${imageIndex + 1} shared by ${review.name}`,
							className: "h-full w-full object-cover"
						}), review.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => goImage(-1),
								"aria-label": "Previous image",
								className: "absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => goImage(1),
								"aria-label": "Next image",
								className: "absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5",
								children: review.images.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setImageIndex(i),
									"aria-label": `Go to image ${i + 1}`,
									className: `h-1.5 rounded-full transition-all ${i === imageIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"}`
								}, i))
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex text-accent",
								children: Array.from({ length: review.rating }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, j))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/90",
								children: [
									"\"",
									review.review,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 border-t border-border pt-4 font-bold text-foreground",
								children: review.name
							})
						]
					})
				]
			}), total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => go(-1),
				"aria-label": "Previous review",
				className: "absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => go(1),
				"aria-label": "Next review",
				className: "absolute right-16 top-3 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur hover:bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
			})] })]
		})
	});
}
//#endregion
export { GalleryPage as component };
