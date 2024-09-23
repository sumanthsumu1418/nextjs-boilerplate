import React from "react";
import Image from "next/image";
import rg1 from "./images/rg1.webp";
import rg2 from "./images/rg2.webp";
import rg3 from "./images/rg3.webp";
const RegionalHighlights = () => {
  const highlights = [
    {
      title: "Grape Garden",
      imageUrl:"/rg1.webp" ,
    },
    {
      title: "Vinh Hy Bay",
      imageUrl:"/rg3.webp",
      isCenter: true, 
    },
    {
      title: "Po Klong Garai Temple",
      imageUrl: "/rg2.webp", 
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#f9f4ec]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Discover: Regional Highlights
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Ninh Thuan province in Vietnam boasts a unique beauty and rich
          culture. With stunning landscapes such as the famous Vinh Hy Bay and
          Cham Island, along with the diverse traditions of the Cham ethnic
          group, Ninh Thuan is a must-visit destination for those seeking an
          authentic cultural experience in Vietnam.
        </p>
      </div>
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-8 mb-8">
        {highlights.map((highlight) => (
          <div
            key={highlight.title}
            className={`text-center ${highlight.isCenter ? "relative" : ""}`}
          >
            <div
              className={`relative w-full ${
                highlight.isCenter ? "h-96" : "h-72"
              } rounded-lg overflow-hidden`}
            >
              <Image
                src={highlight.imageUrl}
                alt={highlight.title}
                fill
                objectFit="cover"
                loading="lazy"
                className="rounded-lg transition-transform duration-500 transform group-hover:scale-[2]"
              />
            </div>
           
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {highlight.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-6 py-2 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800">
          View All Experiences
        </button>
      </div>
    </section>
  );
};

export default RegionalHighlights;
