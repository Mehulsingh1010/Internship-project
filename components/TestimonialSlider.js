"use client";
"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    rating: 5,
    image: "/path-to-image1", // Update image path
    feedback:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies.",
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    rating: 5,
    image: "/path-to-image2", // Update image path
    feedback:
      "One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.",
  },

  {
    name: "Shravni Kune",
    role: "Software Engineer",
    rating: 5,
    image: "/path-to-image2", // Update image path
    feedback:
      "One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.",
  },
  {
    name: "Aakarsh Sahu",
    role: "Software Engineer",
    rating: 5,
    image: "/path-to-image2", // Update image path
    feedback:
      "One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.",
  },
  {
    name: "Kunal Kumar",
    role: "Software Engineer",
    rating: 5,
    image: "/path-to-image2", // Update image path
    feedback:
      "One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.",
  },
  // Add more testimonials as necessary
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length);
    }, 3000); // Slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, [current]);

  return (
    <div className=" h-auto w-auto bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Why customers love working with us
        </h2>

        <div className="relative bg-gray-100 p-8 rounded-lg shadow-md">
          {/* Display feedback */}
          <p className="text-lg italic text-gray-700 mb-6">
            {testimonials[current].feedback}
          </p>

          {/* User Info */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {testimonials[current].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Star Ratings */}
          <div className="flex justify-center mt-2">
            {Array.from({ length: testimonials[current].rating }, (_, i) => (
              <span key={i} className="text-yellow-500 text-xl">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
