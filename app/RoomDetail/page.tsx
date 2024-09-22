/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import king1 from '../components/images/king1.jpeg'

// Main Room Component
const RoomDetail = () => {
  const interestedRooms = [
    {
      title: "1 King Bed Junior Suite",
      src: "/resort1.jpeg", // Replace with actual image URL
    },
    {
      title: "1 King Bed Junior Suite Oceanfront View",
      src: "/resort1.jpeg", // Replace with actual image URL
    },
    {
      title: "1 King 2 Double Beds 2 Bedroom Suite",
      src: "/resort1.jpeg", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Main Image and Description */}
      <div className="p-[6%] max-w-full h-[600px] items-center overflow-hidden">
        <Image
          src="/king1.jpeg" // Replace with actual image URL
          alt="king1"
          width={1200} // Aspect ratio is based on these values
          height={500} // Keeping the same aspect ratio (1:1)
          layout="intrinsic" // Use intrinsic for controlling both width and height
          className="w-full h-auto object-cover rounded-lg"
        />

        <div className="mt-8">
          <p className="text-lg text-gray-700">
            As soon as you step into Hidden Oasis Resort, you'll immediately
            feel the beauty of your beachfront room. Designed in traditional
            Vietnamese style...
            <br /> <br />
            {/* Add more room details here as needed */}
          </p>
        </div>
      </div>

      {/* Room Features */}
      <div className="mt-8 max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center">
          <span className="mr-4">🏨</span>
          <p>52 sq m (550 sq ft)</p>
        </div>
        <div className="flex items-center">
          <span className="mr-4">🛏️</span>
          <p>King bed or two twin beds</p>
        </div>
        <div className="flex items-center">
          <span className="mr-4">🌆</span>
          <p>View: Garden and Ocean</p>
        </div>
        <div className="flex items-center">
          <span className="mr-4">🏡</span>
          <p>Terrace with outdoor seating</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-8 max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-lg bg-gray-300">
        <h3 className="text-xl font-semibold text-green-800 mb-4 ">Benefits</h3>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Free breakfast for children under 12.</li>
          <li>Unlimited access to the spa and pool.</li>
          <li>Complimentary Wi-Fi.</li>
          {/* Add more benefits as needed */}
        </ul>
      </div>

      {/* Amenities Section */}
      <div className="mt-8 max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-lg bg-gray-300">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <p>Ocean views</p>
          <p>Private pool</p>
          <p>Free breakfast</p>
          <p>Complimentary Wi-Fi</p>
          {/* Add more amenities */}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-green-800 text-white py-2 px-6 rounded-lg hover:bg-green-700">
            Make a Reservation
          </button>
        </div>
      </div>

      {/* You Might Be Interested Section */}
      <div className="mt-12 w-full px-[5%]">
        <h3 className="text-xl font-semibold text-center text-green-800 mb-6">
          You Might Be Interested
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interestedRooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={room.src}
                alt={room.title}
                width={100}
                height={100}
                layout="responsive"
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-green-800">
                  {room.title}
                </h4>
                <button className="text-green-800 text-center underline mt-2">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
