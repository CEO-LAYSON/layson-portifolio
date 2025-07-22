import { motion } from "framer-motion";
import myPhoto2 from "../assets/myphoto2.png";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 inline-block">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg rotate-6"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden border-2 border-purple-500/30">
                <img
                  src={myPhoto2}
                  alt="Your Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Who am I?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm Layson Gabriel Ndenza, A passionate and results-driven Full
              Stack Software Developer with proven experience in building modern
              web and mobile applications. Proficient in React.js, Vue.js,
              Flutter with Dart, Node.js, Spring Boot, and Laravel. Skilled in
              developing full-stack solutions and deploying scalable
              applications on cloud platforms like AWS. Known for
              problem-solving, fast learning, and a strong ability to
              collaborate in team-oriented environments. Actively seeking
              professional opportunities to deliver impactful software solutions
              across various industries.
            </p>
            <p className="text-gray-300 mb-6">
              I'm adept at building and deploying full-stack applications on
              cloud platforms like AWS. I'm eager to apply and expand these
              skills in a professional and collaborative environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-medium text-purple-400 mb-2">Education</h4>
                <p className="text-gray-300">
                  <span className="font-semibold">
                    Bachelor of Science in Software Engineering
                  </span>
                  <br />
                  University of Dodoma (UDOM), 2021 – 2025
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h4 className="font-medium text-purple-400 mb-2">
                  Final Year Project
                </h4>
                <p className="text-gray-300">
                  Development of Centralized Blood Transfusion Service in
                  Tanzania –
                  <a
                    href="https://nbts-donors-app.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:underline ml-1"
                  >
                    View Project
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
