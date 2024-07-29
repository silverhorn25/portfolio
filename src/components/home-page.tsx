import React, { useState } from "react";
import { FloatingButton } from "../common/floating-button";

export const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="md:container md:mx-auto h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/portfolio-bg.jpg')" }}
      >
        <div>
          <div className="flex justify-end">
            <p className="font-sans text-lg mb-4 mt-2 mr-5">
              Welcome to My Portfolio
            </p>
          </div>
          <div className="flex">
            <div className="shadow-2xl h-96 w-96 flex flex-col justify-center items-center rounded-full ml-20 fade-in">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-80 h-80 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col ml-20">
              <p className="font-sans text-lg text-2xl font-bold mt-28">
                Hi there! Im
              </p>
              <p className="font-sans text-6xl text-5xl font-bold mt-10 ml-28 typing-animation">
                Jetro Verdida
              </p>
              <p className="font-sans text-lg mt-10">
                A passionate software developer with a knack for creating
                efficient, scalable, and user-friendly applications.
              </p>
              <div className="mt-10">
                <button
                  type="button"
                  onClick={handleDownloadClick}
                  className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  Download Resume
                </button>
              </div>
            </div>
            <FloatingButton />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <button
              type="button"
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
            >
              <a
                href="/my-resume.pdf"
                download="resume.pdf"
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
              >
                <img className="object-cover" src="/pdf.png" alt="PDF" />
                Download as PDF
              </a>
            </button>
            <button
              type="button"
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 ml-10"
            >
              <a
                href="/my-resume.docx"
                download="resume.docx"
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
              >
                <img className="object-cover" src="/word.png" alt="PDF" />
                Download as Docs
              </a>
            </button>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-300 text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
