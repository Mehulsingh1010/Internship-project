"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far.",
    author: "Imran Khan",
    role: "Software Engineer",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    text: "Alcaline Solutions has been instrumental in transforming our online presence. Their expertise has significantly boosted our customer engagement.",
    author: "Romeena De Silva",
    role: "Marketing Director",
    avatar: "/avatar.png",
  },
  {
    id: 3,
    text: "The team at Alcaline Solutions is incredibly professional and creative. They've helped us develop a website that truly represents our brand and values.",
    author: "John Doe",
    role: "CEO, Tech Innovators",
    avatar: "/avatar.png",
  },
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Change testimonial automatically on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Auto-slide on mobile
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(timer); // Cleanup timer on unmount
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full h-auto bg-white">
      <main className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <section className="space-y-8">
          {/* Heading Section */}
          <div className="text-center space-y-2">
            <div className="w-12 h-1 bg-pink-500 mx-auto" />
            <h1 className="text-2xl font-medium text-gray-800 sm:text-3xl">Why customers love</h1>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">working with us</h2>
          </div>

          {/* Testimonial Text */}
          <div className="relative">
            <p className="text-center mx-auto max-w-3xl text-gray-600 text-base sm:text-lg lg:text-xl">
              {testimonials[currentTestimonial].text}
            </p>
          </div>

          {/* Testimonial Avatars - Responsive Layout */}
          <div className="flex flex-col sm:flex-row sm:space-x-8 sm:space-y-0 space-y-6 pb-6 justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex flex-col items-center space-y-2 transition-all duration-300 ${
                  index === currentTestimonial ? "scale-110 opacity-100" : "scale-100 opacity-50"
                }`}
              >
                <div className="w-16 h-16 relative rounded-full overflow-hidden sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 sm:text-base">{testimonial.author}</p>
                <p className="text-xs text-gray-600 sm:text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons for Larger Screens */}
          {!isMobile && (
            <div className="flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-100 focus:outline-none"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default TestimonialSlider;
