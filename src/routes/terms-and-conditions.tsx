import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  BadgeCheck,
  Building2,
  Globe2,
  IdCard,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — UniSetGo" },
      {
        name: "description",
        content:
          "UniSetGo's general terms and conditions — bookings, air ticket amendments, hotel check-in policies, and liability.",
      },
      { property: "og:title", content: "Terms & Conditions — UniSetGo" },
      {
        property: "og:description",
        content: "General terms and conditions for your booking.",
      },
    ],
  }),
  component: TermsAndConditionsPage,
});

const TERMS_GROUPS = [
  {
    icon: BadgeCheck,
    title: "Bookings & quotations",
    points: [
      "Rates mentioned are valid for Indian nationals only, unless specified otherwise along with the quotation.",
      "Quotations are given without holding any confirmed reservations.",
      "Once the quotation is accepted by the guest and the advance amount is deposited to process the reservation, the booking is processed at our end.",
      "In case we are unable to get the confirmation, the deposited amount shall be refunded to the guest.",
      "Full confirmation / vouchers will be given on receipt of full payment.",
      "In a tour package, no refund shall be made for unutilized services — it is on the guest's discretion whether to take a service or not.",
    ],
  },
  {
    icon: Plane,
    title: "Air tickets & amendments",
    points: [
      "For packages booked under our Airline Group Packages, airline tickets might be delivered 2 days before the departure of the group.",
      "Any date amendments in the air tickets will be considered as a cancellation only, and new tickets are issued under the new applicable fare at the time of issuance. Cancellation charges apply for the cancelled tickets as per airline policy, along with our minimum 10% fee.",
      "Any amendments to the date or itinerary must be intimated to us in writing. The amended confirmation depends on the availability of the given hotels on the requested dates, and our cancellation policy shall apply in such cases.",
    ],
  },
  {
    icon: Building2,
    title: "Hotel check-in, check-out & no-shows",
    points: [
      "The check-in and check-out time of most hotels is 12 PM to 2 PM, and the number of meals including breakfast always corresponds to the number of nights booked by the guest. The hotel does not provide breakfast on the day of arrival.",
      "In case of a no-show or early check-out, 100% charges will apply — no part/full refund will be honored.",
      "The hotel reserves the right to automatically cancel the room booking after 18:00 hours if the hotel is not informed about a late arrival.",
      "For early check-ins and late check-outs, payments are to be settled directly by the guest at the hotel.",
    ],
  },
  {
    icon: IdCard,
    title: "Identity & liability",
    points: [
      "Please carry a valid identity proof card (passport in case of international travel) containing your photograph, as it is required at the airport and during hotel check-in. PAN card is not a valid identity proof.",
      "The company will not be responsible in any way for a missed flight, or any loss, injury or damage to person or property in connection with transportation, caused by acts of strikes, pilferage, breakdown of machinery, accidents, snowfall, etc. All sightseeing depends on permits, weather and road conditions.",
    ],
  },
];

function TermsAndConditionsPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Policies
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            Terms &amp; <em className="not-italic text-accent">Conditions</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            The general terms that apply to bookings, tickets, hotels and
            travel with UniSetGo.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        {/* Overriding terms callout */}
        <div className="flex gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-accent" />
          <div>
            <p className="font-bold text-foreground">Overriding terms</p>
            <p className="mt-1 text-sm text-muted-foreground">
              The terms of the supplier, hotel, or airline will override the
              general terms and conditions below and will apply wherever
              relevant.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6">
          {TERMS_GROUPS.map(({ icon: Icon, title, points }) => (
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

        {/* International travel note */}
        <div className="mt-8 flex gap-4 rounded-2xl border border-border bg-secondary/50 p-6">
          <Globe2 className="h-6 w-6 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            In the case of international travel, rates may vary based on
            changes in ROE or any other fluctuation in the international
            market, or subject to availability.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10">
          <p className="text-lg font-semibold text-foreground">
            Have a question before you book?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team can walk you through any of these terms.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-accent text-accent-foreground"
            >
              <a
                href={waLink("Hi UniSetGo, I have a question about your terms.")}
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