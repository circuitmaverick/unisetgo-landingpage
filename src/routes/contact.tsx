import { createFileRoute } from "@tanstack/react-router";
import { CONTACT, mailLink, waLink } from "@/lib/contact";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact UniSetGo — Plan Your Trip" },
      {
        name: "description",
        content:
          "Reach UniSetGo on WhatsApp or email to plan bespoke corporate and leisure travel.",
      },
      { property: "og:title", content: "Contact UniSetGo — Plan Your Trip" },
      {
        property: "og:description",
        content:
          "WhatsApp us or drop an email — we reply within a business day.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const enquiry =
    "Hi UniSetGo, I'd like to plan a trip. My rough dates and destinations are:";
  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Get in touch
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Let's design your{" "}
            <em className="not-italic text-accent">next trip</em>.
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Tell us where you're headed. We reply on WhatsApp in minutes and
            send a first draft plan within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={waLink(enquiry)}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl gradient-accent p-8 text-accent-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <MessageCircle className="h-8 w-8" />
            <h2 className="mt-5 text-2xl font-black">Chat on WhatsApp</h2>
            <p className="mt-2 text-sm opacity-90">
              Fastest way to reach us. Real people, real replies.
            </p>
            <p className="mt-6 text-sm font-bold underline-offset-4 group-hover:underline">
              Open WhatsApp →
            </p>
          </a>
          <a
            href={mailLink("Enquiry from UniSetGo website", enquiry)}
            className="group relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <Mail className="h-8 w-8 text-accent" />
            <h2 className="mt-5 text-2xl font-black">Email us</h2>
            <p className="mt-2 text-sm text-white/80">
              For detailed enquiries, group trips or RFPs.
            </p>
            <p className="mt-6 text-sm font-bold text-accent underline-offset-4 group-hover:underline">
              Open email →
            </p>
          </a>
        </div>

        <div className="mt-14 grid gap-6 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
          <Info
            icon={Phone}
            label="Phone"
            value={CONTACT.phoneDisplay}
            href={`tel:+${CONTACT.phoneE164}`}
          />
          <Info
            icon={Mail}
            label="General enquiries"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
          />
          <Info
            icon={Mail}
            label="Bookings"
            value={CONTACT.bookingsEmail}
            href={`mailto:${CONTACT.bookingsEmail}`}
          />
          <Info icon={MapPin} label="Office" value={CONTACT.address} />
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-foreground sm:text-3xl">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Share your travel plans and we'll get back to you with a draft
              itinerary within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

const NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\+]?[0-9\s\-\(\)]{10,20}$/;

function validatePhoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export async function submitContactEnquiry(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
}) {
  // Dummy function — replace this with a real database upload later.
  console.log("Contact enquiry submitted:", {
    ...data,
    submittedAt: new Date().toISOString(),
  });
  return { ok: true };
}

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!NAME_REGEX.test(name.trim())) {
      nextErrors.name = "Please enter a valid name (2–50 letters).";
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!PHONE_REGEX.test(phone.trim()) || !validatePhoneDigits(phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number (min 10 digits).";
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message =
        "Please enter a message with at least 10 characters.";
    } else if (message.trim().length > 1000) {
      nextErrors.message = "Message must be less than 1000 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      const payload = {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        message: message.trim(),
      };
      await submitContactEnquiry(payload);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.name && (
            <span className="mt-1.5 block text-xs text-destructive">
              {errors.name}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
          >
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {errors.phone && (
            <span className="mt-1.5 block text-xs text-destructive">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {errors.email && (
          <span className="mt-1.5 block text-xs text-destructive">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your travel plans, dates, destinations and group size..."
          rows={5}
          className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        {errors.message && (
          <span className="mt-1.5 block text-xs text-destructive">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
      >
        <Send className="h-4 w-4" />
        Send Enquiry
      </button>

      {submitted && (
        <p className="text-sm font-medium text-green-600">
          Thanks — your enquiry has been logged. We'll be in touch shortly.
        </p>
      )}
    </form>
  );
}
