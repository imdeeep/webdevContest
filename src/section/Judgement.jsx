import React from 'react'
import { GoTriangleRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";

const Judgement = () => {
   const criteriaData = [
    {
      title: "Design & Creativity (30%)",
      highlights: [
        "Creative use of typography, colors, and images",
        "Not a direct copy of reference site"
      ]
    },
    {
      title: "User Experience (UX) & Navigation (20%)",
      highlights: [
        "Clear product categorization",
        "Accessibility & readability"
      ]
    },
    {
      title: "Responsiveness (20%)",
      highlights: [
        "Works smoothly on desktop, tablet, and mobile",
        "Adaptive layouts and images",
      ]
    },
    {
      title: "Technical Implementation (15%)",
      highlights: [
        "Clean and structured code",
        "Use of modern web standards",
      ]
    },
    {
      title: "Content Presentation (10%)",
      highlights: [
        "Properly displaying provided library products",
        "Balance between images and text",
      ]
    },
    {
      title: "Innovation / Extra Features (5%)",
      highlights: [
        "Use of animations, interactivity, or AI tools",
        "Unique ideas beyond basic requirements"
      ]
    }
  ];

  return (
    <div className='relative w-full min-h-screen border-b px-15 py-15 bg-blue-600/80 overflow-hidden border-zinc-600 border-dashed'>
      <div className="absolute inset-0 opacity-30" 
           style={{
             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)'
            }}>
              <div className='w-full scale-[1.3] h-[100%] bg-blue-600 mx-auto rounded-full blur-3xl -translate-y-1/2'></div>
      </div>


      {/* Your content */}
      <div className="relative z-10">
        <div className="w-1/2">
          <h1 className="flex items-center gap-1 text-zinc-200">
            <GoTriangleRight size={20}/>
            JUDGEMENT CRITERIA
          </h1>
          <h1 className="pl-2 pt-5 text-4xl text-white">What will be the judgment criteria?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
     {criteriaData.map((criteria, index) => (
       <div 
         key={index}
         className=" border-dashed border border-white bg-blue-600/90 p-6 "
       >
         <div className="mb-4">
           <h3 className="text-xl text-white mb-3">
             {criteria.title}
           </h3>
         </div>
         
         <div className="space-y-2">
           {criteria.highlights.map((highlight, idx) => (
             <div key={idx} className="flex items-center gap-2">
               <FaCheck size={12} className='text-green-400'/>
               <span className="text-zinc-300 text-sm">
                 {highlight}
               </span>
             </div>
           ))}
         </div>
       </div>
     ))}
   </div>

        <p className='text-center text-white'>Your submission will be evaluated across six key areas that showcase both technical skill and creative vision.</p>
      </div>
    </div>
  )
}

export default Judgement
