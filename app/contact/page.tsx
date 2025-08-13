import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact IC Digital Solutions - Get Your Free AI Consultation",
  description:
    "Ready to transform your business with AI? Contact IC Digital Solutions for a free consultation. We'll discuss your needs and create a custom AI strategy for your business.",
  keywords: [
    "AI consultation",
    "contact AI experts",
    "free AI consultation",
    "AI strategy consultation",
    "business automation consultation",
    "AI consulting contact",
  ],
  openGraph: {
    title: "Contact IC Digital Solutions - Get Your Free AI Consultation",
    description: "Ready to transform your business with AI? Get your free consultation today.",
    url: "/contact",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact IC Digital Solutions",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact IC Digital Solutions",
            description: "Get in touch with IC Digital Solutions for AI consulting services",
            url: "https://ic-digitalsolutions.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "IC Digital Solutions",
              telephone: "0743609925",
              email: "contact@ic-digitalsolutions.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Strada Ion Ionescu de la Brad 10",
                addressLocality: "Bucharest",
                addressRegion: "BU",
                postalCode: "087210",
                addressCountry: "Romania",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "0743609925",
                contactType: "customer service",
                availableLanguage: "English",
                hoursAvailable: "Mo-Fr 09:00-18:00",
              },
            },
          }),
        }}
      />
      <main className="min-h-screen">
        <Navigation />
        <ContactForm />
        <ContactInfo />
        <Footer />
      </main>
    </>
  )
}
