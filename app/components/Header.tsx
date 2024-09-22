"use client";

import Image from "next/image";
import logo from "./images/logo.png";
import menu from "./images/menu.png";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for App Router



const Header = () => {
  const pathname = usePathname(); // Get the current path
  const navLinks = [
    { href: "/Resort", label: "The Resort" },
    { href: "/Accommodations", label: "Accommodations" },
    { href: "/Services", label: "Services", isButton: true },
    { href: "/ContactUs", label: "Contact Us" }
  ];
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
                src={logo}
                alt="Hidden Oasis Logo"
                className="w-auto h-auto"
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
          {navLinks.map((link) =>
            link.isButton ? (
              <Link href={link.href} key={link.label}>
                <button
                  className={`text-gray-700  hover:text-green-800 ${
                    pathname === link.href
                      ? "border-b-2 border-green-800"
                      : ""
                  }`}
                >
                  {link.label}
                </button>
              </Link>
            ) : (
              <Link
                href={link.href}
                key={link.label}
                className={`text-gray-700 hover:text-green-800 ${
                  pathname === link.href
                    ? "border-b-2 border-green-800"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <hr />
      </div>
    </nav>
  );
};

export default Header;
