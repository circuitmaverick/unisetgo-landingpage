import { createFileRoute } from "@tanstack/react-router";
import { useId, useState, type FormEvent } from "react";
import { Star, X, Upload, Loader2, Lock } from "lucide-react";
import {
  getReviewDraft,
  submitReviewForm,
  uploadReviewPhoto,
  type ReviewDraft,
} from "@/lib/review-form-api";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/review-form/$id")({
  loader: async ({ params }) => {
    const draft = await getReviewDraft(params.id);
    return { draft };
  },
  head: () => ({
    meta: [
      { title: "Share Your Feedback — UniSetGo" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ReviewFormPage,
});

const MAX_PHOTOS = 4;
const MAX_PHOTO_MB = 10;

function ReviewFormPage() {
  const { draft } = Route.useLoaderData();

  if (!draft) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center sm:px-8">
        <h1 className="text-2xl font-black text-foreground">
          This link isn't valid
        </h1>
        <p className="mt-2 text-muted-foreground">
          Double-check the link we sent you, or reach out and we'll send a
          fresh one.
        </p>
      </div>
    );
  }

  if (draft.clientFilled) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center sm:px-8">
        <h1 className="text-2xl font-black text-foreground">
          You've already shared your feedback
        </h1>
        <p className="mt-2 text-muted-foreground">
          Thank you — we've already received your review. There's nothing
          more to do here.
        </p>
      </div>
    );
  }

  return <ReviewForm draft={draft} />;
}

type ScaleValue = 1 | 2 | 3;

function ReviewForm({ draft }: { draft: ReviewDraft }) {
  const favouriteThingsId = useId();
  const improvementsId = useId();
  const reviewId = useId();
  const whatWeMissedId = useId();

  const [name, setName] = useState(draft.name ?? "");
  const [email, setEmail] = useState(draft.email ?? "");
  const [destination, setDestination] = useState(draft.destination ?? "");
  const [tripDuration, setTripDuration] = useState(
    draft.tripDuration != null ? String(draft.tripDuration) : "",
  );

  const [favouriteThings, setFavouriteThings] = useState<string[]>([]);
  const [satisfaction, setSatisfaction] = useState<ScaleValue | null>(null);
  const [enoughInformation, setEnoughInformation] = useState<ScaleValue | null>(null);
  const [groundTransportation, setGroundTransportation] = useState<ScaleValue | null>(null);
  const [staffHelpfulness, setStaffHelpfulness] = useState<ScaleValue | null>(null);
  const [systemRating, setSystemRating] = useState<ScaleValue | null>(null);
  const [review, setReview] = useState("");
  const [improvements, setImprovements] = useState<string[]>([]);
  const [futureChoice, setFutureChoice] = useState<boolean | null>(null);
  const [recommendation, setRecommendation] = useState<number | null>(null);
  const [whatWeMissed, setWhatWeMissed] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [rating, setRating] = useState(0);
  const [anonymous, setAnonymous] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [photoError, setPhotoError] = useState("");

  function addPhotos(files: FileList | null) {
    if (!files) return;
    setPhotoError("");
    const incoming = Array.from(files);
    const tooBig = incoming.find((f) => f.size > MAX_PHOTO_MB * 1024 * 1024);
    if (tooBig) {
      setPhotoError(`"${tooBig.name}" is over ${MAX_PHOTO_MB}MB.`);
      return;
    }
    setPhotos((prev) => {
      const combined = [...prev, ...incoming];
      if (combined.length > MAX_PHOTOS) {
        setPhotoError(`You can upload up to ${MAX_PHOTOS} photos.`);
        return combined.slice(0, MAX_PHOTOS);
      }
      return combined;
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!draft.nameLocked && !name.trim()) nextErrors.name = "Please enter your name.";
    if (!draft.emailLocked && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!draft.destinationLocked && !destination.trim()) {
      nextErrors.destination = "Please enter your destination.";
    }
    if (!draft.tripDurationLocked && !(Number(tripDuration) > 0)) {
      nextErrors.tripDuration = "Please enter the trip length in days.";
    }
    if (favouriteThings.length === 0) {
      nextErrors.favouriteThings = "Add at least one favourite thing.";
    }
    if (!satisfaction) nextErrors.satisfaction = "Please choose one.";
    if (!enoughInformation) nextErrors.enoughInformation = "Please choose one.";
    if (!groundTransportation) nextErrors.groundTransportation = "Please choose one.";
    if (!staffHelpfulness) nextErrors.staffHelpfulness = "Please choose one.";
    if (!systemRating) nextErrors.systemRating = "Please choose one.";
    if (!review.trim()) nextErrors.review = "Please share your overall feedback.";
    if (futureChoice === null) nextErrors.futureChoice = "Please choose one.";
    if (rating === 0) nextErrors.rating = "Please select a star rating.";

    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const gallery: string[] = [];
      for (const file of photos) {
        gallery.push(await uploadReviewPhoto(file));
      }

      const result = await submitReviewForm(draft.id, {
        name: draft.nameLocked ? undefined : name.trim(),
        email: draft.emailLocked ? undefined : email.trim(),
        destination: draft.destinationLocked ? undefined : destination.trim(),
        tripDuration: draft.tripDurationLocked ? undefined : Number(tripDuration),
        favouriteThings,
        satisfaction: satisfaction!,
        enoughInformation: enoughInformation!,
        groundTransportationServices: groundTransportation!,
        staffHelpfulnessProfessionalism: staffHelpfulness!,
        systemRating: systemRating!,
        review: review.trim(),
        improvements,
        futureChoice: futureChoice!,
        recommendation,
        whatWeMissed: whatWeMissed.trim() || null,
        gallery,
        rating,
        anonymous,
      });

      if (result.ok) {
        setSubmitted(true);
      } else if (result.reason === "already_submitted") {
        setSubmitError("Looks like this review was already submitted.");
      } else if (result.reason === "validation") {
        setSubmitError("Please check the highlighted fields and try again.");
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError(
        "Something went wrong sending your feedback. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md px-5 py-24 text-center sm:px-8">
        <h1 className="text-2xl font-black text-foreground">Thank you!</h1>
        <p className="mt-2 text-muted-foreground">
          Your feedback has been received. We really appreciate you taking
          the time to share it.
        </p>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <span className="bar-mark text-xs font-bold uppercase tracking-[0.22em] text-white/90">
            Share your feedback
          </span>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            Tell us about <em className="not-italic text-accent">your trip</em>.
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            A couple of minutes of your time helps us improve — and helps the
            next traveller pick the right trip.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          <Card>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                label="Your name"
                value={name}
                onChange={setName}
                locked={draft.nameLocked}
                error={errors.name}
                required
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                locked={draft.emailLocked}
                error={errors.email}
                required
              />
              <TextField
                label="Destination(s)"
                value={destination}
                onChange={setDestination}
                locked={draft.destinationLocked}
                error={errors.destination}
                required
              />
              <TextField
                label="Trip duration (in days)"
                type="number"
                value={tripDuration}
                onChange={setTripDuration}
                locked={draft.tripDurationLocked}
                displayValue={
                  draft.tripDurationLocked && draft.tripDuration != null
                    ? `${draft.tripDuration} day${draft.tripDuration === 1 ? "" : "s"}`
                    : undefined
                }
                error={errors.tripDuration}
                required
              />
            </div>
            {draft.relatedPackageLocked && draft.relatedPackageTitle && (
              <p className="mt-4 text-sm text-muted-foreground">
                Package: <span className="font-semibold text-foreground">{draft.relatedPackageTitle}</span>
              </p>
            )}
          </Card>

          <Card>
            <FieldLabel htmlFor={favouriteThingsId} required>
              What was your favourite thing / things in the trip?
            </FieldLabel>
            <TagInput
              id={favouriteThingsId}
              values={favouriteThings}
              onChange={setFavouriteThings}
              placeholder="Type one and press Enter"
            />
            {errors.favouriteThings && <FieldError>{errors.favouriteThings}</FieldError>}
          </Card>

          <Card>
            <ScaleChoice
              label="How satisfied were you with the booking process?"
              required
              value={satisfaction}
              onChange={setSatisfaction}
              options={[
                { value: 3, label: "Very satisfied" },
                { value: 2, label: "Satisfied" },
                { value: 1, label: "Neutral" },
              ]}
              error={errors.satisfaction}
            />
          </Card>

          <Card>
            <ScaleChoice
              label="Did you receive enough information about your trip prior to departure?"
              required
              value={enoughInformation}
              onChange={setEnoughInformation}
              options={[
                { value: 3, label: "Yes" },
                { value: 2, label: "Somewhat" },
                { value: 1, label: "No" },
              ]}
              error={errors.enoughInformation}
            />
          </Card>

          <Card>
            <ScaleChoice
              label="How was the experience with the ground transportation services? Punctuality and more?"
              required
              value={groundTransportation}
              onChange={setGroundTransportation}
              options={[
                { value: 3, label: "Excellent" },
                { value: 2, label: "Good" },
                { value: 1, label: "Can Improve" },
              ]}
              error={errors.groundTransportation}
            />
          </Card>

          <Card>
            <ScaleChoice
              label="How would you rate the ground staff's professionalism and helpfulness — especially our guides?"
              required
              value={staffHelpfulness}
              onChange={setStaffHelpfulness}
              options={[
                { value: 3, label: "Excellent" },
                { value: 2, label: "Good" },
                { value: 1, label: "Neutral" },
              ]}
              error={errors.staffHelpfulness}
            />
          </Card>

          <Card>
            <ScaleChoice
              label="How good do you feel was the system as a whole to support your tour — includes backend team?"
              required
              value={systemRating}
              onChange={setSystemRating}
              options={[
                { value: 3, label: "Excellent" },
                { value: 2, label: "Good" },
                { value: 1, label: "Neutral" },
              ]}
              error={errors.systemRating}
            />
          </Card>

          <Card>
            <FieldLabel htmlFor={reviewId} required>
              Overall experience feedback
            </FieldLabel>
            <textarea
              id={reviewId}
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={5}
              placeholder="Tell us about your overall experience..."
              className={inputClass}
            />
            {errors.review && <FieldError>{errors.review}</FieldError>}
          </Card>

          <Card>
            <FieldLabel htmlFor={improvementsId}>Any points for improvements</FieldLabel>
            <TagInput
              id={improvementsId}
              values={improvements}
              onChange={setImprovements}
              placeholder="Type one and press Enter"
            />
          </Card>

          <Card>
            <FieldLabel required>Will UniSetGo be your choice in future also?</FieldLabel>
            <div className="mt-2 flex gap-3">
              <YesNoButton label="Yes" active={futureChoice === true} onClick={() => setFutureChoice(true)} />
              <YesNoButton label="No" active={futureChoice === false} onClick={() => setFutureChoice(false)} />
            </div>
            {errors.futureChoice && <FieldError>{errors.futureChoice}</FieldError>}
          </Card>

          <Card>
            <FieldLabel>How likely are you to recommend us?</FieldLabel>
            <LinearScale value={recommendation} onChange={setRecommendation} />
          </Card>

          <Card>
            <FieldLabel htmlFor={whatWeMissedId}>
              Anything else we missed — and you'd like to let us know
            </FieldLabel>
            <textarea
              id={whatWeMissedId}
              value={whatWeMissed}
              onChange={(e) => setWhatWeMissed(e.target.value)}
              rows={3}
              className={inputClass}
            />
          </Card>

          <Card>
            <FieldLabel>Share us some memories to cherish — your best shots</FieldLabel>
            <p className="mb-3 text-xs text-muted-foreground">
              Upload up to {MAX_PHOTOS} photos. Max {MAX_PHOTO_MB}MB per file.
            </p>
            <PhotoPicker photos={photos} onAdd={addPhotos} onRemove={(i) => setPhotos((p) => p.filter((_, j) => j !== i))} />
            {photoError && <FieldError>{photoError}</FieldError>}
          </Card>

          <Card>
            <FieldLabel required>Overall rating</FieldLabel>
            <StarRating value={rating} onChange={setRating} />
            {errors.rating && <FieldError>{errors.rating}</FieldError>}
          </Card>

          <Card>
            <label className="flex items-start gap-3">
              <Checkbox
                checked={anonymous}
                onCheckedChange={(v) => setAnonymous(v === true)}
                className="mt-0.5"
              />
              <span className="text-sm text-foreground">
                Show my review anonymously (your name won't be shown publicly)
              </span>
            </label>
          </Card>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            {submitting ? "Submitting..." : "Submit feedback"}
          </button>
          {submitError && <FieldError>{submitError}</FieldError>}
        </form>
      </section>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
      {children}
    </div>
  );
}

function FieldLabel({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-bold text-foreground"
    >
      {children} {required && <span className="text-destructive">*</span>}
    </label>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-destructive">{children}</p>;
}

function TextField({
  label,
  value,
  onChange,
  locked,
  displayValue,
  error,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  locked?: boolean;
  displayValue?: string;
  error?: string;
  required?: boolean;
  type?: string;
}) {
  const id = useId();
  return (
    <div>
      <FieldLabel htmlFor={id} required={required}>
        {label}
      </FieldLabel>
      {locked ? (
        <p
          id={id}
          className="flex items-center gap-2 rounded-xl border border-dashed border-border bg-muted px-4 py-3 text-sm text-muted-foreground"
        >
          <Lock className="h-3.5 w-3.5 shrink-0" />
          {displayValue ?? value}
        </p>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function TagInput({
  id,
  values,
  onChange,
  placeholder,
}: {
  id?: string;
  values: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const [draft, setDraft] = useState("");

  function commit() {
    const trimmed = draft.trim();
    if (trimmed && !values.includes(trimmed)) onChange([...values, trimmed]);
    setDraft("");
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          id={id}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit();
            }
          }}
          placeholder={placeholder}
          className={inputClass}
        />
        <button
          type="button"
          onClick={commit}
          className="shrink-0 rounded-xl bg-secondary px-4 text-sm font-semibold text-foreground hover:bg-secondary/70"
        >
          Add
        </button>
      </div>
      {values.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {values.map((v, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm text-foreground"
            >
              {v}
              <button
                type="button"
                onClick={() => onChange(values.filter((_, j) => j !== i))}
                aria-label={`Remove ${v}`}
                className="text-muted-foreground hover:text-destructive"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ScaleChoice<T extends number>({
  label,
  value,
  onChange,
  options,
  error,
  required,
}: {
  label: string;
  value: T | null;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              value === o.value
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function YesNoButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-6 py-2 text-sm font-semibold transition ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary"
      }`}
    >
      {label}
    </button>
  );
}

function LinearScale({ value, onChange }: { value: number | null; onChange: (v: number | null) => void }) {
  return (
    <div className="mt-2 flex items-center gap-2 overflow-x-auto">
      <span className="shrink-0 text-xs text-muted-foreground">Not Likely</span>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(value === n ? null : n)}
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border text-sm font-semibold transition ${
            value === n
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary"
          }`}
        >
          {n}
        </button>
      ))}
      <span className="shrink-0 text-xs text-muted-foreground">Definitely</span>
    </div>
  );
}

function StarRating({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="mt-2 flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} star${n === 1 ? "" : "s"}`}
          className="text-accent"
        >
          <Star className={`h-8 w-8 ${n <= value ? "fill-current" : "opacity-30"}`} />
        </button>
      ))}
    </div>
  );
}

function PhotoPicker({
  photos,
  onAdd,
  onRemove,
}: {
  photos: File[];
  onAdd: (files: FileList | null) => void;
  onRemove: (index: number) => void;
}) {
  return (
    <div>
      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border py-6 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary">
        <Upload className="h-4 w-4" />
        Choose photos
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            onAdd(e.target.files);
            e.target.value = "";
          }}
        />
      </label>
      {photos.length > 0 && (
        <div className="mt-3 grid grid-cols-4 gap-2">
          {photos.map((file, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-secondary">
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => onRemove(i)}
                aria-label={`Remove ${file.name}`}
                className="absolute right-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-black/60 text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
