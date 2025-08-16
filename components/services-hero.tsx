"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Cog, TrendingUp } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-[#7c3aed]/5 animate-gradient overflow-hidden py-20">
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20 rounded-full blur-xl"
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
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#06b6d4]/20 to-[#7c3aed]/20 rounded-full blur-xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gradient-to-r from-[#7c3aed]/10 to-[#06b6d4]/10 border border-[#7c3aed]/20 text-[#7c3aed] px-6 py-3 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Comprehensive AI Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight mb-6 select-text"
        >
          AI Solutions That Drive Your <span className="text-[#7c3aed]">Business Goals</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-16 select-text"
        >
          Transform your business with our comprehensive AI consulting services, from strategic planning to
          implementation and optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#7c3aed]/80 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#1e3a8a] mb-2 select-text">Strategic Planning</h3>
            <p className="text-gray-600 text-sm select-text">
              Develop comprehensive AI strategies aligned with your business objectives
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#06b6d4] to-[#06b6d4]/80 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Cog className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#1e3a8a] mb-2 select-text">Implementation</h3>
            <p className="text-gray-600 text-sm select-text">
              Expert implementation of AI solutions with seamless integration
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] rounded-full flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-[#1e3a8a] mb-2 select-text">Optimization</h3>
            <p className="text-gray-600 text-sm select-text">
              Continuous optimization and performance monitoring for maximum ROI
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
