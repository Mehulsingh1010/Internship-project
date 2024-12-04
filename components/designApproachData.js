// import React from 'react'

// const features = [
//   {
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//     title: "UX Driven Engineering",
//     color: "bg-slate-900",
//   },
//   {
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//       </svg>
//     ),
//     title: "Developing Shared Understanding",
//     color: "bg-blue-400",
//   },
//   {
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//     title: "Proven Experience and Expertise",
//     color: "bg-pink-500",
//   },
//   {
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//       </svg>
//     ),
//     title: "Security & Intellectual Property (IP)",
//     color: "bg-emerald-400",
//   },
//   {
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//       </svg>
//     ),
//     title: "Code Reviews",
//     color: "bg-gradient-to-br from-orange-300 to-orange-400",
//   },
//   {
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//       </svg>
//     ),
//     title: "Quality Assurance & Testing",
//     color: "bg-purple-500",
//   },
// ]

// const FeatureCard = ({ icon, title, color }) => (
//   <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
//     <div className="flex gap-4 p-6">
//       <div className={`p-3 rounded-2xl ${color}`}>
//         <div className="text-white">{icon}</div>
//       </div>
//       <div className="space-y-2">
//         <h3 className="font-semibold text-xl">{title}</h3>
//         <p className="text-gray-600">
//           Unlike other companies, we are a{" "}
//           <span className="text-blue-400 font-medium">UX first</span>{" "}
//           development company. Projects are driven by designers and they make sure design and experiences translate to code.
//         </p>
//       </div>
//     </div>
//   </div>
// )

// const designApproachData = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <div className="text-center mb-16">
//         <div className="flex flex-col items-center">
//           <div className="w-12 h-1 bg-purple-600 mb-6" />
//           <h1 className="text-4xl font-medium mb-2">Our design and</h1>
//           <h2 className="text-4xl font-bold">development approach</h2>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         {features.map((feature, index) => (
//           <FeatureCard key={index} {...feature} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default designApproachData

