import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServiceCards } from "@/components/service-cards"
import { ServicesCTA } from "@/components/services-cta"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Consulting Services - Strategy, Automation & Implementation | IC Digital Solutions",
  description:
    "Comprehensive AI consulting services from strategy to implementation. Transform your business with our expert AI automation, development, and training solutions. Get started today.",
  keywords: [
    "AI consulting services",
    "AI strategy consulting",
    "business automation",
    "AI implementation",
    "machine learning consulting",
    "AI training programs",
    "custom AI development",
    "AI security compliance",
    "AI analytics insights",
  ],
  openGraph: {
    title: "AI Consulting Services - Strategy, Automation & Implementation",
    description:
      "Comprehensive AI consulting services from strategy to implementation. Transform your business with expert AI solutions.",
    url: "/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "IC Digital Solutions AI Consulting Services",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Consulting Services",
            provider: {
              "@type": "Organization",
              name: "IC Digital Solutions",
              url: "https://ic-digitalsolutions.com",
            },
            description: "Comprehensive AI consulting services including strategy, automation, and implementation",
            serviceType: "AI Consulting",
            areaServed: "United States",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Strategy Consulting",
                    description: "Comprehensive AI roadmap and strategy development",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "5000",
                    priceCurrency: "USD",
                    description: "Starting price",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Automation Solutions",
                    description: "Streamline operations with intelligent automation",
                  },
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    price: "8000",
                    priceCurrency: "USD",
                    description: "Starting price",
                  },
                },
              ],
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <ServicesHero />
        <ServiceCards />
        <ServicesCTA />
        <Footer />
      </main>
    </>
  )
}
