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
