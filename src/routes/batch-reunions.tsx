import { createFileRoute } from "@tanstack/react-router";
import {
  Cake,
  Camera,
  GraduationCap,
  PartyPopper,
  Ticket,
  Users,
} from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/batch-reunions")({
  head: () => ({
    meta: [
      { title: "Batch Re-Unions — School & College Reunions | UniSetGo" },
      {
        name: "description",
        content:
          "Plan unforgettable school and college batch reunions — resorts, flights, itineraries, decor and photography, all handled by UniSetGo.",
      },
      { property: "og:title", content: "Batch Re-Unions — UniSetGo" },
      {
        property: "og:description",
        content:
          "School and college reunions, designed and delivered end to end.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/batch-reunions" }],
  }),
  component: BatchReunionsPage,
});

const ENQUIRY = waLink("Hi UniSetGo, I'd like to plan a batch reunion.");

function BatchReunionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Batch reunions"
        title="Round up the batch,"
        accent="we'll handle the rest"
        description="From school silver jubilees to college batch weekends — we plan resorts, flights, décor, throwback nights and after-parties so you can just show up and hug people."
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
            alt="Friends reuniting"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            loading="lazy"
          />
          <div>
            <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Why UniSetGo
            </span>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              A batch of 40 or 400 — same seamless day.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Reunions are logistically the hardest events in travel: split
              payments, last-minute add-ons, dietary quirks, travel from three
              continents, a spouse programme, a kids corner, and someone who
              insists on singing at 2 a.m. We've done all of that, and we've
              still delivered the throwback slideshow on time.
            </p>
            <p className="mt-3 text-muted-foreground">
              A dedicated coordinator manages your batch's WhatsApp group,
              collects preferences, books rooms and closes payments — so the
              alumni committee actually gets to enjoy the reunion too.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">
            What every reunion includes
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<GraduationCap className="h-5 w-5" />}
              title="Venue & resort booking"
              text="Beach resorts, hill retreats and heritage hotels — with batch-block pricing."
            />
            <Feature
              icon={<Ticket className="h-5 w-5" />}
              title="Travel coordination"
              text="Group airfare, trains, and pickups from all major cities and airports."
            />
            <Feature
              icon={<PartyPopper className="h-5 w-5" />}
              title="Theme night & decor"
              text="Retro school-corridor set-ups, prom nights, dandiya, cocktails — themed to your batch."
            />
            <Feature
              icon={<Camera className="h-5 w-5" />}
              title="Photography & film"
              text="Batch photo, candid photography and a highlight film delivered within a week."
            />
            <Feature
              icon={<Cake className="h-5 w-5" />}
              title="F&B & bar"
              text="Custom menus, dietary options, and open-bar packages sized to your headcount."
            />
            <Feature
              icon={<Users className="h-5 w-5" />}
              title="Family & kids programme"
              text="Spouse itineraries, kids' activities and a crèche — so families come, not just alumni."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <h2 className="text-2xl font-black text-foreground sm:text-3xl">
          Reunion styles we love
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <StyleCard
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
            title="Beach Weekend"
            text="Goa, Andaman or Sri Lanka — sundowners, catamarans and a beach-shack night."
          />
          <StyleCard
            image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80"
            title="Hill Retreat"
            text="Munnar, Coorg or Nainital — bonfires, misty mornings and long lunches."
          />
          <StyleCard
            image="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
            title="Heritage Palace"
            text="Rajasthan and Hyderabad — havelis, royal dinners and a proper prom night."
          />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to round up the batch?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Tell us your batch year, approximate headcount and preferred month —
            we'll return a shortlist of destinations and a per-head estimate.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}

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

function StyleCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
