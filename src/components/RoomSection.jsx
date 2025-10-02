import RoomCard from "./ui/RoomCard";
import { motion } from "framer-motion";

export default function RoomsSection() {
  const rooms = [
    {
      img: "src/assets/service.jpg",
      title: "Cozy Haven Room",
      desc: "Escape to comfort lorem in our Cozy Haven Room, a snug loren retreat designed for intimate relaxation.",
      price: 1000,
    },
    {
      img: "src/assets/recep.jpg",
      title: "Spacious Serenity Suite",
      desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: 1500,
    },
    {
      img: "src/assets/room1.jpg",
      title: "Spacious Serenity Villa",
      desc: "Indulge in luxury and ample space in our Spacious Serenity Villa, where tranquility meets roomy elegance.",
      price: 1500,
    },
  ];

  // animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 px-10">
      <div className="text-start mb-10 max-w-7xl mx-auto">
        <p className="uppercase tracking-wider font-semibold text-md text-gray-600">
          Our Living Room
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          The Most Memorable Rest <br /> Time Starts Here.
        </h2>
      </div>

      {/* cards grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}>
        {rooms.map((room, i) => (
          <motion.div key={i} variants={cardVariants}>
            <RoomCard {...room} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
