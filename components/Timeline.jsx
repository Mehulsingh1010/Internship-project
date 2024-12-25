'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const timelineSteps = [
  { number: "#1", title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do." },
  { number: "#2", title: "Sprint planning", description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
  { number: "#3", title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently" },
  { number: "#4", title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns." },
  { number: "#5", title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells" },
  { number: "#6", title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
]

const Timeline = () => {
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
            How Development Through
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Alcaline Works
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on md and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 to-pink-200" />
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 relative`}
              >
                {/* Title Card */}
                <div className={`w-full md:w-1/2 flex ${
                  index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                } justify-center`}>
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full md:w-auto">
                    <div className="text-center md:text-left">
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg z-10 transition-transform hover:scale-125" />

                {/* Mobile Timeline Dot */}
                <div className="md:hidden w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg my-4" />

                {/* Description Card */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-gray-600 text-center md:text-left">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

