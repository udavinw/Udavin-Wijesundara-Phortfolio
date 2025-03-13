import { motion } from "framer-motion";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 120, 0],
    y: [0, 60, 0],
    rotate: [0, 20, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate2: {
    scale: [1, 1.3, 1],
    x: [0, -130, 0],
    y: [0, -70, 0],
    rotate: [0, -25, 0],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate3: {
    scale: [1, 1.4, 1],
    x: [0, 140, 0],
    y: [0, 80, 0],
    rotate: [0, 30, 0],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate4: {
    scale: [1, 1.5, 1],
    x: [0, -150, 0],
    y: [0, -90, 0],
    rotate: [0, -35, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate5: {
    scale: [1, 1.6, 1],
    x: [0, 160, 0],
    y: [0, 100, 0],
    rotate: [0, 40, 0],
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const BlurBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[120px] opacity-70">
      <motion.div
        className="bg-yellow-500 w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate1"
      />
      <motion.div
        className="bg-orange-500 w-[360px] h-[260px] rounded-full absolute"
        variants={circleVariants}
        animate="animate2"
      />
      <motion.div
        className="bg-green-500 w-[370px] h-[270px] rounded-full absolute"
        variants={circleVariants}
        animate="animate3"
      />
      <motion.div
        className="bg-purple-500 w-[380px] h-[280px] rounded-full absolute"
        variants={circleVariants}
        animate="animate4"
      />
      <motion.div
        className="bg-blue-500 w-[390px] h-[290px] rounded-full absolute"
        variants={circleVariants}
        animate="animate5"
      />
    </div>
  );
};

export default BlurBackground;