import React, { useState } from "react";

import b1 from "../assets/Banner/1.png";
import b2 from "../assets/Banner/2.png";
import b3 from "../assets/Banner/3.jpg";

const images = [b1, b2, b3];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-[100vh] overflow-hidden"
      onClick={nextImage} // 🔸 Click anywhere on the banner to change slide
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Banner;
