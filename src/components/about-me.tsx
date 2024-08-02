import React, { useState } from "react";
import { FloatingButton } from "../common/floating-button";
import { H1, H2, H3, T1, T2, T3 } from "../common/items";

export const AboutMe: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hSlides = [H1, H2, H3];
  const tSlides = [T1, T2, T3];

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % hSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + hSlides.length) % hSlides.length
    );
  };

  const nextTslide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % tSlides.length);
  };

  const prevTslide = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + tSlides.length) % tSlides.length
    );
  };

  return (
    <>
      <div className="flex h-screen">
        <div
          className="w-1/4 relative bg-cover bg-left"
          style={{ backgroundImage: "url('/side-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4">
            <h1 className="text-2xl font-bold text-white ml-20">
              Projects Experience
            </h1>
          </div>
        </div>
        <div className="w-3/4 overflow-y-auto p-4">
          {/* content 1 */}
          <div className="h-96 bg-white border rounded-lg shadow-xl">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {hSlides.map((ItemComponent, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center"
                  >
                    <ItemComponent />
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* content 2 */}
          <div className="h-96 bg-white border mt-10 rounded-lg shadow-xl">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {tSlides.map((ItemComponent, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center"
                  >
                    <ItemComponent />
                  </div>
                ))}
              </div>
              <button
                onClick={prevTslide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTslide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* content 3 */}
          {/* <div className="h-96 bg-white border mt-10 rounded-lg shadow-xl">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((ItemComponent, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center"
                  >
                    <ItemComponent />
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div> */}
          {/* content 4 */}
          {/* <div className="h-96 bg-white border mt-10 rounded-lg shadow-xl">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((ItemComponent, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center"
                  >
                    <ItemComponent />
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <FloatingButton />
    </>
  );
};
