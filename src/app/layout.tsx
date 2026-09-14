import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Decks, Fences & Pressure Washing in Brandon, MB`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "pressure washing Brandon MB",
    "deck building Brandon",
    "fence installation Brandon Manitoba",
    "landscaping Brandon MB",
    "exterior cleaning",
    site.city,
    site.region,
  ],
  openGraph: {
    type: "website",
    title: `${site.name} | Decks, Fences & Pressure Washing in Brandon, MB`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_CA",
    images: [{ url: "/logo.png", width: 1024, height: 682, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Decks, Fences & Pressure Washing in Brandon, MB`,
    description: site.description,
    images: ["/logo.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#071a33",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/logo.png`,
  areaServed: site.serviceTowns.map((town) => ({
    "@type": "City",
    name: `${town}, Manitoba`,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "CA",
  },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [site.facebook, site.googleMaps],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.googleRating,
    reviewCount: site.googleReviewCount,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} antialiased`}
    >
      <body className="bg-[#f6fbff] font-sans text-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
