import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Vue.js", level: 80 },
  { name: "Flutter & Dart", level: 75 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 70 },
  { name: "Java", level: 75 },
  { name: "Spring Boot", level: 80 },
  { name: "Laravel", level: 70 },
  { name: "MySQL", level: 80 },
  { name: "Git & GitHub", level: 90 },
  { name: "Docker", level: 75 },
  { name: "REST APIs", level: 85 },
];

const softSkills = [
  "Teamwork",
  "Time Management",
  "Problem Solving",
  "Fast Learner",
  "Communication",
  "Adaptability",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gray-800/50 border border-purple-500/30 rounded-full text-gray-300 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-6 text-white">
              Languages
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium">English</span>
                  <span className="text-gray-400">Fluent</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium">Swahili</span>
                  <span className="text-gray-400">Native</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
