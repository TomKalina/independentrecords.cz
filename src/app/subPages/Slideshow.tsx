"use client";
import React, { useState, useEffect } from "react";

const images = [
  "https://www.kindacode.com/wp-content/uploads/2022/07/flower-1.jpeg",
  "https://www.kindacode.com/wp-content/uploads/2022/07/flower-2.jpeg",
  "https://www.kindacode.com/wp-content/uploads/2022/07/flower-3.jpeg",
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [zoomWay, setZoomWay] = useState<"up" | "down">("up");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom((prevZoom) => {
        if (zoomWay === "up" && prevZoom >= 110) {
          setZoomWay("down");
          return prevZoom - 2;
        } else if (zoomWay === "down" && prevZoom <= 100) {
          setZoomWay("up");
          return prevZoom + 2;
        } else {
          return zoomWay === "up" ? prevZoom + 1 : prevZoom - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [zoomWay]);

  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute left-0 top-0 h-full w-full
            ${index === currentSlide ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: `${zoom}%`,
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              transition:
                "background-size 1s ease-in-out, opacity 10s ease-in-out",
            }}
          />
        ))}
      </div>
      currentSlide: {currentSlide}
      zoom: {zoom}
      zoomWay: {zoomWay}
    </>
  );
};

export default Slideshow;
