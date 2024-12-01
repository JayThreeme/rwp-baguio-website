import { Outlet } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useState, useEffect } from "react";
import { image1, image2, image3 } from "./assets";

const App = () => {
  const images = [image1, image2, image3]; // Replace these with your actual image URLs

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="relative flex flex-col">
        <div className="relative w-full">
          <NavigationBar />
        </div>
        <div className="relative h-screen w-full overflow-hidden">
          <div className="">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 ">
            <Outlet />
          </div>
        </div>

        <div className="absolute bottom-0 text-center w-full z-20 sm:block hidden">
          All Rights Reserved ©{new Date().getFullYear()} Created by J3
        </div>
      </div>
    </>
  );
};

export default App;
