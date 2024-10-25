// components/DesignApproachSection.js

const designApproachData = [
  {
    title: "UX Driven Engineering",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/path-to-icon-ux.svg", // replace with actual icon path
  },
  {
    title: "Developing Shared Understanding",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/path-to-icon-develop.svg", // replace with actual icon path
  },
  {
    title: "Proven Experience and Expertise",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/path-to-icon-expertise.svg", // replace with actual icon path
  },
  {
    title: "Security & Intellectual Property (IP)",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/path-to-icon-security.svg", // replace with actual icon path
  },
  {
    title: "Code Reviews",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/path-to-icon-code-reviews.svg", // replace with actual icon path
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    icon: "/path-to-icon-qa.svg", // replace with actual icon path
  },
];

const DesignApproachSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
            Our design and
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Development Approach
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designApproachData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12" src={item.icon} alt={item.title} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignApproachSection;
