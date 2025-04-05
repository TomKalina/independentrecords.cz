// components/TestimonialSlider.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "The Excited",
    year: "2025",
    genre: "Big-Beat Pop",
    text: `Práce u kluků byla pro nás jednoznačným přínosem. Přesto, že jsme po minulých zkušenostech z různých nahrávacích studií byli z prvu takzvaně "nesví", už z první konzultační porady jsme si byli jistí že tohle je pro nás ta cesta. Kluci ve studiu ví co dělají a snaží se zdokonalovat, což jsme po většinu studií neviděli.. Co bychom tak mohli vypíchnout? Super práce se zvukem bicích,snímání kytar i zpěvů, zkrátka komplexní profesionalita. Jo a abych nezapomněl super káva a přátelský přístup. Kdo nezkusí, neví - ale já vím, že my se sem určitě vrátíme!`,
  },
  {
    name: "Jakub Kopřiva",
    year: "2025",
    genre: "Folk",
    text: `Ve studiu jsem začal nahrávat svoje první album. Tahle zkušenost je pro mě nová a díky klukům z Independent Records jednoznačně pozitivní 🙂 Vážím si, že v tomhle pohodovém studiu mají pochopení pro můj styl, líbí se mi společný tvůrčí proces, flexibilita a velká ochota vždycky společně najít čas i způsob nahrávání.`,
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10 sekund
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="scroll-mt-menu mx-auto w-full max-w-4xl px-4 py-10 text-center"
      id="reference"
    >
      <h2 className="mb-1 text-5xl font-bold md:text-primary">
        Reference od našich klientů
      </h2>
      <br></br>
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
            <p className="text-sm text-gray-500">{testimonials[index].genre}</p>
            <p className="text-sm text-gray-500">{testimonials[index].year}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-23 flex justify-center gap-3">
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
