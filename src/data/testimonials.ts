export interface Testimonial {
  author: string;
  rating: number;
  image: string;
  /** Paragraphs separated by a blank line (\n\n) — preserved for a future
   * "full review" view; the carousel card itself clamps to a few lines. */
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Atul",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-atul/400/500",
    text: `Overall experience feedback
*Thank You, Unisetgo Team* !

We would like to extend our heartfelt gratitude to Unisetgo for organizing a truly memorable family tour to Pondicherry and Mahabalipuram. The entire experience was meticulously planned, ensuring that every detail was thoughtfully taken care of. From the seamless airport transfers to the well-curated day-wise itinerary, every aspect of the trip reflected professionalism and a genuine commitment to guest satisfaction.

Special thanks to Justin, our cab driver, whose well-maintained vehicle and courteous driving made our journeys comfortable and stress-free. The sightseeing arrangements, choice of accommodations, and flexibility for leisure activities allowed us to enjoy the best of each destination at our own pace.

We especially appreciated:

*Meticulous Planning:* Every day was thoughtfully scheduled, balancing sightseeing with leisure and optional activities.

*Comfortable Transport:* The AC Innova provided was clean, reliable, and always ready, with Justin ensuring a safe and pleasant ride throughout.

*Excellent Accommodation:* The selected hotels and resorts offered comfort and beautiful views, enhancing our overall experience.

*Personalized Touch*: The support team was always available for assistance, making us feel well cared for at every step.`,
  },
  {
    author: "Niyamat",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-niyamat/400/500",
    text: `I would like to take a minute to appreciate Unisetgo on organising a beautiful East Africa Trip for self and my mother.

We went to Masaimara and Zanzibar. Everything from the documentation and visas to the safari and guides was flawlessly organised.

The safari was beautiful and though we weren't lucky enough to see the great migration we spotted a number of animals at close quarters. We had a great guide with in-depth knowledge about the wildlife and the ecosystem of Kenya.

Would definitely recommend this trip to anyone looking for great adventure with a hint of luxury!`,
  },
  {
    author: "Mukesh",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-mukesh/400/500",
    text: `Very professional conduct by the ground staff. Guides were knowledgeable and friendly. Transport was of top order. Drivers were very efficient and helpful. The backend team were very much alive to the suggestions and acted promptly on them.`,
  },
  {
    author: "Sunil",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-sunil/400/500",
    text: `My visit to Vietnam was a wonderful experience organized by UNISETGO. Everything was perfectly planned, making the trip very comfortable for me. Additionally, last-minute minor changes to the itinerary were handled very positively and efficiently by UNISETGO, which I truly appreciated.

The punctuality of the tour guides, their mannerisms, their immense knowledge, minute-to-minute safety guidance, and assistance with shopping and dining based on my personal preferences, clean and comfortable transportation, were highly appreciated.

The UNISETGO team deserves a big applause!! Your teamwork is brilliant. You make every trip unforgettable – seamless planning, epic adventures, and memories that last forever. Here's to exploring the world, one amazing trip at a time with UNISETGO !!`,
  },
  {
    author: "Dushyant",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-dushyant/400/500",
    text: `It was an excellent trip, cherished to be remembered for life. All ground staffs including the hotel staffs were at their best. Special mention of our Guide Kinley who kept us entertained en-route and also the steward Kinga in hotel at Paro who served us not only with smile but ensured everyone had their meals with smile.

The food at Paro was served hot and was the best. The bus driver was also excellent, experienced, and very disciplined. Overall a great memorable trip.`,
  },
  {
    author: "Ranjana",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-ranjana/400/500",
    text: `All the arrangements inclusive of hotels, cabs and the overall tie ups were excellent. The hotels which were chosen were excellent and welcoming. The guides and drivers were flexible and accommodating.`,
  },
  {
    author: "Anonymous Customer",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-anon-1/400/500",
    text: `A tour very well planned and executed by a team of professionals. Delivery far beyond expectations.`,
  },
  {
    author: "Anonymous Customer",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-anon-2/400/500",
    text: `Superb!! It was a full value for money. The ground staff was extremely professional yet polite and accomodating.`,
  },
  {
    author: "Sangita",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-sangita/400/500",
    text: `It was a fabulous trip, that was made possible, due to the dedication and hard work of the entire team of UNISETGO 👍 The coordination was like clockwork precision. Never in the entire trip, was there any ambiguity, be it the sight seeing or in the transportation.

The performance, knowledge and professionalism, displayed by all the Guides was world class. Could not have asked for anything better 👍`,
  },
  {
    author: "Anonymous Customer",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-anon-3/400/500",
    text: `Overall experience was good, the local travel including airport pickup, drop, city travel were by professional drivers in clean well maintained cars. The drivers knew all the places and were courteous in behavior.

We never had to wait for vehicles and this helped us a lot in foreign place with different language. We liked the app based sharing of information including vehicle and driver updates also quick response to the queries.`,
  },
  {
    author: "Anonymous Customer",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-anon-4/400/500",
    text: `Experience has been fascinating and couldn't have asked for a more professional team to plan this trip. Kudos to your team for single point responsibility in ensuring a glitch free memorable trip.`,
  },
  {
    author: "Anonymous Customer",
    rating: 5,
    image: "https://picsum.photos/seed/unisetgo-anon-5/400/500",
    text: `It was excellent 👌. Well tied up including transport, communication, monitoring and hotels. Infact there was nothing to point out. Well selected locations and sightseeing. Over all very satisfied.`,
  },
];