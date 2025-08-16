"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Loader2, Zap } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)

    try {
      // Simulate newsletter subscription
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simple success handling without toast for now
      setEmail("")
    } catch (error) {
      // Simple error handling without toast for now
    } finally {
      setIsSubscribing(false)
    }
  }

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Careers", href: "#" },
      { label: "Case Studies", href: "/portfolio" },
    ],
    services: [
      { label: "AI Strategy Consulting", href: "/services" },
      { label: "Process Automation", href: "/services" },
      { label: "Custom AI Development", href: "/services" },
      { label: "AI Training", href: "/services" },
    ],

    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR Compliance", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-ic-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-ic-tech-purple to-ic-electric-cyan rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">IC Digital</span>
                <span className="text-sm text-ic-electric-cyan font-medium -mt-1">Solutions</span>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses with intelligent AI solutions and cutting-edge automation. We help companies
              unlock the power of artificial intelligence through expert consulting and custom implementations.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-ic-electric-cyan">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-ic-tech-purple"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-ic-tech-purple hover:bg-ic-tech-purple/90 px-4"
                >
                  {isSubscribing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-ic-electric-cyan" />
                <span>+40 743 609 925</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-ic-electric-cyan" />
                <span>contact@ic-digitalsolutions.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-ic-electric-cyan" />
                <span>Bucharest, Romania</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-ic-electric-cyan">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-ic-electric-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-ic-electric-cyan">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-ic-electric-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4 text-ic-electric-cyan">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-ic-electric-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">© 2024 IC Digital Solutions. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-ic-electric-cyan transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
