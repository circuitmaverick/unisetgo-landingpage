import { supabase } from "./supabase";

const FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/review-form`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export type ReviewDraft = {
  id: string;
  clientFilled: boolean;
  name: string | null;
  nameLocked: boolean;
  email: string | null;
  emailLocked: boolean;
  destination: string | null;
  destinationLocked: boolean;
  tripDuration: number | null;
  tripDurationLocked: boolean;
  relatedPackageTitle: string | null;
  relatedPackageLocked: boolean;
};

export type ReviewSubmission = {
  name?: string;
  email?: string;
  destination?: string;
  tripDuration?: number;
  favouriteThings: string[];
  satisfaction: 1 | 2 | 3;
  enoughInformation: 1 | 2 | 3;
  groundTransportationServices: 1 | 2 | 3;
  staffHelpfulnessProfessionalism: 1 | 2 | 3;
  systemRating: 1 | 2 | 3;
  review: string;
  improvements: string[];
  futureChoice: boolean;
  recommendation: number | null;
  whatWeMissed: string | null;
  gallery: { url: string; public: boolean }[];
  rating: number;
  anonymous: boolean;
};

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: "already_submitted" | "not_found" | "invalid" }
  | { ok: false; reason: "validation"; fields: Record<string, string> };

function authHeaders() {
  return {
    Authorization: `Bearer ${ANON_KEY}`,
    apikey: ANON_KEY,
  };
}

/** Returns null for both "not found" and "invalid id" — the page shows the
 * same friendly not-found state either way. */
export async function getReviewDraft(id: string): Promise<ReviewDraft | null> {
  const res = await fetch(`${FUNCTION_URL}?id=${encodeURIComponent(id)}`, {
    headers: authHeaders(),
  });
  if (res.status === 404 || res.status === 400) return null;
  if (!res.ok) throw new Error("Failed to load review");
  return res.json();
}

export async function submitReviewForm(
  id: string,
  payload: ReviewSubmission,
): Promise<SubmitResult> {
  const res = await fetch(FUNCTION_URL, {
    method: "POST",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify({ id, ...payload }),
  });

  if (res.ok) return { ok: true };

  const body = await res.json().catch(() => ({}) as Record<string, unknown>);
  if (res.status === 409) return { ok: false, reason: "already_submitted" };
  if (res.status === 404) return { ok: false, reason: "not_found" };
  if (res.status === 422) {
    return {
      ok: false,
      reason: "validation",
      fields: (body.fields as Record<string, string>) ?? {},
    };
  }
  return { ok: false, reason: "invalid" };
}

export async function uploadReviewPhoto(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from("reviews_gallery")
    .upload(path, file, { contentType: file.type });
  if (error) throw error;
  const { data } = supabase.storage.from("reviews_gallery").getPublicUrl(path);
  return data.publicUrl;
}
