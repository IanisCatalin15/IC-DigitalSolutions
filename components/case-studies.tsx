"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    title: "E-commerce AI Chatbot Implementation",
    client: "TechStyle Fashion",
    industry: "E-commerce",
    image: "/modern-ecommerce-chatbot.png",
    roi: "300%",
    timeline: "3 months",
    tags: ["AI Chatbot", "Customer Service", "E-commerce"],
    problem:
      "High customer service costs and slow response times were impacting customer satisfaction and operational efficiency.",
    solution:
      "Implemented an intelligent AI chatbot with natural language processing, product recommendations, and seamless human handoff capabilities.",
    results: [
      { metric: "+40%", label: "Customer Satisfaction" },
      { metric: "-85%", label: "Response Time" },
      { metric: "-60%", label: "Support Costs" },
    ],
  },
  {
    title: "Healthcare AI Diagnostic System",
    client: "MedCare Solutions",
    industry: "Healthcare",
    image: "/medical-ai-diagnostic-interface.png",
    roi: "250%",
    timeline: "6 months",
    tags: ["Medical AI", "Diagnostics", "Healthcare"],
    problem:
      "Manual diagnostic processes were time-consuming and prone to human error, creating bottlenecks in patient care.",
    solution:
      "Developed an AI-powered diagnostic system using machine learning algorithms to analyze medical images and patient data for faster, more accurate diagnoses.",
    results: [
      { metric: "+35%", label: "Diagnostic Accuracy" },
      { metric: "-70%", label: "Analysis Time" },
      { metric: "+50%", label: "Patient Throughput" },
    ],
  },
  {
    title: "Financial AI Risk Assessment",
    client: "Capital Insights",
    industry: "Financial Services",
    image: "/financial-analytics-dashboard.png",
    roi: "400%",
    timeline: "4 months",
    tags: ["Risk Assessment", "Financial AI", "Analytics"],
    problem:
      "Traditional risk assessment methods were slow and often missed critical patterns, leading to suboptimal lending decisions.",
    solution:
      "Built a comprehensive AI risk assessment platform using advanced algorithms to analyze credit patterns, market data, and behavioral indicators.",
    results: [
      { metric: "+60%", label: "Processing Speed" },
      { metric: "-45%", label: "Default Rate Reduction" },
      { metric: "+80%", label: "Approval Accuracy" },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0d1b2a] mb-4 font-heading">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body select-text">
            Real results from our AI implementations across diverse industries
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/30 to-transparent" />

                    <div className="absolute top-4 right-4 bg-[#6c63ff] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {study.roi} ROI
                    </div>
                  </motion.div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#6c63ff]/10 text-[#6c63ff] px-3 py-1 rounded-full text-sm border border-[#6c63ff]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0d1b2a] mb-2 font-heading select-text">
                    {study.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 font-body select-text">
                    {study.client} • {study.industry}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <h4 className="font-semibold text-[#0d1b2a] font-heading">Challenge</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-body select-text ml-5">{study.problem}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-[#6c63ff] rounded-full mr-3"></div>
                      <h4 className="font-semibold text-[#0d1b2a] font-heading">Solution</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-body select-text ml-5">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-2 h-2 bg-[#00e5ff] rounded-full mr-3"></div>
                      <h4 className="font-semibold text-[#0d1b2a] font-heading">Results</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-5">
                      {study.results.map((result, resultIndex) => (
                        <motion.div
                          key={resultIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="bg-gradient-to-br from-[#6c63ff]/5 to-[#00e5ff]/5 border border-[#6c63ff]/10 rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-[#6c63ff] mb-1 font-heading select-text">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600 font-body select-text">{result.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center text-sm font-body select-text">
                      <Clock className="w-4 h-4 mr-2 text-[#6c63ff]" />
                      Project Timeline: {study.timeline}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
