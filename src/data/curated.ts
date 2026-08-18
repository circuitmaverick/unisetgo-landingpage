import { PACKAGES, type Package } from "./packages";

// Slugs curated as being well-suited for senior citizens (gentler pace, comfort-first)
const SENIOR_SLUGS = [
  "uzbekistan-silk-road",
  "armenia-ancient-highlands",
  "russia-moscow-st-petersburg",
  "azerbaijan-baku-highlights",
];

// Slugs curated as ideal for newlyweds / honeymoon couples
const HONEYMOON_SLUGS = [
  "japan-golden-route",
  "georgia-caucasus-discovery",
  "kazakhstan-almaty-astana",
  "china-classic-circuit",
];

function pick(slugs: string[]): Package[] {
  return slugs
    .map((s) => PACKAGES.find((p) => p.slug === s))
    .filter((p): p is Package => Boolean(p));
}

export const seniorPackages = (): Package[] => pick(SENIOR_SLUGS);
export const honeymoonPackages = (): Package[] => pick(HONEYMOON_SLUGS);
