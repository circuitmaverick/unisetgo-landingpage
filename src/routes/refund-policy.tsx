import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Banknote, CheckCircle2, Landmark, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — UniSetGo" },
      {
        name: "description",
        content:
          "How refunds work at UniSetGo — process, rules, and how supplier terms apply.",
      },
      { property: "og:title", content: "Refund Policy — UniSetGo" },
      {
        property: "og:description",
        content: "Refunds — process and rules.",
      },
    ],
  }),
  component: RefundPolicyPage,
});

const RULES = [
  {
    icon: Landmark,
    title: "Original source of payment",
    body: "Refunds are issued back to the original method used to pay.",
  },
  {
    icon: CheckCircle2,
    title: "Supplier cancellation terms apply",
    body: "Refunds are issued only as per the cancellation terms of the relevant suppliers or airlines.",
  },
  {
    icon: Timer,
    title: "Subject to supplier acceptance",
    body: "A refund is issued only after it has been accepted by the principal supplier.",
  },
  {
    icon: Banknote,
    title: "Released on receipt from supplier",
    body: "Refunds are passed on once we receive the corresponding refund from the airline or supplier.",
  },
  {
    icon: AlertTriangle,
    title: "Amount as per cancellation date",
    body: "The refund amount is whatever was applicable at the time of cancellation — not the original booking value.",
  },
];

function RefundPolicyPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Policies
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] sm:text-6xl">
            Refund <em className="not-italic text-accent">Policy</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            How refunds are processed, and the rules that apply when a
            booking is cancelled.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        {/* Overriding terms callout */}
        <div className="flex gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6">
          <AlertTriangle className="h-6 w-6 shrink-0 text-accent" />
          <div>
            <p className="font-bold text-foreground">Overriding terms</p>
            <p className="mt-1 text-sm text-muted-foreground">
              The terms of the supplier, hotel, or airline will override the
              general terms and conditions below and will apply wherever
              relevant.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <span className="eyebrow">Refunds</span>
          <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
            Process &amp; rules
          </h2>
          <p className="mt-3 text-muted-foreground">
            A refund will be processed for all eligible cases based on the
            following:
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          {RULES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-foreground">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-secondary/50 p-8 text-center sm:p-10">
          <p className="text-lg font-semibold text-foreground">
            Have a question about a specific booking?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Our team can walk you through where your refund stands.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-accent text-accent-foreground"
            >
              <a
                href={waLink("Hi UniSetGo, I have a question about a refund.")}
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}