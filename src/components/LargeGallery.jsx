import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { largeData } from "../data/largeImage";

const LargeGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Each slide shows 3 images → so 12 / 3 = 4 dots
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(largeData.length / itemsPerSlide);

  // Slice images based on currentIndex
  const currentImages = largeData.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <>
      {/* IMAGES */}
      <div className="max-w-screen flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 px-4 gap-10">
          
          {/* LEFT = BIG IMAGE */}
          <div>
            <img
              src={currentImages[0].src}
              alt=""
              className="rounded-lg w-full"
            />
          </div>

          {/* RIGHT = 2 SMALL IMAGES */}
          <div className="grid lg:grid-rows-2 gap-8">
            {currentImages.slice(1).map((img) => (
              <img key={img.id} src={img.src} alt="" className="rounded-lg" />
            ))}
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-9 mb-9">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <GoDotFill
            key={index}
            className={`text-2xl cursor-pointer transition ${
              currentIndex === index
                ? "text-red-600"
                : "text-gray-300 hover:text-red-700"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default LargeGallery;
