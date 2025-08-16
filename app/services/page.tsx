import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServiceCards } from "@/components/service-cards"
import { ServicesCTA } from "@/components/services-cta"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-slate-50">
      <Navigation />
      <ServicesHero />
      <ServiceCards />
      <ServicesCTA />
      <Footer />
    </div>
  )
}
