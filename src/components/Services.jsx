"use client";

import React from "react";
import { motion } from "framer-motion";
import home from "../assets/image.png"; // floating robot
import serviceVideo from "../assets/1.jpg"; // replace with actual video thumbnail
import icon2 from "../assets/24Icon.png"; // Personalized Experiences icon
import { Shield, Utensils, Map } from "lucide-react";

const services = [
  {
    title: "High Class Security",
    icon: <Shield className="w-8 h-8 text-blue-500" strokeWidth={2} />,
    bg: "bg-blue-100",
  },
  {
    title: "24 Hours Room Service",
    icon: <img src={icon2} className="w-8" alt="" />,
    bg: "bg-pink-100",
  },
  {
    title: "Restaurant",
    icon: <Utensils className="w-8 h-8 text-purple-500" strokeWidth={2} />,
    bg: "bg-purple-100",
  },
  {
    title: "Tourist Guide Support",
    icon: <Map className="w-8 h-8 text-red-500" strokeWidth={2} />,
    bg: "bg-red-100",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3, // delay between each service
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // start 50px to the right
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // slide to natural position
  };

  return (
    <div id="services" className="w-full relative">
      {/* Soft Green Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 30% 400px, #7fb98f, transparent)`,
        }}
      />
      <section className="w-full text-black py-20 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center md:text-left mb-16 relative">
            <h2 className="uppercase tracking-wider font-semibold text-md text-gray-600">
              Our <span className="text-black">Services</span>
            </h2>
            <p className="text-5xl font-bold leading-tight mb-4">
              Strive Only For The Best.
            </p>
            {/* Floating Robot Top Right */}
            <img
              src={home}
              alt="Floating Robot"
              className="absolute top-0 right-0 w-42 h-auto animate-float hidden md:block"
            />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video / Image */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={serviceVideo}
                  alt="Service Video"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Service Details */}
            <motion.div
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }} // triggers when 20% is in view
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 group">
                  <div
                    className={`${service.bg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
