// components/TechStackSection.js
"use client";
// components/TechStackSection.js
"use client";

const techStackData = {
  techStack: [
    {
      name: "Node.js",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu963SmaEElqJi1r5YiYE7L4Je0o-sbRz09QefiKJQYQuUCVvBq1kWLrWca-xLLObqKg&usqp=CAU",
    },
    {
      name: "PHP",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXalRyF7J7QRLkJfMwCMqA47UUDCFdHJ-dFQ&s",
    },
    {
      name: "MySQL",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
    },
    {
      name: "Java",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-5LhP_Q8i_JBK8mMzn-ApcwLPH5UhTF76A&s",
    },
    {
      name: ".NET Core",
      icon: "https://cutecdn.codingdojo.com/svg_images/curriculum/new_icon.svg",
    },
    {
      name: "Python",
      icon: "https://banner2.cleanpng.com/20181128/cbr/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-1713916787253.webp",
    },
    {
      name: "Rails",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0E4cjfBCciqluZbg0fEn4q1sX9LjnIFawg-eMMN84MDvEkEIg9qHa4MKDCVhXh38Mqo&usqp=CAU",
    },
    {
      name: "Golang",
      icon: "https://ih1.redbubble.net/image.5592765373.0871/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
    },
    {
      name: "React",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    },
  ],
};

const TechStackSection = () => {
  return (
    <div className="py-12 bg-white ">
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
            <div key={index} className="flex justify-center mb-8 p-3">
              <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
