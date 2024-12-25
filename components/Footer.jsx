'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0 text-center md:text-left">
            Hire the best developers and<br className="hidden md:inline" /> designers around!
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-colors shadow-md">
              Hire Top Developers
            </button>
          </motion.div>
        </motion.div>

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-600 mb-4">
              We are a team of passionate developers and designers dedicated to creating innovative digital solutions.
            </p>
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Google Rating"
              width={150}
              height={50}
            />
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {['About Us', 'Services', 'Case Studies', 'How it Works', 'Blog', 'Careers', 'Areas We Serve'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-4">
              Get in touch with us for any inquiries or project discussions.
            </p>
            <p className="text-gray-600">+1 (123) 456-7890</p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <Image
                    src={`/placeholder.svg?height=20&width=20`}
                    alt={social}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

