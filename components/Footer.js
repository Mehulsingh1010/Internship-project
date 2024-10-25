// components/Footer.js
"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              {/* Placeholder for Logo */}
              <div className="w-24 h-8 bg-gray-300 rounded-md mb-2"></div>
              <span className="text-gray-500 font-medium">IK Developers</span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {/* Placeholder for Badges */}
            <div className="flex space-x-4">
              <div className="bg-white shadow-md rounded-md p-2">
                <img
                  src="/google-badge.png"
                  alt="Google Badge"
                  className="h-8"
                />
              </div>
              <div className="bg-white shadow-md rounded-md p-2">
                <img
                  src="/performance-score.png"
                  alt="Performance Score"
                  className="h-8"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-gray-800 font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-purple-600">
                  Areas We Serve
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-gray-800 font-semibold mb-4">Contact us</h3>
            <p className="text-gray-600 mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="text-gray-600 mb-4">+923183561921</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2023 Copyright by IK Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
