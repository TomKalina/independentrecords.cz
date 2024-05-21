"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
  "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
  "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoom, setZoom] = useState(150);
  const [zoomWay, setZoomWay] = useState<"up" | "down">("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Časový interval v milisekundách (3000 ms = 3 sekundy)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((prevZoom) => {
        if (zoomWay === "up" && prevZoom >= 150) {
          setZoomWay("down");
          return prevZoom - 1;
        } else if (zoomWay === "down" && prevZoom <= 100) {
          setZoomWay("up");
          return prevZoom + 1;
        } else {
          return zoomWay === "up" ? prevZoom + 1 : prevZoom - 1;
        }
      });
    }, 500); // Interval pro plynulý přechod

    return () => clearInterval(interval);
  }, [zoomWay]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000
            ${index === currentSlide ? "opacity-100" : "opacity-0"}
            `}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: `${zoom}%`,
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            transition:
              "background-size 0.5s ease-in-out, opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

export default Slideshow;
