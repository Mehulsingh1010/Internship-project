'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

const SoftwareSection=()=> {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-500" />
            
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Leading companies trust us
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                to develop software
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              We <span className="text-pink-500 font-medium">add development capacity</span> to tech teams. 
              Our value isn't limited to building teams but is equally distributed across the project lifecycle. 
              We are a custom software development company that guarantees the successful delivery of your project.
            </p>

            <Button
              variant="link"
              className="group text-purple-600 hover:text-purple-700 p-0 h-auto font-medium text-lg"
            >
              See more Information
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10" />
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-0 m-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg backdrop-blur-sm bg-white/90 text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Play className="h-8 w-8" />
              </motion.button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-2xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareSection