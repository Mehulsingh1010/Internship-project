// components/Timeline.js
import React from "react";

const Timeline = () => {
  const steps = [
    {
      number: "#1",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },
    {
      number: "#2",
      title: "Sprint planning",
      description:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      number: "#3",
      title: "Tech architecture",
      description:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    },
    {
      number: "#4",
      title: "Standups & weekly demos",
      description:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
    {
      number: "#5",
      title: "Code reviews",
      description:
        "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.",
    },
    {
      number: "#6",
      title: "Iterative delivery",
      description:
        "We divide the implementation process into several checkpoints rather than a single deadline.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold mb-16">
        How development{" "}
        <span className="text-purple-600">through Alcaline</span> works
      </h2>
      <div className="relative">
        {/* Horizontal timeline line */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-1 bg-purple-300 absolute top-1/2"></div>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connecting line for smaller screens */}
              {index < steps.length - 1 && (
                <div className="block md:hidden w-0.5 h-10 bg-purple-300"></div>
              )}

              {/* Step Indicator Circle */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600 text-white text-lg font-bold absolute -top-10 md:static md:mb-6">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="bg-white p-8 rounded-lg shadow-lg mt-10 md:mt-0">
                <h3 className="font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
