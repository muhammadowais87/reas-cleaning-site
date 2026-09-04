import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Archivo, Fraunces } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
})

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
})

const SITE_URL = "https://reas-cleaning.vercel.app"
const DESCRIPTION =
  "Professional cleaning for offices, Airbnb rentals, commercial spaces, and moves across Atlanta — reliable, detail-focused, and done right. 10+ years of trusted cleaning."

const TITLE = "Rea's Cleaning Services | Professional Cleaning Services in Atlanta"

// Structured data for search engines / Google Business Profile matching.
// Not rendered as visible page content.
const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HousekeepingService",
  name: "Rea's Cleaning Services",
  image: `${SITE_URL}/opengraph-image.png`,
  url: SITE_URL,
  telephone: "+14049342853",
  email: "emilie0874@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "126 Terrace Drive NE, Unit C",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    postalCode: "30305",
    addressCountry: "US",
  },
  areaServed: "Atlanta, GA",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [
    "https://www.facebook.com/reacleaningservices/about/",
    "https://share.google/IveqZNX0Rl2SB9qlH",
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Rea's Cleaning Services",
  // Favicon / touch icon are provided by app/icon.png and app/apple-icon.png.
  // Social share image is provided by app/opengraph-image.png / app/twitter-image.png.
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Rea's Cleaning Services",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#143a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
        />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
