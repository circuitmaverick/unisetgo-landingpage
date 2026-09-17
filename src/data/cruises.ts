import cordelia from "@/assets/cruises/cruise-cordelia.jpg";
import gentingdream from "@/assets/cruises/cruise-gentingdream.jpg";
import royalcaribbean from "@/assets/cruises/cruise-royalcaribbean.jpg";
import ncl from "@/assets/cruises/cruise-ncl.jpeg";
import msc from "@/assets/cruises/cruise-msc.jpg";
import costa from "@/assets/cruises/cruise-costa.jpg";
import disney from "@/assets/cruises/cruise-disney.jpg";

export type CruiseReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
};

export type CruiseItineraryDay = {
  day: number;
  title: string;
  detail: string;
};

export type CruiseDetail = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  overview: string;
  regions: string[];
  ports: string[];
  image: string;
  gallery: string[];
  badge?: string;
  duration: string;
  priceFrom: number;
  cabinTypes: string[];
  highlights: string[];
  itinerary: CruiseItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  reviews: CruiseReview[];
};

function rating(reviews: CruiseReview[]): number {
  if (reviews.length === 0) return 0;
  return reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
}

export const CRUISES: CruiseDetail[] = [
  {
    slug: "cordelia-cruises",
    name: "Cordelia Cruises",
    tagline: "India's own premium cruise line",
    blurb:
      "Sail from Mumbai and Chennai to Goa, Lakshadweep and Sri Lanka aboard India's flagship cruise experience — desi flavours, world-class entertainment.",
    overview:
      "Cordelia Cruises is India's own premium cruise line, sailing the Empress out of Mumbai and Chennai. Expect Bollywood-scale entertainment, an all-vegetarian and Jain-friendly dining option alongside global cuisine, a spa, casino and kids' zone — all wrapped in a distinctly Indian sense of hospitality. It's the easiest way to experience a cruise holiday without a long-haul flight first.",
    regions: ["Mumbai", "Dubai", "Goa", "Maldives", "Colombo"],
    ports: ["Mumbai", "New Mangalore", "Goa", "Kochi", "Colombo", "Chennai"],
    image: cordelia,
    gallery: [cordelia],
    badge: "Made in India",
    duration: "2–5 nights",
    priceFrom: 16999,
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite"],
    highlights: [
      "Bollywood and Broadway-style live shows every night",
      "All-vegetarian, Jain and Swaminarayan-friendly dining options",
      "Casino, spa and infinity pool deck",
      "Kids' club and teen zone with supervised activities",
      "No-flight cruise holiday — board from Mumbai or Chennai",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Mumbai",
        detail:
          "Board the Empress at Mumbai Cruise Terminal by early afternoon. Settle into your cabin, explore the ship and catch the sail-away party on the pool deck as we set sail in the evening.",
      },
      {
        day: 2,
        title: "Day at Sea",
        detail:
          "A full day to enjoy the ship — deck games, the spa, live music, a comedy show and a themed dinner. Great day to try the specialty restaurants.",
      },
      {
        day: 3,
        title: "Goa",
        detail:
          "Dock in Goa for the day. Take an optional shore excursion to a beach shack or the old churches of Old Goa, or simply relax on deck while the ship is in port.",
      },
      {
        day: 4,
        title: "Day at Sea / New Mangalore",
        detail:
          "Depending on the sailing, either a relaxed sea day or a stop at New Mangalore with an optional temple and coastal tour.",
      },
      {
        day: 5,
        title: "Disembarkation — Mumbai",
        detail:
          "Breakfast on board before disembarking at Mumbai Cruise Terminal by mid-morning.",
      },
    ],
    inclusions: [
      "Cruise fare for the full itinerary in your selected cabin category",
      "All main meals (breakfast, lunch, dinner) at the main dining room",
      "Onboard entertainment — live shows, comedy nights, deck parties",
      "Access to pool deck, gym, kids' club and casino (18+)",
      "Port charges and government taxes",
    ],
    exclusions: [
      "Flights or trains to/from the embarkation port",
      "Shore excursions at ports of call",
      "Specialty restaurant dining and alcoholic beverages",
      "Spa treatments and salon services",
      "Travel insurance and gratuities",
    ],
    reviews: [
      {
        id: "cordelia-1",
        name: "Ritika Sharma",
        rating: 5,
        review:
          "First cruise for our family and Cordelia made it so easy — no flights, boarded in Mumbai itself. The evening shows were fantastic and food options for vegetarians were great.",
      },
      {
        id: "cordelia-2",
        name: "Vivek Nair",
        rating: 4,
        review:
          "Great value short getaway. Goa stop was the highlight. Cabins are compact but comfortable. UniSetGo handled our booking and upgrade smoothly.",
      },
    ],
  },
  {
    slug: "genting-dream-cruises",
    name: "Genting Dream Cruises",
    tagline: "Asia's leading luxury cruise",
    blurb:
      "Sail Singapore, Malaysia, Thailand and beyond aboard Genting's Dream and World-class ships — spa villas, waterparks and Michelin-starred dining.",
    overview:
      "Genting Dream Cruises (Resorts World / Dream Cruises) redefines luxury cruising in Asia, with ships designed around indulgence — private spa villas, a two-storey waterpark, celebrity-chef restaurants and one of the largest casinos at sea in the region. Perfect for a Southeast Asia getaway that mixes island time with a floating resort.",
    regions: ["Singapore", "Melaka/Kuala Lumpur", "Penang", "Phuket"],
    ports: ["Singapore", "Port Klang", "Penang", "Phuket", "Langkawi"],
    image: gentingdream,
    gallery: [gentingdream],
    duration: "3–7 nights",
    priceFrom: 34999,
    cabinTypes: ["Ocean View", "Balcony", "Palace Suite", "Spa Villa"],
    highlights: [
      "Two-storey waterpark and rock-climbing wall",
      "Michelin-starred and celebrity-chef restaurants onboard",
      "Zouk nightclub at sea and a full-scale theatre",
      "Spa villas with private jacuzzi and ocean views",
      "Duty-free shopping and one of Asia's largest cruise casinos",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Singapore",
        detail:
          "Board at Marina Bay Cruise Centre Singapore. Explore the ship's many restaurants and lounges before sailing out at night.",
      },
      {
        day: 2,
        title: "Day at Sea",
        detail:
          "Enjoy the waterpark, spa and Zouk nightclub, or catch a Broadway-style show in the ship's theatre.",
      },
      {
        day: 3,
        title: "Penang, Malaysia",
        detail:
          "Explore Georgetown's UNESCO-listed street art and hawker food scene on an optional shore excursion.",
      },
      {
        day: 4,
        title: "Phuket, Thailand",
        detail:
          "Dock at Phuket for a day of beaches, Phang Nga Bay boat trips, or simply staying onboard for a quieter ship day.",
      },
      {
        day: 5,
        title: "Langkawi, Malaysia",
        detail:
          "A duty-free island stop — cable car rides, beaches and shopping.",
      },
      {
        day: 6,
        title: "Day at Sea",
        detail:
          "A final sea day to enjoy the ship before returning to Singapore.",
      },
      {
        day: 7,
        title: "Disembarkation — Singapore",
        detail: "Breakfast onboard, then disembark at Marina Bay Cruise Centre.",
      },
    ],
    inclusions: [
      "Cruise fare in your selected cabin category",
      "Main dining room meals and buffet access",
      "Access to the waterpark, gym and most onboard entertainment",
      "Port charges and government taxes",
    ],
    exclusions: [
      "International flights to/from Singapore",
      "Shore excursions and land tours",
      "Specialty dining, spa treatments and beverage packages",
      "Visa fees where applicable and travel insurance",
      "Gratuities (typically added to your onboard account)",
    ],
    reviews: [
      {
        id: "genting-1",
        name: "Ankit Malhotra",
        rating: 5,
        review:
          "The waterpark and the theatre shows were next level. Phuket and Penang stops gave a great mix of beach and culture. Highly recommend for a family trip.",
      },
      {
        id: "genting-2",
        name: "Sneha Iyer",
        rating: 4,
        review:
          "Loved the ship, food options were excellent. Would've liked a longer stop at Langkawi but overall a fantastic experience organised well by the UniSetGo team.",
      },
    ],
  },
  {
    slug: "royal-caribbean",
    name: "Royal Caribbean",
    tagline: "The world's boldest ships",
    blurb:
      "From Icon of the Seas to Wonder of the Seas — surf simulators, ice skating, zip lines and Broadway shows at sea. Caribbean, Mediterranean, Asia and Alaska.",
    overview:
      "Royal Caribbean operates the largest and most innovative ships at sea, including Icon of the Seas and Wonder of the Seas. Think surf simulators, ice-skating rinks, zip lines, rock climbing and full Broadway productions — all onboard, alongside sweeping itineraries through the Caribbean, Mediterranean, Alaska and beyond.",
    regions: ["Caribbean", "Mexico", "Alaska", "Europe", "South Pacific"],
    ports: ["Miami", "Cozumel", "Nassau", "Barcelona", "Civitavecchia (Rome)"],
    image: royalcaribbean,
    gallery: [royalcaribbean],
    badge: "Global",
    duration: "4–10 nights",
    priceFrom: 84999,
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Suite (Royal Loft)"],
    highlights: [
      "FlowRider surf simulator and rock-climbing walls",
      "Full ice-skating rink and zip line onboard",
      "Broadway-caliber productions in a dedicated theatre",
      "Central Park and Boardwalk neighbourhoods at sea",
      "Private island stop at Perfect Day at CocoCay (Caribbean sailings)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Miami",
        detail:
          "Board your ship at PortMiami. Spend the afternoon exploring the many neighbourhoods onboard before setting sail.",
      },
      {
        day: 2,
        title: "Perfect Day at CocoCay",
        detail:
          "A private island stop with waterslides, a wave pool and the tallest waterslide in North America.",
      },
      {
        day: 3,
        title: "Nassau, Bahamas",
        detail:
          "Explore colonial architecture, beaches and optional swim-with-dolphins excursions.",
      },
      {
        day: 4,
        title: "Day at Sea",
        detail:
          "Catch a Broadway show, try the FlowRider, or relax at the adults-only Solarium.",
      },
      {
        day: 5,
        title: "Cozumel, Mexico",
        detail:
          "Snorkel the reefs, visit Mayan ruins, or shop the waterfront on this popular Mexican port call.",
      },
      {
        day: 6,
        title: "Disembarkation — Miami",
        detail: "Breakfast onboard before disembarking at PortMiami.",
      },
    ],
    inclusions: [
      "Cruise fare in your selected stateroom category",
      "Main dining room and Windjammer buffet meals",
      "Entertainment — Broadway shows, ice-skating shows, live music",
      "Access to pools, sports court, fitness centre and most activities",
      "Port charges and government taxes",
    ],
    exclusions: [
      "International flights to/from the embarkation port",
      "Shore excursions and beach club day passes",
      "Specialty restaurants, drink packages and Wi-Fi",
      "Gratuities (auto-added to your onboard account daily)",
      "Travel insurance and visa fees where applicable",
    ],
    reviews: [
      {
        id: "royal-1",
        name: "Arjun Kapoor",
        rating: 5,
        review:
          "Genuinely felt like a floating city. My kids didn't want to leave the waterslides at CocoCay. Booking through UniSetGo got us a great cabin upgrade.",
      },
      {
        id: "royal-2",
        name: "Meera Pillai",
        rating: 5,
        review:
          "The Broadway shows onboard were as good as anything we've seen live elsewhere. Cozumel excursion was well organised too.",
      },
    ],
  },
  {
    slug: "norwegian-cruise-line",
    name: "Norwegian Cruise Line (NCL)",
    tagline: "Freestyle cruising, no dress codes",
    blurb:
      "Cruise your way — no fixed dining times, no formal nights. NCL's freestyle format is perfect for first-time cruisers and families who want flexibility.",
    overview:
      "Norwegian Cruise Line pioneered 'Freestyle Cruising' — no assigned dining times, no formal nights, no fixed schedule beyond the ship's own. It's a relaxed, flexible way to cruise that suits first-timers and families equally well, with itineraries spanning Alaska's glaciers to the Caribbean's beaches.",
    regions: ["Alaska", "Caribbean", "Hawaii", "Mediterranean", "Asia"],
    ports: ["Seattle", "Juneau", "Skagway", "Ketchikan", "Victoria"],
    image: ncl,
    gallery: [ncl],
    duration: "5–9 nights",
    priceFrom: 69999,
    cabinTypes: ["Interior", "Ocean View", "Balcony", "The Haven Suite"],
    highlights: [
      "Freestyle dining — eat when and where you like, no fixed seating",
      "No formal nights — come as you are",
      "The Haven — a ship-within-a-ship suite complex with private pool",
      "Glacier Bay scenic cruising on Alaska sailings",
      "Broadway and West End-licensed shows onboard",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Seattle",
        detail:
          "Board your ship in Seattle and explore the many dining venues before departure.",
      },
      {
        day: 2,
        title: "Scenic Cruising — Inside Passage",
        detail:
          "Sail through Alaska's Inside Passage, watching for whales and glaciers from the open decks.",
      },
      {
        day: 3,
        title: "Juneau, Alaska",
        detail:
          "Visit Mendenhall Glacier or take an optional whale-watching excursion from Alaska's capital.",
      },
      {
        day: 4,
        title: "Skagway, Alaska",
        detail:
          "Ride the White Pass & Yukon Route Railway through gold-rush history and dramatic mountain scenery.",
      },
      {
        day: 5,
        title: "Ketchikan, Alaska",
        detail:
          "Explore totem poles, salmon runs and the historic Creek Street boardwalk.",
      },
      {
        day: 6,
        title: "Victoria, BC, Canada",
        detail: "A brief evening call at Victoria's Inner Harbour before returning to Seattle.",
      },
      {
        day: 7,
        title: "Disembarkation — Seattle",
        detail: "Breakfast onboard before disembarking in Seattle.",
      },
    ],
    inclusions: [
      "Cruise fare in your selected stateroom category",
      "Freestyle dining at the main dining rooms and buffet",
      "Entertainment — theatre shows, live music, comedy",
      "Access to pools, sports facilities and most onboard activities",
      "Port charges and government taxes",
    ],
    exclusions: [
      "International flights to/from the embarkation port",
      "Shore excursions (Glacier flights, railway tours, whale watching etc.)",
      "Specialty restaurants and beverage packages",
      "Gratuities and Wi-Fi packages",
      "Travel insurance and visa/ESTA fees where applicable",
    ],
    reviews: [
      {
        id: "ncl-1",
        name: "Rohan Deshmukh",
        rating: 4,
        review:
          "Alaska on NCL was breathtaking — the glacier scenic cruising day alone was worth it. Freestyle dining meant no rush to be anywhere at a fixed time, great for our group.",
      },
    ],
  },
  {
    slug: "msc-cruises",
    name: "MSC Cruises",
    tagline: "European elegance, worldwide",
    blurb:
      "Italian-designed ships with a distinctly European sensibility — Mediterranean summers, Caribbean winters, and the exclusive MSC Yacht Club suites.",
    overview:
      "MSC Cruises brings Italian design sensibility to sea — sweeping atriums, LED-lit staircases and a genuinely European dining culture. The exclusive MSC Yacht Club offers a private ship-within-a-ship experience, while the wider fleet sails the Mediterranean in summer and the Caribbean in winter.",
    regions: ["Mediterranean", "Northern Europe", "Caribbean", "Asia"],
    ports: ["Genoa", "Barcelona", "Marseille", "Naples", "Valletta"],
    image: msc,
    gallery: [msc],
    duration: "4–8 nights",
    priceFrom: 57999,
    cabinTypes: ["Interior", "Ocean View", "Balcony", "MSC Yacht Club Suite"],
    highlights: [
      "MSC Yacht Club — private suites, lounge, pool and dedicated concierge",
      "Italian-led dining with regional specialities each evening",
      "LED sky-screen and Cirque-style acrobatic shows",
      "Family-friendly kids' clubs with LEGO and Chicco partnerships",
      "Mediterranean ports rich in history — Rome, Barcelona, Valletta",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Genoa",
        detail: "Board your ship in Genoa and settle in before an evening departure.",
      },
      {
        day: 2,
        title: "Marseille, France",
        detail: "Explore the Old Port and Notre-Dame de la Garde on an optional excursion.",
      },
      {
        day: 3,
        title: "Barcelona, Spain",
        detail: "A full day in Barcelona — Sagrada Familia, Gothic Quarter and Las Ramblas.",
      },
      {
        day: 4,
        title: "Day at Sea",
        detail: "Enjoy the pool deck, spa and evening acrobatic show onboard.",
      },
      {
        day: 5,
        title: "Naples, Italy",
        detail: "Optional excursions to Pompeii or the Amalfi Coast from this Italian port.",
      },
      {
        day: 6,
        title: "Disembarkation — Genoa",
        detail: "Breakfast onboard before disembarking in Genoa.",
      },
    ],
    inclusions: [
      "Cruise fare in your selected cabin category",
      "Main dining room meals (Bella or Fantastica experience per fare)",
      "Entertainment — theatre shows, acrobatic performances, live music",
      "Access to pools, fitness centre and most onboard activities",
      "Port charges and government taxes",
    ],
    exclusions: [
      "International flights to/from the embarkation port",
      "Shore excursions and land tours",
      "Specialty restaurants, drinks packages and Wi-Fi",
      "Gratuities and travel insurance",
      "Visa fees where applicable",
    ],
    reviews: [
      {
        id: "msc-1",
        name: "Priya Menon",
        rating: 4,
        review:
          "Loved the Italian dining and the ship's design — felt very elegant. Barcelona and Naples stops were the highlight of the trip.",
      },
    ],
  },
  {
    slug: "costa-cruises",
    name: "Costa Cruises",
    tagline: "La dolce vita at sea",
    blurb:
      "Italy's most-loved cruise brand — pasta made fresh, aperitivo on deck, and unhurried port stops across the Mediterranean and the Emirates.",
    overview:
      "Costa Cruises brings authentic Italian hospitality to sea — fresh pasta stations, aperitivo hour on deck and an unhurried pace at every port. With sailings across the Mediterranean and the Arabian Gulf, it's a relaxed, food-forward way to see multiple countries in one trip.",
    regions: ["Mediterranean", "South America", "Asia", "Caribbean"],
    ports: ["Dubai", "Abu Dhabi", "Muscat", "Doha", "Sir Bani Yas Island"],
    image: costa,
    gallery: [costa],
    duration: "3–7 nights",
    priceFrom: 52999,
    cabinTypes: ["Interior", "Ocean View", "Balcony", "Samsara Suite"],
    highlights: [
      "Fresh pasta stations and daily aperitivo on the pool deck",
      "Samsara Spa — a dedicated wellness deck with thalassotherapy pool",
      "Family-friendly Squok Club for younger cruisers",
      "Arabian Gulf sailings visiting Dubai, Abu Dhabi, Muscat and Doha",
      "Italian-hosted evening entertainment and dance classes",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Dubai",
        detail: "Board at Dubai's cruise terminal and enjoy an evening sail-away party.",
      },
      {
        day: 2,
        title: "Abu Dhabi, UAE",
        detail: "Visit Sheikh Zayed Grand Mosque or Louvre Abu Dhabi on an optional excursion.",
      },
      {
        day: 3,
        title: "Sir Bani Yas Island",
        detail: "A wildlife reserve island stop with beaches and safari-style excursions.",
      },
      {
        day: 4,
        title: "Doha, Qatar",
        detail: "Explore the Corniche and Souq Waqif on this Gulf port call.",
      },
      {
        day: 5,
        title: "Muscat, Oman",
        detail: "Visit the Sultan Qaboos Grand Mosque and Muttrah Souq.",
      },
      {
        day: 6,
        title: "Disembarkation — Dubai",
        detail: "Breakfast onboard before disembarking in Dubai.",
      },
    ],
    inclusions: [
      "Cruise fare in your selected cabin category",
      "Main dining room meals with Italian-led menus",
      "Entertainment — Italian-hosted shows, dance classes, live music",
      "Access to pools, Squok Club (kids) and most onboard activities",
      "Port charges and government taxes",
    ],
    exclusions: [
      "International flights to/from the embarkation port",
      "Shore excursions across Gulf ports",
      "Specialty restaurants, Samsara Spa treatments and drink packages",
      "Gratuities and travel insurance",
      "Visa fees where applicable",
    ],
    reviews: [
      {
        id: "costa-1",
        name: "Farhan Sheikh",
        rating: 4,
        review:
          "The Gulf itinerary was perfect for a short family break — Abu Dhabi and Muscat stops were well timed. Food onboard was consistently good.",
      },
    ],
  },
  {
    slug: "disney-cruise-line",
    name: "Disney Cruise Line",
    tagline: "Magic at sea for the whole family",
    blurb:
      "Character breakfasts, Broadway-scale shows, adults-only lounges and Disney's own private island — the gold standard for family cruising.",
    overview:
      "Disney Cruise Line is built for families without ever forgetting the adults — character breakfasts and kids' clubs by day, adults-only lounges and full Broadway-scale musicals by night. A stop at Disney's own private Bahamian island, Castaway Cay, is the icing on the cake for Caribbean sailings.",
    regions: ["Caribbean & Bahamas", "Alaska", "Europe", "SEA"],
    ports: ["Port Canaveral", "Nassau", "Castaway Cay", "Cozumel"],
    image: disney,
    gallery: [disney],
    badge: "Family favourite",
    duration: "3–7 nights",
    priceFrom: 119999,
    cabinTypes: ["Inside", "Ocean View", "Verandah", "Concierge Suite"],
    highlights: [
      "Private stop at Castaway Cay, Disney's own Bahamian island",
      "Broadway-scale live musicals based on Disney classics",
      "Character breakfasts and meet-and-greets throughout the ship",
      "Adults-only district with its own bars, pool and restaurant",
      "Rotational dining — your servers follow you between themed restaurants",
    ],
    itinerary: [
      {
        day: 1,
        title: "Embarkation — Port Canaveral",
        detail:
          "Board your ship near Orlando and enjoy character welcome events before the sail-away show.",
      },
      {
        day: 2,
        title: "Day at Sea",
        detail:
          "Catch a Broadway-scale musical, visit the kids' clubs, or relax at the adults-only Quiet Cove pool.",
      },
      {
        day: 3,
        title: "Nassau, Bahamas",
        detail: "Explore Nassau's forts and beaches, or take an optional swim-with-pigs excursion.",
      },
      {
        day: 4,
        title: "Castaway Cay",
        detail:
          "A full day at Disney's private island — family beach, adults-only Serenity Bay, and a Disney character beach party.",
      },
      {
        day: 5,
        title: "Disembarkation — Port Canaveral",
        detail: "Breakfast onboard before disembarking near Orlando.",
      },
    ],
    inclusions: [
      "Cruise fare in your selected stateroom category",
      "Rotational dining across all main restaurants",
      "Entertainment — Broadway-scale shows, movies, character events",
      "Kids' clubs (age-specific) and access to Castaway Cay's family beach",
      "Port charges and government taxes",
    ],
    exclusions: [
      "International flights to/from Orlando/Port Canaveral",
      "Shore excursions at Nassau and other ports",
      "Specialty dining (e.g. Palo, Remy) and beverage packages",
      "Gratuities and Wi-Fi packages",
      "Travel insurance and visa/ESTA fees where applicable",
    ],
    reviews: [
      {
        id: "disney-1",
        name: "Kavita Rao",
        rating: 5,
        review:
          "Worth every rupee for a family with young kids. Castaway Cay was magical and the evening shows were genuinely Broadway-quality. UniSetGo sorted our cabin category upgrade too.",
      },
      {
        id: "disney-2",
        name: "Suresh Iyengar",
        rating: 5,
        review:
          "Best family holiday we've taken. The attention to detail — from character breakfasts to the rotational dining staff remembering our kids' names — was unmatched.",
      },
    ],
  },
];

export function cruiseBySlug(slug: string): CruiseDetail | undefined {
  return CRUISES.find((c) => c.slug === slug);
}

export function cruiseRating(cruise: CruiseDetail): {
  rating: number;
  reviewCount: number;
} {
  return { rating: rating(cruise.reviews), reviewCount: cruise.reviews.length };
}
