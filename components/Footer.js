import Image from 'next/image'
import Link from 'next/link'

const footer=()=>{
  return (
    <footer className="w-full">
      {/* CTA Section */}
      <div className="bg-[#F8F9FF] rounded-2xl mx-4 md:mx-8 mb-16 p-8 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
          Hire the best developers and<br className="hidden md:inline" /> designers around!
        </h2>
        <div className="relative">
          {/* Yellow rays */}
          <div className="absolute -inset-4 flex items-center justify-center">
            <div className="w-16 h-16 text-yellow-400">
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-4 bg-yellow-400"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: '50% 150%',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <button className="relative bg-[#FF7757] text-white px-6 py-3 rounded-lg hover:bg-[#ff8d75] transition-colors">
            Hire Top Developers
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png?height=40&width=120"
              alt="Company Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <Image
              src="/google.png?height=50&width=150"
              alt="Google Rating"
              width={150}
              height={50}
            />
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <nav className="space-y-3">
              {['About Us', 'Services', 'Case Studies', 'How it works', 'Blog', 'Careers', 'Areas We Serve'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <p className="text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-600">+923183561921</p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <Image
                    src={`/placeholder.svg?height=20&width=20`}
                    alt={social}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6 text-center text-gray-600">
          © 2023 Copyright by IK Developers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


export default footer