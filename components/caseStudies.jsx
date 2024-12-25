'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/placeholder.svg?height=480&width=720"
  },
  {
    title: "Mobile App for FitTech Solutions",
    description: "FitTech Solutions approached us to create a cutting-edge mobile application that would revolutionize personal fitness tracking. Our team developed an intuitive, feature-rich app that integrates with various wearable devices and provides personalized workout plans and nutrition advice.",
    image: "/placeholder.svg?height=480&width=720"
  },
  {
    title: "E-commerce Platform for GreenGrocer",
    description: "GreenGrocer, a startup focusing on delivering organic produce, needed a robust e-commerce platform. We designed and developed a user-friendly website and mobile app that streamlined the ordering process, implemented a sophisticated inventory management system, and integrated secure payment gateways.",
    image: "/placeholder.svg?height=480&width=720"
  }
]

const CaseStudies = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Recent
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">{study.title}</h3>
                <p className="text-gray-600 leading-relaxed">{study.description}</p>
                <Button variant="link" className="group p-0 h-auto font-semibold text-purple-600 hover:text-purple-700">
                  Read more
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-2xl transform rotate-3 scale-105" />
                <Image
                  src={study.image}
                  alt={study.title}
                  width={720}
                  height={480}
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

