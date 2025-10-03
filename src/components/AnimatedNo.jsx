"use client";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

function Counter({ endValue, label }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate once only

  if (isInView && value === 0) {
    setValue(endValue);
  }

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6">
      <div className="flex items-center">
        <AnimatedNumber
          className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-zinc-50"
          springOptions={{
            bounce: 0,
            duration: 3000,
          }}
          value={value}
        />
        <span className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-50 ml-1">
          +
        </span>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full lg:mt-12 py-10 bg-white md:px-6 px-10 dark:bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto bg-white shadow-lg rounded-xl">
        <Counter endValue={100} label="Bookings Completed" />
        <Counter endValue={150} label="Happy Customers" />
      </div>
    </section>
  );
}
