import React from "react";
import { FloatingButton } from "../common/floating-button";

export const Skills: React.FC = () => {
  return (
    <>
      <div
        className="md:container md:mx-auto h-screen bg-gray-100 flex flex-col items-center gap-4 p-4 bg-black bg-opacity-8"
        style={{
          backgroundImage: "url('/skill-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="ml-10 mt-5 bottom-in">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/spring.png"
                alt=""
              />
            </a>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Java Springboot
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have experience using Spring for the back-end in our Project
                POS. I had 1 year of experience where I implemented CRUD, API
                security chain handler, file structuring, log rotation, and some
                generic functions.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-5 bottom-in">
          <div className="w-full h-full flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://www.typescriptlang.org/docs/handbook/react.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/react-ts.jpg"
                alt=""
              />
            </a>

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                React Typescript
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have experience using React TypeScript for the front-end,
                where I designed module UI using Ant Design, implemented some
                common components and functions.
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-5 bottom-in">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <a
              href="https://www.electronjs.org/docs/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/electron.png"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Electron
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have experience with Electron, where I created Desktop
                Applications for our POS App. These apps are used in dining
                restaurants, Unilab, boutiques, and other places. The language
                used in Electron projects is also React TypeScript.
              </p>
            </div>
          </div>
        </div>
        <FloatingButton />
      </div>
    </>
  );
};
