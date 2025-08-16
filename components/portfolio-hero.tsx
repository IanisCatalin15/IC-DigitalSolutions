"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, TrendingUp } from "lucide-react"

export default function PortfolioHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-[#6c63ff]/5 animate-gradient overflow-hidden py-20">
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#6c63ff]/20 to-[#00e5ff]/20 rounded-full blur-3xl"
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
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#00e5ff]/20 to-[#6c63ff]/20 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gradient-to-r from-[#6c63ff]/10 to-[#00e5ff]/10 border border-[#6c63ff]/20 text-[#6c63ff] px-6 py-3 rounded-full mb-8"
        >
          <Award className="w-4 h-4 mr-2" />
          Proven AI Success Stories
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0d1b2a] leading-tight mb-6 font-heading"
        >
          Transforming Businesses with <span className="text-[#6c63ff]">AI Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16 font-body select-text"
        >
          Discover how we've helped leading companies achieve remarkable results through cutting-edge AI solutions and
          strategic implementations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#6c63ff] to-[#6c63ff]/80 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-semibold text-[#0d1b2a] mb-2 font-heading">50+</div>
            <div className="text-gray-600 text-center text-sm font-body">Projects Completed</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#00e5ff] to-[#00e5ff]/80 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-semibold text-[#0d1b2a] mb-2 font-heading">25+</div>
            <div className="text-gray-600 text-center text-sm font-body">Happy Clients</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6 text-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#6c63ff] to-[#00e5ff] rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-semibold text-[#0d1b2a] mb-2 font-heading">95%</div>
            <div className="text-gray-600 text-center text-sm font-body">Success Rate</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
