import React, { useState } from 'react';
    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
    ];
  
  export const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    return (
      <div className="relative w-full max-w-lg mx-auto mt-10">
        <div className="overflow-hidden relative h-64">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center h-64 bg-gray-200"
              >
                <h2 className="text-2xl font-bold">{item}</h2>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white"
        >
          Next
        </button>
      </div>
    );
  };