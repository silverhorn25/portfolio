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
        <div
          className="md:container md:mx-auto h-screen bg-cover bg-center bg-gray-100"
        >
          <div className="flex justify-end">
            <p className="font-sans font-bold text-lg text-gray mb-4 mt-2 mr-5">
              About Me
            </p>
          </div>
          <div className="shadow-2xl h-5/6 w-4/5 mx-auto flex flex-col md:flex-row rounded-md items-center p-6 bg-gray-200 slide-in">
            <div className="relative w-full md:w-1/4">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6 drop-shadow-2xl absolute md:relative md:top-[-20px]"
              />
            </div>
            <div className="flex flex-col w-full md:w-3/4">
              <p className="font-sans text-lg mt-10 text-justify">
                I'm <span className='font-bold'>Jetro Verdida</span>, a passionate software developer with a knack for
                creating efficient, scalable, and user-friendly applications. With
                a background in <span className='font-bold'>Bachelor of Science in Information Technology</span>, I
                specialize in <span className='font-bold'>Web Development</span> using  <span className='font-bold'>Java Springboot</span> for back-end  and 
                <span className='font-bold'> React Typescript</span> for front -end. I also specialized in <span>Desktop App Development </span>
                using <span className='font-bold'> Electron</span>.
              </p>
              <p className="font-sans text-lg mt-4 text-justify">
                Over the years, I've had the opportunity to work on diverse
                projects, from building robust backend systems to crafting
                seamless user interfaces. My portfolio showcases of my previous
                work contribution, highlighting my ability to solve complex problems, my
                commitment to clean and maintainable code, and my dedication to
                continuous learning. Let's build something amazing together!
              </p>
            </div>
          </div>
          <FloatingButton />
        </div>
      </>
    );
};