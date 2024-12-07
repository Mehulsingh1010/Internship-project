'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Smartphone, TestTube } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    title: "Mobile App Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: "Web Design & Development",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <TestTube className="w-6 h-6 text-green-500" />,
    title: "Software Testing Service",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <Code className="w-6 h-6 text-red-500" />,
    title: "Software Testing",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-yellow-500" />,
    title: "Mobile App Testing",
    description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleSlides(3);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleServices = () => {
    return services.concat(services.slice(0, visibleSlides));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="w-12 h-1 bg-pink-500 mb-10 mx-auto" />
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Services We Offer</h2>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:bg-gray-100 transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-20 hover:bg-gray-100 transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Services Carousel */}
        <div className="overflow-hidden px-4">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
          >
            {getVisibleServices().map((service, index) => (
              <div
                key={index}
                className={`w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-6 py-4`}
              >
                <div
                  className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                    index === currentIndex + Math.floor(visibleSlides / 2)
                      ? 'border-purple-500 border-2'
                      : 'border-gray-200 border'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition duration-300 ${
              index === currentIndex ? 'bg-purple-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
