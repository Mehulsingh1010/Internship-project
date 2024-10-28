// components/Footer.js
"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              {/* Placeholder for Logo */}
              <Link href="/">
                <div className="w-14 h-14  rounded-md mb-2">
                  <img
                    src="asscets/logo-removebg-preview (1).png"
                    className="h-full"
                  />
                </div>
              </Link>
              <span className="text-black font-bold">
                Secret<span className="text-blue-700">Code</span>Wave
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {/* Placeholder for Badges */}
            <div className="flex space-x-4">
              <div className="bg-white shadow-md rounded-md p-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ULGKovI9LDh-tYCymrpwIyi4C8KXfyC9vA&s"
                  alt="Google Badge"
                  className="h-8"
                />
              </div>
              <div className="bg-white shadow-md rounded-md p-2">
                <img
                  src="https://media.istockphoto.com/id/1494206458/vector/calling-icon-call-icon-telephone-reception-vector.jpg?s=612x612&w=0&k=20&c=0FuOg7NoZvfwM5LG2vDUjo_m-7EoNlKQWGfYiJ5GeG4="
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
                <Link
                  href="/Services"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/About-us"
                  className="text-gray-600 hover:text-purple-600"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact-us"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/Hire"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Hire
                </Link>
              </li>
              <li>
                <Link
                  href="/Careers"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-gray-800 font-semibold mb-4">Contact us</h3>
            <p className="text-gray-600 mb-2">
              16/592,New,Makronia Rd,near ravidas mangal bhavan,Sagar,Madhya
              Pradesh,470004
            </p>
            <p className="text-gray-600 mb-4">+91-6263873264</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61567324357083"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://x.com/prefer_coding"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/prefercodingsecret/profilecard/?igsh=MXhxcmgyZWx3eGp0dg== "
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/company/prefer-coding-secret/posts/?feedView=all"
                className="text-gray-500 hover:text-purple-600 p-2 rounded-full bg-white shadow-md"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">
            &copy; 2023 Copyright by SecretCodeWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
