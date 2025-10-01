import React from "react";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="px-6 py-10 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="src/assets/header.jpg"
              alt="Kingsukh Guest House"
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <p className="text-3xl  text-gray-600 font-medium">About Us</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-900">
              The Best Holidays Start Here!
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Embark on a tranquil journey at our Kingsukh Guest House,
              enveloped by the scenic allure of Biharinath Hill, Baranti Hill,
              Susunia Hill, Joychandi Hill, Garhpanckot, Baranti Dam, Maithon
              Dam, and the captivating Panchat Dam. Revel in the embrace of
              comfort, relish delightful meals, and unwind in our verdant garden
              oasis. Your ideal retreat beckons, promising a harmonious blend of
              nature's beauty and heartfelt hospitality. Explore the hidden gems
              of Purulia, creating memories that linger long after your stay.
            </p>

            <p className="mt-4 font-semibold text-blue-700">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </p>
            <p className="text-blue-600 font-medium">
              Contact us: +91 9007062180
            </p>

            <button className="mt-6 px-6 py-3 bg-[#73946B] text-white font-semibold rounded-md shadow-md hover:bg-[#537D5D] transition">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
