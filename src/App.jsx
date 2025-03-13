import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TerminalView from "./components/TerminalView"; // New Terminal UI

function App() {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <Navbar setTerminalMode={setTerminalMode} terminalMode={terminalMode} />
      {terminalMode ? (
        <TerminalView /> // Display terminal UI when active
      ) : (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
