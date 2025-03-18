"use client";
import React, { useState, useEffect } from "react";

const images = [
  `/assets/images/studio/mini/11.jpg`,
  `/assets/images/studio/mini/2.jpg`,
  `/assets/images/studio/mini/8.jpg`,
  `/assets/images/studio/mini/9.jpg`,
  `/assets/images/studio/mini/12.jpg`,
  `/assets/images/studio/mini/14.jpg`,
  `/assets/images/studio/mini/15.jpg`,
  `/assets/images/studio/mini/16.jpg`,
  `/assets/images/studio/mini/17.jpg`,
  `/assets/images/studio/mini/18.jpg`,
  `/assets/images/studio/mini/23.jpg`,
  `/assets/images/studio/mini/26.jpg`,
  `/assets/images/studio/mini/29.jpg`,
];

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
