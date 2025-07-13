import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:laysonndenza@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out to me for any questions or opportunities.
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-full">
                  <HiOutlineMail size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Email</h4>
                  <a
                    href="mailto:laysonndenza@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    laysonndenza@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Phone</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+255759907751"
                      className="text-white hover:text-purple-400 transition-colors block"
                    >
                      +255 759 907 751
                    </a>
                    <a
                      href="tel:+255629686467"
                      className="text-white hover:text-purple-400 transition-colors block"
                    >
                      +255 629 686 467
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium">Location</h4>
                  <p className="text-white">Dodoma, Tanzania</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href="https://linkedin.com/in/layson-ndenza-3399b8321"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-purple-500/10 hover:text-purple-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/CEO-LAYSON"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 bg-gray-800 rounded-full hover:bg-purple-500/10 hover:text-purple-400 transition-colors"
                >
                  <FaGithub size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white transition-all"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium w-full md:w-auto"
              >
                <span>Send Message</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
