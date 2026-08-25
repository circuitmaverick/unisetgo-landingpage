import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  Ban,
  Banknote,
  Car,
  CheckCircle2,
  Home,
  RefreshCcw,
  ShieldAlert,
  Wallet,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy — UniSetGo" },
      {
        name: "description",
        content:
          "UniSetGo's cancellation policy — general terms, cost inclusions, cancellation charges by timeline, and our scope of services.",
      },
      { property: "og:title", content: "Cancellation Policy — UniSetGo" },
      {
        property: "og:description",
        content: "Cancellation charges, timelines, and terms.",
      },
    ],
  }),
  component: CancellationPolicyPage,
});

const GENERAL_POINTS = [
  "No reservations are held when we give a quote till booking has not proceeded.",
  "The rooms & rates are subject to availability during booking/confirmation.",
  "For queries regarding cancellations and refunds, please refer to our Cancellation Policy.",
  "Disputes, if any, shall be subject to the exclusive jurisdiction of the courts in SAS Nagar.",
  "Before booking, please check the hotel inclusions.",
  "About Hotel amenities, please refer to their websites.",
];

const COST_INCLUDES = [
  "Accommodation on a quoted basis in above mentioned or similar category hotels.",
  "Complimentary use of the hotel or any recreation facility per the hotel's terms & conditions (subject to availability).",
  "Land transportation (if chosen) from pick up to drop — Station to Station or Airport to Airport, or as per round itinerary trip and local sightseeing as per itinerary, by individual vehicle as per family.",
  "Vehicle cost includes all fuel charges, driver allowance, border and toll tax, and parking and entry charges applicable on the day of quotation.",
];

const COST_EXCLUDES = [
  "Any Airfare / Train fare which is not included in the package cost. Airfare is included under AIR PACKAGE TOUR only.",
  "Any expenses of a personal nature like tips, phone calls, internet, games, sauna, steam, Jacuzzi, laundry, extra vehicle hire, bar, room heaters, discotheque or pony/horse rides, boat rides, safaris, rafting charges, skiing/skating, and cable car/ropeway rides, etc.",
  "Extra food or beverages ordered or taken in the hotel restaurant or room, except if the client has opted for a buffet / fixed menu meal plan.",
  "The vehicle provided for sightseeing / commuting will be allowed up to parking points / last possible points (subject to road & govt. conditions).",
];

const CANCELLATION_TIERS = [
  { window: "Date of booking – 30 days before travel", season: "25%", offSeason: "15%" },
  { window: "30 – 15 days before travel", season: "50%", offSeason: "25%" },
  { window: "15 – 7 days before travel", season: "75%", offSeason: "50%" },
  { window: "0 – 7 days before travel", season: "100% — No refund", offSeason: "100% — No refund" },
];

const CANCELLATION_NOTES = [
  "Cancellation policy is subject to change — it depends on the hotel's policy.",
  "In peak season (e.g. long weekends, festival season, summer vacation), most hotels / backend service providers charge 100% cancellation.",
  "Cancellation requests must be submitted in writing via email or through our official communication channels, including the traveler's name, booking reference number, and reason for cancellation.",
  "Specific cancellation charges may vary depending on the type of travel package, accommodation, transportation, or additional services booked.",
  "Refunds, if applicable, will be processed within 20 business days from the date of receiving the cancellation request.",
  "The refund amount will be calculated after deducting the applicable cancellation charges as per our policy.",
  "Refunds will be issued through the original payment method used during the booking process.",
  "Non-refundable bookings (special promotions, discounted rates, or peak season bookings) will be clearly stated at the time of booking, and the full booking amount will be charged in the event of cancellation.",
  "We highly recommend all travelers have comprehensive travel insurance to cover unforeseen circumstances — we can facilitate this through our tie-ups.",
];

const SCOPE_GROUPS = [
  {
    icon: Home,
    title: "Stays & rooms",
    points: [
      "There will be no refund for unused nights or early check-out (in case of medical conditions, it entirely depends on hotel policy).",
      "Check-in and check-out times at hotels would be as per hotel policies. Early check-in or late check-out is subject to availability and may be chargeable by the hotel.",
      "Complimentary room category upgrades will depend on the availability of rooms and as per hotels' terms & conditions only.",
      "Room heater / AC available in the hotel with an extra cost borne by the guest directly, depending on hotel policy and terms.",
      "If the booking is for more than one room in the same or different resorts/destinations, rooms may differ in floor, location, size, amenities, or facilities — even within the same room category (depending on hotel structure).",
      "Comparing the rating of hotels/resorts in a hill station or tourist spot area with business city or business class hotels is not recommended, since we have our own sourcing.",
      "As per government regulations, a valid photo ID must be carried by anyone above 18 staying at the hotel. Accepted proofs: Driver's License, Voter's Card, Passport, and Ration Card. Guests will only be allowed to check in with a valid ID — PAN Cards will not be accepted.",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Itinerary changes",
    points: [
      "We reserve the right to modify the itinerary at any point due to reasons including but not limited to Force Majeure events, strikes, fairs, festivals, weather conditions, traffic problems, overbooking of hotels/flights, cancellation/rerouting of flights, closure of / entry restrictions at a place of visit, etc. While we will do our best to make suitable alternate arrangements, we will not be held liable for any refunds/compensation claims arising from this.",
    ],
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
      "Please clarify the total number of passengers, including infants and children, at the time of booking — the vehicle will be scheduled as per that information only. Last-moment replacement of vehicle will not be possible.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Liability",
    points: [
      "If you cause any injury or damage affecting the service provider, you may be liable to the service provider for the same as appropriate. We shall charge you separately if the service provider recovers any monies from us for such injury or damages.",
      "We cannot be held responsible/liable for any delay, deficiency, injury, death, loss or damage, etc., occasioned due to the act or default of such service providers, their employees or agents.",
    ],
  },
];

function CancellationPolicyPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Policies
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            Cancellation <em className="not-italic text-accent">Policy</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We understand that plans can change unexpectedly. Our
            cancellation policy is designed to offer flexibility and
            transparency to our valued customers.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        {/* GENERAL */}
        <section>
          <span className="eyebrow">General</span>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Before you book
          </h2>
          <ul className="mt-6 space-y-3">
            {GENERAL_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-muted-foreground">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full gradient-accent text-accent-foreground"
            >
              <a
                href={waLink("Hi UniSetGo, I have a question before booking.")}
                target="_blank"
                rel="noreferrer"
              >
                Enquire now
              </a>
            </Button>
          </div>
        </section>

        {/* COST INCLUDE / EXCLUDE */}
        <section className="mt-16">
          <span className="eyebrow">Package cost</span>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            What's included, what's not
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-bold">Cost includes</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {COST_INCLUDES.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-foreground">
                <XCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-bold">Cost does not include</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {COST_EXCLUDES.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* HOTEL / LAND CANCELLATION */}
        <section className="mt-16">
          <span className="eyebrow">Charges</span>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Hotel / land cancellation policy
          </h2>

          <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-4 font-semibold">Time before travel</th>
                  <th className="px-5 py-4 font-semibold">Season</th>
                  <th className="px-5 py-4 font-semibold">Off-season</th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {CANCELLATION_TIERS.map((tier, i) => (
                  <tr
                    key={tier.window}
                    className={i % 2 === 1 ? "bg-muted/40" : undefined}
                  >
                    <td className="px-5 py-4 text-foreground">{tier.window}</td>
                    <td className="px-5 py-4 font-semibold text-accent">
                      {tier.season}
                    </td>
                    <td className="px-5 py-4 font-semibold text-muted-foreground">
                      {tier.offSeason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-6 space-y-3">
            {CANCELLATION_NOTES.map((note) => (
              <li key={note} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-muted-foreground">
            Please contact our sales/reservation executive for more
            information about cancellation policies.
          </p>
        </section>

        {/* SCOPE OF SERVICES */}
        <section className="mt-16">
          <span className="eyebrow">Please read</span>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Our scope of services
          </h2>
          <p className="mt-3 text-muted-foreground">
            We are holiday organisers only. We carefully select the services
            provided to you, but we do not own, operate or control any
            airline, shipping company, coach or coach company, hotel,
            transport, restaurant, kitchen caravan, or any other facility or
            provider involved in your tour. Please note the following:
          </p>

          <div className="mt-8 grid gap-6">
            {SCOPE_GROUPS.map(({ icon: Icon, title, points }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-bold text-foreground">{title}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Closing note */}
        <div className="mt-14 flex gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-accent" />
          <p className="text-sm text-muted-foreground">
            The above policy is subject to change and may vary for specific
            travel packages or services. We advise all customers to
            carefully review the cancellation policy provided during the
            booking process and contact our customer support team for any
            clarification or assistance regarding cancellations.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10">
          <p className="text-lg font-semibold text-foreground">
            Need help with an existing booking?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team can talk you through your specific cancellation terms.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-accent text-accent-foreground"
            >
              <a
                href={waLink("Hi UniSetGo, I have a question about a cancellation.")}
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}