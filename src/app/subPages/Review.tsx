// components/TestimonialSlider.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "The Excited",
    year: "2025",
    location: "Česká Třebová",
    text: `Práce u kluků byla pro nás jednoznačným přínosem. Přesto, že jsme po minulých zkušenostech z různých nahrávacích studií byli z prvu takzvaně "nesví", už z první konzultační porady jsme si byli jistí že tohle je pro nás ta cesta. Kluci ve studiu ví co dělají a snaží se i zdokonalovat, což jsme po většinu studií neviděli.. Co bychom tak mohli vypíchnout? Super práce se zvukem bicích,snímání kytar i zpěvů, zkrátka komplexní profesionalita. Jo a abych nezapomněl super káva a přátelský přístup. Kdo nezkusí neví, ale já vím, že my se sem určitě vrátíme!`
  },
  {
    name: "Jakub Kopřiva",
    year: "2025",
    location: "Česká Třebová",
    text: "Byla jsem velmi nadšená ze společných a individuálních konzultací, kde jsme probírali vše křížem krážem. Dalo mi to nejvíce podnětů k přemýšlení...",
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
            className={`h-3 w-3 rounded-full ${index === i ? "bg-secondary" : "bg-primary"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
