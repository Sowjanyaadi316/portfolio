import resume from "../assets/resume/resume.pdf";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white"
    >
      <motion.div
  className="text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
>
        <p className="text-lg text-cyan-400 mb-3">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mb-4">
          Sowjanya Adiraju
        </h1>

        <h2 className="text-2xl text-gray-300 mb-6">
          Ex-SDE Intern@NatWest
          <br />
          <span>Full Stack Developer | GenAI Enthusiast</span>
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400">
          Passionate about building scalable full-stack applications and
          exploring AI-powered solutions.
        </p>

        <div className="mt-10 flex justify-center gap-5">
         <a
  href="#projects"
  className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
>
  View Projects
</a>
          <a
  href={resume}
  download
  className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition"
>
  Download Resume
</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;