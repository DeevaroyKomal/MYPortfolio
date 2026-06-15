import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/Theme/ThemeContext";
import { Menu, X } from "lucide-react";
import { BsSun, BsMoon } from "react-icons/bs";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navbarBg =
    theme === "dark"
      ? "bg-black border-b border-purple-900/40"
      : "bg-white border-b border-purple-100";

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-lg transition-all duration-500 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-3 sm:py-4 overflow-x-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer flex items-center"
        >
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
              DK
            </div>
            <span
              className={`text-base sm:text-lg font-bold bg-clip-text bg-linear-to-r from-purple-500 to-purple-700 text-transparent hidden sm:inline group-hover:opacity-80 transition-opacity`}
            >
              Portfolio
            </span>
          </NavLink>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap gap-2 lg:gap-3">
          {navLinks.map(({ name, path }, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 relative
                  ${
                    isActive
                      ? theme === "dark"
                        ? "text-purple-400 bg-purple-950"
                        : "text-purple-600 bg-purple-100"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-purple-400 hover:bg-purple-950/40"
                      : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                  }`
                }
              >
                {name}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 mt-2 md:mt-0 ">
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85, rotate: 20 }}
            whileHover={{ scale: 1.1 }}
            className={`p-2.5 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer
              ${
                theme === "dark"
                  ? "bg-purple-900 text-white hover:shadow-purple-600/30"
                  : "bg-purple-100 text-purple-600 hover:shadow-purple-200"
              }`}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsSun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0, scale: 0 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -180, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BsMoon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85 }}
            className={`md:hidden p-2.5 rounded-lg transition-all duration-300
              ${
                theme === "dark"
                  ? "bg-purple-950 text-purple-300 hover:bg-purple-900"
                  : "bg-purple-50 text-purple-700 hover:bg-purple-100"
              }`}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t transition-colors duration-300
              ${
                theme === "dark"
                  ? "border-purple-900/40 bg-black/90"
                  : "border-purple-100 bg-white/90"
              }`}
          >
            <ul className="flex flex-col gap-2 px-5 sm:px-6 py-4 w-full">
              {navLinks.map(({ name, path }, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 sm:px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-center
                      ${
                        isActive
                          ? theme === "dark"
                            ? "text-purple-400 bg-purple-950"
                            : "text-purple-600 bg-purple-100"
                          : theme === "dark"
                          ? "text-gray-300 hover:text-purple-400 hover:bg-purple-950/40"
                          : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}