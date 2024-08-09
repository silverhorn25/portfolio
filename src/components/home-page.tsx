import React, { useState } from "react";
import { FloatingButton } from "../common/floating-button";
import { Item1, Item2, Item3, Item4 } from "../common/items";
import { Footer } from "../common/footer";
import { useInView } from "react-intersection-observer";

export const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const items = [Item1, Item2, Item3, Item4];


  return (
    <>
      <div
        className="w-full md:container md:mx-auto h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/desktop.jpg')" }}
      >
        <div className="h-screen bg-cover bg-center bg-black bg-opacity-10 bg-opacity-50 dark:bg-opacity-70">
          <div className="flex justify-end">
            <p className="font-sans text-lg text-gray-100 mb-4 mt-2 mr-5">
              Welcome to My Portfolio
            </p>
          </div>
          <div className="flex flex items-center justify-center">
            <div className="flex flex-col">
              <p className="font-sans text-lg text-2xl text-gray-100 font-bold mt-28">
                Hi there! Im
              </p>
              <p className="font-sans text-6xl text-5xl font-bold text-gray-100 mt-10 ml-28 typing-animation">
                Jetro Verdida
              </p>
              <p className="font-sans text-lg text-gray-100 mt-10">
                A passionate software developer with a knack for creating
                efficient, scalable, and user-friendly applications.
              </p>
              <div className="mt-10">
                <a
                  href="/my-resume.pdf"
                  download="resume.pdf"
                  className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:container md:mx-auto h-screen bg-cover bg-center bg-gray-100 dark:bg-dark-grey">
        <div className="flex justify-end">
          <p className="font-sans font-bold text-lg text-gray mb-4 mt-2 mr-5 dark:text-gray-100">
            About Me
          </p>
        </div>
        <div
          className={`shadow-2xl h-5/6 w-4/5 mx-auto flex flex-col md:flex-row rounded-md items-center p-6 bg-gray-200 dark:bg-primary-grey bottom-in`}
        >
          <div className="relative w-full md:w-1/4 dark:opacity-75">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6 drop-shadow-2xl absolute md:relative md:top-[-20px]"
            />
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <p className="font-sans text-lg mt-10 text-justify dark:text-gray-400">
              I'm{" "}
              <span className="font-bold dark:text-gray-100">
                Jetro Verdida
              </span>
              , a passionate software developer with a knack for creating
              efficient, scalable, and user-friendly applications. With a
              background in{" "}
              <span className="font-bold dark:text-gray-100">
                Bachelor of Science in Information Technology
              </span>
              , I specialize in{" "}
              <span className="font-bold dark:text-gray-100">
                Web Development
              </span>{" "}
              from Back-end to
              Front-end. I also specialized in{" "}
              <span className="font-bold dark:text-gray-100">Desktop App Development </span>
              using React Typescript in{" "}
              <span className="font-bold dark:text-gray-100"> Electron</span>.
            </p>
            <p className="font-sans text-lg mt-4 text-justify dark:text-gray-400">
              Over the years, I've had the opportunity to work on diverse
              projects, from building robust backend systems to crafting
              seamless user interfaces. My portfolio showcases of my previous
              work contribution, highlighting my ability to solve complex
              problems, my commitment to clean and maintainable code, and my
              dedication to continuous learning. Let's build something amazing
              together!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:container md:mx-auto h-screen bg-gray-100 flex flex-col items-center gap-4 p-4 dark:bg-dark-grey">
        <div className="relative w-full h-full mx-auto mt-10 ">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((ItemComponent, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex items-center justify-center"
                >
                  <ItemComponent />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute shadow-xl left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full dark:bg-dark-grey"
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
            className="absolute shadow-xl right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 text-white rounded-full dark:bg-dark-grey"
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
      <Footer />
      <FloatingButton />
    </>
  );
};
