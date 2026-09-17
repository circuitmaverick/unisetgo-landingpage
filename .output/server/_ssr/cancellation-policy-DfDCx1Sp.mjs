import { c as waLink } from "./contact-_gGvfOe5.mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Button } from "./button-BkEeRci-.mjs";
import { Ct as Car, E as RefreshCcw, S as ShieldAlert, Y as House, gt as CircleCheck, ht as CircleX, u as TriangleAlert } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cancellation-policy-DfDCx1Sp.js
var import_jsx_runtime = require_jsx_runtime();
var GENERAL_POINTS = [
	"No reservations are held when we give a quote till booking has not proceeded.",
	"The rooms & rates are subject to availability during booking/confirmation.",
	"For queries regarding cancellations and refunds, please refer to our Cancellation Policy.",
	"Disputes, if any, shall be subject to the exclusive jurisdiction of the courts in SAS Nagar.",
	"Before booking, please check the hotel inclusions.",
	"About Hotel amenities, please refer to their websites."
];
var COST_INCLUDES = [
	"Accommodation on a quoted basis in above mentioned or similar category hotels.",
	"Complimentary use of the hotel or any recreation facility per the hotel's terms & conditions (subject to availability).",
	"Land transportation (if chosen) from pick up to drop — Station to Station or Airport to Airport, or as per round itinerary trip and local sightseeing as per itinerary, by individual vehicle as per family.",
	"Vehicle cost includes all fuel charges, driver allowance, border and toll tax, and parking and entry charges applicable on the day of quotation."
];
var COST_EXCLUDES = [
	"Any Airfare / Train fare which is not included in the package cost. Airfare is included under AIR PACKAGE TOUR only.",
	"Any expenses of a personal nature like tips, phone calls, internet, games, sauna, steam, Jacuzzi, laundry, extra vehicle hire, bar, room heaters, discotheque or pony/horse rides, boat rides, safaris, rafting charges, skiing/skating, and cable car/ropeway rides, etc.",
	"Extra food or beverages ordered or taken in the hotel restaurant or room, except if the client has opted for a buffet / fixed menu meal plan.",
	"The vehicle provided for sightseeing / commuting will be allowed up to parking points / last possible points (subject to road & govt. conditions)."
];
var CANCELLATION_TIERS = [
	{
		window: "Date of booking – 30 days before travel",
		season: "25%",
		offSeason: "15%"
	},
	{
		window: "30 – 15 days before travel",
		season: "50%",
		offSeason: "25%"
	},
	{
		window: "15 – 7 days before travel",
		season: "75%",
		offSeason: "50%"
	},
	{
		window: "0 – 7 days before travel",
		season: "100% — No refund",
		offSeason: "100% — No refund"
	}
];
var CANCELLATION_NOTES = [
	"Cancellation policy is subject to change — it depends on the hotel's policy.",
	"In peak season (e.g. long weekends, festival season, summer vacation), most hotels / backend service providers charge 100% cancellation.",
	"Cancellation requests must be submitted in writing via email or through our official communication channels, including the traveler's name, booking reference number, and reason for cancellation.",
	"Specific cancellation charges may vary depending on the type of travel package, accommodation, transportation, or additional services booked.",
	"Refunds, if applicable, will be processed within 20 business days from the date of receiving the cancellation request.",
	"The refund amount will be calculated after deducting the applicable cancellation charges as per our policy.",
	"Refunds will be issued through the original payment method used during the booking process.",
	"Non-refundable bookings (special promotions, discounted rates, or peak season bookings) will be clearly stated at the time of booking, and the full booking amount will be charged in the event of cancellation.",
	"We highly recommend all travelers have comprehensive travel insurance to cover unforeseen circumstances — we can facilitate this through our tie-ups."
];
var SCOPE_GROUPS = [
	{
		icon: House,
		title: "Stays & rooms",
		points: [
			"There will be no refund for unused nights or early check-out (in case of medical conditions, it entirely depends on hotel policy).",
			"Check-in and check-out times at hotels would be as per hotel policies. Early check-in or late check-out is subject to availability and may be chargeable by the hotel.",
			"Complimentary room category upgrades will depend on the availability of rooms and as per hotels' terms & conditions only.",
			"Room heater / AC available in the hotel with an extra cost borne by the guest directly, depending on hotel policy and terms.",
			"If the booking is for more than one room in the same or different resorts/destinations, rooms may differ in floor, location, size, amenities, or facilities — even within the same room category (depending on hotel structure).",
			"Comparing the rating of hotels/resorts in a hill station or tourist spot area with business city or business class hotels is not recommended, since we have our own sourcing.",
			"As per government regulations, a valid photo ID must be carried by anyone above 18 staying at the hotel. Accepted proofs: Driver's License, Voter's Card, Passport, and Ration Card. Guests will only be allowed to check in with a valid ID — PAN Cards will not be accepted."
		]
	},
	{
		icon: RefreshCcw,
		title: "Itinerary changes",
		points: ["We reserve the right to modify the itinerary at any point due to reasons including but not limited to Force Majeure events, strikes, fairs, festivals, weather conditions, traffic problems, overbooking of hotels/flights, cancellation/rerouting of flights, closure of / entry restrictions at a place of visit, etc. While we will do our best to make suitable alternate arrangements, we will not be held liable for any refunds/compensation claims arising from this."]
	},
	{
		icon: Car,
		title: "Vehicles & transport",
		points: [
			"Driver and vehicle details will be forwarded to the contact mobile number given at the time of booking, sent 12 hrs before your first arrival. Guests must refrain from unnecessary follow-up on vehicle and driver details.",
			"The details forwarded to you can be replaced or changed at the last moment for any technical reason.",
			"All guests are requested to satisfy themselves with the vehicle or driver. If you find any significant issue — carrier, A/C, mechanical issue, seating capacity, music system, or other — please inform our operations department so we can try to facilitate a better experience.",
			"Vehicles are provided according to the number of paying passengers, unless a child is specifically mentioned in the travel schedule.",
			"Ideal timings for vehicle use are from 7:00 AM to 10:00 PM approx., for all transfers and the mentioned sightseeing only (flexible in an emergency).",
			"AC will operate on hills at an additional cost.",
			"Any hike in fuel cost & changes in tax structure, etc., after the date of quotation — and even after booking — will be charged extra on the actual amount of change, and borne by guests either well in advance or on a direct payment basis.",
			"Please clarify the total number of passengers, including infants and children, at the time of booking — the vehicle will be scheduled as per that information only. Last-moment replacement of vehicle will not be possible."
		]
	},
	{
		icon: ShieldAlert,
		title: "Liability",
		points: ["If you cause any injury or damage affecting the service provider, you may be liable to the service provider for the same as appropriate. We shall charge you separately if the service provider recovers any monies from us for such injury or damages.", "We cannot be held responsible/liable for any delay, deficiency, injury, death, loss or damage, etc., occasioned due to the act or default of such service providers, their employees or agents."]
	}
];
function CancellationPolicyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90",
					children: "Policies"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl",
					children: ["Cancellation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "not-italic text-accent",
						children: "Policy"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-white/80",
					children: "We understand that plans can change unexpectedly. Our cancellation policy is designed to offer flexibility and transparency to our valued customers."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-5 py-20 sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "General"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-2xl font-black text-foreground sm:text-3xl",
					children: "Before you book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: GENERAL_POINTS.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
					}, point))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "rounded-full gradient-accent text-accent-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Hi UniSetGo, I have a question before booking."),
							target: "_blank",
							rel: "noreferrer",
							children: "Enquire now"
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Package cost"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-black text-foreground sm:text-3xl",
						children: "What's included, what's not"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold",
									children: "Cost includes"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: COST_INCLUDES.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2.5 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
								}, point))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-5 w-5 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold",
									children: "Cost does not include"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: COST_EXCLUDES.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2.5 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
								}, point))
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Charges"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-black text-foreground sm:text-3xl",
						children: "Hotel / land cancellation policy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full border-collapse text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "bg-primary text-primary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Time before travel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Season"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-4 font-semibold",
										children: "Off-season"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "bg-card",
								children: CANCELLATION_TIERS.map((tier, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: i % 2 === 1 ? "bg-muted/40" : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 text-foreground",
											children: tier.window
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 font-semibold text-accent",
											children: tier.season
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-4 font-semibold text-muted-foreground",
											children: tier.offSeason
										})
									]
								}, tier.window))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: CANCELLATION_NOTES.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: note })]
						}, note))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Please contact our sales/reservation executive for more information about cancellation policies."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Please read"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-black text-foreground sm:text-3xl",
						children: "Our scope of services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "We are holiday organisers only. We carefully select the services provided to you, but we do not own, operate or control any airline, shipping company, coach or coach company, hotel, transport, restaurant, kitchen caravan, or any other facility or provider involved in your tour. Please note the following:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6",
						children: SCOPE_GROUPS.map(({ icon: Icon, title, points }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-foreground",
									children: title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2.5 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
								}, point))
							})]
						}, title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-6 w-6 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "The above policy is subject to change and may vary for specific travel packages or services. We advise all customers to carefully review the cancellation policy provided during the booking process and contact our customer support team for any clarification or assistance regarding cancellations."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-semibold text-foreground",
						children: "Need help with an existing booking?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Our team can talk you through your specific cancellation terms."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "rounded-full gradient-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink("Hi UniSetGo, I have a question about a cancellation."),
								target: "_blank",
								rel: "noreferrer",
								children: "Chat with us"
							})
						})
					})
				]
			})
		]
	})] });
}
//#endregion
export { CancellationPolicyPage as component };
