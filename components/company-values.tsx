import { Shield, Heart, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description:
      "We believe in transparent communication, ethical AI practices, and honest assessments of what AI can and cannot do for your business.",
  },
  {
    icon: Heart,
    title: "Human-Centered AI",
    description:
      "Our solutions enhance human capabilities rather than replace them, focusing on augmenting your team's potential and creativity.",
  },
  {
    icon: Zap,
    title: "Innovation & Excellence",
    description:
      "We stay at the forefront of AI technology while maintaining the highest standards of implementation and support.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We work as an extension of your team, providing ongoing support and optimization to ensure long-term success.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and shape how we work with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
