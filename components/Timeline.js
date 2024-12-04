import Image from 'next/image'

const Timeline=()=>{
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="w-12 h-1 bg-[#B829DD] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">How development</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          through Alcaline works
        </h1>
      </div>

      {/* Cards and Timeline */}
      <div className="space-y-8">
        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderCard("#1", "Assemble the right team", "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.")}
          {renderCard("#3", "Tech architecture", "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently")}
          {renderCard("#5", "Code reviews", "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells")}
        </div>

        {/* Timeline image */}
        <div className="hidden md:block relative">
          <Image
            src="/timeline.png?height=50&width=1000"
            alt="Development timeline"
            width={1000}
            height={50}
            className="w-full h-auto"
          />
         
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderCard("#2", "Sprint planning", "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.")}
          {renderCard("#4", "Standups & weekly demos", "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.")}
          {renderCard("#6", "Iterative delivery", "We divide the implementation process into several checkpoints rather than a single deadline.")}
        </div>
      </div>
    </div>
  )
}

function renderCard(number,title,description) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-[#FF4365] font-medium mb-2">{number} {title}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}



export default Timeline