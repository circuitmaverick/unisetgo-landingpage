import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, CalendarCheck, Handshake, MapPin, Presentation, Users } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/corporate-conclaves")({
  head: () => ({
    meta: [
      { title: "Corporate Conclaves & MICE — UniSetGo" },
      {
        name: "description",
        content:
          "End-to-end MICE, offsites and corporate conclaves — venues, logistics, travel, production and hospitality across India and abroad.",
      },
      { property: "og:title", content: "Corporate Conclaves — UniSetGo" },
      { property: "og:description", content: "Meetings, incentives, conferences and offsites, engineered end to end." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/corporate-conclaves" }],
  }),
  component: CorporateConclavesPage,
});

const ENQUIRY = waLink("Hi UniSetGo, I'd like to plan a corporate conclave / offsite.");

function CorporateConclavesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Corporate & MICE"
        title="Conclaves your teams"
        accent="actually remember"
        description="From 30-person leadership offsites to 3,000-delegate annual conclaves — we handle venue, travel, production, hospitality and every last name-badge."
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
          {/* <WhatsAppCTA
            variant="outline"
            href={waLink("Hi UniSetGo, please send your MICE deck.")}
            label="Request MICE Deck"
          /> */}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-primary">
              What we do
            </span>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              One partner for the whole conclave.
            </h2>
            <p className="mt-4 text-muted-foreground">
              UniSetGo runs the moving parts — flights, hotels, ground fleet, F&amp;B, AV, stage
              production, gifting, spouse programmes and offsite days. Your HR and admin teams get one
              WhatsApp thread and one invoice; your delegates get a conclave that runs on rails.
            </p>
            <p className="mt-3 text-muted-foreground">
              We've delivered conclaves in Dubai, Bali, Bangkok, Colombo and every metro in India —
              from IT company R&amp;R weekends to BFSI leadership summits and pharma launch events.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
            alt="Corporate conference stage"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">Full-stack event scope</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<MapPin className="h-5 w-5" />}
              title="Venue & destination scouting"
              text="Shortlists across India, GCC and Southeast Asia matched to headcount, budget and brand tier."
            />
            <FeatureCard
              icon={<Briefcase className="h-5 w-5" />}
              title="Travel & logistics"
              text="Group airfare, visas, arrivals desks, coach fleets and 24×7 on-ground crew."
            />
            <FeatureCard
              icon={<Presentation className="h-5 w-5" />}
              title="Stage & production"
              text="AV, LED, lights, sound, live streaming and green-room hospitality — one production partner."
            />
            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              title="Delegate management"
              text="Registration portals, RFID badges, real-time check-in dashboards and communication."
            />
            <FeatureCard
              icon={<Handshake className="h-5 w-5" />}
              title="Team building & offsites"
              text="Curated experiences — desert safaris, cooking studios, sailing regattas, adventure days."
            />
            <FeatureCard
              icon={<CalendarCheck className="h-5 w-5" />}
              title="Post-event reporting"
              text="Delegate feedback, spends, photos, videos and a delivery report your CFO will thank you for."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80"
            alt="Delegates at a conference"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-black text-foreground sm:text-3xl">A typical delivery timeline</h2>
            <ol className="mt-6 space-y-4">
              {TIMELINE.map((t, i) => (
                <li key={t.step} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{t.step}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

const TIMELINE = [
  { step: "Brief & shortlist", detail: "In 48 hours we return 3–5 destination + venue combinations matched to your brief." },
  { step: "Costing & site inspection", detail: "Detailed BOQ, sample menus, and optional site inspection with our team." },
  { step: "Confirmation & mobilisation", detail: "Contracts, delegate portal live, travel booked, production locked-in." },
  { step: "On-ground delivery", detail: "Dedicated event director + crew on site for the full duration of the conclave." },
  { step: "Wrap & reporting", detail: "Post-event report, media assets, and reconciled final invoice within 10 working days." },
];

function FeatureCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">{icon}</div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
        <h2 className="text-3xl font-black sm:text-4xl">Have a conclave on the calendar?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Send us the dates, headcount and vibe. We'll come back with a shortlist inside 48 hours.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
        </div>
      </div>
    </section>
  );
}
