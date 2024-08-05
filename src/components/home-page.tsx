import React, { useState } from "react";
import { FloatingButton } from "../common/floating-button";
import moment from "moment";
import { Item1, Item2, Item3 } from "../common/items";

export const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const year = moment().format("YYYY");

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const items = [Item1, Item2, Item3];

  return (
    <>
      <div
        className="md:container md:mx-auto h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/desktop.jpg')" }}
      >
        <div className="h-screen bg-cover bg-center bg-black bg-opacity-10 bg-opacity-50 dark:bg-opacity-50">
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
      <div className="md:container md:mx-auto h-screen bg-cover bg-center bg-gray-100 dark:bg-dark-grey">
        <div className="flex justify-end">
          <p className="font-sans font-bold text-lg text-gray mb-4 mt-2 mr-5 dark:text-gray-100">
            About Me
          </p>
        </div>
        <div
          className={`shadow-2xl h-5/6 w-4/5 mx-auto flex flex-col md:flex-row rounded-md items-center p-6 bg-gray-200 dark:bg-primary-grey`}
        >
          <div className="relative w-full md:w-1/4">
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
              using{" "}
              <span className="font-bold dark:text-gray-100">
                Java Springboot
              </span>{" "}
              for back-end and
              <span className="font-bold dark:text-gray-100">
                {" "}
                React Typescript
              </span>{" "}
              for front -end. I also specialized in{" "}
              <span>Desktop App Development </span>
              using{" "}
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
      <div className="md:container md:mx-auto h-screen bg-gray-100 flex flex-col items-center gap-4 p-4 dark:bg-dark-grey">
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
      {/* footer */}
      <div className="w-full h-5/6 bg-gray-800 flex flex-col justify-center items-center">
        <div className="flex justify-between w-64 mt-2">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288d1"
                d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"
              ></path>
              <rect width="4" height="15" x="14" y="19" fill="#fff"></rect>
              <path
                fill="#fff"
                d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"
              ></path>
              <path
                fill="#fff"
                d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"
              ></path>
            </svg>
            <p className="text-gray-100">LinkedIn</p>
          </a>

          {/* ------------- */}
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>
            </svg>
            <p className="text-gray-100">Email</p>
          </a>

          {/* ------------- */}
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
            <p className="text-gray-100">Github</p>
          </a>
        </div>

        <h1 className="text-gray-100 text-lg mt-10 mb-5">
          Alrights Reserved <span>{year}</span>
        </h1>
      </div>
      <FloatingButton />
    </>
  );
};
