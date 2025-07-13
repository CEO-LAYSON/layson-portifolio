import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#hero"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          whileHover={{ scale: 1.05 }}
        >
          Layson Ndenza
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05, color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            )
          )}
          <div className="flex space-x-4 ml-4">
            <motion.a
              href="https://github.com/CEO-LAYSON"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-300 hover:text-white"
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/layson-ndenza-3399b8321"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md p-4 rounded-b-lg"
          >
            <div className="flex flex-col space-y-4">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white py-2 px-4 rounded transition-colors"
                    whileHover={{ scale: 1.02, color: "#ffffff" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <div className="flex space-x-4 pt-2 justify-center">
                <a
                  href="https://github.com/CEO-LAYSON"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={20}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/layson-ndenza-3399b8321"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={20}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
                <a href="mailto:laysonndenza@gmail.com">
                  <HiOutlineMail
                    size={20}
                    className="text-gray-300 hover:text-white"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
