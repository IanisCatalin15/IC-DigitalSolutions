"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    name: "AI Training & Compliance",
    price: "$4,000",
    description: "Essential AI implementation and compliance solutions for businesses getting started with AI.",
    features: [
      "AI Strategy Assessment",
      "Compliance Framework Setup",
      "Basic AI Model Training",
      "Staff Training Program",
      "Documentation & Guidelines",
      "3 Months Support",
    ],
    icon: Brain,
    popular: false,
  },
  {
    name: "AI Strategy & Automation",
    price: "$6,000",
    description: "Comprehensive AI strategy and automation solutions to transform your business processes.",
    features: [
      "Custom AI Strategy Development",
      "Process Automation Design",
      "Advanced Model Training",
      "Integration Planning",
      "Performance Analytics",
      "6 Months Support",
      "Priority Consultation",
    ],
    icon: Zap,
    popular: true,
  },
  {
    name: "AI Development & Analytics",
    price: "$10,000",
    description: "Full-scale AI development and advanced analytics solutions for enterprise-level implementations.",
    features: [
      "Custom AI Solution Development",
      "Advanced Analytics Platform",
      "Real-time Data Processing",
      "Scalable Infrastructure",
      "24/7 Monitoring & Support",
      "12 Months Support",
      "Dedicated Account Manager",
      "ROI Optimization",
    ],
    icon: TrendingUp,
    popular: false,
  },
]

export function ServiceCards() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4 select-text">Choose Your AI Solution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto select-text">
            Select the perfect package to transform your business with our comprehensive AI consulting services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#7c3aed] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl p-8 h-full border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${
                  tier.popular ? "border-[#7c3aed] shadow-lg" : "border-gray-200 hover:border-[#7c3aed]/50"
                }`}
              >
                <div className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                      tier.popular ? "bg-[#7c3aed] text-white" : "bg-[#7c3aed]/10 text-[#7c3aed]"
                    }`}
                  >
                    <tier.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 select-text">{tier.name}</h3>
                  <p className="text-gray-600 select-text">{tier.description}</p>
                </div>

                <div className="flex-grow">
                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full mr-3 flex-shrink-0 mt-2" />
                        <span className="text-sm text-gray-600 select-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-2xl font-bold text-[#1e3a8a] mb-6 select-text">Starting at {tier.price}</div>
                </div>

                <Link href="/contact">
                  <Button
                    className={`w-full transition-all duration-300 ${
                      tier.popular
                        ? "bg-[#7c3aed] hover:bg-[#7c3aed]/90 text-white"
                        : "bg-white border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed]"
                    }`}
                  >
                    <span className="select-text">Get Started</span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
