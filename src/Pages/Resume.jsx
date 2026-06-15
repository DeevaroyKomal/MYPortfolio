import React from "react";
import { Download } from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Resume = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen pt-28 pb-16 px-4 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>

          <p
            className={`text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            To View you can download my resume.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-10">
          <a
            href="./src/assets/KomalResume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Resume;
