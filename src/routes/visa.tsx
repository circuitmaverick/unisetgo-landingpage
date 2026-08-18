import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileCheck2, Globe, ScrollText, ShieldCheck, Timer } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Visa Services — UniSetGo" },
      {
        name: "description",
        content:
          "Tourist, business and transit visas made simple — Schengen, USA, UK, UAE, Canada, Australia and more. Document review, appointments and application filing.",
      },
      { property: "og:title", content: "Visa Services — UniSetGo" },
      { property: "og:description", content: "Tourist, business and transit visas — filed and tracked for you." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/visa" }],
  }),
  component: VisaPage,
});

const ENQUIRY = waLink("Hi UniSetGo, I'd like help with a visa application.");

function VisaPage() {
  return (
    <div>
      <PageHero
        eyebrow="Visa services"
        title="Visas without"
        accent="the paperwork panic"
        // description="We review documents, book appointments, prep interviews and file applications — for Schengen, USA, UK, UAE, Canada, Australia and beyond."
        description="Includes document reviews, appointment bookings, application filing, and more for a range destinations like Schengen, USA, UK, UAE, Canada, Australia and others needing e-Visas."
      >
        <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
            alt="Passport and visa documents"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
          />
          <div>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">One dossier. Zero surprises.</h2>
            <p className="mt-4 text-muted-foreground">
              With UniSetGo, your tourist visa worries vanish. Our support teams simplify the process, ensuring fast approvals, accurate documentation, and personalized support for every destination. Travel confidently knowing you are covered.
              <br/><br/>Every embassy has its own checklist and its own quirks. We try to keep an
              eye on the red-flag items which can cause harm to your application and put
              your best version forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">Countries we file for</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={<ScrollText className="h-5 w-5" />} title="Document checklist" text="Country-specific checklists updated with the latest consular rules." />
            <Feature icon={<FileCheck2 className="h-5 w-5" />} title="Application review" text="Complete review of your cover letter, DS-160, itenary, financial documents and other documents as needed before submission." />
            <Feature icon={<Timer className="h-5 w-5" />} title="Appointment booking" text="We facilitate your appointments for US or Schengen countries." />
            {/* <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Interview prep" text="Mock interviews for US B1/B2 and Schengen visits — questions to answers." /> */}
            {/* <Feature icon={<Globe className="h-5 w-5" />} title="Business & work visas" text="Invitation letters, sponsor documentation and legalisation coordinated." /> */}
            {/* <Feature icon={<CheckCircle2 className="h-5 w-5" />} title="Status tracking" text="Real-time updates from submission to passport-in-hand." /> */}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">Which country do you need a visa for?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Send us your travel dates and destination — we'll come back with the checklist and a fee estimate.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}

const COUNTRIES = [
  "USA", "UK", "CIS Countries", "Schengen", "UAE", "Canada", "Australia", "New Zealand", "Japan",
  "South Korea", "China", "Singapore", "Thailand", "Vietnam", "Turkey", "Russia", "South Africa",
];

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">{icon}</div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
