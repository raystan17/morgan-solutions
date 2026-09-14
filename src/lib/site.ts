/**
 * Single source of truth for company-wide brand + contact details.
 */
export const site = {
  name: "Morgan Exterior Solutions",
  shortName: "Morgan Exterior",
  legalName: "Morgan Exterior Solutions",
  tagline: "Clean, refresh, and protect your outdoor space.",
  description:
    "Morgan Exterior Solutions provides deck building, fence services, pressure washing, landscaping, and outdoor improvements for homes and businesses in Brandon, MB and surrounding communities.",
  intro:
    "Bringing your home's exterior back to life. Pressure washing, yard cleanup, painting, deck, fence, and all exterior services. Clean, refresh, and protect with Morgan Exterior Solutions.",
  phone: "(204) 570-1912",
  email: "morganexteriorsolution@gmail.com",
  serviceArea: "Brandon, MB & surrounding region",
  serviceTowns: ["Brandon", "Rivers", "Ninette", "Minnedosa"],
  city: "Brandon",
  region: "Manitoba",
  country: "CA",
  url: "https://morganexteriorsolutions.ca",
  hours: "Open 24 hours · Call anytime",
  facebook:
    "https://www.facebook.com/people/Morgan-Exterior-Solutions/61572030419653/",
  googleMaps:
    "https://www.google.com/maps/place/Morgan+Exterior+Solutions/@49.8606321,-99.9068439,12z/data=!3m1!4b1!4m6!3m5!1s0xad1a3e5b4da0b015:0x8ea2a9cfa4840cdf!8m2!3d49.8606321!4d-99.9068439!16s%2Fg%2F11zhb0k98j",
  googleRating: "5.0",
  googleReviewCount: 4,
} as const;

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#why", label: "Why Us" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
] as const;

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
