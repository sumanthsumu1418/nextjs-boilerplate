import React from "react";
import Image from "next/image";
import Resort3 from '../components/images/resort3.jpeg'
import Resort4 from '../components/images/resort4.jpeg'
import Button from "../components/Button";
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

export default Accommodation;
