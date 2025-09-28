import { useState } from "react";
import final from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md px-6 h-16 flex items-center justify-between border-b border-dashed border-zinc-400/10 w-full z-50">
    
      <Link to={"/"} className="flex items-center gap-3">
        <img
          src={final}
          alt="Contest Logo"
          className="h-13 w-auto object-contain"
        />
      </Link>


      <div className="hidden md:flex items-center gap-8">
        <a
          href="#problem"
          className="text-gray-400 hover:text-white text-md transition-colors duration-200"
        >
          Problem
        </a>
        <a
          href="#criteria"
          className="text-gray-400 hover:text-white text-md transition-colors duration-200"
        >
          Criteria
        </a>
        <a
          href="#library"
          className="text-gray-400 hover:text-white text-md transition-colors duration-200"
        >
          Library
        </a>
      </div>


      <button className="hidden md:block border border-dashed px-3 py-0 border-blue-400 text-blue-400 tracking-wide text-md hover:border-transparent cursor-pointer transition-colors duration-200">
        KAUSHAL 7.0
      </button>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 pl-5 w-full bg-black/90 backdrop-blur-md flex flex-col items-start gap-6 py-6 md:hidden z-40">
          <a
            href="#problem"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white text-lg transition-colors duration-200"
          >
            Problem
          </a>
          <a
            href="#criteria"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white text-lg transition-colors duration-200"
          >
            Criteria
          </a>
          <a
            href="#library"
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white text-lg transition-colors duration-200"
          >
            Library
          </a>
          <button className="border border-dashed px-4 py-1 border-blue-400 text-blue-400 tracking-wide text-lg hover:border-transparent transition-colors duration-200">
            KAUSHAL 7.0
          </button>
        </div>
      )}
    </nav>
  );
}
