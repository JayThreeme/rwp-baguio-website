import { useState, useEffect } from "react";
import { image1, image2, image3, rwpbaguio } from "../assets";

const Slideshow = () => {
  const images = [image1, image2, image3]; // Replace these with your actual image URLs

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50">
        <img
          src={rwpbaguio}
          alt="logo"
          className="w-2/6 sm:w-6/12 object-contain"
        />
        <h3 className="text-5xl font-bold mb-4">Welcome to our running club</h3>
        <p className="text-xl">Join us on our running journey</p>
      </div>
    </div>
  );
};

export default Slideshow;
