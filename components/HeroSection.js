/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

const HeroSection=()=>{

  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <h1 className="text-5xl font-light leading-tight">
              Great <span className="font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">Product</span> is<span className='font-bold'> 
              <br />
              
              built by great</span> <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-bold">teams</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              We help build and manage a team of world-class developers to bring your vision to life
            </p>
            <button 
              className="bg-[#4B67F6] hover:bg-[#3D52C4] text-white px-8 py-4 rounded-md text-lg transition-colors"
            >
              Let's get started!
            </button>
          </div>
          <div className="relative">
            <Image
              src="/Hero.png"
              alt="Team collaboration illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection