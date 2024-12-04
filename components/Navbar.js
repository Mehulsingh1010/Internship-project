import Link from "next/link"
import Image from "next/image"

const Navbar=()=>{
  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="The developers logo"
              width={200}
              height={32}
              className="w-[170px] h-[70px]"
            />

          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About us
            </Link>
            <Link 
              href="/services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="/case-studies"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How it Works
            </Link>
          </div>

          <button 
            className="bg-[#6941C6] hover:bg-[#5F3AB3] text-white px-4 py-2 rounded-md transition-colors"
          >
            Contact us
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

