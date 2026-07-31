import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          I'm open to discussing software development opportunities,
          full-stack projects, and innovative ideas.
        </p>


        <div className="flex justify-center gap-8">

          {/* Email */}
          <a
            href="mailto:sowjanyaadiraju316@gmail.com"
            className="text-gray-300 hover:text-cyan-400 transition text-3xl"
          >
            <FaEnvelope />
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/Sowjanyaadi316"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition text-3xl"
          >
            <FaGithub />
          </a>


          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sowjanyaadiraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition text-3xl"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;