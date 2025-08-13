import { Navigation } from "@/components/navigation"
import { PortfolioHero } from "@/components/portfolio-hero"
import { CaseStudies } from "@/components/case-studies"
import { PortfolioStats } from "@/components/portfolio-stats"
import { PortfolioCTA } from "@/components/portfolio-cta"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies - AI Success Stories | IC Digital Solutions",
  description:
    "Explore our successful AI implementation case studies across e-commerce, healthcare, and financial services. See real results and ROI from our AI solutions.",
  keywords: [
    "AI case studies",
    "AI success stories",
    "AI implementation examples",
    "AI ROI results",
    "AI portfolio",
    "machine learning projects",
    "AI transformation results",
  ],
  openGraph: {
    title: "Portfolio & Case Studies - AI Success Stories",
    description: "Explore our successful AI implementation case studies with real results and ROI.",
    url: "/portfolio",
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "IC Digital Solutions AI Portfolio and Case Studies",
      },
    ],
  },
  alternates: {
    canonical: "/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Portfolio & Case Studies",
            description: "Successful AI implementation case studies and project portfolio",
            url: "https://ic-digitalsolutions.com/portfolio",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "CreativeWork",
                  name: "E-commerce AI Chatbot Implementation",
                  description: "AI-powered customer service chatbot increasing satisfaction by 40%",
                  creator: {
                    "@type": "Organization",
                    name: "IC Digital Solutions",
                  },
                },
                {
                  "@type": "CreativeWork",
                  name: "Healthcare AI Diagnostic System",
                  description: "Machine learning diagnostic tool improving accuracy by 35%",
                  creator: {
                    "@type": "Organization",
                    name: "IC Digital Solutions",
                  },
                },
                {
                  "@type": "CreativeWork",
                  name: "Financial AI Risk Assessment",
                  description: "Automated risk assessment system reducing processing time by 60%",
                  creator: {
                    "@type": "Organization",
                    name: "IC Digital Solutions",
                  },
                },
              ],
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <PortfolioHero />
        <CaseStudies />
        <PortfolioStats />
        <PortfolioCTA />
        <Footer />
      </main>
    </>
  )
}
