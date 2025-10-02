import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="px-10 py-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image with Slide In Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ x: -100, opacity: 0 }} // start off left
            whileInView={{ x: 0, opacity: 1 }} // animate to position
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // only once when 30% visible
          >
            <img
              src="src/assets/header.jpg"
              alt="Kingsukh Guest House"
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full object-cover"
            />
          </motion.div>

          {/* Right Content with Slide Up Animation */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ y: 80, opacity: 0 }} // start lower
            whileInView={{ y: 0, opacity: 1 }} // slide up
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>
            <p className="uppercase tracking-wider font-semibold text-md text-gray-600">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-900">
              The Best Holidays Start Here!
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-justify">
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

            {/* Button with subtle scale animation */}
            <motion.button
              className="mt-6 px-6 py-3 bg-[#73946B] text-white font-semibold rounded-md shadow-md hover:bg-[#537D5D] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              BOOK NOW
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
