import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { img } from "framer-motion/client";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";


const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-purple-400" : "text-purple-600";
  const cardBg = isDark
    ? "bg-purple-950 hover:bg-purple-900/50"
    : "bg-purple-50 hover:bg-purple-100";
  const borderColor = isDark ? "border-purple-900/40" : "border-purple-100";

  const projects = [
    {
      title: "Crypto-Hunt",
      desc: "A Full-Stack Cryptocurrency Analysis and Prediction System Using Machine Learning",
      img: image2,
      git: "https://github.com/DeevaroyKomal/crypto-hunt",
      tech: ["React", "Python", "Firebase", "Flask API"],
    },
    {
      title: "Detection Window",
      desc: "An AI Based Detection Window uses your webcam to detect objects in real-time.",
      img: image4,
      git: "https://github.com/DeevaroyKomal/Project",
      tech: ["NextJS 14", "Tailwind CSS", "TensorFlow.js"],
    },
    {
      title: "Virtual Medical Assistant",
      desc: "AI-powered Image Analysis for detecting medical conditions  along with a chatbot integration for answering health-related queries.",
      img: image1,
      git: "https://github.com/DeevaroyKomal/Coding-Aspirants",
      tech: ["Python", "Gemini AI", "Streamlit"],
    },
    {
      title: "Task Management Application",
      desc: "A simple and interactive web-based Task Manager that helps users organize their daily activities efficiently.",
      img: image3,
      git: "https://github.com/KomalDeevaoy/TaskManagerApp",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "My Portfolio",
      desc: "A website in which I showcase my projects, skills, and passion for building impactful web experiences.",
      img: image5,
      git: "https://github.com/DeevaroyKomal/MYPortfolio ",
      tech: ["React", "Framer Motion", "Tailwind"],
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-linear-to-br from-purple-950/10 via-transparent to-black/30"
            : "bg-linear-to-br from-purple-50/50 via-transparent to-purple-100/20"
        }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${
                hoveredIndex === index
                  ? "scale-105 -translate-y-3 shadow-2xl"
                  : "hover:-translate-y-2"
              } ${cardBg} group relative`}
            >
              <div className="relative h-56 overflow-hidden bg-linear-to-b from-purple-500/10 to-transparent">
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredIndex === index
                      ? "bg-black/40 opacity-100"
                      : "bg-black/0 opacity-0"
                  }`}
                ></div>
              </div>

              <div className="p-6 flex flex-col justify-between h-70">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${textPrimary}`}>
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-purple-900/50 text-purple-300 border border-purple-700/50"
                          : "bg-purple-100 text-purple-700 border border-purple-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">

                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 transform ${
                      hoveredIndex === index ? "scale-105" : "scale-100"
                    } ${
                      isDark
                        ? "border-purple-400 text-purple-400 hover:bg-purple-950/50 hover:border-purple-300"
                        : "border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700"
                    }`}
                  >
                    <FaGithub className="text-sm" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
