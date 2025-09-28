import React from 'react'
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa"
import { SiLinktree } from "react-icons/si";
import { Link } from 'react-router-dom';
import "../../App.css";


const Footer = () => {
  return (
    <footer className="text-white bg-black relative overflow-hidden">
       <div className="flex items-center gap-3 mb-2 ml-5">
              <img
                src="logo2.png"
                alt="Contest Logo"
                className="h-12 w-auto object-contain"
              />
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2  border-t border-b lg:grid-cols-4   border-zinc-600 border-dashed">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 border-r px-4 py-5 border-zinc-600 border-dashed">
           
            <h3 className="text-xl tracking-wide mb-2">Web Designing Contest</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Part of Kaushal 7.0, organized by Abhyudaya Coding Club. 
              Showcase your creativity and technical skills in modern web design.
            </p>
          </div>

          {/* Event Details */}
          <div className='border-r px-4 py-5 border-zinc-600 border-dashed'>
            <h4 className="text-lg mb-4 tracking-wide">Event Details</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                
                <span>September 29, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                
                <span>PL Lab & Network Lab</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                
                <span>11:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className='border-r px-4 py-5 border-zinc-600 border-dashed'>
            <h4 className="text-lg mb-4 tracking-wide">Registration</h4>
            <div className="space-y-2">
              <div className="text-sm text-gray-300">
                <span className="">Individual :</span> ₹200
              </div>
              <div className="text-sm text-gray-300">
                <span className="">Team (2 members) :</span> ₹150/person
              </div>
              <div className="text-sm text-gray-300">
                <span className="">Target:</span> All students
              </div>
              <div className="text-sm text-gray-300">
                <span className="">Focus :</span> 1st-year students
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className='overflow-hidden'>
            <div className="px-4 py-5 leading-6  text-xl creto tracking-wider border-b border-dashed border-zinc-600 bg-gradient-to-tr to-blue-500 via-purple-800 from-red-700">
              <h1>JOIN</h1>
              <h1>KAUSHAL 7.0</h1>
              <h1>2025</h1>
            </div>
            
            <div className="flex h-full ">
                <Link to={"https://github.com/Abhyudaya-SVVV"} target='_blank' className='w-[25%] p-4 border-r border-dashed border-zinc-600'>
                    <FaGithub size={50}/></Link>              
                    <Link to={"https://www.linkedin.com/company/abhyudaya-coding-club"} target='_blank'className='w-[25%] p-4 border-r border-dashed border-zinc-600'>
                    <FaLinkedin size={50}/></Link>              
                    <Link to={"https://www.instagram.com/abhyudayacodingclub/"} target='_blank' className='w-[25%] p-4 border-r border-dashed border-zinc-600'>
                    <FaInstagram size={50}/></Link>              
                <Link to={"https://linktr.ee/abhyudaya.thecodingclub"} target='_blank' className='w-[25%] p-4'>
                    <SiLinktree size={50}/></Link>              

            </div>
          </div>
        </div>

        {/* Bottom Section */}
          <div className="text-xs text-gray-400 mb-4 md:mb-0 text-right py-3 px-2">
            © 2025 Abhyudaya Coding Club. All rights reserved.
        </div>
        <div className='w-full h-6 bg-gradient-to-r to-blue-500 via-purple-800 from-red-700'>

        </div>
    </footer>
  )
}

export default Footer