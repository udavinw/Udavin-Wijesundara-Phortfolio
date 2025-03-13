import { motion } from "framer-motion";
import { ABOUT_CONTENT } from "../constants";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="px-6 py-16" id="about">
      <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white">About</h1>
      <div className="h-1 w-20 bg-white mb-8"></div>

      <div className="max-w-4xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;