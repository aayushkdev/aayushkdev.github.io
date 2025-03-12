import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-extrabold text-indigo-400 mb-6">Contact Me</h1>
      <p className="text-gray-400 mb-10 text-lg text-center max-w-2xl">
        Feel free to reach out to me through any of the following platforms:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
        <ContactCard
          icon={<FaEnvelope className="text-indigo-400 text-3xl" />}
          title="Email"
          text="aayush214.kumar@gmail.com"
          link="mailto:aayush214.kumar@gmail.com"
        />
        <ContactCard
          icon={<FaLinkedin className="text-indigo-400 text-3xl" />}
          title="LinkedIn"
          text="linkedin.com/in/aayushkdev"
          link="https://linkedin.com/in/aayushkdev"
        />
        <ContactCard
          icon={<FaGithub className="text-indigo-400 text-3xl" />}
          title="GitHub"
          text="github.com/aayushkdev"
          link="https://github.com/aayushkdev"
        />
        <ContactCard
          icon={<FaGlobe className="text-indigo-400 text-3xl" />}
          title="Website"
          text={window.location.hostname}
          link={`https://${window.location.hostname}`}
        />
      </div>
    </div>
  );
};

const ContactCard = ({ icon, title, text, link }) => {
  return (
    <div className="bg-gray-900 border border-indigo-500 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      {link ? (
        <a
          href={link}
          className="text-indigo-400 text-lg hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <p className="text-gray-300 text-lg">{text}</p>
      )}
    </div>
  );
};

export default Contact;
