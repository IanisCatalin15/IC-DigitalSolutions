"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/typewriter-text"
import { ArrowRight, Sparkles, Brain, Target, Zap } from "lucide-react"

export function HeroSection() {
  const typewriterTexts = [
    "Intelligent Automation",
    "Data-Driven Insights",
    "AI-Powered Growth",
    "Smart Business Solutions",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-ic-tech-purple/5 animate-gradient"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-ic-tech-purple/20 to-ic-electric-cyan/20 rounded-full mix-blend-multiply filter blur-xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-ic-electric-cyan/20 to-ic-tech-purple/20 rounded-full mix-blend-multiply filter blur-xl"
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
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-ic-tech-purple/10 to-ic-electric-cyan/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
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
            <Zap className="w-4 h-4 mr-2" />
            Transforming Business with AI Intelligence
          </motion.div>

          {/* Main headline with typewriter */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-ic-dark-blue mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Unlock the Power of <br className="hidden sm:block" />
            <TypewriterText texts={typewriterTexts} className="text-ic-tech-purple" />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            IC Digital Solutions delivers cutting-edge AI consulting and automation services that transform your
            business operations, boost efficiency, and drive unprecedented growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-ic-tech-purple hover:bg-ic-tech-purple/90 text-white text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 h-auto rounded-full border-2 border-ic-tech-purple text-ic-tech-purple hover:bg-ic-tech-purple hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ic-tech-purple to-ic-tech-purple/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-ic-dark-blue mb-3">AI Strategy Consulting</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Custom AI roadmaps and implementation strategies tailored to your specific business objectives and
                industry requirements.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ic-electric-cyan to-ic-electric-cyan/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-ic-dark-blue mb-3">Process Automation</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Streamline operations with intelligent automation solutions that reduce costs and improve efficiency
                across your organization.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-ic-tech-purple to-ic-electric-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl text-ic-dark-blue mb-3">Data Analytics</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Transform raw data into actionable insights with advanced AI analytics and predictive modeling
                capabilities.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
