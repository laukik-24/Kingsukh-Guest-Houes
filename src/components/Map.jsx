"use client";
import { Button } from "@/components/ui/button";

export default function Map() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl shadow-md p-8 md:p-12 gap-8">
      {/* Left: Description */}
      <div className="flex-1 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Find Peace & Comfort at Kingsukh Guest House
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Nestled in the heart of nature,{" "}
          <span className="font-semibold">Kingsukh Guest House</span>
          offers the perfect escape from the bustle of city life. Conveniently
          located just a few minutes from the main town, our guest house is
          easily accessible by road and close to popular attractions,
          restaurants, and local markets. Enjoy serene surroundings, fresh air,
          and homely warmth — all in one place.
        </p>
        <a href="https://www.google.com/maps?ll=23.586332,86.85979&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=5871101700881520647">
          <Button variant="outline" className="mt-4 cursor-pointer">
            View on Google Maps →
          </Button>
        </a>
      </div>

      {/* Right: Map */}
      <div className="flex-1 w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1759578062895!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
}
