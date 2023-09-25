import React, { useState, useEffect } from "react";

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
    <div className="flex animate-carousel gap-4 w-full overflow-x-auto pb-6 pt-1">
      <button onClick={prevImage}>&lt;</button>
      
      <img
        src={images[currentImage]}
        alt={`Clothing ${currentImage + 1}`}
        className="carousel-image w-96"
      />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
};

export {Carousel};
