import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/p image/logo.png";

const navlink = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Projects", path: "/projects" },
    { id: 4, title: "Certificate", path: "/certificate" },
    { id: 5, title: "Contact", path: "/contact" },
];

// Fast and Smooth Animation Variants
const navVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1, // Faster cascading
            duration: 0.3, // Reduced duration
            ease: "easeInOut",
        },
    }),
};

const logoVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4, // Faster logo animation
            ease: "easeInOut",
        },
    },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="relative">
            <nav
                className={`w-full fixed top-0 font-semibold left-0 z-[9999] transition-all duration-300 ${
                    scrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"
                } text-white-100`}
                style={{ height: "72px" }}
            >
                <div className="flex items-center justify-between w-11/12 h-full mx-auto md:w-10/12">
                    {/* Animated Logo */}
                    <motion.div
                        className="px-3 py-2 font-semibold"
                        initial="hidden"
                        animate="visible"
                        variants={logoVariant}
                    >
                        <Link to="/">
                            <motion.img
                                src={logo}
                                alt="Logo"
                                className="w-16 h-16 mt-4 rounded-full"
                                initial="hidden"
                                animate="visible"
                                variants={logoVariant}
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden sm:flex lg:gap-x-6 md:gap-x-4 gap-x-2">
                        {navlink.map((item, i) => (
                            <motion.a
                                href={item.path}
                                key={item.id}
                                className={`anime px-3 py-1 transition-all duration-300 rounded-lg ${
                                    scrolled ? "text-white-100" : "text-white-100"
                                }`}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={navVariants}
                            >
                                {item.title}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="flex items-center gap-x-6">
                        <div className="flex text-2xl cursor-pointer sm:hidden text-white-100">
                            {!isOpen ? (
                                <RiMenu2Fill onClick={toggleNav} />
                            ) : (
                                <IoMdClose onClick={toggleNav} />
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <div
                className={`fixed top-[72px] left-0 right-0 w-full bg-white/30 backdrop-blur-lg sm:hidden flex flex-col items-center gap-y-6 shadow-xl transition-all duration-300 z-40 ${
                    isOpen ? "opacity-100 pointer-events-auto py-4" : "opacity-0 pointer-events-none"
                }`}
                style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                }}
            >
                {navlink.map((item, i) => (
                    <motion.a
                        href={item.path}
                        key={item.id}
                        className="px-3 py-1 transition-all duration-300 rounded-lg anime text-white-100"
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={navVariants}
                    >
                        {item.title}
                    </motion.a>
                ))}
            </div>

            {/* Spacing for Main Content */}
            <div className="pt-[72px]">
                {/* Your main content here */}
            </div>
        </section>
    );
};

export default Navbar;
