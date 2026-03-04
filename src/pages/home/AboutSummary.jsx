import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaEnvelope, FaPhone, FaUserCheck } from "react-icons/fa";
import about from "../../assets/p image/about.gif";
import { Link } from "react-router-dom";

const AboutSummary = () => {
    return (
        <div className="px-6 py-12 text-white-100 sm:px-12 md:px-20 lg:px-32">
            <motion.div
                className="flex flex-col items-center justify-between gap-8 mx-auto max-w-7xl md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Image Section */}
                <motion.div
                    className="flex justify-center w-full md:w-1/3"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img
                        src={about}
                        alt="Developer working"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="w-full text-center md:w-2/3 md:text-left"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="mb-4 text-3xl font-bold">ABOUT</h1>

                    <p className="mb-6 text-lg leading-relaxed">
                        I am Diploma in Computer Science with expertise in modern web development
                        technologies. Skilled in creating responsive, scalable applications
                        and eager to collaborate on innovative projects.
                    </p>

                    {/* Responsive Contact Section */}
                    <div className="flex flex-col justify-center gap-6 sm:flex-row sm:flex-wrap md:justify-start">
                        <p className="flex items-center gap-2">
                            <FaGlobe className="text-blue-500" />
                            <span>
                                <strong>Website: </strong>
                                <Link to="https://www.ashique-portfolio.info/"  className=" hover:underline">
                                    ashique-portfolio.info
                                </Link>
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-red-500" />
                            <span>
                                <strong>Email: </strong>
                                <Link
                                    to="/contact"
                                    className=" hover:underline"
                                >
                                    ansariazad7864@gmail.com
                                </Link>

                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhone className="text-green-500" />
                            <span>
                                <strong>Phone:</strong> +91-9547694261
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <FaUserCheck className="text-yellow-500" />
                            <span>
                                <strong>Freelance:</strong> Available
                            </span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutSummary;
