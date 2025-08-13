"use client"

import { motion } from "framer-motion"
import { Sparkles, Target, Zap } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-ic-tech-purple/5 animate-gradient"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-ic-tech-purple/20 to-ic-electric-cyan/20 rounded-full mix-blend-multiply filter blur-xl"
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
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-ic-electric-cyan/20 to-ic-tech-purple/20 rounded-full mix-blend-multiply filter blur-xl"
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-ic-tech-purple/10 to-ic-electric-cyan/10 border border-ic-tech-purple/20 text-ic-tech-purple text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Comprehensive AI Solutions
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ic-dark-blue mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI Services Tailored to Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ic-tech-purple to-ic-electric-cyan">
              Business Goals
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From strategy consulting to full-scale AI implementation, our comprehensive service portfolio is designed to
            transform your business operations and drive unprecedented growth.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ic-tech-purple to-ic-tech-purple/80 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-ic-dark-blue mb-2">Strategic Planning</h3>
              <p className="text-gray-600 text-center text-sm">
                Custom AI roadmaps aligned with your business objectives
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ic-electric-cyan to-ic-electric-cyan/80 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-ic-dark-blue mb-2">Implementation</h3>
              <p className="text-gray-600 text-center text-sm">End-to-end AI solution development and deployment</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-ic-tech-purple to-ic-electric-cyan rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-ic-dark-blue mb-2">Optimization</h3>
              <p className="text-gray-600 text-center text-sm">Continuous improvement and performance monitoring</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
