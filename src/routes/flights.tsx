import { createFileRoute } from "@tanstack/react-router";
import { Clock, Globe2, PlaneTakeoff, Sparkles, Ticket, Wallet } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { AutoSlideshow } from "@/components/auto-slideshow";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/flights")({
  head: () => ({
    meta: [
      { title: "Flight Bookings — First, Business & Economy | UniSetGo" },
      {
        name: "description",
        content:
          "Book domestic and international flights with UniSetGo — first, business and economy fares with fare-difference alerts and 24×7 support.",
      },
      { property: "og:title", content: "Flight Bookings — UniSetGo" },
      { property: "og:description", content: "First, business and economy flights booked with concierge support." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/flights" }],
  }),
  component: FlightsPage,
});

const FLIGHT_IMAGES = [
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
  "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1200&q=80",
  "https://images.unsplash.com/photo-1540339832862-474599807836?w=1200&q=80",
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=1200&q=80",
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=1200&q=80",
];

function FlightsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Flight bookings"
        title="Fly smart,"
        accent="fly informed"
        description="First, business or economy — we facilitate good deals and handle re-routes when things go sideways."
      >
        <WhatsAppCTA href={waLink("Hi UniSetGo, I'd like to book flights.")} label="Enquire on WhatsApp" />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <AutoSlideshow images={FLIGHT_IMAGES} alt="Flights" />
          <div>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">Every seat, sorted.</h2>
            <p className="mt-4 text-muted-foreground">
              With UniSetGo, your flights are handpicked for comfort, convenience, and value — so you can focus on the journey, not the logistics.
            </p>
            <ul className="mt-6 space-y-8">
              <Feature icon={<PlaneTakeoff className="h-5 w-5" />} title="Flexible options" text="Tailored choices for economy, premium economy, business, or first class depending on client preference." />
              {/* <Feature icon={<Wallet className="h-5 w-5" />} title="Best-fare tracking" text="Fare-drop alerts before booking." /> */}
              <Feature icon={<Ticket className="h-5 w-5" />} title="Seat & meal choice" text="Pre-selected seats, special meals sorted." />
              <Feature icon={<Sparkles className="h-5 w-5" />} title="Special Assitance" text="Support for wheelchair assistance, and group bookings" />
              {/* <Feature icon={<Clock className="h-5 w-5" />} title="24×7 rebooking" text="One WhatsApp thread for cancellations, delays and last-minute changes." /> */}
              <Feature icon={<Globe2 className="h-5 w-5" />} title="Multi-city itineraries" text="Round-the-world and open-jaw tickets designed to save cost and time." />
            </ul>
            <div className="mt-8">
              <WhatsAppCTA href={waLink("Hi UniSetGo, I'd like to book flights.")} label="Enquire on WhatsApp" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-primary">{icon}</div>
      <div>
        <p className="font-bold text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </li>
  );
}
