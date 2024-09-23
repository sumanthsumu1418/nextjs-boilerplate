"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Resort from "./images/resort (1).webp";
import Resort1 from "./images/resort1 (1).webp";
import Resort2 from "./images/resort2 (1).webp";
import Button from "./Button";
import Accommodations from "../Accomodation/page";

const LuxuryLivingSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); 

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        //@ts-expect-error
        videoRef.current.muted = isMuted; 
        //@ts-expect-error
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Video is playing.");
            })
            //@ts-expect-error
            .catch((error) => {
              console.log("Autoplay prevented: " + error);
            });
        }
      }
    };

    playVideo();
  }, [isMuted]); 

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="bg-[#F5F0E5] px-[6%] py-12">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg"
          loop
          playsInline
          muted={isMuted}
          autoPlay 
          src="/videos/video.mp4"
        >
          Your browser does not support the video tag.
        </video>
        
        <button
          onClick={toggleMute}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="relative">
          <Image
            src="/resort.webp"
            alt="Luxury Living"
            width={800}
            height={600}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
          <Image
            src="/resort1.webp"
            alt="Small Image 1"
            width={112}
            height={112}
            loading="lazy"
            className="absolute bottom-0 right-0 w-28 h-28 object-cover border-4 border-white"
          />
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
          <Button text="Read More" className="w-[35%]" additionalStyles={undefined} />
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
          <Button text="Explore More" className="w-[35%]" additionalStyles={undefined} />
        </div>

        <div className="relative">
          <Image
            src="/resort2.webp"
            alt="Grand Opening"
            width={800}
            height={600}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
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
      <Accommodations />
    </div>
  );
};

export default Resortpage;
