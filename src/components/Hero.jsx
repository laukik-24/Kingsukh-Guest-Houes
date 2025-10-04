import React from "react";
import NavbarD from "./NavbarD";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      className="relative items-center w-full h-[95vh]  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="flex flex-col items-center justify-center h-[65vh]">
        <motion.h1
          animate={{
            y: [0, -10, 0], // float up and down
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="text-3xl font-semibold text-neutral-300 text-center">
          Simple - Unique - Friendly
        </motion.h1>
        <h1 className="text-6xl font-bold mt-4 text-white text-center">
          Make Yourself At Home
          <br /> In Our <span className="text-amber-200">Guest House.</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
