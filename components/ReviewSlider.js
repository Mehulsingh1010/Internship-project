"use client";
import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "We create intuitive and powerful mobile applications for all platforms.",
  },
  {
    id: 2,
    title: "Web Design & Development",
    description:
      "We design beautiful and functional websites that elevate your brand.",
  },
  {
    id: 3,
    title: "Software Testing Service",
    description:
      "Comprehensive testing services to ensure the quality and performance of your software.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Effective digital marketing strategies to drive traffic and increase conversions.",
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud services to meet your business needs.",
  },
  {
    id: 6,
    title: "E-commerce Development",
    description:
      "Custom e-commerce solutions that drive online sales and customer engagement.",
  },
  {
    id: 7,
    title: "Graphic Design",
    description:
      "Creative graphic design services to visually communicate your brand message.",
  },
  {
    id: 8,
    title: "IT Consulting",
    description:
      "Expert IT consulting to help you navigate complex technology challenges.",
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(reviews.length / 1) - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slider navigation via dots
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-8 bg-[#F9F9FF]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
        Services we offer
      </h1>

      <div className="relative">
        {/* Card Wrapper */}
        <div
          className="flex transition-transform ease-in-out duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="w-full flex items-center flex-shrink-0 p-2 sm:p-4 md:p-6 lg:p-8"
            >
              <div
                className={`bg-white h-[100%] md:h-[110%] rounded-lg relative left-[10%] md:left-[32%] shadow-md p-6 border w-[80%] md:w-[40%] border-pink-300 mb-6 ${
                  currentIndex === Math.floor(index / 3)
                    ? "border-pink-500"
                    : "border-gray-100"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  {/* Placeholder for icon */}
                  <div
                    className={`h-12 w-12 mb-4 ${
                      currentIndex === Math.floor(index / 3)
                        ? "bg-pink-100"
                        : "bg-gray-100"
                    } rounded-full flex items-center justify-center`}
                  >
                    <span className={`text-pink-500 text-xl`}>🎨</span>{" "}
                    {/* Replace with actual icons */}
                  </div>
                  <h2
                    className={`text-lg md:text-xl font-semibold ${
                      currentIndex === Math.floor(index / 3)
                        ? "text-pink-500"
                        : "text-gray-900"
                    } mb-4`}
                  >
                    {review.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-500 text-center">
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(reviews.length / 2) }, (_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Pagination Numbers */}
      <div className="flex justify-center mt-4">
        <span className="text-sm font-medium text-gray-500">
          0{currentIndex + 1} / 0{Math.ceil(reviews.length / 1)}
        </span>
      </div>
    </div>
  );
};

export default ReviewSlider;
