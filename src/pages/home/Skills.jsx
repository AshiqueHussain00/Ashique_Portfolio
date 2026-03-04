import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDatabase,
  FaProjectDiagram,
  FaUserTie,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const skillsData = [
    {
      name: "HTML5",
      level: 90,
      icon: <FaHtml5 size={40} className="text-orange-500" />,
    },
    {
      name: "CSS3",
      level: 85,
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      level: 75,
      icon: <FaJsSquare size={40} className="text-yellow-500" />,
    },
    {
      name: "Vite + ReactJS",
      level: 80,
      icon: <FaReact size={40} className="text-cyan-500" />,
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <SiTailwindcss size={40} className="text-cyan-500" />,
    },
    {
      name: "Python",
      level: 80,
      icon: <FaPython size={40} className="text-yellow-500" />,
    },
    {
      name: "MySQL",
      level: 70,
      icon: <FaDatabase size={40} className="text-blue-600" />,
    },
    {
      name: "Project Management",
      level: 85,
      icon: <FaProjectDiagram size={40} className="text-green-500" />,
    },
  ];

  const softSkillsData = [
    {
      name: "Adaptability",
      level: 90,
      icon: <FaUserTie size={40} className="text-blue-700" />,
    },
    {
      name: "Leadership",
      level: 85,
      icon: <FaUserTie size={40} className="text-indigo-700" />,
    },
    {
      name: "Multi-Tasking",
      level: 80,
      icon: <FaUserTie size={40} className="text-purple-700" />,
    },
    {
      name: "Teamwork",
      level: 95,
      icon: <FaUserTie size={40} className="text-teal-700" />,
    },
    {
      name: "Project Management",
      level: 85,
      icon: <FaProjectDiagram size={40} className="text-green-600" />,
    },
  ];

  return (
    <section ref={skillsRef} className="w-full -z-10">
      {hasAnimated && (
        <div className="w-10/12 mx-auto ">
          <h1 className="mb-4 text-2xl font-bold text-center md:text-3xl">
            My Skills
          </h1>
          <div className="flex flex-col items-center w-full max-w-6xl gap-6 mx-auto lg:gap-16 lg:px-8 text-white-100 xmd:flex-row skills md:gap-20">
            {/* Left side: Linear skill bars */}
            <motion.div
              className="w-[95%] xs:w-[80%] xmd:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ul className="flex flex-col gap-y-6">
                {skillsData.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="gap-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex p-2 transition-all duration-500 transform rounded-full shadow-lg hover:scale-105 hover:shadow-blue-500">
                      <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white-100 sm:w-12 sm:h-12">
                        {skill.icon}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-sans text-sm sm:text-base">
                          {skill.name}
                        </h3>
                        <div className="h-2 mt-2 bg-gray-700 border border-gray-800 rounded shadow-lg w-[13rem] xxs:w-[15rem] xsm:w-[18rem] sm:w-[24rem] smd:w-[30rem] xmd:w-[16rem] xl:w-[20rem]">
                          <motion.div
                            className="h-full bg-blue-500"
                            style={{ width: `${skill.level}%` }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5 }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right side: Circular progress bars */}
            <motion.div
              className="w-[95%] xs:w-[80%] xmd:w-1/2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-8 xs:grid-cols-3 xmd:grid-cols-2 xl:grid-cols-3">
                {softSkillsData.map((softSkill, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="p-4 flex flex-col items-center h-[160px] xmd:h-[170px] w-[120px] mmd:w-[150px] xl:w-auto  transition-all transform rounded-lg shadow-lg duration-500 hover:scale-105 hover:shadow-blue-500">
                      <div className="relative flex items-center justify-center w-20 h-20 mmd:w-24 mmd:h-24">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 36 36"
                          className="circular-progress"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            stroke="#2d2d2d"
                            strokeWidth="3"
                            fill="none"
                          />
                          <motion.circle
                            cx="18"
                            cy="18"
                            r="15.915"
                            stroke="#4A90E2"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={`${
                              (softSkill.level * 2 * Math.PI * 15.915) / 100
                            }, 1000`}
                            strokeDashoffset="25.1327"
                            initial={{ strokeDasharray: "0, 1000" }}
                            animate={{
                              strokeDasharray: `${
                                (softSkill.level * 2 * Math.PI * 15.915) / 100
                              }, 1000`,
                            }}
                            transition={{ duration: 2.5 }}
                          />
                        </svg>
                        <div className="absolute flex items-center justify-center w-10 h-10 bg-opacity-50 rounded-full bg-black-900 text-white-100">
                          {softSkill.icon}
                        </div>
                      </div>
                      <p className="mt-2 font-sans text-sm text-center text-white-100">
                        {softSkill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
