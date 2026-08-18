import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Globe2, Lock, Percent, RefreshCcw, Smartphone } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/foreign-travel-card")({
  head: () => ({
    meta: [
      { title: "Foreign Travel Card — Multi-currency Forex Card | UniSetGo" },
      {
        name: "description",
        content:
          "Load up to 15 currencies on one prepaid forex travel card — zero cross-currency fees, live rates and instant reload from India.",
      },
      { property: "og:title", content: "Foreign Travel Card — UniSetGo" },
      { property: "og:description", content: "Multi-currency prepaid forex cards for international travellers." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/foreign-travel-card" }],
  }),
  component: ForexPage,
});

const ENQUIRY = waLink("Hi UniSetGo, I'd like to get a foreign travel card.");

function ForexPage() {
  return (
    <div>
      <PageHero
        eyebrow="Foreign travel card"
        title="One card,"
        accent="15 currencies"
        description="Skip the airport counters. Load up to 15 currencies on one prepaid travel card, spend at live inter-bank rates, and reload from India in minutes."
      >
        <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">Why a forex card beats your debit card.</h2>
            <p className="mt-4 text-muted-foreground">
              International spends on a regular Indian debit or credit card add up quickly — 3.5%
              cross-currency mark-up, GST on that mark-up, dynamic currency conversion at terminals,
              and airport-counter rates that are 2–4% off the interbank. A prepaid forex card locks
              your rate at load-time and works at every Visa/Mastercard terminal worldwide.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <MicroStat value="15" label="Loadable currencies" />
              <MicroStat value="0%" label="Cross-currency fees" />
              <MicroStat value="24×7" label="Global card support" />
              <MicroStat value="10 min" label="Online reload" />
            </ul>
            <div className="mt-8">
              <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1580508174046-170816f65662?w=1200&q=80"
            alt="Forex card"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">What you get</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={<Globe2 className="h-5 w-5" />} title="Multi-currency wallet" text="USD, EUR, GBP, AUD, CAD, SGD, AED, JPY, CHF, HKD, NZD, THB, SEK, SAR, ZAR." />
            <Feature icon={<Percent className="h-5 w-5" />} title="Locked-in rate" text="Book your rate at load; no surprises at the terminal or ATM." />
            <Feature icon={<Lock className="h-5 w-5" />} title="Chip + PIN secure" text="EMV chip, PIN-protected, and instantly blockable via app if lost." />
            <Feature icon={<Smartphone className="h-5 w-5" />} title="Mobile app control" text="Balance, transactions, reload and freeze — all from your phone." />
            <Feature icon={<RefreshCcw className="h-5 w-5" />} title="Instant reload" text="Reload from India within minutes if you run low mid-trip." />
            <Feature icon={<CreditCard className="h-5 w-5" />} title="Cash-back on load" text="Seasonal cash-back offers on load amounts above ₹1L equivalent." />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">Get your card in 24 hours.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Share your travel dates and load amount — we'll deliver the card home with the wallet ready to spend.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}

function MicroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-3xl font-black text-primary">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">{icon}</div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
