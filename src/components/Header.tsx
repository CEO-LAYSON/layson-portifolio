import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-900/95 to-purple-900/95 backdrop-blur-lg py-3 shadow-xl"
          : "bg-gradient-to-r from-indigo-900 to-purple-900 py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <motion.a
            href="#hero"
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Layson Ndenza
          </motion.a>
          <motion.span
            className="ml-2 text-xs text-purple-200 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full-Stack Developer
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-purple-100 hover:text-white text-lg font-medium group transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </motion.div>
            )
          )}

          {/* Social Icons */}
          <div className="flex space-x-5 ml-6">
            {[
              {
                icon: <FaGithub size={20} />,
                url: "https://github.com/CEO-LAYSON",
                tooltip: "GitHub",
              },
              {
                icon: <FaLinkedin size={20} />,
                url: "https://linkedin.com/in/layson-ndenza-3399b8321",
                tooltip: "LinkedIn",
              },
              {
                icon: <HiOutlineMail size={22} />,
                url: "mailto:laysonndenza@gmail.com",
                tooltip: "Email",
              },
              {
                icon: <IoDocumentTextOutline size={22} />,
                url: "#",
                tooltip: "Resume",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="relative group"
              >
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-amber-400 transition-colors duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-amber-400/20">
                  {social.tooltip}
                </span>
              </motion.div>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white focus:outline-none z-60"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <FiX size={28} className="text-amber-400" />
          ) : (
            <FiMenu
              size={28}
              className="text-purple-100 hover:text-amber-400 transition-colors"
            />
          )}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden fixed inset-0 bg-gradient-to-b from-indigo-900 to-purple-900 backdrop-blur-xl pt-24 px-6 z-50"
          >
            <div className="flex flex-col space-y-8 items-center">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-2xl font-medium text-purple-100 hover:text-amber-400 py-2 px-6 rounded-lg transition-colors w-full text-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    whileHover={{
                      scale: 1.05,
                      color: "#f59e0b",
                    }}
                  >
                    {item}
                  </motion.a>
                )
              )}

              <motion.div
                className="flex space-x-8 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  {
                    icon: <FaGithub size={24} />,
                    url: "https://github.com/CEO-LAYSON",
                  },
                  {
                    icon: <FaLinkedin size={24} />,
                    url: "https://linkedin.com/in/layson-ndenza-3399b8321",
                  },
                  {
                    icon: <HiOutlineMail size={26} />,
                    url: "mailto:laysonndenza@gmail.com",
                  },
                  {
                    icon: <IoDocumentTextOutline size={26} />,
                    url: "#",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-amber-400 p-2 rounded-full bg-purple-800/50 transition-colors duration-300"
                    whileHover={{
                      y: -3,
                      scale: 1.1,
                      backgroundColor: "rgba(245, 158, 11, 0.2)",
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
