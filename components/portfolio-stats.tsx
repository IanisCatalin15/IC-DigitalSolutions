"use client"

import { motion } from "framer-motion"
import { Users, Target, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: Target,
    number: "50+",
    label: "AI Projects Delivered",
  },
  {
    icon: Users,
    number: "25+",
    label: "Enterprise Clients",
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Average ROI Increase",
  },
  {
    icon: Award,
    number: "95%",
    label: "Client Satisfaction",
  },
]

export default function PortfolioStats() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0d1b2a] mb-4 font-heading">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body select-text">
            Measurable results that demonstrate our commitment to AI excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-[#6c63ff]/5 to-[#00e5ff]/5 rounded-xl border border-[#6c63ff]/10 p-8 text-center"
            >
              <div className="w-12 h-12 bg-[#6c63ff] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-[#6c63ff] mb-2 font-heading select-text">{stat.number}</div>
              <div className="text-gray-600 font-body select-text">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
