import { n as __toESM } from "../_runtime.mjs";
import { i as PHONE_REGEX, n as EMAIL_REGEX, o as submitContactEnquiry, r as NAME_REGEX, s as validatePhoneDigits } from "./contact-_gGvfOe5.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { m as Star, w as Send } from "../_libs/lucide-react.mjs";
import { n as DialogContent, r as DialogTitle, t as Dialog } from "./dialog-Br4tP9GX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/package-reviews-CfkIIssU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
var labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";
/**
* Same validation and `messages` insert as the contact page's form, minus
* the package picker — the related package is always this page's own slug.
*/
function PackageEnquiryForm({ packageSlug, idPrefix }) {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
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
			setSubmitting(true);
			try {
				await submitContactEnquiry({
					name: name.trim(),
					phone: phone.trim(),
					email: email.trim(),
					message: message.trim(),
					packageSlug
				});
				setName("");
				setPhone("");
				setEmail("");
				setMessage("");
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
		className: "space-y-4",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-name`,
					className: labelClass,
					children: "Name"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${idPrefix}-name`,
					type: "text",
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "Your full name",
					className: inputClass
				}),
				errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 block text-xs text-destructive",
					children: errors.name
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-email`,
					className: labelClass,
					children: "Email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${idPrefix}-email`,
					type: "email",
					value: email,
					onChange: (e) => setEmail(e.target.value),
					placeholder: "you@company.com",
					className: inputClass
				}),
				errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 block text-xs text-destructive",
					children: errors.email
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-phone`,
					className: labelClass,
					children: "Contact Number"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: `${idPrefix}-phone`,
					type: "tel",
					value: phone,
					onChange: (e) => setPhone(e.target.value),
					placeholder: "+91 98765 43210",
					className: inputClass
				}),
				errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 block text-xs text-destructive",
					children: errors.phone
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: `${idPrefix}-message`,
					className: labelClass,
					children: "Message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: `${idPrefix}-message`,
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "Tell us your dates, group size and any questions about this trip...",
					rows: 4,
					className: `${inputClass} resize-none`
				}),
				errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1.5 block text-xs text-destructive",
					children: errors.message
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				disabled: submitting,
				className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60",
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
var PREVIEW_COUNT = 3;
function StarRow({ rating, size = "h-4 w-4" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex text-accent",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `${size} ${i < Math.round(rating) ? "fill-current" : "opacity-30"}` }, i))
	});
}
function PackageReviewsSection({ title, rating, reviewCount, reviews }) {
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const preview = reviews.slice(0, PREVIEW_COUNT);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-bold text-primary",
				children: "Reviews"
			}),
			reviewCount === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "No reviews yet for this package."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRow, { rating }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-foreground",
							children: rating.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [
								"(",
								reviewCount,
								" review",
								reviewCount === 1 ? "" : "s",
								")"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: preview.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-border pt-3 first:border-t-0 first:pt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold text-foreground",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRow, {
								rating: r.rating,
								size: "h-3.5 w-3.5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-xs text-muted-foreground",
							children: r.review
						})]
					}, r.id))
				}),
				reviewCount > PREVIEW_COUNT && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setDialogOpen(true),
					className: "mt-4 w-full rounded-full border border-border py-2 text-sm font-semibold text-primary transition hover:bg-secondary",
					children: [
						"View all ",
						reviewCount,
						" reviews"
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				title,
				rating,
				reviewCount,
				reviews
			})
		]
	});
}
function ReviewsDialog({ open, onOpenChange, title, rating, reviewCount, reviews }) {
	const [sort, setSort] = (0, import_react.useState)("best");
	const distribution = (0, import_react.useMemo)(() => {
		const counts = [
			0,
			0,
			0,
			0,
			0
		];
		for (const r of reviews) {
			const idx = Math.round(r.rating) - 1;
			if (idx >= 0 && idx <= 4) counts[idx] += 1;
		}
		return counts;
	}, [reviews]);
	const sorted = (0, import_react.useMemo)(() => {
		const copy = [...reviews];
		copy.sort((a, b) => sort === "best" ? b.rating - a.rating : a.rating - b.rating);
		return copy;
	}, [reviews, sort]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[85vh] max-w-2xl gap-0 overflow-hidden p-0 sm:rounded-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex max-h-[85vh] flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 border-b border-border p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
							className: "text-xl font-black text-foreground",
							children: ["Reviews for ", title]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRow, { rating }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg font-black text-foreground",
									children: rating.toFixed(1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: [
										"(",
										reviewCount,
										" review",
										reviewCount === 1 ? "" : "s",
										")"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 space-y-1.5",
							children: [
								5,
								4,
								3,
								2,
								1
							].map((star) => {
								const count = distribution[star - 1];
								const pct = reviewCount ? count / reviewCount * 100 : 0;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "w-8 shrink-0 text-muted-foreground",
											children: [star, "★"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-2 flex-1 overflow-hidden rounded-full bg-secondary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full bg-accent",
												style: { width: `${pct}%` }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 shrink-0 text-right text-muted-foreground",
											children: count
										})
									]
								}, star);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "review-sort",
								className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
								children: "Sort"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "review-sort",
								value: sort,
								onChange: (e) => setSort(e.target.value),
								className: "h-9 rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "best",
									children: "Highest rated first"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "worst",
									children: "Lowest rated first"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-5",
						children: sorted.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-b border-border pb-5 last:border-b-0 last:pb-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-foreground",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRow, {
										rating: r.rating,
										size: "h-3.5 w-3.5"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 whitespace-pre-line text-sm text-muted-foreground",
									children: r.review
								}),
								r.images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: r.images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: src,
										target: "_blank",
										rel: "noreferrer",
										className: "block h-16 w-16 overflow-hidden rounded-lg bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src,
											alt: `Photo ${i + 1} from ${r.name}'s review`,
											className: "h-full w-full object-cover",
											loading: "lazy"
										})
									}, src + i))
								})
							]
						}, r.id))
					})
				})]
			})
		})
	});
}
//#endregion
export { PackageReviewsSection as n, PackageEnquiryForm as t };
