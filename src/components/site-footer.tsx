import { Link } from "@tanstack/react-router";
import { BrandLogo } from "./brand-logo";
import { CONTACT, mailLink, waLink } from "@/lib/contact";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Heart,
  Facebook,
} from "lucide-react";
import { REGIONS } from "@/data/regions";

import bigLogo from "@/assets/branding/logo_big.png";
import { FormEvent, useState } from "react";

const NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[\+]?[0-9\s\-\(\)]{10,20}$/;

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-secondary text-primary">
      <div className="border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-5 pt-6 pb-12 sm:px-8">
          <NewsletterForm />
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          {/* <BrandLogo /> */}
          <img
            src={bigLogo}
            alt="UniSetGo"
            width={150}
            className="mb-2 -translate-x-3"
          />
          {/* <img
            src={"@/assets/branding/logo_big.png"}
            alt="UniSetGo"
            width={250}
            className="mb-2"
          /> */}

          <p className="max-w-sm text-sm text-primary/80 font-medium">
            A corporate travel studio crafting bespoke journeys for teams,
            founders and families — engineered end to end so you can travel like
            a guest, not a planner.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-ring hover:bg-ring/20 transition-colors duration-200"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-ring hover:bg-ring/20 transition-colors duration-200"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-ring hover:bg-ring/20 transition-colors duration-200"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Destinations
          </h4>
          <ul className="space-y-2 text-sm text-primary/80 font-medium">
            {REGIONS.slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link
                  to="/packages/$region"
                  params={{ region: r.slug }}
                  className="hover:text-accent"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Reach us
          </h4>
          <ul className="space-y-3 text-sm text-primary/80 font-medium">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />{" "}
              <a href={`tel:+${CONTACT.phoneE164}`}>{CONTACT.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />{" "}
              <a href={mailLink("Hello from your website")}>{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />{" "}
              <span>{CONTACT.address}</span>
            </li>
          </ul>
          <a
            href={waLink("Hi UniSetGo!")}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-95"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-primary/60 font-medium sm:flex-row sm:px-8">
          <span>
            © {new Date().getFullYear()} UniSetGo. All rights reserved.
          </span>
          <span>Made with ❤️ by Akash</span>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validatePhoneDigits(value: string) {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  function handleSubmit(e: FormEvent) {
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

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      console.log("Newsletter subscription:", {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        subscribedAt: new Date().toISOString(),
      });
      setName("");
      setEmail("");
      setPhone("");
    } else {
      console.log("Newsletter validation errors:", nextErrors);
    }
  }

  return (
    <div className="rounded-2xl bg-white/5 p-6 sm:p-8">
      <div className="flex flex-col gap-4 justify-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-primary text-center">
            Claim your free copy of Tourism Guide
          </h1>
          <p className="text-lg text-primary/70 text-center">
            Sign up now to get latest updates on travel places
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="newsletter-name"
                className="mb-1.5 block text-xs font-medium text-primary/80"
              >
                Name
              </label>
              <input
                id="newsletter-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-primary/10 bg-primary/10 px-3.5 py-2.5 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {errors.name && (
                <span className="mt-1.5 block text-xs text-accent">
                  {errors.name}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="newsletter-email"
                className="mb-1.5 block text-xs font-medium text-primary/80"
              >
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-primary/10 bg-primary/10 px-3.5 py-2.5 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {errors.email && (
                <span className="mt-1.5 block text-xs text-accent">
                  {errors.email}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="newsletter-phone"
                className="mb-1.5 block text-xs font-medium text-primary/80"
              >
                Phone Number
              </label>
              <input
                id="newsletter-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-lg border border-primary/10 bg-primary/10 px-3.5 py-2.5 text-sm text-primary placeholder:text-primary/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              {errors.phone && (
                <span className="mt-1.5 block text-xs text-accent">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-95 "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
