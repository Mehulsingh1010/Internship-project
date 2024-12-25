'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Layers, Cloud, Rocket, Shield, Users, Trophy, ArrowRight, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const AppDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [codeStep, setCodeStep] = useState(0);
  const { scrollY } = useScroll();
  
  const codeSteps = [
    'Creating UI Components...',
    'Integrating APIs...',
    'Testing Performance...',
    'Deploying App...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeStep((prev) => (prev + 1) % codeSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Optimized for seamless mobile experiences with responsive layouts and intuitive interactions.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Layers,
      title: 'Robust Architecture',
      description: 'Built on scalable, maintainable architecture that grows with your business needs.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Speed & Performance',
      description: 'Lightning-fast apps optimized for performance and exceptional user experience.',
      color: 'from-cyan-400 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px]" />
        <div className="container mx-auto px-4 py-32">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 bg-white/10 backdrop-blur-xl rounded-full px-6 py-2"
            >
              <span className="text-blue-200">Launching something special</span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Build Exceptional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200">
                Mobile Applications
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Power your ideas with cutting-edge mobile solutions that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 font-semibold group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 px-8 py-6 font-semibold">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Code Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-3xl text-white shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center space-x-4">
              <Code className="h-10 w-10" />
              <motion.div
                key={codeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl font-mono"
              >
                {codeSteps[codeStep]}
              </motion.div>
            </div>
            <div className="mt-6 bg-black/20 rounded-full overflow-hidden">
              <motion.div 
                className="h-2 bg-gradient-to-r from-green-400 to-emerald-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver exceptional mobile solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-16 shadow-2xl"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Start Your App Development Journey Today
              </h3>
              <p className="text-xl text-slate-600 mb-8">
                Take the first step towards building your dream app with our expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 font-semibold group">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 font-semibold">
                  View Portfolio
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentPage;