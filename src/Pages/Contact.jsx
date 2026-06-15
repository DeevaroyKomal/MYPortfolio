import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/Theme/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen pt-28 md:pt-32 pb-20 px-6 transition-colors duration-300 ${isDark ? "bg-black" : "bg-white"
        }`}
    > <div className="max-w-6xl mx-auto">

        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"
            }`}
        >
          Get In{" "} <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
            Touch </span> </h1>

        <p
          className={`text-lg md:text-xl leading-relaxed mb-16 max-w-5xl ${isDark ? "text-gray-400" : "text-gray-600"
            }`}
        >
          I'm passionate about learning, building innovative solutions, and connecting with like-minded people in the tech community. Whether you have an opportunity, a project idea, or simply want to connect, feel free to reach out.
        </p>


        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2
              className={`text-2xl font-semibold mb-8 ${isDark ? "text-white" : "text-gray-900"
                }`}
            >
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <Mail className="w-6 h-6 text-purple-500 shrink-0" />

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <a
                    href="mailto:komaldeevaroy@gmail.com"
                    className={`text-lg md:text-xl font-medium hover:text-purple-500 transition-colors break-all ${isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                  >
                    komaldeevaroy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Phone className="w-6 h-6 text-purple-500 shrink-0" />

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <p
                    className={`text-lg md:text-xl font-medium ${isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                  >
                    +91 91215 42598
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2
              className={`text-2xl font-semibold mb-8 ${isDark ? "text-white" : "text-gray-900"
                }`}
            >
              Connect With Me
            </h2>

            <div className="flex gap-8">
              <a
                href="https://github.com/DeevaroyKomal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:scale-110 transition-transform duration-300"
              >
                <FaGithub size={36} />
              </a>

              <a
                href="https://www.linkedin.com/in/komal-deevaroy-661752279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:scale-110 transition-transform duration-300"
              >
                <FaLinkedin size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
