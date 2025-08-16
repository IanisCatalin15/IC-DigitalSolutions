"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Healthcare: Transforming Patient Care in 2024",
    excerpt:
      "Explore how artificial intelligence is revolutionizing healthcare delivery, from diagnostic accuracy to personalized treatment plans and operational efficiency.",
    category: "AI Trends",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/ai-healthcare-future.png",
    featured: true,
    tags: ["Healthcare", "AI Diagnostics", "Patient Care"],
  },
  {
    id: 2,
    title: "ROI Analysis: Measuring Success in AI Implementation Projects",
    excerpt:
      "A comprehensive guide to calculating and maximizing return on investment for AI initiatives, with real-world case studies and metrics.",
    category: "Whitepapers",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    image: "/ai-roi-analysis.png",
    featured: false,
    tags: ["ROI", "Business Strategy", "Implementation"],
  },
  {
    id: 3,
    title: "Chatbot Evolution: From Rule-Based to Conversational AI",
    excerpt:
      "Discover the journey of chatbot technology and how modern conversational AI is transforming customer service and business operations.",
    category: "Case Studies",
    author: "Lisa Park",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/chatbot-evolution.png",
    featured: false,
    tags: ["Chatbots", "Customer Service", "NLP"],
  },
  {
    id: 4,
    title: "AI Ethics and Compliance: Navigating the Regulatory Landscape",
    excerpt:
      "Understanding the ethical implications and regulatory requirements for AI implementation in different industries and regions.",
    category: "Insights",
    author: "James Thompson",
    date: "2024-01-08",
    readTime: "10 min read",
    image: "/ai-ethics-compliance.png",
    featured: false,
    tags: ["Ethics", "Compliance", "Regulation"],
  },
  {
    id: 5,
    title: "Machine Learning in Financial Services: Risk Assessment Revolution",
    excerpt:
      "How machine learning algorithms are transforming risk assessment, fraud detection, and investment strategies in the financial sector.",
    category: "Case Studies",
    author: "Dr. Sarah Chen",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "/ml-financial-services.png",
    featured: true,
    tags: ["Machine Learning", "Finance", "Risk Assessment"],
  },
  {
    id: 6,
    title: "Automation Trends 2024: What Every Business Leader Should Know",
    excerpt:
      "Key automation trends shaping the business landscape in 2024, from intelligent process automation to AI-driven decision making.",
    category: "AI Trends",
    author: "Michael Rodriguez",
    date: "2024-01-03",
    readTime: "7 min read",
    image: "/automation-trends-2024.png",
    featured: false,
    tags: ["Automation", "Business Strategy", "Trends"],
  },
]

const categories = ["All", "AI Trends", "Case Studies", "Whitepapers", "Insights"]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent font-body"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-[#6c63ff] text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-[#0d1b2a] mb-8 font-heading">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <div className="relative h-64">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#6c63ff] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4 font-body">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-[#0d1b2a] mb-4 font-heading select-text group-hover:text-[#6c63ff] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-body select-text">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-body select-text">By {post.author}</span>
                      <Link
                        href={`#`}
                        className="inline-flex items-center text-[#6c63ff] hover:text-[#6c63ff]/80 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#0d1b2a] mb-8 font-heading">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#6c63ff] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3 font-body">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                      <Clock className="w-3 h-3 ml-3 mr-1" />
                      {post.readTime}
                    </div>
                    <h3 className="text-lg font-bold text-[#0d1b2a] mb-3 font-heading select-text group-hover:text-[#6c63ff] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed font-body select-text line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-body select-text">By {post.author}</span>
                      <Link
                        href={`#`}
                        className="inline-flex items-center text-[#6c63ff] hover:text-[#6c63ff]/80 text-sm font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-[#0d1b2a] mb-4 font-heading">No articles found</h3>
            <p className="text-gray-600 mb-8 font-body">
              Try adjusting your search terms or browse different categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-[#6c63ff] hover:bg-[#6c63ff]/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
