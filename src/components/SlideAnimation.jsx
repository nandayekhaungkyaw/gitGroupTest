import React, { useState } from "react";

const SlideAnimation= () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => prev + 1); // Increment slide
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => Math.max(1, prev - 1)); // Decrement slide but keep it >= 1
  };

  return (
    <div className="relative w-full h-screen bg-gray-200">
      {/* Sliding div */}
      <div
        className={`bg-red-400 w-full absolute z-50 h-[300px] transition-transform duration-500`}
        style={{ transform: `translateX(${(currentSlide - 1) * -100}%)` }}
      >
        Slide {currentSlide}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button
          onClick={handlePreviousSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={handleNextSlide}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideAnimation
