import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTripadvisor,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-[2%] w-full px-[5%]">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex justify-center space-x-4 ">
            <a href="#" aria-label="Facebook">
              <FaFacebookF
                className="text-gray-600 hover:text-gray-900"
                size={24}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram
                className="text-gray-600 hover:text-gray-900"
                size={24}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn
                className="text-gray-600 hover:text-gray-900"
                size={24}
              />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube
                className="text-gray-600 hover:text-gray-900"
                size={24}
              />
            </a>
            <a href="#" aria-label="TripAdvisor">
              <FaTripadvisor
                className="text-gray-600 hover:text-gray-900"
                size={24}
              />
            </a>
          </div>
          <button className="border-2 border-black border-solid px-6 py-3 rounded-sm">BEST PRICE RECOMMENDATIONS</button>
        </div>
        <hr className="my-6" />

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-4">More Information</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Gift Card</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Notice</a>
              </li>
              <li>
                <a href="#">Legal Notice</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Products</h4>
            <ul>
              <li>
                <a href="#">Essentials</a>
              </li>
              <li>
                <a href="#">e-Gifting</a>
              </li>
              <li>
                <a href="#">Accommodation</a>
              </li>
              <li>
                <a href="#">Dining</a>
              </li>
              <li>
                <a href="#">Spa & Fitness</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Other Pages</h4>
            <ul>
              <li>
                <a href="#">Reservation</a>
              </li>
              <li>
                <a href="#">Image Gallery</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Best Rate Guarantee</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic">
              Yen Ninh, Binh Son, Ninh Chu, Phan Rang
              <br />
              Ninh Thuan 59300 Vietnam
              <br />
              Tel: +84 854 343 343
              <br />
              For reservations: +84 344 105 676
              <br />
              Mail: contact@mountainparadise.com
            </address>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter email to subscribe"
                className="border p-2 w-full"
              />
            </div>
          </div>
        </div>
        <hr className="my-6" />
        {/* Footer Bottom */}
        <div className="mt-8 flex flex-row justify-between  ">
          <p>Copyright © 2023 - Hidden Oasis Resort. All rights reserved</p>
          <div className="flex justify-center ">
            <p className="mr-2">Choose Your Language:</p>
            <select className="border">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ka">Kannada</option>
              <option value="sp">Spanish</option>
              <option value="italics">🇮🇹</option>
              {/* Add more language options as needed */}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
