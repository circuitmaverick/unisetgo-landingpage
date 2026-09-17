import { n as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { B as Lock, V as LoaderCircle, c as Upload, it as EyeOff, m as Star, rt as Eye, t as X, xt as Check } from "../_libs/lucide-react.mjs";
import { n as submitReviewForm, r as uploadReviewPhoto, t as Route } from "./review-form._id-Bh5tl8Hu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-form._id-BSujTEoX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var MAX_PHOTOS = 4;
var MAX_PHOTO_MB = 10;
function ReviewFormPage() {
	const { draft } = Route.useLoaderData();
	if (!draft) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-5 py-24 text-center sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-black text-foreground",
			children: "This link isn't valid"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: "Double-check the link we sent you, or reach out and we'll send a fresh one."
		})]
	});
	if (draft.clientFilled) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-5 py-24 text-center sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-black text-foreground",
			children: "You've already shared your feedback"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: "Thank you — we've already received your review. There's nothing more to do here."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewForm, { draft });
}
function ReviewForm({ draft }) {
	const favouriteThingsId = (0, import_react.useId)();
	const improvementsId = (0, import_react.useId)();
	const reviewId = (0, import_react.useId)();
	const whatWeMissedId = (0, import_react.useId)();
	const [name, setName] = (0, import_react.useState)(draft.name ?? "");
	const [email, setEmail] = (0, import_react.useState)(draft.email ?? "");
	const [destination, setDestination] = (0, import_react.useState)(draft.destination ?? "");
	const [tripDuration, setTripDuration] = (0, import_react.useState)(draft.tripDuration != null ? String(draft.tripDuration) : "");
	const [favouriteThings, setFavouriteThings] = (0, import_react.useState)([]);
	const [satisfaction, setSatisfaction] = (0, import_react.useState)(null);
	const [enoughInformation, setEnoughInformation] = (0, import_react.useState)(null);
	const [groundTransportation, setGroundTransportation] = (0, import_react.useState)(null);
	const [staffHelpfulness, setStaffHelpfulness] = (0, import_react.useState)(null);
	const [systemRating, setSystemRating] = (0, import_react.useState)(null);
	const [review, setReview] = (0, import_react.useState)("");
	const [improvements, setImprovements] = (0, import_react.useState)([]);
	const [futureChoice, setFutureChoice] = (0, import_react.useState)(null);
	const [recommendation, setRecommendation] = (0, import_react.useState)(null);
	const [whatWeMissed, setWhatWeMissed] = (0, import_react.useState)("");
	const [photos, setPhotos] = (0, import_react.useState)([]);
	const [rating, setRating] = (0, import_react.useState)(0);
	const [anonymous, setAnonymous] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [photoError, setPhotoError] = (0, import_react.useState)("");
	const photosRef = (0, import_react.useRef)(photos);
	photosRef.current = photos;
	(0, import_react.useEffect)(() => {
		return () => {
			photosRef.current.forEach((p) => URL.revokeObjectURL(p.previewUrl));
		};
	}, []);
	function addPhotos(files) {
		if (!files) return;
		setPhotoError("");
		const incoming = Array.from(files);
		const tooBig = incoming.find((f) => f.size > MAX_PHOTO_MB * 1024 * 1024);
		if (tooBig) {
			setPhotoError(`"${tooBig.name}" is over ${MAX_PHOTO_MB}MB.`);
			return;
		}
		const newEntries = incoming.map((file) => ({
			id: crypto.randomUUID(),
			file,
			public: true,
			previewUrl: URL.createObjectURL(file)
		}));
		setPhotos((prev) => {
			const combined = [...prev, ...newEntries];
			if (combined.length > MAX_PHOTOS) {
				combined.slice(MAX_PHOTOS).forEach((p) => URL.revokeObjectURL(p.previewUrl));
				setPhotoError(`You can upload up to ${MAX_PHOTOS} photos.`);
				return combined.slice(0, MAX_PHOTOS);
			}
			return combined;
		});
	}
	function removePhoto(id) {
		setPhotos((prev) => {
			const target = prev.find((p) => p.id === id);
			if (target) URL.revokeObjectURL(target.previewUrl);
			return prev.filter((p) => p.id !== id);
		});
	}
	function togglePhotoPublic(id) {
		setPhotos((prev) => prev.map((p) => p.id === id ? {
			...p,
			public: !p.public
		} : p));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		const nextErrors = {};
		if (!draft.nameLocked && !name.trim()) nextErrors.name = "Please enter your name.";
		if (!draft.emailLocked && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) nextErrors.email = "Please enter a valid email address.";
		if (!draft.destinationLocked && !destination.trim()) nextErrors.destination = "Please enter your destination.";
		if (!draft.tripDurationLocked && !(Number(tripDuration) > 0)) nextErrors.tripDuration = "Please enter the trip length in days.";
		if (favouriteThings.length === 0) nextErrors.favouriteThings = "Add at least one favourite thing.";
		if (!satisfaction) nextErrors.satisfaction = "Please choose one.";
		if (!enoughInformation) nextErrors.enoughInformation = "Please choose one.";
		if (!groundTransportation) nextErrors.groundTransportation = "Please choose one.";
		if (!staffHelpfulness) nextErrors.staffHelpfulness = "Please choose one.";
		if (!systemRating) nextErrors.systemRating = "Please choose one.";
		if (!review.trim()) nextErrors.review = "Please share your overall feedback.";
		if (futureChoice === null) nextErrors.futureChoice = "Please choose one.";
		if (rating === 0) nextErrors.rating = "Please select a star rating.";
		setErrors(nextErrors);
		setSubmitError("");
		if (Object.keys(nextErrors).length > 0) return;
		setSubmitting(true);
		try {
			const gallery = [];
			for (const photo of photos) {
				const url = await uploadReviewPhoto(photo.file);
				gallery.push({
					url,
					public: photo.public
				});
			}
			const result = await submitReviewForm(draft.id, {
				name: draft.nameLocked ? void 0 : name.trim(),
				email: draft.emailLocked ? void 0 : email.trim(),
				destination: draft.destinationLocked ? void 0 : destination.trim(),
				tripDuration: draft.tripDurationLocked ? void 0 : Number(tripDuration),
				favouriteThings,
				satisfaction,
				enoughInformation,
				groundTransportationServices: groundTransportation,
				staffHelpfulnessProfessionalism: staffHelpfulness,
				systemRating,
				review: review.trim(),
				improvements,
				futureChoice,
				recommendation,
				whatWeMissed: whatWeMissed.trim() || null,
				gallery,
				rating,
				anonymous
			});
			if (result.ok) setSubmitted(true);
			else if (result.reason === "already_submitted") setSubmitError("Looks like this review was already submitted.");
			else if (result.reason === "validation") setSubmitError("Please check the highlighted fields and try again.");
			else setSubmitError("Something went wrong. Please try again.");
		} catch {
			setSubmitError("Something went wrong sending your feedback. Please try again.");
		} finally {
			setSubmitting(false);
		}
	}
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md px-5 py-24 text-center sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-black text-foreground",
			children: "Thank you!"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: "Your feedback has been received. We really appreciate you taking the time to share it."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-16 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
					children: "Share your feedback"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-4xl font-black leading-tight sm:text-5xl",
					children: [
						"Tell us about ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "not-italic text-accent",
							children: "your trip"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-white/80",
					children: "A couple of minutes of your time helps us improve — and helps the next traveller pick the right trip."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-3xl px-5 py-14 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "space-y-8",
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Your name",
							value: name,
							onChange: setName,
							locked: draft.nameLocked,
							error: errors.name,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Email",
							type: "email",
							value: email,
							onChange: setEmail,
							locked: draft.emailLocked,
							error: errors.email,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Destination(s)",
							value: destination,
							onChange: setDestination,
							locked: draft.destinationLocked,
							error: errors.destination,
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextField, {
							label: "Trip duration (in days)",
							type: "number",
							value: tripDuration,
							onChange: setTripDuration,
							locked: draft.tripDurationLocked,
							displayValue: draft.tripDurationLocked && draft.tripDuration != null ? `${draft.tripDuration} day${draft.tripDuration === 1 ? "" : "s"}` : void 0,
							error: errors.tripDuration,
							required: true
						})
					]
				}), draft.relatedPackageLocked && draft.relatedPackageTitle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: ["Package: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: draft.relatedPackageTitle
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						htmlFor: favouriteThingsId,
						required: true,
						children: "What was your favourite thing / things in the trip?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagInput, {
						id: favouriteThingsId,
						values: favouriteThings,
						onChange: setFavouriteThings,
						placeholder: "Type one and press Enter"
					}),
					errors.favouriteThings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.favouriteThings })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleChoice, {
					label: "How satisfied were you with the booking process?",
					required: true,
					value: satisfaction,
					onChange: setSatisfaction,
					options: [
						{
							value: 3,
							label: "Very satisfied"
						},
						{
							value: 2,
							label: "Satisfied"
						},
						{
							value: 1,
							label: "Neutral"
						}
					],
					error: errors.satisfaction
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleChoice, {
					label: "Did you receive enough information about your trip prior to departure?",
					required: true,
					value: enoughInformation,
					onChange: setEnoughInformation,
					options: [
						{
							value: 3,
							label: "Yes"
						},
						{
							value: 2,
							label: "Somewhat"
						},
						{
							value: 1,
							label: "No"
						}
					],
					error: errors.enoughInformation
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleChoice, {
					label: "How was the experience with the ground transportation services? Punctuality and more?",
					required: true,
					value: groundTransportation,
					onChange: setGroundTransportation,
					options: [
						{
							value: 3,
							label: "Excellent"
						},
						{
							value: 2,
							label: "Good"
						},
						{
							value: 1,
							label: "Can Improve"
						}
					],
					error: errors.groundTransportation
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleChoice, {
					label: "How would you rate the ground staff's professionalism and helpfulness — especially our guides?",
					required: true,
					value: staffHelpfulness,
					onChange: setStaffHelpfulness,
					options: [
						{
							value: 3,
							label: "Excellent"
						},
						{
							value: 2,
							label: "Good"
						},
						{
							value: 1,
							label: "Neutral"
						}
					],
					error: errors.staffHelpfulness
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleChoice, {
					label: "How good do you feel was the system as a whole to support your tour — includes backend team?",
					required: true,
					value: systemRating,
					onChange: setSystemRating,
					options: [
						{
							value: 3,
							label: "Excellent"
						},
						{
							value: 2,
							label: "Good"
						},
						{
							value: 1,
							label: "Neutral"
						}
					],
					error: errors.systemRating
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						htmlFor: reviewId,
						required: true,
						children: "Overall experience feedback"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: reviewId,
						value: review,
						onChange: (e) => setReview(e.target.value),
						rows: 5,
						placeholder: "Tell us about your overall experience...",
						className: inputClass
					}),
					errors.review && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.review })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: improvementsId,
					children: "Any points for improvements"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagInput, {
					id: improvementsId,
					values: improvements,
					onChange: setImprovements,
					placeholder: "Type one and press Enter"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						required: true,
						children: "Will UniSetGo be your choice in future also?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YesNoButton, {
							label: "Yes",
							active: futureChoice === true,
							onClick: () => setFutureChoice(true)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YesNoButton, {
							label: "No",
							active: futureChoice === false,
							onClick: () => setFutureChoice(false)
						})]
					}),
					errors.futureChoice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.futureChoice })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "How likely are you to recommend us?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearScale, {
					value: recommendation,
					onChange: setRecommendation
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
					htmlFor: whatWeMissedId,
					children: "Anything else we missed — and you'd like to let us know"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: whatWeMissedId,
					value: whatWeMissed,
					onChange: (e) => setWhatWeMissed(e.target.value),
					rows: 3,
					className: inputClass
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Share us some memories to cherish — your best shots" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-xs text-muted-foreground",
						children: [
							"Upload up to ",
							MAX_PHOTOS,
							" photos, max ",
							MAX_PHOTO_MB,
							"MB per file. Tap a photo to choose whether it's shown on our public gallery."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoPicker, {
						photos,
						onAdd: addPhotos,
						onRemove: removePhoto,
						onTogglePublic: togglePhotoPublic
					}),
					photoError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: photoError })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						required: true,
						children: "Overall rating"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarRating, {
						value: rating,
						onChange: setRating
					}),
					errors.rating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: errors.rating })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						checked: anonymous,
						onCheckedChange: (v) => setAnonymous(v === true),
						className: "mt-0.5"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-foreground",
						children: "Show my review anonymously (your name won't be shown publicly)"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: submitting,
					className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60",
					children: [submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), submitting ? "Submitting..." : "Submit feedback"]
				}),
				submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: submitError })
			]
		})
	})] });
}
var inputClass = "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
function Card({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8",
		children
	});
}
function FieldLabel({ children, required, htmlFor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor,
		className: "mb-1.5 block text-sm font-bold text-foreground",
		children: [
			children,
			" ",
			required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-destructive",
				children: "*"
			})
		]
	});
}
function FieldError({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1.5 text-xs text-destructive",
		children
	});
}
function TextField({ label, value, onChange, locked, displayValue, error, required, type = "text" }) {
	const id = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			htmlFor: id,
			required,
			children: label
		}),
		locked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			id,
			className: "flex items-center gap-2 rounded-xl border border-dashed border-border bg-muted px-4 py-3 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 shrink-0" }), displayValue ?? value]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: inputClass
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
	] });
}
function TagInput({ id, values, onChange, placeholder }) {
	const [draft, setDraft] = (0, import_react.useState)("");
	function commit() {
		const trimmed = draft.trim();
		if (trimmed && !values.includes(trimmed)) onChange([...values, trimmed]);
		setDraft("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			value: draft,
			onChange: (e) => setDraft(e.target.value),
			onKeyDown: (e) => {
				if (e.key === "Enter") {
					e.preventDefault();
					commit();
				}
			},
			placeholder,
			className: inputClass
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: commit,
			className: "shrink-0 rounded-xl bg-secondary px-4 text-sm font-semibold text-foreground hover:bg-secondary/70",
			children: "Add"
		})]
	}), values.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 flex flex-wrap gap-2",
		children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground",
			children: [v, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(values.filter((_, j) => j !== i)),
				"aria-label": `Remove ${v}`,
				className: "text-muted-foreground hover:text-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
			})]
		}, i))
	})] });
}
function ScaleChoice({ label, value, onChange, options, error, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			required,
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-2",
			children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(o.value),
				className: `rounded-full border px-4 py-2 text-sm font-semibold transition ${value === o.value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary"}`,
				children: o.label
			}, o.value))
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldError, { children: error })
	] });
}
function YesNoButton({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `rounded-full border px-6 py-2 text-sm font-semibold transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary"}`,
		children: label
	});
}
function LinearScale({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex items-center gap-2 overflow-x-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-xs text-muted-foreground",
				children: "Not Likely"
			}),
			[
				1,
				2,
				3,
				4,
				5
			].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(value === n ? null : n),
				className: `grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-semibold transition ${value === n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary"}`,
				children: n
			}, n)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 text-xs text-muted-foreground",
				children: "Definitely"
			})
		]
	});
}
function StarRating({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 flex gap-1",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(n),
			"aria-label": `${n} star${n === 1 ? "" : "s"}`,
			className: "text-accent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-8 w-8 ${n <= value ? "fill-current" : "opacity-30"}` })
		}, n))
	});
}
function PhotoPicker({ photos, onAdd, onRemove, onTogglePublic }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-6 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }),
			"Choose photos",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				accept: "image/*",
				multiple: true,
				className: "hidden",
				onChange: (e) => {
					onAdd(e.target.files);
					e.target.value = "";
				}
			})
		]
	}), photos.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4",
		children: photos.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square overflow-hidden rounded-xl bg-secondary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.previewUrl,
					alt: p.file.name,
					className: "h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onRemove(p.id),
					"aria-label": `Remove ${p.file.name}`,
					className: "absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/60 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onTogglePublic(p.id),
					"aria-label": p.public ? `Hide ${p.file.name} from the public gallery` : `Show ${p.file.name} on the public gallery`,
					className: `absolute inset-x-1 bottom-1 flex items-center justify-center gap-1 rounded-full py-1 text-[0.65rem] font-semibold ${p.public ? "bg-primary text-primary-foreground" : "bg-black/60 text-white"}`,
					children: [p.public ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3 w-3" }), p.public ? "Public" : "Private"]
				})
			]
		}, p.id))
	})] });
}
//#endregion
export { ReviewFormPage as component };
