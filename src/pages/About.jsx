// src/About.jsx
import Ashique from '../assets/p image/Ashique.png';
import { Link } from "react-router-dom";
import { FaBirthdayCake, FaGlobe, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaUserGraduate, FaBriefcase } from "react-icons/fa";

const About = () => {
    return (
        <section className="relative w-full py-10 ">
            <div className="w-11/12 mx-auto">
                {/* Title and Description */}
                <header className="mb-5 text-center" data-aos="fade-up" data-aos-duration="600">
                    <h1 className="mb-4 text-4xl font-bold ">ABOUT ME</h1>
                    <p className="max-w-6xl mx-auto text-lg ">
                        I'm a passionate diploma student in Computer Science and Technology with a solid foundation in software development.
                        I am always eager to tackle new challenges and stay updated with emerging technologies.
                    </p>
                </header>

                {/* Main content: Image and Details */}
                <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
                    {/* Left side (Image) */}
                    <div className="relative flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-[25%] lg:max-w-none mt-6 lg:mt-0 z-[1] flex justify-center" data-aos="fade-left" data-aos-duration="600">
                        <img
                            src={Ashique}
                            alt="Profile"
                           className="w-52 sm:w-48 md:w-52 lg:w-full h-auto rounded-full drop-shadow-[0_8px_20px_rgba(255,255,255,0.3)] shadow-xl transform transition-transform duration-500 hover:scale-105 object-cover"
                        />
                    </div>
                    {/* Right side (Text Content) */}
                    <div className="w-full lg:w-8/12" data-aos="fade-right" data-aos-duration="600">
                        <h2 className="mb-6 text-3xl font-semibold ">Web Developer</h2>
                        <p className="mb-8 text-lg ">
                            I specialize in developing responsive and modern websites. With a deep passion for web technologies,
                            I focus on delivering seamless user experiences with a strong understanding of front-end and back-end development.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                            {[
                                { icon: <FaBirthdayCake className="text-gray-500" />, label: "Birthday", value: "25 July 2003" },
                                { icon: <FaUserGraduate className="text-gray-500" />, label: "Age", value: "21" },
                                {
                                    icon: <FaGlobe className="text-gray-500" />,
                                    label: "Website",
                                    value: (
                                        <Link
                                            to="https://www.ashique-portfolio.tech/"
                                            className=" hover:underline"
                                        >
                                            ashique-portfolio.tech
                                        </Link>
                                    )
                                },
                                { icon: <FaBriefcase className="text-gray-500" />, label: "Degree", value: "Diploma in Computer Science" },
                                { icon: <FaPhoneAlt className="text-gray-500" />, label: "Phone", value: "+91-9547694261" },
                                {
                                    icon: <FaEnvelope className="text-gray-500" />,
                                    label: "Email",
                                    value: (
                                        <Link
                                            to="/contact"
                                            className=" hover:underline"
                                        >
                                            ansariazad7864@gmail.com
                                        </Link>
                                    )
                                },
                                { icon: <FaMapMarkerAlt className="text-gray-500" />, label: "City", value: "Asansol, West Bengal, India" },
                                { icon: <FaBriefcase className="text-gray-500" />, label: "Freelance", value: "Available" }
                            ].map((info, index) => (
                                <div key={index} className="flex items-center gap-4 " data-aos="fade-up" data-aos-duration="800">
                                    {info.icon}
                                    <p>
                                        <span className="font-semibold">{info.label}:</span> {info.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Description at the bottom */}
                        <p className="mt-8 text-lg " data-aos="fade-up" data-aos-duration="1000">
                            I am passionate about collaborating on exciting web development projects. I enjoy learning new skills and technologies,
                            and I'm always looking for opportunities to work on innovative projects that challenge my abilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
