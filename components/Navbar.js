'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="The developers logo"
              width={200}
              height={32}
              className="w-[170px] h-[70px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About us
            </Link>
            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Case Studies
            </Link>
           
            <Link
              href=""
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How it Works
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-[#6941C6] hover:bg-[#5F3AB3] text-white px-4 py-2 rounded-md transition-colors">
              Contact us
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t mt-2">
            <ul className="flex flex-col items-start space-y-4 p-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-gray-900 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-600 hover:text-gray-900 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
              </li>
              
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-gray-900 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it Works
                </Link>
              </li>
              <li>
                <button
                  className="w-full bg-[#6941C6] hover:bg-[#5F3AB3] text-white px-4 py-2 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
