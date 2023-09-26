import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';


const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
 
  // Add more image paths as needed
];

const Carousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds (adjust the interval as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex animate-carousel w-full pb-6 pt-1">
      <button className="text-white animate-pulse" onClick={prevImage}><ChevronLeft /></button>
      
      <img
        src={images[currentImage]}
        alt={`Clothing ${currentImage + 1}`}
        className="carousel-image w-96 h-96"
      />
      <button className="text-white animate-pulse" onClick={nextImage}><ChevronRight /></button>
    </div>
  );
};

export {Carousel};
