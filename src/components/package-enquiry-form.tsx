import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import {
  NAME_REGEX,
  EMAIL_REGEX,
  PHONE_REGEX,
  validatePhoneDigits,
  submitContactEnquiry,
} from "@/lib/contact";

const inputClass =
  "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";
const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";

/**
 * Same validation and `messages` insert as the contact page's form, minus
 * the package picker — the related package is always this page's own slug.
 */
export function PackageEnquiryForm({
  packageSlug,
  idPrefix,
}: {
  packageSlug: string;
  idPrefix: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");

    if (Object.keys(nextErrors).length === 0) {
      setSubmitting(true);
      try {
        await submitContactEnquiry({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          message: message.trim(),
          packageSlug,
        });
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      } catch {
        setSubmitError(
          "Something went wrong sending your enquiry. Please try again or reach us on WhatsApp.",
        );
      } finally {
        setSubmitting(false);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor={`${idPrefix}-name`} className={labelClass}>
          Name
        </label>
        <input
          id={`${idPrefix}-name`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className={inputClass}
        />
        {errors.name && (
          <span className="mt-1.5 block text-xs text-destructive">
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelClass}>
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={inputClass}
        />
        {errors.email && (
          <span className="mt-1.5 block text-xs text-destructive">
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
          Contact Number
        </label>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 98765 43210"
          className={inputClass}
        />
        {errors.phone && (
          <span className="mt-1.5 block text-xs text-destructive">
            {errors.phone}
          </span>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelClass}>
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us your dates, group size and any questions about this trip..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
        {errors.message && (
          <span className="mt-1.5 block text-xs text-destructive">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Sending..." : "Send Enquiry"}
      </button>

      {submitted && (
        <p className="text-sm font-medium text-green-600">
          Thanks — your enquiry has been logged. We'll be in touch shortly.
        </p>
      )}
      {submitError && (
        <p className="text-sm font-medium text-destructive">{submitError}</p>
      )}
    </form>
  );
}
