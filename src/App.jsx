import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BlurBackground } from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Testimonial = lazy(() => import("./components/Testimonial"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BlurBackground />
      <Navbar />
      <main className="antialiased max-w-7xl mx-auto relative z-10">
          <Hero />
          <Projects />
          <About />
          <Experience />
          {/* <Testimonial /> */}
          <Contact />
      </main>
    </motion.div>
  );
};

export default App;
