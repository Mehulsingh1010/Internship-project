'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const SoftwareBuildingSection = () => {
  const sections = [
    {
      title: "Build the right team to scale",
      description: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).",
      image: "/placeholder.svg?height=400&width=600",
      quote: "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      author: "Jeewa markram",
      role: "CEO"
    },
    {
      title: "Develop innovative solutions",
      description: "Our team of experts uses cutting-edge technologies to develop innovative solutions that address your unique business challenges and drive growth.",
      image: "/placeholder.svg?height=400&width=600",
      quote: "The innovative solutions provided by the team have significantly improved our operational efficiency.",
      author: "Sarah Johnson",
      role: "CTO"
    },
    {
      title: "Accelerate your digital transformation",
      description: "We help you leverage the latest technologies to accelerate your digital transformation journey, ensuring you stay ahead in the competitive landscape.",
      image: "/placeholder.svg?height=400&width=600",
      quote: "Our digital transformation has been seamless thanks to their expertise and dedication.",
      author: "Michael Chen",
      role: "Digital Transformation Lead"
    }
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-24"
        >
          <h2 className="text-3xl font-medium">Way of building</h2>
          <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Great Software
          </h3>
        </motion.div>

        <div className="space-y-32">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.description}</p>
                <div>
                  <Link href="#" passHref>
                    <Button variant="link" className="p-0 h-auto font-semibold text-pink-600 hover:text-pink-700">
                      Learn about our processes
                    </Button>
                  </Link>
                </div>
                <blockquote className="border-l-4 border-pink-500 pl-4 py-2 italic text-gray-600">
                  "{section.quote}"
                  <footer className="mt-2 font-semibold">
                    <span className="text-pink-600">{section.author}</span> - {section.role}
                  </footer>
                </blockquote>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-2xl transform rotate-3 scale-105" />
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg relative z-10"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftwareBuildingSection

