import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as Search, m as Star, t as X, y as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { i as formatINR, n as TRIP_TYPES } from "./packages-gHrvwJaJ.mjs";
import { t as CachedImage } from "./cached-image-0z5AXFOs.mjs";
import { n as regionBySlug } from "./regions-2tGm7cEL.mjs";
import { n as Route } from "./packages.index-8_JAspm7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages.index-D9iMlewc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AllPackages() {
	const { packages, regions } = Route.useLoaderData();
	const [q, setQ] = (0, import_react.useState)("");
	const [region, setRegion] = (0, import_react.useState)("all");
	const [tripType, setTripType] = (0, import_react.useState)("all");
	const [duration, setDuration] = (0, import_react.useState)("all");
	const filtered = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return packages.filter((p) => {
			if (region !== "all" && p.region !== region) return false;
			if (tripType !== "all" && p.tripType !== tripType) return false;
			if (duration === "short" && p.days > 5) return false;
			if (duration === "medium" && (p.days < 6 || p.days > 7)) return false;
			if (duration === "long" && p.days < 8) return false;
			if (needle) {
				if (!`${p.title} ${p.country} ${p.summary} ${p.overview}`.toLowerCase().includes(needle)) return false;
			}
			return true;
		});
	}, [
		packages,
		q,
		region,
		tripType,
		duration
	]);
	const anyFilterActive = q || region !== "all" || tripType !== "all" || duration !== "all";
	const reset = () => {
		setQ("");
		setRegion("all");
		setTripType("all");
		setDuration("all");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-2xl font-black text-foreground sm:text-3xl",
					children: [
						"All packages",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-lg font-medium text-muted-foreground",
							children: [
								"(",
								filtered.length,
								"/",
								packages.length,
								")"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Search by destination or filter by region, duration and type."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "search",
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search destinations, e.g. Bali, Alps, Kerala…",
								className: "h-11 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
								"aria-label": "Search packages"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Region",
							value: region,
							onChange: (v) => setRegion(v),
							options: [{
								value: "all",
								label: "All regions"
							}, ...regions.map((r) => ({
								value: r.slug,
								label: r.name
							}))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Trip type",
							value: tripType,
							onChange: (v) => setTripType(v),
							options: [{
								value: "all",
								label: "All types"
							}, ...TRIP_TYPES.map((t) => ({
								value: t.value,
								label: t.label
							}))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Duration",
							value: duration,
							onChange: (v) => setDuration(v),
							options: [
								{
									value: "all",
									label: "Any duration"
								},
								{
									value: "short",
									label: "Short (up to 5 days)"
								},
								{
									value: "medium",
									label: "Medium (6–7 days)"
								},
								{
									value: "long",
									label: "Long (8+ days)"
								}
							]
						})
					]
				}), anyFilterActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3 w-3" }), " Active filters"]
						}),
						q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							label: `"${q}"`,
							onClear: () => setQ("")
						}),
						region !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							label: regions.find((r) => r.slug === region)?.name ?? region,
							onClear: () => setRegion("all")
						}),
						tripType !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							label: TRIP_TYPES.find((t) => t.value === tripType)?.label ?? tripType,
							onClear: () => setTripType("all")
						}),
						duration !== "all" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
							label: duration,
							onClear: () => setDuration("all")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: reset,
							className: "ml-auto text-xs font-semibold text-primary hover:text-accent",
							children: "Clear all"
						})
					]
				})]
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-dashed border-border p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-foreground",
						children: "No trips match those filters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Try broadening the search — or reach out; we build custom itineraries too."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: reset,
						className: "mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90",
						children: "Clear filters"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, { pkg: p }, p.slug))
			})
		]
	});
}
function SelectField({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			"aria-label": label,
			className: "h-11 w-full rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
				value: o.value,
				children: [
					label,
					": ",
					o.label
				]
			}, o.value))
		})]
	});
}
function FilterChip({ label, onClear }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onClear,
			"aria-label": `Clear ${label}`,
			className: "hover:text-accent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
		})]
	});
}
function PackageCard({ pkg }) {
	const regionLabel = pkg.regionName ?? regionBySlug(pkg.region)?.name ?? pkg.region;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/packages/$region/$slug",
		params: {
			region: pkg.region,
			slug: pkg.slug
		},
		className: "group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CachedImage, {
					src: pkg.heroImage,
					alt: pkg.title,
					loading: "lazy",
					width: 1400,
					height: 900,
					className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur",
					children: regionLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-accent-foreground",
					children: [
						pkg.days,
						"D / ",
						pkg.nights,
						"N"
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: pkg.country
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-lg font-bold text-foreground group-hover:text-primary",
					children: pkg.title
				}),
				pkg.reviewCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-foreground",
							children: pkg.rating.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								"(",
								pkg.reviewCount,
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground",
					children: pkg.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-end justify-between border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.65rem] uppercase tracking-widest text-muted-foreground",
						children: "From"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-black text-primary",
						children: formatINR(pkg.priceFrom)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold text-accent",
						children: "View →"
					})]
				})
			]
		})]
	});
}
//#endregion
export { PackageCard, AllPackages as component };
