import React from "react";
import Hero from "./section/Hero.jsx";
import ProblemDef from "./section/ProblemDef";
import Judgement from "./section/Judgement";
import { GoTriangleRight } from "react-icons/go";
import "./App.css";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="w-full min-h-screen text-white bg-black ">
      <div className=" z-20">
        <Hero />
      </div>

      <div className="z-20" id="problem">
        <ProblemDef />
      </div>

      <div className="z-20" id="criteria">
        <Judgement />
      </div>

      <div className="z-20 border-b border-dashed border-zinc-600" id="library">
        <div className="bg-black w-full px-6 sm:px-10 lg:px-15 mx-auto flex flex-col lg:flex-row py-14 gap-10">

          <div className="w-full lg:w-1/2">
            <h1 className="flex items-center gap-1 text-purple-500">
              <GoTriangleRight size={20} />
              CONTENT LIBRARY
            </h1>
            <h1 className="pl-2 pt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              Where to find Content Library ?
            </h1>
            <Link
              to={"/library"}
              className="bg-white text-black py-3 px-5 inline-flex items-center gap-2 mt-10 sm:mt-14 lg:mt-20 ml-2 hover:bg-gray-200 transition"
            >
              Check Out
              <FaArrowRight />
            </Link>
          </div>

          <div className="w-full lg:w-1/2 pt-4 lg:pt-12 text-gray-300">
            <p className="text-base sm:text-lg leading-relaxed">
              Ready-to-use product content for web design competitions. High-quality
              images, descriptions, specifications, and reference links — everything
              you need to focus on creating amazing designs.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
