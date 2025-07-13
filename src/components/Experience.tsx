import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    position: "Software Engineer",
    company: "Azania Bank PLC",
    location: "Mawasiliano Towers",
    duration: "2 months, 2024",
    description: [
      "Built an Internal Systems Change Request Management System currently in use.",
      "Collaborated with IT team to streamline reporting and maintenance processes.",
    ],
  },
  {
    position: "Software Developer",
    company: "Tanzania Civil Aviation Authority (TCAA)",
    location: "Dar es Salaam",
    duration: "2 months, 2023",
    description: [
      "Developed web applications using Laravel and PHP.",
      "Gained collaborative development experience within a technical team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-center gap-8`}
            >
              <div
                className={`md:w-5/12 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                } mb-4 md:mb-0`}
              >
                <div className="inline-block p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-lg">
                  <h3 className="text-xl font-bold text-white">
                    {exp.position}
                  </h3>
                  <p className="text-purple-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                </div>
              </div>

              <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white z-10">
                <FaBriefcase size={20} />
              </div>

              <div
                className={`md:w-5/12 ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
