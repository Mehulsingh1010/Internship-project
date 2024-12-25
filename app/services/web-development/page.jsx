'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Code, Users, GraduationCap, Globe, Shield, Trophy, Brain, Check, Building2, Database, Cloud, Lock } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const WebDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  // Animated code snippet
  const codeSnippet = `
function OptimizedComponent() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Enterprise-grade data fetching
    fetchSecureData();
  }, []);

  return (
    <SecurityWrapper>
      Chose Us ! 
    </SecurityWrapper>
  );
}`.split('');

  const [displayedCode, setDisplayedCode] = useState('')
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedCode(prev => prev + codeSnippet[index])
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Gradient */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full border border-white/20">
              <span className="text-white">Trusted by Fortune 500 Companies</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Enterprise-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Web Development Solutions
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Delivering scalable, secure, and innovative web solutions that drive digital transformation for industry leaders worldwide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Code Section */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg p-8 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-blue-300">
              {displayedCode}
            </pre>
          </div>
        </div>
      </div>

      {/* Stats Section with Hover Effects */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Enterprise Clients', icon: Building2 },
            { number: '15+', label: 'Years Experience', icon: Trophy },
            { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
            { number: '24/7', label: 'Support Available', icon: Users },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              {...fadeInUp}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <stat.icon className="h-8 w-8 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Tabs */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Enterprise Services</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Cloud Solutions', 'Security', 'Performance'].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            {activeTab === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl"
              >
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Cloud Solutions</h3>
                <p className="text-slate-600 mb-6">
                  Scalable cloud infrastructure designed for enterprise needs with 99.9% uptime guarantee.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
              >
                <Lock className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Enterprise Security</h3>
                <p className="text-slate-600 mb-6">
                  Bank-grade security protocols and compliance with international standards.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl"
              >
                <Database className="h-12 w-12 text-cyan-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance Optimization</h3>
                <p className="text-slate-600 mb-6">
                  Advanced optimization techniques for maximum performance and efficiency.
                </p>
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Learn More</Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section with Gradient Border */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          {...fadeInUp} 
          className="relative p-1 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
        >
          <div className="bg-white rounded-xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <Building2 className="h-16 w-16 mx-auto mb-8 text-blue-600" />
              <h3 className="text-3xl font-bold mb-6 text-slate-900">Ready to Transform Your Digital Presence?</h3>
              <p className="text-xl text-slate-600 mb-8">
                Join leading enterprises who trust us with their digital transformation journey.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold">
                  Request Enterprise Demo
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
                  Contact Sales Team
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WebDevelopmentPage