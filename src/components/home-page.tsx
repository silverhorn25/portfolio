import React from 'react';
import { FloatingButton } from '../common/floating-button';

export const Home: React.FC = () => {
    return (
      <>
        <div className="md:container md:mx-auto h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <div>
            <div className="flex justify-end">
              <p className="font-sans text-lg mb-4 mt-2 mr-5">
                Welcome to My Portfolio
              </p>
            </div>
            <div className="flex">
              <div className="shadow-2xl h-96 w-96 flex flex-col justify-center items-center rounded-full ml-20">
                <img
                  src="/images.jpg"
                  alt="Profile"
                  className="w-48 h-48 object-cover rounded-full mb-4"
                />
              </div>
              <div className="flex flex-col ml-20">
                <p className="font-sans text-lg text-2xl font-bold mt-28">
                  Hi there! Im
                </p>
                <p className="font-sans text-lg text-5xl font-bold mt-10">
                  Jetro Verdida
                </p>
                <p className="font-sans text-lg mt-10">
                  A passionate software developer with a knack for creating
                  efficient, scalable, and user-friendly applications.
                </p>
                <div className="mt-10">
                  <button
                    type="button"
                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Resume
                  </button>
                </div>
                <FloatingButton />
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
