import { n as __toESM } from "../_runtime.mjs";
import { a as mailLink, c as waLink, i as PHONE_REGEX, n as EMAIL_REGEX, o as submitContactEnquiry, r as NAME_REGEX, s as validatePhoneDigits, t as CONTACT } from "./contact-_gGvfOe5.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { A as Phone, F as MessageCircle, R as MapPin, T as Search, _t as ChevronsUpDown, w as Send, xt as Check, z as Mail } from "../_libs/lucide-react.mjs";
import { t as PACKAGES } from "./packages-gHrvwJaJ.mjs";
import { i as PopoverTrigger$1, n as PopoverContent$1, r as PopoverPortal, t as Popover$1 } from "../_libs/radix-ui__react-popover.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-gOtLeE-z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Popover = Popover$1;
var PopoverTrigger = PopoverTrigger$1;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent$1, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = PopoverContent$1.displayName;
var Command$1 = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
	ref,
	className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className),
	...props
}));
Command$1.displayName = _e.displayName;
var CommandInput = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "flex items-center border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
		ref,
		className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	})]
}));
CommandInput.displayName = _e.Input.displayName;
var CommandList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
	ref,
	className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
	...props
}));
CommandList.displayName = _e.List.displayName;
var CommandEmpty = import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
	ref,
	className: "py-6 text-center text-sm",
	...props
}));
CommandEmpty.displayName = _e.Empty.displayName;
var CommandGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
	ref,
	className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className),
	...props
}));
CommandGroup.displayName = _e.Group.displayName;
var CommandSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
	ref,
	className: cn("-mx-1 h-px bg-border", className),
	...props
}));
CommandSeparator.displayName = _e.Separator.displayName;
var CommandItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
	ref,
	className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", className),
	...props
}));
CommandItem.displayName = _e.Item.displayName;
var CommandShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
		...props
	});
};
CommandShortcut.displayName = "CommandShortcut";
function ContactPage() {
	const enquiry = "Hi UniSetGo, I'd like to plan a trip. My rough dates and destinations are:";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black leading-tight sm:text-6xl",
					children: [
						"Let's design your",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-accent",
							children: "next trip"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-white/80",
					children: "Tell us where you're headed. We reply on WhatsApp in minutes and send a first draft plan within 24 hours."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-5 py-16 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: waLink(enquiry),
					target: "_blank",
					rel: "noreferrer",
					className: "group relative overflow-hidden rounded-3xl gradient-accent p-8 text-accent-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-8 w-8" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl font-black",
							children: "Chat on WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm opacity-90",
							children: "Fastest way to reach us. Real people, real replies."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-bold underline-offset-4 group-hover:underline",
							children: "Open WhatsApp →"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: mailLink("Enquiry from UniSetGo website", enquiry),
					className: "group relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-8 w-8 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl font-black",
							children: "Email us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/80",
							children: "For detailed enquiries, group trips or RFPs."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-bold text-accent underline-offset-4 group-hover:underline",
							children: "Open email →"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: Phone,
						label: "Phone",
						value: CONTACT.phoneDisplay,
						href: `tel:+${CONTACT.phoneE164}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: Mail,
						label: "General enquiries",
						value: CONTACT.email,
						href: `mailto:${CONTACT.email}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: Mail,
						label: "Bookings",
						value: CONTACT.bookingsEmail,
						href: `mailto:${CONTACT.bookingsEmail}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
						icon: MapPin,
						label: "Office",
						value: CONTACT.address
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-black text-foreground sm:text-3xl",
						children: "Send us a message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Share your travel plans and we'll get back to you with a draft itinerary within 24 hours."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
			})
		]
	})] });
}
function Info({ icon: Icon, label, value, href }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[0.65rem] uppercase tracking-widest text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 truncate text-sm font-semibold text-foreground",
				children: value
			})]
		})]
	});
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: "hover:opacity-80",
		children: content
	}) : content;
}
function ContactForm() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [packageSlug, setPackageSlug] = (0, import_react.useState)("");
	const [packageOpen, setPackageOpen] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const selectedPackage = PACKAGES.find((pkg) => pkg.slug === packageSlug);
	async function handleSubmit(e) {
		e.preventDefault();
		const nextErrors = {};
		if (!NAME_REGEX.test(name.trim())) nextErrors.name = "Please enter a valid name (2–50 letters).";
		if (!EMAIL_REGEX.test(email.trim())) nextErrors.email = "Please enter a valid email address.";
		if (!PHONE_REGEX.test(phone.trim()) || !validatePhoneDigits(phone.trim())) nextErrors.phone = "Please enter a valid phone number (min 10 digits).";
		if (!message.trim() || message.trim().length < 10) nextErrors.message = "Please enter a message with at least 10 characters.";
		else if (message.trim().length > 1e3) nextErrors.message = "Message must be less than 1000 characters.";
		setErrors(nextErrors);
		setSubmitError("");
		if (Object.keys(nextErrors).length === 0) {
			const payload = {
				name: name.trim(),
				phone: phone.trim(),
				email: email.trim(),
				message: message.trim(),
				...packageSlug ? { packageSlug } : {}
			};
			setSubmitting(true);
			try {
				await submitContactEnquiry(payload);
				setName("");
				setPhone("");
				setEmail("");
				setMessage("");
				setPackageSlug("");
				setSubmitted(true);
				setTimeout(() => setSubmitted(false), 4e3);
			} catch {
				setSubmitError("Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.");
			} finally {
				setSubmitting(false);
			}
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "space-y-5",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "contact-name",
						className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Name"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "contact-name",
						type: "text",
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "Your full name",
						className: "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					}),
					errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1.5 block text-xs text-destructive",
						children: errors.name
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "contact-phone",
						className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Phone Number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "contact-phone",
						type: "tel",
						value: phone,
						onChange: (e) => setPhone(e.target.value),
						placeholder: "+91 98765 43210",
						className: "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					}),
					errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1.5 block text-xs text-destructive",
						children: errors.phone
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "contact-email",
					className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "contact-email",
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "you@company.com",
					className: "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				}),
				errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 block text-xs text-destructive",
					children: errors.email
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: "contact-package",
				className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
				children: [
					"Interested Package",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-normal text-muted-foreground/70",
						children: "(optional)"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
				open: packageOpen,
				onOpenChange: setPackageOpen,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						id: "contact-package",
						type: "button",
						role: "combobox",
						"aria-expanded": packageOpen,
						className: "flex w-full items-center justify-between rounded-xl border border-border bg-secondary px-4 py-3 text-left text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("truncate", !selectedPackage && "text-muted-foreground"),
							children: selectedPackage ? selectedPackage.title : "Search for a package..."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "h-4 w-4 shrink-0 opacity-50" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
					align: "start",
					className: "w-(--radix-popover-trigger-width) p-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Command$1, {
						filter: (value, search) => value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandInput, { placeholder: "Type a package name..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandEmpty, { children: "No package found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: PACKAGES.map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
							value: pkg.title,
							onSelect: () => {
								setPackageSlug(pkg.slug === packageSlug ? "" : pkg.slug);
								setPackageOpen(false);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mr-2 h-4 w-4", packageSlug === pkg.slug ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: pkg.title
							})]
						}, pkg.slug)) })] })]
					})
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "contact-message",
					className: "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground",
					children: "Message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "contact-message",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "Tell us about your travel plans, dates, destinations and group size...",
					rows: 5,
					className: "w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
				}),
				errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 block text-xs text-destructive",
					children: errors.message
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: submitting,
				className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), submitting ? "Sending..." : "Send Enquiry"]
			}),
			submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-green-600",
				children: "Thanks — your enquiry has been logged. We'll be in touch shortly."
			}),
			submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-destructive",
				children: submitError
			})
		]
	});
}
//#endregion
export { ContactPage as component };
