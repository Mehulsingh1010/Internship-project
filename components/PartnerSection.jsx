"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from 'lucide-react'

const logos = [
  { name: "Sampath Cream House", src: "/placeholder.svg" },
  { name: "AdClipse", src: "/placeholder.svg" },
  { name: "PJC Bridge", src: "/placeholder.svg" },
  { name: "ClickOrder", src: "/placeholder.svg" },
  { name: "TechMate", src: "/placeholder.svg" }
]

const PartnerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-6 h-[3px] w-12 bg-pink-500" />

        <h2 className="mb-3 text-[40px] font-medium leading-tight text-[#1D1B84]">
          Meet the People
        </h2>
        <h3 className="mb-16 text-[40px] font-bold leading-tight text-[#1D1B84]">
          We are Working With
        </h3>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-purple-700 p-4 text-purple-700 transition-colors hover:bg-purple-700 hover:text-white"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-purple-700 p-4 text-purple-700 transition-colors hover:bg-purple-700 hover:text-white"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-hidden mt-16 relative">
          <div className="flex animate-banner-scroll">
            <Image
              src="/banner.png"
              alt="Banner Image"
              width={1920} 
              height={400} 
              className="w-full"
            />
            <Image
              src="/banner.png"
              alt="Banner Image"
              width={1920}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
