"use client";
import React, { useState, useEffect } from "react";

const images = Array.from(
  { length: 29 },
  (_, i) => `/assets/images/studio/${i + 1}.jpg`,
);

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: index === currentSlide ? "scale(1.05)" : "scale(1)",
            transition: "transform 8s ease-in-out, opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
