import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import udavin from "../assets/udavin-wijesundara.webp";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { clipPath: "inset(0 50% 0 50%)" },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-wrap items-center justify-center text-white px-4 md:px-8">
      <motion.div
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          variants={textVariants}
        >
          {HERO_CONTENT.greeting}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-4"
          variants={textVariants}
        >
          {HERO_CONTENT.introduction}
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-8"
          variants={textVariants}
        >
          {HERO_CONTENT.description}
        </motion.p>
        <motion.a
          href={HERO_CONTENT.resumeLink}
          download
          rel="noopener noreferrer"
          target="_blank"
          className="bg-white text-black py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          variants={textVariants}
        >
          {HERO_CONTENT.resumeLinkText}
        </motion.a>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <motion.img
          src={udavin}
          alt="Udavin Wijesundara"
          className="rounded-3xl shadow-2xl"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
