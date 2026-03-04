import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaGithub } from 'react-icons/fa';
import Ashique from '../../assets/p image/Ashique.png';
import resume from '../../assets/resume/Ashique Hussain Ansari_Resume.pdf'; // Import the resume file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HeroSection = () => {
    const roles = ['Frontend Developer', 'React Developer'];
    const [roleIndex, setRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a default duration for animations

        const handleTyping = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                    setCurrentText(roles[roleIndex].substring(0, charIndex));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            } else {
                if (charIndex < roles[roleIndex].length) {
                    setCharIndex((prev) => prev + 1);
                    setCurrentText(roles[roleIndex].substring(0, charIndex + 1));
                } else {
                    setIsDeleting(true);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 160);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section className="relative w-full px-4 text-white-100 py-14 lg:px-0 z-1">
            <div className="flex flex-col items-center max-w-6xl gap-8 mx-auto lg:flex-row lg:gap-16">
                {/* Left Side: Text Content */}
                <div className="flex-1 text-center lg:text-left" data-aos="fade-up" data-aos-delay="200">
                    <h4 className="text-lg sm:text-2xl">
                        Hey there, I'm{' '}
                        <span className="font-serif font-semibold text-rose-400 sm:text-2xl">
                            Ashique Hussain Ansari
                        </span>
                    </h4>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">
                        I'm{' '}
                        <span className="relative font-bold text-green-400">
                            {currentText}
                            <span className="animate-blink">|</span>
                        </span>
                    </h1>
                    <p
                        className="max-w-2xl mx-auto mt-4 text-base text-gray-300 sm:text-lg lg:mx-0"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                         2+ years of experience specializing in React.js and modern frontend technologies including Tailwind CSS and Framer Motion. Expert in crafting responsive, user-centric web applications with clean architecture and seamless UI/UX. Strong frontend capabilities complemented by backend fundamentals, enabling end-to-end project delivery. Proven track record in building scalable, performance-optimized solutions that drive user engagement and business results.
                    </p>
                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6 lg:justify-start">
                        <Link
                            to={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-2xl hover:scale-105 hover:rotate-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            View Resume
                            <FaEye className="ml-2" />
                        </Link>
                        <Link
                            to="https://github.com/AshiqueHussain00"
                            className="inline-flex items-center px-6 py-2 text-sm font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-teal-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1 focus:outline-none focus:ring-4 focus:ring-green-300"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            View GitHub Profile
                            <FaGithub className="ml-2" />
                        </Link>
                    </div>
                </div>
                {/* Right Side: Image */}
                {/* Right Side: Image */}
                <div
                    className="relative flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-[25%] lg:max-w-none mt-6 lg:mt-0 z-[1] flex justify-center"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <img
                        className="w-52 sm:w-48 md:w-52 lg:w-full h-auto rounded-full drop-shadow-[0_8px_20px_rgba(255,255,255,0.3)] shadow-xl transform transition-transform duration-500 hover:scale-105 object-cover"
                        src={Ashique}
                        alt="My Pic"
                    />
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
