import React, { useState } from "react";
import { FloatingButton } from "../common/floating-button";
import { H1, H2, H3, P1, P2, P3, T1, T2, T3 } from "../common/items";

export const AboutMe: React.FC = () => {
  const [homeSlide, setHomeSlide] = useState(0);
  const [tmSlide, setTmSlide] = useState(0);
  const [portfolioSlide, setPortolioSlide] = useState(0);

  const hSlides = [H1, H2, H3];
  const tSlides = [T1, T2, T3];
  const pSlides = [P1, P2, P3];

  const nextSlide = () => {
    setHomeSlide((prevIndex) => (prevIndex + 1) % hSlides.length);
  };

  const prevSlide = () => {
    setHomeSlide(
      (prevIndex) => (prevIndex - 1 + hSlides.length) % hSlides.length
    );
  };

  const nextTslide = () => {
    setTmSlide((prevIndex) => (prevIndex + 1) % tSlides.length);
  };

  const prevTslide = () => {
    setTmSlide(
      (prevIndex) => (prevIndex - 1 + tSlides.length) % tSlides.length
    );
  };

  const nextPslide = () => {
    setPortolioSlide((prevIndex) => (prevIndex + 1) % pSlides.length);
  };

  const prevPslide = () => {
    setPortolioSlide(
      (prevIndex) => (prevIndex - 1 + pSlides.length) % pSlides.length
    );
  };

  return (
    <>
      <div className="flex h-screen">
        <div
          className="w-1/4 relative bg-cover bg-left"
          style={{ backgroundImage: "url('/bg-side.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 p-4 dark:bg-black dark:bg-opacity-80">
            <h1 className="text-2xl font-bold text-gray-100 ml-20">
              Projects Experience
            </h1>
          </div>
        </div>
        <div className="w-3/4 overflow-y-auto p-4 dark:bg-dark-grey ">
          {/* content 1 */}
          <div className="h-96 bg-white border rounded-lg shadow-xl dark:bg-primary-grey dark:border-gray-900 bottom-in">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${homeSlide * 100}%)` }}
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl dark:bg-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white-"
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
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl dark:bg-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white-900"
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
          <div className="h-96 bg-white border mt-10 rounded-lg shadow-xl dark:bg-primary-grey dark:border-gray-900 bottom-in">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${tmSlide * 100}%)` }}
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl dark:bg-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white-900"
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
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl dark:bg-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white-900"
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
          <div className="h-96 bg-white border mt-10 rounded-lg shadow-xl dark:bg-primary-grey dark:border-gray-900 bottom-in">
            <div className="relative w-full h-full mx-auto mt-10 overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${portfolioSlide * 100}%)` }}
              >
                {pSlides.map((ItemComponent, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex items-center justify-center"
                  >
                    <ItemComponent />
                  </div>
                ))}
              </div>
              <button
                onClick={prevPslide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 rounded-full shadow-xl dark:bg-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white-900"
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
                onClick={nextPslide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full shadow-xl dark:bg-transparent"
              >
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-white-900"
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
