"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-200/30"
      }`}
      id="navigation"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Updated for IC Digital Solutions */}
          <Link
            href="/"
            className="flex items-center space-x-3 group flex-shrink-0"
            aria-label="IC Digital Solutions Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-ic-tech-purple to-ic-electric-cyan rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Zap className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-ic-dark-blue leading-tight">IC Digital</span>
              <span className="text-xs text-ic-tech-purple font-medium -mt-1">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto" role="menubar">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                role="none"
              >
                <Link
                  href={item.href}
                  className="relative text-gray-700 hover:text-ic-tech-purple transition-colors duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-ic-tech-purple focus:ring-offset-2 rounded-md px-2 py-1"
                  role="menuitem"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ic-tech-purple transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  ></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                className="bg-ic-tech-purple hover:bg-ic-tech-purple/90 text-white transition-all duration-300 hover:shadow-lg hover:shadow-ic-tech-purple/25 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ic-tech-purple"
              >
                <Link href="/contact" aria-label="Get started with IC Digital Solutions">
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-ic-dark-blue hover:text-ic-tech-purple hover:bg-ic-tech-purple/10 focus:ring-2 focus:ring-ic-tech-purple focus:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
              <div className="flex flex-col items-end space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    role="none"
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-ic-tech-purple hover:bg-ic-tech-purple/10 transition-colors duration-200 font-medium rounded-md text-right focus:outline-none focus:ring-2 focus:ring-ic-tech-purple focus:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                      aria-label={`Navigate to ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="px-3 py-2"
                  role="none"
                >
                  <Button
                    asChild
                    className="bg-ic-tech-purple hover:bg-ic-tech-purple/90 text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ic-tech-purple"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact" aria-label="Get started with IC Digital Solutions">
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
