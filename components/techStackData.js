// components/TechStackSection.js
"use client";
// components/TechStackSection.js
"use client";

const techStackData = {
  techStack: [
    { name: "Node.js", icon: "/path-to-nodejs-icon.svg" },
    { name: "PHP", icon: "/path-to-php-icon.svg" },
    { name: "MySQL", icon: "/path-to-mysql-icon.svg" },
    { name: "Java", icon: "/path-to-java-icon.svg" },
    { name: ".NET Core", icon: "/path-to-dotnet-icon.svg" },
    { name: "Python", icon: "/path-to-python-icon.svg" },
    { name: "Rails", icon: "/path-to-rails-icon.svg" },
    { name: "Golang", icon: "/path-to-golang-icon.svg" },
    { name: "MongoDB", icon: "/path-to-mongodb-icon.svg" },
  ],
};

const TechStackSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">
            Our
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tech Stack
          </p>
        </div>

        {/* Icons Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStackData.techStack.map((tech, index) => (
            <div key={index} className="flex justify-center">
              <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
