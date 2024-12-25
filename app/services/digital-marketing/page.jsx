'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Users, GraduationCap, BarChart, Target, Megaphone, Globe, ChartBar, PieChart, Instagram, Facebook, Twitter, Search, MousePointer, DollarSign } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const DigitalMarketingPage = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  const targetRef = useRef(null)
  
  const metrics = [
    { value: '250%', label: 'Average ROI', color: 'from-green-400 to-emerald-600' },
    { value: '10M+', label: 'Ad Spend Managed', color: 'from-teal-400 to-green-600' },
    { value: '98%', label: 'Client Satisfaction', color: 'from-emerald-400 to-teal-600' }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  // Animated metrics counter
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full border border-white/20">
              <span className="text-white">Trusted by Leading Brands Worldwide</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-300">
                Digital Presence
              </span>
            </h1>
            <p className="text-xl text-teal-100 mb-12 leading-relaxed">
              Data-driven digital marketing solutions that deliver measurable results and exponential growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 px-8 py-6 text-lg font-semibold">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                View Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Metrics Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-green-500 to-teal-600 p-12 rounded-2xl text-white text-center"
            animate={{  opacity: [0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.div
              key={activeMetric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <h3 className="text-6xl font-bold">{metrics[activeMetric].value}</h3>
              <p className="text-xl">{metrics[activeMetric].label}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: 'SEO & Content',
              description: 'Dominate search rankings with data-driven SEO strategies and compelling content.',
              color: 'bg-gradient-to-br from-green-50 to-emerald-100'
            },
            {
              icon: MousePointer,
              title: 'PPC & Paid Social',
              description: 'Maximize ROAS with targeted paid campaigns across search and social platforms.',
              color: 'bg-gradient-to-br from-teal-50 to-green-100'
            },
            {
              icon: ChartBar,
              title: 'Analytics & CRO',
              description: 'Transform data into insights and optimize conversion rates.',
              color: 'bg-gradient-to-br from-emerald-50 to-teal-100'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.1 * index }}
              className={`rounded-xl p-8 ${service.color} hover:shadow-lg transition-all duration-300`}
            >
              <service.icon className="h-12 w-12 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-gradient-to-br from-gray-50 to-green-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Platforms We Excel In</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {[
                { icon: Instagram, label: 'Instagram Ads' },
                { icon: Facebook, label: 'Facebook Marketing' },
                { icon: Twitter, label: 'Twitter Promotion' },
                { icon: Search, label: 'Google Ads' }
              ].map((platform, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="p-6 rounded-full bg-white shadow-lg mb-4">
                    <platform.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <span className="text-gray-600">{platform.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          {...fadeInUp} 
          className="relative p-1 rounded-2xl bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600"
        >
          <div className="bg-white rounded-xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <DollarSign className="h-16 w-16 mx-auto mb-8 text-green-600" />
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Scale Your Digital Marketing?</h3>
              <p className="text-xl text-gray-600 mb-8">
                Join successful brands who have transformed their digital presence with our expertise.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold">
                  Start Your Campaign
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg font-semibold">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DigitalMarketingPage