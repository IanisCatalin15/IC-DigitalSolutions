"use client"

import type React from "react"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { AccessibilitySkipLinks } from "@/components/accessibility-skip-links"
import { AiDemo } from "@/components/ai-demo"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"], // Removed unused weights
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"], // Removed unused weights
})

// Component that handles search params logic within Suspense
function SearchParamsHandler() {
  const searchParams = useSearchParams()
  
  // You can add any logic here that needs access to search params
  // For example, analytics tracking, A/B testing, etc.
  
  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={null}>
      <AccessibilitySkipLinks />
      <Suspense fallback={null}>
        <SearchParamsHandler />
      </Suspense>
      {children}
      <AiDemo />
      <Analytics />
    </Suspense>
  )
}
