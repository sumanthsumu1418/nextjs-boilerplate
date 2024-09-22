import React from 'react';
import Image from 'next/image';
import R1 from "../components/images/R1.jpeg";
import R2 from "../components/images/R2.jpeg";
import R3 from "../components/images/R3.jpeg";
import R4 from "../components/images/R4.jpeg";

const Resort = () => {
  const diningOptions = [
    {
      title: 'The Restaurant and Terrace',
      description: "Hidden Oasis's Restaurant highlights the best of Vietnamese cuisine, featuring all-day dining with fresh, seasonal produce and local seafood.",
      src: R1,
      cuisine: 'Vietnamese Food',
      hours: 'Opening Hours: 2:00 pm - 10:00 pm',
    },
    {
      title: 'Destination Dining',
      description: "Hidden Oasis's Restaurant highlights the best of Vietnamese cuisine, featuring all-day dining with freshly seasoned produce and local seafood.",
      src: R2,
      cuisine: 'Vietnamese Food',
      hours: 'Opening Hours: 2:00 pm - 10:00 pm',
    },
    {
      title: 'Floating Breakfast',
      description: "Hidden Oasis's Restaurant highlights the best of Vietnamese cuisine, featuring all-day dining with freshly seasoned produce and local seafood.",
      src: R3,
      cuisine: 'Vietnamese Food',
      hours: 'Opening Hours: 2:00 pm - 10:00 pm',
    },
    {
      title: 'Pool Side',
      description: "Hidden Oasis's Restaurant highlights the best of Vietnamese cuisine, featuring all-day dining with freshly seasoned produce and local seafood.",
      src: R4,
      cuisine: 'Vietnamese Food',
      hours: 'Opening Hours: 2:00 pm - 10:00 pm',
    },
  ];

  return (
    <div className="py-12 bg-[#f9f4ec]">
      {/* Heading Section */}
      <div className="text-center max-w-screen-lg mx-auto mb-12">
        <h2 className="text-4xl font-bold text-green-800">
          Discover Local & World Cuisines At Hidden Oasis.
        </h2>
        <p className="text-gray-900 mt-4">
          At Hidden Oasis, we offer a diverse selection of dining options with three restaurants and a bar on-site. Our culinary team has crafted unique menus with flavors that are both exotic and familiar, catering to a variety of tastes.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-screen-lg mx-auto space-y-12">
        {diningOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white shadow-lg rounded-lg overflow-hidden`}
          >
            <Image
              src={option.src}
              alt={option.title}
              width={400}
              height={200}
              className="w-[500px] h-[300px] object-cover mx-auto md:mx-0"
            />
            <div className="p-6 flex-1">
              <h3 className="text-[30px] font-semibold text-green-800">{option.title}</h3>
              <p className="text-gray-600 mt-4">{option.description}</p>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-[18px] text-gray-500">
                    <span className="inline-block mr-1">🍽️</span>{option.cuisine}
                  </p>
                  <p className="text-[18px] text-gray-500">
                    <span className="inline-block mr-1">⏰</span>{option.hours}
                  </p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resort;
