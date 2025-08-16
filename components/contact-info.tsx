"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
            details: "contact@ic-digitalsolutions.com",
    description: "Send us an email anytime",
    color: "from-ic-tech-purple to-ic-tech-purple/80",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "0743609925",
    description: "Mon-Fri from 9am to 6pm PST",
    color: "from-ic-electric-cyan to-ic-electric-cyan/80",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Innovation Drive, Suite 400",
    description: "San Francisco, CA 94105",
    color: "from-ic-tech-purple to-ic-electric-cyan",
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Within 24 hours",
    description: "We'll get back to you quickly",
    color: "from-ic-electric-cyan to-ic-tech-purple",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    details: "Available Now",
    description: "Chat with our AI experts",
    color: "from-ic-tech-purple/80 to-ic-tech-purple",
  },
  {
    icon: Calendar,
    title: "Book a Meeting",
    details: "Schedule a Call",
    description: "Free 30-minute consultation",
    color: "from-ic-electric-cyan/80 to-ic-electric-cyan",
  },
]

export function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-ic-dark-blue mb-4">Multiple Ways to Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the communication method that works best for you. Our team is ready to help transform your business
            with AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-gray-200/50 hover:border-ic-tech-purple/30 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ic-dark-blue mb-3">{info.title}</h3>
                    <p className="text-ic-tech-purple font-semibold text-lg mb-2">{info.details}</p>
                    <p className="text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-ic-tech-purple to-ic-electric-cyan rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join over 100+ businesses that have transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@ic-digitalsolutions.com"
                className="bg-white text-ic-tech-purple px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Send Email
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-ic-tech-purple transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
