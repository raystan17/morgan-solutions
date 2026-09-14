/**
 * Marketing content lives here so copy can be edited without touching components.
 * Voice: local Brandon tradespeople — straightforward, proud of the work, not corporate.
 */

export const trustPillars = [
  {
    title: "Locally Owned",
    body: "A Brandon team you can actually reach — serving homes and businesses across western Manitoba.",
  },
  {
    title: "Homes & Businesses",
    body: "From driveways and decks to shops, garages, and commercial properties, we treat every job like it shows.",
  },
  {
    title: "Always Available",
    body: "Open 24 hours. Call or text (204) 570-1912 whenever you need a quote or a crew on site.",
  },
  {
    title: "5.0 on Google",
    body: "Neighbours keep coming back because the work looks right and the price is fair.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const currentServices: Service[] = [
  {
    slug: "deck-fence",
    title: "Deck & Fence Solutions",
    summary:
      "Upgrade your outdoor space with professional deck and fence solutions in Brandon, MB. Built for privacy, function, and curb appeal.",
    points: [
      "New deck builds and rebuilds",
      "Fence installation and repair",
      "Deck facelifts and refreshes",
      "Outdoor improvements that last",
    ],
  },
  {
    slug: "residential-commercial",
    title: "Residential & Commercial",
    summary:
      "Reliable exterior services for homes and businesses in Brandon. From property cleaning to decks, fences, and outdoor improvements.",
    points: [
      "Homes, cottages, and getaways",
      "Shops, garages, and yards",
      "Trailers, equipment, and storefronts",
      "One team for the whole property",
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping Services",
    summary:
      "Landscaping and property cleanup in Brandon, MB to help homeowners create cleaner, more functional, better-looking yards.",
    points: [
      "Property cleanup and yard refresh",
      "Exterior improvements that work",
      "Seasonal outdoor maintenance",
      "Cleaner, more usable outdoor space",
    ],
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    summary:
      "Professional pressure washing for homes, siding, decks, fences, driveways, sidewalks, shops, garages, equipment, trailers, and commercial properties.",
    points: [
      "Homes, siding, decks, and fences",
      "Driveways, sidewalks, and patios",
      "Shops, garages, and equipment",
      "Trailers and commercial buildings",
    ],
  },
];

export const about = {
  eyebrow: "About us",
  title: "Exterior work that looks as good as it lasts.",
  paragraphs: [
    "Morgan Exterior Solutions is a locally owned crew in Brandon, Manitoba. We clean, refresh, and protect outdoor spaces — from pressure washing after a prairie dust storm to building a deck your family actually wants to sit on.",
    "Clients work with Jayden and the team: knowledgeable, attentive to the details, and efficient on the job. Neighbours call us for the work that shows from the street — and for the problems that can't wait, like a collapsed sewer drain that needed to get handled the same day.",
    "Whether it's a home, a shop, a cottage, or a commercial property, the standard is the same: show up, do it right, and leave the place looking better than you found it.",
  ],
  pullQuote:
    "Clean, refresh, and protect — that's the job, whether it's a driveway, a fence line, or a full deck rebuild.",
} as const;

export const whoWeServe = [
  {
    title: "Homeowners",
    body: "Curb appeal that holds up: clean siding, a solid deck, a fence that actually gives you privacy, and a yard you want to spend time in.",
  },
  {
    title: "Cottages & Getaways",
    body: "Seasonal properties deserve a reset. We freshen up summer places so the before-and-after speaks for itself when you pull in.",
  },
  {
    title: "Shops & Garages",
    body: "Dust, grime, and prairie dirt settle hard on shops and equipment. We bring them back to a clean, professional look.",
  },
  {
    title: "Commercial Properties",
    body: "Storefronts, yards, and buildings that need to look looked-after — for customers, tenants, and the people who work there.",
  },
] as const;

export const reviews = [
  {
    name: "Maxine Ingraham",
    quote:
      "Morgan Exteriors turned our old unsafe deck into a masterpiece! They worked in a timely manner and even accommodated all the last minute ideas and changes! Great service and a reasonable price! Recommend!!",
    source: "Google",
  },
  {
    name: "Athens Archer",
    quote:
      "Freshened up the summer get away… before and after speaks for itself.",
    source: "Google",
  },
  {
    name: "Andrew Smart",
    quote:
      "Jayden is knowledgeable, attentive to detail, asks great questions and efficient at his work.",
    source: "Google",
  },
  {
    name: "Dustin Hollender",
    quote:
      "Had my sewer drain collapse, I got Morgan Exterior to come take a look and got right to it! Did an outstanding job! Very quick, efficient and affordable! Highly recommend.",
    source: "Google",
  },
] as const;

export const whyChooseUs = [
  {
    title: "The work shows",
    body: "Decks, fences, siding, and yards are out in the open. We treat every job like the neighbours are going to notice — because they will.",
  },
  {
    title: "Easy to reach",
    body: "No call centre. You talk to the people doing the work. Open 24 hours, with a real number: (204) 570-1912.",
  },
  {
    title: "Fair, straightforward pricing",
    body: "Clients mention reasonable prices as much as they mention the finish. We quote clearly and don't pad the job.",
  },
  {
    title: "Flexible when plans change",
    body: "Last-minute ideas on a deck rebuild? A drain that can't wait until Monday? We accommodate and get after it.",
  },
] as const;

export const processSteps = [
  {
    title: "Tell us what you need",
    body: "Call, text, or send a quote request. Photos of the property help — we'll get back to you quickly.",
  },
  {
    title: "We take a look",
    body: "We'll assess the job in person or from what you send, ask the right questions, and map out the work.",
  },
  {
    title: "Clear quote",
    body: "You get a straightforward price and a plan. No pressure, no mystery add-ons.",
  },
  {
    title: "We get it done",
    body: "The crew shows up, does the work, and leaves your property looking the way it should.",
  },
] as const;

export const faqs = [
  {
    q: "What areas do you serve?",
    a: "We're based in Brandon, Manitoba and regularly work in Rivers, Ninette, Minnedosa, and the surrounding region. If you're nearby and not sure you're in range, just ask.",
  },
  {
    q: "Do you work on homes and businesses?",
    a: "Yes. We handle residential and commercial exterior work — houses, cottages, shops, garages, equipment, trailers, and commercial buildings.",
  },
  {
    q: "What can you pressure wash?",
    a: "Homes, siding, decks, fences, driveways, sidewalks, shops, garages, equipment, trailers, and commercial properties. If it's outside and dirty, ask — we likely wash it.",
  },
  {
    q: "Do you build new decks and fences, or only repair?",
    a: "Both. We build new decks and fences, rebuild unsafe ones, and do facelifts when you want the existing structure refreshed instead of replaced.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or text (204) 570-1912, email morganexteriorsolution@gmail.com, or send a request through this site. Photos of the job help us quote faster.",
  },
  {
    q: "When are you available?",
    a: "We're listed as open 24 hours. Exterior work happens in daylight, but you can reach us anytime to book, ask a question, or get a quote.",
  },
] as const;
