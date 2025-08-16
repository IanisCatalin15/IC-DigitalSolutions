"use client"

import { motion } from "framer-motion"
import { Star, Quote, Play, ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CEO",
    company: "TechStyle Fashion",
    industry: "E-commerce",
    avatar: "/professional-woman-ceo.png",
    companyLogo: "/fashion-tech-logo.png",
    rating: 5,
    quote:
      "IC Digital Solutions transformed our customer service with their AI chatbot implementation. We saw a 300% ROI within just 3 months, and our customer satisfaction scores increased by 40%. Their team's expertise in AI consulting is unmatched.",
    results: [
      { metric: "300%", label: "ROI" },
      { metric: "40%", label: "Customer Satisfaction" },
      { metric: "85%", label: "Faster Response Time" },
    ],
    videoThumbnail: "/video-testimonial-thumbnail.png",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    position: "Chief Medical Officer",
    company: "MedCare Solutions",
    industry: "Healthcare",
    avatar: "/professional-doctor-medical.png",
    companyLogo: "/placeholder-u71ex.png",
    rating: 5,
    quote:
      "The AI diagnostic system developed by IC Digital Solutions has revolutionized our patient care. We've achieved 35% better diagnostic accuracy and reduced analysis time by 70%. This technology is a game-changer for healthcare.",
    results: [
      { metric: "250%", label: "ROI" },
      { metric: "35%", label: "Diagnostic Accuracy" },
      { metric: "70%", label: "Faster Analysis" },
    ],
    videoThumbnail: "/placeholder-rue3m.png",
    hasVideo: true,
  },
  {
    id: 3,
    name: "James Thompson",
    position: "Head of Risk Management",
    company: "Capital Insights",
    industry: "Financial Services",
    avatar: "/finance-executive.png",
    companyLogo: "/financial-services-logo.png",
    rating: 5,
    quote:
      "Working with IC Digital Solutions on our AI risk assessment platform delivered exceptional results. We achieved 400% ROI in 4 months and significantly improved our lending decisions. Their AI expertise is world-class.",
    results: [
      { metric: "400%", label: "ROI" },
      { metric: "60%", label: "Processing Speed" },
      { metric: "45%", label: "Risk Reduction" },
    ],
    videoThumbnail: "/placeholder-w6tbm.png",
    hasVideo: false,
  },
  {
    id: 4,
    name: "Lisa Park",
    position: "Operations Director",
    company: "AutoFlow Manufacturing",
    industry: "Manufacturing",
    avatar: "/professional-operations-director.png",
    companyLogo: "/manufacturing-company-logo.png",
    rating: 5,
    quote:
      "IC Digital Solutions automated our entire quality control process with AI. We reduced defects by 65% and increased production efficiency by 45%. The implementation was seamless and the results exceeded our expectations.",
    results: [
      { metric: "350%", label: "ROI" },
      { metric: "65%", label: "Defect Reduction" },
      { metric: "45%", label: "Efficiency Gain" },
    ],
    videoThumbnail: "/manufacturing-testimonial.png",
    hasVideo: true,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#6c63ff]/10 to-[#00e5ff]/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d1b2a] mb-4 font-heading">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body select-text">
            Real results from businesses that transformed with our AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentTestimonial.videoThumbnail || "/placeholder.svg"}
                alt={`${currentTestimonial.name} testimonial`}
                width={500}
                height={300}
                className="w-full h-64 lg:h-80 object-cover"
                priority
              />
              {currentTestimonial.hasVideo && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.button
                    onClick={() => setShowVideo(true)}
                    className="bg-white/90 hover:bg-white text-[#6c63ff] p-4 rounded-full shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </motion.button>
                </div>
              )}
            </div>

            {/* Results Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {currentTestimonial.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-[#6c63ff]/10 rounded-lg p-4 text-center shadow-lg"
                >
                  <div className="text-2xl font-bold text-[#6c63ff] mb-1 font-heading select-text">{result.metric}</div>
                  <div className="text-sm text-gray-600 font-body select-text">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#6c63ff]/20" />
              <blockquote className="text-xl lg:text-2xl text-[#0d1b2a] leading-relaxed font-body select-text pl-8">
                "{currentTestimonial.quote}"
              </blockquote>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center space-x-4">
              <Image
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold text-[#0d1b2a] text-lg font-heading select-text">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 font-body select-text">{currentTestimonial.position}</p>
                <div className="flex items-center mt-2">
                  <Image
                    src={currentTestimonial.companyLogo || "/placeholder.svg"}
                    alt={currentTestimonial.company}
                    width={100}
                    height={30}
                    className="h-6 w-auto"
                  />
                  <span className="text-sm text-gray-500 ml-2 font-body select-text">
                    • {currentTestimonial.industry}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#6c63ff]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-gray-300 hover:border-[#6c63ff] hover:text-[#6c63ff] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gray-300 hover:border-[#6c63ff] hover:text-[#6c63ff] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
