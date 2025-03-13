import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section className="px-6 py-16" id="experience">
      <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white">
        Work Experience
      </h2>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <motion.div
        className="space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div key={index} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-sm md:w-1/4 mb-2 md:mb-0 p-4">
                {experience.yearRange}
              </div>
              <div className="md:w-3/4 mb-10">
                <div className="max-w-3xl backdrop-blur-3xl p-4 bg-stone-600/10 rounded-lg">
                  <h2 className="text-xl mb-2">{experience.title}</h2>
                  <p className="mb-4 text-sm italic">{experience.location}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {experience.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;