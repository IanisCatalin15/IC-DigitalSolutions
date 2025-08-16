import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IC Digital Solutions - Professional AI Consulting & Automation Services",
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
    "Romania",
    "Bucharest",
  ],
  openGraph: {
    title: "IC Digital Solutions - Professional AI Consulting & Automation Services",
    description:
      "Transform your business with expert AI consulting, intelligent automation, and data-driven insights. Boost efficiency and drive unprecedented growth with our cutting-edge AI strategies.",
    url: "https://ic-digitalsolutions.com",
    siteName: "IC Digital Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IC Digital Solutions - AI Consulting & Automation Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IC Digital Solutions - Professional AI Consulting & Automation Services",
    description:
      "Transform your business with expert AI consulting, intelligent automation, and data-driven insights. Boost efficiency and drive unprecedented growth.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ic-digitalsolutions.com",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "IC Digital Solutions",
            description: "Professional AI consulting and automation services",
            url: "https://ic-digitalsolutions.com",
            logo: "https://ic-digitalsolutions.com/logo.png",
            foundingDate: "2020",
            numberOfEmployees: "10-50",
            industry: "AI Consulting",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Strada Ion Ionescu de la Brad 10",
              addressLocality: "Bucharest",
              addressRegion: "BU",
              postalCode: "087210",
              addressCountry: "RO",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+40-743-609-925",
              contactType: "customer service",
              availableLanguage: "English",
              hoursAvailable: "Mo-Fr 09:00-18:00",
            },
            sameAs: ["https://www.linkedin.com/company/ic-digital-solutions", "https://twitter.com/icdigitalsolutions"],
          }),
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <Footer />
      </main>
    </>
  )
}
