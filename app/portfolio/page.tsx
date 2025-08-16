import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import PortfolioHero from "@/components/portfolio-hero"
import CaseStudies from "@/components/case-studies"
import PortfolioStats from "@/components/portfolio-stats"
import PortfolioCTA from "@/components/portfolio-cta"
import { Testimonials } from "@/components/testimonials"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PortfolioHero />
      <CaseStudies />
      <PortfolioStats />
      <Testimonials />
      <PortfolioCTA />
      <Footer />
    </main>
  )
}
