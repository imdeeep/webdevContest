import React from "react";
import { GoTriangleRight } from "react-icons/go";

const ProblemDef = () => {
  return (
    <div className="bg-black w-full px-5 sm:px-10 md:px-15 mx-auto flex flex-col md:flex-row py-14 border-b border-zinc-600 border-dashed">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="flex items-center gap-1 text-red-500">
          <GoTriangleRight size={20}/>
          PROBLEM STATEMENT
        </h1>
        <h1 className="pl-2 pt-5 text-2xl sm:text-3xl md:text-4xl">
          What is Problem Statement ?
        </h1>
      </div>
      <div className="w-full md:w-1/2 pt-6 md:pt-12">
        <p>
          Participants are required to design and develop a modern, user-friendly{" "}
          <span className="italic bg-blue-900/50 px-1">product showcase website using the provided Content Library.</span>{" "}
          The website should creatively present the products, ensuring a good balance between aesthetics, usability, and responsiveness. 
          Students are free to design their own layouts, color schemes, and additional features.{" "}
          <span className="italic bg-blue-900/50 px-1">
            They may use AI tools, but the design and structure must be original (not a copy-paste of reference websites)
          </span>.
          The final design should look professional, attractive, and usable on multiple devices.
        </p>
        <p className="text-xs pt-4 italic">
          <span className="text-red-500">Note :</span> You are free to use any technology, framework, or tool of your choice. There are no restrictions.
        </p>
      </div>
    </div>
  );
};

export default ProblemDef;
