"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce AI Chatbot Implementation",
    client: "TechStyle Fashion",
    industry: "E-commerce",
    image: "/modern-ecommerce-chatbot.png",
    problem:
      "TechStyle Fashion was struggling with high customer service costs and slow response times, leading to poor customer satisfaction and lost sales opportunities.",
    solution:
      "IC Digital Solutions implemented an AI-powered chatbot with natural language processing capabilities, integrated with their existing CRM and inventory systems for real-time product recommendations and order tracking.",
    results: [
      { metric: "Customer Satisfaction", improvement: "+40%" },
      { metric: "Response Time", improvement: "-85%" },
      { metric: "Support Costs", improvement: "-60%" },
    ],
    timeline: "3 months",
    tags: ["E-commerce", "Chatbot", "Customer Service"],
    roi: "300%",
  },
  {
    id: 2,
    title: "Healthcare AI Diagnostic System",
    client: "MedCare Solutions",
    industry: "Healthcare",
    image: "/medical-ai-diagnostic-interface.png",
    problem:
      "MedCare Solutions needed to improve diagnostic accuracy and reduce the time required for medical image analysis while maintaining strict compliance with healthcare regulations.",
    solution:
      "We developed a machine learning diagnostic tool that analyzes medical images, provides preliminary assessments, and integrates seamlessly with existing hospital management systems while ensuring HIPAA compliance.",
    results: [
      { metric: "Diagnostic Accuracy", improvement: "+35%" },
      { metric: "Analysis Time", improvement: "-70%" },
      { metric: "Patient Throughput", improvement: "+50%" },
    ],
    timeline: "6 months",
    tags: ["Healthcare", "Machine Learning", "Diagnostics"],
    roi: "250%",
  },
  {
    id: 3,
    title: "Financial AI Risk Assessment",
    client: "Capital Insights",
    industry: "Financial Services",
    image: "/financial-analytics-dashboard.png",
    problem:
      "Capital Insights required a more sophisticated risk assessment system to evaluate loan applications faster while reducing default rates and maintaining regulatory compliance.",
    solution:
      "IC Digital Solutions created an automated risk assessment platform using advanced AI algorithms that analyze multiple data sources, credit histories, and market conditions to provide comprehensive risk profiles.",
    results: [
      { metric: "Processing Speed", improvement: "+60%" },
      { metric: "Default Rate Reduction", improvement: "-45%" },
      { metric: "Approval Accuracy", improvement: "+80%" },
    ],
    timeline: "4 months",
    tags: ["Finance", "Risk Assessment", "Automation"],
    roi: "400%",
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-ic-dark-blue mb-4 font-heading">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Real results from our AI implementations across diverse industries
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ic-dark-blue/30 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-ic-tech-purple text-white font-semibold">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {study.roi} ROI
                      </Badge>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-ic-tech-purple/10 text-ic-tech-purple border-ic-tech-purple/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl lg:text-3xl font-bold text-ic-dark-blue mb-2 font-heading">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-600 font-body">
                        {study.client} • {study.industry}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      {/* Problem */}
                      <div>
                        <h4 className="font-semibold text-ic-dark-blue mb-2 flex items-center font-heading">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed font-body">{study.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="font-semibold text-ic-dark-blue mb-2 flex items-center font-heading">
                          <div className="w-2 h-2 bg-ic-tech-purple rounded-full mr-3"></div>
                          Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed font-body">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-ic-dark-blue mb-4 flex items-center font-heading">
                          <div className="w-2 h-2 bg-ic-electric-cyan rounded-full mr-3"></div>
                          Results
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {study.results.map((result, resultIndex) => (
                            <motion.div
                              key={resultIndex}
                              className="text-center p-4 bg-gradient-to-br from-ic-tech-purple/5 to-ic-electric-cyan/5 rounded-lg border border-ic-tech-purple/10"
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="text-2xl font-bold text-ic-tech-purple mb-1 font-heading">
                                {result.improvement}
                              </div>
                              <div className="text-sm text-gray-600 font-body">{result.metric}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center text-gray-600 pt-4 border-t border-gray-200">
                        <Clock className="w-4 h-4 mr-2 text-ic-tech-purple" />
                        <span className="text-sm font-body">Project Timeline: {study.timeline}</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
