import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      </div>

      
    </div>
  );
};

export default Skills;
