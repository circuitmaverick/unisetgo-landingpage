import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Palmtree,
  Wand2,
  Compass,
  PenLine,
  CheckCheck,
  LifeBuoy,
  Sparkles,
  Headset,
  ShieldCheck,
  Currency,
  HandCoins,
  Wrench,
  MapPinned,
  PhoneCall,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";
import Pillar from "@/components/pillar";
import who_we_are_img from "@/assets/about_image-1.png";
import vision from "@/assets/about_us_vision.jpg";
import mission from "@/assets/about_us_mission.jpg";

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

      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="md:pr-6">
            <span className="eyebrow">Who we are</span>
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              We help you <span className="text-primary">planning</span>
              <br />
              your journey.
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              We only live once, so{" "}
              <span className="font-bold">why not make it beautiful?</span> At
              UniSetGo, we strongly believe in living life to the fullest and
              embracing the beauty it offers. This belief has led us to bring
              together a team of experienced travel enthusiasts who curate a
              wide range of destinations for you to explore.
              <br />
              <br />
              As travel enthusiasts ourselves, we understand the powerful
              longing that arises when we witness awe-inspiring places in the
              media. It is our vision to embrace that wanderlust and make it a
              reality for you. Whether you desire thrilling adventures like
              mountain expeditions, immersive cultural explorations, or simply a
              refreshing escape from everyday life, we have the perfect
              itinerary awaiting you.
              <br />
              <br />
              UniSetGo ensures a hassle-free booking process, unforgettable
              culinary experiences, handpicked accommodations, and much more
              tailored to your unique preferences.
              <br />
              <br />
              UniSetGo aims to make travel fun, accessible, and memorable for
              everyone. Join us on this incredible journey and let's create
              cherished memories together. With UniSetGo, you and I are set to
              go!
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <img src={who_we_are_img} alt="who we are" />
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <span className="eyebrow">Why Us</span>
        <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
          We make all the <span className="text-primary">process</span>
          <br />
          easy.
        </h2>
        <div className="grid gap-10 md:grid-cols-3 mt-8">
          <Service
            icon={HandCoins}
            title="Best Value"
            body="We offer the best value for money in the touring packages. Choose your budget, we will provide the quality experience."
          />
          <Service
            icon={Wrench}
            title="Customization"
            body="Curated getaways for couples, families and friends. Choose from ready itineraries or bring your own dream."
          />
          <Service
            icon={MapPinned}
            title="Passionate about Travel"
            body="We are as passionate about travel as you are! You will be provided with the most wonderful and passionate travel experience."
          />
          <Service
            icon={PhoneCall}
            title="Fast Responses"
            body="Any problem? Contact us right away! We ensure a smooth and hassle-free experience for our customers with quick support assitance."
          />
          <Service
            icon={ListChecks}
            title="Wide Variety of Choices"
            body="We offer a wide range of destinations and types of tour packages to choose from. Go through our catalog and choose what suits your needs."
          />
          <Service
            icon={Wand2}
            title="Bespoke Itineraries"
            body="A blank sheet, your budget, your calendar. We design a route no one else will get."
          />
        </div>
      </section>

      {/* how we work */}
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

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <img
              src={vision}
              alt="vision"
              className="rounded-xl shadow-2xl shadow-black/50"
            />
          </div>
          <div className="md:px-0 px-4">
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              Our <span className="text-primary">vision</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              UniSetGo envisions a world where people enthusiastically explore
              their love for travel, unleashing their inner explorers. We strive
              to provide transformative travel experiences through which you can
              connect with others, create lifelong memories and develop greater
              appreciation for diverse cultures.
            </p>
          </div>
          <div className="md:px-0 px-4">
            <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
              Our <span className="text-primary">mission</span>
            </h2>
            <ul className="mt-5 max-w-xl text-muted-foreground list-disc">
              <li>
                Provide a user-friendly platform for a hassle-free booking
                process.
              </li>
              <li>
                Offer a wide range of destinations and carefully curated
                experiences.
              </li>
              <li>
                Meet the specific needs and preferences of each individual
                traveler by personalizing our services and providing customized
                itineraries.
              </li>
              <li>
                Fulfill travel aspirations of individuals and create cherished
                memories.
              </li>
              <li>Help foster deep appreciation for different cultures.</li>
              <li>
                Provide exceptional customer service with great attention to
                detail.
              </li>
              <li>Becoming a trusted resource for travel enthusiasts.</li>
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <img
              src={mission}
              alt="mission"
              className="rounded-xl shadow-2xl shadow-black/50"
            />
          </div>
        </div>
      </section>

      {/* stats band */}
      <StatsBand />

      {/* quote */}
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

function PlanningIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* faint dotted map texture */}
      <pattern
        id="dotgrid"
        width="24"
        height="24"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1.4" fill="white" opacity="0.14" />
      </pattern>
      <rect width="400" height="500" fill="url(#dotgrid)" />

      {/* route line */}
      <path
        d="M70 430 C 150 390 120 270 220 250 C 300 230 260 130 330 90"
        fill="none"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeDasharray="2 12"
        strokeLinecap="round"
      />

      {/* origin pin */}
      <circle cx="70" cy="430" r="7" fill="white" fillOpacity="0.9" />
      <circle cx="70" cy="430" r="14" fill="white" fillOpacity="0.15" />

      {/* midpoint pin */}
      <circle cx="220" cy="250" r="6" fill="white" fillOpacity="0.75" />

      {/* destination pin, in accent gold */}
      <circle
        cx="330"
        cy="90"
        r="20"
        fill="var(--brand-gold)"
        fillOpacity="0.25"
      />
      <circle cx="330" cy="90" r="10" fill="var(--brand-gold)" />
      <path
        d="M330 74 L330 106 M314 90 L346 90"
        stroke="var(--brand-navy)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* small paper plane travelling the route */}
      <g transform="translate(178 300) rotate(-38)">
        <path d="M0 0 L22 6 L0 12 L4 6 Z" fill="white" fillOpacity="0.9" />
      </g>
    </svg>
  );
}

import { MapPin, Backpack, Smile } from "lucide-react";

const STATS = [
  { icon: MapPin, value: "124+", label: "Destinations" },
  { icon: Backpack, value: "35+", label: "Tour Types" },
  { icon: Smile, value: "99%", label: "Happy Customers" },
];

function StatsBand() {
  return (
    <section className="bg-secondary/50 relative overflow-hidden">
      {/* background photo — swap src for a real asset import */}
      {/* <img
        src="https://picsum.photos/seed/unisetgo-mountains/1800/700"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      /> */}
      {/* brand-tinted overlay */}
      {/* <div className="absolute inset-0 bg- opacity-80" /> */}

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-white shadow-black/30 shadow-2xl p-8 text-center backdrop-blur-sm"
            >
              <span className="mx-auto grid place-items-center rounded-2xl bg-white/15 text-accent">
                <Icon className="h-20 w-20" strokeWidth={2} />
              </span>
              <p className="mt-5 text-4xl font-black text-primary sm:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-md font-semibold uppercase tracking-[0.15em] text-accent">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
