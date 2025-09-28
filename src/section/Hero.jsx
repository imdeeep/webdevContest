import React from "react";
import GradientLines from "@/components/ui/GradientLines";

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex border-b border-zinc-600 border-dashed">
      <div className="w-[60%] min-h-screen justify-center pt-14 pl-8 flex items-center flex-col">
        {/* Text Based */}
        <div className="relative text-8xl font-bold creto tracking-wider leading-20 md:block hidden">
          <div className="w-50 h-30 -top-11 -left-31 absolute bg-gradient-to-tr from-blue-500 via-purple-800 to-red-700"></div>
          <h1 className="-translate-x-8">web</h1>
          <img
            src="/line.svg"
            className="w-30 absolute -right-14 rotate-12  top-14 pointer-events-none"
          />
          <h1>designing</h1>
          <h1 className="-translate-x-14">contest</h1>
        </div>
        <p className="mt-2 italic -translate-x-23 tracking-wide md:block hidden">
          Organised by{" "}
          <span
            className="underline decoration-wavy  underline-offset-4 not-italic
 decoration-blue-500
"
          >
            ABHYUDAYA
          </span>{" "}
          under{" "}
          <span
            className="underline decoration-wavy not-italic
 underline-offset-4 decoration-red-500"
          >
            Kaushal 7.0
          </span>
        </p>
        
        {/* Image Based */}
        <img src="hero.svg" alt="" className="w-full user select-none pointer-events-none md:hidden block"/>
        {/* <p className="italic -translate-x-28 -translate-y-8 tracking-wide">
          Organised by{" "} <br/>
          <span
            className="underline decoration-wavy  underline-offset-4 not-italic
 decoration-blue-500
"
          >
            ABHYUDAYA
          </span>{" "}
          as part of{" "}
          <span
            className="underline decoration-wavy not-italic
 underline-offset-4 decoration-red-500"
          >
            Kaushal 7.0
          </span>
        </p> */}
        
      </div>
      <div className="w-[40%] md:block hidden">
        <GradientLines />
      </div>
    </div>
  );
};

export default Hero;
