import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project1 from "../assets/project1.png";

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
  },
  // Add more projects as needed
];

export default function Projects() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
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
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 inline-flex items-center justify-center overflow-hidden rounded-md">
                  <img
                    src={Project1}
                    alt="Project Screenshot"
                    className="max-w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
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
      </div>
    </section>
  );
}
