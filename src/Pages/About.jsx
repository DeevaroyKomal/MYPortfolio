import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaArrowRight } from "react-icons/fa";
import csa from "../assets/CSA.jpg";
import youngTurks from "../assets/YoungTurks.jpg";
import oracle from "../assets/oracle.jpg";
import contributor from "../assets/contributor.jpg";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-purple-950/40" : "bg-purple-50";
  const borderColor = isDark ? "border-purple-900/40" : "border-purple-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
          ? "bg-linear-to-br from-purple-950/10 via-transparent to-black/30"
          : "bg-linear-to-br from-purple-50/50 via-transparent to-purple-100/20"
          }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-purple-600 mx-auto rounded-full mb-6"></div>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            Driven by curiosity and a passion for technology, I am constantly
            learning, building, and growing as a developer.
          </p>
        </div>


        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Welcome to My Journey
          </h2>

          <p className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I'm{" "}
            <span className="font-semibold text-purple-500">
              Deevaroy Komal
            </span>
            , a Computer Science and Engineering student with a strong
            foundation in software development and a passion for creating
            scalable, user-centric solutions. My journey started with
            programming fundamentals and Data Structures & Algorithms, helping
            me develop analytical thinking and efficient problem-solving skills.
          </p>

          <p className={`text-lg leading-relaxed ${textPrimary}`}>
            Over time, I expanded my expertise into front-end and back-end
            development, gaining hands-on experience in building complete web
            applications. I am committed to improving my technical abilities,
            collaborating on meaningful projects, and preparing myself for a
            successful career in software engineering.
          </p>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Certifications and Achievements
          </h2>

          <div className="space-y-12">

            <div className="flex flex-col lg:flex-row items-center gap-8">

              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>
                  ServiceNow Certified System Administrator
                </h3>

                <p className={`${textPrimary}`}>
                  Learned how to manage and customize the ServiceNow platform, create workflows, handle incidents, and streamline IT service management processes.
                </p>
              </div>


              <div className="shrink-0">
                <img
                  src={csa}
                  alt="CSA Certificate"
                  className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg border border-purple-200"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">

              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>
                  Naukri Campus Young Turks 2025
                </h3>

                <p className={`${textPrimary}`}>
                  Achieved a 96.98 percentile nationwide in aptitude, logical reasoning, and verbal ability.
                </p>
              </div>


              <div className="shrink-0">
                <img
                  src={youngTurks}
                  alt="YoungTurks Certificate"
                  className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg border border-purple-200"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">

              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>
                  Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
                </h3>

                <p className={`${textPrimary}`}>
                  Learned the fundamentals of Generative AI, Large Language Models (LLMs), prompt engineering, Retrieval-Augmented Generation (RAG), and deploying AI solutions using Oracle Cloud Infrastructure (OCI).
                </p>
              </div>


              <div className="shrink-0">
                <img
                  src={oracle}
                  alt="Oracle Certificate"
                  className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg border border-purple-200"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">

              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${headingColor}`}>
                  Girl Script Summer of Code Contributor
                </h3>

                <p className={`${textPrimary}`}>
                  Contributed to open-source projects, collaborated with developers, and gained hands-on experience in real-world software development practices.
                </p>
              </div>


              <div className="shrink-0">
                <img
                  src={contributor}
                  alt="Contributor Certificate"
                  className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg border border-purple-200"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="text-center">
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Interested to learn more about my work?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${isDark
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-600/50"
                : "bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-purple-600/30"
                }`}
            >
              View My Projects <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
