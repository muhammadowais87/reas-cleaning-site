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
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
