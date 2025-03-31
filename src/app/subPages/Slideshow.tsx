"use client";
import React, { useState, useEffect } from "react";

const images = [
  `/assets/images/studio/medium/11.jpg`,
  `/assets/images/studio/medium/9.jpg`,
  `/assets/images/studio/medium/27.jpg`,
  `/assets/images/studio/medium/15.jpg`,
  `/assets/images/studio/medium/17.jpg`,
  `/assets/images/studio/medium/18.jpg`,
  `/assets/images/studio/medium/16.jpg`,
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // New handlers for next/previous
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const rowButton =
    "absolute  top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary  text-white";
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
      <button onClick={handlePrev} className={rowButton + " left-4"}>
        ←
      </button>
      <button onClick={handleNext} className={rowButton + " right-4"}>
        →
      </button>
    </div>
  );
};

export default Slideshow;
