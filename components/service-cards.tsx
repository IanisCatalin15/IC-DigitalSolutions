"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Zap, Target, Rocket, Shield, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Strategy Consulting",
    description: "Comprehensive AI roadmap and strategy development for your business transformation.",
    features: ["AI Readiness Assessment", "Custom Strategy Development", "Implementation Roadmap", "ROI Analysis"],
    price: "Starting at $5,000",
    popular: false,
  },
  {
    icon: Zap,
    title: "AI Automation Solutions",
    description: "Streamline operations with intelligent automation and process optimization.",
    features: ["Process Automation", "Workflow Optimization", "Custom AI Models", "Integration Support"],
    price: "Starting at $8,000",
    popular: true,
  },
  {
    icon: Target,
    title: "AI Training & Development",
    description: "Empower your team with comprehensive AI training and skill development programs.",
    features: ["Team Training Programs", "AI Workshops", "Certification Courses", "Ongoing Support"],
    price: "Starting at $3,000",
    popular: false,
  },
  {
    icon: Rocket,
    title: "Custom AI Development",
    description: "Bespoke AI solutions designed specifically for your unique business requirements.",
    features: ["Custom Model Development", "API Integration", "Performance Optimization", "Maintenance & Support"],
    price: "Starting at $15,000",
    popular: false,
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Ensure your AI implementations are secure, ethical, and compliant with regulations.",
    features: ["Security Audits", "Compliance Assessment", "Risk Management", "Ethical AI Guidelines"],
    price: "Starting at $4,000",
    popular: false,
  },
  {
    icon: BarChart3,
    title: "AI Analytics & Insights",
    description: "Transform your data into actionable insights with advanced AI analytics solutions.",
    features: ["Data Analysis", "Predictive Modeling", "Business Intelligence", "Custom Dashboards"],
    price: "Starting at $6,000",
    popular: false,
  },
]

export function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-ic-dark-blue mb-4">Comprehensive AI Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional AI services designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <Card
                className={`h-full transition-all duration-300 hover:shadow-2xl border-2 ${
                  service.popular ? "border-ic-tech-purple shadow-lg" : "border-gray-200 hover:border-ic-tech-purple/50"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ic-tech-purple text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      service.popular ? "bg-ic-tech-purple text-white" : "bg-ic-tech-purple/10 text-ic-tech-purple"
                    } transition-colors duration-300`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-ic-dark-blue mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-ic-electric-cyan rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-ic-dark-blue mb-4">{service.price}</p>
                    <Button
                      className={`w-full transition-all duration-300 ${
                        service.popular
                          ? "bg-ic-tech-purple hover:bg-ic-tech-purple/90 text-white"
                          : "bg-white border-2 border-ic-tech-purple text-ic-tech-purple hover:bg-ic-tech-purple hover:text-white"
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
