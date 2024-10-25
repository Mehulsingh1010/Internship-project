// components/PromoBanner.js
import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 shadow-md flex justify-between items-center m-6">
      {/* Left Side: Text Content */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Hire the best developers and designers around!
        </h2>
      </div>

      {/* Right Side: Button with Glow Effect */}
      <div className="relative">
        <button className="relative bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition">
          Hire Top Developers
        </button>
        {/* Glow Effect */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="animate-ping w-28 h-28 rounded-full bg-yellow-200 opacity-75"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
