import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
export default function ContactSection() {
  return (
    <section className="w-full flex justify-center py-16 px-6">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl shadow-xl rounded-4xl overflow-hidden">
        {/* Left Side - Contact Info */}
        <div className="bg-[#558d64] text-white p-8 md:w-1/3 flex flex-col md:rounded-4xl justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-6xl mt-0.5" />
                <p className="text-lg">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-xl" />
                <p className="text-lg">kkghosh0099@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone className="text-xl" />
                <p className="text-lg">+91 9007062180</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10 md:mt-6">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white rounded-4xl p-8 md:w-2/3">
          <h2 className="text-2xl font-bold text-green-600 mb-6">
            Send a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="border-b border-gray-400 focus:outline-none p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b border-gray-400 focus:outline-none p-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border-b border-gray-400 focus:outline-none p-2"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border-b border-gray-400 focus:outline-none p-2"
              />
            </div>
            <textarea
              placeholder="Write your message here..."
              className="w-full border-b border-gray-400 focus:outline-none p-2 h-28"></textarea>
            <button
              type="submit"
              className="bg-[#5E936C] text-white text-xl px-10 py-2 rounded-2xl hover:bg-[#1e6c33] transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
