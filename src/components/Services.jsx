import React from "react";
import home from "../assets/image.png"; // floating robot
import serviceVideo from "../assets/1.jpg"; // replace with actual video thumbnail
import icon2 from "../assets/24Icon.png"; // Personalized Experiences icon
import { Shield, Clock, Utensils, Map } from "lucide-react";

export default function ServicesSection() {
  return (
    <div id="services" className="w-full relative bg-white">
      {/* Soft Green Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle 500px at 30% 400px, #7fb98f, transparent)
      `,
        }}
      />
      <section className="w-full  text-black py-20 px-8 relative overflow-hidden">
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
            <div className="space-y-10">
              {/* Service 1 */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Shield className="w-8 h-8 text-blue-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    High Class Security
                  </h3>
                </div>
              </div>
              {/* Service 2 */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {/* <Clock className="w-8 h-8 text-pink-500" strokeWidth={2} /> */}
                    <img src={icon2} className="w-8" alt="" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    24 Hours Room Service
                  </h3>
                </div>
              </div>
              {/* Service 3 */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Utensils
                      className="w-8 h-8 text-purple-500"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Restaurant</h3>
                </div>
              </div>
              {/* Service 4 */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <Map className="w-8 h-8 text-red-500" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Tourist Guide Support
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
