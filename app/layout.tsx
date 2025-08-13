import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
      metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ic-digitalsolutions.com"),
  title: {
    default: "IC Digital Solutions - Professional AI Consulting & Automation Services",
    template: "%s | IC Digital Solutions",
  },
  description:
    "Transform your business with expert AI consulting, intelligent automation, and data-driven insights. IC Digital Solutions delivers cutting-edge AI strategies that boost efficiency and drive unprecedented growth.",
  keywords: [
    "AI consulting",
    "artificial intelligence consulting",
    "business automation",
    "AI strategy",
    "digital transformation",
    "machine learning consulting",
    "AI implementation",
    "process automation",
    "data analytics",
    "AI solutions",
    "intelligent automation",
    "AI prompting services",
    "business intelligence",
    "predictive analytics",
    "AI optimization",
  ],
  authors: [{ name: "IC Digital Solutions" }],
  creator: "IC Digital Solutions",
  publisher: "IC Digital Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "IC Digital Solutions",
    title: "IC Digital Solutions - Professional AI Consulting & Automation Services",
    description:
      "Transform your business with expert AI consulting, intelligent automation, and data-driven insights. Boost efficiency and drive unprecedented growth with our cutting-edge AI strategies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IC Digital Solutions - AI Consulting & Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IC Digital Solutions - Professional AI Consulting & Automation Services",
    description:
      "Transform your business with expert AI consulting, intelligent automation, and data-driven insights. Boost efficiency and drive unprecedented growth.",
    images: ["/og-image.png"],
    creator: "@icdigitalsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
