import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import NbtsImg from "../assets/project1.png";
import BigInstitutionVideo from "../assets/biginstitution-demo.mp4";

const projects = [
  {
    title: "National Blood Management System",
    description:
      "A centralized platform for managing blood transfusion services in Tanzania. Includes donor appointment system and blood inventory management.",
    technologies: [
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "Kafka",
      "PostgreSQL",
    ],
    githubBackend:
      "https://github.com/Mcharolabs/national-blood-management-system.git",
    githubFrontend: "https://github.com/CEO-LAYSON/nbts-appointment-app.git",
    liveLink: "https://nbts-donors-app.netlify.app/",
    image: NbtsImg,
  },
  {
    title: "BigInstitutionfx",
    description:
      "A mobile-first forex learning platform for mentorship and education. Offers subscription-based access to video lessons, interactive dashboards, and community features tailored for forex students.",
    technologies: ["Flutter", "Firebase", "Firestore", "Provider", "REST API"],
    githubFrontend: "https://github.com/CEO-LAYSON/BigInstitutionfx",
    liveLink: "",
    video: BigInstitutionVideo,
  },
];

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const openVideoModal = (videoSrc: string) => {
    setActiveVideo(videoSrc);
    setIsOpen(true);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all group"
            >
              {/* Image or Video */}
              {project.video ? (
                <button
                  onClick={() => openVideoModal(project.video)}
                  className="w-full h-48 bg-black flex items-center justify-center hover:opacity-80 relative overflow-hidden"
                >
                  <video
                    src={project.video}
                    muted
                    className="w-full h-full object-cover"
                    preload="metadata"
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="max-w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              )}

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-900/50 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="mr-1" /> Backend
                    </a>
                  )}
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="mr-1" /> Frontend
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram-style Video Modal */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          {/* Backdrop with subtle blur */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 400 }}
                className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
                style={{
                  // Instagram-like aspect ratio (4:5 is common for portrait)
                  aspectRatio: "9/16",
                  maxHeight: "90vh", // Won't exceed 90% of viewport height
                }}
              >
                {/* Video container with perfect centering */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    src={activeVideo}
                    controls
                    autoPlay
                    className="h-full w-auto max-w-full object-contain"
                    playsInline
                  />
                </div>

                {/* Elegant close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-gray-900/80 hover:bg-gray-800 text-white transition-all"
                  aria-label="Close video"
                >
                  <FaTimes className="text-xl" />
                </button>

                {/* Optional: Add Instagram-like controls overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-center space-x-4">
                    <button className="text-white hover:text-purple-300 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </button>
                    <button className="text-white hover:text-purple-300 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </button>
                    <button className="text-white hover:text-purple-300 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
}
