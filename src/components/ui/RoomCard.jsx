import { Heart, Droplet, Shield } from "lucide-react";

export default function RoomCard({ img, title, desc, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Image section */}
      <div className="relative">
        <img src={img} alt={title} className="w-full h-56 object-cover" />
        {/* icons */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:scale-105 transition">
            <Heart className="text-pink-500" size={18} />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:scale-105 transition">
            <Droplet className="text-purple-500" size={18} />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:scale-105 transition">
            <Shield className="text-blue-500" size={18} />
          </button>
        </div>
      </div>

      {/* Content section */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 text-md mb-3">{desc}</p>
        <p className="text-md mb-4">
          Starting from <span className="font-bold">Rs. {price}/night</span>
        </p>
        <button className="w-full py-2 rounded-md bg-[#5E936C] text-white mt-6 font-semibold hover:bg-[#206532] transition">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}
