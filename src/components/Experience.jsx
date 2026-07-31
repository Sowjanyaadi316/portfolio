function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>


        <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

          <div className="flex flex-col md:flex-row justify-between mb-6">

            <div>
              <h3 className="text-2xl font-semibold text-cyan-400">
                Software Development Engineer Intern
              </h3>

              <p className="text-gray-300 mt-2">
                NatWest Group
              </p>
            </div>


            <p className="text-gray-400 mt-3 md:mt-0">
              May 2026 - July 2026
            </p>

          </div>


          <ul className="list-disc list-inside text-gray-300 space-y-3">

            <li>
              Led the rollout of the Kiro AI Assistant by creating onboarding documentation for installation, configuration, and key features including MCP integration, steering files, and agent hooks.
            </li>

            <li>
              Developed a Bash shell script to automate daily synchronization of shared Git configuration files, reducing manual effort and improving team productivity.
            </li>

            <li>
             Integrated SAST (Static Application Security Testing) into CI/CD pipelines to detect vulnerabilities early and strengthen application security.
            </li>

            <li>
             Collaborated with developers to streamline development workflows through automation, documentation, and DevOps best practices.
            </li>

          </ul>


          <div className="mt-6 flex flex-wrap gap-3">

            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
             AI Tooling: Kiro, Model Context Protocol (MCP), Steering Files, Agent Hooks
            </span>

            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
              CI/CD: GitLab CI/CD, YAML Pipelines
            </span>

            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
              Security: SAST, Vulnerability Reporting
            </span>

            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
              Version Control: GitLab
            </span>

            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
              Scripting: Bash / Shell
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;