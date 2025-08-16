"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, Clock, DollarSign, Shield, Zap } from "lucide-react"

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
    questions: [
      {
        question: "What types of AI solutions do you provide?",
        answer:
          "We offer comprehensive AI consulting services including AI strategy development, process automation, chatbot implementation, predictive analytics, machine learning solutions, and custom AI application development. Our solutions span across industries including healthcare, finance, e-commerce, and manufacturing.",
      },
      {
        question: "How do you ensure AI solutions align with our business goals?",
        answer:
          "We start every project with a thorough business analysis and strategy session. Our team works closely with your stakeholders to understand your specific challenges, objectives, and KPIs. We then develop a custom AI roadmap that directly addresses your business needs and ensures measurable ROI.",
      },
      {
        question: "Do you work with businesses of all sizes?",
        answer:
          "Yes, we work with startups, SMEs, and enterprise-level organizations. Our three-tier service structure (AI Training & Compliance, AI Strategy & Automation, and AI Development & Analytics) is designed to accommodate different business sizes and requirements.",
      },
    ],
  },
  {
    id: "implementation",
    title: "Implementation & Timeline",
    icon: Clock,
    questions: [
      {
        question: "How long does a typical AI implementation take?",
        answer:
          "Implementation timelines vary based on project complexity. Simple AI chatbots can be deployed in 4-6 weeks, while comprehensive AI systems typically take 3-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the process.",
      },
      {
        question: "What is your implementation process?",
        answer:
          "Our process includes: 1) Discovery and strategy development, 2) Technical architecture design, 3) AI model development and training, 4) Integration and testing, 5) Deployment and optimization, 6) Training and ongoing support. We use agile methodologies to ensure flexibility and regular progress updates.",
      },
      {
        question: "Do you provide training for our team?",
        answer:
          "We include comprehensive training as part of our service packages. This covers system usage, best practices, troubleshooting, and ongoing optimization. We also provide documentation and video tutorials to ensure your team can effectively manage the AI solutions.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & ROI",
    icon: DollarSign,
    questions: [
      {
        question: "How do you structure your pricing?",
        answer:
          "We offer three main service tiers: AI Training & Compliance ($4,000), AI Strategy & Automation ($6,000), and AI Development & Analytics ($10,000). Each package includes specific deliverables and ongoing support. We also offer custom enterprise solutions with flexible pricing based on scope and requirements.",
      },
      {
        question: "What kind of ROI can we expect?",
        answer:
          "Our clients typically see ROI between 250-400% within the first year. Specific returns depend on the implementation scope, but common benefits include 40-85% reduction in processing time, 35-60% improvement in accuracy, and 45-70% reduction in operational costs.",
      },
      {
        question: "Do you offer payment plans or financing options?",
        answer:
          "Yes, we offer flexible payment structures including milestone-based payments, monthly installments, and performance-based pricing models. We work with each client to find a payment structure that aligns with their budget and cash flow requirements.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical & Security",
    icon: Shield,
    questions: [
      {
        question: "How do you ensure data security and privacy?",
        answer:
          "We implement enterprise-grade security measures including end-to-end encryption, secure API protocols, GDPR compliance, and regular security audits. All data processing follows industry best practices, and we can work within your existing security frameworks and compliance requirements.",
      },
      {
        question: "Can AI solutions integrate with our existing systems?",
        answer:
          "Yes, our AI solutions are designed for seamless integration with existing business systems including CRMs, ERPs, databases, and third-party applications. We use standard APIs and protocols to ensure compatibility and minimal disruption to your current workflows.",
      },
      {
        question: "What ongoing support do you provide?",
        answer:
          "We provide comprehensive ongoing support including system monitoring, performance optimization, regular updates, troubleshooting, and strategic consultation. Our support packages range from basic maintenance to full managed services depending on your needs.",
      },
    ],
  },
]

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleQuestion = (questionIndex: string) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex)
  }

  const activeQuestions = faqCategories.find((cat) => cat.id === activeCategory)?.questions || []

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#00e5ff]/10 to-[#6c63ff]/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b2a] mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body select-text">
            Get answers to common questions about our AI consulting services and implementation process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="space-y-2 sticky top-8">
              {faqCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setOpenQuestion(null)
                    }}
                    className={`w-full flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-[#6c63ff] to-[#6c63ff]/90 text-white shadow-lg"
                        : "bg-gray-50 hover:bg-gray-100 text-[#0d1b2a]"
                    }`}
                  >
                    <IconComponent className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="font-medium font-heading">{category.title}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Questions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {activeQuestions.map((faq, index) => {
                const questionId = `${activeCategory}-${index}`
                const isOpen = openQuestion === questionId

                return (
                  <motion.div
                    key={questionId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-lg font-semibold text-[#0d1b2a] font-heading select-text pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-[#6c63ff]" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed font-body select-text">{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-[#6c63ff]/5 to-[#00e5ff]/5 border border-[#6c63ff]/10 rounded-2xl p-8 text-center"
            >
              <Zap className="w-12 h-12 text-[#6c63ff] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0d1b2a] mb-4 font-heading">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6 font-body select-text">
                Our AI experts are ready to discuss your specific needs and provide personalized recommendations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6c63ff] hover:bg-[#6c63ff]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
