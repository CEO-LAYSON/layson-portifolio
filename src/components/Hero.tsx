import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import myPhoto from "../assets/myphoto.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Layson Gabriel Ndenza
          </motion.h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Software Engineer & Full-Stack Developer
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg">
            Passionate Software Engineer specializing in modern web and mobile
            applications built with cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/Layson_Ndenza_Professional_CV.pdf"
              download
              className="border border-purple-500 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(124, 58, 237, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
              <FiDownload />
            </motion.a>
          </div>
          <div className="flex space-x-4 mt-8 justify-center md:justify-start">
            <motion.a
              href="https://github.com/CEO-LAYSON"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/layson-ndenza-3399b8321"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:laysonndenza@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-white"
            >
              <HiOutlineMail size={24} />
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
              <img
                src={myPhoto}
                alt="Your Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
