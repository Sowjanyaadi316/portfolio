import profile from "../assets/images/profile.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-8"
    >
     <motion.div
  className="max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 150 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <img
  src={profile}
  alt="Sowjanya Adiraju"
  className="w-72 h-72 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
/>

          {/* Right Side */}
          <div>

            <p className="text-gray-300 leading-8 mb-6">
              I am a B.Tech Information Technology student with a strong
              interest in Full Stack Development and Generative AI. I enjoy
              building scalable web applications and solving real-world
              problems through technology.
            </p>

            <div className="space-y-3">

              <p>
                <span className="font-semibold text-cyan-400">
                  Name:
                </span>{" "}
                Sowjanya Adiraju
              </p>

              <p>
                <span className="font-semibold text-cyan-400">
                  Education:
                </span>{" "}
                B.Tech (Information Technology)
              </p>

              <p>
                <span className="font-semibold text-cyan-400">
                  College:
                </span>{" "}
                Vignan's Institute of Engineering for Women
              </p>

              <p>
                <span className="font-semibold text-cyan-400">
                  Interests:
                </span>{" "}
                Full Stack Development, GenAI, Problem Solving
              </p>

            </div>

          </div>

        </div>

     </motion.div>
    </section>
  );
}

export default About;