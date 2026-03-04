import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-white-100 bg-gradient-to-r from-gray-800 via-gray-900 to-black-900">
      <motion.div
        className="container flex flex-col items-center mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Name Section */}
        <motion.h2
          className="text-3xl font-bold text-blue-400"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Ashique Hussain Ansari
        </motion.h2>
        <motion.p
          className="text-sm text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Web Developer | Freelancer | Creative Enthusiast
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            to="https://github.com/AshiqueHussain00"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ashique-hussain-553166251/"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </Link>
          {/* <Link
            to="/twitter"
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaTwitter size={28} />
          </Link> */}
          <Link
            to="#"
            onClick={() => (window.location.href = "mailto:ansariazad7864@gmail.com")}
            className="text-gray-400 transition-all duration-300 hover:text-blue-400"
          >
            <FaEnvelope size={28} />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="pt-4 mt-8 text-center border-t border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Ashique Hussain Ansari. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
