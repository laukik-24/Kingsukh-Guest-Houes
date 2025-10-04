import { useState } from "react";
import { Button } from "./ui/button";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-6 flex flex-col md:flex-row justify-center items-center gap-50">
      {/* Left Section */}
      <div className="flex flex-col justify-center max-w-lg space-y-6">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Email, call, or complete the form to learn how Kingsukh Guest House
            can make your stay more comfortable.
          </p>
        </div>

        <div className="text-gray-700 space-y-2">
          <p className="font-medium">kkghosh0099@gmail.com</p>
          <p className="font-medium">+91 90070 62180</p>
          <a href="#">
            <Button variant="outline" className="mt-4 cursor-pointer">
              Customer Support
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div>
            <h4 className="font-semibold text-gray-900">Customer Support</h4>
            <p className="text-gray-600 text-sm mt-1">
              Our team is available around the clock to address your queries and
              concerns.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Feedback & Suggestions
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              We value your feedback and work continuously to enhance our
              services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">Media Inquiries</h4>
            <p className="text-gray-600 text-sm mt-1">
              For media or press inquiries, contact us at{" "}
              <span className="font-medium text-gray-900">
                media@kingsukhguesthouse.com
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Form Card) */}
      <div className="flex-1 max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
        <p className="text-gray-600 mb-6">You can reach us anytime</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#87c698] outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#87c698] outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#87c698] outline-none"
          />

          <div className="flex">
            <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-gray-50 text-gray-600 outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-r-lg px-3 py-2 focus:ring-2 focus:ring-[#87c698] outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="How can we help?"
            maxLength="120"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 resize-none focus:ring-2 focus:ring-[#87c698] outline-none"></textarea>

          <button
            type="submit"
            className="w-full bg-[#5E936C] hover:bg-[#3E5F44] text-white font-medium py-3 rounded-lg transition">
            Submit
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4 text-center">
          By contacting us, you agree to our{" "}
          <a href="#" className="text-gray-900 font-medium underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-900 font-medium underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}
