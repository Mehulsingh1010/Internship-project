'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const resources = [
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/placeholder.svg?height=480&width=720",
  },
  {
    title: "10 Best Practices for Secure Web Development",
    image: "/placeholder.svg?height=480&width=720",
  },
  {
    title: "The Ultimate Guide to Microservices Architecture",
    image: "/placeholder.svg?height=480&width=720",
  },
  {
    title: "Mastering React: Advanced Techniques and Best Practices",
    image: "/placeholder.svg?height=480&width=720",
  },
  {
    title: "DevOps Demystified: A Comprehensive Guide for Beginners",
    image: "/placeholder.svg?height=480&width=720",
  },
]

const FeaturedResources = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
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
            Featured
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <Link
                  href="#"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  Read More
                  <svg
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedResources

