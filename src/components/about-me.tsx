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
        <div
        className={`md:container md:mx-auto h-screen ${
            fadeIn ? 'fade-in' : ''
        }`}
        >
        <div className="shadow-2xl h-5/6  w-4/5 flex-col justify-center rounded-md items-center ml-40 overflow-visible">
            <img
            src="/images.jpg"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-md mb-4 float-left"
            />
            <p className="font-sans text-lg mt-10">
            Im [Your Name], a passionate software developer with a knack for
            creating efficient, scalable, and user-friendly applications. With a
            background in [mention your field or degree, e.g., Computer Science,
            Software Engineering], I specialize in [mention your specializations,
            e.g., web development, mobile app development, data analysis] and have
            a strong proficiency in languages such as [list some programming
            languages, e.g., JavaScript, Python, Java]. Over the years, Ive had
            the opportunity to work on diverse projects, from building robust
            backend systems to crafting seamless user interfaces. My portfolio
            showcases a selection of my work, highlighting my ability to solve
            complex problems, my commitment to clean and maintainable code, and my
            dedication to continuous learning. Explore my projects to see how Ive
            applied my skills to real-world challenges and how I can bring value
            to your next project. Lets build something amazing together!
        </p>
        </div>
        <FloatingButton />
        </div>
    );
};