import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "⚙️" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "⚡" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Tailwind", icon: "💨" },
    ],
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "SQL", icon: "🗄️" },
      { name: "MySQL", icon: "🐬" },
      { name: "Node.js", icon: "🟢" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "📋" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "💻" },
       { name: "Linux", icon: "🐧" },
    ],
  },
  {
    title: "Computer Science",
    skills: [
      { name: "Data Structures", icon: "🏗️" },
      { name: "Algorithms", icon: "🧠" },
      { name: "Computer Architecture", icon: "🔧" },
      { name: "Operating Systems", icon: "🖥️" },
       { name: "Cloud Computing", icon: "☁️" },
    ],
  },
];

const Skills = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-purple-400" : "text-purple-600";
  const cardBg = isDark
    ? "bg-purple-950/50 border-purple-900/40"
    : "bg-purple-50 border-purple-200";
  const accentBg = isDark ? "bg-purple-900/30" : "bg-purple-100/50";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`${containerBg} min-h-screen transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-16 md:py-24`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent [text-fill-color:transparent] mb-4 leading-snug overflow-visible pb-1 pt-4">
            My Skills
          </h1>

          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className={`text-lg md:text-xl ${textPrimary} max-w-3xl mx-auto`}>
            A comprehensive overview of my technical expertise across different
            domains of software development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ animationDelay: `${0.6 + idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`${cardBg} rounded-2xl border-2 p-8 transition-all duration-300 ${
                  hoveredCard === idx
                    ? isDark
                      ? "border-purple-600 shadow-lg shadow-purple-900/20"
                      : "border-purple-400 shadow-lg shadow-purple-200"
                    : ""
                }`}
              >
                <h2 className={`text-2xl font-bold mb-6 ${textSecondary}`}>
                  {category.title}
                </h2>

                <div className="grid gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`${accentBg} rounded-lg px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105`}
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span
                        className={`font-medium ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 opacity-0 animate-fade-in`}
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/work">
              <button className="bg-purple-600 cursor-pointer hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View My Projects
              </button>
            </Link>

            <Link to="/connect">
              <button
                className={`${
                  isDark
                    ? "border-2 border-purple-400 text-purple-400 hover:bg-purple-950"
                    : "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                } px-8 py-4 cursor-pointer rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1`}
              >
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;