"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far.",
    author: "Imran Khan",
    role: "Software Engineer",
    avatar: "/avatar.png"
  },
  {
    id: 2,
    text: "Alcaline Solutions has been instrumental in transforming our online presence. Their expertise in web design and digital marketing has significantly boosted our customer engagement.",
    author: "Romeena De Silva",
    role: "Marketing Director",
    avatar: "/avatar.png"
  },
  {
    id: 3,
    text: "The team at Alcaline Solutions is incredibly professional and creative. They've helped us develop a website that truly represents our brand and values.",
    author: "John Doe",
    role: "CEO, Tech Innovators",
    avatar: "/avatar.png"
  },
  {
    id: 4,
    text: "Working with Alcaline Solutions has been a game-changer for our business. Their digital marketing strategies have helped us reach new audiences and increase our conversion rates.",
    author: "Jane Smith",
    role: "E-commerce Manager",
    avatar: "/avatar.png"
  },
  {
    id: 5,
    text: "The level of customer service and attention to detail provided by Alcaline Solutions is unmatched. They truly understand our needs and deliver beyond expectations.",
    author: "Alex Johnson",
    role: "Operations Director",
    avatar: "/avatar.png"
  }
]

const TestimonialSlider=()=>{
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="space-y-12">
          <div className="space-y-4 text-center">
            <div className="w-12 h-1 bg-pink-500 mx-auto" />
            <h1 className="text-3xl font-medium text-gray-800">Why customers love</h1>
            <h2 className="text-4xl font-bold text-gray-900">working with us</h2>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center">
              {/* <div className="w-24 h-24 absolute -left-12 top-0">
                <Image
                  src="/placeholder.svg"
                  alt="Quote mark"
                  width={96}
                  height={96}
                  className="text-purple-200"
                />
              </div> */}
              <p className="text-center max-w-3xl text-gray-600 text-lg">
                {testimonials[currentTestimonial].text}
              </p>
              {/* <div className="w-24 h-24 absolute -right-12 bottom-0 transform rotate-180">
                <Image
                  src="/placeholder.svg"
                  alt="Quote mark"
                  width={96}
                  height={96}
                  className="text-purple-200"
                />
              </div> */}
            </div>
          </div>

          <div className="flex justify-center space-x-8 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`flex flex-col items-center space-y-2 flex-shrink-0 transition-all duration-300 ${
                  index === currentTestimonial ? 'scale-110' : 'scale-100 opacity-50'
                }`}
              >
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg key={starIndex} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-medium text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-100"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TestimonialSlider

