// components/TestimonialSlider.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jakub Řikovský",
    year: "2023",
    location: "Moravská Třebová",
    text: "Rozhodně bych vyzdvihl na PINKaka individuální přístup ke každému projektu, ochotu pomoc, poradit a fantastické lidi, kteří se o PINKaka starají, ale i účastní.",
  },
  {
    name: "Nikola Lachman",
    year: "2024",
    location: "Moravská Třebová",
    text: "Byla jsem velmi nadšená ze společných a individuálních konzultací, kde jsme probírali vše křížem krážem. Dalo mi to nejvíce podnětů k přemýšlení...",
  },
  {
    name: 'Lucie "Lusy" Vrátilová',
    year: "2024",
    location: "Chrudim",
    text: "Úžasný přístup, jak lidský, tak profesionální a dokáže podržet člověka ve chvíli, kdy máte pocit, že nevíte jak dál...",
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 sekund
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 text-center">
      <h2 className="mb-1 text-3xl font-bold md:text-4xl">Reference</h2>
      <div className="relative h-52 md:h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full px-4"
          >
            <p className="mx-auto mb-6 max-w-3xl text-lg italic text-gray-800">
              „{testimonials[index].text}“
            </p>
            <p className="font-semibold text-primary">
              {testimonials[index].name}
            </p>
            <p className="text-sm text-gray-500">
              účastník PINKaka {testimonials[index].location}{" "}
              {testimonials[index].year}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${index === i ? "bg-primary" : "bg-secondary"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
