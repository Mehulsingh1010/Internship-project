'use client'

import { motion } from "framer-motion"
import { ArrowRight, Code, Smartphone, TestTube, Users, Shield, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "UX Driven Engineering",
    color: "bg-slate-900",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Developing Shared Understanding",
    color: "bg-blue-500",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Proven Experience and Expertise",
    color: "bg-pink-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security & Intellectual Property (IP)",
    color: "bg-emerald-500",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Code Reviews",
    color: "bg-orange-500",
  },
  {
    icon: <TestTube className="w-6 h-6" />,
    title: "Quality Assurance & Testing",
    color: "bg-purple-500",
  },
]

const FeatureCard = ({ icon, title, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
  >
    <div className="flex gap-4 p-6">
      <div className={`p-3 rounded-2xl ${color}`}>
        <div className="text-white">{icon}</div>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-gray-600">
          Our <span className="text-blue-500 font-medium">expert approach</span> ensures that every aspect of your project is handled with precision and care.
        </p>
      </div>
    </div>
  </motion.div>
)

const DesignApproachSection = () => {
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
            Our Design and
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Development Approach
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignApproachSection

