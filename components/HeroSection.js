import React from "react";
import Image from "next/image"; // For Next.js Image optimization

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Great <span className="text-purple-600">Product</span> is
            <br />
            <span className="text-purple-600">built by great teams</span>
          </h1>
          <p className="mt-4 text-gray-600 md:text-lg">
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>
          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#"
              className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Let’s get started!
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0 md:w-1/2">
          <Image
            src="/asscets/hero-right-image.png" // Replace with the actual image path
            alt="Teamwork Illustration"
            width={500} // Set the actual width of your image
            height={500} // Set the actual height of your image
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
