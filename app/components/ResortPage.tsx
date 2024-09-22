/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Resort from "./images/resort.jpeg";
import Resort1 from "./images/resort1.jpeg";
import Resort2 from "./images/resort2.jpeg";
import Resort3 from "./images/resort3.jpeg";
import Resort4 from "./images/resort4.jpeg";
import Button from "./Button";

const LuxuryLivingSection = () => {
  return (
    <section className="bg-[#F5F0E5]  py-12  px-[6%]">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            src={Resort}
            alt="Luxury Living"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          <Image
            src={Resort1}
            alt="Small Image 1"
            width={112}
            height={112}
            className="absolute bottom-0 right-0 w-28 h-28 object-cover border-4 border-white"
          />
          <div className="absolute top-0 left-0 transform translate-y-4 translate-x-4 bg-white p-1">
            <p className="text-xs">Nature</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            Luxury Living in Paradise.
          </h2>

          <p className="text-gray-700 mb-6">
            Hidden Oasis is a beautiful resort in Ninh Thuan, Vietnam. It's
            surrounded by mountains and the ocean, with lush greenery and
            colorful flowers. The rooms are spacious and furnished with modern
            amenities.
          </p>
          <Button
            text="Read More"
            className="w-[35%]"
            additionalStyles={undefined}
          />
        </div>
      </div>
    </section>
  );
};

const GrandOpeningOfferSection = () => {
  return (
    <section className="bg-[#F5F0E5] py-12 px-[6%]">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">
            Grand Opening Offer.
          </h2>
          <p className="text-gray-700 mb-6">
            Experience the world in a whole new way with our exclusive offer of
            10% savings on your stay and additional perks, such as complimentary
            breakfast and spa treatments.
          </p>
          <Button
            text="Explore More"
            className="w-[35%]"
            additionalStyles={undefined}
          />
        </div>

        <div className="relative">
          <Image
            src={Resort2}
            alt="Grand Opening"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const Accommodation = () => {
  return (
    <section className="bg-[#F5F0E5] py-12 px-[6%]">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section: Style and Large Image */}
        <div className="flex flex-col items-center">
          <Image
            src={Resort3} // Replace with your large image path
            alt="Luxury Living"
            width={500}
            height={600}
            className="w-full h-auto object-cover"
          />
          <h2 className="text-3xl font-serif font-semibold text-green-800 mt-6">
            Style
          </h2>
          <p className="text-xl text-center text-gray-700 mt-2">
            Luxurious and Opulent Ambiance.
          </p>
        </div>

        {/* Right Section: Accommodations */}
        <div>
          <h2 className="text-3xl font-serif font-semibold text-green-800 mb-6">
            Accommodations & Suite.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Image Card */}
            <div className="relative">
              <Image
                src={Resort4} // Replace with your right image
                alt="Accommodation 1"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <p className="mt-2 text-sm font-semibold text-gray-700">
                Four Bedroom Pool Residence
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Enjoy a great night’s sleep and indulge in stylish
                accommodations at our resort. Our blend of classic and modern
                décor offers one-of-a-kind experiences without compromising
                comfort.
              </p>
              <Button
                text="View All Accommodations"
                className="mt-4"
                additionalStyles={undefined}
              />
            </div>

            {/* Second Image Card */}
            <div className="relative">
              <Image
                src={Resort3} // Replace with another image
                alt="Accommodation 2"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <p className="mt-2 text-sm font-semibold text-gray-700">
                Four Bedroom Pool Residence
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Enjoy a great night’s sleep and indulge in stylish
                accommodations at our resort. Our blend of classic and modern
                décor offers one-of-a-kind experiences without compromising
                comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Resortpage = () => {
  return (
    <div className="bg-[#D3CBB8] min-h-screen">
      <LuxuryLivingSection />
      <GrandOpeningOfferSection />
      <Accommodation />
    </div>
  );
};

export default Resortpage;
