import projects from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20 px-8"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
  key={project.title}
  className="bg-slate-900 p-6 rounded-xl 
  hover:-translate-y-2 transition duration-300 
  shadow-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                {project.title}
              </h3>


              <p className="text-gray-300 mb-5">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mb-5">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                >
                  GitHub
                </a>


                <a
                  href={project.demo}
                  className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
                >
                  Live Demo
                </a>

              </div>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;