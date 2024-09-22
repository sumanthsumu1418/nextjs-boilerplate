import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#F5F0E5] p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <button className="md:hidden focus:outline-none">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
            alt="Menu"
            width="32"
            height="32"
            className="w-8 h-8"
          />
        </button>

        {/* Logo */}
        <div className="ml-4">
          <Image
            src="/path-to-your-logo.png"  // Ensure this is a valid image in your public folder
            alt="Hidden Oasis"
            width={160}
            height={40}  // Set specific height instead of 'auto'
            className="w-40"
          />
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <a href="#" className="hover:text-green-600">The Resort</a>
        <a href="#" className="hover:text-green-600">Accommodation</a>
        <a href="#" className="hover:text-green-600">Services</a>
        <a href="#" className="hover:text-green-600">Contact Us</a>
      </div>

      {/* Booking Button */}
      <div className="hidden md:block">
        <button className="border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white">
          Book a Tour
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative h-[80vh]">
      <Image
        src="/path-to-your-hero-image.jpg"  // Ensure this image is located in the public folder
        alt="Hero Background"
        layout="fill"  // Fill the container
        objectFit="cover"  // Ensure it covers the entire section
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </section>
  );
};

const Layout = () => {
  return (
    <div className="bg-[#D3CBB8] min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Layout;
