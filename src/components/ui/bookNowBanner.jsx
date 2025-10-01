import React from "react";

const BookNowBanner = () => {
  return (
    <div className="relative w-full flex justify-center -mt-12 z-20">
      <div className="bg-white shadow-xl rounded-xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-[90%] md:w-[60%]">
        <h2 className="text-xl font-semibold text-gray-800 text-center sm:text-left">
          Ready to Book Your Stay?
        </h2>
        <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 transition">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default BookNowBanner;
