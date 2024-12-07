import Image from "next/image"
import { ArrowRight, Play } from 'lucide-react'

const SoftwareSection = () => {
  return (
    <div className="min-h-screen w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            {/* Pink line decoration */}
            <div className="mb-4 h-[3px] w-12 bg-pink-500" />
            
            {/* Headings */}
            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight">
              Leading companies trust us
            </h1>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              to develop software
            </h2>

            {/* Description */}
            <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-600">
              We <span className="text-pink-500">add development capacity</span> to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
            </p>

            {/* CTA Link */}
            <a 
              href="#" 
              className="inline-flex items-center text-base sm:text-lg font-medium text-purple-700 hover:opacity-90"
            >
              See more Informations
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Right Column */}
          <div className="relative mt-8 lg:mt-0 aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src="/vid.png"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="rounded-full bg-white p-3 shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                <Play className="h-8 w-8 text-purple-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftwareSection

