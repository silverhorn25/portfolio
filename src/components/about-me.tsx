import React, { useEffect, useState } from 'react';
import { FloatingButton } from '../common/floating-button';

export const AboutMe: React.FC = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Triggering the fade-in effect after a short delay to allow DOM rendering
        setTimeout(() => {
            setFadeIn(true);
        }, 100);
    }, []);

    return (
      <>
        <div className="md:container md:mx-auto h-screen bg-cover bg-center" style={{ backgroundImage: "url('/portfolio-bg.jpg')" }}>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
          <div className="shadow-2xl h-5/6  w-4/5 flex-col justify-center rounded-md items-center ml-40 overflow-visible bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <img
              src="/images.jpg"
              alt="Profile"
              className="w-48 h-48 object-cover rounded-md mb-4 float-left"
            />
            <p className="font-sans text-lg mt-10">
              Im [Your Name], a passionate software developer with a knack for
              creating efficient, scalable, and user-friendly applications. With
              a background in [mention your field or degree, e.g., Computer
              Science, Software Engineering], I specialize in [mention your
              specializations, e.g., web development, mobile app development,
              data analysis] and have a strong proficiency in languages such as
              [list some programming languages, e.g., JavaScript, Python, Java].
              Over the years, Ive had the opportunity to work on diverse
              projects, from building robust backend systems to crafting
              seamless user interfaces. My portfolio showcases a selection of my
              work, highlighting my ability to solve complex problems, my
              commitment to clean and maintainable code, and my dedication to
              continuous learning. Explore my projects to see how Ive applied my
              skills to real-world challenges and how I can bring value to your
              next project. Lets build something amazing together!
            </p>
          </div>
          <FloatingButton />
        </div>
      </>
    );
};