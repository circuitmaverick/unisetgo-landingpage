import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, ConciergeBell, Sparkles, Wallet, Wifi } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { AutoSlideshow } from "@/components/auto-slideshow";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/hotels")({
  head: () => ({
    meta: [
      { title: "Hotel Bookings — Luxury & Budget | UniSetGo" },
      {
        name: "description",
        content:
          "Book hotels worldwide with UniSetGo — from 5-star resorts to smart budget stays, with best-rate guarantees and concierge support.",
      },
      { property: "og:title", content: "Hotel Bookings — UniSetGo" },
      { property: "og:description", content: "Luxury and budget hotels, booked with concierge support." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/hotels" }],
  }),
  component: HotelsPage,
});

const HOTEL_IMAGES = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80",
];

function HotelsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hotel bookings"
        title="Comfort,"
        accent="anywhere"
        description="From five-star icons to smart budget stays — booked at the best rate, with our concierge on WhatsApp through your trip."
      >
        <WhatsAppCTA href={waLink("Hi UniSetGo, I'd like to book a hotel.")} label="Enquire on WhatsApp" />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">Every stay, sorted.</h2>
            <p className="mt-4 text-muted-foreground">
              Every UniSetGo journey includes selected hotels — blending comfort, culture, and convenience for an unforgettable stay.
            </p>
            <ul className="mt-6 space-y-4">
              <Feature icon={<BedDouble className="h-5 w-5" />} title="Luxury to budget" text="Wide variety of options to choose from." />
              {/* <Feature icon={<Wallet className="h-5 w-5" />} title="Best-rate promise" text="If you find a lower public rate, we match it and add a perk." /> */}
              <Feature icon={<ConciergeBell className="h-5 w-5" />} title="Room upgrades" text="Upgrade options to choose from." />
              <Feature icon={<Sparkles className="h-5 w-5" />} title="Special occasions" text="Cake, décor and champagne for birthdays, anniversaries and honeymoons." />
              <Feature icon={<Wifi className="h-5 w-5" />} title="Verified essentials" text="Wi-Fi, air-con, meals, add-on services and more." />
            </ul>
            <div className="mt-8">
              <WhatsAppCTA href={waLink("Hi UniSetGo, I'd like to book a hotel.")} label="Enquire on WhatsApp" />
            </div>
          </div>
          <AutoSlideshow images={HOTEL_IMAGES} alt="Hotel rooms" />
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
