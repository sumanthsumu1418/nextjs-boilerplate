"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import RoomDetail from "../RoomDetail/page";

const Page: React.FC = () => {
    return (
      <div className="bg-[#F5F0E5]">
        <HeroSection />
        <div className="flex flex-col md:flex-row py-10 px-[6%]">
          <DateSelection />
          <div className="w-full md:w-1/3 bg-white shadow-md p-6 ml-0 md:ml-10">
            <h3 className="text-lg font-semibold">Your Stay</h3>
            <ul className="mt-4">
              <li>
                Check-in: <strong>24/09/2023</strong>
              </li>
              <li>
                Check-out: <strong>26/09/2023</strong>
              </li>
              <li>
                Guests: <strong>2 Adults</strong>
              </li>
            </ul>
            <div className="text-right mt-6 text-lg">
              <span>Total: $0.00</span>
            </div>
          </div>
        </div>
        <RoomList />
      </div>
    );
  };
  
  const HeroSection: React.FC = () => {
    return (
      <header className="relative w-full  h-80">
        <img
          src="/resort1.jpeg"
          alt="Resort Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute px-[6%] inset-0 bg-black bg-opacity-60 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Hidden Oasis.</h1>
          <p>Vinh Hy, Vinh Binh, Chau Phan Rang, Ninh Thuan 596500 Vietnam</p>
          <p>Tel: +84 0259 345 9876 | For reservations call: +84 0123 456 9876</p>
          <p>Email: contact@hiddenoasisresort.com</p>
        </div>
      </header>
    );
  };
  
  const DateSelection: React.FC = () => {
    return (
      <div className="w-full md:w-2/3 bg-white px-[5%] py-6 shadow-md rounded-lg">
        {/* Date Selection Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8 my-4 w-full">
          <div>
            <label
              htmlFor="checkin"
              className="block text-[17px] font-medium text-gray-700"
            >
              Check-in
            </label>
            <input
              type="date"
              id="checkin"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-[17px]"
            />
          </div>
          <div>
            <label
              htmlFor="checkout"
              className="block text-[17px] font-medium text-gray-700"
            >
              Check-out
            </label>
            <input
              type="date"
              id="checkout"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-[17px]"
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-[17px] font-medium text-gray-700"
            >
              Guests
            </label>
            <input
              type="number"
              id="guests"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-[17px]"
              defaultValue="2"
            />
          </div>
        </form>
  
        {/* Filter Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6 w-full">
          <div>
            <label
              htmlFor="viewResults"
              className="block text-[17px] font-medium text-gray-700"
            >
              View Results By
            </label>
            <select
              id="viewResults"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-[17px]"
            >
              <option>Special Codes or Rates</option>
            </select>
          </div>
  
          <div>
            <label
              htmlFor="sortBy"
              className="block text-[17px] font-medium text-gray-700"
            >
              Sort By
            </label>
            <select
              id="sortBy"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-[17px]"
            >
              <option>Recommended</option>
            </select>
          </div>
  
          <div>
            <label
              htmlFor="filter"
              className="block text-[17px] font-medium text-gray-700"
            >
              Show
            </label>
            <select
              id="filter"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-[17px]"
            >
              <option>Filters</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
  
  interface Room {
    title: string;
    price: string;
    image: string;
  }
  
  const RoomList: React.FC = () => {
    const rooms: Room[] = [
      {
        title: "1 King Bed Junior Suite",
        price: "$3,445",
        image: "/room1.jpeg",
      },
      {
        title: "1 King Bed Senior Suite",
        price: "$3,445",
        image: "/room2.jpeg",
      },
      {
        title: "1 King Bed Master Suite",
        price: "$3,445",
        image: "/room3.jpeg",
      },
      {
        title: "1 King Bed Junior Suite",
        price: "$3,445",
        image: "/room4.jpeg",
      },
    ];
  
    const navigateToRoomDetails = (room: Room) => {
      // Logic to navigate to room details (for example, using router.push('/room-details'))
      console.log("Navigating to room details for:",<RoomDetail />);
    };
  
    const handleBookNow = (room: Room, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // Logic to handle booking
      console.log("Booking room:",<RoomDetail /> );
    };
  
    return (
        <section className="py-10 px-[6%]">
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Select a Room</h2>
                 <div className="grid gap-6">
                  {rooms.map((room, index) => (
                    <Link href={`/RoomDetail`} key={index} passHref>
                      <div
                        className="bg-white gap-8 rounded-lg shadow-lg p-6 flex cursor-pointer"
                      >
                        <Image
                          src={room.image}
                          alt={room.title}
                          width={100}
                          height={100}
                          className="w-2/4 h-[200px] rounded-lg object-cover"
                        />
                        <div className="ml-6 flex flex-col justify-between">
                          <h3 className="text-xl font-semibold">{room.title}</h3>
                          <p className="text-gray-600">From {room.price}</p>
                          <p className="text-[17px] text-gray-500">Average Per Night</p>
                          <button
                            onClick={(e) => handleBookNow(room, e)} // Prevents navigation when clicking "Book Now"
                            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        };
  

  export default Page;
  