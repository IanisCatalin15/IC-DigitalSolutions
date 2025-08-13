import { Lightbulb, Target } from "lucide-react"

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2021 by a team of AI researchers and business strategists, IC Digital Solutions emerged from a simple
                observation: while AI technology was advancing rapidly, most businesses struggled to implement it
                effectively.
              </p>
              <p>
                We started with a mission to bridge this gap, combining deep technical expertise with practical business
                acumen. Our founders, having worked at leading tech companies and research institutions, understood both
                the immense potential of AI and the challenges organizations face in adoption.
              </p>
              <p>
                Today, we've helped over 50 companies across various industries transform their operations, reduce
                costs, and unlock new revenue streams through intelligent AI implementations. Our approach focuses on
                practical, measurable results rather than flashy technology for its own sake.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize AI by making advanced artificial intelligence accessible, practical, and profitable for
                businesses of all sizes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A world where every business can leverage AI to solve complex problems, enhance human capabilities, and
                create meaningful value for their customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
