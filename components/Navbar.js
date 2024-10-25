"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* Replace the src with the path to your logo */}
          <Image
            src="/logo-placeholder.png" // Ensure this path is inside the public folder
            alt="Logo"
            width={32}
            height={32}
            className="h-8"
          />
          <span className="text-xl font-semibold text-gray-900">
            Sk developers
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Case Studies</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">How it Works</Link>
          </li>
          <li>
            <Link href="#">Hire</Link>
          </li>
        </ul>

        {/* Contact Button (visible on desktop only) */}
        <Link
          href="#"
          className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-6 rounded-full hover:from-purple-700 hover:to-blue-600 transition ease-in-out"
        >
          Contact us
        </Link>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md">
          <ul className="flex flex-col space-y-6 items-center text-gray-700 font-medium py-4">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Case Studies</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">How it Works</Link>
            </li>
            <li>
              <Link href="#">Hire</Link>
            </li>
            <li>
              <Link
                href="#"
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-6 rounded-full text-center hover:from-purple-700 hover:to-blue-600 transition ease-in-out"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
