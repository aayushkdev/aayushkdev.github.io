import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import menuIcon from "../assets/menuIcon.png";
import closeIcon from "../assets/closeIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-transparent text-white py-4 px-6 flex justify-between items-center z-50">
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="text-2xl font-bold tracking-wide cursor-pointer"
      >
        <span className="text-blue-400">0x</span>
        <span className="text-white">Aayush</span>
      </Link>

      <ul className="hidden md:flex space-x-6 text-lg">
        {["About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300 transition-all"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        <img src={menuOpen ? closeIcon : menuIcon} alt="menu" className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 space-y-6 md:hidden"
          >
            {["About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-lg cursor-pointer hover:text-gray-300 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
