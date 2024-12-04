import Image from "next/image"
import { ArrowRight, Play } from 'lucide-react'

const SoftwareSection=()=> {
  return (
    <div className="h-screen w-full">
      {/* <Image className=' sd:hidden absolute  left-[80px]' src='/ball.png' alt='a' width={100} height={100}/> */}
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-1 items-center gap-20 px-12 lg:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Pink line decoration */}
          <div className="mb-6 h-[3px] w-12 bg-pink-500" />
          
          {/* Headings */}
          <h1 className="mb-3 text-[40px] font-medium leading-[1.2] tracking-[-0.02em]">
            Leading companies trust us
          </h1>
          <h2 className="mb-8 text-[40px] font-bold leading-[1.2] tracking-[-0.02em] ">
            to develop software
          </h2>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            We <span className="text-pink-500">add development capacity</span> to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
          </p>

          {/* CTA Link */}
          <a 
            href="#" 
            className="flex items-center text-lg font-medium text-purple-700 hover:opacity-90"
          >
            See more Informations
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Right Column */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100">
          <Image
            src="/vid.png"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
          {/* Play Button Overlay */}
          
        </div>
      </div>
    </div>
  )
}

export default SoftwareSection