import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-900/80 py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Layson Ndenza
            </h2>
            <p className="text-gray-400 mt-2">
              Software Engineer & Full-Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a
              href="https://github.com/CEO-LAYSON"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/layson-ndenza-3399b8321"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:laysonndenza@gmail.com"
              whileHover={{ y: -3 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <HiOutlineMail size={24} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Layson Gabriel Ndenza. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
