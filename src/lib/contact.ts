import { supabase } from "./supabase";

// Central contact config. Swap these with real values when available.
export const CONTACT = {
  brand: "UniSetGo",
  tagline: "Explore Beyond Boundaries",
  phoneDisplay: "+91 94991 62350",
  phoneE164: "9499162350",
  email: "unisetgo@gmail.com",
  bookingsEmail: "bookings@unisetgo.com",
  address: "UniSetGo, Chandigarh Tricity, India",
  instagram: "https://instagram.com/unisetgo",
  linkedin: "https://www.linkedin.com/company/unisetgo",
  facebook:
    "https://www.facebook.com/profile.php?id=100093573855381&mibextid=ZbWKwL",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(message)}`;
}

export function mailLink(
  subject: string,
  body = "",
  to: string = CONTACT.email,
): string {
  const q = new URLSearchParams({ subject, body }).toString();
  return `mailto:${to}?${q}`;
}

// Shared between the contact page's message form and the per-package
// enquiry form on package detail pages, so validation stays identical.
export const NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PHONE_REGEX = /^[\+]?[0-9\s\-\(\)]{10,20}$/;

export function validatePhoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export async function submitContactEnquiry(data: {
  name: string;
  phone: string;
  email: string;
  message: string;
  packageSlug?: string;
}) {
  const { error } = await supabase.from("messages").insert({
    name: data.name,
    email: data.email,
    phone_number: data.phone,
    message: data.message,
    interested_package: data.packageSlug ?? null,
  });

  if (error) {
    throw error;
  }

  return { ok: true };
}
