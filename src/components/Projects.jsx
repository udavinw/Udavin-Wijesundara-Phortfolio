import { motion } from "framer-motion";
import { PROJECTS } from "../constants";

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", type: "spring", bounce: 0.4 },
  },
};

const Projects = () => {
  return (
    <section className="px-6 py-16" id="work">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white">Work</h1>
      <div className="h-1 w-20 bg-white mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden h-[500px] transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={projectVariants}
          >
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-black/50 text-white">
              <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
              <p className="mb-4 text-lg">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded-full py-2 px-4 text-sm hover:bg-gray-200 transition-colors duration-300 inline-block self-start"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;