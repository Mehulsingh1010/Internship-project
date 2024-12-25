'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Users, GraduationCap } from 'lucide-react'

const Hero=()=> {
const containerRef = useRef(null)

useEffect(() => {
  const container = containerRef.current
  if (!container) return

  const handleMouseMove = (e) => {
    const { left, top, width, height } = container.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    container.style.setProperty('--mouse-x', `${x}`)
    container.style.setProperty('--mouse-y', `${y}`)
  }

  container.addEventListener('mousemove', handleMouseMove)
  return () => container.removeEventListener('mousemove', handleMouseMove)
}, [])

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

return (
  <div ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white" />
    
    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Master{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Software
            </span>{' '}
            with expert{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              mentors
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl">
            Elevate your coding skills with our comprehensive courses and personalized mentorship. 
            Transform your career in tech with expert guidance and hands-on projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
              Find a Mentor
            </Button>
          </div>

          <div className="flex gap-8 pt-8">
            {[
              { icon: Code, text: '50+ Courses Available' },
              { icon: Users, text: '10,000+ Students Enrolled' },
              { icon: GraduationCap, text: '95% Success Rate' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-purple-100">
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-600">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated Illustration */}
        
      </div>
    </div>
  </div>
)
}

export default Hero