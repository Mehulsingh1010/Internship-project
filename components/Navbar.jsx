'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'

const serviceItems = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const handleServicesKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleServicesToggle()
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="The developers logo"
              width={200}
              height={32}
              className="w-[170px] h-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              About us
            </Link>
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-1"
                onClick={handleServicesToggle}
                onKeyDown={handleServicesKeyDown}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/case-studies"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              How it Works
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors"
            >
              Contact us
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t mt-2"
            >
              <ul className="flex flex-col items-start space-y-4 p-4">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-purple-600 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-gray-600 hover:text-purple-600 transition-colors block"
                  >
                    Services
                    <ChevronDown className="w-4 h-4 inline-block ml-1" />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {serviceItems.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-gray-600 hover:text-purple-600 transition-colors block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-600 hover:text-purple-600 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-gray-600 hover:text-purple-600 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact us
                  </motion.button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar

