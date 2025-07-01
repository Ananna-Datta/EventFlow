import React from "react";
import E1 from "../assets/Home/E1.png";
import E2 from "../assets/Home/E2.png";
import E3 from "../assets/Home/E3.png";
import E4 from "../assets/Home/E4.png";
import E5 from "../assets/Home/E5.png";
import E6 from "../assets/Home/E6.png";
import E7 from "../assets/Home/E7.png";
import E8 from "../assets/Home/E8.png";

const images = [E1, E2, E3, E4, E5, E6, E7, E8];

const PhotoGallery = () => {
  return (
    <section className="bg-[#CFDDFF] py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">📸 Photo Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
