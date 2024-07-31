import React, { useState } from "react";
import { FloatingButton } from "../common/floating-button";
import { useInView } from "react-intersection-observer";

const Item1: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Typescript</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        I experienced using React Typescript for the front-end, where I designed module UI using Ant Design, implemented some common components and functions.
      </p>
    </div>
  </div>
);

const Item2: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">React Hooks</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Learn about React Hooks and how to use them for managing state and side effects in functional components.
      </p>
    </div>
  </div>
);

const Item3: React.FC = () => (
  <div className="w-full h-80 items-center bg-white border border-gray-200 rounded-lg shadow-2xl md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-40">
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Something Chuy</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Learn about React Hooks and how to use them for managing state and side effects in functional components.
      </p>
    </div>
  </div>
);

const items = [Item1, Item2, Item3];

export const Home: React.FC = () => {
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <>
      <div
        className="md:container md:mx-auto h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/desktop.jpg')" }}
      >
        <div>
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
      <div className="md:container md:mx-auto h-screen bg-cover bg-center bg-gray-100">
        <div className="flex justify-end">
          <p className="font-sans font-bold text-lg text-gray mb-4 mt-2 mr-5">
            About Me
          </p>
        </div>
        <div
          ref={firstRef}
          className={`shadow-2xl h-5/6 w-4/5 mx-auto flex flex-col md:flex-row rounded-md items-center p-6 bg-gray-200 ${
            firstInView ? "animate-fadeIn" : ""
          }`}
        >
          <div className="relative w-full md:w-1/4">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6 drop-shadow-2xl absolute md:relative md:top-[-20px]"
            />
          </div>
          <div className="flex flex-col w-full md:w-3/4">
            <p className="font-sans text-lg mt-10 text-justify">
              I'm <span className="font-bold">Jetro Verdida</span>, a passionate
              software developer with a knack for creating efficient, scalable,
              and user-friendly applications. With a background in{" "}
              <span className="font-bold">
                Bachelor of Science in Information Technology
              </span>
              , I specialize in{" "}
              <span className="font-bold">Web Development</span> using{" "}
              <span className="font-bold">Java Springboot</span> for back-end
              and
              <span className="font-bold"> React Typescript</span> for front
              -end. I also specialized in <span>Desktop App Development </span>
              using <span className="font-bold"> Electron</span>.
            </p>
            <p className="font-sans text-lg mt-4 text-justify">
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
      <div className="md:container md:mx-auto h-screen bg-gray-100 flex flex-col items-center gap-4 p-4">
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
      </div>
      <FloatingButton />
    </>
  );
};
