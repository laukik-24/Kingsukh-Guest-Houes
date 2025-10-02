import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#011a08] text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Kingsukh <br /> Guest House
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <button className="bg-[#5E936C] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#206532] transition">
            BOOK NOW
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Browse Destinations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Special Offers & Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Room Types & Amenities
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Customer Reviews & Ratings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Travel Tips & Guides
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <li>Concierge Assistance</li>
            <li>Flexible Booking Options</li>
            <li>Airport Transfers</li>
            <li>Wellness & Recreation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">CONTACT US</h3>
          <p className="text-sm mb-3">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </p>
          <p className="text-sm mb-1">kkghosh0099@gmail.com</p>
          <p className="text-sm mb-4">+91 9007062180</p>
          {/* Socials */}
          <div className="flex space-x-3 text-xl">
            <a href="#" className="text-blue-600 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-pink-500 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-600 hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" className="text-sky-400 hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        Copyright © {new Date().getFullYear()} Kingsukh Guest House. All rights
        reserved.
      </div>
    </footer>
  );
}
