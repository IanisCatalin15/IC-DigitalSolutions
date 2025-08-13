import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { TeamSection } from "@/components/team-section"
import { CompanyValues } from "@/components/company-values"
import { AboutCTA } from "@/components/about-cta"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Meet the IC Digital Solutions Team",
  description:
    "Learn about IC Digital Solutions' mission to transform businesses with AI, meet our expert team of AI consultants and strategists, and discover the values that drive our innovative work.",
  keywords: [
    "AI consulting team",
    "AI experts",
    "digital transformation specialists",
    "AI strategy consultants",
    "business automation experts",
    "IC Digital Solutions team",
  ],
  openGraph: {
    title: "About Us - Meet the IC Digital Solutions Team",
    description: "Learn about our mission to transform businesses with AI and meet our expert team.",
    url: "/about",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "IC Digital Solutions Team",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About IC Digital Solutions",
            description: "Learn about IC Digital Solutions and our expert AI consulting team",
            url: "https://ic-digitalsolutions.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "IC Digital Solutions",
              description: "Professional AI consulting and automation services",
              foundingDate: "2020",
              numberOfEmployees: "10-50",
              industry: "AI Consulting",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Innovation Drive",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <AboutHero />
        <CompanyStory />
        <TeamSection />
        <CompanyValues />
        <AboutCTA />
        <Footer />
      </main>
    </>
  )
}
