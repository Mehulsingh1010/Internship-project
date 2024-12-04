/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Link from "next/link"

const SoftwareBuildingSection=()=>{
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-20">
        <p className="text-xl mb-4">Way of building</p>
        <h1 className="text-5xl font-bold">Great Software</h1>
      </div>

      {/* Main Content */}
      <div className="space-y-24">
        {/* First Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Build the right team to scale</h2>
            <p className="text-gray-600 text-lg">
              Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers
            </p>
            <div>
              <p className="text-lg">
                Our <Link href="#" className="text-pink-600 hover:text-pink-700">delivery model</Link> helps you cut costs and deliver within budget.
              </p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <blockquote className="text-lg italic text-pink-600">
                "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              </blockquote>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src="/placeholder.svg"
                  alt="CEO"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Jeewa markram</p>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full" />
            <Image
              src="/placeholder.svg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
          </div>
        </section>

        {/* Second Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full" />
            <Image
              src="/placeholder.svg"
              alt="Developers working"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold">Build the right team to scale</h2>
            <p className="text-gray-600 text-lg">
              Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers
            </p>
            <div>
              <p className="text-lg">
                Our <Link href="#" className="text-pink-600 hover:text-pink-700">delivery model</Link> helps you cut costs and deliver within budget.
              </p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <blockquote className="text-lg italic text-pink-600">
                "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              </blockquote>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src="/placeholder.svg"
                  alt="CEO"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Jeewa markram</p>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Build the right team to scale</h2>
            <p className="text-gray-600 text-lg">
              Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers
            </p>
            <div>
              <p className="text-lg">
                Our <Link href="#" className="text-pink-600 hover:text-pink-700">delivery model</Link> helps you cut costs and deliver within budget.
              </p>
            </div>
            <div className="border-l-4 border-pink-600 pl-4 py-2">
              <blockquote className="text-lg italic text-pink-600">
                "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
              </blockquote>
              <div className="flex items-center gap-3 mt-4">
                <Image
                  src="/placeholder.svg"
                  alt="CEO"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Jeewa markram</p>
                  <p className="text-gray-600">CEO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-300 rounded-full" />
            <Image
              src="/placeholder.svg"
              alt="Conference presentation"
              width={600}
              height={400}
              className="rounded-lg w-full"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default SoftwareBuildingSection