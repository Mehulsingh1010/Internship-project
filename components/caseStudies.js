import Image from "next/image"
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/cs1.png"
  },
  {
    title: "Mobile App for FitTech Solutions",
    description: "FitTech Solutions approached us to create a cutting-edge mobile application that would revolutionize personal fitness tracking. Our team developed an intuitive, feature-rich app that integrates with various wearable devices and provides personalized workout plans and nutrition advice.",
    image: "/cs2.png"
  },
  {
    title: "E-commerce Platform for GreenGrocer",
    description: "GreenGrocer, a startup focusing on delivering organic produce, needed a robust e-commerce platform. We designed and developed a user-friendly website and mobile app that streamlined the ordering process, implemented a sophisticated inventory management system, and integrated secure payment gateways.",
    image: "/cs3.png"
  }
]

const CaseStudies = () => {
  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Header */}
          <div className="text-center space-y-2 sm:space-y-4">
            <div className="w-12 h-1 bg-purple-600 mx-auto" />
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-800">Our recent</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Case studies</h2>
          </div>

          {/* Case Studies */}
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-gradient-to-r from-blue-50 to-white rounded-3xl p-6 sm:p-8">
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-[480px] w-full lg:w-1/2">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="rounded-2xl "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {study.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {study.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
                >
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default CaseStudies

