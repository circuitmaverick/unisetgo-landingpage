import { createFileRoute } from "@tanstack/react-router";
import {
  Cookie,
  Database,
  Lock,
  Share2,
  ShieldCheck,
  Sliders,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — UniSetGo" },
      {
        name: "description",
        content:
          "How UniSetGo collects, uses, shares, and protects your personal information.",
      },
      { property: "og:title", content: "Privacy Policy — UniSetGo" },
      {
        property: "og:description",
        content: "How we collect, use, and safeguard your data.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  {
    icon: Database,
    title: "Information we collect",
    points: [
      "Personal details: name, contact number, email, address.",
      "Travel information: passport details, visa documents, preferences, itineraries.",
      "Payment information: billing details, transaction records.",
      "Website/app usage: cookies, browsing activity, device information.",
    ],
  },
  {
    icon: Sliders,
    title: "How we use your information",
    points: [
      "To process bookings and reservations.",
      "To provide customized travel itineraries and services.",
      "To communicate updates, offers, and travel alerts.",
    ],
  },
  {
    icon: Share2,
    title: "Information sharing",
    intro:
      "We do not sell or rent your personal data. Information may be shared only with:",
    points: [
      "Airlines, hotels, and travel partners (for confirmed bookings).",
      "Payment gateways (for secure transactions).",
      "Government authorities (when legally required).",
    ],
  },
  {
    icon: Lock,
    title: "Data security",
    points: [
      "Access is restricted to authorized personnel only.",
      "We maintain compliance with applicable data protection practices.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your rights",
    points: ["You may ask for corrections or updates to your personal data."],
  },
  {
    icon: Cookie,
    title: "Cookies & tracking",
    points: [
      "Our website may use cookies to enhance your user experience.",
      "You can disable cookies in your browser settings, but some features may not function properly as a result.",
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Policies
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            Privacy <em className="not-italic text-accent">Policy</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We value your trust and are committed to protecting your
            personal information. Here's how we collect, use, and safeguard
            your data when you interact with our services.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="grid gap-6">
          {SECTIONS.map(({ icon: Icon, title, intro, points }, i) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-foreground">{title}</h3>
                </div>
              </div>
              {intro && (
                <p className="mt-4 text-sm text-muted-foreground">{intro}</p>
              )}
              <ul className="mt-4 space-y-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4 rounded-2xl border border-border bg-secondary/50 p-6">
          <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">
            This policy may be updated from time to time to reflect changes
            in our practices or for legal, operational, or regulatory
            reasons. Please check this page periodically for the latest
            version.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10">
          <p className="text-lg font-semibold text-foreground">
            Have a question about your data?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out and our team will help.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-accent text-accent-foreground"
            >
              <a
                href={waLink("Hi UniSetGo, I have a question about my data / privacy.")}
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}