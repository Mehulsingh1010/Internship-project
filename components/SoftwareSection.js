const SoftwareSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white p-8 lg:p-16 space-y-8 lg:space-y-0">
      {/* Text Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Leading companies trust us
          <br />
          <span className="text-indigo-600">to develop software</span>
        </h2>
        <p className="text-gray-600">
          We add <span className="text-indigo-600">development capacity</span>{" "}
          to tech teams. Our value isn’t limited to building teams but is
          equally distributed across the project lifecycle. We are a custom
          software development company that guarantees the successful delivery
          of your project.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
        >
          See more Informations
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Image/Video Section */}
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative w-full h-64 lg:h-96">
          <img
            src="https://s3-alpha-sig.figma.com/img/8185/1171/be4c112a730c8fc901fe42c2818ee03d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXE28hMhxlanhHu03LXxW5dfadVKWry4l7SS0vcnh9cQH7sCnvDZBi89cxJm27ej2H1SLYN69lxttF4gXZ5ua2RYF48P2jyFA8AWmC4OpiA1lGFcAsPscxcl0KEgpagxp0TuLMWjKz1Z7MNF05DT~kTypuaje1IpO~WxHxgSL~nqOQiWsLJ2NXZKnlqWmmKAkyYe96lKFh15N2O8yevgb7EBwEqHmv1CfrTavPlYqvHXVfDabMVkgG8Ey8jtrrgbvqkWdCUb5ixM6mRFwPQJl0~tLSnxn0g-P5RcE2WVMZD8b1Ftt~TEurb68C3OCoHU1DIoqM~teT9hyfsJ-JnnIQ__" // Replace with the image path
            alt="Team working"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="#"
              className="bg-indigo-600 text-white p-4 rounded-full hover:bg-indigo-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-6.32-3.696A1 1 0 007 8.72v6.56a1 1 0 001.432.918l6.32-3.696a1 1 0 000-1.736z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
