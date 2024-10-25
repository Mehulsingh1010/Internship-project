import Image from "next/image";

const resources = [
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/path-to-image1.jpg",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/path-to-image2.jpg",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/path-to-image3.jpg",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/path-to-image4.jpg",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/path-to-image5.jpg",
  },
];

const FeaturedResources = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-purple-600">Featured</h2>
        <h1 className="text-3xl font-bold text-gray-800">Resources</h1>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-6">
        {resources.map((resource, idx) => (
          <div
            key={idx}
            className="group max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="relative h-48">
              <Image
                src={resource.image}
                alt={resource.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-75"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-medium text-gray-900">
                {resource.title}
              </h2>
              <a href="#" className="text-purple-600 mt-2 inline-block">
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedResources;
