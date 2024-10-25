const caseStudies = [
  {
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    link: "/read-more",
    image: "/path-to-image", // Add your image path
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4">Our recent</h2>
        <h3 className="text-4xl font-bold text-purple-600 mb-10">
          Case studies
        </h3>

        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Case Study Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/cf00/e01c/33e587f7051a755a12924ff02714b828?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iPv-e8Jk11r6gqPOOd6we1tr8n2pi2MW0Abh4E9jnJaSX~WtYCkOvKXmehDi41Fr5Z34uAnEwviSACcDCXBL94JQm7Qs3aYgUv2AUcL0wp04HUkfToLBF3OfewlJeL-Zexla7dxy6OnzdHlU3MhDTTV0vc97MUJBR7lUZk877sGBD-oFI9-lUsPFUH1szf4KwDbyVcQlOXE0KgmK9Nad8tei-prEg1jIwImp~Qs-4plXUNa3UaPpNMAZtl761pzJ~ZuQvJzh3w7ZOVZzCAmKilJGjA5A3sRGTT6VTsVgmi2dMiG03ss9qLsIU43UerqJxOwvzQ4ERC8aTbr3DWY49A__" // Update the image path
              alt="Case Study Mobile Design"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Case Study Content */}
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-md text-left">
            {caseStudies.map((caseStudy, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-6">{caseStudy.description}</p>
                <a
                  href={caseStudy.link}
                  className="text-purple-600 font-medium hover:text-purple-800 transition-colors inline-flex items-center"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
