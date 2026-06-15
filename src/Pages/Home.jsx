import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaPython,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-purple-400" : "text-purple-600";

  const roles = [
    {
      icon: FaCode,
      title: "Full Stack Developer",
      desc: "Building complete web solutions",
    },
    {
      icon: FaGraduationCap,
      title: "DSA Problem Solver",
      desc: "Solving complex algorithms",
    },
    {
      icon: FaPython,
      title: "AIML Enthusiast",
      desc: "Exploring artificial intelligence and machine learning",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"
                }`}
            >
              Hello, I'm{" "}
              <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                Deevaroy Komal
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${textSecondary}`}
            >
              Full Stack Developer | Aspiring SDE
            </p>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${textPrimary}`}
            >
              I'm a passionate{" "}
              <span className="font-semibold">Software Development Engineer(SDE)</span>{" "}
              with a strong interest in building scalable web applications and solving real-world problems. Currently i am Exploring {" "}
              <span className="font-semibold">Artificial Intelligence</span>, {" "}
              <span className="font-semibold">Machine Learning</span> {" "}
              while continuously improving my problem-solving skills through{" "}
              <span className="font-semibold">Data Structure & Algorithm</span>{" "}
              . I enjoy learning new technologies and turning ideas into impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/work">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${isDark
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                    }`}
                >
                  My Works
                </button>
              </Link>

              <Link to="/contact">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer ${isDark
                    ? "border-purple-400 text-purple-400 hover:bg-purple-950"
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                    }`}
                >
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8">
            <div
              className={`relative w-48 h-56 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border-4 ${isDark ? "border-purple-900/40" : "border-purple-200"
                } shadow-2xl`}
            >
              <img
                src=".\src\assets\IMG.jpg"
                alt="Deevaroy Komal"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isDark
                      ? "bg-purple-950 hover:bg-purple-900/80"
                      : "bg-purple-100 hover:bg-purple-200"
                      }`}
                  >
                    <Icon className={`text-xl sm:text-2xl ${textSecondary}`} />
                    <div>
                      <h4
                        className={`font-bold text-base sm:text-lg ${isDark ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {role.title}
                      </h4>
                      <p
                        className={`text-sm sm:text-base ${textPrimary} leading-snug`}
                      >
                        {role.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;