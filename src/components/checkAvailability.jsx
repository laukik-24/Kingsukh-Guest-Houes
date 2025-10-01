import React, { useState } from "react";

const CheckAvailability = () => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("Apartment");
  const [guests, setGuests] = useState("");

  return (
    <div className="relative w-full flex justify-center -mt-16 z-20 ">
      <div className="bg-neutral-100/60 backdrop-blur-md shadow-xl rounded-xl p-10 flex flex-col md:flex-row items-center gap-4 w-[95%] md:w-[80%] lg:w-[70%]">
        {/* Date */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-gray-800 text-sm mb-1">DATE</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800"
          />
        </div>

        {/* Type */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-gray-500 text-sm mb-1">TYPE</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800">
            <option>Apartment</option>
            <option>Deluxe Room</option>
            <option>Suite</option>
            <option>Villa</option>
          </select>
        </div>

        {/* Guests */}
        <div className="flex flex-col w-full md:w-1/4">
          <label className="text-gray-500 text-sm mb-1">GUESTS</label>
          <input
            type="number"
            placeholder="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="border-b border-gray-400 bg-transparent focus:outline-none text-gray-800"
          />
        </div>

        {/* Booking Button */}
        <div className="w-full md:w-auto flex justify-center">
          <button className=" px-4 py-3 bg-[#5E936C] text-white font-semibold rounded-md shadow-md hover:bg-[#3E5F44] transition w-full md:w-auto">
            Check Availabilty →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
