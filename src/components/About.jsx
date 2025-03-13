const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="max-w-3xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-400">
          About Me
        </h2>

        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
          I'm <strong>Aayush Kumar</strong>, a first-year Computer Science student at <strong>VIT Vellore</strong>, passionate about
          <strong> cybersecurity, open-source development, and automation</strong>.
          I love <strong>tinkering with hardware</strong> and building projects using <strong>Raspberry Pi and ESP32</strong>.
          I’ve contributed to open-source projects, freelanced in <strong>automation and Discord bot development</strong>,
          and I’m constantly exploring new technologies to build impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
