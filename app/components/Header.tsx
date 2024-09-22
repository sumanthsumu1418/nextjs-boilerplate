'use client';
import React from "react";
import Image from "next/image";
import logo from './logo.png';
import menu from './menu.png';
import Link from "next/link";
const Header = () => {
  return (
    <nav className="bg-cream  px-[5%] shadow-md">
      <div className="container gap-6  px-4 flex flex-col">
        <div className="container mt-[3%] flex justify-between items-center">
          <div className="">

            <Image
              src={menu} 
              alt="hamburger menu icon"
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>

          {/* Logo */}
          <div className="flex  ml-[12%] items-center space-x-2">
            <Link href={"/"}>
            <Image
              src={logo} // Replace this with the actual path to your logo
              alt="Hidden Oasis Logo"
              className="w-auto h-auto " // Adjusted size for the logo
              width={200}
              height={100}
            />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 p-2 rounded">
              <option value="eng">ENG</option>
            </select>

            <button className="border border-green-800 px-4 py-2 rounded text-green-800 hover:bg-green-800 hover:text-white transition">
              Book a Tour
            </button>
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex flex-row justify-center items-center md:flex space-x-8">
          <Link href="/Resort" className="text-gray-700 hover:text-green-800">
            The Resort
          </Link>
          <Link href="Accomodation" className="text-gray-700 hover:text-green-800">
            Accommodations
          </Link>
          
          
          <Link href="/Services">
            <button className="text-gray-700 hover:text-green-800">
              Services
            </button>
            </Link>
        
          
          <Link href="/ContactUs" className="text-gray-700 hover:text-green-800">
            Contact Us
          </Link>
         
        </div>
        <hr/>
    
        {/* Language Selector & Book a Tour */}
      </div>
    </nav>
  );
};

export default Header;
