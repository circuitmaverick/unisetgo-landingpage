import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Palmtree,
  Wand2,
  Compass,
  PenLine,
  CheckCheck,
  LifeBuoy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Services — UniSetGo" },
      {
        name: "description",
        content:
          "UniSetGo is a corporate travel studio designing bespoke journeys — corporate offsites, MICE, leisure and custom family trips.",
      },
      { property: "og:title", content: "About & Services — UniSetGo" },
      {
        property: "og:description",
        content: "A corporate travel studio for bespoke journeys.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Our studio
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            We design <em className="not-italic text-accent">travel</em> the way
            a great architect designs a home — around you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            UniSetGo is a corporate travel studio built by seasoned trip
            designers. We plan journeys for founders, teams and families —
            flights and stays are just the start.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <Service
            icon={Briefcase}
            title="Corporate & MICE"
            body="Offsites, board summits, incentive trips and conferences. From 10 to 500 pax, handled end to end with dedicated on-ground support."
          />
          <Service
            icon={Palmtree}
            title="Leisure Packages"
            body="Curated getaways for couples, families and friends. Choose from ready itineraries or bring your own dream."
          />
          <Service
            icon={Wand2}
            title="Bespoke Itineraries"
            body="A blank sheet, your budget, your calendar. We design a route no one else will get."
          />
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
            Four steps. No guesswork.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Step
              n={1}
              icon={Compass}
              title="Consult"
              body="We listen — where, when, who, why. No PDF templates."
            />
            <Step
              n={2}
              icon={PenLine}
              title="Curate"
              body="A first draft in 24 hours, refined until it feels right."
            />
            <Step
              n={3}
              icon={CheckCheck}
              title="Confirm"
              body="Locked prices, clear inclusions, transparent invoice."
            />
            <Step
              n={4}
              icon={LifeBuoy}
              title="Concierge"
              body="A real person on WhatsApp for the entire trip."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        {/* <span className="eyebrow">Our promise</span> */}
        <p className="mt-6 text-balance text-2xl font-semibold text-foreground sm:text-3xl">
          "Elegance with a hint of nostalgia. The kind of trip you'll re-tell
          for years."
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full gradient-accent text-accent-foreground"
          >
            <a
              href={waLink("Hi UniSetGo, I'd like to plan a trip.")}
              target="_blank"
              rel="noreferrer"
            >
              Start planning
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/packages">See sample packages</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function Service({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Briefcase;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
      <span className="grid h-12 w-12 place-items-center rounded-2xl gradient-hero text-primary-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Step({
  n,
  icon: Icon,
  title,
  body,
}: {
  n: number;
  icon: typeof Compass;
  title: string;
  body: string;
}) {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6">
      <span className="absolute -top-4 left-6 rounded-full bg-accent px-3 py-1 text-xs font-black text-accent-foreground">
        Step {n}
      </span>
      <Icon className="mt-2 h-6 w-6 text-primary" />
      <h4 className="mt-3 text-lg font-bold text-foreground">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
