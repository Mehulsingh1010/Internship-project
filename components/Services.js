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
  const [isMobile, setIsMobile] = useState(false);

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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleServices = () => {
    const visibleServices = [...services];
    visibleServices.push(services[0]); 
    return visibleServices;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto md:mt-[-90px] px-4 py-8 h-[60vh] md:py-12">
      <div className="w-12 h-1 bg-pink-500 mb-10 mx-auto" />
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8">Services we offer</h2>
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.333)}%)` }}
        >
          {getVisibleServices().map((service, index) => (
            <div 
              key={index} 
              className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 ${
                isMobile && index !== currentIndex ? 'mt-6' : !isMobile && index === currentIndex + 1 ? 'mt-4' : ''
              }`}
            >
              <div 
                className={`bg-white p-4 rounded-lg shadow-lg transition-all duration-300 h-full ${
                  !isMobile && index === currentIndex + 1 ? 'border-2 border-purple-500 scale-105' : ''
                }`}
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gray-100 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Left Navigation Button */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
        </button>
        {/* Right Navigation Button */}
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mt-4 md:mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-purple-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-end items-center mt-4">
        <span className="text-lg md:text-xl font-semibold text-purple-500">0{currentIndex + 1}</span>
        <div className="mx-2 w-16 md:w-24 h-1 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-purple-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
          />
        </div>
        <span className="text-lg md:text-xl font-semibold text-gray-300">05</span>
      </div>
    </div>
  );
};

export default ServicesSection;
