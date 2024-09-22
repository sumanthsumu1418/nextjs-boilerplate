import React from "react";
import Image from "next/image";
import Resort1 from '../components/resort1.jpeg'
import Resort2 from '../components/resort2.jpeg'
import Resort4 from '../components/resort4.jpeg'
const Services = () => {
  const services = [
    {
      title: "Wedding & Events",
      description:
        "Hidden Oasis resort is the perfect location for weddings and events. The resort offers a variety of event spaces, from intimate beachfront ceremonies to grand ballroom receptions. The professional staff provides personalized service to every detail, ensuring a memorable and stress-free experience for all guests.",
      imageUrl:
      Resort1, // Replace with your image URL
    },
    {
      title: "Dining",
      description:
        "Hidden Oasis resort offers a variety of dining options from beachfront cafes to fine dining restaurants with both local and international cuisine. The restaurants offer breathtaking views of natural beauty, creating a serene atmosphere for all guests.",
      imageUrl:
      Resort4, // Replace with your image URL
    },
    {
      title: "Beauty & Wellness",
      description:
        "Hidden Oasis offers a wide array of spa and wellness experiences for guests. The resort has a variety of treatments, from traditional massages to aromatherapy, all designed to restore and energize the mind and body.",
      imageUrl:
      Resort2, // Replace with your image URL
    },
  ];

  return (
    <section className="py-12 px-[5%] bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-lg p-6">
            <Image
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-56 object-cover mb-4 rounded-md"
              width={500} // Set the width for Image component
              height={350} // Set the height for Image component
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;