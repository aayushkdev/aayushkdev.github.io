import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative"
    >
      <div className="max-w-4xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <span className="text-indigo-400">Aayush Kumar</span> 👋
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}  
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I love cybersecurity, open-source development, and automation. Currently working on projects involving Python, cybersecurity, and embedded systems while contributing to open source.
        </motion.p>

        {/* Call to Action Buttons (Smooth Scroll) */}
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 text-lg font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 transition-all cursor-pointer"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 text-lg font-semibold text-indigo-500 border border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white transition-all cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Social Links with Instant Scale-Up Effect */}
        <motion.div
          className="mt-8 flex justify-center gap-6 text-2xl text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/aayushkdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0 }} // Instantly scales up
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:aayush214.kumar@gmail.com"
            className="hover:text-indigo-400 transition-all"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0 }} // Instantly scales up
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aayushkdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0 }} // Instantly scales up
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
