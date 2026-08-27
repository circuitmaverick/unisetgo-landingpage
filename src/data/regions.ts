import centralAsia from "@/assets/region-central-asia.jpg";
import southeastAsia from "@/assets/region-southeast-asia.jpg";
import europe from "@/assets/region-europe.jpg";
import middleEast from "@/assets/region-middle-east.jpg";
import africa from "@/assets/region-africa.jpg";
import australia from "@/assets/region-australia.jpg";
import america from "@/assets/region-americas.jpg";
import domestic from "@/assets/region-domestic.jpg";

export type RegionSlug =
  | "central-asia"
  | "southeast-asia"
  | "europe"
  | "middle-east"
  | "africa"
  | "australia-nz"
  | "america"
  | "domestic";

export type Region = {
  slug: RegionSlug;
  name: string;
  kind: "international" | "domestic";
  tagline: string;
  image: string;
  subRegions?: { slug: string; name: string }[];
};

export const REGIONS: Region[] = [
  {
    slug: "central-asia",
    name: "Central Asia",
    kind: "international",
    tagline: "Silk Road cities, snow peaks & neon skylines",
    image: centralAsia,
    subRegions: [
      { slug: "russia", name: "Russia" },
      { slug: "cis", name: "CIS Countries" },
      { slug: "china", name: "China" },
      { slug: "japan", name: "Japan" },
    ],
  },
  {
    slug: "southeast-asia",
    name: "South East Asia",
    kind: "international",
    tagline: "Turquoise waters, warm welcomes",
    image: southeastAsia,
  },
  {
    slug: "europe",
    name: "Europe",
    kind: "international",
    tagline: "Old-world charm, new memories",
    image: europe,
  },
  {
    slug: "middle-east",
    name: "Middle East",
    kind: "international",
    tagline: "Desert nights, gilded skylines",
    image: middleEast,
  },
  {
    slug: "africa",
    name: "Africa",
    kind: "international",
    tagline: "Safari sunsets & wild wonder",
    image: africa,
  },
  {
    slug: "australia-nz",
    name: "Australia & NZ",
    kind: "international",
    tagline: "Harbour cities & wide open wild",
    image: australia,
  },
  {
    slug: "america",
    name: "America",
    kind: "international",
    tagline: "From Grand Canyon to Manhattan",
    image: america,
  },
  {
    slug: "domestic",
    name: "Domestic India",
    kind: "domestic",
    tagline: "Discover the many Indias",
    image: domestic,
    subRegions: [
      { slug: "leh-ladakh", name: "Leh & Ladakh" },
      { slug: "kashmir", name: "Kashmir" },
      { slug: "himachal", name: "Himachal" },
      { slug: "uttarakhand", name: "Uttarakhand" },
      { slug: "goa", name: "Goa" },
      { slug: "gujarat", name: "Gujarat" },
      { slug: "maharashtra", name: "Maharashtra" },
      { slug: "andamans", name: "Andamans" },
      { slug: "kerala", name: "Kerala" },
      { slug: "tamil-nadu", name: "Tamil Nadu" },
      { slug: "pondicherry", name: "Pondicherry" },
      { slug: "lakshadweep", name: "Lakshadweep" },
      { slug: "meghalaya", name: "Meghalaya" },
      { slug: "sikkim", name: "Sikkim" },
      { slug: "darjeeling", name: "Darjeeling" },
      { slug: "arunachal", name: "Arunachal Pradesh" },
      { slug: "char-dhaam", name: "Char Dhaam" },
    ],
  },
];

export function regionBySlug(slug: string): Region | undefined {
  return REGIONS.find((r) => r.slug === slug);
}
