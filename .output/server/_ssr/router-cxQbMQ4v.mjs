import { n as __toESM } from "../_runtime.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as mailLink, c as waLink, t as CONTACT } from "./contact-_gGvfOe5.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { _ as useRouter, c as HeadContent, d as useMatchRoute, f as Outlet, g as Link, h as createRootRouteWithContext, j as notFound, m as createFileRoute, p as lazyRouteComponent, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Phone, I as Menu, K as Instagram, R as MapPin, U as Linkedin, bt as ChevronDown, mt as Circle, nt as Facebook, q as Images, t as X, vt as ChevronRight, xt as Check, z as Mail } from "../_libs/lucide-react.mjs";
import { t as PACKAGES } from "./packages-gHrvwJaJ.mjs";
import { a as DropdownMenuItemIndicator, c as DropdownMenuRadioItem$1, d as DropdownMenuSubTrigger$1, f as DropdownMenuTrigger$1, i as DropdownMenuItem$1, l as DropdownMenuSeparator$1, n as DropdownMenuCheckboxItem$1, o as DropdownMenuLabel$1, r as DropdownMenuContent$1, s as DropdownMenuPortal, t as DropdownMenu$1, u as DropdownMenuSubContent$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { i as RegionIndexSkeleton } from "./packages-skeletons-B3eJwqpl.mjs";
import { t as Route$16 } from "./cruises._slug-B7X_GwUH.mjs";
import { n as Route$17 } from "./cruises.index-JCsa718U.mjs";
import { t as Route$18 } from "./gallery-jOLPIrLw.mjs";
import { o as getRegions } from "./packages-db-DNrljpPj.mjs";
import { t as Route$19 } from "./golf-tourism-DrJnaMd-.mjs";
import { t as REGIONS } from "./regions-2tGm7cEL.mjs";
import { n as Route$20 } from "./packages.index-8_JAspm7.mjs";
import { t as Route$21 } from "./honeymoon-DqtbWjJ4.mjs";
import { n as Route$22 } from "./packages-CEOL62F6.mjs";
import { t as Route$23 } from "./packages._region._slug-DIpuEEjt.mjs";
import { t as Route$24 } from "./packages._region.index-DmPuUoYw.mjs";
import { t as Route$25 } from "./review-form._id-Bh5tl8Hu.mjs";
import { t as Route$26 } from "./routes-D-Cr5O4m.mjs";
import { t as Route$27 } from "./senior-citizens-NosGQJvy.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-cxQbMQ4v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-OvJwXucL.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var logo_big_default = "/assets/logo_big-5VPJ9BGC.png";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var DropdownMenu = DropdownMenu$1;
var DropdownMenuTrigger = DropdownMenuTrigger$1;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger$1, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = DropdownMenuSubTrigger$1.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSubContent$1, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = DropdownMenuSubContent$1.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent$1, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = DropdownMenuContent$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = DropdownMenuItem$1.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuCheckboxItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = DropdownMenuCheckboxItem$1.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuRadioItem$1, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = DropdownMenuRadioItem$1.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = DropdownMenuLabel$1.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = DropdownMenuSeparator$1.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/corporate-conclaves",
		label: "Corporate Conclaves"
	},
	{
		to: "/packages",
		label: "Packages"
	},
	{
		to: "/cruises",
		label: "Cruises"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var SPECIAL_TOURS = [
	{
		to: "/corporate-conclaves",
		label: "Corporate Conclaves"
	},
	{
		to: "/batch-reunions",
		label: "Batch Re-Unions"
	},
	{
		to: "/senior-citizens",
		label: "Senior Citizens"
	},
	{
		to: "/honeymoon",
		label: "Honeymoon"
	},
	{
		to: "/golf-tourism",
		label: "Golf Tourism"
	}
];
var ANCILLARY = [
	{
		to: "/hotels",
		label: "Hotels"
	},
	{
		to: "/flights",
		label: "Flights"
	},
	{
		to: "/visa",
		label: "Visa"
	},
	{
		to: "/foreign-travel-card",
		label: "Foreign Travel Card"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [specialOpen, setSpecialOpen] = (0, import_react.useState)(false);
	const [ancOpen, setAncOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[0_4px_24px_-16px_rgba(41,59,147,0.3)]" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_big_default,
					alt: "UniSetGo",
					width: 150,
					className: "mb-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-0.5 xl:flex py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							activeOptions: { exact: true },
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary",
							activeProps: { className: "text-primary bg-secondary" },
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary",
							activeProps: { className: "text-primary bg-secondary" },
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/packages",
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary",
							activeProps: { className: "text-primary bg-secondary" },
							children: "Packages"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/corporate-conclaves",
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary",
							activeProps: { className: "text-primary bg-secondary" },
							children: "Corporate Conclaves"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
							className: "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 outline-none transition hover:text-primary hover:bg-secondary data-[state=open]:bg-secondary data-[state=open]:text-primary",
							children: ["Speciality Tours", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							className: "min-w-56",
							children: SPECIAL_TOURS.map((tour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: tour.to,
									className: "cursor-pointer",
									children: tour.label
								})
							}, tour.to))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cruises",
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary",
							activeProps: { className: "text-primary bg-secondary" },
							children: "Cruises"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
							className: "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 outline-none transition hover:text-primary hover:bg-secondary data-[state=open]:bg-secondary data-[state=open]:text-primary",
							children: ["Ancillary Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							className: "min-w-48",
							children: ANCILLARY.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: a.to,
									className: "cursor-pointer",
									children: a.label
								})
							}, a.to))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-primary hover:bg-secondary",
							activeProps: { className: "text-primary bg-secondary" },
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden xl:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "rounded-full py-3 gradient-accent text-accent-foreground shadow-[var(--shadow-card)] hover:opacity-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Hi UniSetGo, I'd like to plan a custom trip."),
							target: "_blank",
							rel: "noreferrer",
							children: "Plan a Trip"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-background/80 text-foreground xl:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						className: "w-[86vw] max-w-sm overflow-y-auto p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_big_default,
								alt: "UniSetGo",
								width: 150
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setOpen(false),
								"aria-label": "Close",
								className: "grid h-9 w-9 place-items-center rounded-full hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1 px-4 py-6",
							children: [
								NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									onClick: () => setOpen(false),
									className: "rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary",
									activeProps: { className: "text-primary bg-secondary" },
									activeOptions: { exact: item.to === "/" },
									children: item.label
								}, item.to)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSpecialOpen((v) => !v),
									className: "mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary",
									children: ["Special Tours", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition ${specialOpen ? "rotate-180" : ""}` })]
								}),
								specialOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ml-3 flex flex-col gap-1 border-l border-border pl-3",
									children: SPECIAL_TOURS.map((tour) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: tour.to,
										onClick: () => setOpen(false),
										className: "rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary",
										activeProps: { className: "text-primary bg-secondary" },
										children: tour.label
									}, tour.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setAncOpen((v) => !v),
									className: "mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/90 hover:bg-secondary",
									children: ["Ancillary Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition ${ancOpen ? "rotate-180" : ""}` })]
								}),
								ancOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ml-3 flex flex-col gap-1 border-l border-border pl-3",
									children: ANCILLARY.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: a.to,
										onClick: () => setOpen(false),
										className: "rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary",
										activeProps: { className: "text-primary bg-secondary" },
										children: a.label
									}, a.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-4 rounded-full gradient-accent text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: waLink("Hi UniSetGo, I'd like to plan a custom trip."),
										target: "_blank",
										rel: "noreferrer",
										children: "Plan a Trip on WhatsApp"
									})
								})
							]
						})]
					})]
				})
			]
		})
	});
}
var NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;
var EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var PHONE_REGEX = /^[\+]?[0-9\s\-\(\)]{10,20}$/;
var domesticSubRegions = REGIONS.find((r) => r.kind === "domestic")?.subRegions ?? [];
var domesticColumns = [domesticSubRegions.slice(0, Math.ceil(domesticSubRegions.length / 2)), domesticSubRegions.slice(Math.ceil(domesticSubRegions.length / 2))];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 bg-secondary text-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-primary/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-5 pt-6 pb-12 sm:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewsletterForm, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:grid-cols-2 lg:grid-cols-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 lg:col-span-2 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_big_default,
								alt: "UniSetGo",
								width: 150,
								className: "mb-2 -translate-x-3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-sm text-sm text-primary/80 font-medium",
								children: "A travel studio crafting bespoke journeys for groups, corporates, senior citizens, honeymoon couples and families — engineered end to end so you can travel like a guest, not a planner."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: CONTACT.instagram,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "Instagram",
										className: "grid h-10 w-10 place-items-center rounded-full border border-ring hover:bg-ring/20 transition-colors duration-200",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: CONTACT.linkedin,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "LinkedIn",
										className: "grid h-10 w-10 place-items-center rounded-full border border-ring hover:bg-ring/20 transition-colors duration-200",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: CONTACT.linkedin,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "LinkedIn",
										className: "grid h-10 w-10 place-items-center rounded-full border border-ring hover:bg-ring/20 transition-colors duration-200",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent",
						children: "International"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm text-primary/80 font-medium",
						children: REGIONS.filter((r) => r.kind === "international").map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/packages/$region",
							params: { region: r.slug },
							className: "hover:text-accent",
							children: r.name
						}) }, r.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-x-6",
							children: domesticColumns.map((col, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent",
								children: "Domestic"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 text-sm text-primary/80 font-medium",
								children: col.map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/packages/$region",
									params: { region: "domestic" },
									className: "hover:text-accent",
									children: sub.name
								}) }, sub.slug))
							})] }, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent",
							children: "Reach us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-primary/80 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `tel:+${CONTACT.phoneE164}`,
											children: CONTACT.phoneDisplay
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: mailLink("Hello from your website"),
											children: CONTACT.email
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: mailLink("Booking enquiry from your website", "", CONTACT.bookingsEmail),
											children: CONTACT.bookingsEmail
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.address })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Hi UniSetGo!"),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-95",
							children: "Chat on WhatsApp"
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-primary/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-6 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Policies",
						className: "flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-bold text-primary/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy-policy",
								className: "hover:text-accent",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary/20",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/terms-and-conditions",
								className: "hover:text-accent",
								children: "Terms & Conditions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary/20",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cancellation-policy",
								className: "hover:text-accent",
								children: "Cancellation Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary/20",
								children: "•"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/refund-policy",
								className: "hover:text-accent",
								children: "Refund Policy"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col items-center justify-between gap-2 text-xs text-primary/60 font-medium sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" UniSetGo. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made with ❤️ by Akash" })]
					})]
				})
			})
		]
	});
}
function NewsletterForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	function validatePhoneDigits(value) {
		const digits = value.replace(/\D/g, "");
		return digits.length >= 10 && digits.length <= 15;
	}
	function handleSubmit(e) {
		e.preventDefault();
		const nextErrors = {};
		if (!NAME_REGEX.test(name.trim())) nextErrors.name = "Please enter a valid name (2–50 letters).";
		if (!EMAIL_REGEX.test(email.trim())) nextErrors.email = "Please enter a valid email address.";
		if (!PHONE_REGEX.test(phone.trim()) || !validatePhoneDigits(phone.trim())) nextErrors.phone = "Please enter a valid phone number (min 10 digits).";
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length === 0) {
			console.log("Newsletter subscription:", {
				name: name.trim(),
				email: email.trim(),
				phone: phone.trim(),
				subscribedAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			setName("");
			setEmail("");
			setPhone("");
		} else console.log("Newsletter validation errors:", nextErrors);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-2xl bg-white/5 p-6 sm:p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-bold text-primary text-center",
					children: "Claim your free copy of Tourism Guide"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-primary/70 text-center",
					children: "Sign up now to get latest updates on travel places"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4 mt-4",
				noValidate: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter-name",
								className: "mb-1.5 block text-xs font-medium text-primary/80",
								children: "Name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "newsletter-name",
								type: "text",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Your name",
								className: "w-full rounded-lg border border-primary/10 bg-primary/10 px-3.5 py-2.5 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 block text-xs text-accent",
								children: errors.name
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter-email",
								className: "mb-1.5 block text-xs font-medium text-primary/80",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "newsletter-email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@company.com",
								className: "w-full rounded-lg border border-primary/10 bg-primary/10 px-3.5 py-2.5 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 block text-xs text-accent",
								children: errors.email
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "newsletter-phone",
								className: "mb-1.5 block text-xs font-medium text-primary/80",
								children: "Phone Number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "newsletter-phone",
								type: "tel",
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								placeholder: "+91 98765 43210",
								className: "w-full rounded-lg border border-primary/10 bg-primary/10 px-3.5 py-2.5 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
							}),
							errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1.5 block text-xs text-accent",
								children: errors.phone
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-95 ",
					children: "Claim now!"
				})]
			})]
		})
	});
}
/**
* Floating tab pinned to the side of the viewport, shown only at the `xl`
* breakpoint and up — the same breakpoint where SiteHeader swaps its
* hamburger menu for the full desktop nav (see site-header.tsx's
* `xl:flex`/`xl:hidden`), so this never competes with the mobile menu.
*/
function GalleryFloatButton() {
	if (!!useMatchRoute()({
		to: "/gallery",
		fuzzy: false
	})) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/gallery",
		"aria-label": "Open the photo gallery",
		className: "fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-r-full bg-primary py-3 pl-4 pr-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:bg-primary/90 hover:pr-6 xl:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, { className: "h-4 w-4" }), "Gallery"]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-black text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Looks like this route is off the map. Let's get you back on the trail."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary",
						children: "Go home"
					})]
				})
			]
		})
	});
}
function WhatsAppFloatButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink("Hi UniSetGo, I'd like to plan a trip."),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] transition hover:scale-105",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-7 w-7" })]
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.13.11-1.82-.12-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.29.75 1.24 1.62 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" })
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "UniSetGo — Corporate Travel, Curated" },
			{
				name: "description",
				content: "UniSetGo designs bespoke corporate and leisure journeys across the Middle East, Europe, Asia and India. Explore beyond boundaries."
			},
			{
				name: "author",
				content: "UniSetGo"
			},
			{
				property: "og:title",
				content: "UniSetGo — Corporate Travel, Curated"
			},
			{
				property: "og:description",
				content: "Bespoke corporate and leisure travel packages, engineered end to end."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloatButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryFloatButton, {})
		]
	});
}
var $$splitComponentImporter$13 = () => import("./about-y8sKgBW3.mjs");
var Route$14 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About & Services — UniSetGo" },
		{
			name: "description",
			content: "UniSetGo is a corporate travel studio designing bespoke journeys — corporate offsites, MICE, leisure and custom family trips."
		},
		{
			property: "og:title",
			content: "About & Services — UniSetGo"
		},
		{
			property: "og:description",
			content: "A corporate travel studio for bespoke journeys."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./batch-reunions-Xm48ZHUL.mjs");
var Route$13 = createFileRoute("/batch-reunions")({
	head: () => ({
		meta: [
			{ title: "Batch Re-Unions — School & College Reunions | UniSetGo" },
			{
				name: "description",
				content: "Plan unforgettable school and college batch reunions — resorts, flights, itineraries, decor and photography, all handled by UniSetGo."
			},
			{
				property: "og:title",
				content: "Batch Re-Unions — UniSetGo"
			},
			{
				property: "og:description",
				content: "School and college reunions, designed and delivered end to end."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/batch-reunions"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./cancellation-policy-DfDCx1Sp.mjs");
var Route$12 = createFileRoute("/cancellation-policy")({
	head: () => ({ meta: [
		{ title: "Cancellation Policy — UniSetGo" },
		{
			name: "description",
			content: "UniSetGo's cancellation policy — general terms, cost inclusions, cancellation charges by timeline, and our scope of services."
		},
		{
			property: "og:title",
			content: "Cancellation Policy — UniSetGo"
		},
		{
			property: "og:description",
			content: "Cancellation charges, timelines, and terms."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./contact-gOtLeE-z.mjs");
var Route$11 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact UniSetGo — Plan Your Trip" },
		{
			name: "description",
			content: "Reach UniSetGo on WhatsApp or email to plan bespoke corporate and leisure travel."
		},
		{
			property: "og:title",
			content: "Contact UniSetGo — Plan Your Trip"
		},
		{
			property: "og:description",
			content: "WhatsApp us or drop an email — we reply within a business day."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./corporate-conclaves-Bi9U_z4H.mjs");
var Route$10 = createFileRoute("/corporate-conclaves")({
	head: () => ({
		meta: [
			{ title: "Corporate Conclaves & MICE — UniSetGo" },
			{
				name: "description",
				content: "End-to-end MICE, offsites and corporate conclaves — venues, logistics, travel, production and hospitality across India and abroad."
			},
			{
				property: "og:title",
				content: "Corporate Conclaves — UniSetGo"
			},
			{
				property: "og:description",
				content: "Meetings, incentives, conferences and offsites, engineered end to end."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/corporate-conclaves"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./cruises-Cavb8CHr.mjs");
var Route$9 = createFileRoute("/cruises")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./flights-BoJcnZLu.mjs");
var Route$8 = createFileRoute("/flights")({
	head: () => ({
		meta: [
			{ title: "Flight Bookings — First, Business & Economy | UniSetGo" },
			{
				name: "description",
				content: "Book domestic and international flights with UniSetGo — first, business and economy fares with fare-difference alerts and 24×7 support."
			},
			{
				property: "og:title",
				content: "Flight Bookings — UniSetGo"
			},
			{
				property: "og:description",
				content: "First, business and economy flights booked with concierge support."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/flights"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./foreign-travel-card-B0FMaOKo.mjs");
var Route$7 = createFileRoute("/foreign-travel-card")({
	head: () => ({
		meta: [
			{ title: "Foreign Travel Card — Multi-currency Forex Card | UniSetGo" },
			{
				name: "description",
				content: "Load up to 15 currencies on one prepaid forex travel card — zero cross-currency fees, live rates and instant reload from India."
			},
			{
				property: "og:title",
				content: "Foreign Travel Card — UniSetGo"
			},
			{
				property: "og:description",
				content: "Multi-currency prepaid forex cards for international travellers."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/foreign-travel-card"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./hotels-BJ4tiJux.mjs");
var Route$6 = createFileRoute("/hotels")({
	head: () => ({
		meta: [
			{ title: "Hotel Bookings — Luxury & Budget | UniSetGo" },
			{
				name: "description",
				content: "Book hotels worldwide with UniSetGo — from 5-star resorts to smart budget stays, with best-rate guarantees and concierge support."
			},
			{
				property: "og:title",
				content: "Hotel Bookings — UniSetGo"
			},
			{
				property: "og:description",
				content: "Luxury and budget hotels, booked with concierge support."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/hotels"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-policy-CaJQ-gNM.mjs");
var Route$5 = createFileRoute("/privacy-policy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy — UniSetGo" },
		{
			name: "description",
			content: "How UniSetGo collects, uses, shares, and protects your personal information."
		},
		{
			property: "og:title",
			content: "Privacy Policy — UniSetGo"
		},
		{
			property: "og:description",
			content: "How we collect, use, and safeguard your data."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./refund-policy-BPlJN69w.mjs");
var Route$4 = createFileRoute("/refund-policy")({
	head: () => ({ meta: [
		{ title: "Refund Policy — UniSetGo" },
		{
			name: "description",
			content: "How refunds work at UniSetGo — process, rules, and how supplier terms apply."
		},
		{
			property: "og:title",
			content: "Refund Policy — UniSetGo"
		},
		{
			property: "og:description",
			content: "Refunds — process and rules."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var BASE_URL = "";
var Route$3 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/packages",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.6"
			},
			...REGIONS.map((r) => ({
				path: `/packages/${r.slug}`,
				changefreq: "weekly",
				priority: "0.8"
			})),
			...PACKAGES.map((p) => ({
				path: `/packages/${p.region}/${p.slug}`,
				changefreq: "monthly",
				priority: "0.7"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$2 = () => import("./terms-and-conditions-CKNgZc9H.mjs");
var Route$2 = createFileRoute("/terms-and-conditions")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions — UniSetGo" },
		{
			name: "description",
			content: "UniSetGo's general terms and conditions — bookings, air ticket amendments, hotel check-in policies, and liability."
		},
		{
			property: "og:title",
			content: "Terms & Conditions — UniSetGo"
		},
		{
			property: "og:description",
			content: "General terms and conditions for your booking."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./visa-BD-SquEh.mjs");
var Route$1 = createFileRoute("/visa")({
	head: () => ({
		meta: [
			{ title: "Visa Services — UniSetGo" },
			{
				name: "description",
				content: "Tourist, business and transit visas made simple — Schengen, USA, UK, UAE, Canada, Australia and more. Document review, appointments and application filing."
			},
			{
				property: "og:title",
				content: "Visa Services — UniSetGo"
			},
			{
				property: "og:description",
				content: "Tourist, business and transit visas — filed and tracked for you."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/visa"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./packages._region-CneP9XNQ.mjs");
var $$splitNotFoundComponentImporter = () => import("./packages._region-Bg9i3LpG.mjs");
var Route = createFileRoute("/packages/$region")({
	loader: async ({ params }) => {
		const regions = await getRegions();
		const region = regions.find((r) => r.slug === params.region);
		if (!region) throw notFound({ data: { regions } });
		return { region };
	},
	pendingComponent: RegionIndexSkeleton,
	head: ({ params, loaderData }) => {
		const region = loaderData?.region;
		if (!region) return { meta: [{ title: "Region — UniSetGo" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${region.name} Travel Packages — UniSetGo`;
		const desc = `Curated ${region.name} travel packages by UniSetGo. ${region.tagline}. Handpicked itineraries with flights, stays and on-trip support.`;
		const url = `/packages/${params.region}`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					name: "keywords",
					content: `${region.name} travel packages, ${region.name} tours, ${region.name} holidays, UniSetGo`
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:image",
					content: region.image
				},
				{
					property: "og:image:alt",
					content: `${region.name} — UniSetGo`
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: url
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:image",
					content: region.image
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var BatchReunionsRoute = Route$13.update({
	id: "/batch-reunions",
	path: "/batch-reunions",
	getParentRoute: () => Route$15
});
var CancellationPolicyRoute = Route$12.update({
	id: "/cancellation-policy",
	path: "/cancellation-policy",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var CorporateConclavesRoute = Route$10.update({
	id: "/corporate-conclaves",
	path: "/corporate-conclaves",
	getParentRoute: () => Route$15
});
var CruisesRoute = Route$9.update({
	id: "/cruises",
	path: "/cruises",
	getParentRoute: () => Route$15
});
var FlightsRoute = Route$8.update({
	id: "/flights",
	path: "/flights",
	getParentRoute: () => Route$15
});
var ForeignTravelCardRoute = Route$7.update({
	id: "/foreign-travel-card",
	path: "/foreign-travel-card",
	getParentRoute: () => Route$15
});
var GalleryRoute = Route$18.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$15
});
var GolfTourismRoute = Route$19.update({
	id: "/golf-tourism",
	path: "/golf-tourism",
	getParentRoute: () => Route$15
});
var HoneymoonRoute = Route$21.update({
	id: "/honeymoon",
	path: "/honeymoon",
	getParentRoute: () => Route$15
});
var HotelsRoute = Route$6.update({
	id: "/hotels",
	path: "/hotels",
	getParentRoute: () => Route$15
});
var PackagesRoute = Route$22.update({
	id: "/packages",
	path: "/packages",
	getParentRoute: () => Route$15
});
var PrivacyPolicyRoute = Route$5.update({
	id: "/privacy-policy",
	path: "/privacy-policy",
	getParentRoute: () => Route$15
});
var RefundPolicyRoute = Route$4.update({
	id: "/refund-policy",
	path: "/refund-policy",
	getParentRoute: () => Route$15
});
var SeniorCitizensRoute = Route$27.update({
	id: "/senior-citizens",
	path: "/senior-citizens",
	getParentRoute: () => Route$15
});
var SitemapDotxmlRoute = Route$3.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$15
});
var TermsAndConditionsRoute = Route$2.update({
	id: "/terms-and-conditions",
	path: "/terms-and-conditions",
	getParentRoute: () => Route$15
});
var VisaRoute = Route$1.update({
	id: "/visa",
	path: "/visa",
	getParentRoute: () => Route$15
});
var CruisesIndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => CruisesRoute
});
var CruisesSlugRoute = Route$16.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CruisesRoute
});
var PackagesIndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => PackagesRoute
});
var PackagesRegionRoute = Route.update({
	id: "/$region",
	path: "/$region",
	getParentRoute: () => PackagesRoute
});
var ReviewFormIdRoute = Route$25.update({
	id: "/review-form/$id",
	path: "/review-form/$id",
	getParentRoute: () => Route$15
});
var PackagesRegionIndexRoute = Route$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => PackagesRegionRoute
});
var PackagesRegionSlugRoute = Route$23.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PackagesRegionRoute
});
var CruisesRouteChildren = {
	CruisesSlugRoute,
	CruisesIndexRoute
};
var CruisesRouteWithChildren = CruisesRoute._addFileChildren(CruisesRouteChildren);
var PackagesRegionRouteChildren = {
	PackagesRegionSlugRoute,
	PackagesRegionIndexRoute
};
var PackagesRouteChildren = {
	PackagesRegionRoute: PackagesRegionRoute._addFileChildren(PackagesRegionRouteChildren),
	PackagesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BatchReunionsRoute,
	CancellationPolicyRoute,
	ContactRoute,
	CorporateConclavesRoute,
	CruisesRoute: CruisesRouteWithChildren,
	FlightsRoute,
	ForeignTravelCardRoute,
	GalleryRoute,
	GolfTourismRoute,
	HoneymoonRoute,
	HotelsRoute,
	PackagesRoute: PackagesRoute._addFileChildren(PackagesRouteChildren),
	PrivacyPolicyRoute,
	RefundPolicyRoute,
	SeniorCitizensRoute,
	SitemapDotxmlRoute,
	TermsAndConditionsRoute,
	VisaRoute,
	ReviewFormIdRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
