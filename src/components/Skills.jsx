import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Java",
        "JavaScript",
        "C",
        "SQL"
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "React.js"
      ],
    },

    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ],
    },

    {
      title: "Database & Tools",
      skills: [
        "MongoDB",
        "MySQL",
        "Git",
        "GitHub",
      ],
    },

    {
      title: "Other Interests",
      skills: [
        "Generative AI",
        "LLMs",
        "RAG",
      ],
    },
  ];


  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-8"
    >

      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>


        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              className="bg-slate-950 p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
            >

              <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
                {category.title}
              </h3>


              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => (

                  <motion.span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full"
                    whileHover={{
                      scale: 1.1
                    }}
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;