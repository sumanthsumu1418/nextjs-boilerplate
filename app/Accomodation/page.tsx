import React from "react";
import Image from "next/image";
import Button from "../components/Button";
const Accommodation = () => {
  return (
    <section className="bg-[#F5F0E5] py-12 px-[6%]">
      <div className="grid md:grid-cols-2 gap-12">
       
        <div className="flex flex-col items-center">
          <Image
            src="/resort3.webp" 
            alt="Luxury Living"
            width={500}
            height={600}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <h2 className="text-3xl font-serif font-semibold text-green-800 mt-6">
            Style
          </h2>
          <p className="text-xl text-center text-gray-700 mt-2">
            Luxurious and Opulent Ambiance.
          </p>
        </div>

        
        <div>
          <h2 className="text-3xl font-serif font-semibold text-green-800 mb-6">
            Accommodations & Suite.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="relative">
              <Image
                src="/resort4.webp" 
                alt="Accommodation 1"
                width={400}
                height={300}
                loading="lazy"
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

           
            <div className="relative">
              <Image
                src="/resort3.webp" 
                alt="Accommodation 2"
                width={400}
                loading="lazy"
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
