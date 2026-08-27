import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ClockCheck,
  Earth,
  FileCheck2,
  Globe,
  Handshake,
  Headset,
  ScrollText,
  Search,
  ShieldCheck,
  Target,
  Timer,
} from "lucide-react";
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
      {
        property: "og:description",
        content:
          "Tourist, business and transit visas — filed and tracked for you.",
      },
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
            <h2 className="text-3xl font-black text-foreground sm:text-4xl">
              One dossier. Zero surprises.
            </h2>
            <p className="mt-4 text-muted-foreground">
              With UniSetGo, your tourist visa worries vanish. Our support teams
              simplify the process, ensuring fast approvals, accurate
              documentation, and personalized support for every destination.
              Travel confidently knowing you are covered.
              <br />
              <br />
              Every embassy has its own checklist and its own quirks. We try to
              keep an eye on the red-flag items which can cause harm to your
              application and put your best version forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">
            Countries we file for
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<FileCheck2 className="h-5 w-5" />}
              title="Document Verification"
              text="Careful review to avoid rejections due to errors or missing paperwork."
            />
            <Feature
              icon={<Timer className="h-5 w-5" />}
              title="Appointment booking"
              text="We facilitate your appointments for US or Schengen countries."
            />
            <Feature
              icon={<Handshake className="h-5 w-5" />}
              title="End-to-End Assistance"
              text="From application to approval, we help manages the entire visa process."
            />
            <Feature
              icon={<Target className="h-5 w-5" />}
              title="Expert Guidance"
              text="Teams familiar with embassy requirements and country‑specific regulations."
            />
            <Feature
              icon={<ClockCheck className="h-5 w-5" />}
              title="Fast & Hassle-Free"
              text="Streamlined documentation and submission to minimize delays."
            />
            <Feature
              icon={<Headset className="h-5 w-5" />}
              title="Personalized Support"
              text="Tailored advice for tourist and family visas."
            />
            <Feature
              icon={<Search className="h-5 w-5" />}
              title="Transparency"
              text="Clear communication on requirements, timelines, and fees — no hidden surprises."
            />
            <Feature
              icon={<Earth className="h-5 w-5" />}
              title="Global Coverage"
              text="Assistance for visas across multiple continents (Asia, Europe, Americas, Africa, Oceania)."
            />
            <Feature
              icon={<Target className="h-5 w-5" />}
              title="Expert Guidance"
              text="Teams familiar with embassy requirements and country‑specific regulations."
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">
            Which country do you need a visa for?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Send us your travel dates and destination — we'll come back with the
            checklist and a fee estimate.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <span className="eyebrow">FAQs</span>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
            Common visa questions
          </h2>
        </div>
        <VisaFaqAccordion />
      </section>
    </div>
  );
}

const COUNTRIES = [
  "USA",
  "UK",
  "CIS Countries",
  "Schengen",
  "UAE",
  "Canada",
  "Australia",
  "New Zealand",
  "Japan",
  "South Korea",
  "China",
  "Singapore",
  "Thailand",
  "Vietnam",
  "Turkey",
  "Russia",
  "South Africa",
];

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

const VISA_FAQS = [
  {
    question: "Do I need a visa for Europe?",
    answer:
      "Most Indian passport holders need a Schengen visa to visit Europe for tourism, even for short stays. The exact requirements depend on your entry country and travel dates — send us your itinerary and we'll confirm what applies.",
  },
  {
    question: "How long does a Japan tourist visa take?",
    answer:
      "Japan tourist visas typically take 5–7 working days to process once your complete application is submitted, though this can vary by season and embassy workload. We recommend applying at least 3–4 weeks before your travel date.",
  },
  {
    question: "Can UniSetGo help with urgent visas?",
    answer:
      "Yes — for select destinations we can expedite document review and appointment booking to help with tighter timelines. Urgent processing depends on embassy availability and isn't guaranteed for every country, so message us with your travel date as early as possible.",
  },
  {
    question: "What documents do I usually need to apply?",
    answer:
      "This varies by country, but most applications need a valid passport, passport-size photos, proof of travel (flight/hotel bookings), financial statements, and an itinerary. We'll send you a destination-specific checklist once you tell us where you're headed.",
  },
  {
    question: "What if my visa application gets rejected?",
    answer:
      "Visa approval is ultimately at the embassy's discretion, and rejection fees are non-refundable as per embassy policy. That said, our document review process is designed to catch common issues before submission to minimize this risk.",
  },
  {
    question: "Can you help with visas for group or family travel?",
    answer:
      "Yes — we regularly handle group and family visa applications together, keeping travel dates, itineraries, and documentation consistent across everyone in the group to avoid mismatches that can slow down approvals.",
  },
];

function VisaFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-6 space-y-3">
      {VISA_FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center cursor-pointer justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-foreground">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}