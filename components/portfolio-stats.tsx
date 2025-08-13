"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award, Clock, Target, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Successful Projects",
    description: "Delivered across various industries",
    color: "from-ic-tech-purple to-ic-tech-purple/80",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI",
    description: "Return on AI investment for clients",
    color: "from-ic-electric-cyan to-ic-electric-cyan/80",
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys",
    color: "from-ic-tech-purple to-ic-electric-cyan",
  },
  {
    icon: Clock,
    value: "60%",
    label: "Time Savings",
    description: "Average efficiency improvement",
    color: "from-ic-electric-cyan to-ic-tech-purple",
  },
  {
    icon: Target,
    value: "25+",
    label: "Industries Served",
    description: "From healthcare to finance",
    color: "from-ic-tech-purple/80 to-ic-tech-purple",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "AI Solutions",
    description: "Always-on intelligent systems",
    color: "from-ic-electric-cyan/80 to-ic-electric-cyan",
  },
]

export function PortfolioStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-ic-dark-blue mb-4 font-heading">Proven Track Record</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Numbers that demonstrate IC Digital Solutions' commitment to delivering exceptional AI results and
            measurable business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group"
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  className="text-4xl sm:text-5xl font-bold text-ic-dark-blue mb-2 font-heading"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-semibold text-ic-dark-blue mb-2 font-heading">{stat.label}</div>
                <div className="text-gray-600 text-sm leading-relaxed font-body">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional testimonial section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-ic-tech-purple/5 to-ic-electric-cyan/5 rounded-2xl p-8 border border-ic-tech-purple/10">
            <blockquote className="text-xl sm:text-2xl text-gray-700 mb-6 font-body italic">
              "IC Digital Solutions transformed our business operations with their AI expertise. The results exceeded
              our expectations, and their team's professionalism was outstanding."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-ic-tech-purple to-ic-electric-cyan rounded-full flex items-center justify-center">
                <span className="text-white font-bold font-heading">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-ic-dark-blue font-heading">John Smith</div>
                <div className="text-gray-600 text-sm font-body">CEO, TechStyle Fashion</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
