import { createFileRoute } from "@tanstack/react-router";
import { Award, Calendar, Flag, MapPin, Trophy, Users } from "lucide-react";
import { PageHero, WhatsAppCTA } from "@/components/page-hero";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/golf-tourism")({
  head: () => ({
    meta: [
      { title: "Golf Tourism — Play the World's Best Courses | UniSetGo" },
      {
        name: "description",
        content:
          "Tee off at championship courses in Scotland, Dubai, Thailand, Vietnam and India — curated golf holidays with tee times, caddies and equipment sorted.",
      },
      { property: "og:title", content: "Golf Tourism — UniSetGo" },
      { property: "og:description", content: "Golf holidays at the world's best courses, curated end to end." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/golf-tourism" }],
  }),
  component: GolfPage,
});

const ENQUIRY = waLink("Hi UniSetGo, I'd like to plan a golf tour.");

function GolfPage() {
  return (
    <div>
      <PageHero
        eyebrow="Golf tourism"
        title="Tee off at the world's"
        accent="greatest courses"
        description="From St Andrews to Emirates Golf Club — we sort tee times, caddies, equipment, transfers and the perfect after-round hotel."
      >
        <div className="flex flex-wrap gap-3">
          <WhatsAppCTA href={ENQUIRY} label="Plan a Golf Tour" />
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-primary">Why us</span>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              Golf holidays, with a special touch.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Booking championship courses takes more than a website — you need lead time on tee
              slots, caddie preferences, buggy allocation and equipment on arrival. We handle all of
              it, and we build the rest of the holiday around it: partner-friendly spas, wine
              regions, city breaks and family days.
            </p>
            <p className="mt-3 text-muted-foreground">
              Whether it's a fourball weekend in Dubai or a two-week Scotland pilgrimage across the
              Open venues, we design the round and the road.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=80"
            alt="Golf course fairway"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="text-2xl font-black text-foreground sm:text-3xl">Signature destinations</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <div key={d.title} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
                <img src={d.image} alt={d.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">{d.tag}</p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <h2 className="text-2xl font-black text-foreground sm:text-3xl">What we include</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={<Calendar className="h-5 w-5" />} title="Tee-time booking" text="Confirmed slots at championship courses, months in advance." />
          <Feature icon={<Flag className="h-5 w-5" />} title="Course caddies" text="Experienced caddies, buggies and equipment hire arranged." />
          <Feature icon={<Trophy className="h-5 w-5" />} title="Tournament access" text="Ryder Cup, DP World Tour and PGA tournament packages on request." />
          <Feature icon={<MapPin className="h-5 w-5" />} title="On-course stays" text="Resort hotels on the course — walk from your room to the first tee." />
          <Feature icon={<Users className="h-5 w-5" />} title="Non-golfer programme" text="Spa days, city tours and wine tastings for the rest of the group." />
          <Feature icon={<Award className="h-5 w-5" />} title="Pro coaching" text="Optional lessons with PGA pros in Dubai, Thailand and India." />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
          <h2 className="text-3xl font-black sm:text-4xl">Where should we tee off?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Tell us the courses on your list — we'll come back with tee-time availability and a full quote.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppCTA href={ENQUIRY} label="Enquire on WhatsApp" />
          </div>
        </div>
      </section>
    </div>
  );
}

const DESTINATIONS = [
  {
    tag: "Home of golf",
    title: "Scotland — St Andrews & beyond",
    text: "The Old Course, Carnoustie, Muirfield and Turnberry — the sport's spiritual homeland.",
    image: "https://images.unsplash.com/photo-1552088731-968be2438f8b?w=1200&q=80",
  },
  {
    tag: "Desert golf",
    title: "Dubai & Abu Dhabi",
    text: "Emirates Golf Club, Jumeirah Golf Estates and Yas Links — floodlit fairways and skyline greens.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&q=80",
  },
  {
    tag: "Value & views",
    title: "Thailand & Vietnam",
    text: "Hua Hin, Phuket, Danang — championship courses at Southeast-Asia value.",
    image: "https://images.unsplash.com/photo-1493409349555-1215bf50776a?w=1200&q=80",
  },
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
