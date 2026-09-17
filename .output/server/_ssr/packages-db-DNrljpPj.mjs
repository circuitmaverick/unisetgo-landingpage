import { t as supabase } from "./supabase-BIUzkaSY.mjs";
import { n as withCache, t as SEVEN_DAYS_MS } from "./browser-cache-C8xCvnar.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/packages-db-DNrljpPj.js
function mapRegionRow(row, subRegions) {
	return {
		slug: row.slug,
		name: row.name,
		kind: row.kind,
		tagline: row.tag,
		image: row.image,
		subRegions: subRegions.filter((s) => s.region_slug === row.slug).map((s) => ({
			slug: s.sub_region_slug,
			name: s.name
		}))
	};
}
async function getRegions() {
	return withCache("regions", SEVEN_DAYS_MS, async () => {
		const [regionsRes, subRegionsRes] = await Promise.all([supabase.from("regions").select("*"), supabase.from("sub_regions").select("*")]);
		if (regionsRes.error) throw regionsRes.error;
		if (subRegionsRes.error) throw subRegionsRes.error;
		const subRegions = subRegionsRes.data ?? [];
		return (regionsRes.data ?? []).map((r) => mapRegionRow(r, subRegions));
	});
}
async function getRegionBySlug(slug) {
	return (await getRegions()).find((r) => r.slug === slug);
}
function mapPackageRow(row, regionName, ratingInfo) {
	return {
		slug: row.slug,
		title: row.title,
		region: row.region,
		regionName,
		subRegion: row.sub_region,
		groupTag: row.group_tag,
		country: row.country,
		days: row.days,
		nights: row.nights,
		priceFrom: row.price_from,
		heroImage: row.hero_image,
		gallery: row.gallery ?? [],
		tripType: row.trip_type,
		summary: row.summary,
		overview: row.overview,
		rating: ratingInfo?.avg ?? 0,
		reviewCount: ratingInfo?.count ?? 0
	};
}
/**
* One review query, aggregated client-side into a per-package {avg, count}
* — cheaper than one query per package. Only approved+visible reviews count
* (also enforced by RLS), matching the rule everywhere ratings are shown.
*/
async function getPackageRatings() {
	const rows = await withCache("package-ratings", SEVEN_DAYS_MS, async () => {
		const { data, error } = await supabase.from("reviews").select("related_package, rating").eq("visibility", true).eq("approved", true).not("related_package", "is", null);
		if (error) throw error;
		const sums = /* @__PURE__ */ new Map();
		for (const row of data ?? []) {
			const slug = row.related_package;
			if (!slug || row.rating == null) continue;
			const entry = sums.get(slug) ?? {
				sum: 0,
				count: 0
			};
			entry.sum += row.rating;
			entry.count += 1;
			sums.set(slug, entry);
		}
		return Array.from(sums, ([slug, { sum, count }]) => ({
			slug,
			avg: sum / count,
			count
		}));
	});
	return new Map(rows.map((r) => [r.slug, {
		avg: r.avg,
		count: r.count
	}]));
}
async function getPackages() {
	return withCache("packages:all", SEVEN_DAYS_MS, async () => {
		const { data, error } = await supabase.from("packages").select("*").eq("published", true);
		if (error) throw error;
		const [regions, ratings] = await Promise.all([getRegions(), getPackageRatings()]);
		const regionNameBySlug = new Map(regions.map((r) => [r.slug, r.name]));
		return (data ?? []).map((row) => mapPackageRow(row, regionNameBySlug.get(row.region) ?? row.region, ratings.get(row.slug)));
	});
}
var CURATED_TABLES = {
	honeymoon: "honeymoon_packages",
	seniorCitizen: "senior_citizen_packages",
	golf: "golf_packages"
};
async function getCuratedPackages(kind) {
	return withCache(`curated-packages:${kind}`, SEVEN_DAYS_MS, async () => {
		const { data, error } = await supabase.from(CURATED_TABLES[kind]).select("package");
		if (error) throw error;
		const slugs = new Set((data ?? []).map((row) => row.package));
		return (await getPackages()).filter((p) => slugs.has(p.slug));
	});
}
var getHoneymoonPackages = () => getCuratedPackages("honeymoon");
var getSeniorCitizenPackages = () => getCuratedPackages("seniorCitizen");
var getGolfPackages = () => getCuratedPackages("golf");
async function getPackageDetail(region, slug) {
	return await withCache(`package-detail:${region}:${slug}`, 6048e5, async () => {
		const { data, error } = await supabase.from("packages").select(`*,
          itineraries(day, title, itinerary),
          packages_highlights(highlights(highlight)),
          packages_inclusions(inclusions(inclusion)),
          packages_exclusions(exclusions(exclusion))`).eq("published", true).eq("region", region).eq("slug", slug).maybeSingle();
		if (error) throw error;
		if (!data) return null;
		const row = data;
		const regionName = (await getRegions()).find((r) => r.slug === row.region)?.name ?? row.region;
		const { data: reviewRows, error: reviewsError } = await supabase.from("reviews").select("id, name, anonymous, rating, review, gallery, created_at").eq("related_package", slug).eq("visibility", true).eq("approved", true).order("created_at", { ascending: false });
		if (reviewsError) throw reviewsError;
		const reviews = (reviewRows ?? []).map((r) => ({
			id: r.id,
			name: r.anonymous ? "Anonymous" : r.name || "Anonymous",
			rating: r.rating ?? 0,
			review: r.review ?? "",
			images: (r.gallery ?? []).filter((photo) => photo.public).map((photo) => photo.url),
			createdAt: r.created_at
		}));
		const reviewCount = reviews.length;
		return {
			...mapPackageRow(row, regionName, {
				avg: reviewCount ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount : 0,
				count: reviewCount
			}),
			itinerary: [...row.itineraries].sort((a, b) => a.day - b.day).map((i) => ({
				day: i.day,
				title: i.title,
				detail: i.itinerary
			})),
			highlights: row.packages_highlights.map((h) => h.highlights?.highlight).filter((h) => Boolean(h)),
			inclusions: row.packages_inclusions.map((i) => i.inclusions?.inclusion).filter((i) => Boolean(i)),
			exclusions: row.packages_exclusions.map((e) => e.exclusions?.exclusion).filter((e) => Boolean(e)),
			reviews
		};
	}) ?? void 0;
}
//#endregion
export { getRegionBySlug as a, getPackages as i, getHoneymoonPackages as n, getRegions as o, getPackageDetail as r, getSeniorCitizenPackages as s, getGolfPackages as t };
