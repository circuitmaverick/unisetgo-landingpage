//#region node_modules/.nitro/vite/services/ssr/assets/regions-2tGm7cEL.js
var region_central_asia_default = "/assets/region-central-asia-CFu7O2YG.jpg";
var region_southeast_asia_default = "/assets/region-southeast-asia-rGhASdN4.jpg";
var REGIONS = [
	{
		slug: "central-asia",
		name: "Central Asia",
		kind: "international",
		tagline: "Silk Road cities, snow peaks & neon skylines",
		image: region_central_asia_default,
		subRegions: [
			{
				slug: "russia",
				name: "Russia"
			},
			{
				slug: "cis",
				name: "CIS Countries"
			},
			{
				slug: "china",
				name: "China"
			},
			{
				slug: "japan",
				name: "Japan"
			}
		]
	},
	{
		slug: "southeast-asia",
		name: "South East Asia",
		kind: "international",
		tagline: "Turquoise waters, warm welcomes",
		image: region_southeast_asia_default
	},
	{
		slug: "saarc",
		name: "SAARC Nations",
		kind: "international",
		tagline: "South Asian Association for Regional Cooperation",
		image: region_southeast_asia_default
	},
	{
		slug: "europe",
		name: "Europe",
		kind: "international",
		tagline: "Old-world charm, new memories",
		image: "/assets/region-europe-DzpUTEcT.jpg"
	},
	{
		slug: "middle-east",
		name: "Middle East",
		kind: "international",
		tagline: "Desert nights, gilded skylines",
		image: "/assets/region-middle-east-ucZE3P_n.jpg"
	},
	{
		slug: "africa",
		name: "Africa",
		kind: "international",
		tagline: "Safari sunsets & wild wonder",
		image: "/assets/region-africa-1hbisWnL.jpg"
	},
	{
		slug: "australia-nz",
		name: "Australia & NZ",
		kind: "international",
		tagline: "Harbour cities & wide open wild",
		image: "/assets/region-australia--c4QNMfg.jpg"
	},
	{
		slug: "america",
		name: "America",
		kind: "international",
		tagline: "From Grand Canyon to Manhattan",
		image: "/assets/region-americas-CNkxNpel.jpg"
	},
	{
		slug: "domestic",
		name: "Domestic India",
		kind: "domestic",
		tagline: "Discover the many Indias",
		image: "/assets/region-domestic-Bd7Q6WFG.jpg",
		subRegions: [
			{
				slug: "leh-ladakh",
				name: "Leh & Ladakh"
			},
			{
				slug: "kashmir",
				name: "Kashmir"
			},
			{
				slug: "himachal",
				name: "Himachal"
			},
			{
				slug: "uttarakhand",
				name: "Uttarakhand"
			},
			{
				slug: "goa",
				name: "Goa"
			},
			{
				slug: "gujarat",
				name: "Gujarat"
			},
			{
				slug: "maharashtra",
				name: "Maharashtra"
			},
			{
				slug: "andamans",
				name: "Andamans"
			},
			{
				slug: "kerala",
				name: "Kerala"
			},
			{
				slug: "tamil-nadu",
				name: "Tamil Nadu"
			},
			{
				slug: "pondicherry",
				name: "Pondicherry"
			},
			{
				slug: "lakshadweep",
				name: "Lakshadweep"
			},
			{
				slug: "meghalaya",
				name: "Meghalaya"
			},
			{
				slug: "sikkim",
				name: "Sikkim"
			},
			{
				slug: "darjeeling",
				name: "Darjeeling"
			},
			{
				slug: "arunachal",
				name: "Arunachal Pradesh"
			},
			{
				slug: "char-dhaam",
				name: "Char Dhaam"
			}
		]
	}
];
function regionBySlug(slug) {
	return REGIONS.find((r) => r.slug === slug);
}
//#endregion
export { regionBySlug as n, REGIONS as t };
