import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former AI Research Lead at Google with 10+ years in machine learning and natural language processing. PhD in Computer Science from Stanford.",
    image: "",
    expertise: ["AI Strategy", "Machine Learning", "Leadership"],
    social: {
      linkedin: "#",
      twitter: "#",
              email: "sarah@ic-digitalsolutions.com",
    },
  },
  {
    name: "Johnny ",
    role: "CTO & Co-Founder",
    bio: "Ex-Microsoft Principal Engineer specializing in AI infrastructure and scalable systems. Led AI implementations for Fortune 500 companies.",
    image: "/engineer.jpg",
    expertise: ["AI Infrastructure", "System Architecture", "Engineering"],
    social: {
      linkedin: "#",
      twitter: "#",
              email: "marcus@ic-digitalsolutions.com",
    },
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Strategy",
    bio: "Former McKinsey consultant with expertise in AI transformation strategies. PhD in Business Analytics from Wharton School.",
    image: "/professional-woman-strategist.png",
    expertise: ["Business Strategy", "AI Consulting", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#",
              email: "emily@ic-digitalsolutions.com",
    },
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    bio: "Pioneering expert in AI engineering and model optimization. Former researcher at OpenAI with 50+ published papers.",
    image: "/professional-man-engineer.png",
    expertise: ["AI Engineering", "Model Optimization", "Research"],
    social: {
      linkedin: "#",
      twitter: "#",
              email: "david@ic-digitalsolutions.com",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of AI experts, engineers, and strategists brings together decades of experience from
            leading tech companies and research institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
